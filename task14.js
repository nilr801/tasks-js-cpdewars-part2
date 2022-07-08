function isPowerOfTwo(n){
  if (n===1)
        {
          return true;
        }
  if (n===0)
        {
          return false;
        }
  while (n>1)
    {
      if (n%2===0)
        {
          n=n/2
          if (n===1)
            {
              return true;
            }
        }
      else return false
    }
}
