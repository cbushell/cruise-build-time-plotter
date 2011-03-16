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
    $("#src").append("<input type='text' value='" + src.url + "' id='series" + index + "'></input>");
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