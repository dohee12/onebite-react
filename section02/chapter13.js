// PromiseState => pending , PromiseResult => undefined
// const promise = new Promise(() => {
//     // 비동기 작업을 실행하는 함수
//     // executor

//     setTimeout(() => {
//         console.log("안녕");
//     }, 2000);
// });
// console.log(promise);

// PromiseState => fulfilled , PromiseResult => undefined
// const promise = new Promise ((resolve, reject) => {
//     // 비동기 작업 실행하는 함수
//     // executor

//     setTimeout(() => {
//         console.log("안녕");
//         resolve();
//     },2000);
// });

// setTimeout(() => {
//     console.log(promise);
// },3000);

// PromiseState => fulfilled , PromiseResult => 안녕
// const promise = new Promise ((resolve, reject) => {
//     // 비동기 작업 실행하는 함수
//     // executor

//     setTimeout(() => {
//         console.log("안녕");
//         resolve("안녕");
//     },2000);
// });

// setTimeout(() => {
//     console.log(promise);
// },3000);

// PromiseState => rejected , PromiseResult => 왜 실패했는지 이유....
// const promise = new Promise ((resolve, reject) => {
//     // 비동기 작업 실행하는 함수
//     // executor

//     setTimeout(() => {
//         console.log("안녕");
//         reject("왜 실패했는지 이유....");
//     },2000);
// });

// setTimeout(() => {
//     console.log(promise);
// },3000);

// PromiseState => fulfilled , PromiseResult => 20
// const promise = new Promise ((resolve, reject) => {
//     // 비동기 작업 실행하는 함수
//     // executor

//     setTimeout(() => {
//         const num = 10;

//         if (typeof num === "number") {
//             resolve(num + 10);
//         } else {
//             reject("num이 숫자가 아닙니다");
//         }
//     },2000);
// });

// setTimeout(() => {
//     console.log(promise);
// },3000);

// PromiseState => fulfilled , PromiseResult => num이 숫자가 아닙니다다
// const promise = new Promise ((resolve, reject) => {
//     // 비동기 작업 실행하는 함수
//     // executor

//     setTimeout(() => {
//         const num = null;

//         if (typeof num === "number") {
//             resolve(num + 10);
//         } else {
//             reject("num이 숫자가 아닙니다");
//         }
//     },2000);
// });

// setTimeout(() => {
//     console.log(promise);
// },3000);

// then 메서드, 체이닝닝
// const promise = new Promise ((resolve, reject) => {
//     // 비동기 작업 실행하는 함수
//     // executor

//     setTimeout(() => {
//         const num = null;

//         if (typeof num === "number") {
//             resolve(num + 10);
//         } else {
//             reject("num이 숫자가 아닙니다");
//         }
//     },2000);
// });

// // then 메서드
// // -> 그 후에
// promise
//     .then((value) => {
//         console.log(value);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

function add10(num){
    const promise = new Promise ((resolve, reject) => {
        // 비동기 작업 실행하는 함수
        // executor
    
        setTimeout(() => {
            if (typeof num === "number") {
                resolve(num + 10);
            } else {
                reject("num이 숫자가 아닙니다");
            }
        },2000);
    });
    return promise;
}

add10(0)
    .then((result) => {
        console.log(result);
        return add10(result);
    })
    .then((result) => {
        console.log(result);
        return add10(undefined);
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });