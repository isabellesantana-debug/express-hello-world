const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('This is the Express Hello world example');
});


app.get('/meunome', (req, res) => {
  res.send('Meu nome é Isabelle Da Silva Santana');
});


app.get('/tico', (req, res) => {
  res.send('teco');
});


app.get('/pokemons', (req, res) => {
  const pokemonsAsh = [
    "Caterpie",
    "Pidgeotto",
    "Bulbasaur",
    "Charmander",
    "Squirtle",
    "Krabby",
    "Raticate",
    "Primeape",
    "Muk",
    "Tauros"
  ];
  res.json(pokemonsAsh);
});


app.post('/series', (req, res) => {
  const minhasSeries = [
    "Breaking Bad",
    "Stranger Things",
    "The Office"
  ];
  res.json(minhasSeries);
});


app.get('/bug', (req, res) => {
  throw new Error('Simulação de bug crítico em produção!');
});


app.get('/externo', async (req, res) => {
  try {
    const response = await fetch('https://typicode.com');
    
    if (!response.ok) {
      return res.status(response.status).json({ erro: 'Não foi possível consultar a API externa' });
    }
    
    const dados = await response.json();
    res.json({
      mensagem: "Dados obtidos com sucesso da API pública externa!",
      dadosExternos: dados
    });
  } catch (error) {
    res.status(500).json({ erro: 'Erro interno ao tentar consumir a API externa', detalhe: error.message });
  }


  
});

app.listen(port, () => {
  console.log(`Aplicação rodando perfeitamente na porta ${port}`);
});


app.get('/meunome', (req, res) => {
  res.send('Meu nome é Isabelle Santana'); 
});
