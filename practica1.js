
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

let visitorwebsite="visit"
console.log("planeta",planeta)
console.log("visitorwebsite",visitorwebsite)

///Ejercicio 3//

const birthday='18.04.1984'
const age=alert(birthay)
//Se debe empezar con mayuscula y seguido cn minuscula para que sea entendible
///


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
let name={}
alert(isEmpty(name));//true
schedule["8:30"] = "get up";
alert(isEmpty(schedule) ); // false
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
