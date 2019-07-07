const supertest = require('supertest');
const app = require('../app');

describe('plain-text response', function(){
  it('return plain-text', function(done){
    supertest(app)
      .get('/')
      .set('User-Agent', 'my cool browser')
      .set('Accept', 'text/plain')
      .expect('Content-Type', /text\/plain/)
      .expect(200)
      .end(done);
  });
  it('return your user agent', function(done){
    supertest(app)
      .get('/')
      .set('User-Agent', 'my cool browser')
      .set('Accept', 'text/plain')
      .expect(function (response) {
        if(response.text !== 'my cool browser'){
          throw Error("Response don't contain User-Agent");
        }
      })
      .end(done);
  });
});
