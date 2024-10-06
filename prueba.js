function multiplicarArray(myArr){
    let total = 1;
      for(i=0; i<myArr.length; i++){
        total *= myArr[i];
      }
      console.log(total);
  }
  multiplicarArray([1,2,3])


  function getName(firstName, lastName ) {
    return firstName + lastName;
   }
   
   console.log(getName("Ana"));


   function getData() {
    let data = 0;
  }
  
  const result = getData();
  console.log(result)

  a = 5; b = 6; console.log(((a + 1) !== b))


  function saludo (nombre) {
    return "Buenos dias, Juan";      //¿¿¿?
  }