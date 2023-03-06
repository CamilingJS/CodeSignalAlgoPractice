
const message = function(contact, company, role, linkedIn, jobBoard){
    let msg =
`Hi ${contact}, 

I saw that ${company} is hiring for a ${role} on ${linkedIn ? 'LinkedIn' : jobBoard} and I wanted to reach out. Would it be possible to grab 5 minutes of your time next week to learn more about the open role? Just name a day and time and I'll make it happen! The position description seems to be right up my alley and so I hope we get a chance to connect!

Have a great rest of your week!

Cheers,
Jonathan 

resume: https://drive.google.com/file/d/1IG7GSuqQc5jsuPURMa65rHZsTPgZSK-j/view

portfolio: https://camilingjs.com/

`
    return msg
}

const contact = 'Minh'
const company = 'Bungie'
const role = 'Associate Engine Platforms Engineer'
const linkedIn = true; 
const jobBoard = 'Angelist'
console.log( message(contact, company, role, linkedIn, jobBoard) )

