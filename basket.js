var Basket = function(){
  this.items = [];
}

Basket.prototype= {
  add: function(item){
    this.items.push(item)
  },
  itemCount: function(){
   return this.items.length;
  },
  remove: function(item){
    var index = this.items.indexOf(item);
    if (index === -1){
      return "Not Found"}
      else{
        this.items.splice(index, 1)
      }
    }
}

module.exports = Basket;