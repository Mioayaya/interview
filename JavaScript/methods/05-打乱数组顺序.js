// fisher-yates-shuffle

// 从最后一位往前 随机换位置

let stu = ['张三','李四','王五','蔡徐坤','鸡你太美'];
let length = stu.length,index;

console.log(stu);

for(let point=length-1;point>=0;point--) {
  index = Math.floor(Math.random() * length);
  let temp = stu[index];
  stu[index] = stu[point];
  stu[point] = temp;
}

console.log(stu);