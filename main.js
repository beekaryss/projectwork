const form = document.querySelector('.ontustik form');
        const inputs = document.querySelectorAll('.ontustik form input');

        form.addEventListener('submit',(e)=>{
          e.preventDefault();
          inputs.forEach((input) =>{
            if(!input.value) {
              input.parentElement.classList.add('error');
            } else {
              input.parentElement.class.remove('error')
            }
          });
        });