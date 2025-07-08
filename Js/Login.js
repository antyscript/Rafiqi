  

  const input = document.getElementById('userpassword');
  const eyeopen = document.getElementById('eyeopen');
  const eyeclose = document.getElementById('eyeclose');
  const submit = document.getElementById('ok');
  
 
 
 eyeopen.addEventListener('click', tog);
 eyeclose.addEventListener('click', tog);
 
 
 
 function tog(){
   if (input.type === 'password'){
     eyeopen.style.color = '#999';
     eyeclose.style.color = 'transparent';
     input.type = 'text';
   }else{
     eyeopen.style.color = 'transparent';
     eyeclose.style.color = '#999';
     input.type = 'password';
   }
 }
 
 
function savedata() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('userpassword').value;
  const level = document.getElementById('level').value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value

 if (username.length < 5){
   alert('شنو زعما باغي تدير فيها ذكي هههه');
   alert('دخل سمية فيها كثر من خمسة الحروف');
   return
 }else{
  
  let dataprofil = JSON.parse(localStorage.getItem('dataprofil')) || [];

  
  const alreadyExists = dataprofil.some(user => user.username === username);

  if (alreadyExists) {
    input.value = ''
    username = ''
    window.location.href = "pages/content.html";
    return;
}
  
  const user = {
    username: username,
    password: password,
    gender: gender,
    level: level
};

  dataprofil.push(user);
  

  localStorage.setItem('dataprofil', JSON.stringify(dataprofil));
  alert('تم التسجيل، تابع ما كنت تقوم به')
  
 localStorage.setItem("lastuser", username)
}}
const storedusers = JSON.parse(localStorage.getItem('dataprofil')) || [];


 function del(){
   if (confirm('متأكد؟')){
     localStorage.clear();
     window.location.reload()
      localStorage.setItem("lastuser", 'فلان الفلاني');
      rename()
   }
 }
 function rename(){
     
   const lastuser = localStorage.getItem('lastuser')
    nomo.textContent = lastuser
  rename()
 }  
  storedusers.forEach(user => {
  console.log(`user name : [${user.username}], password: ${user.password},
  gender: ${user.gender}, level: ${user.level}`)
  });