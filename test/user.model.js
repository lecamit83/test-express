const chai = require('chai');
const User = require('../models/user.model');

const expect = chai.expect;

describe('User - test', function(){
  var user;
  beforeEach(function(){
    user = new User({
      firstName : 'Le',
      lastName : 'Cam',
      birthDay : 1998
    });
  });

  it('check name', function(){
    expect(user.getFullname()).to.equal('Le Cam');
  });
  it('check Age', function(){
    expect(user.getAge()).to.equal(21);
  });
});
