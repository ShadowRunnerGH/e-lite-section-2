function checkExam(arr1, arr2) {
    let totalMarks = 0;
    let j = 0;
    for (j in arr1) {
        if(arr1[j] === arr2[j]) {
            totalMarks += 4;
        } else if(arr2[j] === "") {
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