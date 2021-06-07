function sleep(ms) {
    return new Promise(res => {
        setTimeout(res, ms);
    })
}


(async () => {  // 声明即执行的 async 函数表达式
    for (var i = 0; i < 5; i++) {
        if (i > 0) {
            await sleep(2000);
        }
        console.log(new Date, i);
    }
})();