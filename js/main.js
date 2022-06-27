var error =0;

async function getRecipes(recipe){
 var result = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${recipe}`);
 var finalResult = await result.json();
 console.log(finalResult);
 error = recipe;

};
function endMenu()
{
    console.log("Belhana")
}
function errorFunction(x)
{
    console.log(`error = ${x}`)
}
(async function(){
    try
    {
        await getRecipes('salad');
        await getRecipes('beef');
        await getRecipes('pasta');
        await getRecipes('pizza');
        endMenu();
    }
    catch
    {
    errorFunction(error);
    }
})();


// function displayMovies()
// {
//     cartoona=``
//     for(var i=0;i<myList.length;i++)
//     {
//         cartoona+=` <div class="col-md-4">
//         <div class="item">
//             <img src="${rec[i].source_url}" class="w-100" alt="">
//             <h3>${rec[i].publisher}</h3>
//             <p>${rec[i].title}</p>
//         </div>
//     </div>`
//     }
//     document.getElementById('rowData').innerHTML = cartoona ; 
// }