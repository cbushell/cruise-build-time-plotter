var all_builds_series = [];

$(document).ready(
        function() {

          var builds = [
            {   url: "http://localhost:9292/demo/1.csv",
              legend: "Start"
            }
          ];


          $.each(builds, function(build_index, build) {
            $.get("proxy?url=" + encodeURIComponent(build.url), function(data) {
              var rows = data.split(/\n/);
              var data_series = [];

              $.each(rows, function(row_index, row) {
                if (row_index > 0) {
                  var tokens = row.split(",");
                  var build_duration = tokens[1];
                  var build_start_time = Date.parse(tokens[8]);

                  var build_status = tokens[3];

                  if (build_status == 'Passed') {
                    data_series.push([build_start_time.getTime(), build_duration]);
                  }
                }
              });

              all_builds_series.push({label: build.legend, data: data_series});
            });
          });
        }).ajaxStop(function() {
  $.plot($("#all_builds"), all_builds_series, {
    xaxis: { mode: "time" },
    yaxis: { tickFormatter:
            function(milliseconds) {
              return new TimeSpan(milliseconds * 1000).toString("mm:ss");
            }},
    legend: {   show: true,
      noColumns: all_builds_series.length }
  });
});