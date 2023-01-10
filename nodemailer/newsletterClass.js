class SavedNewsletter {
    //Constructor function for employee takes the name, id, and email values
    constructor(sender, mailingList, subject, message, html,imageURL) {
        this.sender = sender;
        this.mailingList = mailingList;
        this.subject = subject;
        this.message = message;
        this.html=html;
        this.imgURL = imageURL;
        this.dateCreated = getDate();

}
}
module.exports = SavedNewsletter;