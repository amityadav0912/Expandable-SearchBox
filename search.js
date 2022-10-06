const searchBtn =document.getElementById("search-btn");
const searchInput = document.querySelector(".search-input");
console.log(searchBtn,searchInput);
searchBtn.onclick=function(){
    searchInput.classList.toggle("active-search");
}
document.querySelector('main').onclick=()=>{
    searchInput.classList.remove("active-search");
}