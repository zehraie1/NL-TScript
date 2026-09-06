let arr =[
    [1,2,3],
    [4,5,12,60,10,6],
    [79,89,90]
]
//length of the array number of rows decide the length of the array
console.log(arr.length); // 3
// length of the first row
console.log(arr[0].length); // 3
console.log(arr[1].length); // 6
//accessing the elements of the array 12
console.log(arr[1][2]); // 12

// entire array
console.log(arr); // [[1,2,3],[4,5,12,0,0,6],[79,89,90]]

//for loop with index approach
for(let i=0;i<arr.length-1;i++){
    
    for(let j=0;j<arr[i].length-1;j++){
        console.log(arr[i][j]);
    }
}


