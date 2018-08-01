const { expect } = require('chai');
const page = require('./page.js')

describe('Vue.js Regex Generator', function () {
  beforeEach(function () {
    browser.url('./');
  })

  it('should let you add a string', function () {
    const inputText = 'foo';
    const expectedOutput = '/foo/';

    page.addString(inputText)

    const outputValue = page.textOutput.getValue()

    expect(outputValue).to.equal(expectedOutput);
  })

  it.only('should let you add multiple strings', function () {
    const strings = ['foo', 'foobar'];
    const expectedOutput = '/foo(?:bar)?/';

    strings.forEach(string => page.addString(string));

    const outputValue = page.textOutput.getValue()

    expect(outputValue).to.equal(expectedOutput);

    page.addedStrings.forEach((addedString, idx) => {
      expect(addedString.getText()).to.equal(strings[idx]);
    });

    page.addString('foobaz');

    expect(page.addedStrings[2].getText()).to.equal('foobaz');
  })
  // should let you remove strings
  // should let your reset all the settings
})