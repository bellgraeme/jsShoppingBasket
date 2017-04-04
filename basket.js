var Basket = function(){
  this.items = [];
}

Basket.prototype= {
  add: function(item){
    this.items.push(item)
  },
  itemCount: function(){
   return this.items.length;
  }

}

module.exports = Basket;