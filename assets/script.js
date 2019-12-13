var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 01, 1000);
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
var geometry1 = new THREE.CylinderGeometry(5, 5, 5, 15);
var geometry2 = new THREE.CylinderGeometry(10, 10, 10, 15);
var geometry3 = new THREE.CylinderGeometry(20, 20, 20, 15);
var geometry4 = new THREE.CylinderGeometry(30, 30, 30, 15);

var texture1 = new THREE.TextureLoader().load( 'assets/imgs/seconds.svg' );
// texture4.anisotropy = renderer.getMaxAnisotropy();
var texture2 = new THREE.TextureLoader().load( 'assets/imgs/minutes.svg' );
var texture3 = new THREE.TextureLoader().load( 'assets/imgs/hours.svg' );
var texture4 = new THREE.TextureLoader().load( 'assets/imgs/days.svg' );

var materials1 = [

	new THREE.MeshBasicMaterial( { 
	map: texture1,
	transparent: true,
	alphaTest: 0.5,
	side: THREE.DoubleSide,	
	}),

	new THREE.MeshPhongMaterial( { 
	map: texture1,
	transparent: true,
	alphaTest: 0.5,
	opacity: 0,
	side: THREE.DoubleSide, 
	}), 

];

var materials2 = [

	new THREE.MeshBasicMaterial( { 
	map: texture2,
	transparent: true,
	alphaTest: 0.5,
	side: THREE.DoubleSide,	
	}),

	new THREE.MeshPhongMaterial( { 
	map: texture2,
	transparent: true,
	alphaTest: 0.5,
	opacity: 0,
	side: THREE.DoubleSide, 
	}), 

];

var materials3 = [

	new THREE.MeshBasicMaterial( { 
	map: texture3,
	transparent: true,
	alphaTest: 0.5,
	side: THREE.DoubleSide,	
	}),

	new THREE.MeshPhongMaterial( { 
	map: texture3,
	transparent: true,
	alphaTest: 0.5,
	opacity: 0,
	side: THREE.DoubleSide, 
	}), 

];


var materials4 = [

	new THREE.MeshBasicMaterial( { 
	map: texture4,
	transparent: true,
	alphaTest: 0.5,
	side: THREE.DoubleSide,	
	
	}),

	new THREE.MeshPhongMaterial( { 
	map: texture4,
	transparent: true,
	alphaTest: 0.5,
	opacity: 0,
	side: THREE.DoubleSide, 
	}), 

];

var cylinder1 = new THREE.Mesh( geometry1, materials1 );
scene.add( cylinder1 );
var cylinder2 = new THREE.Mesh( geometry2, materials2 );
scene.add( cylinder2 );
var cylinder3 = new THREE.Mesh( geometry3, materials3 );
scene.add( cylinder3 );
var cylinder4 = new THREE.Mesh( geometry4, materials4 );
scene.add( cylinder4 );



if(localStorage.getItem("rotation")){
	cylinder1.rotation.y = parseFloat(localStorage.getItem("rotation"));
}


if(localStorage.getItem("rotation")){
	cylinder2.rotation.y = parseFloat(localStorage.getItem("rotation"));
}

if(localStorage.getItem("rotation")){
	cylinder3.rotation.y = parseFloat(localStorage.getItem("rotation"));
}

if(localStorage.getItem("rotation")){
	cylinder4.rotation.y = parseFloat(localStorage.getItem("rotation"));
}



function render() {
	requestAnimationFrame(render);
	var seconds = 0.0167;
	var minutes = seconds/60;
	var hours = minutes/60;
	var days = hours/24;

	  cylinder1.rotation.y += seconds;
	  cylinder2.rotation.y += minutes;
	  cylinder3.rotation.y += hours;
	  cylinder4.rotation.y += days;
	//   console.log(camera.position.z)
	//   console.log(cylinder.rotation.y)

	// if(camera.position.z > 1.2 && camera.position.x> 1.3) {
	// 	document.getElementById("numbers").style.display = "block";
	// } else if (camera.position.z <= 1.2 && camera.position.x <= 1.3){
	// 	document.getElementById("numbers").style.display = "none";
	// }

	// if(camera.position.z > 1.4 && camera.position.x> 1.5) {
	// 	document.getElementById("seconds").style.display = "block";
	// } else if (camera.position.z <= 1.4 && camera.position.x <= 1.5){
	// 	document.getElementById("seconds").style.display = "none";
	// }

	// if(camera.position.z > 1.7 && camera.position.x> 1.8) {
	// 	document.getElementById("minutes").style.display = "block";
	// } else if (camera.position.z <= 1.7 && camera.position.x <= 1.8){
	// 	document.getElementById("minutes").style.display = "none";
	// }

	localStorage.setItem('cameraX', "" + camera.position.x)
	localStorage.setItem('cameraY', "" + camera.position.y)
	localStorage.setItem('cameraZ', "" + camera.position.z)
	localStorage.setItem('rotation', "" + cylinder1.rotation.y)
	localStorage.setItem('rotation', "" + cylinder2.rotation.y)
	localStorage.setItem('rotation', "" + cylinder3.rotation.y)
	localStorage.setItem('rotation', "" + cylinder4.rotation.y)

	renderer.render(scene, camera);
	localStorage.clear();
}
render();

$('.container').hide();
$('.rec').on('click',
    function()
    {
        $('.container').toggle()
    }
);


