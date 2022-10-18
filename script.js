const burguer = document.querySelector('#burguer');
const sidebar = document.querySelector('#side');
burguer.addEventListener('click',function(){
    
    if(sidebar.style.display ==='none') sidebar.style.display = 'block';
    else{
         sidebar.style.display = 'none'
    } 
});

