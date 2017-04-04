var assert =  require('assert');
var Basket =  require('../basket.js')
var Item = require('../item.js')


describe('Basket Test', function(){

  var basket;
  var item;

  beforeEach(function(){
    basket = new Basket();
    item = new Item('Mars', 2 , true);

  })

  it('should have multiple items and adjustable', function(){
    basket.add(item);

    assert.strictEqual(1, basket.itemCount());
    basket.remove(item);
    assert.strictEqual(0, basket.itemCount());
  })

  it('should have totalPrice', function(){

    basket.add(item);
    assert.strictEqual(2, basket.totalPrice);
  })

  


})