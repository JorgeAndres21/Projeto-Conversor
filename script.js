const button = document.getElementById('convertion-button')
const select = document.getElementById('currency-select')

const convertValue = async () => {
    const inputReais = document.getElementById('input-real').value
    const textValueReais = document.getElementById('real-value-money')
    const textValueCurrency = document.getElementById('currency-value-money')

    const data = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(
        response => response.json()
    )
    console.log(data)
    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitCoin = data.BTCBRL.high
 
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
   if(select.value === 'BitCoin') {
        textValueCurrency.innerHTML = (inputReais / bitCoin).toFixed(3)
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
    } else if(select.value === 'US$ Dolar americano'){
        currencyType.innerHTML = 'Dolar Americano'
        img.src = "./assets/logo_usa.png"
    }else if(select.value === 'BitCoin') {
        currencyType.innerHTML = 'BitCoin'
        img.src = "./assets/logo_bitcoin.png"
    }

    convertValue()
}

button.addEventListener('click' , convertValue)
select.addEventListener('change' , currencyChange)