let arr1 = [2, 345, 45, 6, 75, 12]

let arr2 = [22, 345, 45, 61, 715, 12, 45, 7, 3423, 87]

console.log([...new Set(arr1.concat(arr2))].sort((a, b) => {
    console.log(a, b)
    return a - b;
}))