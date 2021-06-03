class Form {
  constructor() {
   paperImg = loadImage("paper.png");
   cwImage = loadAnimation("cursed witch/cw0.png", "cursed witch/cw1.png", "cursed witch/cw2.png", "cursed witch/cw3.png", "cursed witch/cw4.png");
   roadImg = loadImage("road.png");
   chest = loadImage("chest.png");
  }

  display(){
   
    var title = createElement('h2')
    title.html("The Shadows Of The Enchanted Jungle");
    title.position(550, 0);
   
    
    var input = createInput("Name");
    var button = createButton('Play');
    
    input.position(675, 320);
    button.position(740, 400);
    next = createButton('Next');
    play = createButton('Play Game');

    /*input.mousePressed(function(){
      input=createInput(" ");
    });*/
   
  
    button.mousePressed(function(){
      input.hide();
      button.hide();
      title.hide();
      background (39,154,39);

      //background(paperImg);
      imageMode (CENTER);
      image (paperImg, 757.5, 357.5,1515, 715);
      var name = input.value();
      
      playerCount+=1;
      player.update(name)
      player.updateCount(playerCount);
      var greeting = createElement('h3');
      //greeting.html("Hello " + name )
      greeting.position(260, 320)
      animation(cwImage, 250, 350);
      
      
      next.position(1250,600);
      textSize(25);
      fill ("purple");
      text ("Now that you are here, I am the only one that can help you escape", 500, 200);
      text("this enchanted jungle but I must say it will come at a price.", 500, 250);
      text("You are my slave and will be if you don't get me the enchanted", 500, 300);
      text("jewel that helps lift my curse.", 500, 350);
      text("But this task isn't easy, you will face a lot of difficulties, complete it to be free",500,400);
      text("or be my slave forever.", 500, 450);
      text("-The Cursed Witch", 1000, 525);

    
      
     
      
    });

   

    next.mousePressed(function(){
      //background(paperImg);
      imageMode (CENTER);
      image (paperImg, 757.5, 357.5,1515, 715);
      image (chest, 1150, 150);
      fill ("purple");
      animation(cwImage, 250, 350);
      next.hide();

      play.position (1250,600);
      text("Things to remember:-",500, 200)
     text("- Using the arrow keys will help you move.", 500, 250)
     text("- Collecting gems will increase your speed.", 500, 300)
     text("- Getting hit by obstacles will decrease your speed.", 500, 350);
     text("- You have 3 lives, getting hit by a monster will make you lose a life.", 500, 400)
     text("- After all the lives are exhausted, it's game over for you.",500, 450)
     text("- To win reach the treasure box which contains the jewel first.", 500, 500);
     fill(0);
     text("Press enter to proceed", 500, 600);
    })
  

   play.mousePressed(()=>{
     play.hide();
    if(playerCount===4){
      game.update(1); 
    }
      
     // gs = "play";
 
     
     
   })
   drawSprites();
}
}
