function QuestionComponent(parent) {

    this.parent = parent;
    this.container = document.createElement('ul');
    this.parent.appendChild(this.container); //за parent закачаме container
}

QuestionComponent.prototype.addQuestion = function (text) {
    let questionElement = document.createElement('li');
    questionElement.textContent = text; //добавяме text

    this.container.appendChild(questionElement);
};
