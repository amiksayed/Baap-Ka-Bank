document.getElementById('form').addEventListener("submit",function handleSubmit(e) {
    e.preventDefault();
    const email= e.target.email.value;
    const password= e.target.password.value;
    
    if(email=="nabiasayed296@gmail.com" && password== "Anika123")
    {
        window.location.href="banking.html";
    }
  })

