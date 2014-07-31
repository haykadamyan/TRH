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
    
   
    


    trash.src = 'img/trash.png';
  
    var mousd = false;

    $('#canvas').mousedown(function(){
    	mousd = true;
    	console.log(mousd);
    });


    $('#canvas').mouseup(function(){
    	mousd = false;
    	console.log(mousd);
    });

    $('#canvas').mousemove(function(event){

    	var x=event.clientX;
		var y=event.clientY;

		if(mousd){
			ctx.clearRect(x,y,10,10);
		}

    });

    


};