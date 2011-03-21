$(document).ready(function() {

  $("#chart").bind("click", function(){
    $("#series").toggle();
  });

  $("#series a.add").bind("click", function(){
    var markup = "<div><input></input><input></input><a></a></div>";
    $(this).parent().append(markup);
  });

  $("#series a.remove").bind("click", function(){
    $(this).parent().remove();
    Cruise.refresh();
  });

  Cruise.refresh();
}).ajaxStop(
  function(){
    Plotter.plot(Cruise.series)
  }
);