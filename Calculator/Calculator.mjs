import promptSync from 'prompt-sync';
let prompt=promptSync();
let numbers = [];
let totalNumbers=prompt("How many numbers you want to enter");
for (let i=0; i<totalNumbers;i++){
    numbers[i]=prompt(`Enter number${i+1}= `)
}
let operator = prompt("Enter opration : +,-,*,/ you want to perform");
switch (operator){
    case '+':
        let totalsum=0;
        for(let i in numbers){
            totalsum+=parseInt(numbers[i]);
            
        }
        console.log(`Sum of numbers you entered is ${totalsum}` );
        break;
    case '-':
        let totalSub=0;
        for(let i in numbers){
            totalSub-=numbers[i];
        }
        console.log(`Sum of numbers you entered is ${totalSub}` );
        break;
    case '*':
        let totalMul=0;
        for(let i in numbers){
            totalMul+=numbers[i];
        }
        console.log(`Sum of numbers you entered is ${totalMul}` );
        break;
    case '/':
        let totalDiv=0;
        for(let i in numbers){
            totalDiv+=numbers[i];
        }
        console.log(`Sum of numbers you entered is ${totalDiv}` );
        break;
}















