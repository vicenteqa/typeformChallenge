let now = '';

exports.config = {
	framework: 'jasmine',
	seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./src/test/*.js'],

	onPrepare: function () {
		const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
		const jasmineReporters = require('jasmine-reporters');
		const moment = require('moment');
		now = moment().format('DD_MM_YY_HmmssSSS');
		jasmine.getEnv().addReporter(
			new jasmineReporters.JUnitXmlReporter({
				consolidateAll: true,
				filePrefix: `guitest-xmloutput_${now}`,
				savePath: './reports/',
			})
		);
		jasmine.getEnv().addReporter(
			new SpecReporter({
				spec: {
					displayStacktrace: true,
				},
			})
		);
	},
	onComplete: function () {
		let browserName, browserVersion;
		const capsPromise = browser.getCapabilities();
		capsPromise.then(function (caps) {
			browserName = caps.get('browserName');
			browserVersion = caps.get('version');
			platform = caps.get('platform');
			const HTMLReport = require('protractor-html-reporter-2');
			testConfig = {
				reportTitle: 'Typeform Challenge Test Report',
				outputPath: './reports',
				outputFilename: `TypeformChallengeTestReport_${now}`,
				screenshotPath: './screenshots',
				testBrowser: browserName,
				browserVersion: browserVersion,
				modifiedSuiteName: false,
				screenshotsOnlyOnFailure: true,
				testPlatform: platform,
			};
			new HTMLReport().from(`./reports/guitest-xmloutput_${now}.xml`, testConfig);
		});
	},
};
