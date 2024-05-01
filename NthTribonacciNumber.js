function tribonacci(n) {
    let arr = new Array(n + 1);

    arr[0] = 0;
    arr[1] = 1;
    arr[2] = 1;

    for (let i = 3; i < arr.length; i++) {
        arr[i] = arr[i - 3] + arr[i - 2] + arr[i - 1];
    }

    return arr[n];
}

console.log(tribonacci(25));
