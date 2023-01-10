// const emailTo = document.getElementById("emailTo").val().trim(); //require the array of recipients
// const emailFrom = document.getElementById("emailFrom").val().trim(); //user logged in
function submitForm(event) {
  event.preventDefault();
const newsletter = require('../models/Newsletter.js');
const subject = document.getElementById("subject").value.trim(); //user input
const title = document.getElementById("title").value.trim(); //user input
const message = document.getElementById("messageText").value.trim(); //user input
const image = document.getElementById("headerImgMenu").value; //user input


function checkImg() {
  if (subject && title && message) {
    if (image !== "None") {
      if (image == "Purple Palms") {
        const imgSrc =
          "https://binaryfortressdownloads.com/Download/WPF/Images/18188/WallpaperFusion-palm-trees-on-the-beach-1680x480.jpg";
        return imgSrc;
      } else if (image == "Misty Mountains") {
        const imgSrc = "https://wallpapercave.com/wp/DOZLLYi.jpg";
        return imgSrc;
      } else if (image == "Urban Legends") {
        const imgSrc = "https://avante.biz/wp-content/uploads/Urban-Wallpaper/Urban-Wallpaper-003.jpg";
        return imgSrc;
      } else if (image == "Calm Countryside") {
        const imgSrc = "https://coolwallpapers.me/picsup/3101636-calm_clouds_countryside_dawn_dusk_field_grass_idyllic_light_morning_nature_peaceful_quiet_scenic_sky_summer_sun_sunrise_sunset_tranquil_travel_trees.jpg";
        return imgSrc;
      }

      const imageHTML = `<img
src="${imgSrc}" 
class="d-flex"
style="margin: auto; max-width: 100%;"
/>`;
      return imageHTML;
    } else {
      const imageHTML = `<br/>`;
      return imageHTML;
    }
  }
  return imageHTML;
}

function writeHTML() {

  checkImg();

  const newsletterHTML = `<!DOCTYPE html>
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
       <title>${title}</title>
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
           <p>To: <span>My Subscribers</span></p>
           <p>Subject: <span>${subject}</span></p>
         </div>
       </header>
       <main
         class="p-3 mx-auto rounded-1"
         style="margin-top: 20px; max-width: 80vw; background-color: rgb(156, 202, 255); min-height: 70vh;"
       >
   
         ${imageHTML}
         <div
           class="p-4"
           style="margin: auto; background-color:rgb(218, 225, 255); text-align: center; max-width: 100%;"
         >
           <h2>${title}</h2>
         </div>
         <br />
         <div
           style="padding: 50px; margin: auto; display: flex; flex-direction: column;"
         >
           <p>${message}</p>
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

  console.log(newsletterHTML);
  return newsletterHTML;

}

  writeHTML();

  const response = await fetch('/api/newsletter/saved', {
    method: 'POST',
    body: JSON.stringify({
      title,
      message
    }),
    headers: {
      'Content-Type': 'application/json'
    },
  });

  if(response.ok){
    document.location.replace('/');
  } else {
    alert('Could not save newsletter. Please try again.')
  }
}

const saveBtn = document.getElementById("saveBtn");
saveBtn.onclick(submitForm);

const cancelBtn = document.getElementById("cancelBtn");
cancelBtn.onclick();

