const translations = {
    en: {
         span1: "STORE",
         placeHolderText: "Search...",
    },
    pt: {
         span1: "LOJA",
         placeHolderText: "Pesquisar...",
    },
    es: {
         span1: "TIENDA",
         placeHolderText: "Buscar...",

    }

}

const languageSelectop = document.querySelector("select");
let placeHolderText = document.getElementById("search-input");
let bandText = document.querySelector("#band-text");

languageSelectop.addEventListener("change", (event) => {
    setLanguage(event.target.value)
})

const setLanguage = (language) => {
    if(language == "pt"){
        placeHolderText.placeholder = translations.pt.placeHolderText;
        bandText.textContent = translations.pt.span1;
    } else if(language == "en"){
        placeHolderText.placeholder = translations.en.placeHolderText;
        bandText.textContent = translations.en.span1;
    } else if(language == "es"){
        placeHolderText.placeholder = translations.es.placeHolderText;
        bandText.textContent = translations.es.span1;
    }
}

