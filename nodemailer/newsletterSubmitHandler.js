const emailTo = document.getElementById("emailTo").val().trim();
const emailFrom = document.getElementById("emailFrom").val().trim();
const subject = document.getElementById("subject").val().trim();
const title = document.getElementById("title").val().trim();
const message = document.getElementById("messageText").val().trim();
const imageSrc = document.getElementById("imageSrc");
const submitBtn = document.getElementById("submitForm");

function writeNewsletter() {

   const newsletterHTML = `<div><img src="${imageSrc}">
   \n<p>To: ${emailTo}</p>
   \n<p>From: ${emailFrom}</p>
   \n<p>Subject: ${subject}</p>
    </div>
    \n
    \n<div><h2>${title}</h2>
    \n<p>${message}</p>   
    </div>`;

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




