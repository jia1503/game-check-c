class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }
  
  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    
    }

   
    
  }

  play(){
    if(gameState === 1){
      imageMode(CENTER);
      image(roadImg, 757.5, 357.5, 1500, 1500);
      c1 = createSprite(20, 50, 30, 30);
        c1.addAnimation("a", c1Img);
    }
    
  
  }


}
