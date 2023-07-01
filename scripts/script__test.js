//блокировка скролла при открытии модальных окон:
const scrollController = {

    //отключение скролла
    disabledScroll(){
      document.body.style.cssText = `overflow: hidden`;
    },
    //для возвращения стандартного состояния
    enabledScroll(){
      document.body.style.cssText = '';
    },
  }

//   //открытие окна с "Заявка отправлена"
// document.addEventListener('click', (event) => {
//   //open
//   if(event.target.closest('.button__send__form'))

//   {
//       event.preventDefault();
//       const modal = document.getElementById('modal__success');
//       modal.classList.add('modal-active');
//       document.getElementById('block__form').classList.remove('modal-active');
//       scrollController.disabledScroll(); 
//   }

// }) 




const modal_2 = document.getElementById('results-window');

//открытие результатов при нажатии на кнопку
document.querySelector('form.block__test').addEventListener('submit', function(e) {

  console.log(modal_2);

  e.preventDefault();

  modal_2.classList.add('modal-active');
  document.getElementById('modal__block__test').classList.remove('modal-active');
  scrollController.disabledScroll();
})

  // //открытие окна с результатами
  // document.addEventListener('click', (event) => {
  //   //open
  //   if(event.target.closest('.button__test__finish'))
  
  //   {
  //       event.preventDefault();
  //       const modal = document.getElementById('modal__result');
  //       modal.classList.add('modal-active');
  //       document.getElementById('block__test').classList.remove('modal-active');
  //       scrollController.disabledScroll(); 
  //   }
  
  // }) 

// $('document').ready(function() {
//   $('#button').on('click', function() {
//     $('.form_box .rfield').each(function() {
//       if ($(this).val() != '') {
//         // Если поле не пустое удаляем класс-указание
//         $(this).removeClass('empty_field');
//       } else {
//         // Если поле пустое добавляем класс-указание
//         $(this).addClass('empty_field');
//       }
//     });

//     if ($('.form_box .rfield.empty_field').length) alert('Не все поля формы заполнены верно.')
//   });
// });

// $("form").submit(function() { //Change
//   var th = $(this);
//   $.ajax({
//     type: "POST",
//     // url: "mail.php", //Change
//     data: th.serialize()
//   }).done(function() {
//     $('.js-open-modal').show();
//     setTimeout(function() {
//       // Done Functions
//       th.trigger("reset");
      
//     }, 1000);
//   });
//   return false;
// });
