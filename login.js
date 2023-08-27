document.getElementById('btn-submit').addEventListener('click',function(){
        const emailField = document.getElementById('user-email')
        const email = emailField.value 
        const passwordField= document.getElementById('user-password')
        const password = passwordField.value
        if(email === 'shakil@gmail.com' && password=== 'secret'){
                window.location.href='brank.html'
        }
         else{
              alert('pless account create ok bro ')
        }
})