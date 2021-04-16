let arr = [1, 2, 3, 3, 3, 4, 5, 6, 7, 8, 9];
let v = +prompt("nhập vào một số nguyên");
let i = 0;
// for (let i =0; i<arr.length; i++){
//     if (v===arr[i]){
//         arr.splice(i,1);
//         arr.push(0)
//     }
// }
// document.write(arr)

while (i < arr.length) {
    if (v == arr[i]) {
        arr.splice(i, 1);
    } else {
        i++
    }
}
document.write(arr)
