# How to solve React take-home exercise (from zero to hero)
 ###
 ### 1.) Read the instructions and create yourself a TODO list
 ####     WHAT do I have to do:
 ####   - Required:  "Use the force."
 ####     ☑ Force name and email required for submission
 ####     ☑ Force email to be a valid email
 ####     ☑ Force name and email 120 character max limit
 ####     ☑ Display a green "Subscribed!" message below the "Subscribe" button if the user successfully subscribes
 ####     ☑ Reset form after successful submission
 ####     ☑ Clear "Subscribed" if user starts typing again
 ####   - Optional:
 ####     ☑ Make it responsive
 ####     ☑ Make form accessible / readable by screenreader
 ####     ☑ Persist form data across different sessions
 ####     ☑ Indicate loading while waiting for server response
 ####     ☑ Display error that device is currently offline
 ### 2a.) START HELLA SIMPLE! For every TODO or feature, do:
 ####   HOW we implement it:
 ####   a) Start with the markup (HTML)! Build the static HTML.
 ####   b) Define the application states the user can be in.
 ####   c) Implement the application state in React (Vue, etc.)
 ####   d) Implement the interaction handlers that update the state.
 ####   e) Make markup conditional/dynamic based on state
 ####   f) Test implementation, debug, pray, and continue;
 ### 2b.) Implementation notes, design decisions (document while doing)
 ####   HOW we implement it:
 ####  - Instead of using state for input fields (value, onChange),
 ####    I decided to use the web standards around the form element
 ####    and form data APIs to access the input values in the
 ####    onSubmit function! This way we reduce the amount of state
 ####    that we have to manage and avoid unnecessary re-renders.
 ####  - Instead of using a div for our button, we use the button
 ####    element to take advantage of semantic HTML and improve
 ####    accessibility!

 ### 3.) Refine! DON'T DO THIS FIRST! DEBUGGING OVER-COMPLICATED CODE IS HARD!
 ####   a) Make things consistent:
 ####      !!Follow conventions/patterns that already exist, and if not exist, then create your own patterns/conventions!!
 ####     - Find patterns already in the code base and update your code to follow them
 ####     - Indenify inconsistencies in your code, and create your patterns if none already exists
 ####     - Variable, function, classes, state, etc. naming conventions (it's about consistency)
 ####       - e.g. Every boolean state starts with `is..`: `isOpen`, `isPlayingInTheBackground`.
 ####     - File naming conventions
 ####   b) Document things
 ####     - Add a JSDoc comment to every function
 #### - Enhance your implementation notes (step 2)
 ####   c) Make accessibility improvements and document them
 ####
 ####
 ####
 #### Note consistency
 ####
 ####
