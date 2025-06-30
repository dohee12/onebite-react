// 1. 콜백함수
// => 자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미
function main(value) {
    // console.log(1);
    // console.log(2);
    value();
    // console.log("end");
}

main(() => {
    //console.log("i am sub");
});

// 2. 콜백함수의 활용
function repeat(count, callback) {
    for (let i = 1; i <= count; i++){
        callback(i);
    }
}

repeat(5, (i) => {
    console.log(i);
});

repeat(5, (i) => {
    console.log(i * 2);
});

repeat(5, (i) => {
    console.log(i * 3);
});