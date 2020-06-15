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



