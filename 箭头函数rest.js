const num = [1, 2, 3]

const add = (a, ...num) => {
    console.log(num)
    return a + num;
}

console.log(1 + [])