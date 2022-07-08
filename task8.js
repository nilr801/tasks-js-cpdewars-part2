function findMissing(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let counter=0;
  for (let i=0; i<arr2.length; i++)
    {
      if (arr1[i]!==arr2[i])
        {
          counter++
          return arr1[i];
        }
    }
  if (counter===0)
    {
      return arr1[arr1.length-1];
    }
}
