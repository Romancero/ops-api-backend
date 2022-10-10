const express = require('express');
const cors = require('cors');
const logger = require('./loggerMiddleware');

const app = express();

app.use(cors());

app.use(express.json());

app.use(logger);

let pages = [
  {
    id: 1,
    content: 'home',
  },
  {
    id: 2,
    content: 'schools',
  },
  {
    id: 3,
    content: 'events',
  },
  {
    id: 4,
    content: 'novelties',
  },
  {
    id: 5,
    content: 'contact',
  },
];

app.get('/', (request, response) => {
  response.send('<h1>Welcome to the site!</h1>');
});

app.get('/api/pages', (request, response) => {
  response.json(pages);
});

app.get('/api/pages/:id', (request, response) => {
  const id = Number(request.params.id);
  const page = pages.find(page => page.id === id);

  if (page) {
    response.json(page);
  } else {
    response.status(404).json({
      message: 'Page not found',
    });
  }
});

app.use((request, response) => {
  response.status(404).json({
    error: 'Not found',
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`server listening on port: ${PORT}`);
});