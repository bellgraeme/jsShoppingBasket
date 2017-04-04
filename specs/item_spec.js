var assert =  require('assert');
var Item =  require('../item.js')


describe('Item Test', function(){

  var item;

  beforeEach(function(){
    item = new Item("Mars");
  })


it('item should have name', function(){
  assert.strictEqual("Mars", item.name)
})
  

  


})