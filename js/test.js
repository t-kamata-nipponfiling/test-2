$(function() {

	var isControl = false;

	sample(true);

	$("#axis input").change(function() {
		sample();
	});

	$("#status input").change(function() {
		sample();
	});

	function sample(bln) {

		if (bln && isControl) return;

		var baseData = getData();
		var baseRow = 0;

		var data = [];
		var cell = [];
		var mergeCells = [];
		_.each(baseData, function(value, key) {
			var target = arrayDivide(value, 6);
			_.each(target, function(value, row) {
				data.push([key].concat(_.pluck(value, "info")));
				var status = ["header"].concat(_.pluck(value, "status"));
				_.each(status, function(className, col) {
					cell.push({ row: baseRow + row, col: col, className: className, readOnly: true });
				});
			});
			mergeCells.push({ row: baseRow, col: 0, rowspan: target.length, colspan: 1 });
			baseRow += target.length;
		});

		$("#example").empty();
		new Handsontable($("#example")[0], {
			data: data,
			cell: cell,
			mergeCells: mergeCells,
			rowHeaders: false,
			colHeaders: getColHeaders(),
			autoColumnSize: true,
			disableVisualSelection: true,
			copyPaste: false,
			minSpareRows: 0,
			minSpareCols: 0
		});

		if (bln) setTimeout(function() { shiftStatus(); sample(true); }, 3000);

	}

	$('#axis button').on('click', function() {
		if (!isControl) {
			isControl = true;
			$('#axis button').text("動作開始");
		} else {
			isControl = false;
			$('#axis button').text("動作停止");
			sample(true);
		}
	});

});
