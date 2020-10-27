var arr3 = [{ name: 'a', id: 1 }, { name: 'a', id: 2 }, { name: 'b', id: 3 }, { name: 'c', id: 4 },
{ name: 'c', id: 6 }, { name: 'b', id: 6 }, { name: 'd', id: 7 }];
let deWeightThree = () => {
    let map = new Map();
    for (let item of arr3) {
        if (!map.has(item.id)) {
            map.set(item.id, item);
        }
    }
    return [...map.values()];
}
let newArr3 = deWeightThree();
console.log('%c%s', 'color:red;', '方法三：es6,newArr3', newArr3);