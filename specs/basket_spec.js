var assert =  require('assert');
var Basket =  require('../basket.js')
var Item = require('../item.js')


describe('Basket Test', function(){

  var basket;
  var item;
  var item2;

  beforeEach(function(){
    basket = new Basket();
    item = new Item('Mars', 2 , true);
    item2 = new Item('iTunes', 20 , true);

  })

  it('should have multiple items and adjustable', function(){
    basket.add(item);

    assert.strictEqual(1, basket.itemCount());
    basket.remove(item);
    assert.strictEqual(0, basket.itemCount());
  })

  it('should have beforeDiscount', function(){

    basket.add(item);
    assert.strictEqual(2, basket.beforeDiscount);
    basket.remove(item)
    assert.strictEqual(0, basket.beforeDiscount);
  })

  it('should be discounted over £20', function(){
    basket.add(item2);
    basket.checkout();
    assert.strictEqual(18, basket.finalPrice);
  })

  it('basket has DiscountCard', function(){
    basket.addCard();
        assert.strictEqual(true, basket.discountCard);
  })

  it('dscount card gives 5% discount', function(){
    basket.addCard();
    basket.add(item);
    basket.checkout();
    assert.strictEqual(1.9, basket.finalPrice);
  })






  


})