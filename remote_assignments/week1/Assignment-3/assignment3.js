function max(numbers){  
    var max = numbers[0];    
    for (var i = 1; i < numbers.length; i++  ) {
        // 如果元素當前值大於max,就把這個當前值賦值給max
        if (numbers[i] > max) {
        max = numbers[i];   
        }
    }    
    return max;
}

function findPosition(numbers, target){
    var index = -1;
    for (k=0; k < numbers.length; k++){
        //逐一比對array中的值和target
            if (numbers[k]== target){  
                index = k;
                break;
            }
    }
    return index
}

console.log(max([1, 2, 4, 5]));// 5
console.log(max([5, 2, 7, 1, 6]));// 7

console.log(findPosition([5, 2, 7, 1, 6], 5));// 0
console.log(findPosition([5, 2, 7, 1, 6], 7));// 2
console.log(findPosition([5, 2, 7, 7, 7, 1, 6], 7));// 2
console.log(findPosition([5, 2, 7, 1, 6],8));// -1