function validateForm() {
    let pword = document.forms["signup"]["pword"].value;
    let cpword = document.forms["signup"]["cpword"].value;
    if (pword !== cpword) 
    {
      alert("Passwords do not match!");
      return false;
    }
    if (!validatePassword(pword))
    {
        alert('Password does not match the requirements')
        return false;
    }

   // if (pword.length < 6) 
   // {
   //   alert("Passwords needs to be longer then 6 characters");
    //  return false;
   // }
   // if (!isLetter(pword.substring(0, 1)))
   // {
   //   alert("First character does not start with an alphabet");
   //   return false;
   // }
   alert ('Form was submitted successfully!');
}

//function isLetter(str) {
//    return str.match(/[a-z]/i);
// }

function validatePassword(pword)
{
    return pword.match("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$");
}