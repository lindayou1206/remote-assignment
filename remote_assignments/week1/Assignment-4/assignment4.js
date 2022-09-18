function avg (data){
    var sum = 0 ;
    size = data.size ;
    product = data.product;
    for (i=0; i< size; i++){
        sum = sum + product[i].price;
    }
    return sum/ size
}
console.log(
    avg({
        size: 3,
        product:[
            {
                name: 'Product 1',
                price :100,
            },
            {
                name: 'Product 2',
                price :700,
            },
            {
                name: 'Product 1',
                price :250,
            },
        ]
    })
)