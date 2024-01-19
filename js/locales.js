function loadLocalization() {
    const langCode = localStorage.getItem('selectedLanguage') || 'en'; // Значение по умолчанию - английский
    fetch(`../locales/${langCode}/translation.json`)
        .then(response => response.json())
        .then(data => {
            document.querySelectorAll("[data-localize]").forEach(el => {
                el.textContent = data[el.dataset.localize];
            });

            // Получаем название файла из URL (например, 'contact' из 'contact.html')
            let pageName = window.location.pathname.split('/').pop().split('.').shift();
            let pageTitleKey = `${pageName}Title`;

            // Обновляем заголовок страницы
            if (data[pageTitleKey]) {
                document.title = data[pageTitleKey];
            }
        })
        .catch(error => {
            console.error('Ошибка при загрузке файла локализации:', error);
        });
}
