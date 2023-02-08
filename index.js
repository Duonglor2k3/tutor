const duong = ["man ct", "man ut"];

const test = duong.filter(function (item, index) {
  if (item.slice(0, 3).toLowerCase() == "man") {
    return item;
  }
});
console.log(test);
