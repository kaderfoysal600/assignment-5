document.getElementById('search-btn').addEventListener('click', function () {
    searchResult()
})
function searchResult() {
    const mealId = document.getElementById('input-title').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealId}`)
        .then(response => response.json())
        .then(data => {

            fetchdata = data;
            for (i = 0; i < data.meals.length; i++){
                const mealName = data.meals[i].strMeal
                const mealPic = data.meals[i].strMealThumb;
                const mealId = data.meals[i].idMeal;
                document.getElementById('search-result').innerHTML += `

                <div class = 'col-md-3 mainDiv' onclick="displayDetails('${mealId}')" class="border rounded text-center h-100" data-bs-toggle="modal" data-bs-target="#exampleModal">
               
                <img class="img-fluid rounded mb-4" style="width: 200px; height: 200px;" src="${mealPic}" alt="">
                <h4 class="h5 py-4 px-2 mb-0" style = " text-align: center;">${mealName}</h4>
                
                </div>

                `
                
                if (i == 7) {
                    break;
                }
            }

            // console.log(data.meals[0].strMeal)
            // console.log(data.meals[0].strMealThumb)
            // displayFoods(data.meals);
        })
        }



        //////




        // Details for Foods
const displayDetails = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            renderFoodInfo(data.meals[0]);
            console.log(data.meals[0]);
        });
};
