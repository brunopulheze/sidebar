
function hideMenu(e) {
    for (let i = 0; i < e.target.parentElement.children.length; i++) {  //!!!
        if (e.target.parentElement.children[i].classList.contains('hide')) {
            e.target.parentElement.children[i].classList.remove('hide');
            e.target.parentElement.children[i].classList.add('show');            
        } else { 
            if (e.target.parentElement.children[i].classList.contains('show')) {
                e.target.parentElement.children[i].classList.remove('show');
                e.target.parentElement.children[i].classList.add('hide');   
            }  
        }     
    }
    /* 
    console.log(('target: ',  e.target.id));
    console.log('target: ',  e.target.parentElement);
    console.log('target: ',  e.target.parentElement.children);
    console.log('target: ',  e.target.parentElement.children[0].id);
    */
}

document.querySelector('.sidebar').addEventListener('click', hideMenu)


