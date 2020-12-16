    //TODO:create variables for questions
    // Q"how many legs does a cat have?"
    // Answers(1,2,4,3)\
    
    //

    // Q"how many legs does a spider have?"
    // answers(6,4,8,10)

    // Q"how many legs does a human have?""
    // answers(1,5,2,6)

    // Q"how many legs does a fly have?
    // A"2,4,8,6"

    var questionOne = ("how many legs does a cat have?")
    var answersCat = ["one" , "two", "four" , "three"]

    var questionTwo = ("how many legs does a fly have?")
    var answersFly = ["one" , "three" , "six" , "five"]

    var question = document.querySelector("#questionHolder")
    var firstAns = document.querySelector(".listOne")
    var secondAns = document.querySelector(".listTwo")
    var thirdAns = document.querySelector(".listThree")
    var fourthAns = document.querySelector(".listFour")
    //var LiEl = document.querySelector(".listOne" , ".listTwo" ,".listThree" , ".listFour")
    //var yesno = document.querySelector("#yn")


    var buttonGone = document.querySelector("#startButton")
    var ptext = document.querySelector("#pStart")

     //TODO:Create a title page with a button that begin coding quiz and timer begins counting down.
    buttonGone.addEventListener("click", function(event) {
        
        event.preventDefault();
        
        buttonGone.style.display = 'none';
        ptext.style.display = 'none';

        question.append(questionOne);
        firstAns.append(answersCat[0]);
        secondAns.append(answersCat[1]);
        thirdAns.append(answersCat[2]);
        fourthAns.append(answersCat[3]);
    
        secondAns.addEventListener("click", function(event) {
            event.preventDefault();

        firstAns.value.trim();
        secondAns.trim();
        thirdAns.trim();              
        fourthAns.trim();

        question.append(questionTwo);
        firstAns.append(answersFly[0]);
        secondAns.append(answersFly[1]);
        thirdAns.append(answersFly[2]);
        fourthAns.append(answersFly[3]);
        



        
        


        console.log(firstAns);
        
    
   })
    
    
    
    
    
    })

    
        

  //Do code for showing the number of seconds here

    
   



    //TODO:Create the first form with elements to click for answers 
    //TODO:When element clicked move onto next question with a display of last answer being correct or wrong
    //TODO: When moved to next question the timer remains same counting down or subtracts 10 seconds and contiues.
    //TODO:After questions answered remaining scroe displayed on final page. 
    //TODO: User score can be saved with intials

    
    //TODO:Create a Form 
    
    
    
    
       //TODO:create countdown timer.
  //  var count=60;

  //  var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
   
  //  function timer()
  //  {
  //    count=count-1;
  //    if (count <= 0)
  //    {
  //       clearInterval(counter);
  //       //counter ended, do something here
  //       //return;
  //    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
