/**
 * A function that takes an array of (idealy) 3-5 elements and transforms
 * it into different objects depending on the length of the array
 * 
 * TEST CASES:
 * 
 * fromArray(['Brooks', 'Austin', 25]) 
 * returns: {name: 'Brooks', city: 'Austin', age: 25}
 * 
 * fromArray(['Brooks', 'Lybrand', 'Austin', 25])
 * returns: {name: 'Brooks Lybrand', city: 'Austin', age: 25}
 * 
 * fromArray(['Brooks', 'Lybrand', 'Austin', 'TX', 25])
 * returns: {name: 'Brooks Lybrand', city: 'Austin', state: 'TX', age: 25}
 * 
 */


// conditional -- e.g. length 3 = object literal notation to write the name/ city / age . 
		// ! careful for [] 
        function fromArray(arr) {
            if(!arr || !Array.isArray(arr)) {
            throw new Error("not defined - really not cool")
          }
        
          switch(arr.length) {
            case 3: {
              const [name, city, age] = arr
                return { name, city, age }
            }
            default: {
                      throw new Error('no cool')
            }
          }
            if (arr.length === 3 ){
            const [name, city, age] = arr
            return { name, city, age }
            }else if( arr.length=== 4 ){
            return {name:`${arr[0]} ${arr[1]}`,
                  city:arr[2],
                  age:arr[3]
                          }
        }else if ( arr.length === 5 ) {
            return {name:`${arr[0]} ${arr[1]}`,
                  city:arr[2],
                  state: arr[3],  
                  age:arr[4]
                          }
          } else {
          throw new Error("Not cool")
        }
      } 
      
      
      
              //or 
      
      // array property names - lenght of the array -- add on whichever element from the array would fit it 
                  // problem??? name with names / different keys 
      
      
      //