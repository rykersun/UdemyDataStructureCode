// 首先建立物件 circle_1

let circle_1 = {
    radius: 5,
    getArea() {
        return Math.PI * this.radius * this.radius;
        // Math.PI 就是圓周率
        // this 指的就是 circle_1
    },
};

// 建立物件 circle_2

let circle_2 = {
    radius: 7,
    getArea() {
        return Math.PI * this.radius * this.radius;
    },
};

// circle_1
console.log(circle_1.radius);
console.log(circle_1.getArea());

// circle_2
console.log(circle_2.radius);
console.log(circle_2.getArea());

// 如果使用以上的寫法，每建立一個 circle 就要重新寫一個 getArea
// 所以我們可以使用 class 來簡化這個部分

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}

// 使用上面的 Circle class 建立一個 circle_3 物件
let circle_3 = new Circle(5);

// circle_3
console.log(circle_3.radius);
console.log(circle_3.getArea());

// 參數: parameter
