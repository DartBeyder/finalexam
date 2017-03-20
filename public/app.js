$('#app').html(`  
	`);
setTimeout(function(){
	x();
},10);

function x(){
	$.ajax({
	url:"https://api.spotify.com/v1/search?query=artist:khalid&type=album"
}).done(function(response){
	$.ajax({
		url:response.albums.items[0].href
	}).done(function(album){
	console.log(response);
	let name = response.albums.items[0].artists[0].name;
	let image1 = response.albums.items[0].images[0].url;
	let mp3 = album.tracks.items[0].preview_url;
	var html = `

	<div class="parallax-container">
    <div class="parallax"><img src="https://complex-res.cloudinary.com/images/w_1200/nrwebsl4p6ixhtmmpz2g/khalid-location"></div>
  </div>
  <div class="section white">
    <div class="row container">
      <h2 class="header">Parallax</h2>
      <p class="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
    </div>
  </div>

	
	<div class="center">
        <div class="col s12 m4">
          <div class="card-panel ">
            <span class="white-text">KHALID</span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col s12 m4">
          <img class="materialboxed" width="290" src="http://www.billboard.com/files/styles/900_wide/public/media/07-khalid-bb5-beat-opener-don-2017-billboard-1240.jpg">
        </div>
        <div class="col s11 m4">
          <img class="materialboxed" width="290" src="http://www.billboard.com/files/styles/900_wide/public/media/04-khalid-bb5-beat-opener-907t-2017-billboard-1240.jpg">
        </div>
        <div class="col s12 m4">
          <img class="materialboxed" width="290" src="http://www.billboard.com/files/styles/900_wide/public/media/05-khalid-bb5-beat-opener-jo8dn-2017-billboard-1240.jpg">
        </div>
      </div>

      

	<h1><font face="arial,helvetica">Latest Album</h1>
	<img src="${image1}"/>
	<audio controls>
	<source src="${mp3}" type="audio/mpeg">
	Your browser does not support the audio element.
	</audio>


	`;
	$('#app').html(html);
		
	});
});
}