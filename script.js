document.addEventListener('DOMContentLoaded', () => {
    // Реєстрація користувача
    document.getElementById('register-form')?.addEventListener('submit', (event) => {
        event.preventDefault();
        // Логіка реєстрації
        alert('Реєстрація успішна!');
    });

    // Авторизація користувача
    document.getElementById('login-form')?.addEventListener('submit', (event) => {
        event.preventDefault();
        // Логіка авторизації
        alert('Авторизація успішна!');
    });

    // Зміна паролю
    document.getElementById('change-password-form')?.addEventListener('submit', (event) => {
        event.preventDefault();
        // Логіка зміни паролю
        alert('Пароль успішно змінено!');
    });

    // Додавання платіжної картки
    document.getElementById('payment-cards-form')?.addEventListener('submit', (event) => {
        event.preventDefault();
        // Логіка додавання картки
        alert('Картка успішно додана!');
    });

    // Логіка вибору рейсу
    document.getElementById('flight-form')?.addEventListener('submit', (event) => {
        event.preventDefault();
        const from = document.getElementById('from').value;
        const to = document.getElementById('to').value;
        const date = document.getElementById('date').value;

    
        const flights = [
            {
                flightNumber: 'PS123',
                departureTime: '10:00',
                duration: '3h 45m',
                arrivalTime: '13:45',
                airline: 'МАУ',
                price: '5000 UAH',
                class: 'Економ',
                from: from,
                to: to,
                date: date
            },
            {
                flightNumber: 'PS124',
                departureTime: '14:00',
                duration: '4h 00m',
                arrivalTime: '18:00',
                airline: 'МАУ',
                price: '6000 UAH',
                class: 'Бізнес',
                from: from,
                to: to,
                date: date
            }
        ];

        let resultsHTML = `<p>Рейси з ${from} до ${to} на ${date}:</p>`;
        flights.forEach(flight => {
            resultsHTML += `
                <div class="flight">
                    <p>Номер рейсу: ${flight.flightNumber}</p>
                    <p>Час відправлення: ${flight.departureTime}</p>
                    <p>Тривалість польоту: ${flight.duration}</p>
                    <p>Час прибуття: ${flight.arrivalTime}</p>
                    <p>Авіалінії: ${flight.airline}</p>
                    <p>Ціна: ${flight.price}</p>
                    <p>Клас: ${flight.class}</p>
                </div>
            `;
        });

        document.getElementById('results').innerHTML = resultsHTML;
    });

    // Зміна мови
    document.getElementById('language')?.addEventListener('change', (event) => {
        const lang = event.target.value;
        if (lang === 'uk') {
            document.documentElement.lang = 'uk';
        } else {
            document.documentElement.lang = 'en';
        }
        alert(`Мова сайту змінена на ${lang === 'uk' ? 'Українська' : 'English'}`);
    });

    // Зміна валюти
    document.getElementById('currency')?.addEventListener('change', (event) => {
        const currency = event.target.value;
        alert(`Валюта сайту змінена на ${currency}`);
    });
});
