const chai      = require('chai');
const chaiHttp  = require('chai-http');
const assert    = chai.assert;
const server    = require('../lib/app');
chai.use(chaiHttp);

describe('express single resource promise server', () => {
    
    let request = chai.request(server);
    const port = 3000;

    before(done => {
        server.listen({port, port}, done);
    });

    const recordExample = {"id":0,"artist":"Bill Fay","title":"Time of the Last Persecution"};

    const recordExample2 = {"id":"0","artist":"Willie Nelson","title":"Phases and Stages"};

    it('wants to see if POST works', done => {
        request
            .post('/records')
            .set('Content-Type', 'application/json')
            .send(recordExample)
            .end((err, res) => {
                if (err) return done(err);
                else {
                    assert.deepEqual(res.body, recordExample);
                    done();
                }
            });
    });

    it('checks to see that we can retrieve a given cat with GET', done => {
        request
            .get('/records/0')
            .end((err, res) => {
                if (err) return done(err);
                else {
                    assert.deepEqual(res.body, recordExample);
                    done();
                }
            });
    });

    it('checks to see that we can retrieve a given cat with GET using a promise chain', () => {
        request
            .get('/records/0')
            .then(data => {
                assert.deepEqual(data.body, recordExample);
            })
            .catch(err => {
                console.log(err);
            });
    });

    it('wants to see if we get a list of all resources', done => {
        request
            .get('/records')
            .end((err, res) => {
                if (err) return done(err);
                else {
                    assert.deepEqual(res.body, [recordExample]);
                    done();
                }
            });
    });

    it('wants to see if PUT will update a given file', done => {
        request
            .put('/records/0')
            .set('Content-Type', 'application/json')
            .send(recordExample2)
            .end((err, res) => {
                if (err) return done(err);
                else {
                    assert.deepEqual(res.body, recordExample2);
                    done();
                }
            });
    });

    it('wants to see if DELETE will delete', done => {
        request
            .del('/records/0')
            .end((err, res) => {
                if (err) return done(err);
                else {
                    assert.deepEqual(res.body, recordExample2);
                    done();
                }
            });
    });
   
});