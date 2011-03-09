function factory(x){
  return {
    f1 : function(){
      console.log(x)
    },

    f2 : function(y){
      console.log(y)
    }
  }
}

