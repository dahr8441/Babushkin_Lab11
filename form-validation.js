const nameRegex = /^[A-Za-z\s]+$/;  // Для імені (лише латинські літери та пробіли)
const addressRegex = /^[A-Za-z0-9\s,.-]+$/;  // Для адреси (літери, цифри, пробіли, коми, крапки та дефіси)
const cityRegex = /^[A-Za-z\s]+$/;  // Для міста (лише літери та пробіли)
const zipRegex = /^[0-9]{5,6}$/;  // Для поштового індексу (5-6 цифр)
const cvcRegex = /^[0-9]{3}$/;  // Для CVC (3 цифри)
const cardNumberRegex = /^[0-9]{16}$/;  // Для номеру картки (16 цифр)

function validateForm(event) {
    let isValid = true;

    // Перевірка кожного поля
    const fullName = document.getElementById('full-name').value;
    if (!nameRegex.test(fullName)) {
        alert("Невірне ім'я. Використовуйте лише літери.");
        isValid = false;
    }

    const address = document.getElementById('address').value;
    if (!addressRegex.test(address)) {
        alert("Невірна адреса. Використовуйте лише літери, цифри та роздільники (коми, крапки).");
        isValid = false;
    }

    const city = document.getElementById('city').value;
    if (!cityRegex.test(city)) {
        alert("Невірне місто. Використовуйте лише літери.");
        isValid = false;
    }

    const zip = document.getElementById('zip').value;
    if (!zipRegex.test(zip)) {
        alert("Невірний поштовий індекс. Використовуйте 5-6 цифр.");
        isValid = false;
    }

    const cardNumber = document.getElementById('card-number').value;
    if (!cardNumberRegex.test(cardNumber)) {
        alert("Невірний номер картки. Використовуйте 16 цифр.");
        isValid = false;
    }

    const cvc = document.getElementById('cvc').value;
    if (!cvcRegex.test(cvc)) {
        alert("Невірний CVC. Використовуйте 3 цифри.");
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();  // Якщо форма не валідна, то не відправляти її
    }
}