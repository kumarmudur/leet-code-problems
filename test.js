function solution(arr) {
    let large = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(large < arr[i]) {
            large = arr[i]
        }
    }
    return large - 1;
}

console.log(solution([1, 3, 6, 4, 1, 2]));