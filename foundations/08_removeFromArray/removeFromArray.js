const removeFromArray = function (arr, ...toRemove) {
  const result = arr.slice();

  for (let i = 0; i < toRemove.length; i++) {

    for (let j = 0; j < result.length; j++) {
      if (result[j] === toRemove[i]) {
        result.splice(j, 1);
        j--;
      }
    }
    
  }

  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
