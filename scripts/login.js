document.getElementById('login-btn').addEventListener('click',()=>{
    // get the username
    const username=document.getElementById('userInput');
    const usrvalue=username.value;
    console.log(usrvalue);
    //get the password
    const userpass=document.getElementById('passwords');
    const pasValue=userpass.value;
    console.log(pasValue);

   // match the value and access to next page
    if(usrvalue=='admin' && pasValue=='admin123'){
   alert('login successfull')
   window.location.assign("/homes.html")
    }
    else{ 
        alert('login failed')
        return;
}
   

})




// const username=document.getElementById('userInput');
// const uservalue=username.target.value;
// console.log(uservalue)