function searchButtonHandler(){
    const searchInput = document.getElementById('searchInput').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
    .then(response => response.json())
    .then(data => searchMale(data.meals))
    .catch(error => console.log(error))
}

function searchMale(males){
    males.forEach(male => {
        const maleMainDiv = document.getElementById('male-item')
        const addNewDiv = document.createElement('div')
        addNewDiv.classList.add('col-md-4')
        addNewDiv.classList.add('col-sm-6')
        addNewDiv.innerHTML = `
            <div class="male-item-style">
                <div class="image-div">
                    <img src="${male.strMealThumb}"/>
                </div>
                <h3 class="text-center pt-3">${male.strMeal}</h3>
            </div>
        `
        maleMainDiv.appendChild(addNewDiv)
        console.log(male.strMeal)
    })
}






