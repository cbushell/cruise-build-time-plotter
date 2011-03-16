var all_builds_series = [];

$(document).ready(function() {

          var builds = [
            {   url: "http://localhost:9292/demo/0.csv",
              legend: "Series 0"
            },
            {   url: "http://localhost:9292/demo/1.csv",
              legend: "Series 1"
            },
            {   url: "http://localhost:9292/demo/2.csv",
              legend: "Series 2"
            },
            {   url: "http://localhost:9292/demo/3.csv",
              legend: "Series 3"
            },
            {   url: "http://localhost:9292/demo/4.csv",
              legend: "Series 4"
            }
          ];

  $.each(builds, function(index, src) {
    var markup =
            "<div id='{seriesId}'>" +
              "<input type='text' value='{url}' class='url' />" +
              "<input type='text' value='{legend}' class='legend' />" +
            "</div>";

    markup = markup.replace("{url}", src.url);
    markup = markup.replace("{legend}", src.legend);
    markup = markup.replace("{seriesId}", "series" + index);
    $("#series").append($(markup));
  });


  $("#chart").bind("click", function(){
    $("#series").toggle();
  });


  $.each(builds, function(build_index, build) {
    $.get("proxy?url=" + encodeURIComponent(build.url), function(data) {
      all_builds_series.push({
        label: build.legend,
        data: CSVParser.parse(data)
      });
    });
  });
}).ajaxStop(
  Plotter.plot
);