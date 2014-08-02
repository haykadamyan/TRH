
var bg_canvas, game_canvas, queue;
var game_ctx, game_canvas_ctx;
var untrash, trash, unqer, mazer, mousd;
var x, y;

window.addEventListener('load', init);

function init() {

	bg_canvas = new createjs.Stage("bg_canvas");
	game_canvas = new createjs.Stage("canvas");

	game_canvas_ctx = document.getElementById('canvas');
	game_ctx = game_canvas_ctx.getContext('2d');

	queue = new createjs.LoadQueue(false);
	queue.addEventListener("complete", handleComplete);

	queue.loadManifest([
		{id:"untrash", src:"img/untrash.png"}, 
		{id:"trash", src:"img/trash.png"},
		{id:"unqer", src:"img/unqer.png"},
		{id:"mazer", src:"img/mazer.png"}
	]);

	function handleComplete() {

		untrash = new createjs.Bitmap(queue.getResult("untrash"));
		trash = new createjs.Bitmap(queue.getResult("trash"));
		unqer = new createjs.Bitmap(queue.getResult("unqer"));
		mazer = new createjs.Bitmap(queue.getResult("mazer"));

		untrash.x = 0;
		untrash.y = 0;
		trash.x = 70;
		trash.y = 187;
		unqer.x = 115;
		unqer.y = 140;
		mazer.x = 65;
		mazer.y = 30;

		mousd = false;


		bg_canvas.addChild(untrash);
		game_canvas.addChild(trash);
		game_canvas.addChild(unqer);
		game_canvas.addChild(mazer);

		$('#canvas').mousedown(function(){
			mousd = true;
		});

		$('#canvas').mouseup(function(){
			mousd = false;
		});

		$('#canvas').mousemove(function(evt){
			x = evt.clientX - 10;
			y = evt.clientY - 10;

			if(mousd){
				game_ctx.clearRect(x, y, 15, 15);
			}
		});

		game_canvas.update();

	}

}

