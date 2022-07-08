function maxTriSum(numbers){
  numbers.sort((a,b)=>a-b);
  let uniqueArray = [...new Set(numbers)]
  let max3=0;
  let max2=0;
  let max1=0;
  if (uniqueArray.length>=3)
    {
  max3=uniqueArray[uniqueArray.length-1];
       max2=uniqueArray[uniqueArray.length-2];
       max1=uniqueArray[uniqueArray.length-3];
  }
  else if (uniqueArray.length===2)
    {
      max3=uniqueArray[uniqueArray.length-1];
       max2=uniqueArray[uniqueArray.length-2];
    }
  else if (uniqueArray.length===1)
    {
      max3=uniqueArray[uniqueArray.length-1];
    }
  return (max1+max2+max3);
}
