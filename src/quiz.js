class Quiz {
    constructor(questions, timeLimit, timeRemaining) {
      this.questions = questions;
      this.timeLimit = timeLimit;
      this.timeRemaining = timeRemaining;
      this.correctAnswers = 0;
      this.currentQuestionIndex = 0;
}
//should return the item from the 'questions' array at the position of 'currentQuestionIndex'
    getQuestion(){
        return this.questions[this.currentQuestionIndex]; 
    }
    
    // 3. moveToNextQuestion()

    // 4. shuffleQuestions()

    // 5. checkAnswer(answer)

    // 6. hasEnded()
}