var readLineSync = require("readline-sync");
var score = 0;

var username = readLineSync.question("What is your name ? ");
console.log("Welcome " + username + ", to the game- MARVEL QUIZ !! ");
console.log("<---------------------->");
console.log("Please write the answers with the first letter In CAPS only ...");
console.log();
//play fucntion
function levelOne(question,answer)
{
    var userAnswer = readLineSync.question(question);
    if(userAnswer === answer)
    {
       console.log("Right !");
       score++;
    }
    else
    {
       console.log("Wrong !");
       console.log("The Correct answer is : "+answer);
    }
    console.log("Current Score is : "+score);
    console.log("----------------------");

    if(score === 5)
    {
        console.log("Congratulations!! you have reached Level 2 and the final Level of this quiz...");
        //levelTwo(question,answer);
    }
}

function levelTwo(question,answer)
{
    var userAnswer = readLineSync.question(question);
    if(userAnswer === answer)
    {
       console.log("Right !");
       score++;
    }
    else
    {
       console.log("Wrong !");
       console.log("The Correct answer is : "+answer);
    }
    console.log("Current Score is : "+score);
    console.log("----------------------");
}



//var questions = [questionOne,questionTwo];
var questions = [{
   question : "What is Captain America's Shield made of ? ",
   answer : "Vibranium"
}, {
  question : "What country are Scarlet Witch and Quicksilver from? ",
  answer : "Sokovia"
}, {
  question : "What's the name of the helpful AI Tony Stark invented to replace J.A.R.V.I.S.? ",
  answer : "F.R.I.D.A.Y."
}, {
  question : "Which S.H.E.I.L.D. building is located in Washington, D.C.?  ",
  answer : "Triskelion"
}, {
  question : "What is Tony Stark's dad's name? ",
  answer : "Howard"
}, {
  question : "What species did Loki discover he is?  ",
  answer : "Frost Giant"
}, {
  question : "Who is Hawkeye married to? ",
  answer : "Laura"
}, {
  question : "What kind of doctor is Dr. Strange? ",
  answer : "Neurosurgeon"
}];

//loop
for(var i=0;i<questions.length;i++)
{
    var currentQuestion = questions[i];

    if(score<=5){
        levelOne(currentQuestion.question,currentQuestion.answer);
    }
    else{
      levelTwo(currentQuestion.question,currentQuestion.answer);
    }
}

console.log("Your final score is : "+ score);
if(score === questions.length)
{
    console.log("Congratulations, You answered all the questions right !! ");
}
else{
  console.log("Let's rewatch all the Marvel Movies so that you get all of them correct next time :D ");
  console.log("AVENGERS ASSEMBLE !! ");
}