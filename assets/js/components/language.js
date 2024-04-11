const langToggle = document.querySelector('#language-toggle')
const currentLang = window.location.href.includes('index_english.html')
langToggle.checked = currentLang

function changeLanguage() {
    if (langToggle.checked) {
        window.location.href = "index_english.html";
    } else {
        window.location.href = "index.html";
    }
}

langToggle.addEventListener('change', changeLanguage)

export default changeLanguage