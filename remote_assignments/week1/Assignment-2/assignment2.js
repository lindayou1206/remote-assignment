function countAandB(input){
    var a = 0;
    var b = 0;
    for (i= 0 ; i < input.length ; i++ ){
        if (input[i] == 'a'){
            a ++ ;
        }
        if (input[i] == 'b'){
            b ++ ;
        }   
    }
    return a+b
}

function toNumber (input){
    //use ascii code 
    ans = [];
    for (i=0 ; i< input1.length ; i++){
        for (k=97; k < 102; k++){// 用array中的字串對照ascii code
            if (String.fromCharCode(k) ==  input[i]){
                String.fromCharCode(input[i]);// 把array中的字串變ascii code
                ans.push(k-96);//a是97
                break;
            }
        }
    }
return ans
}

let input1 =['a','b','c','a','c','a','c'];
console.log (countAandB (input1) );
console.log (toNumber (input1) );

let input2 =['e', 'd', 'c', 'd', 'e'];
console.log (countAandB (input2)) ;
console.log (toNumber (input2)) ;
