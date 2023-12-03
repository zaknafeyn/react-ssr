import 'babel-polyfill';
import express from 'express';
import render from './helpers/render'
import createStore from './helpers/createStore'

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();
  
  // Some logic to initialize store 
  // and load data int store


  const html = render(req, store);
  res.send(html);
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
