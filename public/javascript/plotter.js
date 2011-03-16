var Plotter = {
  plot: function() {
    $.plot(
            $("#chart"),
            all_builds_series, {
              xaxis: { mode: "time" },
              yaxis: { tickFormatter:
                          function(milliseconds) {
                            return new TimeSpan(milliseconds * 1000).toString("mm:ss");
                          }
              },
              legend: {
                show: true,
                noColumns: all_builds_series.length
              }
            }
    );
  }
};

