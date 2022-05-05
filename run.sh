rm -r allure-report/; mkdir allure-report/
rm -r allure-results/; mkdir allure-results/
npx wdio wdio.conf.js 
allure generate allure-results/ && allure open
