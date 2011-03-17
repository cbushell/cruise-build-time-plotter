$(document).ready(function() {

  $("#chart").bind("click", function(){
    $("#series").toggle();
  });

  $("#series a").bind("click", function(){
    $(this).parent().remove();
    Cruise.refresh();
  });

  Cruise.refresh();
}).ajaxStop(
  function(){
    Plotter.plot(Cruise.series)
  }
);