window.onload = function(){

	var game_canvas = new createjs.Stage("cursor");


	var bg_canvas = document.getElementById('bg_canvas');
    var bg_ctx = bg_canvas.getContext('2d');
    var imageObj = new Image();

    imageObj.onload = function() {
      bg_ctx.drawImage(imageObj, 0, 0);
    };
    
    imageObj.src = 'img/untrash.png';
  

   
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var trash = new Image();

    trash.onload = function() {
      ctx.drawImage(trash, 70, 187);
    };
    
   var unqer = new Image();

   unqer.onload = function(){
        ctx.drawImage(unqer, 115, 140);
   }
    
   var mazer = new Image();
   mazer.onload = function(){
    ctx.drawImage(mazer, 65, 30);
   }


    trash.src = 'img/trash.png';
    unqer.src = 'img/unqer.png';
    mazer.src = 'img/mazer.png';


    var mousd = false;

    $('#canvas').mousedown(function(){
    	mousd = true;
    });


    $('#canvas').mouseup(function(){
    	mousd = false;
    });

    $('#canvas').mousemove(function(event){

    	var x=event.clientX - 10;
		var y=event.clientY - 10;

       
		if(mousd){
			ctx.clearRect(x,y,10,10);
		}

    });

    


};