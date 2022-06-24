
    function App() {
        var A=[1,2,3];
        var B={
            name:'Elic',
            rank:'Pro'
        }
        var output='';

        A.forEach(function (value,index){
            value=value+1
        })

        A.reduce(function (initValue,value){
            initValue=initValue+value;
            return initValue
        })
        for(var property in B){
            output+= property+': '+B[property]
        }
    }

//  level 1:
// 1. Convert [1, 2, 3] to [2, 3, 4] using one line of code.
// Output should be [2, 3, 4]
// 2. Calculate total of all the numbers in array [1, 2, 3] using one line of code.
// Output should be a number: 6
// 3. Print all the properties of the object along with value {name: 'Elie', rank: 'Pro'}.
// Output should be a string: "name: Elie, rank: Pro"

