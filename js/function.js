function shiftStatus() {
	for (var i = 0; i < response.length; i++) {
		var code = Number(response[i].statusCode);
		if (code < 4) {
			response[i].statusCode = String(code + 1);
			break;
		}
	}
}

function getData() {
	var axis = $("#axis input:checked").val();
	var status = _.pluck($("#status input:checked"), "value");
	var data = response
		.filter(function(v) {
			return status.indexOf(v.statusCode) >= 0;
		})
		.sort(function(a, b) {
			if(a.statusCode < b.statusCode) return 1;
			if(a.statusCode > b.statusCode) return -1;
			if(a[axis] < b[axis]) return -1;
			if(a[axis] > b[axis]) return 1;
			return 0;
		});
	
	return _.chain(data)
		.map(function(value) {
			return {
				axis: convTime(value[axis], true),
				info: [
					value.transporterName,
					"車両：" + value.carNumber,
					"荷降：" + value.kizaiName,
					"予定：" + convTime(value.startTime) + "～" + convTime(value.endTime),
					"受付：" + convTime(value.receiptTime)
				].join("\n"),
				status: convStatus(value.statusCode)
			};
		})
		.sortBy(function(value) {
			return Number((value.axis).split(":")[0]);
		})
		.groupBy(function(value) {
			return value.axis
		})
		._wrapped;
}

function convTime(strDate, isRound) {
	var date = new Date(strDate);
	var hours = date.getHours();
	var minutes = (isRound ? "00" : "0" + date.getMinutes()).slice(-2);
	return hours + ":" + minutes;
}

function convStatus(code) {
	return { 0: "waiting", 1: "announcing", 2: "unloading", 3: "unloaded", 4: "exited" }[code];
}

function arrayDivide(list, n) {
	var temp = _.values(_.groupBy(list, function(v, i) { return Math.floor(i / n) }));
	return _.map(temp, function(value) {
		return $.extend(new Array(n), value);
	});
}

function getColHeaders() {
	var axis = $("#axis input:checked").parent().text();
	return [ axis, "案内順①", "案内順②", "案内順③", "案内順④", "案内順⑤", "案内順⑥" ];
}
