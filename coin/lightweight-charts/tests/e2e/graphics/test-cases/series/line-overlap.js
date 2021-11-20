function generateData() {
	const res = [];
	const time = new Date(Date.UTC(2018, 0, 1, 0, 0, 0, 0));
	for (let i = 0; i < 500; ++i) {
		res.push({
			time: time.getTime() / 1000,
			value: i,
		});

		time.setUTCDate(time.getUTCDate() + 1);
	}
	return res;
}

function runTestCase(container) {
	const chart = LightweightCharts.createChart(container);

	const mainSeries = chart.addLineSeries({
		lineWidth: 1,
		color: 'red',
	});

	mainSeries.setData(generateData());

	const secondarySeries = chart.addLineSeries({
		lineWidth: 1,
		color: 'green',
	});

	secondarySeries.setData(generateData());
}
