const btns = document.querySelectorAll('button');
let dataprofil = JSON.parse(localStorage.getItem('dataprofil')) || [];
localStorage.setItem('dataprofil', JSON.stringify(dataprofil));




btns.forEach(btn => {
     btn.addEventListener('click', function(){
          if (dataprofil.length === 0){
            window.location.href = "pages/login.html";
          }
     });
   });