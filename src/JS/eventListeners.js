import Rx from 'rxjs/Rx';
import {getOnlineAPI} from './getOnlineAPI.js';
import navbar from './MarkUps/navbar.js';
import search from './Search/search.js';
navbar();
var fetching = Rx.Observable.fromEvent(document.getElementById('getOnlineAPI'),"click")
.subscribe(function(val){
    getOnlineAPI()
});

    export {fetching};

    var sea=Rx.Observable.fromEvent(document.getElementById('search'),"click")
    .subscribe(function(valu){
        search()
    });

    export {sea};
