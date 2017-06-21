var width = window.innerWidth, height = window.innerHeight;

var scene = new THREE.Scene();

// Create and position a camera
var camera = new THREE.PerspectiveCamera(
    60,                                   // Field of view
    width/height, // Aspect ratio
    0.1,                                  // Near clipping pane
    1000                                  // Far clipping pane
);

// Reposition the camera
camera.position.set(0,5,25);

// Point the camera at a given coordinate
camera.lookAt(new THREE.Vector3(0,5,0));

// Create a renderer
var renderer = new THREE.WebGLRenderer();

// Size should be the same as the window
renderer.setSize( width, height );

// Set a near white clear color (default is black)
renderer.setClearColor( 0xfff6e6 );

// Append to the document
document.body.appendChild( renderer.domElement );

//enable shadow mapping
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

//add ambient lights
var ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);

//add a point that will cast shadows
var pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(25, 50, 25);
pointLight.castShadow = true;
pointLight.shadow.mapSize.width = 1024;
pointLight.shadow.mapSize.height = 1024;
scene.add(pointLight);

// add a helper grid
var grid = new THREE.GridHelper( 10,10 );
scene.add( grid );


// var cube = new THREE.CubeGeometry( 5,5,1 );
// var cubeMaterial = new THREE.MeshBasicMaterial( {
//     color: 0x000000,
//     wireframe: true
// } );
// var cubeRender = new THREE.Mesh( cube, cubeMaterial );
// cubeRender.position.y += 5;
// cubeRender.position.x += 0;
// cubeRender.position.z += 1;
// scene.add( cubeRender );


// var cube = new THREE.Mesh(
//     new THREE.CubeGeometry( 5,5,1 ),
//     new THREE.MeshBasicMaterial({
//         color: 0x000000,
//         wireframe: true
//     })
// );
// cube.position.set( 0,5,1 );
// scene.add( cube );

// let cone = new THREE.Mesh(
//     new THREE.ConeGeometry( 5,20,32 ),
//     new THREE.MeshStandardMaterial({
//         color: 0x2194ce,
//         shading: THREE.SmoothShading,
//         roughness: 0,
//         metalness: 0.35
//     })
// );
// cone.position.set( 5,25, 1);
// scene.add ( cone );

// var ring = new THREE.RingGeometry( 1, 5, 32 );
// var material = new THREE.MeshBasicMaterial( { color: 0x111111, side: THREE.DoubleSide } );
// var mesh = new THREE.Mesh( ring, material );
// scene.add( mesh );


// var geometry = new THREE.TorusKnotBufferGeometry( 10, 3, 100, 16 );
// var material = new THREE.MeshStandardMaterial( {
//     color: 0xB22E22,
//     shading: THREE.SmoothShading,
//     roughness: 0,
//     metalness: 0.4
// } );
// var torusKnot = new THREE.Mesh( geometry, material );
// torusKnot.position.set( -25,25,25 );
// scene.add( torusKnot );


// Render the scene/camera combo
renderer.render(scene, camera);

// Add an orbit control which allows us to move around the scene. See the three.js example for more details
// var controls = new THREE.OrbitControls( camera, renderer.domElement );
// controls.target = new THREE.Vector3(0,0,0);
// controls.maxPolarAngle = Math.PI / 2;
// controls.addEventListener( 'change', function() { renderer.render(scene, camera); } ); // add this only if there is no animation loop (requestAnimationFrame)