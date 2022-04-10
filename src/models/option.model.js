class Option {
  constructor(text, isCorrect = false, selected = false) {
    this.text = text;
    this.isCorrect = isCorrect;
    this.selected = selected;
  }
}

export default Option;
