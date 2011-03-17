var Plotter = {
  plot: function(series) {
    $.plot(
            $("#chart"),
            series, {
              xaxis: { mode: "time" },
              yaxis: { tickFormatter:
                          function(milliseconds) {
                            return new TimeSpan(milliseconds * 1000).toString("mm:ss");
                          }
              },
              legend: {
                show: true,
                noColumns: series.length
              }
            }
    );
  }
};

