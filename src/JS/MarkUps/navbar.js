var navbar = () =>
{
var topbar=document.getElementById('topbar');
 topbar.innerHTML=`
 <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Cricket</a>
      </div>
    <ul class="nav navbar-nav">
      <li id ="getOnlineAPI" class="active"><a href="#" >Matches</a></li>
      <li><a href="#">Players</a></li>
      <li><a href="#">News</a></li>
    </ul>
    <br />
    <div class="container">
    <form class="navbar-form navbar-center">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Search" id="myInput" size="200px">
        <div class="input-group-btn">
                  <button id="search" class="btn btn-default type="submit">
            <i class="glyphicon glyphicon-search"></i>
          </button>
        </div>
        </div>
      </div>
    </form>
  </div>
</nav>

`;
}
export default navbar;
 