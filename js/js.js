popupWhatsApp = () => {
    let btnClosePopup = document.querySelector('.closePopup');
    let btnOpenPopup = document.querySelector('.whatsapp-button');
    let popup = document.querySelector('.popup-whatsapp');
    let sendBtn = document.getElementById('send-btn');
 
    btnClosePopup.addEventListener("click",  () => {
        popup.classList.toggle('is-active-whatsapp-popup')
        popupWhatsApp = () => {)
     btnOpenPopup.addEventListener("click",  () => {
        popup.classList.toggle('is-active-whatsapp-popup')
    })
    
    sendBtn.addEventListener("click", () => {



     })    
}