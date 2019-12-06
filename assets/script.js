var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 01, 1000);
camera.position.set(10,2.5,10);

console.log(camera.position);

if(localStorage.getItem("cameraX") && localStorage.getItem("cameraY") && localStorage.getItem("cameraZ")){
	camera.position.x = parseFloat(localStorage.getItem("cameraX"));
	camera.position.y = parseFloat(localStorage.getItem("cameraY"));
	camera.position.z = parseFloat(localStorage.getItem("cameraZ"));
}else{
	camera.position.z = 15;
}


console.log(camera.position);
 
// controls for the camera
var controls = new THREE.OrbitControls(camera);

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


//cylinder1 - mesh
var geometry = new THREE.CylinderGeometry(3, 3, 3);

var texture = new THREE.TextureLoader().load( 'assets/imgs/ticker.svg' );
//texture
var material = new THREE.MeshBasicMaterial( { map: texture } 
	);

var cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );

if(localStorage.getItem("rotation")){
	cylinder.rotation.y = parseFloat(localStorage.getItem("rotation"));
}


/*
integer 0, 1

float 0.2345678

*/


function render() {
	requestAnimationFrame(render);
	

	
	
	// cylinder.rotation.x += 0.01;
	  cylinder.rotation.y += 0.001;
	//   console.log(camera.position.z)
	//   console.log(cylinder.rotation.y)

	localStorage.setItem('cameraX', "" + camera.position.x)
	localStorage.setItem('cameraY', "" + camera.position.y)
	localStorage.setItem('cameraZ', "" + camera.position.z)
	localStorage.setItem('rotation', "" + cylinder.rotation.y)

	renderer.render(scene, camera);
}
render();


// localStorage.setItem("position", JSON.Stringify(thePosition));



