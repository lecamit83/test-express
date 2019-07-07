const chai = require('chai');
const expect = chai.expect;

const checkPassword = require('../checkPassword_v2');

describe('check password', function(){
  it('truthly password', async function(){
    const result = await checkPassword('lecam16A1');
    expect(result).to.equal(true);
  });
  it('not contain Capitalize Character in password',async function(){
    const result = await checkPassword('lecam161');
    expect(result).to.equal(false);
  });
  it('not contain Number Character in password',async function(){
    const result = await checkPassword('lecamA');
    expect(result).to.equal(false);
  });
  it('password length not long',async function(){
    const result = await checkPassword('ss');
    expect(result).to.equal(false);
  });
});
