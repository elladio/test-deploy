const express = require('express');
const app = express();
const PORT = process.env.PORT || 4423;
const DATABASE_URL = process.env.DATABASE_URL

app.get('/', (request, response) => {
    response.send('it liiiiives!')
  })
  
  app.get('/dburl', (request, response) => {
    response.send(`My connection string is: ${process.env.DATABASE_URL}`)
  });


  app.listen(PORT, () => {
    console.log(`✅ PORT: ${PORT} 🌟`); //completely optional
  });