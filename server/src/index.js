import express from 'express';
import render from './helpers/render'

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const html = render(req);

  res.send(html);
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
