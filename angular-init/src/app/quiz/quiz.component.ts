import { Component, OnInit } from '@angular/core';


export class Answer {
  public get answerTitle(): string {
    return this._answerTitle;
  };
  public get isRight(): boolean {
    return this._isRight;
  };
  constructor(
    private _answerTitle: string,
    private _isRight: boolean = false
  ) {
    // this.answerTitle = answerTitle;
    // this.isRight = isRight
  }
}


export class QuizRound {
  public get question(): string {
    return this._question;
  };
  public get answers(): Answer[] {
    return this._answers;
  };
  constructor(
    private _question: string,
    private _answers: Answer[]
  ) {
    // this.question = 'Which drink is made from the leaves of a plant?';
    // this.answers = [
    //   new Answer('A: Milk', false),
    //   new Answer('B: Orange juice', false),
    //   new Answer('C: Coffee', false),
    //   new Answer('D: Tea', true)
    // ]
  }

}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})


export class QuizComponent implements OnInit {
  private _selected;
  private _selectedAnswer;
  constructor() { }
  public question = new QuizRound(
    'Which drink is made from the leaves of a plant?',
    [
      new Answer('A: Milk'),
      new Answer('B: Orange juice'),
      new Answer('C: Coffee'),
      new Answer('D: Tea', true)
    ]
  );

  public select(element, answer): void {

    if (this._selected) {
      const dirtyElements = document.querySelectorAll('.selected-answer, .true-answer');
      for (let i = 0; i < dirtyElements.length; i++) {
        const element = dirtyElements[i];
        element.classList.remove('selected-answer', 'true-answer');

      }
      // this._selected.classList.remove('selected-answer', 'true-answer');
    }
    this._selectedAnswer = answer;
    this._selected = element;
    element.classList.add('selected-answer');
  }
  public buttonClick(): void {

    const nodeList = document.querySelectorAll("div.answer");
    for (let i = 0; i < nodeList.length; i++) {
      const element = nodeList[i];
      const answer = this.question.answers[i];
      if (answer.isRight) {
        element.classList.add('true-answer');
      }

    }






    // if (this._selectedAnswer) {
    //   if (this._selectedAnswer.isRight) {
    //     this._selected.classList.add('true-answer');
    //   } else {
    //     this._selected.classList.add('false-answer');
    //   }
    // };

  }

  ngOnInit() {

  }

}






