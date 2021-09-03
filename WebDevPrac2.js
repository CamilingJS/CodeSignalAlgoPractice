

  /*
            Ready to write some DOM code?

            PART I:
            Let's start simple, 
                1. USING JAVASCRIPT, create a <div> element
                2. add the "container" class
                3. append as a child, to the body

            Let's fill that container
                1. USING JAVASCRIPT create 3 <p> elements
                2. fill them with the text...
                    [1] "Yesterday was good" [2] "Today is great" [3] "Tomorrow will be better"
                3. append them as children, to the "container" above

            Now, REFACTOR (update) the code above to use forEach on this array of strings:
                var copy = ["Yesterday was good", "Today is great", "Tomorrow will be better"];
        */
      

          let newEl = document.createElement('div')
          newEl.classList.add('container')
          newEl.style.border = '2px solid black'
          newEl.style.borderRadius = '5px'
          document.body.appendChild(newEl);

          let copy = ["Yesterday was okay", "Today is great", "Tomorrow will be better"];

          copy.forEach(function(copyItem){
            let paragraphItem = document.createElement('p')
            paragraphItem.textContent = copyItem; 
            newEl.appendChild(paragraphItem)
          })
        /*
            PART II:
            Start by creating another element
                1. create a button element
                2. set its text to be "enable dark mode"
                3. set style: 15px padding, no border, "black" background, "white" (text) color -- CAN YOU DO THIS WITH A LOOP?
                4. append as a child, to the "container" class div
        */

          let button = document.createElement('button');
          button.textContent = 'Enable dark mode'
          button.style.cssText = 'color: white; padding: 15px; border: none; background-color: black; border-radius: 5px';
           
          // let styles = {
          //   color: 'white',
          //   padding: '15px',
          //   border: 'none', 
          //   background: 'black',
          //   borderRadius: '5px',
          // };

          // for(let key in styles){
          //   button.style[key] = styles[key]
          // }

          newEl.appendChild(button)
         
          

                  /*  
            Ready to write an event listener?
                1. add a click event listener to the black button
                2. inside the 'click' function, write code that...
                    - changes the background color of the html "body" to "black"
                    then, 
                    - change the background of ".container" to "#777" and color to white
                    - change the button text to black, and the background to white
         */
          let darkModeIsActive = false; 

          button.addEventListener('click', function(){
            if (darkModeIsActive){
              document.body.style.backgroundColor='white';
              newEl.style.cssText='background-color: white; color: black;'
              button.style.cssText='color: white; padding: 15px; border: none; background-color: black; border-radius: 5px';
              button.textContent = 'Enable dark mode'
              darkModeIsActive = false; 
            } else {
              document.body.style.backgroundColor='black';
              newEl.style.cssText='background-color: #777; color: white;'
              button.style.cssText='color: black; padding: 15px; border: none; background-color: white; border-radius: 5px';
              button.textContent = 'Disable dark mode'
              darkModeIsActive = true; 
            }
          
          
          })
            
            


         /*
            BONUS (CHALLENGING): 
            Once dark mode is enabled, can you write code to switch it back to light mode?
                HINT #1: create a boolean variable that indicates whether dark mode is active
                HINT #2: use this for an if statement inside your event listener
                HINT #3: change the button text as well, depending on the state
        */

        