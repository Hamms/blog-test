//definition
function factory(x){
  return {
    f1 : function(){
      console.log(x)
    },
  }
}

var printer = factory('Howdy');

printer.f1();

//redefinition
printer.f1 = function(){
  console.log("Here's your private variable: " + x);
}

printer.f1();
