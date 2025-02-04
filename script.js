const questions = [
	 
	{
        
		question: "What is the capital of France?",
	
        answer:  [
			 	{text: "Berlin", correct: false},
			 	{text: "Madrid", correct: false},
			 	{text: "Paris", correct: true},			 
			 	{text: "Rome", correct: false},
			 ]	
	
   },

	 {
      
		question: "Which planet is known as the Red Planet?",
		 answer:  [
			 	{text: "Earth", correct: false},
			 	{text: "Mars", correct: false},
			 	{text: "Jupiter", correct: true},			 
			 	{text: "Satrun", correct: false},
			 ]	
	},
    
	 {
      
		question: "What is the largest mammal in the world?",
		answer:  [
			 	{text: "Elephant", correct: false},
			 	{text: "Blue Whale", correct: true},
			 	{text: "Giraffe", correct: false},			 
			 	{text: "Polar Bear", correct: false},
			 ]		
        
	 },


	 {
      
		question: "Who wrote 'Romeo and Juliet'?",

		answer:  [
			 	{text: "William Shakespeare", correct: true},
			 	{text: "Mark Twain", correct: false},
			 	{text: "Charles Dickens", correct: false},			 
			 	{text: "Jane Austen", correct: false},
			]
	},
	
           
	 {
      
		question: "What is the chemical symbol for water?",
		answer:  [
			 	{text: "H20", correct: true},
			 	{text: "O2", correct: false},
			 	{text: "Co2", correct: false},			 
			 	{text: "NaCl Bear", correct: false},
			 ]	
        
	
       },
    
	 {
    
		question: "Which country is known as the Land of the Rising Sun?",

    	        answer: [
      
				{ text: "China", correct: false },

      			     	{ text: "Japan", correct: true },

				{ text: "Thailand", correct: false },
      
				{ text: "India", correct: false }
,    
		      ]

    
	},
	{
    
		question: "What is the smallest prime number?",
    
	     	answer: [

				{ text: "0", correct: false },
			
        { text: "1", correct: false },
      
				{ text: "2", correct: true },
      
				{ text: "3", correct: false },
    
			]
    
	},
 

	{
    
		question: "Who painted the Mona Lisa?",
    
	     	answer: [
      
				{ text: "Vincent van Gogh", correct: false },
      
				{ text: "Leonardo da Vinci", correct: true },
      
				{ text: "Pablo Picasso", correct: false },
      
				{ text: "Claude Monet", correct: false }
,   
			 ]    
		
	},

  
	{
    
		question: "What is the square root of 64?",
    
	     	answer: [
      
				{ text: "6", correct: false },
      
				{ text: "7", correct: false },
      
				{ text: "8", correct: true },
      
				{ text: "9", correct: false }
,    
			]
	 },
  
	{
    
		question: "Which is the longest river in the world?",
    
	     	answer: [
      
				{ text: "Amazon River", correct: false },
      
				{ text: "Nile River", correct: true },
      
				{ text: "Yangtze River", correct: false },
      
				{ text: "Mississippi River", correct: false},
    
			]  
	},
]

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0 ;
let total = questions.length;

console.log(score,"111")
function startQuizz(){
	currentQuestionIndex = 0;
	score = 0;
	nextButton.innerHTML = "Next";
	showQuestion();
}

function showQuestion(){
	resetState();
	let currentQuestion = questions[currentQuestionIndex];
	let questionNo = currentQuestionIndex + 1;
	questionElement.innerHTML = questionNo + ". " + currentQuestion.
	question;
	
	currentQuestion.answer.forEach(answer => {
		const button = document.createElement("button");
		button.innerHTML = answer.text;
		button.classList.add("btn");
		answerButton.appendChild(button);
		if(answer.correct){
			button.dataset.correct = answer.correct;		
}
		button.addEventListener("click", selectAnswer)
	});
}


function resetState(){
	nextButton.style.display = "none";
	while(answerButton.firstChild){
	answerButton.removeChild(answerButton.firstChild);
		
		}
	};

function selectAnswer(e){
	const selectedBtn = e.target;
	const iscorrect = selectedBtn.dataset.correct === "true";
	if(iscorrect){
		selectedBtn.classList.add("correct");
		score++;
	}
	else{
		selectedBtn.classList.add("incorrect");
}

	Array.from(answerButton.children).forEach(button => {
		if(button.dataset.correct === "true"){
			button.classList.add("correct");
		}
		button.disabled = true;
	});
nextButton.style.display = "block";
}

function showScore(){
	resetState();
	questionElement.innerHTML = 'Your Scored ' + score + ' out of' + total + ' !';
	nextButton.innerHTML = "Play Again";
	nextButton.style.display = "block"
}


function handleNextButton(){
	currentQuestionIndex++;
	if(currentQuestionIndex < questions.length){
		showQuestion();
}
	else{
		showScore();
		
}

}

nextButton.addEventListener("click", ()=> {
	if(currentQuestionIndex < questions.length){
		handleNextButton();
}
	else{
		startQuizz();
}
})
console.log(score,"111")
startQuizz();




