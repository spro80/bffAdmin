const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');

if (process.env.NODE_ENV === 'local') {
  // eslint-disable-next-line global-require
  require('dotenv').config();
}

const config = require('./app/config/index');

const RouteV1 = require(`./app/routes/${config.envApp}/v1/route`); // eslint-disable-line

const app = express();

app.set('trust proxy', true);

/*app.use(cors({
  origin: config.msConfig.originCORS || '*',
  methods: 'GET,POST'
}));
*/

app.use(cors({
  origin: "http://localhost:3000/modules/consultations/consultations" || '*',
  methods: 'GET,POST',
  credentials: true,
}));



app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use(compression());

// health check MS
app.get('/api/bff/ingress/health', (req, res) => {
  res.send(`${config.msConfig.name} up and running`);
});

app.use('/api/bff/ingress',RouteV1);

app.use((err, req, res, next) => { // eslint-disable-line
  console.log(`module:[app.js] | method:[app.js] | description: [error in app.js] | error:${err}`);
  res.status(500).send({ code: 'error', message: 'internal error not handled.' });
});

app.use((req, res, next) => { // eslint-disable-line
  if (!/^(GET|POST)$/.test(req.method)) {
    res.sendFile(`${__dirname}/index.html`);
  }
  res.sendFile(`${__dirname}/index.html`);
});

module.exports = app;
