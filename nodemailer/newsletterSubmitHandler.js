const emailTo = document.getElementById("emailTo").val().trim(); //require the array of recipients
const emailFrom = document.getElementById("emailFrom").val().trim(); //user logged in
const subject = document.getElementById("subject").val().trim(); //user input
const title = document.getElementById("title").val().trim(); //user input
const message = document.getElementById("messageText").val().trim(); //user input
const imageSrc = document.getElementById("imageSrc"); //user input
const submitBtn = document.getElementById("submitForm");

function writeNewsletter() {

   const newsletterHTML = 
   `<!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta http-equiv="X-UA-Compatible" content="IE=edge" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <link rel="stylesheet" href="./assets/style.css"/>>
       <title>Email Newsletter</title>
     </head>
     <body>
       <header id="top">
       
       </header>
       <main>
         <!-- Student code goes here -->
         <div class="d-flex" style="flex-direction: column;"><img src="${imageSrc}" class="d-flex">
        \n<p>To: ${emailTo}</p>
        \n<p>From: ${emailFrom}</p>
        \n<p>Subject: ${subject}</p></div>
       \n
       \n<div><h2>${title}</h2>
       \n<p>${message}</p>   
       </div>
       </main>
       <footer>
         
       </footer>
       <script src="./assets/script.js"></script>
     </body>
   </html>`;

    console.log(emailTo, /*The email from field should be the email of the user logged in */, subject, title, message, newsletterHTML);

    const newsletterObj = {
        'To': emailTo, //an array of subscribers
        'From': '', //user logged in,
        'Subject': subject,
        'Text': message,
        'HTML': newsletterHTML
    }

    return newsletterObj;
}

function submitNewsletter(event) {
    event.preventDefault();

    writeNewsletter();

}

submitBtn.onclick(submitNewsletter);

module.exports = submitNewsletter;




