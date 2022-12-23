const emailTo = document.getElementById("emailTo").val().trim();
const emailFrom = document.getElementById("emailFrom").val().trim();
const cc = document.getElementById("cc").val().trim();
const subject = document.getElementById("subject").val().trim();
const title = document.getElementById("title").val().trim();
const message = document.getElementById("messageText").val().trim();
const imageSrc = document.getElementById("imageSrc");
const submitBtn = document.getElementById("submitForm");

function writeNewsletter() {
   const newsletter =  
   `<div><p>To: ${emailTo}</p>\n
    <p>From: ${emailFrom}</p>\n
    <p>CC: ${cc}</p>\n\n
    <p>Subject: ${subject}</p>
    </div>\n\n
    <div>
    <h2>${title}</h2>\n
    <p>${message}</p>\n
    <img src="${imageSrc}"
    </div>`;

    console.log(newsletter);
}

function submitForm(event) {
    event.preventDefault();

    writeNewsletter();

}

submitBtn.onclick(submitForm);


