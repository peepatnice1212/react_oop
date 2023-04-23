const fs = require("fs");
const p = "./listfoldertree";
const Listobj = (dir) => {
  const n = fs.readdirSync(dir);
  const data = [];
  fs.readdirSync(dir).forEach((element) => {
    const k = `${dir}/${element}`;
    const p1 = { title: element, key: k };
    if (!element.includes(".png") && !element.includes(".dcm")) {
      p1.children = Listobj(k);
    } else {
      p1.isLeaf = true;
    }
    if (!element.includes(".png")) {
      data.push(p1);
    }
  });
  //   console.log(dir, data);
  return data;
};
// console.log(Listobj(p)[0]);
const l = Listobj(p);
console.log(l);

let data = JSON.stringify(l, null, 2);
fs.writeFileSync("listtree.json", data, (err) => {
  if (err) {
    throw err;
  }
  console.log("Data written to file");
});
