import express from 'express'

const app = express();
app.use(express.json());

const user = [{
	username: 'bobesponja', 
	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
}];
const tweet = [{
	username: "bobesponja",
  tweet: "eu amo o hub"
}]

app.post('/sign-up', (req, res) => {
	const newUser = req.body
  user.push(newUser);
  res.send("OK");
});
app.post('/tweets', (req, res) => {
	const pessoa = req.body
    
  pessoas.push(pessoa);
  res.send(pessoa);
});

app.get('/tweets', (req, res) => {
  res.send(pessoas);
});

app.listen(5000);
