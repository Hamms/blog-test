// definition
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

var printer = factory('Howdy');

printer.f1();
printer.f2('Pardner');

// redefinition
var printer = factory('Howdy');

printer.f1 = function(){
  console.log("Here's your private variable: " + x);
}

printer.f1();
