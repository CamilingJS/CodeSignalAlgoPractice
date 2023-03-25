

function coverLetter (title, companyName, norcal) {

 const date = new Date()

 let paragraph = `
Jonathan Camiling

${norcal===true ? '(650) 246-4953':'(562) 391-7228'}
jonathan@jaycam.dev
 
${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}
 
Dear Hiring Manager, 
 
I am excited to be applying for the position of ${title} with ${companyName}, which I have found via the ${jobBoard} job board. I share the passion for building and creating in all things web, especially in Frontend Web Development which I hope to play a role and contribute with impact to the ${companyName} team. 
 
As a Lead Billing Specialist, I have obtained 7+ years of experience servicing 40+ clients nationwide in the Employee Benefits field. Overseeing 4+ million dollars in monthly transactions, I have experience working in high-intensity workflows delivering quality and accurate work under tight deadlines. Now as a Frontend Software Developer with JayCam.Dev, my self-founded freelance agency, I work on a variety of full-stack applications from custom design, coding, and product development. Currently, my focus is understanding the E-Commerce space by customizing Shopify themes using the Liquid template language and building a full-stack app called "KimbapShop" an online store selling K-Pop merchandise built on React, Redux Toolkit, Express, NodeJS, and MongoDB. 

My resourcefulness, determination, and hard work ethic make me a perfectly capable candidate for the ${title} role with the ${companyName} team. Thank you for taking the time to review my resume and consider my application. I am excited to bring a multitude of experience and expertise to an organization like yours, where I can contribute to the effort of providing transformational services and products to ${companyName} stakeholders. I look forward to hearing back from you soon.  
 
Sincerely,
 
Jonathan Camiling
 
 `

 return paragraph

}

let title ="Web Developer"
let companyName ="Indigo Billing"
let jobBoard = "Indeed"
let norcal = false

console.log(coverLetter (title, companyName, norcal));


