let previousMouseX;
let previousMouseY;

let canvas;
let selectArea;

let selectMode = 0;
let editMode;
let for_rect = 0;
let for_circle = 0;

let selectButton;
let clearButton;
let editButton;

let currentShape = [];

let selectedPixels;
function setup()
{
	canvas = createCanvas(800, 800);
	background(200);
	noFill();
	stroke(0);

	selectMode = 0;
	editMode = 0;
	selectArea = {x: 0, y: 0, w: 100, h: 100};

	penButton = createButton('Pen');
	penButton.position(810, 0);
	
	backButton = createButton('Background');
	backButton.position(810, 60);
	
	widthSelect = createInput(10);
	widthSelect.position(850, 0);
	widthSelect.size(30);
	
	colorSelect = createSelect();
	colorSelect.position(810, 20);
	colorSelect.option('🔴');
	colorSelect.option('🔵');
	colorSelect.option('🟢');
	colorSelect.option('🟡');
	colorSelect.option('⚫');
	colorSelect.option('⚪');
	colorSelect.option('🟣');
	colorSelect.option('🟠');
	
	colorSelect.selected('🔴');
	
	shapeButton = createButton('Shape');
	shapeButton.position(810, 40);
	
	clearButton = createButton('Clear');
	clearButton.position(810, 790);
	
	penButton.mousePressed(() =>{
		selectMode = 0;
	});
	
	backButton.mousePressed(() =>{
		selectMode = 2;
	});

	clearButton.mousePressed(() =>{
		background(200);
	});
	
	shapeButton.mousePressed(() => {
		selectMode = 1;
		shapeSelect = createSelect();
		shapeSelect.position(870, 40);
		shapeSelect.option('⬛');
		shapeSelect.option('⚫️');
	});
	
	

}

function draw()
{
	let pickedColor = colorSelect.selected();
	let colour;
	switch (pickedColor)
	{
		case '🔴':
			colour = 'red';
			break;
		case '🔵':
			colour = 'blue';
			break;
		case '🟢':
			colour = 'green';
			break;
		case '🟡':
			colour = 'yellow';
			break;
		case '⚫':
			colour = 'black';
			break;
		case '⚪':
			colour = 'white';
			break;
		case '🟣':
			colour = 'purple';
			break;
		case '🟠':
			colour = 'orange';
			break;
	}

	if (mouseIsPressed){
		
		if (selectMode == 0){
			
			strokeWeight(widthSelect.value());
			stroke(colour);
			line(previousMouseX, previousMouseY, mouseX, mouseY);
			previousMouseX = mouseX;
			previousMouseY = mouseY;
		}else if (selectMode == 1){
			fill(colour);
			noStroke();
			switch(shapeSelect.selected())
			{
				case '⬛':
					rect(previousMouseX, previousMouseY, mouseX-previousMouseX, mouseY-previousMouseY);
					if (for_rect == 1){
						for_rect = 1;
					}else{
						previousMouseX = mouseX;
						previousMouseY = mouseY;
						for_rect = 1;
						}
					break;
				case '⚫️':
					ellipse(previousMouseX, previousMouseY, mouseX-previousMouseX, mouseY-previousMouseY);
					if (for_ellipse == 1){
						for_ellipse = 1;
					}else{
						previousMouseX = mouseX;
						previousMouseY = mouseY;
						for_ellipse = 1;
						}
					break;
			
			}	
			
		}else if (selectMode == 2){
			canvas.background(colour);
			selectMode = 0;
		}
	}
}
function mouseReleased(){
	previousMouseX = undefined;
	previousMouseY = undefined;
	for_rect = 0;
	for_ellipse = 0;
}
