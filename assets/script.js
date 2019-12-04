// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// var renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );

// document.body.appendChild( renderer.domElement );




// //cube
// var geometry = new THREE.CylinderGeometry( 1, 1, 1 );
// var material = new THREE.MeshBasicMaterial( { color: 0xF0F8FF } );
// var cube = new THREE.Mesh( geometry, material );
// scene.add( cube );



// camera.position.z = 5;

// //render loop
// function animate() {
// 	requestAnimationFrame( animate );

// 	//animate
// 	// cube.rotation.x += 0.01;
// 	cube.rotation.y += 0.01;

// 	renderer.render( scene, camera );
// }
// animate();



var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 01, 1000);
camera.position.set(10,2.5,10);
// camera.lookAt(0, 0, 0);
camera.position.z = 20;
 
// controls for the camera
var controls = new THREE.OrbitControls(camera);

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


//cylinder1 - mesh
var geometry = new THREE.CylinderGeometry( 5, 5, 5, 60 );
var material = new THREE.MeshBasicMaterial( { 
	color: 0xF0F8FF, 
	wireframe: true
} );

var cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );



//cylinder2 - mesh
var geometry = new THREE.CylinderGeometry( 20, 20, 20, 60 );
var material = new THREE.MeshBasicMaterial( { 
	color: 0xF0F8FF, 
	wireframe: true
} );

var cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );





//cylinder3 - mesh
var geometry = new THREE.CylinderGeometry( 100, 100, 100, 24 );
var material = new THREE.MeshBasicMaterial( { 
	color: 0xF0F8FF, 
	wireframe: true
} );

var cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );

//cylinder4 - mesh
var geometry = new THREE.CylinderGeometry( 300, 300, 300, 7 );
var material = new THREE.MeshBasicMaterial( { 
	color: 0xF0F8FF, 
	wireframe: true
} );

var cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );

function render() {
	requestAnimationFrame(render);
    // cylinder.rotation.x += 0.01;
  	cylinder.rotation.y += 0.00001;
	renderer.render(scene, camera);
}
render();





// //cylinder1 - wireframe 
// var geometry = new THREE.CylinderGeometry( 5, 5, 5, 60 );
// var wireframe = new THREE.WireframeGeometry( geometry );

// var line = new THREE.LineSegments( wireframe );
// line.material.depthTest = false;
// line.material.transparent = true;

// scene.add( line );