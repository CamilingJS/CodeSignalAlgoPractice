const tweets = [
  {day: 'Monday', text: 'Im tired'},
  {day: 'Monday', text: 'Need coffee'},
  {day: 'Tuesday', text: 'Feeling better'},
  {day: 'Friday', text: 'Ready to party'},
  {day: 'Friday', text: 'Lost my phone...'}
]

//{Monday: [text1, text2], Tuesday:[text3]}
const tweetsByDay = {};
for (let tweet of tweets) {
  console.log(tweet.day);
  console.log(tweet.text)
  if(tweetsByDay[tweet.day]){
      tweetsByDay[tweet.day].push(tweet.text)
  } else {
      tweetsByDay[tweet.day] = [tweet.text];
  }
}

console.log(tweetsByDay);