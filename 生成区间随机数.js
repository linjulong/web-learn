let m = 2,n =9;

function create(m,n){
    return Math.floor(Math.random()*(n-m)+m+1)
}

for(let i=0;i<100;i++){
    console.log(create(m,n))
}