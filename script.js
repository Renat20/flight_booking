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

   document.addEventListener('DOMContentLoaded', () => {
    // Логіка вибору рейсу
    document.getElementById('flight-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting the traditional way

        // Get form values
        const from = document.getElementById('from').value;
        const to = document.getElementById('to').value;
        const date = document.getElementById('date').value;

        // Dummy flight data for demonstration purposes
        const flights = [
            { flightNumber: 'PS101', from: 'Київ', to: 'Іспанія', date: '2024-07-21', price: '20000 UAH' },
            { flightNumber: 'PS102', from: 'Київ', to: 'Туреччина', date: '2024-07-22', price: '15000 UAH' },
            { flightNumber: 'PS103', from: 'Київ', to: 'Італія', date: '2024-07-23', price: '18000 UAH' },
            { flightNumber: 'PS104', from: 'Київ', to: 'Німеччина', date: '2024-07-24', price: '22000 UAH' },
            { flightNumber: 'PS105', from: 'Київ', to: 'Греція', date: '2024-07-25', price: '16000 UAH' },
            { flightNumber: 'PS106', from: 'Київ', to: 'Сполучені Штати', date: '2024-07-26', price: '17000 UAH' },
            { flightNumber: 'PS107', from: 'Київ', to: 'Польща', date: '2024-07-27', price: '14000 UAH' },
            { flightNumber: 'PS108', from: 'Київ', to: 'Франція', date: '2024-07-28', price: '25000 UAH' },
            { flightNumber: 'PS109', from: 'Київ', to: 'Сполучене Королівство', date: '2024-07-29', price: '30000 UAH' },
            { flightNumber: 'PS110', from: 'Київ', to: 'Об’єднані Арабські Емірати', date: '2024-07-30', price: '23500 UAH' },
            { flightNumber: 'PS111', from: 'Київ', to: 'Грузія', date: '2024-07-31', price: '23000 UAH' },
            { flightNumber: 'PS112', from: 'Київ', to: 'Португалія', date: '2024-08-01', price: '27000 UAH' },
            { flightNumber: 'PS113', from: 'Київ', to: 'Єгипет', date: '2024-08-02', price: '22400 UAH' },
            { flightNumber: 'PS114', from: 'Київ', to: 'Японія', date: '2024-08-03', price: '16500 UAH' },
            { flightNumber: 'PS115', from: 'Київ', to: 'Таїланд', date: '2024-08-04', price: '16000 UAH' },
            { flightNumber: 'PS116', from: 'Київ', to: 'Нідерланди', date: '2024-08-05', price: '23000 UAH' },
            { flightNumber: 'PS117', from: 'Київ', to: 'Хорватія', date: '2024-08-06', price: '12000 UAH' },
            { flightNumber: 'PS118', from: 'Київ', to: 'Південна Корея', date: '2024-08-07', price: '15500 UAH' },
            { flightNumber: 'PS119', from: 'Київ', to: 'Індія', date: '2024-08-08', price: '25000 UAH' },
            { flightNumber: 'PS120', from: 'Київ', to: 'Норвегія', date: '2024-08-09', price: '28000 UAH' },
            { flightNumber: 'PS121', from: 'Київ', to: 'Канада', date: '2024-08-10', price: '75000 UAH' },
            { flightNumber: 'PS122', from: 'Київ', to: 'Австрія', date: '2024-08-11', price: '21000 UAH' },
            { flightNumber: 'PS123', from: 'Київ', to: 'Швейцарія', date: '2024-08-12', price: '26000 UAH' },
            { flightNumber: 'PS124', from: 'Київ', to: 'Кіпр', date: '2024-08-13', price: '17000 UAH' },
            { flightNumber: 'PS125', from: 'Київ', to: 'Болгарія', date: '2024-08-14', price: '15000 UAH' },
            { flightNumber: 'PS126', from: 'Київ', to: 'Чеська Республіка', date: '2024-08-15', price: '18000 UAH' },
        ];

        // Filter flights based on form input
        const results = flights.filter(flight => flight.from === from && flight.to === to && flight.date === date);

        // Display results
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = ''; // Clear previous results

        if (results.length > 0) {
            results.forEach(flight => {
                const flightDiv = document.createElement('div');
                flightDiv.className = 'flight-result';
                flightDiv.innerHTML = `
                    <p>Номер рейсу: ${flight.flightNumber}</p>
                    <p>Звідки: ${flight.from}</p>
                    <p>Куди: ${flight.to}</p>
                    <p>Дата: ${flight.date}</p>
                    <p>Ціна: ${flight.price}</p>
                `;
                resultsDiv.appendChild(flightDiv);
            });
        } else {
            resultsDiv.innerHTML = '<p>Немає доступних рейсів за вибраними критеріями.</p>';
        }
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
