import openai
import json

# First, set up your OpenAI API key
openai.api_key = "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"

# Load the JSON file containing the inputs
with open("inputs.json", "r") as f:
    inputs = json.load(f)

# Define a list to store the recommendations for each input
recommendations = []

# Loop through the inputs and generate recommendations for each one
for input_json in inputs:
    response = openai.Completion.create(
        engine="davinci",
        prompt=json.dumps(input_json),
        max_tokens=50,
        n=1,
        stop=None,
        temperature=0.5,
    )
    recommendation = response.choices[0].text.strip()
    recommendations.append(recommendation)

# Combine the recommendations into a single string
combined_recommendations = " ".join(recommendations)

# Count how many times each input appears in the combined recommendations
input_counts = {}
for input_json in inputs:
    input_str = json.dumps(input_json)
    count = combined_recommendations.count(input_str)
    input_counts[input_str] = count

# Filter the recommendations based on how many of the inputs they match
filtered_recommendations = []
for recommendation in recommendations:
    matches = 0
    for input_str, count in input_counts.items():
        if input_str in recommendation:
            matches += count
    if matches >= len(inputs):
        filtered_recommendations.append(recommendation)

# Print the filtered recommendations
for recommendation in filtered_recommendations:
    print(recommendation)
