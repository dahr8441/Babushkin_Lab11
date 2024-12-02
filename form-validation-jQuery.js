$(document).ready(function () { 
    // Додавання власного правила для регулярного виразу
    $.validator.addMethod("regex", function(value, element, pattern) {
        return this.optional(element) || pattern.test(value);
    }, "Невірний формат введення.");

    $("#payment-form").validate({
        rules: {
            "full-name": {
                required: true,
                regex: /^[A-Za-z\s]+$/  // Тільки літери та пробіли
            },
            "address": {
                required: true
            },
            "city": {
                required: true
            },
            "zip": {
                required: true,
                digits: true,  // Має бути числовим значенням
                minlength: 5,
                maxlength: 5  // Перевірка на 5 цифр
            },
            "country": {
                required: true
            },
            "card-name": {
                required: true,
                regex: /^[A-Za-z\s]+$/  // Тільки літери та пробіли
            },
            "card-number": {
                required: true,
                creditcard: true  // Перевірка на правильний формат номера картки
            },
            "exp-month": {
                required: true
            },
            "exp-year": {
                required: true
            },
            "cvc": {
                required: true,
                digits: true,  // Має бути числовим значенням
                minlength: 3,
                maxlength: 3  // Перевірка на 3 цифри
            }
        },
        messages: {
            "full-name": {
                required: "Будь ласка, введіть ваше ім'я.",
                regex: "Ім'я може містити лише літери та пробіли."
            },
            "address": {
                required: "Будь ласка, введіть адресу."
            },
            "city": {
                required: "Будь ласка, введіть місто."
            },
            "zip": {
                required: "Будь ласка, введіть поштовий індекс.",
                digits: "Індекс повинен містити лише цифри.",
                minlength: "Поштовий індекс має складатися з 5 цифр.",
                maxlength: "Поштовий індекс має складатися з 5 цифр."
            },
            "country": {
                required: "Будь ласка, виберіть країну."
            },
            "card-name": {
                required: "Будь ласка, введіть ім'я власника картки.",
                regex: "Ім'я може містити лише літери та пробіли."
            },
            "card-number": {
                required: "Будь ласка, введіть номер картки.",
                creditcard: "Будь ласка, введіть правильний номер картки."
            },
            "exp-month": {
                required: "Будь ласка, виберіть місяць закінчення терміну."
            },
            "exp-year": {
                required: "Будь ласка, виберіть рік закінчення терміну."
            },
            "cvc": {
                required: "Будь ласка, введіть CVC код.",
                digits: "CVC має складатися лише з цифр.",
                minlength: "CVC має містити 3 цифри.",
                maxlength: "CVC має містити 3 цифри."
            }
        },
        submitHandler: function (form) {
            // При успішній валідації не показуємо повідомлення, просто відправляємо форму
            form.submit();  // Можна замінити на AJAX відправку, якщо потрібно
        }
    });
});