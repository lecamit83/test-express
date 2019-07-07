const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
  firstName : String,
  lastName : String,
  birthDay : Number
});

userSchema.methods.getFullname = function(){
  return this.firstName + ' ' + this.lastName;
}
userSchema.methods.getAge = function(){
  return (new Date()).getFullYear() - this.birthDay;
}
const User = mongoose.model('User', userSchema);
module.exports = User;
