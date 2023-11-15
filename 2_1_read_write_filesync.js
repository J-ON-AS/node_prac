const { readFileSync, writeFileSync } = require('fs')
console.log("Started");
const first = readFileSync('./dependencies/first.txt', 'utf8')
const second = readFileSync('./dependencies/second.txt', 'utf8')
console.log(first, second)
writeFileSync('./dependencies/first.txt','My name is The Wolverine',{flag : 'a'});
writeFileSync('./dependencies/second.txt','My name is Logan',{flag : 'a'}
,console.log("Done with the work")
);
console.log("Moving to the next one")