function count(input){
	var obj = {};

	for(i = 0; i < input.length; i++)
	{
		key = input[i];//key:a,key:b...
		if(obj[key])
		{
			//物件中有這個字母
			obj[key]++;
		}
		else
		{
			//物件中沒有這個字母,把字母加到物件中
			obj[key] = 1;
		}
	}
	return obj
}
let input1=["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));


function groupByKey(input){
	  
	var temp = {};
	var obj = null;
	for(var i=0; i < input.length; i++) {
	   
		obj=input[i];
	   if(!temp[obj.key]) {
		   temp[obj.key] = obj;
	   } 
	   else {
		   temp[obj.key].value+= obj.value;
	   }
	}
	
	var result = [];
	for (var prop in temp)
		result.push(temp[prop]);
	
	return result;
  

}
let input2 =[
    { key: "a", value: 3},
    { key: "a", value: 1},
    { key: "c", value: 2},
    { key: "a", value: 3},
    { key: "c", value: 5},
];
console.log(groupByKey(input2));
