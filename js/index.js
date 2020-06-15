fetch("https://api.github.com/users/subedisapana")

        .then (response=> response.json())

        .then (function(data)
         {
       	console.log(data)

       	  //let followersCount = data ['followers']
       	  //let followersInfo = 'You are being followed by ${followersCount} people on Github'

       	document.getElementById('Pp').src = data['avatar_url']
       	document.getElementById('FullName').textContent = data['name']
       	  //document.getElementById('Bio').textContent = data['bio']
          // document.getElementById('followersinformation').textContent = followersInfo
        });






     var request = new XMLHttpRequest()

       request.open('GET', 'https://api.github.com/users/subedisapana/repos', true) 

       request.onload= function(){

                var data= JSON.parse(this.response);

                var statusHTML ='';

               $.each(data, function(i, status){

                statusHTML += '<tr>';

                
                statusHTML += '<td>' + status.name + '</td>' ;
                statusHTML += '<td>' + status.language + '</td>' ;
                 statusHTML += '<td>' + status.description + '</td>' ;

                statusHTML += '</tr>';
              

});
               $('tbody').html(statusHTML);
           }
               

               request.send();


