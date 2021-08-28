function searchButtonHandler() {
    document.getElementById('meal-item-notSetup').innerHTML = null;
    document.getElementById('meal-item-notMatch').innerHTML = null;
    document.getElementById('meal-item').innerHTML = null;
    document.getElementById('meal-details').innerHTML = null;
    const searchInput = document.getElementById('searchInput').value;
    if (searchInput == '') {
        document.getElementById('meal-item-notSetup').innerHTML = '<h1 class="text-danger text-center">Sorry!!! You are searching without typing anything.</h1>'
    }
    else {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
            .then(response => response.json())
            .then(data => searchmeal(data.meals))
            .catch(error => {
                document.getElementById('meal-item-notMatch').innerHTML = `<h1 class="text-danger text-center">Sorry!!! <span class="text-info">${searchInput}</span> this meal does not match. Please search again.</h1>`;
            })
    }
}

function searchmeal(meals) {
    meals.forEach(meal => {
        const mealMainDiv = document.getElementById('meal-item');
        const addNewDiv = document.createElement('div');
        addNewDiv.classList.add('col-md-4');
        addNewDiv.classList.add('col-sm-6');
        addNewDiv.innerHTML = `
            <div onclick="mealDetails('${meal.idMeal}')" class="meal-item-style">
                <div class="image-div">
                    <img src="${meal.strMealThumb}"/>
                </div>
                <h3 class="text-center pt-3 text-warning">${meal.strMeal}</h3>
            </div>
        `
        mealMainDiv.appendChild(addNewDiv)
    })
}

function mealDetails(id) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(response => response.json())
        .then(data => mealDetailsData(data.meals[0]))
        .catch(error => console.log(error))
}

function mealDetailsData(details) {
    document.getElementById('meal-item').innerHTML = null;
    console.log(details)
    document.getElementById('meal-details').innerHTML = `
        <div class="text-center pt-5 ps-5 pe-5 pb-2">
            <img style="border-radius: 15px" class="w-100" src="${details.strMealThumb}" alt="" />
            <h1 class="pt-5 text-warning">${details.strMeal}</h1>
            <h3>Made by: <span class="text-success">${details.strArea}</span></h3>
            <h3>Category: <span class="text-success">${details.strCategory}</span></h3>
            <p style="text-align: justify" class="text-warning"><b class="text-danger">Instruction: </b>${details.strInstructions}</p>
            <ul style="text-align: start" class="text-info"> 
                <h3>ImageSource & Measure</h3>
                <p>${details.strIngredient1} ${details.strMeasure1}</p>
                <p>${details.strIngredient2} ${details.strMeasure2}</p>
                <p>${details.strIngredient3} ${details.strMeasure3}</p>
                <p>${details.strIngredient4} ${details.strMeasure4}</p>
                <p>${details.strIngredient5} ${details.strMeasure5}</p>
                <p>${details.strIngredient6} ${details.strMeasure6}</p>
                <p>${details.strIngredient7} ${details.strMeasure7}</p>
                <p>${details.strIngredient8} ${details.strMeasure8}</p>
                <p>${details.strIngredient9} ${details.strMeasure9}</p>
                <p>${details.strIngredient10} ${details.strMeasure10}</p>
                <p>${details.strIngredient11} ${details.strMeasure11}</p>
                <p>${details.strIngredient12} ${details.strMeasure12}</p>
                <p>${details.strIngredient13} ${details.strMeasure13}</p>
                <p>${details.strIngredient14} ${details.strMeasure14}</p>
                <p>${details.strIngredient15} ${details.strMeasure15}</p>
                <p>${details.strIngredient16} ${details.strMeasure16}</p>
                <p>${details.strIngredient17} ${details.strMeasure17}</p>
                <p>${details.strIngredient18} ${details.strMeasure18}</p>
                <p>${details.strIngredient19} ${details.strMeasure19}</p>
                <p>${details.strIngredient20} ${details.strMeasure20}</p>
            <ul>
            <h3> <a href="${details.strYoutube}">watching This Recipes on YouTube </a></h3>
            <div class="d-grid gap-2 pt-3">
                <button class="btn btn-primary" onclick="location.reload()">Return Home</button>
            </div>
        </div>
    `
}


