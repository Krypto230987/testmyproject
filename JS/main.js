    let menuIcon = document.querySelector('.menu_icon');
    let menuBody = document.querySelector('.menu_body');
    menuIcon.addEventListener('click', openMenu)
    function openMenu(){
      menuBody.classList.toggle('active');
      menuIcon.classList.toggle('active');
    }
    let games = document.getElementById('games');
    let Snake = document.getElementById('Snake');
    let Сalculator = document.getElementById('Сalculator');
    Snake.onclick = function(){
        games.setAttribute('src',"pages/snake/tr.html")
    }
    Сalculator.onclick = function(){
        games.setAttribute('src',"pages/каркулято/cork.html")
    }


