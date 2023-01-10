// const emailTo = document.getElementById("emailTo").val().trim(); //require the array of recipients
// const emailFrom = document.getElementById("emailFrom").val().trim(); //user logged in
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
       <link
         href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
         rel="stylesheet"
         integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
         crossorigin="anonymous"
       />
       <title>Newsletter Preview</title>
     </head>
     <body
       class="p-1 m-2 align-items-center"
       style="background-color: rgb(0, 13, 73)"
     >
       <header
         id="header"
         class="d-flex p-3 m-auto"
         style="top: 0; flex-direction: column; max-width: 99vw; border-bottom: 5px solid rgb(123, 121, 121); border-radius: 0px 200px;background-color: rgb(255, 236, 172); color: rgb(34, 33, 33)"
       >
         <div style="padding-left: 100px;">
           <p>To: <span>{{user.mailingList}}</span> </p>
           <p>From: <span>{{user.email}}</span></p>
           <p>Subject: <span>{{newsletter.subject}}</span></p>
         </div>
       </header>
       <main
         class="p-3 mx-auto rounded-1"
         style="margin-top: 20px; max-width: 80vw; background-color: rgb(156, 202, 255); min-height: 70vh;"
       >
   
         <img
           src="http://wonderfulengineering.com/wp-content/uploads/2014/05/twitter-header-photo-14.jpg"
           class="d-flex"
           style="margin: auto; max-width: 100%;"
         />
         <div
           class="p-4"
           style="margin: auto; background-color:rgb(218, 225, 255); text-align: center; max-width: 100%;"
         >
           <h2>{{newsletter.title}}</h2>
         </div>
         <br />
         <div
           style="padding: 50px; margin: auto; display: flex; flex-direction: column;"
         >
           <p>{{newsletter.content}}</p>
         </div>
       </main>
       <footer>
         <button
           type="button"
           name="deleteEmail"
           id="deleteEmail"
         >Unsubscribe</button>
         <p>HERMES Digital Communications</p>
   
       </footer>
       <script src="./assets/script.js"></script>
       <script
         src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
         integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
         crossorigin="anonymous"
       ></script>
   
     </body>
   </html>`;

    console.log(newsletter);
}

function submitForm(event) {
    event.preventDefault();

    writeNewsletter();

}

submitBtn.onclick(submitForm);


