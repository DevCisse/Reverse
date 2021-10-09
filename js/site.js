//Get the string from the page

//controller function
function getValues()
{
  document.getElementById('alert').classList.add('invisible')

  let userString =   document.getElementById('userString').value;

  let revString = reverseString(userString);

  displayString(revString);

}

//reverse the string
function reverseString(userString)
{

  let revString =  [];
  for (let index = userString.length -1 ; index >=0 ; index--) {
    revString += userString[index];
    
  }
  return revString;
}


//Display message

//view Funciton
function displayString(revString){
  //write to the page
document.getElementById('msg').innerHTML = `Your string reversed is ${revString}`;
  //show the alert box
document.getElementById('alert').classList.remove('invisible'); 

}