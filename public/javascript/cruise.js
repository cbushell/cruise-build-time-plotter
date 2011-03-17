var Cruise = {
  series: [],

  refresh: function(builds){
    var self = this;
    self.series = [];

    $.each(builds, function(build_index, build) {
      $.get("proxy?url=" + encodeURIComponent(build.url), function(data) {
        self.series.push({
          label: build.legend,
          data: CSVParser.parse(data)
        });
      });
    });
  }
};