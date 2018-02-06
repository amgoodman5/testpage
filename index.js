
$(() => {

playVideo();
alertEmailValue()


function playVideo(){
  let video = ".video";
  let playicon = ".playlogo";
  let videoText ='.video-text';
  $('.video').parent().click(function () {
    if($(this).children(video).get(0).paused){
        $(this).children(video).get(0).play();
        $(this).children(playicon).fadeOut();
        $( "bye<b>hello</b>" ).appendTo(playicon);
    }else{
       $(this).children(video).get(0).pause();
        $(this).children(playicon).fadeIn();
    }
  });
}

function alertEmailValue(){
  $( ".button--submit" ).click(function(event) {
    event.preventDefault();
      let emailvalue = $(this).closest("form").find("input[name='emailbox']").val();
      alert(emailvalue);
      return false;
  });

}





});
