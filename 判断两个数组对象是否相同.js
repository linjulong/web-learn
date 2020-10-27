let arr1 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }];
let arr2 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }];



function getDifferenceSetA(arr1, arr2) { //差集
    arr1 = arr1.map(JSON.stringify);
    arr2 = arr2.map(JSON.stringify);
    return arr1.concat(arr2).filter(function (v, i, arr) {
        return arr.indexOf(v) === arr.lastIndexOf(v);
    }).map(JSON.parse)
}
console.log('getDifferenceSetA:', getDifferenceSetA(arr1, arr2));
