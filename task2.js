function mergeArrays(arr1, arr2) {
  let arr3=[];
  let arrPust=[];
   if (arr1.length===0 && arr2.length===0)
    {
      return arrPust;
    }
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let arr = arr1.concat(arr2).sort((a, b) => a - b);
  for (let i=0; i<arr.length; i++)
    {
      if (arr[i] !== arr[i + 1]) {
      arr3.push(arr[i]);
    }
  }
 
  return arr3;
  }
