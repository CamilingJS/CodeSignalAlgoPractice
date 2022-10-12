// const invoices = [
//     {
//       id: 1,
//       amountDueInCents: 10000,
//       amountAleadyPaidInCents: 500,
//       title: "Car Wash",
//       description: ""
//     },
//     {
//       id: 2,
//       amountDueInCents: 10000,
//       amountAleadyPaidInCents: 500,
//       title: "Car Repair",
//       description: ""
//     },
//     {
//       id: 3,
//       amountDueInCents: 10000,
//       amountAleadyPaidInCents: 500,
//       title: "Car Repair",
//       description: ""
//     },
//   ];
  



//   function totAmountDue(invoices){
//     let totalAmountDue = 0; 
//     for (i=0; i<invoices.length; i++){
//       totalAmountDue += invoices[i].amountDueInCents - invoices[i].amountAleadyPaidInCents
      
//     }
//     return totalAmountDue
// }

// console.log(totAmountDue(invoices))



function onCheckboxChange() {
    const userId = document.getElementById("userId")?.value;
    if(!userId) return; 
    const wantsNewsletter = document.getElementById("newsletter-checkbox")?.checked;
    const wantsSalesNews = document.getElementById("coupons-checkbox")?.checked;
    if(wantsNewsletter === undefined || wantsSalesNews === undefined ) return;
    fetch("https://fancy-cars.com/api/v1/privacy-center", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
         newsletter: wantsNewsletter,
         coupons: wantsSalesNews,
         userId,
      })
   })
 }
 document.getElementById("newsletter-checkbox")?.addEventlistener("change", onCheckboxChange)
 document.getElementById("coupons-checkbox")?.addEventlistener("change", onCheckboxChange)





 d)
function isSubmitButtonDisabled() {
  return !!document.getElementById("username-input").value
  || !!document.getElementById("password-input").value
  || !document.getElementById("username-input").value.length > 50
  || !document.getElementById("username-input").value.length < 5
  || document.getElementById("password-input").value.length < 10
  || !(userIsLoggedIn() || userClickedResetPassword())
}

A: console.log(name) - What is name? And is "Hi!!!!" in the console?
*/


function isSubmitButtonDisabled() {
  const usernameElement = document.getElementById("username-input");
  const passwordElement = document.getElementById("password-input");
  if(!usernameElement || !passwordElement) return true;
  const username = usernameElement.value || ""; 
  const password = usernameElement.value || "";
  
  const isUsernameInvalid = username.length > 50 || username.length < 5;
  const isPasswordInvalid = password.length < 10;
  const userCanNotSubmit = !(userIsLoggedIn() || userClickedResetPassword());
  
  console.log("isUsernameInvalid", isUsernameInvalid)
  console.log("isPasswordInvalid", isPasswordInvalid)
  console.log("userCanNotSubmit", userCanNotSubmit)
  
  return isUsernameInvalid || isPasswordInvalid || userCanNotSubmit;
}






// boolean logic: demorgan's law
!(a && b) = !a || !b
!(a || b) = !a && !b


!(a || b || c || d) => !a && !b && !c && !d
!(a && b && c && d) => !a || !b || !c || !d





