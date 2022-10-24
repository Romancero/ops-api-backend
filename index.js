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

let schools = [
  {
    id: 'MT0001',
    nombre: 'ARMADA ARGENTINA',
    localidad: 'ISIDRO CASANOVA',
    acercaDe: ['Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'],
    turnos: [
      'mañana',
      'tarde',
      'vespertino',
    ],
    especialidades: [
      'TECNICO_EN_ELECTROMECANICA',
      'BIES_TTP_TEC_EQ_E_INSTALACIONES_ELECTROMECANICAS',
      'PLAN_NOCT_TEC_EQ_E_INSTALACIONES_ELECTROMECANICAS',
      'BAO_TECNOLOGIA',
      'PSICOLOGIA SECUNDARIA',
      'TECNICO EN ELECTRICIDAD',
      'TECNICO_EN_ELECTROMECANICA',
    ],
    img: 'logo_tecnica_14',
    redesSociales: {
      web: 'http://mt0690014.escuelas.gov.ar/?fbclid=IwAR0xAS4Rts1IQbVRZZ_K6yFN4rj5oviGHot3LG-PHevIOekIYhplRiFJ450',
      instagram: 'https://www.instagram.com/dia_del_estudiante_tec14/',
      facebook: 'https://www.facebook.com/tecnica.catorce',
      twitter: 'https://twitter.com/',
    },
  },
  {
    id: 'MT0002',
    nombre: 'MARIA EVA DUARTE',
    localidad: 'CDAD. EVITA',
    acercade: ['Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'],
    turnos: [
      'mañana',
      'tarde',
      'vespertino',
    ],
    especialidades: [
      'TECNICO_EN_AUTOMOTORES',
      'MAESTRO_MAYOR_DE_OBRAS',
      'PSICOLOGIA SECUNDARIA',
    ],
    img: 'logo_tecnica_14',
    redesSociales: {
      web: 'http://mt0690014.escuelas.gov.ar/?fbclid=IwAR0xAS4Rts1IQbVRZZ_K6yFN4rj5oviGHot3LG-PHevIOekIYhplRiFJ450',
      instagram: 'https://www.instagram.com/dia_del_estudiante_tec14/',
      facebook: 'https://www.facebook.com/tecnica.catorce',
      twitter: 'https://twitter.com/',
    },
  },
  {
    id: 'MT0003',
    nombre: 'MANUEL BELGRANO',
    localidad: 'SAN JUSTO',
    acercade: ['Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'],
    turnos: [
      'mañana',
      'tarde',
      'vespertino',
    ],
    especialidades: [
      'MAESTRO_MAYOR_DE_OBRAS',
      'BIES_TTP_MAESTRO_MAYOR_DE_OBRAS',
      'PLAN_NOCT_MAESTRO_MAYOR_DE_OBRAS',
    ],
    img: 'logo_tecnica_14',
    redesSociales: {
      web: 'http://mt0690014.escuelas.gov.ar/?fbclid=IwAR0xAS4Rts1IQbVRZZ_K6yFN4rj5oviGHot3LG-PHevIOekIYhplRiFJ450',
      instagram: 'https://www.instagram.com/dia_del_estudiante_tec14/',
      facebook: 'https://www.facebook.com/tecnica.catorce',
      twitter: 'https://twitter.com/',
    },
  },
  {
    id: 'MT0004',
    nombre: 'JUAN MANUEL FANGIO',
    localidad: 'SAN JUSTO',
    acercade: ['Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'],
    turnos: [
      'mañana',
      'tarde',
      'vespertino',
    ],
    especialidades: [
      'TECNICO_EN_AUTOMOTORES',
    ],
    img: 'logo_tecnica_14',
    redesSociales: {
      web: 'http://mt0690014.escuelas.gov.ar/?fbclid=IwAR0xAS4Rts1IQbVRZZ_K6yFN4rj5oviGHot3LG-PHevIOekIYhplRiFJ450',
      instagram: 'https://www.instagram.com/dia_del_estudiante_tec14/',
      facebook: 'https://www.facebook.com/tecnica.catorce',
      twitter: 'https://twitter.com/',
    },
  },
  {
    id: 'MT0005',
    nombre: 'ROBERTO NOBLE',
    localidad: 'SAN JUSTO',
    acercade: ['Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'],
    turnos: [
      'mañana',
      'tarde',
      'vespertino',
    ],
    especialidades: [
      'TECNICO_QUIMICO',
      'TECNICO_EN_ELECTROMECANICA',
      'PLAN_NOCT_INDUSTRIAS_DE_PROCESOS',
      'PLAN_NOCT_TEC_EQ_E_INSTALACIONES_ELECTROMECANICAS',
      'PSICOLOGIA SECUNDARIA',
    ],
    img: 'logo_tecnica_14',
    redesSociales: {
      web: 'http://mt0690014.escuelas.gov.ar/?fbclid=IwAR0xAS4Rts1IQbVRZZ_K6yFN4rj5oviGHot3LG-PHevIOekIYhplRiFJ450',
      instagram: 'https://www.instagram.com/dia_del_estudiante_tec14/',
      facebook: 'https://www.facebook.com/tecnica.catorce',
      twitter: 'https://twitter.com/',
    },
  },
  {
    id: 'MT0006',
    nombre: 'E.E.S.T. N°6',
    localidad: 'ISIDRO CASANOVA',
    acercade: ['Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'],
    turnos: [
      'mañana',
      'tarde',
      'vespertino',
    ],
    especialidades: [
      'BIES_TTP_TECNICO_EN_ELECTRÓNICA',
      'BIES_TTP_INFORMATICA_PERSONAL_Y_PROFESIONAL',
      'TECNICO_INFORMATICA_PROFESIONAL_Y_PERSONAL',
      'TECNICO_EN_ELECTRONICA',
    ],
    img: 'logo_tecnica_14',
    redesSociales: {
      web: 'http://mt0690014.escuelas.gov.ar/?fbclid=IwAR0xAS4Rts1IQbVRZZ_K6yFN4rj5oviGHot3LG-PHevIOekIYhplRiFJ450',
      instagram: 'https://www.instagram.com/dia_del_estudiante_tec14/',
      facebook: 'https://www.facebook.com/tecnica.catorce',
      twitter: 'https://twitter.com/',
    },
  },
  {
    id: 'MT0007',
    nombre: 'E.E.S.T. N°7',
    localidad: 'G DE LAFERRERE',
    acercade: ['Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'],
    turnos: [
      'mañana',
      'tarde',
      'noche',
    ],
    especialidades: [
      'BAO_TECNOLOGIA',
      'BIES_TTP_TEC_EQ_E_INSTALACIONES_ELECTROMECANICAS',
      'TECNICO_EN_ELECTROMECANICA',
      'PSICOLOGIA SECUNDARIA',
    ],
    img: 'logo_tecnica_14',
    redesSociales: {
      web: 'http://mt0690014.escuelas.gov.ar/?fbclid=IwAR0xAS4Rts1IQbVRZZ_K6yFN4rj5oviGHot3LG-PHevIOekIYhplRiFJ450',
      instagram: 'https://www.instagram.com/dia_del_estudiante_tec14/',
      facebook: 'https://www.facebook.com/tecnica.catorce',
      twitter: 'https://twitter.com/',
    },
  },
  {
    id: 'MT0008',
    nombre: 'JORGE NEWBERY',
    localidad: 'VILLA LUZURIAGA',
    acercade: ['Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'],
    turnos: [
      'mañana',
      'tarde',
      'noche',
    ],
    especialidades: [
      'BIES_TTP_MEC_EN_MANTENIMIENTO_DE_AERONAVES',
      'BIES_TTP_TEC_EQ_E_INSTALACIONES_ELECTROMECANICAS',
      'TECNICATURA_AERONAUTICA',
      'TECNICO_EN_ELECTROMECANICA',
      'TECNICO_EN_AERONAUTICA',
      'SIN_VACANTES',
      'PSICOLOGIA SECUNDARIA',
    ],
    img: 'logo_tecnica_14',
    redesSociales: {
      web: 'http://mt0690014.escuelas.gov.ar/?fbclid=IwAR0xAS4Rts1IQbVRZZ_K6yFN4rj5oviGHot3LG-PHevIOekIYhplRiFJ450',
      instagram: 'https://www.instagram.com/dia_del_estudiante_tec14/',
      facebook: 'https://www.facebook.com/tecnica.catorce',
      twitter: 'https://twitter.com/',
    },
  },
  {
    id: 'MT0009',
    nombre: 'EEST Nº 9 "CRUCERO ARA GENERAL BELGRANO"',
    localidad: 'BARRIO SARMIENTO, VILLA CELINA.	',
    acercade: ['Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'],
    turnos: [
      'mañana',
      'tarde',
      'vespertino',
    ],
    especialidades: [
      'TECNICO_EN_ELECTRONICA',
      'TEC_EN_ADM_DE_LAS_ORGANIZACIONES',
      'BAO_TECNOLOGIA',
      'PSICOLOGIA SECUNDARIA',
      'CAAT',
    ],
    img: 'logo_tecnica_14',
    redesSociales: {
      web: 'http://mt0690014.escuelas.gov.ar/?fbclid=IwAR0xAS4Rts1IQbVRZZ_K6yFN4rj5oviGHot3LG-PHevIOekIYhplRiFJ450',
      instagram: 'https://www.instagram.com/dia_del_estudiante_tec14/',
      facebook: 'https://www.facebook.com/tecnica.catorce',
      twitter: 'https://twitter.com/',
    },
  },
  {
    id: 'MT0010',
    nombre: 'E.E.S.T. N°10',
    localidad: 'VILLA MADERO',
    acercade: ['Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'],
    turnos: [
      'mañana',
      'tarde',
      'vespertino',
    ],
    especialidades: [
      'MAESTRO_MAYOR_DE_OBRAS',
      'TECNICO_INFORMATICA_PROFESIONAL_Y_PERSONAL',
      'PSICOLOGIA SECUNDARIA',
    ],
    img: 'logo_tecnica_14',
    redesSociales: {
      web: 'http://mt0690014.escuelas.gov.ar/?fbclid=IwAR0xAS4Rts1IQbVRZZ_K6yFN4rj5oviGHot3LG-PHevIOekIYhplRiFJ450',
      instagram: 'https://www.instagram.com/dia_del_estudiante_tec14/',
      facebook: 'https://www.facebook.com/tecnica.catorce',
      twitter: 'https://twitter.com/',
    },
  },
  {
    id: 'MT0011',
    nombre: '"ISLAS MALVINAS"',
    localidad: 'CIUDAD EVITA',
    acercade: ['Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'],
    turnos: [
      'mañana',
      'tarde',
      'vespertino',
    ],
    especialidades: [
      'TECNICO_INFORMATICA_PROFESIONAL_Y_PERSONAL',
      'TECNICO_EN_ELECTROMECANICA',
      'PSICOLOGIA SECUNDARIA',
    ],
    img: 'logo_tecnica_14',
    redesSociales: {
      web: 'http://mt0690014.escuelas.gov.ar/?fbclid=IwAR0xAS4Rts1IQbVRZZ_K6yFN4rj5oviGHot3LG-PHevIOekIYhplRiFJ450',
      instagram: 'https://www.instagram.com/dia_del_estudiante_tec14/',
      facebook: 'https://www.facebook.com/tecnica.catorce',
      twitter: 'https://twitter.com/',
    },
  },
  {
    id: 'MT0012',
    nombre: 'ITALIA',
    localidad: 'SAN JUSTO',
    acercade: ['Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'],
    turnos: [
      'mañana',
      'tarde',
      'noche',
    ],
    especialidades: [
      'MECANICA',
      'MAESTRO_MAYOR_DE_OBRAS',
      'TECNICO_EN_ELECTROMECANICA',
      'CAAT',
      'TECNICO_EN_ELECTROMECANICA',
      'BAO_TECNOLOGIA',
      'MAESTRO_MAYOR_DE_OBRAS',
      'SIN_VACANTES',
      'PLAN_NOCT_TEC_EQ_E_INSTALACIONES_ELECTROMECANICAS',
    ],
    img: 'logo_tecnica_14',
    redesSociales: {
      web: 'http://mt0690014.escuelas.gov.ar/?fbclid=IwAR0xAS4Rts1IQbVRZZ_K6yFN4rj5oviGHot3LG-PHevIOekIYhplRiFJ450',
      instagram: 'https://www.instagram.com/dia_del_estudiante_tec14/',
      facebook: 'https://www.facebook.com/tecnica.catorce',
      twitter: 'https://twitter.com/',
    },
  },
  {
    id: 'MT0013',
    nombre: 'TECNICA 13',
    localidad: 'VIRREY DEL PINO',
    acercade: ['Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'],
    turnos: [
      'mañana',
      'tarde',
      'noche',
      'vespertino',
    ],
    especialidades: [
      'TECNICO_EN_ELECTROMECANICA',
      'MAESTRO_MAYOR_DE_OBRAS',
      'SIN_VACANTES',
      'PSICOLOGIA SECUNDARIA',
      'SIN_VACANTES',
      'CAAT',
      'SIN_VACANTES',
    ],
    img: 'logo_tecnica_14',
    redesSociales: {
      web: 'http://mt0690014.escuelas.gov.ar/?fbclid=IwAR0xAS4Rts1IQbVRZZ_K6yFN4rj5oviGHot3LG-PHevIOekIYhplRiFJ450',
      instagram: 'https://www.instagram.com/dia_del_estudiante_tec14/',
      facebook: 'https://www.facebook.com/tecnica.catorce',
      twitter: 'https://twitter.com/',
    },
  },
  {
    id: 'MT0014',
    nombre: 'E.E.S.T. N°14',
    localidad: 'GONZALEZ CATAN',
    acercade: ['Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'],
    turnos: [
      'mañana',
      'tarde',
      'vespertino',
    ],
    especialidades: [
      'TECNOLOGIA_DE_LOS_ALIMENTOS',
      'TECNICATURA_EN_PROGRAMACION',
      'TECNICO_INFORMATICA_PROFESIONAL_Y_PERSONAL',
    ],
    img: 'logo_tecnica_14',
    redesSociales: {
      web: 'http://mt0690014.escuelas.gov.ar/?fbclid=IwAR0xAS4Rts1IQbVRZZ_K6yFN4rj5oviGHot3LG-PHevIOekIYhplRiFJ450',
      instagram: 'https://www.instagram.com/dia_del_estudiante_tec14/',
      facebook: 'https://www.facebook.com/tecnica.catorce',
      twitter: 'https://twitter.com/',
    },
  },
  ];

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
  response.send('<h1>Welcome to the site!</h1><h2>Parámetros disponibles</h2><ul><li>&#47</li><li>&#47api&#47pages</li><li>&#47api&#47pages&#47:id</li><li>&#47api&#47schools</li><li>&#47api&#47schools&#47:id</li><li>&#47api&#47school-events</li><li>&#47api&#47school-events&#47:id</li><li>&#47api&#47school-news</li><li>&#47api&#47school-news&#47:id</li></ul>');
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

app.get('/api/schools', (request, response) => {
  response.json(schools);
});

app.get('/api/schools/:id', (request, response) => {
  const id = String(request.params.id);
  const School = schools.find(School => School.id === id);

  if (School) {
    response.json(School);
  } else {
    response.status(404).json({
      message: 'School not found',
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
      message: 'School Event not found',
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
      message: 'School News not found',
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