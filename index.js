// add solution here
function theBeatlesPlay(musicians, instruments) {
  let bandArr = [];
  for (let i = 0; i < musicians.length && instruments.length; i++) {
    bandArr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
return bandArr;
}
function johnLennonFacts(arr) {
  let i = 0;
  let updArr = [];
  const excl = '!!!';

  while(i < arr.length) {
    if(i % 2 === 0) {
      updArr.push(arr[i] + excl);
    } else {
      updArr.push(arr[i] + excl);
    }
    i++
  }
  return updArr;
}
function iLoveTheBeatles(num) {
  let fans = [];
  let addStmt = () => fans.push('I love the Beatles!');

  do {
    diffStmt();
    num++;
  } while (num > 0 && num < 15);
  if (num > 15) {
    diffStmt();
  }
  return fans;
}
