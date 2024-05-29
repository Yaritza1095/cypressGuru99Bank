const { defineConfig } = require('cypress');
const XLSX = require('xlsx');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        convertXlsxToJson({ filePath }) {
          const workbook = XLSX.readFile(filePath);
          const sheetNameList = workbook.SheetNames;
          const sheet = workbook.Sheets[sheetNameList[0]];
          const validUser = sheet['A2'].v;
          const invalidUser = sheet['A3'].v;
          const validPassword = sheet['B2'].v;
          const invalidPassword = sheet['B3'].v;
          return { validUser, invalidUser, validPassword, invalidPassword };
        },
      });
    },
    baseUrl: 'https://demo.guru99.com',
  },
});
