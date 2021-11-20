$(document).ready(function(){
// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
$('.category_list .category_item[category="all"]').addClass('ct_item-active');

// FILTRANDO PRODUCTOS  ============================================

$('.category_item').click(function(){
  var catProduct = $(this).attr('category');
  console.log(catProduct);

  // AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
  $('.category_item').removeClass('ct_item-active');
  $(this).addClass('ct_item-active');

  // OCULTANDO PRODUCTOS =========================
  $('.product-item').css('transform', 'scale(0)');
  function hideProduct(){
    $('.product-item').hide();
  } setTimeout(hideProduct,400);

  // MOSTRANDO PRODUCTOS =========================
  function showProduct(){
    $('.product-item[category="'+catProduct+'"]').show();
    $('.product-item[category="'+catProduct+'"]').css('transform', 'scale(1)');
  } setTimeout(showProduct,400);
});

// MOSTRANDO TODOS LOS PRODUCTOS =======================

$('.category_item[category="all"]').click(function(){
  function showAll(){
    $('.product-item').show();
    $('.product-item').css('transform', 'scale(1)');
  } setTimeout(showAll,400);
});
});
popupWhatsApp = () => {
  
    let btnClosePopup = document.querySelector('.closePopup');
    let btnOpenPopup = document.querySelector('.whatsapp-button');
    let popup = document.querySelector('.popup-whatsapp');
    let sendBtn = document.getElementById('send-btn');  
    btnClosePopup.addEventListener("click",  () => {
      popup.classList.toggle('is-active-whatsapp-popup')
    })    
    btnOpenPopup.addEventListener("click",  () => {
      popup.classList.toggle('is-active-whatsapp-popup')
       popup.style.animation = "fadeIn .6s 0.0s both";
    })    
    sendBtn.addEventListener("click", () => {
    let msg = document.getElementById('whats-in').value;
    let relmsg = msg.replace(/ /g,"%20");
       
     window.open(`https://api.whatsapp.com/send?phone=+5492994667611&text=Hola,%20tengo%20una%20consulta${relmsg}`, '_blank'); 
    
    });
    setTimeout(() => {
      popup.classList.toggle('is-active-whatsapp-popup');
    }, 3000);
  }
  popupWhatsApp(); 