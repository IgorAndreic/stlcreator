document.getElementById('language-selector').addEventListener('change', function () {
    loadLocalization(this.value);
});

function loadLocalization(langCode) {
    fetch(`locales/${langCode}/translation.json`)
        .then(response => response.json())
        .then(data => {
            document.querySelectorAll("[data-localize]").forEach(el => {
                el.textContent = data[el.dataset.localize];
            });
        })
        .catch(error => {
            console.error('Ошибка при загрузке файла локализации:', error);
        });
}

// Загрузка локализации по умолчанию при первоначальной загрузке страницы
//window.onload = () => loadLocalization('en'); // Или другой язык по умолчанию
