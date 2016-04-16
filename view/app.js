var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();


var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// Geometry/ Material
var cube = new THREE.Mesh( geometry, material );

//Pass in as many items as possible
scene.add(cube);


//Zoom in
camera.position.z = 10;

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

function render() {
	requestAnimationFrame( render );
	renderer.render( scene, camera );
}
render();
