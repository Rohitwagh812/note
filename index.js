let data = []

let resultsRootElement = document.querySelector('.results')


fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> data = json)

document.querySelector('#searchEngine')

// console.log('data is ' , data)

document.querySelector("#SearchInput").addEventListener('keyup' , () =>{
    let searchTerm = document.querySelector("#SearchInput").value
    let resultArray = []
    if(String(searchTerm).trim().length > 0){
        resultArray = data.filter(product => String(product.title).includes(searchTerm))
        renderProduct(resultArray)
    }else{ removeElement() }

})

function renderProduct(products){
    removeElement()
   products.forEach(product=>{
    renderSingleProduct(product)
   })
}

function renderSingleProduct(product){
    let resultDiv = document.createElement('div')
    let resultImage = document.createElement('img')
    let resultTitle = document.createElement('h4')
    let price = document.createElement('p')
    let purchaseButton = document.createElement('button')
    let rate = document.createElement('p')


    resultImage.src = product.image;
    resultTitle.innerText = product.title;
    price.innerText  = product.price;
    purchaseButton.innerText = "Purchase"
    purchaseButton.addEventListener('click' , () =>{
        alert('Thank you for purchasing '+ product.title)
        })
        
    

    resultDiv.appendChild(resultImage)
    resultDiv.appendChild(resultTitle)
    resultDiv.appendChild(price)
    resultDiv.appendChild(purchaseButton)
    resultDiv.className = 'result'

    resultsRootElement.appendChild(resultDiv)
}

function removeElement(){
    document.querySelectorAll('.result').forEach(prod =>{
    prod.remove()    
})
}
