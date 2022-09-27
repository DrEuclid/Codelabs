function isBigEnough(value) {
    return value < 10;
  }
  
  const filtered = [1, 5, 10, 15, 20].filter(isBigEnough);

  console.log (filtered)