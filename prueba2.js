var assert = require('assert'); //CARGA MÓDULOS (LO HACE DISPONIBLE)

function ejercicio1(_arr, _num){
  var reduceArr = _arr.reduce(function(_total, _actual){
    return _total = _actual
  });
  if(isNaN(_num)){
    res = res* _num;
  }
  return res;
}


//2 FUNCIONES DESCRIBE E IT ,(CALLBACK)
describe('Ejercicios Arrays',function(){
  describe('ejercicio1',function(){ //SE PUEDE UTILIZAR OTRO DESCRIBE E IT
    it('Prueba de [45,23] Y "Aqui"',function(){
      assert.equal (0,ejercicio1([45,23],"Aqui"));

    });
