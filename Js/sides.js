const nomo = document.querySelector('.nomo');
const sidepro = document.querySelector('.sidepro');
const sidemenu = document.querySelector('.sidemenu');
const close = document.querySelector('.close');
const close2 = document.querySelector('.cols');
let dataprofil = JSON.parse(localStorage.getItem('dataprofil')) || [];
localStorage.setItem('dataprofil', JSON.stringify(dataprofil));
darkmode = null



function profil(){
  sidepro.style.display = 'block'
  sidemenu.style.display = 'none';
};
function clos(){
  sidepro.style.display = 'none'
};
function menu(){
  sidemenu.style.display = 'block';
  sidepro.style.display = 'none'
};
function clos2(){
  sidemenu.style.display = 'none';
}

function dark(){
  let select = document.querySelectorAll('.dark');
  let darkbtn = document.querySelectorAll('.darkbtn');
  let darktext = document.querySelectorAll('.darktext');
  let darkside = document.querySelectorAll('.darkside');
  let imago = document.querySelectorAll('.imago');
  let cono = document.querySelector('.cono');
  let nomo = document.querySelector('.nomo');
  
    if (darkmode == null){
  nomo.style.color = '#999'
  imago.forEach(function(element){
    element.style.cssText = 'filter:brightness(60%);';
  })
  cono.style.cssText = 'background-color: rgb(0,0,0,0.5);';
  
  darktext.forEach(function(element){
    element.style.cssText = 'color:#999;';
  })
  darkside.forEach(function(element){
    element.style.cssText = 'background-color:#222; color:#999;';
  })
  darkbtn.forEach(function(element){
    element.style.cssText = 'border: 1px solid blue; box-shadow:  1px 1px 7px blue, 1px 1px 7px blue inset; background-color:transparent;'
  })
  select.forEach(function(element){
     element.style.cssText = 'background-color:black; color:#999;';
     sidemenu.style.display = 'none';
  })
    
      darkmode = 1
    }else{
      nomo.style.color = '#444'
  imago.forEach(function(element){
    element.style.cssText = 'filter:brightness(100%);';
  })
  cono.style.cssText = 'background-color: rgb(225,225,225,0.4);';
  
  darktext.forEach(function(element){
    element.style.cssText = 'color:#444;';
  })
  darkside.forEach(function(element){
    element.style.cssText = 'background-color:#ccc; color:#444;';
  })
  darkbtn.forEach(function(element){
    element.style.cssText = 'border: 1px solid #d97706; box-shadow:  1px 1px 7px #d97706, 1px 1px 7px #d97706 inset; background-color:transparent;'
  })
  select.forEach(function(element){
     element.style.cssText = 'background-color:#777; color:#fff;';
     sidemenu.style.display = 'none';
  })
      darkmode = null
      
    }
  dataprofil.push(darkmode)
  sessionStorage.setItem('darkmode',darkmode)
}
let mode = sessionStorage.getItem('darkmode')
if (mode == 1){
   dark()
}


