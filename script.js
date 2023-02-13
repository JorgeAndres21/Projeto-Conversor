const button = document.getElementById('convertion-button')
const select = document.getElementById('currency-select')

const dolar = 5.2
const euro = 5.9

const convertValue = () => {
    const inputReais = document.getElementById('input-real').value
    const textValueReais = document.getElementById('real-value-money')
    const textValueCurrency = document.getElementById('currency-value-money')
 
   if(select.value === 'US$ Dolar americano') {
        textValueCurrency.innerHTML = new Intl.NumberFormat('en-US', { 
            style: 'currency', 
            currency: 'USD' 
        }).format(inputReais / dolar)
   }
   if(select.value === '€ Euro') {
        textValueCurrency.innerHTML = new Intl.NumberFormat('de-DE', { 
            style: 'currency', 
            currency: 'EUR' 
        }).format(inputReais / euro)
   }
   
    textValueReais.innerHTML = new Intl.NumberFormat('pt-BR', { 
        style: 'currency', 
        currency: 'BRL' 
    }).format(inputReais)

}
const currencyChange = () => {
    const currencyType = document.getElementById('type-money')
    const img = document.getElementById('currency-img')

     if(select.value === '€ Euro') {
        currencyType.innerHTML = 'Euro'
        img.src = "./assets/logo_euro.png"
    } else {
        currencyType.innerHTML = 'Dolar Americano'
        img.src = "./assets/logo_usa.png"
    }

    convertValue()
}

button.addEventListener('click' , convertValue)
select.addEventListener('change' , currencyChange)