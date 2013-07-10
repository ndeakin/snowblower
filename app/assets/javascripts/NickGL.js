// NICKGL - Graphics library by Nicholas Deakin
// NOTE: requires Three.js to be inclueded prior to this script
var NICKGL=NICKGL||{};

NICKGL.Init = function(view_angle, width, height){
		
	// set aspect based on inputs, and set near and far.
	var aspect = width / height,
		near = 0.01,
		far = 10000;
		
	// get the JQuery DOM element to attach to
	var $container = $('#container');
	
	// set the size of the container
	//$container.color('#000');
	$container.width( $(document).width() );
	$container.height( $(document).height() + 17 );
		
	//create the renderer, camera, and scene
	var renderer = new THREE.WebGLRenderer();
	var camera = new THREE.PerspectiveCamera(
		view_angle,
		aspect,
		near,
		far );
	var scene = new THREE.Scene();
	
	// set camera position
	camera.position.z = 300;
	
	// start the renderer
	renderer.setSize(width, height);
	
	// attach the DOM elemect
	$container.append(renderer.domElement);
	
	scene.add(camera);
	
	// return scene and renderer
	return {
		renderer: renderer,
		scene: scene,
		camera: camera
	}
	
};

NICKGL.Animate = function(update){
	requestAnimFrame = (function(update){
		return window.requestAnimationFrame			||
				window.webkitRequestAnimationFrame	||
				window.mozRequestAnimationFrame		||
				function( callback ){
					window.setTimeout(callback, 1000 / 60);
				};
	})();
	
	(function animLoop(){
		requestAnimFrame(animLoop);
		update();
	})();

};