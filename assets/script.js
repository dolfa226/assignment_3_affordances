var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 01, 1000);
camera.position.set(10,2.5,10);

camera.position.z = 20;
 
// controls for the camera
var controls = new THREE.OrbitControls(camera);

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


//local storage
// console.log("local storage demo file");
	
// var saveUserInfo = function(){
// 	if (!storageAvailable('localStorage')){ return; } // if we can use localStorage, don't return

	
// 	// localStorage.removeItem('color');


// 	// on first site load
// 	if(localStorage.getItem('color')){ // using a string
// 		// if color has been saved: 
// 		var color = localStorage.getItem('color');

// 		// apply color to element: 
// 		document.getElementById("myDiv").style.color = color;

// 	}

// }


// saveUserInfo(); // run saving user info


//cylinder1 - mesh
var geometry = new THREE.CylinderGeometry( 5, 5, 5, 50 );

var texture = new THREE.TextureLoader().load( 'assets/imgs/ticker.png' );
//texture
var material = new THREE.MeshBasicMaterial( { map: texture } 
	);

var cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );






function render() {
	requestAnimationFrame(render);
    // cylinder.rotation.x += 0.01;
  	cylinder.rotation.y += 0.0001;
	renderer.render(scene, camera);
}
render();




