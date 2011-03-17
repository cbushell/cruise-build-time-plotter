$(document).ready(function() {
  var series = [];

  $("#series div").each(function(index) {
    var url = $(this).find(".url").val();
    var legend = $(this).find(".legend").val();
    series.push({url: url, legend: legend});
  });


  $("#chart").bind("click", function(){
    $("#series").toggle();
  });

  $("#series a").bind("click", function(){
    $(this).parent().remove();
    Cruise.refresh(series);
  });

  Cruise.refresh(series);
}).ajaxStop(
  function(){
    Plotter.plot(Cruise.series)
  }
);