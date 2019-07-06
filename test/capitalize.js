var capitalize = require('../capitalize');

const chai = require('chai');
var expect = chai.expect;

describe('capitalize', function(){
    it('capitalizes single words', function(){
        expect(capitalize('express')).to.equal('Express');
        expect(capitalize('cats')).to.equal('Cats');
    });

    it('check space words', function(){
        expect(capitalize('   ')).to.equal('   ');
        expect(capitalize('')).to.equal('');
    });

    it('a word has CAPITAL between', function(){
        expect(capitalize('exPRess')).to.equal('Express');
        expect(capitalize('nODeJs')).to.equal('Nodejs');
    });
    it('many word in sentence', function(){
        expect(capitalize('hello World')).to.equal('Hello World');
        expect(capitalize('this is sentence')).to.equal('This Is Sentence');
    });
});