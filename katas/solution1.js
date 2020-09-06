function checkExam(array1, array2) {
    let totalMarks = 0;
    let j = 0;
    for (j in array1) {
        if(array1[j] === array2[j]) {
            totalMarks += 4;
        } else if(array2[j] === "") {
            totalMarks += 0;
        } else {
            totalMarks -= 1;
        }
    }
    if(totalMarks < 0) {
        totalMarks = 0;
    }
    return totalMarks;
}