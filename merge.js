function mergesort(left, right, list){
    let mid = Math.floor((left + right)/2);
    if ((mid - left) > 1){
        mergesort(left, mid, list);
    }
    if (( right - mid ) > 1 ){
        mergesort(mid, right, list);
    }
    return merge(left, right, mid, list);
}

function merge(left, right, mid, list){
    let i = 0;
    let j = 0;
    let listado = [];
    let R = [];
    let L = [];
    let nL = mid - left;
    let nR = right - mid;
    let k = left;

    for (let m = left; m<mid; m++){
        L.push(list[m]);
    }
    for (let m = mid; m<right; m++){
        R.push(list[m]);
    }
    

    while ( true ) {
        if ( i >= nL ){
            break;
        }
        if ( j >= nR ){
            break;
        }
        if ( L[i] > R[j] ){
            listado.push(R[j]);
            list[k] = R[j];
            j++;
        } else {
            listado.push(L[i]);
            list[k] = L[i];
            i++;
        }
        k++;
    }

    for (let m = i; m < nL; m++){
        listado.push(L[m]);
        list[k] = L[m];
        k++;
    }
    for (let m = j; m < nR; m++){
        listado.push(R[m]);
        list[k] = R[m];
        k++;
    }
    return listado;
}


let lista = [9,4,5,6,2,7,1,0];
let listalen = lista.length;
console.log(mergesort(0, listalen, lista));