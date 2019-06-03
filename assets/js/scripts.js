$(document).ready(function(){

    $('.main-slider').slick({
        arrows: true,
        autoplay: true
    });

    

  });
var feed = new Instafeed({
    get: 'user',
    tagName: 'most-recent',
    clientId: '6291545154.1677ed0.58e7d24393e2420c821a083c6de51277'
});
feed.run();