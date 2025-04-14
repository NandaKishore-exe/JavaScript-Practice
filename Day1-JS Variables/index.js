//1. Variables Let,Const,Var


//let variable//
//Variables declared with let have Block Scope
//Variables declared with let must be Declared before use
//Variables declared with let cannot be Redeclared in the same scope and Reassignment is allowed
{
  let a = 10;
  a = 20;
} 


//Const Variable//
//Variables declared with Const have Block Scope
//Variables declared with const must be Declared and assign value before use elase it will throw error
//Variables declared with const cannot be Redeclared and Reassigned

{
  const b = 20;
  // b = 10; ❌ Error: Assignment to constant variable 
}


//Var Varibale
//Variables declared with Var have function Scope
//Variables declared with var must be Declared before use
//Variables declared with let can be Redeclared within same scope and and Reassignment is allowed
function xyz(){

  var c = 30;
  var c = 40;
  console.log(c);

}




