function fibsRec(seqNum) {
    if (seqNum <= 0) return []
    if (seqNum === 1) return [0]
    if (seqNum > 2) {
        let array = fibsRec(seqNum - 1);
        array.push(array[seqNum - 2] + array[seqNum - 3])
        return array
    } else {
        return [0, 1]
    }
}


let arr = [ 4, 8, 6, 2,
            1, 7, 5, 3,
            9
          ]

function mergeSort(givenArray) {
    if (givenArray.length < 2) return givenArray;
    else {
        let leftHalf = mergeSort(givenArray.splice(0, Math.floor(givenArray.length / 2)));
        let rightHalf = mergeSort(givenArray)
        let j = 0;
        for (let i = 0; i < leftHalf.length; i++) {
            if (rightHalf[j] > leftHalf[i]) {
                leftHalf.splice(i + 1, 0, rightHalf[j])
                i = leftHalf.indexOf(rightHalf[j], i + 1)
            } else if (rightHalf[j] < leftHalf[i]){
                leftHalf.splice(i, 0, rightHalf[j])
                i = leftHalf.indexOf(rightHalf[j], i)
            } else {
                break;
            }
            j = j + 1
        }
        return leftHalf
    }
}

console.log((mergeSort(arr)))
