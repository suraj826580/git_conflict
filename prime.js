
function prime (num){
    var count=0;
    for (let i=1;i<=num;i++){
        if(num%2==0){
            count++
        }
    }
    if(count==2){
        console.log (true)
    }else{
        console.log(false)
    }
}
for (let i=1;i<=13;i++){
    prime(i)
}