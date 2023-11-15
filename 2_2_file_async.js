const { readFile, writeFile} = require('fs')
console.log("Started");
readFile('./dependencies/first.txt', 'utf8', (err, output1) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = output1;
  readFile('./dependencies/second.txt', 'utf8', (err, output2) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = output2;
    writeFile('./dependencies/result-async.txt', `The result of these 2 is : ${first} ${second}`,{flag:'a'}, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
    // console.log(result)
    console.log("Done with the work")
    })
  })
})
console.log("Moving to the next one")