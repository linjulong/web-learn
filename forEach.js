// 判断元素是否在数组中
function itemInArray(arr, target) {
    try {
        arr.forEach(function (item) {
            if (item == target) {
                throw new Error("");
                // return true;
            }
        })
    } catch (e) {
        return true;
    }
    return false;
}