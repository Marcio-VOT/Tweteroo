import express from 'express'
import cors from 'cors'

const PORT = 5000;
const app = express();

app.use(express.json());
app.use(cors());

const userList = [{
	username: 'bobesponja', 
	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
}];
let tweet = [{
	username: "bobesponja",
  avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  tweet: "eu amo o hub"
}];

app.post('/sign-up', (req, res) => {
	const newUser = req.body;

  const dup = userList.find((user)=> user.username === newUser.username);

  !dup ? handleNewUser(): res.send("UNAUTHORIZED");;

  function handleNewUser(){
    userList.push(newUser);
    console.log(userList);
    res.send("OK");
  }
});

app.post('/tweets', (req, res) => {
  const userPost = req.body

  const isUser = userList.find((user)=> user.username === userPost.username);

  isUser ? handleUserPost(): res.send("ALREADYTAKEN");

  function handleUserPost(){
    const username = userPost.username;
    const avatar = (userList.find((user)=> user.username === userPost.username )).avatar;
    const  tweet = userPost.tweet;
    const newPost = {
        username,
        avatar,
        tweet
      };
    tweet.push(newPost);
    if(tweet.length > 10)
      tweet = tweet.slice(tweet.length-10, tweet.length);
    res.send("OK")
  }
    
});

app.get('/tweets', (req, res) => {
  res.send(tweet);
});

app.listen(PORT);
