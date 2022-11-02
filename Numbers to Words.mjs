
let unit=["zero", "one", "two", "three" ,"four", "five" , "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen" ,"fifteen","sixteen" ,"seventeen","eighteen","nineteen"];
let tens=["twenty" ,"thirty" ,"forty" ,"fifty" ,"sixty ","seventy" ,"eighty" ,"ninety"];

function numToWords(num1){
    let temp=num1 % 10;
    if (num1<20){
        console.log(unit[num1]);
    }
    else if(num1<100){
        console.log(temp);
        console.log(tens[Math.floor((num1/10)-2)]+ (temp?`-${unit[temp]}`:""));
    }
    else if(num1<1000){
        
        let temp1=num1%100;
        let temp2=temp1%10;
        let temp1div=num1/100;
        let temp2div=temp1/10;
        console.log(unit[Math.floor(temp1div)]+"hundred and "+tens[Math.floor(temp2div-2)]+(temp?"-"+unit[temp2]:""));
    }
    else if(num1<10000){
        let temp1=num1%1000;
        let temp2=temp1%100;
        let temp3=temp2%10;
        let temp1div=num1/1000;
        let temp2div=temp1/100;
        let temp3div=temp2/10;
        console.log(`${temp1} ${temp2} ${temp3} ${temp1div} ${temp2div} ${temp3div}`)
        console.log(unit[Math.floor(temp1div)]+" thounsand "+unit[Math.floor(temp2div)]+" hundred "+tens[Math.floor(temp3div-2)]+(temp3?unit[temp3]:""));
    }
}
numToWords(2222);

