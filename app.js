document.getElementById('search-btn').addEventListener('click', function () {
    searchResult()
})
function searchResult() {
    const mealId = document.getElementById('input-title').value;
    document.getElementById('search-result').innerHTML = '';
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealId}`)
        .then(response => response.json())
        .then(data => {

            fetchdata = data;
            for (i = 0; i < data.meals.length; i++) {
                const mealName = data.meals[i].strMeal
                const mealPic = data.meals[i].strMealThumb;
                // const mealId = data.meals[i].idMeal;
                document.getElementById('search-result').innerHTML += `

                <div class = 'col-md-3 mainDiv' >
               
                <img id = "img-click" class="img-fluid rounded mb-4" style="width: 200px; height: 200px;" src="${mealPic}" alt="">
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

document.getElementById('search-result').addEventListener('click',function(){
    displayDetails()
})



function displayDetails  (e) {

   // const mealId = document.getElementById('search-result').value;
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            // renderFoodInfo(data.meals[0]);
            console.log(data.meals[0].strMeal);
            fetchdata = data;
            for (i = 0; i < data.meals.length; i++) {
                const mealName = data.meals[i].strMeal
                const mealPic = data.meals[i].strMealThumb;
                document.getElementById('foodsDetails').innerHTML = `
                <div class = 'col-md-3 mainDiv' >
               
                <img id = "img-click" class="img-fluid rounded mb-4" style="width: 200px; height: 200px;" src="${mealPic}" alt="">
                <h4 class="h5 py-4 px-2 mb-0" style = " text-align: center;">${mealName}</h4>
                
                
                </div>
                `
            }
        });
};
// // const renderFoodInfo = (food) => {
// //     // Get all ingredients from the object. Up to 20
// //     const ingredients = [];
// //     for (let i = 1; i <= 20; i++) {
// //         if (food[`strIngredient${i}`]) {
// //             ingredients.push(`${food[`strIngredient${i}`]} - ${food[`strMeasure${i}`]}`);
// //         } else {
// //             // Stop if there are no more ingredients
// //             break;
// //         }
// //     }
// //     const foodDetailsDiv = document.getElementById('foodsDetails');
// //     foodDetailsDiv.innerHTML = `
// //     <img class="img-fluid rounded mb-4" src="${food.strMealThumb}" alt="">
// //     <h4>${food.strMeal}</h4>
    
// //     <h5 class="pt-3 pb-2"><i class="icon-fire icons"></i> Ingredients</h5>
// //     <ul class="list-unstyled mb-0">
// //     ${ingredients.map((ingredient) => `<li><i class="icon-check icons"></i>${ingredient}</li>`).join('')}
// //     </ul>
// // `;
// };


