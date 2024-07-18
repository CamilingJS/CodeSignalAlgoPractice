

function coverLetter (title, companyName, norcal) {

 const date = new Date()

 let paragraph = `
Jonathan Camiling

${norcal===true ? '(650) 246-4953':'(562) 391-7228'}
jonathan@jaycam.dev
 
${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}
 
Dear Hiring Manager,  
  
I am excited to apply for the position of ${title} with ${companyName}, which I have found via the ${jobBoard} job board. I share a passion for building and creating in all things web, especially in Frontend Web Development which I hope to play a role and contribute with impact to the ${companyName} team. ${customBlurb}
  
As a Lead Billing Specialist, I have obtained 8+ years of experience servicing 40+ clients nationwide in the Employee Benefits space. My mantra is to connect and achieve high satisfaction for all my clients, from small local churches to large tech companies like Discord and Evernote. Overseeing 5+ million dollars in monthly transactions, I have experience working in high-intensity workflows and I deliver quality and accurate work under tight deadlines. Now, as a Frontend Software Developer with JayCam.Dev, my freelance agency, I work on a variety of full-stack applications from custom design, coding, and product development. Currently, my focus is navigating the eCommerce space by customizing Shopify themes using Liquid and building a full-stack app called "KimbapShop" an online store selling K-Pop merchandise built on React, Redux Toolkit, Express, NodeJS, and MongoDB.  
 
My resourcefulness, determination, and hard work ethic make me a perfect candidate for the ${title} role with the ${companyName} team. Thank you for taking the time to review my resume and consider my application. I am excited to bring a multitude of experience and expertise to an organization like yours, where I can contribute to providing transformational services and products to ${companyName} customers. I look forward to hearing back from you soon.   
  
Sincerely, 
  
Jonathan Camiling
 
 `

 return paragraph

}

let title ="Front-End Web Developer"
let companyName ="Sonance"
let jobBoard = "Indeed"
let norcal = false
let customBlurb = "My goal is to utilize and hone my experience of development best practices to assist in spreading the knowledge of transformational electronic products like Sonance speakers."

console.log(coverLetter (title, companyName, norcal));


