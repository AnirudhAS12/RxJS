import Rx from 'rxjs/Rx';
import getOnlineAPI from '../getOnlineAPI.js';
 var matchslabs =(team1,team2,type,date,tosswinnerteam) =>
{
    var matchSlabs=document.getElementById('matchfeed');
    var div=document.createElement("div");
    div .setAttribute("name","match");
    
    div.innerHTML=`
    

      <div class="card-action" >
      <div class="col s12 m6">
      <div class="card blue-grey darken-1">
      <div class="card-content white-text">
      <h5>${team1} vs ${team2}</h5>
      <p>Toss won by : ${tosswinnerteam}</p>
      <p>Type : ${type}</p>
       <p>${date}</p>
       <p>
      </div>
      </div>
</div></div>
      `;
      matchSlabs.appendChild(div);
}

export default matchslabs;