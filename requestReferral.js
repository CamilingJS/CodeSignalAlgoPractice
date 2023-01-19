const referralRequest = function(recipientName, companyName, position){
let paragraph =
`Subject: Airbyte - ${position} - Request for a Referral 

Dear ${recipientName},

I hope this message finds you well. My name is Jonathan Camiling and I am consistent viewer of your on work on YouTube and appreciate your contributions to the Self-Taught Dev Community. I am reaching out to you because I am seeking a referral for a position at ${companyName}, where I believe my skills and experience align well with the company's needs.

I am particularly interested in the ${position} role and would like to apply for it. I understand that a referral from someone like yourself who is well-respected in the industry would be greatly beneficial in my job search.

I have experience in Web Development, and I am confident that I would make a valuable addition to the team at ${companyName}. I would be honored to have you as my referral and I would be grateful for any support you could offer.

If you are willing to refer me, please let me know and I will forward my resume and cover letter to you. I would be happy to provide you with any additional information that you may require.

Thank you for taking the time to read my message. I look forward to hearing from you soon.

Sincerely,
Jonathan Camiling`

return paragraph

}




const recipientName = 'Justin'
const companyName = 'Airbyte'
const position = 'Software Engineer Intern'
console.log(referralRequest(recipientName, companyName, position))

