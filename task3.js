function add(num1, num2) {
  let masRez=[];
  num1 = ('' + num1).split('').reverse()
  num2 = ('' + num2).split('').reverse()
  let maxLength = Math.max(num1.length, num2.length)
  for (let i=0; i<maxLength; i++)
      {
      masRez.push((parseInt(num1[i])||0)+(parseInt(num2[i])||0));
      }
  num1 = masRez.reverse().join('');
  return parseInt(num1);
}
