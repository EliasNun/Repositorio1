popupWhatsApp = () => {
    let btnClosePopup = document.querySelector('.closePopup');
    let btnOpenPopup = document.querySelector('.whatsapp-button');
    let popup = document.querySelector('.popup-whatsapp');
    let sendBtn = document.getElementById('send-btn');
 
    btnClosePopup.addEventListener("click",  () => {
        popup.classList.toggle('is-active-whatsapp-popup')
        popupWhatsApp = () => {
     btnOpenPopup.addEventListener("click",  () => {
        popup.classList.toggle('is-active-whatsapp-popup')
    })
    
    sendBtn.addEventListener("click", () => {
    let msg = document.getElementById('whats-in').value;
    let relmsg = msg.replace(/ /g,"%20");

       window.open('https://wa.me/521557153381?text='+relmsg, '_blank'); 
    });

    setTimeout(() => { 
        popup.classList.toggle('is-active-whatsapp-popup');
    }, 3000);
}

popupWhatsApp();