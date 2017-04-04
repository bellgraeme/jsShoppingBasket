var Basket = function(){
  this.items = [];
  this.totalPrice = 0;
}

Basket.prototype= {
  add: function(item){
    this.items.push(item)
    this.totalPrice += item.price
  },
  itemCount: function(){
   return this.items.length;
  },
  remove: function(item){
    var index = this.items.indexOf(item);
    if (index === -1){
      return "Not Found"}
      else{
        this.items.splice(index, 1);
        this.totalPrice -= item.price;
      }
    }
}

module.exports = Basket;