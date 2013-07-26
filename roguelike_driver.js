function draw_pixel(x, y, ctx, size, color, type) {
	ctx.fillStyle=color;
	ctx.lineStyle = color;
	if (type == 0) {
		ctx.rect(x * size, y * size, size, size);
		ctx.stroke();
	} else if (type == 1) {
		ctx.fillRect(x * size, y * size, size, size);
	} else {
		//alert("this is the test");
	}
}
function draw_grid(ctx, size, canv_width, canv_height, color) {
	var width = Math.floor(canv_width / size);
	var height = Math.floor(canv_height / size);
	ctx.fillStyle=color;
	var i, j;
	for (i = 0; i < width; i++) {
		for (j= 0; j < height; j++) {
			draw_pixel(i, j, ctx, size, color, 0);
		}
	}
}
function pick_cell_type(num) {
	if (num == 0) return "white";
	return "black";
}
var blocks = [
	[0,1,0,0,1,0,1,1,1,1],
	[0,1,0,0,1,0,1,0,1,1],
	[0,1,0,0,1,0,1,1,1,1],
	[0,1,0,0,1,0,1,1,0,1],
	[0,1,0,0,1,0,1,1,1,1],
	[0,1,0,0,1,0,1,1,1,0],
	[0,1,0,0,1,0,1,1,1,1],
	[0,1,0,1,1,0,1,1,1,1],
	[0,1,1,0,1,0,1,1,1,1],
	[1,1,0,0,1,0,1,1,1,1],
];
var canv = document.getElementById("myCanvas");
var CANV_WIDTH = canv.getAttribute("width");
var CANV_HEIGHT = canv.getAttribute("height");
var ctx = canv.getContext("2d");
var PIX_WIDTH = 50;
function draw_blocks() {
	var i, j;
	for (i = 0; i < 10; i++) {
		for (j= 0; j < 10; j++) {
			var cell_type = pick_cell_type(blocks[i][j]);
			draw_pixel(j, i, ctx, PIX_WIDTH, cell_type, blocks[i][j]);
		}
	}
}
draw_blocks();
$canv = $('#myCanvas');
$canv.mousemove(function(e){
	var canv_x = e.offsetX;
	var canv_y = e.offsetY;
	var block = [(Math.floor(canv_x /PIX_WIDTH)), (Math.floor(canv_y / PIX_WIDTH))];
	var block_str = "<p>Block: " + block[0] + ", " + block[1] + "</p>";
	$("#coord_test").empty().append("<p>x: " + canv_x + "</p>" ).append
		("<p>y: " + canv_y + "</p>").append(block_str); ;
});
$canv.click(function(e) {
	var canv_x = e.offsetX;
	var canv_y = e.offsetY;
	var block = [(Math.floor(canv_x /PIX_WIDTH)), (Math.floor(canv_y / PIX_WIDTH))];
	blocks[block[1]][block[0]] = 1;
	draw_blocks();
});

