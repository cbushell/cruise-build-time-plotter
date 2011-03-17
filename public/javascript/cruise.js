var Cruise = {
  refresh: function() {
    var self = this;
    self.series = [];

    $.each(self.dataSources(), function(build_index, build) {
      $.get("proxy?url=" + encodeURIComponent(build.url), function(data) {
        self.series.push({
          label: build.legend,
          data: CSVParser.parse(data)
        });
      });
    });
  },

  dataSources: function() {
    var sources = [];

    $("#series div").each(function(index) {
      var url = $(this).find(".url").val();
      var legend = $(this).find(".legend").val();
      sources.push({url: url, legend: legend});
    });

    return sources;
  }
};