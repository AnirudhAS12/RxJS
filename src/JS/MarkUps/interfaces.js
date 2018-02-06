import Rx from 'rxjs/Rx';
// import './style.css';

var interfaces =()=>
{
var interfaces=document.getElementById("interfaces");
interfaces.innerHTML=`          

<div class="jumbotron text-center" >
  <h1 color:"white">Current/Upcoming Matches</h1>
  <p>For match updates only...</p> 
</div>
  

  <div class="row" id="matchfeed">
 
   
  </div>


`
}
export default interfaces;