 import Rx from 'rxjs/Rx';
import matchslabs from '../MarkUps/matchslabs.js';
import navbar from '../MarkUps/navbar.js';
var search =()=>
{
    
  var input, filter,matchfilter, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  matchfilter = document.getElementsByName("match");
 
  for (i = 0; i < matchfilter.length; i++) {
    let h5 = matchfilter[i].getElementsByTagName("h5")[0];
    if (h5) 
    {
      if (h5.innerHTML.toUpperCase().indexOf(filter) > -1) 
      {
        console.log(matchfilter[i].style.display = "");
      } else {
       console.log( matchfilter[i].style.display = "none");
      }
    }       
  }


}
export default search;
