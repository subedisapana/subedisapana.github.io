// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

$(document).ready(function() {
  AOS.init( {
    // uncomment below for on-scroll animations to played only once
    // once: true  
  }); // initialize animate on scroll library
});

// Smooth scroll for links with hashes
$('a.smooth-scroll')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});


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

              }
              );

              $('tbody').html(statusHTML);
              }
               request.send();


