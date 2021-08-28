function searchButtonHandler() {
    document.getElementById('male-item-notSetup').innerHTML = null;
    document.getElementById('male-item-notMatch').innerHTML = null;
    document.getElementById('male-item').innerHTML = null;
    const searchInput = document.getElementById('searchInput').value;
    if (searchInput == '') {
        document.getElementById('male-item-notSetup').innerHTML = '<h1 class="text-danger text-center">Sorry!!! You are searching without typing anything.</h1>'
    }
    else {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
            .then(response => response.json())
            .then(data => searchMale(data.meals))
            .catch(error => {
                document.getElementById('male-item-notMatch').innerHTML = `<h1 class="text-danger text-center">Sorry!!! <span class="text-info">${searchInput}</span> this meal does not match. Please search again.</h1>`;
            })
    }
}

function searchMale(males) {
    males.forEach(male => {
        const maleMainDiv = document.getElementById('male-item');
        const addNewDiv = document.createElement('div');
        addNewDiv.classList.add('col-md-4');
        addNewDiv.classList.add('col-sm-6');
        addNewDiv.innerHTML = `
            <div class="male-item-style">
                <div class="image-div">
                    <img src="${male.strMealThumb}"/>
                </div>
                <h3 class="text-center pt-3">${male.strMeal}</h3>
            </div>
        `
        maleMainDiv.appendChild(addNewDiv)
    })
}






