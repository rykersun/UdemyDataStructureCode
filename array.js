// 在 javascript 裡面要這樣宣告陣列
let arr = [];

// 給值
arr[0] = "first_element";
arr[1] = "second_element";
arr[2] = "third_element";

// 使用 for loop 印出陣列的內容
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("---------- 我是分隔線 ----------");

// 使用 forEach 印出陣列的內容
arr.forEach((Elements, Index) => {
    console.log("element data:", Elements);
    console.log("element index:", Index);
});
