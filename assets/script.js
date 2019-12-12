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
var geometry1 = new THREE.CylinderGeometry(.5, .5, .5);
var geometry2 = new THREE.CylinderGeometry(5, 5, 5);
var geometry3 = new THREE.CylinderGeometry(10, 10, 10);

var texture = new THREE.TextureLoader().load( 'assets/imgs/ticker.svg' );
//texture
var materials = [
	
	new THREE.MeshBasicMaterial( { 
	map: texture,
	transparent: true,
	alphaTest: 0.5,
	side: THREE.DoubleSide,	
	}),

	new THREE.MeshPhongMaterial( { 
	map: texture,
	transparent: true,
	alphaTest: 0.5,
	opacity: 0,
	side: THREE.DoubleSide, 
	}), 

];


var cylinder1 = new THREE.Mesh( geometry1, materials );
scene.add( cylinder1 );
var cylinder2 = new THREE.Mesh( geometry2, materials );
scene.add( cylinder2 );
var cylinder3 = new THREE.Mesh( geometry3, materials );
scene.add( cylinder3 );


if(localStorage.getItem("rotation")){
	cylinder1.rotation.y = parseFloat(localStorage.getItem("rotation"));
}


if(localStorage.getItem("rotation")){
	cylinder2.rotation.y = parseFloat(localStorage.getItem("rotation"));
}



function render() {
	requestAnimationFrame(render);
	
	// cylinder.rotation.x += 0.01;
	  cylinder1.rotation.y += 0.03;
	  cylinder2.rotation.y += 0.01;
	  cylinder3.rotation.y += 0.01;
	//   console.log(camera.position.z)
	//   console.log(cylinder.rotation.y)

	localStorage.setItem('cameraX', "" + camera.position.x)
	localStorage.setItem('cameraY', "" + camera.position.y)
	localStorage.setItem('cameraZ', "" + camera.position.z)
	localStorage.setItem('rotation', "" + cylinder1.rotation.y)


	renderer.render(scene, camera);
}
render();

function render() {
	requestAnimationFrame(render);
	
	// cylinder.rotation.x += 0.01;
	  cylinder1.rotation.y += 0.03;
	  cylinder2.rotation.y += 0.01;
	  cylinder3.rotation.y += 0.001;
	//   console.log(camera.position.z)
	//   console.log(cylinder.rotation.y)

	localStorage.setItem('cameraX', "" + camera.position.x)
	localStorage.setItem('cameraY', "" + camera.position.y)
	localStorage.setItem('cameraZ', "" + camera.position.z)
	localStorage.setItem('rotation', "" + cylinder1.rotation.y)
	localStorage.setItem('rotation', "" + cylinder2.rotation.y)
	localStorage.setItem('rotation', "" + cylinder3.rotation.y)

	renderer.render(scene, camera);
}
render();


// localStorage.setItem("position", JSON.Stringify(thePosition));



