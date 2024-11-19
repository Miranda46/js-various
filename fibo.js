function fibonacci(n, list = []) {
    console.log("This was printed recursively");

    if (list.length === 0){
        return fibonacci(n, [ 0 ]);
    } 
    if (list.length === 1){
        return fibonacci( n, [ 0, 1 ] );
    }
    if (list.length === n){
        return list;
    }
    else {
        return fibonacci(n, [...list, list[list.length - 1] + list[list.length - 2]]);
    }
}

console.log(fibonacci(8))