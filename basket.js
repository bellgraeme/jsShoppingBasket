var Basket = function(){
  this.items = [];
  this.beforeDiscount = 0;
  this.discountCard = false;
}

Basket.prototype= {
  add: function(item){
    this.items.push(item)
    this.beforeDiscount += item.price
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
        this.beforeDiscount -= item.price;
      }
    },
  checkout: function(){
    this.finalPrice = this.beforeDiscount;
    if(this.beforeDiscount >= 20){
     this.finalPrice = this.beforeDiscount * 0.9;
    }
    if(this.discountCard){
      this.finalPrice = this.finalPrice * 0.95;
    }
    return this.finalPrice;
  },
  addCard: function(){
    this.discountCard = true;
  }
}

module.exports = Basket;