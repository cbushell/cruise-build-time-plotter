$(document).ready(function() {
  var demoSeries = [
    { url: "http://localhost:9292/demo/0.csv",
      legend: "Series 0" },
    { url: "http://localhost:9292/demo/1.csv",
      legend: "Series 1" },
    { url: "http://localhost:9292/demo/2.csv",
      legend: "Series 2" },
    { url: "http://localhost:9292/demo/3.csv",
      legend: "Series 3" },
    { url: "http://localhost:9292/demo/4.csv",
      legend: "Series 4" }
  ];

  $.each(demoSeries, function(index, src) {
    var markup =
            "<div>" +
              "<input type='text' value='{url}' class='url' />" +
              "<input type='text' value='{legend}' class='legend' />" +
              "<a href='#' class='remove'>Remove</a>" +
            "</div>";

    markup = markup.replace("{url}", src.url);
    markup = markup.replace("{legend}", src.legend);
    $("#series").append($(markup));
  });

  $("#chart").bind("click", function(){
    $("#series").toggle();
  });

  $("#series a").bind("click", function(){
    $(this).parent().remove();
    Cruise.refresh(demoSeries);
  });

  Cruise.refresh(demoSeries);
}).ajaxStop(
  function(){
    Plotter.plot(Cruise.series)
  }
);