let someArray=[11,13,16,19];
let dummy=0;
for(let i = someArray[0];i<=someArray[someArray.length-1];i++){
   if(someArray.includes(i)){
      dummy++;
      continue;
    
   }
   console.log(`${i} comes at index ${dummy}`);
   dummy++;
 
}
