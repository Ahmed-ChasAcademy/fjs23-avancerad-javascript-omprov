// 8.1  (1p) Använd filter för att returnera en ny array "updatedTweets" utan kommentaren med id 827364 (1p)

const tweets = [
  { text: 'Quantum computing breakthrough doubles processing power.', id: 907543 },
  { text: 'Mars rover discovers signs of ancient water streams.', id: 315234 },
  { text: 'New AI algorithm can predict weather changes with 90% accuracy.', id: 827364 },
  { text: 'World’s first space hotel slated to open in 2030.', id: 462738 },
  { text: 'Deep sea drones reveal mysterious structures at the bottom of the Pacific.', id: 583902 }
];

// Din kod här:

const filteredTweets = tweets.filter(tweet => tweet.id != 827364)
console.log(filteredTweets)



// 8.2 (2p) Använd map för att skapa en ny array "tweetsHtml" med endast texten från varje tweet inom <li>-taggar (utgå från updatedTweets-arrayen)
// Omvandla arrayen till en sträng med metoden join('') på arrayen.
// Visa den genererade listan med tweets på sidan inuti <ul id="tweets"></ul>  (skapa HTML-elementet med JavaScript eller lägg till dem i HTML-filen)

// Din kod här:

function tweetshtml(array){
  const tweetsList = document.getElementById("tweets")
  const tweetEl = document.createElement("li")


  for (let i = 0; i < array.length; i++){
    tweetEl.innerText = "hello"
    tweetsList.append(tweetEl)
  }
}

tweetshtml(tweets)




// Test
// [
//   { text: 'Elon Musk is ...', id: 523423 },
//   { text: 'The future of AI ...', id: 2039842 },
//   { text: 'SpaceX is planning human Mars missions...', id: 123523 },
//   { text: 'The future is now: Neuralink’s ...', id: 542328 }
// ]