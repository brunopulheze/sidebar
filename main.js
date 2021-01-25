
    /* 
    1.  Create a class which will be hide a items
    2.  Reach a parent and sibilings of parant reached
    3.  Change a class for each sibiling to display them
    
    1. Check condition (open/close)


    */

    
  


function test(e) {
    console.log(('target: ',  e.target.id));
    console.log('target: ',  e.target.parentElement);
    console.log('target: ',  e.target.parentElement.children[0].id);
    /* console.log();
    console.log('current target:', e.currentTarget.id);

    e.target.classList.remove('hide');
    e.target.classList.add('show')
  
 */

/*              e.target.parentElement.children[0].classList.remove('hide');
            e.target.parentElement.children[0].classList.add('show');    */  



    for (let i = 0; i < e.target.children.length; i++) {  //!!!
        if (e.target.children[i].classList.contains('hide')) {
            e.target.children[i].classList.remove('hide');
            e.target.children[i].classList.add('show');            
        } else { 
            if (e.target.children[i].classList.contains('show')) {
                e.target.children[i].classList.remove('show');
                e.target.children[i].classList.add('hide');   
            }  

        }

        
    }


}

document.querySelector('.sidebar').addEventListener('click', test)

