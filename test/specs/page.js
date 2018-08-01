class RegexPage {
  get textInput () { return $('input[type="text"]:not([readonly])') }
  get addButton () { return $('button*=+') }
  get textOutput () { return $('input[type="text"][readonly]') }
  get addedStrings () { return $$('//div[text()="Added Strings"]/following-sibling::div/ul/li') }

  addString (text) {
    this.textInput.setValue(text)

    this.addButton.click()
  }
}

module.exports = new RegexPage();