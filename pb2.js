//2. Write a function that takes two objects as arguments. Merge both objects and create another object that has fields from the arguments. Return the resulting object Ex: For an input {'a': 1, 'b': 2}, {'c': 3, 'd': 4} it should return another object with the properties 'a', 'b', 'c', 'd'.
let ob1 = {
    'a':1,
    'b':2
    }
    let ob2 = {
      'c':3,
      'd':4
    }
    function resultObjects (ob1, ob2){
      let ob3 ={...ob1,...ob2};
      return ob3;
    }
    console.log("new object:", Object.getOwnPropertyNames(resultObjects(ob1,ob2)));