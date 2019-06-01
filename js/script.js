

var searchBox = document.querySelector('.search-box');
var searchText = document.querySelector('.search-txt');
var menu = document.querySelector('.menu');
var favorites = document.querySelector('.favorites');
var cart = document.querySelector('.cart');
var searchBtn = document.querySelector('.search-btn');
// var searchBtnBlack = document.querySelector('.search-btn-black');

function showSearch() {
  menu.style.display = 'none';
  favorites.style.display = 'none';
  cart.style.display = 'none';
  searchBtn.style.width = '40px';
  searchText.style.display = 'block';
}


searchBtn.addEventListener('click', showSearch);


$(document).mouseup(function (e) {
  var container = $(".search-txt");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    menu.style.display = 'block';
    favorites.style.display = 'block';
    cart.style.display = 'block';
    searchBtn.style.width = 'auto';
    searchText.style.display = 'none';
  }
});



function News(date, name, text) {
  this.date = date;
  this.name = name;
  this.text = text;
}

var newsArray = [
  new News('01 <br> Mar', 'Nice & Clean. The best for your blog!', 'Nice & clean. The best for you blog! Vivamus metus turpis, bibe'),
  new News('28 <br> Feb', 'Good Day!', 'New fashion shoes collection 2019 Spring is on her way!'),
  new News('27 <br> Feb', 'Shoes and wordrope', 'Styliysh dresses and costumes to complete your look with elegant leather shoes!')
]

function blogNews(news) {
  var textSlider = document.querySelector('.text-slider');

  for (let i = 0; i < news.length; i++) {
    var newsBlock = document.createElement('div');
    newsBlock.setAttribute('class', 'news');
    var newsDate = document.createElement('span');
    newsDate.setAttribute('class', 'news-date');
    newsDate.innerHTML = news[i].date;
    var newsText = document.createElement('div');
    newsText.setAttribute('class', 'news-text');
    var newsName = document.createElement('p');
    newsName.setAttribute('class', 'news-name');
    newsName.innerHTML = news[i].name
    var newsInfo = document.createElement('p');
    newsInfo.setAttribute('class', 'news-info');
    newsInfo.innerHTML = news[i].text;

    newsText.appendChild(newsName);
    newsText.appendChild(newsInfo);
    newsBlock.appendChild(newsDate);
    newsBlock.appendChild(newsText);
    textSlider.appendChild(newsBlock);


  }
}

blogNews(newsArray);


function myFunction() {
  var x = document.getElementById("myTopnav");
  if ((x.className === "top-nav") && (window.matchMedia("(max-width: 768px)").matches)) {
    x.className += " responsive";
  } else {
    x.className = "top-nav";

  }
}







//Slider

$('.slick-frame').on('init', function () {
  $slickFrame.css({ visibility: 'visible' });
});
$('.slick-frame').slick();


$(document).on('ready', function () {
  $('.slider-carousel').slick({
    autoplay: true,
    dots: true,
    arrows: false,
    customPaging: function (slick, index) {
      if (index == 0) {
        return '<div class="line-dot"><p class="inner-dot"></p></div><div class="customDot"><p class="dot-name"><span>Pink Shoes</span> </br>Now at $145.99</p></div>';
      } 
      if (index == 1) {
        return '<div class="line-dot"><p class="inner-dot"></p></div><div class="customDot"><p class="dot-name"><span>Anna Field</span></br>Limited collection</p></div>';
      }
      if (index == 2) {
        return '<div class="line-dot"><p class="inner-dot"></p></div><div class="customDot"><p class="dot-name"><span>Prada</span></br>Summer is coming</p></div>';
      }
    }
  });
});


//Add dots info





$(document).ready(function () {
  // slick carousel
  $('.text-slider').slick({
    dots: false,
    autoplay: true,
    vertical: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    autoplay: true,
    verticalSwiping: true,
    arrows: false,
    adaptiveHeight: true,
    autoplaySpeed: 5000,


  });
});


//Search function

$(document).ready(function () {
  $.ajaxSetup({ cache: false });
  $('#search').keyup(function () {
    $('#result').html('');
    $('#state').val('');
    var searchField = $('#search').val();
    var expression = new RegExp(searchField, "i");
    $.getJSON('data.json', function (data) {
      $.each(data, function (key, value) {
        if (value.name.search(expression) != -1 || value.category.search(expression) != -1) {
          $('#result').append('<li class="list-group-item link-class"> ' + value.name + ' | <span class="text-muted">' + value.category + '</span></li>');
        }
      });
    });
  });

  $('#result').on('click', 'li', function () {
    var click_text = $(this).text().split('|');
    $('#search').val($.trim(click_text[0]));
    $("#result").html('');
  });


  $("#search").on('keyup click', function (e) {
    var click_text = $(this).val();
    if (click_text !== undefined && click_text.length > 0) {
      $("#result").show();
    } else {
      $("#result").hide();
    }
  }).blur(function (e) {
    $("#result").hide();
  });

});

//Password Show/Hide

$(".toggle-password").click(function () {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});


//Login or Register


document.querySelector('.login').addEventListener('click', function () {
  document.querySelector('.login-form').style.display = 'block';
  document.querySelector('.create-acc').addEventListener('click', function () {
    document.querySelector('.sign-in-container').style.display = 'none';
    document.querySelector('.sign-up-container').style.display = 'block';
  })
  document.querySelector('.use-acc').addEventListener('click', function () {
    document.querySelector('.sign-up-container').style.display = 'none';
    document.querySelector('.sign-in-container').style.display = 'block';

  })
  $(document).mouseup(function (e) {
    var container = $('.form-container');
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      document.querySelector('.login-form').style.display = 'none';
    }
  });

})

//Flicker get img widget
$(function () {
  var flickrApiUrl = "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=803bec1e5c1741697e87174a70fe29ae&tags=funky+buddha&extras=&format=json&nojsoncallback=1";
  $.getJSON(flickrApiUrl, {
    tags: "funky buddha",
    tagmode: "any",
    format: "json"
  }).done(function (data) {
    var src;
    $.each(data.photos.photo, function (i, myresult) {
      src = "http://farm" + myresult.farm + ".staticflickr.com/" + myresult.server + "/" + myresult.id + "_" + myresult.secret + ".jpg";
      var a = document.createElement('a');
      a.setAttribute("href", src);
      $("<img>").attr("src", src).appendTo(a);
      document.querySelector(".popup-gallery").appendChild(a);
      if (i == 5) {
        return false;
      }
    })

  }).fail(function () {
    alert("Ajax call failed");
  })
})




$(document).ready(function () {
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    }
  });
});




  var itemRow = document.querySelector('.item-row');
  var itemCol = document.querySelector('.item-column');
  // var productPage = document.querySelector('.products-page')
  var items = document.querySelector('.all-products');
  
  itemCol.addEventListener('click', function() {
    items.style.flexDirection = 'column';
  })
  
  itemRow.addEventListener('click', function(){
    items.style.flexDirection = 'row';
  })




