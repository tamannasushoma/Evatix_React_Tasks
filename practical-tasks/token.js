const express = require('express');
const cors = require('cors')
const auth = express();

auth.use(cors());

auth.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});

auth.listen(8080, () => console.log('API is running on http://localhost:8080/login'));