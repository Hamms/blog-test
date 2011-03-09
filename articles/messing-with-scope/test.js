function test(x){
  var self = this;
  return {
    f1 : function f1(){
      console.log(x)
    },

    f2 : function f2(a){
      console.log(a);
      this.f1();
    }
  }
}

var t = test("!!x!!");

t.f1();
t.f2("!!y!!");

t.f1 = function(){
  console.log("tits");
}
t.f1();
t.f2("boobies");
