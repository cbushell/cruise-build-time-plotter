var CSVParser = {
  parse: function(data) {
    var data_series = [];
    var rows = data.split(/\n/);

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

    return data_series;
  }
};