//definition
function factory(x){
  return {
    f1 : function(){
      console.log(x)
    },

    f2 : function(y){
      f1();
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

