//definition
function factory(x){
  var that = {};

  var f1 = that.f1 = function(){
    console.log(x)
  };

  var f2 = that.f2 = function(y){
    f1();
    console.log(y)
  };

  return that;
}

var printer = factory('Howdy');

printer.f2('Pardner');

//redefinition
printer.f1 = function(){
  console.log('Bugger off');
}

printer.f2('Pardner');



