console.log('hello world')
let a = 10;

//隐式any
function fn(a: number, b: number) {
    return a + b
}

function fn2(this: Window) {
    console.log(this);

}

let box1 = document.getElementById('box1')
/* if (box1 !== null) {
    box1.addEventListener('click', function () {
        alert('hello')
    })
} */

box1?.addEventListener('click', function () {
    alert('hello')
})
