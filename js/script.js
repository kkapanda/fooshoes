var searchBox = document.querySelector('.search-box');
var searchText = document.querySelector('.search-txt');
var menu = document.querySelector('.menu');
var favorites = document.querySelector('.favorites');
var cart = document.querySelector('.cart');
var searchBtn = document.querySelector('.search-btn');

function showSearch() {
    menu.style.display = 'none';
    favorites.style.display = 'none';
    cart.style.display = 'none';
    searchBtn.style.alignSelf = 'flex-end';
    searchBtn.style.width = '40px';
    searchText.style.display = 'block'
}

searchBtn.addEventListener('click', showSearch);



function News(date, name, text) {
  this.date = date;
  this.name = name;
  this.text = text;
}

var newsArray = [
  new News('01 Mar', 'Nice & Clean. The best for your blog!', 'Nice & clean. The best for you blog! Vivamus metus turpis, bibe'),
  new News('28 Feb', 'Good Day!', 'New fashion shoes collection 2019 Spring is on her way!'),
  new News('27 Feb', 'Shoes and wordrope', 'Styliysh dresses and costumes to complete your look!')
]

function blogNews(news) {
  var newsDate = document.querySelector(".news-date");
  var newsName = document.querySelector(".news-name");
  var newsInfo = document.querySelector(".news-info");
  for (let i = 0; i <= news.length; i++) {
    setTimeout(function() { 
      newsDate.innerHTML = news[i].date;
      newsName.innerHTML = news[i].name;
      newsInfo.innerHTML = news[i].text;
    }, i * 5000);
  }
}

blogNews(newsArray);





