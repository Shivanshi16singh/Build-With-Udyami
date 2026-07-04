alert("Hello!!");

// array

// can store multiple values
// var arr=[1,2,3,4, func(), [], [1,2,3],"heelooo"];

// now if you have to make changes in each sections of array:
// use forEach
let arr2=[1,2,3,4];

arr2.forEach((val)=>{
    console.log(val+"hello");
});

// map: creates a new array exact same size of the array on which it is used
// map performs an operation on each element same as forEach and returns a new array

let newArr=arr2.map(val=>{
    return val+12;
});

console.log(newArr);

// filter: jb naya array bnana h iski size original array se choti yaa barabar ho

let newarr= arr2.filter((val)=>{
    if(val<12){
        return true ;
    }
});

console.log(newarr);

// find: gives the first occurence

let bool= arr2.find((val)=>{
    if(val==2){
        return true;
    }
});

console.log(bool);

// indexOf: used to provide the index of first occurence of element else returns -1

// object: {}- blank object
// {
// kuchbhi: kuchbhi => this is object
//}

let obj={
    name:"Shivanshi" // key value pairs
}

// access the elements- > obj.name() or obj['name']

// now if you don't want that its value is changed afterwards 
// use freeze

Object.freeze(obj);

// functions:

// length of function: no. of parametres

function abcd(){
    return 12;
}

// async js coding: 