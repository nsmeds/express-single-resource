const bodyParser = require('../body-parser.js');
const EventEmitter = require('events');
const chai      = require('chai');
const assert = require('chai').assert;
const chaiHttp  = require('chai-http');
const server    = require('../lib/app');
chai.use(chaiHttp);

describe('test body parser', () => {

  let request = chai.request(server);
  const port = 3000;

  it('parses body', done => {
    request
      .post('/records/')
      .set('Content-Type', 'application/json')
      .send('{"artist":"Elvis"}')
      .end((err, res) => {
        if (err) return done(err);
        assert.deepEqual(res.body, {"artist":"Elvis"});
        done();
      });
  });

  after (done => {
    });
});