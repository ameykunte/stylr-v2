// CHATGPT CODE FOR RECOMMENDATIONS

const openai = require('openai')
const fs = require('fs')

// First, set up your OpenAI API key
openai.api_key = ''

// Read the JSON file containing the inputs
const inputs = JSON.parse(fs.readFileSync('inputs.json', 'utf8'))

// Define a function to generate recommendations for a single input
const generateRecommendation = async (inputJson) => {
  const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${openai.api_key}`,
    },
    body: JSON.stringify({
      prompt: JSON.stringify(inputJson),
      max_tokens: 50,
      n: 1,
      stop: null,
      temperature: 0.5,
    }),
  })
  const data = await response.json()
  const recommendation = data.choices[0].text.trim()
  return recommendation
}

// Use Promise.all to generate recommendations for all inputs in parallel
Promise.all(inputs.map(generateRecommendation)).then((recommendations) => {
  // Combine the recommendations into a single string
  const combinedRecommendations = recommendations.join(' ')

  // Count how many times each input appears in the combined recommendations
  const inputCounts = {}
  inputs.forEach((inputJson) => {
    const inputStr = JSON.stringify(inputJson)
    const count = (combinedRecommendations.match(new RegExp(inputStr, 'g')) || []).length
    inputCounts[inputStr] = count
  })

  // Filter the recommendations based on how many of the inputs they match
  const filteredRecommendations = recommendations.filter((recommendation) => {
    let matches = 0
    for (const inputStr in inputCounts) {
      if (recommendation.includes(inputStr)) {
        matches += inputCounts[inputStr]
      }
    }
    return matches >= inputs.length
  })

  // Write the filtered recommendations to a JSON file
  const output = JSON.stringify({ recommendations: filteredRecommendations })
  fs.writeFileSync('filtered_recommendations.json', output)

  console.log(`Filtered recommendations written to 'filtered_recommendations.json'`)
})
