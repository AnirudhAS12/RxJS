 import Rx from 'rxjs/Rx';
 import apikey from './apikey.js';
 import matchslabs from './MarkUps/matchslabs.js';

 export var getOnlineAPI = () => {
     console.log("get API")
     let newsObservable = Rx.Observable.fromPromise(fetch(`http://cricapi.com/api/matches/${apikey}`)
             .then((res) => res.json())
         )
         .subscribe((data) => { 
             console.log(data);
             let output = `<h2 style="color:#ffffff">CricWorld</h2>`;
             data.matches.forEach((post) => {
                 //         output += `
                 //     <div>
                 //     <h3>${post.name}</h3>
                 //       p>${post.description}</p>
                 //      <p>${post.url}</p>
                 //       <p>${post.language}</p>
                 //        <p>${post.country}</p>
                 //    </div>
                 //     `
                 let status;
                 if (post.winner_team == undefined) {
                     status = "Match not started/in progress";
                 } else {
                     status = post.winner_team;
                 }
                 let typeo;
                 if (post.type == "") {
                     typeo = "Charity";
                 } else {
                     typeo = post.type;
                 }

                 var mdate = post.date;
                 var mydate = new Date();
                 console.log(mydate);
                 console.log(post.date);
                 var date = new Date(mdate);

                 let dat;
                 if (date > mydate) {
                     dat = `Will be played on : ${post.date}`;
                 } else {
                     dat = `Played on : ${post.date}`;
                 }

                matchslabs(`${post["team-1"]}`, `${post["team-2"]}`, `${typeo}`, `${dat}`, `${status}`);
             });
             document.getElementById('output').innerHTML = output;
         })
 }