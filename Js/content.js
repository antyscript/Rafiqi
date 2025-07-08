let dataprofil = JSON.parse(localStorage.getItem('dataprofil'));
if (dataptofil.profil.username == '' && dataptofil.profil.password == ''){
  window.location.href = 'login.html';
  document.write('hello world');
};