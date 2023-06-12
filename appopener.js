function isMobileDevice() {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

// Redirect to the YouTube app and play the video if the user is on a mobile device
document.getElementById("button").addEventListener("click", function(event) {
if (isMobileDevice()) {
    var youtubeVideoID = '@TrendingBeauties';
    var youtubeAppURL = 'vnd.youtube://watch?v=' + youtubeVideoID;
    var fallbackURL = 'https://www.youtube.com/watch?v=' + youtubeVideoID;
    window.location.href = youtubeAppURL;
}
else{
    window.open=fallbackURL
}
});

         
          
        //           document.getElementById("button").addEventListener("click", function(event) {
        //     event.preventDefault();
        //               window.location.href = 'https://www.youtube.com/watch?v=bGQ5TvAz4oI?feature=share3',"_blank";
          
          
        //   });