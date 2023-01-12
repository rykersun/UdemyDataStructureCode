// 使用以下寫法來建立 sum function
function sum(num1, num2) {
    return num1 + num2;
    // return 下面的 code 都不會被執行
    console.log("This line won't be execute.");
}

console.log(sum(19, 20));

// 執行: execute
// retuen 下面的 code = unreachable code
