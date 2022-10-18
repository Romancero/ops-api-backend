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
    path: '/',
    page: 'Home',
    icon: 'fa-solid fa-house',
  },
  {
    id: 2,
    path: '/schools',
    page: 'Schools',
    icon: 'fa-solid fa-school',
  },
  {
    id: 3,
    path: '/events',
    page: 'Events',
    icon: 'fa-regular fa-calendar-days',
  },
  {
    id: 4,
    path: '/novelties',
    page: 'Novelties',
    icon: 'fa-solid fa-calendar-day',
  },
  {
    id: 5,
    path: '/contact',
    page: 'Contact',
    icon: 'fa-solid fa-envelope',
  },
];

//new Date().toISOString()

let schoolEvents = [
  {
    id: 1,
    title: 'Fiesta de Egresados PROMO-22',
    startDate: '2019-05-30T18:39:34.091Z',
    finishDate: '2019-05-30T18:39:34.091Z',
    description: ['Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'],
    schools: ['E.E.S.T. N°14', 'E.E.S.T. N°7', 'E.E.S.T. N°3'],
    organization: ['The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'],
    blocks: ['Morbi ut metus eu sem dapibus mattis.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Praesent accumsan neque eget erat mollis, eget dictum felis porta.'],
    blocksDescription: ['Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', 'Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', 'Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'],
  },
  {
    id: 2,
    title: 'Fiesta de Primavera',
    startDate: '2019-05-30T18:39:34.091Z',
    finishDate: '2019-05-30T18:39:34.091Z',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    schools: ['E.E.S.T. N°14', 'E.E.S.T. N°7', 'E.E.S.T. N°3'],
    organization: ['The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'],
    blocks: ['Morbi ut metus eu sem dapibus mattis.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Praesent accumsan neque eget erat mollis, eget dictum felis porta.'],
    blocksDescription: ['Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', 'Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', 'Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'],
  },
  {
    id: 3,
    title: 'Acto del Día Nacional de la Memoria por la Verdad y la Justicia',
    startDate: '2019-05-30T18:39:34.091Z',
    finishDate: '2019-05-30T18:39:34.091Z',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    schools: ['E.E.S.T. N°14', 'E.E.S.T. N°7', 'E.E.S.T. N°3'],
    organization: ['The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'],
    blocks: ['Morbi ut metus eu sem dapibus mattis.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Praesent accumsan neque eget erat mollis, eget dictum felis porta.'],
    blocksDescription: ['Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', 'Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', 'Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'],
  },
  {
    id: 4,
    title: 'Acto del Día del Veterano y de los Caídos en la Guerra de Malvinas',
    startDate: '2019-05-30T18:39:34.091Z',
    finishDate: '2019-05-30T18:39:34.091Z',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    schools: ['E.E.S.T. N°14', 'E.E.S.T. N°7', 'E.E.S.T. N°3'],
    organization: ['The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'],
    blocks: ['Morbi ut metus eu sem dapibus mattis.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Praesent accumsan neque eget erat mollis, eget dictum felis porta.'],
    blocksDescription: ['Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', 'Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', 'Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'],
  }
];

let schoolNews = [
  {
    id: 1,
    title: 'Fiesta de Egresados PROMO-22',
    startDate: '2019-05-30T18:39:34.091Z',
    finishDate: '2019-05-30T18:39:34.091Z',
    description: ['Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'],
    schools: ['E.E.S.T. N°14', 'E.E.S.T. N°7', 'E.E.S.T. N°3'],
    organization: ['The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'],
    blocks: ['Morbi ut metus eu sem dapibus mattis.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Praesent accumsan neque eget erat mollis, eget dictum felis porta.'],
    blocksDescription: ['Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', 'Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', 'Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'],
  },
  {
    id: 2,
    title: 'Fiesta de Primavera',
    startDate: '2019-05-30T18:39:34.091Z',
    finishDate: '2019-05-30T18:39:34.091Z',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    schools: ['E.E.S.T. N°14', 'E.E.S.T. N°7', 'E.E.S.T. N°3'],
    organization: ['The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'],
    blocks: ['Morbi ut metus eu sem dapibus mattis.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Praesent accumsan neque eget erat mollis, eget dictum felis porta.'],
    blocksDescription: ['Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', 'Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', 'Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'],
  },
  {
    id: 3,
    title: 'Acto del Día Nacional de la Memoria por la Verdad y la Justicia',
    startDate: '2019-05-30T18:39:34.091Z',
    finishDate: '2019-05-30T18:39:34.091Z',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    schools: ['E.E.S.T. N°14', 'E.E.S.T. N°7', 'E.E.S.T. N°3'],
    organization: ['The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'],
    blocks: ['Morbi ut metus eu sem dapibus mattis.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Praesent accumsan neque eget erat mollis, eget dictum felis porta.'],
    blocksDescription: ['Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', 'Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', 'Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'],
  },
  {
    id: 4,
    title: 'Acto del Día del Veterano y de los Caídos en la Guerra de Malvinas',
    startDate: '2019-05-30T18:39:34.091Z',
    finishDate: '2019-05-30T18:39:34.091Z',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    schools: ['E.E.S.T. N°14', 'E.E.S.T. N°7', 'E.E.S.T. N°3'],
    organization: ['The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'],
    blocks: ['Morbi ut metus eu sem dapibus mattis.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Praesent accumsan neque eget erat mollis, eget dictum felis porta.'],
    blocksDescription: ['Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', 'Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', 'Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'],
  }
];

app.get('/', (request, response) => {
  response.send('<h1>Welcome to the site!</h1><h2>Parámetros disponibles</h2><ul><li>&#47</li><li>&#47api&#47pages</li><li>&#47api&#47pages&#47:id</li><li>&#47api&#47school-events</li><li>&#47api&#47school-events&#47:id</li><li>&#47api&#47school-news</li><li>&#47api&#47school-news&#47:id</li></ul>');
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

app.get('/api/school-events', (request, response) => {
  response.json(schoolEvents);
});

app.get('/api/school-events/:id', (request, response) => {
  const id = Number(request.params.id);
  const schoolEvent = schoolEvents.find(schoolEvent => schoolEvent.id === id);

  if (schoolEvent) {
    response.json(schoolEvent);
  } else {
    response.status(404).json({
      message: 'Page not found',
    });
  }
});

app.get('/api/school-news', (request, response) => {
  response.json(schoolNews);
});

app.get('/api/school-news/:id', (request, response) => {
  const id = Number(request.params.id);
  const schoolNew = schoolNews.find(schoolNew => schoolNew.id === id);

  if (schoolNew) {
    response.json(schoolNew);
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