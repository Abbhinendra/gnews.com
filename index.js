let loadcontent = document.querySelector('.loadcontent');
let searchBar = document.getElementById('searchBar');
let ToggleSearchBar = document.querySelector('.searchbar');
let li = document.querySelectorAll('nav ul li');
function searchBarToggle() {
    if (ToggleSearchBar.style.left == '180%') {
        ToggleSearchBar.style.left = '10%';
    }
    else {
        ToggleSearchBar.style.left = '180%';
    }

}
searchBar.addEventListener('click', function () {
    searchBarToggle();
});
let ham = document.getElementById('ul-bar');
let ul = document.querySelector('nav ul');
ham.addEventListener('click', function () {
    ul.classList.toggle('add');
})

async function newsData(query){
apikey = '1632ef5d699349742c5c0b220871fe55';
url = `https://gnews.io/api/v4/search?q=${query}&lang=en&country=us&max=10&apikey=` + apikey;
loadcontent.innerHTML="Fetching results...";
try {

const res=await fetch(url);
const data= await res.json();
loadcontent.innerHTML="";
let str="";
data.articles.forEach(element => {
    str+=`  <div class="box-content">
    <img src="${element.image}" alt="">
    <div class="paddings">
   <span class="tb">Title:</span> <span>${element.title}</span>
   <br>
   <span class="tb">Published:</span> <span>${element.publishedAt}</span>
   <br>
   <span class="tb">Content:</span> <span>${element.content}</span>
   <br>
   <span class="tb">Description :</span> <span>${element.description}</span>
   <br>
   <br>
    <a target="_blank" href="${element.url}">Read more...</a>
    </div>
</div>`;
});
loadcontent.innerHTML=str;

} catch (error) {
loadcontent.innerHTML="Sorry we are not able to process your request...";
}
}
newsData("cricket");
home.addEventListener('click',function(){
newsData("all");
});

Array.from(li).forEach(el=>{
    el.addEventListener('click',function(){
        newsData(el.innerHTML);
    })
})

btn.addEventListener('click',function(){
    newsData(searched.value.trim());
})

Array.from(li).forEach(ed => {
    ed.addEventListener('click', function () {
        document.querySelector(".color").classList.remove("color");
        ed.classList.add('color');
    });
})
let d=new Date();
year.innerHTML=d.getFullYear();
