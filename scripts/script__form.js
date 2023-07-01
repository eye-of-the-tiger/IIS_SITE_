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

const modal_1 = document.getElementById('modal__success');

//открытие окна с "Заявка отправлена"

document.querySelector('form.block__application').addEventListener('submit', function(e) {

  e.preventDefault();

  modal_1.classList.add('modal-active');
  document.getElementById('block__form').classList.remove('modal-active');
  scrollController.disabledScroll();
})