// Prompt
// In this exercise, you're tasked with implementing a function that flattens an array of arbitrarily nested arrays of elements into a flat array of elements.
// A flat array is an array that does not contain any nested arrays.
// For example the array:
// [1, [2, [3, [4]], 5]]
// is flattened to:
// [1, 2, 3, 4, 5]
// Requirements
// The function should take two arguments: the array to flatten and the depth of the flattening.
// The depth argument is optional and defaults to 1.
// If the depth argument is 0, the array should not be flattened at all.
// Otherwise, the array should be flattened recursively up to the specified depth.
// For example:
// flat([1, [2, [3, [4]], 5]], 2)
// should return:
// [1, 2, 3, [4], 5]
// It is recommended that you try to solve this problem iteratively and recursively.

const flatIterative = (array, depth = 1) => {
    const result = [];
    const stack = [...array];
    while (stack.length) {
      const next = stack.pop();
      if (Array.isArray(next) && depth > 0) {
        stack.push(...next);
        depth--;
      } else {
        result.push(next);
      }
    }
    return result.reverse();
  }
  
  const flatIterativeAlternative = (array, depth = 1) => {
    while (depth > 0) {
      array = [].concat(...array);
      depth--;
    }
    return array;
  }
  
  const flatRecursive = (array, depth = 1) => {
    if (depth === 0) {
      return array;
    }
    return array.reduce((acc, val) => {
      if (Array.isArray(val)) {
        return acc.concat(flatRecursive(val, depth - 1));
      }
      return acc.concat(val);
    }, []);
  };
  
  const flatRecursiveAlternative = (array, depth = 1) => {
    return depth > 0
      ? array.reduce(
        (acc, val) =>
          acc.concat(Array.isArray(val) ? flatRecursiveAlternative(val, depth - 1) : val),
        []
      )
      : array.slice();
  }
  
  
  export const flat = flatIterative;
  
  // Test your solution below:
  export const runner = () => {
    const array = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
    const depth = 2;
    const result = flat(array, depth);
    console.log(result);
  }