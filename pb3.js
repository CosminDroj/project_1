// 3. Write a function that takes an array of strings as argument. Group those strings by their first letter. 
//     Return an object that contains properties with keys representing first letters
//     The values should be arrays of strings containing only the corresponding strings
//     For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
//     Ex: { a: ['Alf', 'Alice'], b: ['Ben']}
const string = ['Alin', 'Anca', 'Pau'];
const newString = (arr) => {
  const result = {};
 for(let i = 0; i < arr.length ; i++) {
     const item = arr[i];
     const firstLetter = item[0]
     if(!result[firstLetter]) {
         result[firstLetter] = [];
     }
     if(result[firstLetter].indexOf(item) < 0) {
         result[firstLetter].push(item);
     }
 }
 return result;
}
console.log(newString(string));