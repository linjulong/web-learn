var generateParenthesis = function (n) {
    var res = [];
    function dfs(str, l, r) {
        if (l === n && r === n) {
            res = res.concat(insert(str));
            return;
        }
        if (l < n) {
            dfs(str + '(', l + 1, r);
        }
        if (l > r) {
            dfs(str + ')', l, r + 1);
        }
    }
    dfs('', 0, 0);
    return res;
};
function insert(str) {
    var strArr = str.split('');
    var indexArr = [];
    var flag = '';
    for (var i = 0; i < strArr.length; i++) {
        if (strArr[i] === '(') {
            flag += strArr[i];
        } else {
            if (flag.includes('(')) {
                indexArr.push(i);
                flag = '';
            }
        }
    }
    let returnArr = [];
    indexArr.forEach(item => {
        returnArr.push(insertStr(str, item, '4399'));
    })
    return returnArr;
}
function insertStr(soure, start, newStr) {
    return soure.slice(0, start) + newStr + soure.slice(start);
}
console.log(generateParenthesis(3));
