var CSVParser = {
  parse: function(data) {
    var dataSeries = [];
    var rows = data.split(/\n/);

    $.each(rows, function(row_index, row) {
      if (row_index > 0) {
        var tokens = row.split(",");
        var buildDuration = tokens[1];
        var buildStartTime = Date.parse(tokens[8]);

        var build_status = tokens[3];

        if (build_status == 'Passed') {
          dataSeries.push([buildStartTime.getTime(), buildDuration]);
        }
      }
    });

    return dataSeries;
  }
};