window.fbAsyncInit = function() {
  FB.init({
    appId      : '350268732003695',
    xfbml      : true,
    version    : 'v2.8'
  });
};

(function(d, s, id){
 var js, fjs = d.getElementsByTagName(s)[0];
 if (d.getElementById(id)) {return;}
 js = d.createElement(s); js.id = id;
 js.src = "//connect.facebook.net/en_US/sdk.js";
 fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


// This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {
  console.log('statusChangeCallback');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    testAPI();
  } else if (response.status === 'not_authorized') {
    // The person is logged into Facebook, but not your app.
    document.getElementById('status').innerHTML = 'Please log ' +
    'into this app.';
  } else {
    // The person is not logged into Facebook, so we're not sure if
    // they are logged into this app or not.
    document.getElementById('status').innerHTML = 'Please log ' +
    'into Facebook.';
  }
}


function fb_login(){
  FB.login(function(response) {
    if (response.authResponse) {
      console.log('Welcome!  Fetching your information.... ');
          console.log(response); // dump complete info
          var accessToken =   FB.getAuthResponse()['accessToken'];
          console.log('Access Token = '+ accessToken);
          userID = FB.getAuthResponse()['userID']; //get FB UID
          console.log("userID: "+ userID);
          //refer to getData() function below
          getData(accessToken);
        } else {
          //user hit cancel button
          console.log('User cancelled login or did not fully authorize.');
        }
      }, {'scope': 'public_profile,email,user_friends,user_likes,user_location'});
}


function getData(accessToken) {
  var userData;
  FB.api('/me', 'get', { access_token: accessToken, fields: 'id,name,gender,email,location,friends,likes,picture' }, function(response) {
    //here's the full object with all the data
    //console.log(response.accessToken);
    userData = response;
    console.log(userData);
    userData["accessToken"]=accessToken;
    FB.api("/me/picture?width=1000&height=1000",  function(response) {
      userData.picture.data.url = response.data.url;
      console.log(userData);
      $.post('http://localhost:3000/facebookLogin',{userData: userData},
        function(result){
         console.log(result);
       });
    });

    
  });

  //check if the loginStatus works
  FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      // the user is logged in and has authenticated your
      // app, and response.authResponse supplies
      // the user's ID, a valid access token, a signed
      // request, and the time the access token 
      // and signed request each expire
      
      //redirect to feed.ejs
      window.location = "feed";

    } else if (response.status === 'not_authorized') {
      // the user is logged in to Facebook, 
      // but has not authenticated your app
    } else {
      // the user isn't logged in to Facebook.
    }
  });
}


