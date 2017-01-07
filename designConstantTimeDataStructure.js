//for this I will use an array and a hashmap

function constantTimeSet(){
    this.store = [];
    this.address = {};
}

constantTimeSet.prototype.insert = function(data){
    if (this.address[data]){
        return false;
    }
    else{
        this.store.push(data);
        var len = this.store.length;
        this.address[data] = len-1;
    }
    return true;
};

constantTimeSet.prototype.remove = function(data){
  if(this.address[data]){
      var location = this.address[data];
      this.store.splice(location, 1);
      delete this.address[data];
      return true;
  }
  else{
      return false;
  }
};

constantTimeSet.prototype.getRandom = function(){
    var min = 0,
        max = this.store.length,
        randomNumber = Math.floor(Math.random() * (max - min))+min;
};