
let usuario = document.getElementById('usuario');
let clave = document.getElementById('clave');

let validarForm = document.getElementById('form-contacto')

validarForm.addEventListener('submit', evt =>{

    evt.preventDefault()
    
    if (usuario.value == null || usuario.value == ''){
        
        let span = usuario.closest('form').querySelectorAll('.error')
        span[0].textContent = 'Error: Ingrese ususario'
        span[0].style.color = 'red'
        usuario.closest('div').querySelector('label').style.color = 'red'
        usuario.style.border = '1px solid red'

    }else if (!usuario.value.includes('@')) {

        let span = usuario.closest('form').querySelectorAll('.error')
        span[0].textContent = 'Error: Falta "@"'
        span[0].style.color = 'red'
        usuario.closest('div').querySelector('label').style.color = 'red'
        usuario.style.border = '1px solid red'

    }if (clave.value == null || clave.value == ''){
        
        let span = clave.closest('form').querySelectorAll('.error')
        span[1].textContent = 'Error: Ingrese su clave'
        span[1].style.color = 'red'
        clave.closest('div').querySelector('label').style.color = 'red'
        clave.style.border = '1px solid red'
        
    }

    

})






