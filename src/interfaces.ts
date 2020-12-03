// ts中的interface(接口)


// 1.1 interface用来描述参数

interface LablededValue {
  label: string;
}

function printLabel(labeledObj: LablededValue) {
  console.log(labeledObj.label)
}

let myObj = { size: 10, label: 'size 10 label' };

printLabel(myObj)