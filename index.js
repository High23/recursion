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

fibsRec(8)

