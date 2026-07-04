const fs= require('fs'); 
// this fs is required in file handling

// this is synchronous file
// fs.writeFileSync("./test.txt","hey here");

// this is asynchronous file
// fs.writeFile("./test.txt","hey there",(error)=>{});

// sync file => read => stores inside var
// const res= fs.readFileSync("./contact.txt","utf-8");
// console.log(res);

// async file=> does not store inside variable => always expects a call back function
// fs.readFile("./contact.txt","utf-8",(err,result)=>{
//     if (err){
//         console.log('error', err);
//     }else{
//         console.log(result);
//     }
// });

// sync append file
// here you can store things:
// do not remove the data.. just append inside it
fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());

// to create a new folder/ directory
fs.mkdirSync("my-docss");