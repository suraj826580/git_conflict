
function prime (number){
    var factor=0;
    for (let i=1;i<=number;i++){
        if(number%i==0){
            factor++
        }
    }
    if(factor==2){
        console.log (i,"is a prime")
    }else{
        console.log(i,"not a prime")
    }
}
for (let i=1;i<=13;i++){
    prime(i)
}