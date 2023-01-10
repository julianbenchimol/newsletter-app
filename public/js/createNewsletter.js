const renderNewsletterForm = async (event)=>{
    event.preventDefault();
    alert('button click')

    const response = await fetch('/api/newsletter');

    if(response.ok){
        document.location.replace('/api/newsletter')
    }
    else {
        alert('Bad Request')
    }
}

document
    .querySelector('#create-newsletter')
    .addEventListener('click', renderNewsletterForm)