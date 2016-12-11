$('#postProduct').click(function() { 
  $.post('http://localhost:3000/scrape/redbubble', { productURL: $('#productURL').val()}, 
    function(result){
         console.log(result);
  });
});