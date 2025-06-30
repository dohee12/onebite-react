// async
// 어떤 함수를 비동기 함수로 만들어주는 함수
// 함수가 프로머스를 반환하도록 변환해주는 그런 키워드

async function getData() {
//     return {
//         name: "김도희",
//         id: "winter",
//     };
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "김도희",
                id: "winter"
            });
        }, 1500);
    })
}

console.log(getData());

// await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData(){
    // getDate().then((result) => {
    //     console.log(result);
    // });
    
    const data = await getData();
    console.log(data);
}

printData();