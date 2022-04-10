class Question {
  constructor(title, image, options, quizNumber) {
    this.id = Date.now() + Math.trunc(Math.random() + 9);
    this.title = title;
    this.image = image;
    this.options = options;
    this.quizNumber = quizNumber;
  }
}

export default Question;
