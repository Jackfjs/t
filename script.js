// "Звонок" и "Заказать"
const callButton = document.querySelector('.callback');
const orderButtons = document.querySelectorAll('.service-card button');

// Получаем модальное окно и его содержимое
const modal = document.getElementById("myModal");
const closeBtn = document.querySelector(".close");
const feedbackForm = document.getElementById("feedbackForm");
const serviceRow = document.getElementById('service-row'); // Допустим, у вас есть такой элемент в модальном окне
const selectedServiceInput = document.getElementById('selected-service'); // И такой

// Обработчик события клика на кнопку "Звонок"
callButton.addEventListener('click', function() {
    showModal();
});

// Обработчик события клика на кнопки "Заказать"
orderButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        const serviceName = this.getAttribute('data-service');
        showModal(serviceName);
    });
});

// Функция для отображения окна
function showModal(serviceName = '') {
    if (serviceName) {
        if (serviceRow && selectedServiceInput) {
            serviceRow.style.display = 'block';
            selectedServiceInput.value = serviceName;
        }
    } else {
        if (serviceRow) {
            serviceRow.style.display = 'none';
        }
    }
    modal.style.display = "block";
}

// Обработчик закрытия окна
closeBtn.addEventListener('click', function() {
    modal.style.display = "none";
});

// Обработчик клика окна для его закрытия
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

// Обработчик события отправки формы обратной связи
feedbackForm.addEventListener("submit", function(event) {
    event.preventDefault();
    // Здесь можно добавить логику отправки данных на сервер или другие действия
    modal.style.display = "none";
});

// Функция для проверки, если элемент находится в видимой области окна
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Функция для добавления или удаления класса при прокрутке страницы
function toggleAnimation() {
    const sections = document.querySelectorAll('.animate');
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

document.addEventListener('scroll', toggleAnimation);
toggleAnimation();



// портфолио

document.addEventListener('DOMContentLoaded', function() {
    const imageWrappers = document.querySelectorAll('.image-wrapper');
  
    imageWrappers.forEach(wrapper => {
      wrapper.addEventListener('mouseover', function() {
        const overlay = this.querySelector('.overlay');
        const text = this.querySelector('.text');
        overlay.style.opacity = '1';
        text.style.opacity = '1';
      });
  
      wrapper.addEventListener('mouseout', function() {
        const overlay = this.querySelector('.overlay');
        const text = this.querySelector('.text');
        overlay.style.opacity = '0';
        text.style.opacity = '0';
      });
    });
  });





