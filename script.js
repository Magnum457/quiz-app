const quizData = [
  {
    question: 'How old is Florin?',
    a: '10',
    b: '17',
    c: '26',
    d: '110',
    correct: 'c'
  }, {
    question: 'What is the most used programming language in 2019?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'a'
  }, {
    question: 'Who is he President of US?',
    a: 'Florin Pop',
    b: 'Donald Trump',
    c: 'Joe Biden',
    d: 'Ivan Saldano',
    correct: 'c'
  }, {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Cascading Style Sheet',
    c: 'Json Object Notation',
    d: 'Application Programming Interface',
    correct: 'a'
  }, {
    question: 'What year was JavaScript launched?',
    a: '2020',
    b: '2019',
    c: '2018',
    d: 'none of the above',
    correct: 'd'
  }
];

const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const answerEls = document.querySelectorAll('.answer');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerHTML = currentQuizData.question;

  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach(answerEl => {
    if(answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener('click', () => {
  // check to see the answer
  const answer = getSelected();

  if(answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if(currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
        <button onclick="location.reload()" >Reload</button>
      `
    }
  }
});