const db = [{
    name: 'Levis Dark Wash Cotton Blend Slim Fit Mens Jeans',
    price: '₹3,654',
    url: 'https://m.media-amazon.com/images/I/51U9bomkMcL._UL1000_.jpg',
    link: 'https://www.amazon.in/Levis-Cotton-Blend-Jeans-Size_36/dp/B0BWN9R65K/ref=sr_1_10?crid=SRTTD63XUJL0&keywords=men%27s+slim+fit+dark+wash+jeans&qid=1682130704&sprefix=men+s+slim+fit+dark+wash+jeans%2Caps%2C217&sr=8-10'
},
{
    name: 'Red Tape Mens Sneakers',
    price: '₹1,269',
    url: 'https://m.media-amazon.com/images/I/51qKGRqcaUS._UL1500_.jpg',
    link: 'https://www.amazon.in/Red-Tape-RTE314-Sneakers-6-RTE3144/dp/B093BL34X5/ref=sr_1_31?crid=2ZSG8J1A7OJ67&keywords=mens+white+sneakers&qid=1682131664&sprefix=mens+white+sneakers%2Caps%2C181&sr=8-31'
},
{
    name: 'Jockey Mens Regular Fit T-Shirt',
    price: '₹1,229',
    url: 'https://m.media-amazon.com/images/I/71XceJ4NRDL._UL1500_.jpg',
    link: 'https://www.amazon.in/Jockey-Regular-Breathable-Microfibre-MV15_White_XL/dp/B09J8B1DRF/ref=sr_1_24?keywords=mens+plain+white+tshirt&qid=1682131798&refinements=p_36%3A4595087031&rnid=4595083031&s=apparel&sprefix=mens+plain+white+%2Caps%2C183&sr=1-24'
},
{
    name: 'Colorplus Men Trousers',
    price: '₹1,259',
    url: 'https://m.media-amazon.com/images/I/71oiQDkuq3L._UL1500_.jpg',
    link: 'https://www.amazon.in/ColorPlus-Mens-Chinos-COTT00383-H5_Medium-Khaki_30W/dp/B085JFSVLR/ref=sr_1_46?keywords=mens+khaki+chinos&qid=1682131547&sprefix=men%27s+khaki+chi%2Caps%2C178&sr=8-46'
},
{
    name: 'Allen Solly Mens Regular Sweatpants',
    price: '₹870.49',
    url: 'https://m.media-amazon.com/images/I/61piiUvVbqS._UL1500_.jpg',
    link: 'https://www.amazon.in/Allen-Solly-Regular-Sweatpants-AYJGCURGFS00282_Grey_32/dp/B095F1YZS4/ref=sr_1_8?crid=18TG90PDBUPVA&keywords=mens+grey+sweatpants&qid=1682131889&s=apparel&sprefix=mens+grey+sweatpants%2Capparel%2C189&sr=1-8'
},
{
    name: 'Liberty Men 2042-05 N Formal Shoes',
    price: '₹1,599',
    url: 'https://m.media-amazon.com/images/I/81mV1zVPdXL._UL1500_.jpg',
    link: 'https://www.amazon.in/Gliders-Liberty-2042-05-Shoes-10-2042042100450/dp/B075CYWXX8/ref=sr_1_17?keywords=mens+black+dress+shoes&qid=1682131952&s=apparel&sprefix=mens+black+dress+%2Capparel%2C179&sr=1-17'
},
{
    name: 'GESSATI Stylish Slim Fit Full Sleeves Button Up Collar Cotton Shirt for Men',
    price: '₹829',
    url: 'https://m.media-amazon.com/images/I/71wCf5kXsWL._UL1500_.jpg',
    link: 'https://www.amazon.in/GESSATI-Cotton-Stylish-Sleeves-Blue_XL/dp/B09QKQNKK6/ref=sr_1_48?crid=2C8DIB4M4YDUZ&keywords=mens+blue+button-up+shirt&qid=1682132090&s=apparel&sprefix=mens+blue+button-up+shir%2Capparel%2C182&sr=1-48'
},
{
    name: 'Van Heusen Mens Regular Shirt',
    price: '₹1,469',
    url: 'https://m.media-amazon.com/images/I/61AZSnDhr-S._UL1500_.jpg',
    link: 'https://www.amazon.in/Van-Heusen-Regular-Shirt-VHSFLCUFU37018_White/dp/B093C283RS/ref=sr_1_19?crid=1WEY3FMTGQMZ8&keywords=mens+white+button-up+shirt&qid=1682132267&refinements=p_36%3A4595087031&rnid=4595083031&s=apparel&sprefix=mens+whit+button-up+shirt%2Capparel%2C204&sr=1-19'
},
{
    name: 'Leather Retail Mens Regular Jacket',
    price: '₹1,519',
    url: 'https://m.media-amazon.com/images/I/71TH-lEHqYL._UL1500_.jpg',
    link: 'https://www.amazon.in/Leather-Retail-Black-Plain-Jacket/dp/B07RG3RKD8/ref=sr_1_29?crid=3AWC36NTR2QFP&keywords=mens+black+leather+jacket&qid=1682132433&s=apparel&sprefix=mens+black+leather+jacket%2Capparel%2C220&sr=1-29'
},
{
    name: 'Cotton Grey Color Men Oversized Hoodies',
    price: '₹1,049.00',
    url: 'https://m.media-amazon.com/images/I/71f13NqMn7L._UL1440_.jpg',
    link: 'https://www.amazon.in/Souled-Store-Solids-Melange-Oversized/dp/B0BVBNDM9K/ref=sr_1_9?crid=2JIO04WB1P8IP&keywords=mens+grey+hoodie&qid=1682132516&refinements=p_n_feature_nineteen_browse-bin%3A27064186031&rnid=11301356031&s=apparel&sprefix=mens+grey+hoodie%2Capparel%2C179&sr=1-9'
},
{
    name: 'Diverse Men Round Neck Full Sleeve Sweatshirt',
    price: ' ₹669',
    url: 'https://m.media-amazon.com/images/I/71kwTuvyuQL._UL1500_.jpg',
    link: 'https://www.amazon.in/Diverse-Mens-Cotton-Knitwear-DCMSSF01RC11L35-4275G_Navy_L/dp/B08JJ62XKH/ref=sr_1_17?crid=NRPML6UOMCKU&keywords=mens+navy+blue+sweater&qid=1682132590&s=apparel&sprefix=mens+navy+blue+sweater%2Capparel%2C178&sr=1-17'
},
{
    name: 'Arrow Mens Slim Fit Formal Shirt',
    price: '₹1,219',
    url: 'https://m.media-amazon.com/images/I/71xZ+0GsjVL._UL1500_.jpg',
    link: 'https://www.amazon.in/Arrow-Mens-Formal-Shirt-ARADOSH0934_Light/dp/B0BT1R34TQ/ref=sr_1_9?crid=40Y0LKVIOZO8&keywords=mens+blue+dress+shirt&qid=1682132671&s=apparel&sprefix=mens+blue+dress+shir%2Capparel%2C185&sr=1-9'
},
{
    name: 'Van Heusen Mens Regular Fit Polo Shirt',
    price: '₹997',
    url: 'https://m.media-amazon.com/images/I/61x1OCuKF8L._UL1500_.jpg',
    link: 'https://www.amazon.in/Van-Heusen-Athleisure-Regular-60032_White_Large/dp/B07QN6LCD7/ref=sr_1_12?crid=2K6WQKLTQDLDT&keywords=mens+white+polo+shirt&qid=1682133018&s=apparel&sprefix=mens+white+polo+shirt%2Capparel%2C192&sr=1-12'
},
{
    name: 'Regular Fit Oxford Solid Casual Shirt',
    price: '₹899',
    url: 'https://m.media-amazon.com/images/I/610GHNtYNdL._UL1500_.jpg',
    link: 'https://www.amazon.in/UrbanMark-Sleeves-Regular-Shirt-Light-Blue_8905723059163/dp/B0BGVZ16XC/ref=sr_1_16?crid=1KEQCQWUVJF1&keywords=mens+blue+oxford+shirt&qid=1682133096&s=apparel&sprefix=mens+blue+oxford+shir%2Capparel%2C179&sr=1-16'
},
{
    name: 'Jack & Jones Mens Denim Jacket',
    price: '₹1,799.55',
    url: 'https://m.media-amazon.com/images/I/81qAVRwwn4L._UL1500_.jpg',
    link: 'https://www.amazon.in/Jack-Jones-Solid-Casual-Jacket/dp/B07N8NQ6MT/ref=sr_1_28?crid=X89MHHEYVTPH&keywords=mens+denim+jacket&qid=1682133184&refinements=p_36%3A4595088031&rnid=4595083031&s=apparel&sprefix=mens+denim+jacket%2Capparel%2C180&sr=1-28'
},
{
    name: 'Bacca Bucci Mens Running Shoe',
    price: '₹1,199',
    url: 'https://m.media-amazon.com/images/I/71Jrab3AGCL._UL1200_.jpg',
    link: 'https://www.amazon.in/Bacca-Lightweight-Sneakers-Footwear-Athletic/dp/B07R95TVRH/ref=sr_1_8?crid=TDWJ8CVSDOO9&keywords=mens+grey+running+shoes&qid=1682133273&refinements=p_36%3A4595087031&rnid=4595083031&s=apparel&sprefix=mens+grey+running+shoes+%2Capparel%2C178&sr=1-8'
},
{
    name: 'Mens Leather Loafers',
    price: '₹989.64',
    url: 'https://m.media-amazon.com/images/I/411RA-uoeKL.jpg',
    link: 'https://www.amazon.in/Franco-Leone-Leather-Loafers-Moccasins/dp/B071XC6Y6Q/ref=sr_1_54?keywords=mens+brown+loafers&qid=1682133323&s=apparel&sprefix=mens+brown+loa%2Capparel%2C182&sr=1-54'
},
// other items...
]

export default db;