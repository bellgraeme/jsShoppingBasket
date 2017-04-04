var assert =  require('assert');
var Item =  require('../item.js')


describe('Item Test', function(){

  var item;

  beforeEach(function(){
    item = new Item("Mars", 2, true);
  })


it('item should have name, price, boolean', function(){
  assert.strictEqual("Mars", item.name)
  assert.strictEqual(2, item.price)
  assert.strictEqual(true, item.discount)
})


  

  


})