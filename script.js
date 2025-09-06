const sectionIds = ['home', 'menu', 'Reservations', 'order', 'login'];

function showOnlySection(targetId) {
    sectionIds.forEach(id => {
        const sec = document.getElementById(id);
        if (sec) {
            sec.style.display = (id === targetId) ? 'block' : 'none';
        }
    });
}




document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        showOnlySection(targetId);
    });
});


window.addEventListener('DOMContentLoaded', () => {
    showOnlySection('home');
});
document.querySelector('#order .btn').addEventListener('click', function (e) {
    e.preventDefault();
    showOnlySection('menu');
});



window.addEventListener('scroll',()=>{
    let sections=document.querySelectorAll('section');
    let scrollY=window.scrollY;
    
    sections.forEach(sec=>{
        let top=sec.offsetTop-100;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(scrollY>=top && scrollY<top+height){
            document.querySelectorAll('.nav-link').forEach(link=>{
                link.classList.remove('active');
            });
            document.querySelector(`a[href="#${id}"]`).classList.add('active');

        }
    });

});

document.getElementById('reserv-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
  
    alert(`Reservation confirmed for ${name} on ${date} at ${time}`);
    
    this.reset(); 
  });
   
document.getElementById('login-form').addEventListener('submit',function(e){
    e.preventDefault();
    let username=document.getElementById('UserName').value;
    let password=document.getElementById('password').value;

    if(username==="admin" && password==="1234"){
        alert("Login Sucessfull");

    }else{
        alert("Invaild username or password");
    }
    
});

document.querySelector('.heading-content .btn').addEventListener('click', function (e) {
    e.preventDefault();
    showOnlySection('menu');
});


