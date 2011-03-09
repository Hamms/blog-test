//definition
function factory(x){
  var self = this;
  return {
    f1 : function f1(){
      console.log(x)
    },

    f2 : function(y){
      self.f1();
      console.log(y)
    }
  }
}

var printer = factory('Howdy');

printer.f2('Pardner');

//redefinition
printer.f1 = function(){
  console.log('Bugger off');
}

printer.f2('Pardner');

