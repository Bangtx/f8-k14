// for (let i = 0; i < 5; i ++) {
//     console.log(i)
// }

const url = 'https://pmjsc.com.vn/';

while (true) {
    const response = fetch(url)
    console.log(`Status: ${response.status}`);
}