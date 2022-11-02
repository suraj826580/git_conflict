
function prime (num){
    var count=0;
    for (let i=1;i<=num;i++){
        if(num%i==0){
            count++
        }
    }
    if(count==2){
        console.log (i,'is a prime')
    }else{
        console.log(i,"is not a prime")
    }
}
for (let i=1;i<=13;i++){
    prime(i)
}