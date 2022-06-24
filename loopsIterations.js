// level {1}
function pyramid(n){
    var output='';
    for(let i=1;i<=n;i++){
        for (let j=1;j<=i;j++){
            output+=j+' ';
        }
        console.log(output);
        output='';
    }
}

// Write a function in Javascript to print the following pattern.

// ```
//       1
//     1 2 1
//   1 2 3 2 1
// 1 2 3 4 3 2 1
// ```