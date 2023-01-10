(function () {
    emailjs.init("Kl4KwxkE5De5r_acm");
    })();
    // const emailHandler = async (event) => {
    //     event.preventDefault();
    //   const grabEmails = await Emails.findAll({});
    //   const Emails = grabEmails.map((Emails) =>
    //   Emails.get({ plain: true })
    // );
    // {
          
    function sendMail() {
        const emailList = ["john.ifert.miller@gmail.com", "legendary6615@gmail.com", "jbenchimol1999@gmail.com"];
    for (let index = 0; index < emailList.length; index++) {
        // set to variable
    const email = emailList[index];
    if(email) {
    var params = {
      name: 'HermesNewsletter',
      send_to: email,
      message: "test"
      };
      emailjs.send( 'service_oqqo64j', 'template_7rezunv', params).then(function (res) {});
    } else {
      alert('Failed to send email!')
    }
}
    };
    document.querySelector("#sendtocontacts").addEventListener("click", sendMail);
