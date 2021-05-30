
///Ejercicio 1//

var admin;
var name;

name = "John";
admin = name;
function showAlert() {
    admin = name;
    alert (admin);
  }
document.body.innerHTML="<h1>Mi nombre es" + " "+ admin + "</h1>";


///Ejercicio 2//
let planeta = "tierra"
console.log("planeta",planeta)
let visitorwebsite=prompt("What is your name")
alert('Hello,'+visitorwebsite+'!')

///Ejercicio 3//

const birthday='18.04.1984'
const age=alert(birthay)
//Generalmente usamos mayúsculas para las constantes que están "codificadas" en este caso birthday debería estar en mayuscula y 
//age en minuscula por ser constante//


///Ejercicio 4//

let name ="Ilya";
console.log('name', name);

alert('hello $ {1}')// se muestra solo 'hello 1'
alert('hello $ {"name"}')//se muestra solo 'hello name'
alert('hello $ {name}')//se muestra 'hello name Ilya'

///Ejercicio 5///

const objectConstructor= new Object();
const user={ name: 'John',
surname: 'Smith'}
console.log('user',user)
user.name="Pete"
console.log('user',user)
delete user.surname
console.log('user',user)
///ejercicio 6//

let name=""

function isEmpty(obj) {
  for ( var key in obj) {
    return false ;
  }   
       return true ;
  }
      
  console.log(isEmpty(name))
  
name="John"
console.log(isEmpty(name))


///Ejercicio 7///

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
    }
    function sum( obj ) {
        var sum = 0;
        for( var el in obj ) {
          if( obj.hasOwnProperty( el ) ) {
            sum += parseFloat( obj[el] );
          }
        }
        return sum;
      }
          
     
      var summed = sum( salaries );
      console.log(summed)



//Ejercicio 8///
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
  };

console.log('menu',menu)

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}
multiplyNumeric(menu)
console.log('menu',menu)
