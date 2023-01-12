// 使用 {} 建立物件
let Student = {
    name: "Ryker Sun",
    age: 19,
    married: false,
    greeting() {
        console.log("Ryker Sun says hello to you.");
    },
};

// 檢視物件屬性的方法
console.log(Student.name);
console.log(Student["name"]);

Student.greeting();

// 屬性: property
// 方法: method
