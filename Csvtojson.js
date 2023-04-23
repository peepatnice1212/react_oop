const csvFilePath1 = "./sample_submission.csv";
const csvFilePath2 = "./train_labels.csv";
const csv = require("csvtojson");
const fs = require("fs");
csv()
  .fromFile(csvFilePath1)
  .then((jsonObj) => {
    console.log(jsonObj);
    fs.writeFileSync(
      "sample_submission.json",
      JSON.stringify(jsonObj, null, 2),
      (err) => {
        if (err) {
          throw err;
        }
      }
    );
  });

csv()
  .fromFile(csvFilePath2)
  .then((jsonObj) => {
    console.log(jsonObj);
    fs.writeFileSync(
      "train_labels.json",
      JSON.stringify(jsonObj, null, 2),
      (err) => {
        if (err) {
          throw err;
        }
      }
    );
  });
/**
 * [
 * 	{a:"1", b:"2", c:"3"},
 * 	{a:"4", b:"5". c:"6"}
 * ]
 */
// let n = data.filter(function (x) {
//   return x.id;
// });
// console.log(n.length);
// let data = [];
// data.push(jsonObj);

// Async / await usage
// const jsonArray = await csv().fromFile(csvFilePath);
