const num = [1, 2, 3]

const add = (a, ...num) => {
    console.log(num)
    return a + num;
}

add(1,2)

//console.log(1 + [222,333])