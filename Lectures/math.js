function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}
// now you have to export the contents of this file to another file

// module.exports={
//     addn:add,
//     subn: sub
// };

// another method is

exports.add=(a,b)=>a+b;