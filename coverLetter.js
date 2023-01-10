

function coverLetter (title, companyName) {

 const date = new Date()

 let paragraph = `
Jonathan Camiling
(650) 246-4953
jonathan@jaycam.dev
 
${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}
 
Dear Hiring Manager, 
 
I am excited to be applying for the position of ${title} with ${companyName}. I’ve been programming web applications using HTML, CSS, JavaScript, and React to create responsive and user-friendly experiences since 2019. As a self-taught developer, I am currently leaning on the freelance market to strengthen my knowledge and experience, particularly in E-Commerce, to hone my Software Development skills. 
 
I am currently a Lead Billing Specialist and have obtained 7+ years of experience servicing 40+ clients nationwide in the Employee Benefits field. Overseeing 4+ million dollars in monthly transactions, I play an integral role in designing, collaborating, and deploying tools for billing efficiencies, accurate financial transactions, client implementation, and customer satisfaction. I believe my experiences in communicating with low to top-level managers, my focus on customer success, and my collaborative mindset would be of great value as a ${title} with ${companyName}. Due to my perpetual desire to learn, I learned how to code, albeit later in my career. I am a Software Engineer with a rigorous training agency program, which has expanded my skills, tools, knowledge, and creativity where I can passionately and purposely create solutions for client problems and needs. 

I believe my experience in business finance, my passion for coding, and my knack for graphic and web design would make me a great fit as a ${title} at ${companyName}. As a member of your team, I am confident I would be able to tackle complex challenges, resolve minor bugs, monitor the technical performance of internal systems, enthusiastically participate in the development of automated unit tests, and collaborate and communicate effectively with the team. For further review of my work, I invite you to my freelance business website at www.jaycam.dev and my Github profile www.github.com/CamilingJS. I hope you will consider my application and I look forward to hearing from you.		
 
Sincerely,
 
Jonathan Camiling
 
 `

 return paragraph

}

let title ="Software QA Engineer"
let companyName ="Beta Breakers"

console.log(coverLetter (title, companyName));


