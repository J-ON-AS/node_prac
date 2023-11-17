const {readFile,writeFile} = require('fs').promises;

// Second Approach
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// First Approach

// const getText = (path) =>{
//   return new Promise((resolve , reject)=>{
//     readFile(path,'utf8',(err,data)=>{
//       if(err){
//         reject(err)
//       }else{
//         resolve(data)
//       }
//     })
//   })
// }

const start = async () => {
  try {
    const first = await readFile('./dependencies/first.txt','utf8');
    const second = await readFile('./dependencies/second.txt','utf8');
    console.log(first,second);
    await writeFile('./dependencies/second.txt',`My name is Adarsh Dev Singh aka ${first} & sometimes ${second}`,{flag :'a'})
  } catch (error) {
    console.log(error);
  }
}
start();