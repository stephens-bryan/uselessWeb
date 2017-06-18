/**
 * Created by bryanstephens on 2017-06-14.
 */

// // need 3 things for three.js
// window.onload = init;
//
// function init(){
// // scene
// var scene = new THREE.Scene();
// // camera
// /*
// * Parameters:
// * 1.) field of view
// * 2.) aspect ratio (almost always want to use the width of the element divided by the height
// * 3.) near clipping plane
// * 4.) far clipping plane
// * * clipping plane ==> objects further away from the the camera than far or closer than near won't be rendered
// * */
// var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// // renderer
// var renderer = new THREE.WebGLRenderer();
//
// renderer.setSize( window.innerWidth, window.innerHeight );
//
// document.body.appendChild( renderer.domElement );
//
// // create a cube
// var gemetry = new THREE.BoxGeometry(1,1,1);
//
// var material = new THREE.MeshBasicMaterial({
//     color: 0x00ff00
// });
//
// var cube = new THREE.MeshBasicMaterial( gemetry, material );
//
// scene.add( cube );
//
// camera.position.z = 5;
//
// // rendering the scene
//
// var render = function (){
//     requestAnimationFrame( render );
//
//     //cube.rotation.x += 0.1;
//     //cube.rotation.y += 0.1;
//
//     renderer.render ( scene, camera );
// };
//
// render();
// }

// COPIED FROM INDEX.HTML
// var scene = new THREE.Scene();
//
// var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//
// var renderer = new THREE.WebGLRenderer();
//
// renderer.setSize( window.innerWidth, window.innerHeight );
//
// document.body.appendChild( renderer.domElement );
//
// var geometry = new THREE.BoxGeometry( 1,1,1 );
// var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// var cube = new THREE.Mesh( geometry, material );
//
// scene.add( cube );
//
// camera.position.z = 5;
//
// function render() {
//     requestAnimationFrame( render );
//
//     cube.rotation.x += 0.1;
//     cube.rotation.y += 0.1;
//
//     renderer.render( scene, camera );
// }
// render();


var scene = new THREE.Scene();

// var camera = new THREE.PerspectiveCamera(
//     // Field of View
//     75,
//     // Aspect Ratio
//     window.innerWidth / window.innerHeight,
//     // Near clipping pane
//     0.1,
//     // Far clipping pane
//     1000
// );
//
// // reposition the camera
// camera.position.set(5,5,0);
//
// // point camera at a given coordinate
// camera.lookAt(new THREE.Vector3(0,0,0));
//
// // a mesh is created from the geometry and material, then added to the scene
// var plane = new THREE.Mesh(
//     new THREE.PlaneGeometry( 5, 5, 5, 5 ),
//     new THREE.MeshBasicMaterial( { color: 0x222222, wireframe: true } )
// );
// plane.rotateX(Math.PI/2);
// scene.add( plane );
//
// var renderer = new THREE.WebGLRenderer({ antialias: true});
//
// var controls = new THREE.OrbitControls( camera, renderer.domElement );
// controls.addEventListener( 'change', function() { renderer.render(scene, camera ) });
//
// // size should be the same as the window
// renderer.setSize( window.innerWidth, window.innerHeight );
//
// // set a new white clear colour (default is black)
// renderer.setClearColor( 0xeeeeee );
//
// // append to the document
// document.body.appendChild( renderer.domElement );
//
// // render the scene/camera combination
// renderer.render( scene, camera );

//create/position camera
var camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
//reposition camera
camera.position.set( 10,10,75 );
//point camera at given co-ordinates
camera.lookAt( new THREE.Vector3( 0,15,0 ) );
//create renderer
var renderer = new THREE.WebGLRenderer( {antialias: true } );
//size should be same as window
renderer.setSize( window.innerWidth, window.innerHeight );
//set a near white clear color
renderer.setClearColor( 0xfff6e6 );
//enable shadow mapping
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
//append to the document
document.body.appendChild( renderer.domElement );
//add ambient lights
var ambientLight = new THREE.AmbientLight( 0xffffff, 0.2 );
scene.add( ambientLight );
//add a point that will cast shadows
var pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 25, 50, 25 );
pointLight.castShadow = true;
pointLight.shadow.mapSize.width = 1024;
pointLight.shadow.mapSize.height = 1024;
scene.add( pointLight );
//basic material that shows the geometry wireframe
var shadowMaterial = new THREE.ShadowMaterial( { color: 0xeeeeee } );
shadowMaterial.opacity = 0.3;
var groundMesh = new THREE.Mesh(
    new THREE.BoxGeometry( 100, 0.1, 100 ),
    shadowMaterial
);
groundMesh.receiveShadow = true;
scene.add( groundMesh );
//simple geometric shape with flat material
var shapeOne = new THREE.Mesh(
    new THREE.OctahedronGeometry( 10, 5 ),
    new THREE.MeshStandardMaterial( {
        color: 0xff0051,
        shading: THREE.FlatShading,
        metalness: 0,
        roughness: 0.8,
        morphTargets: true
        //envMaps: reflection
        //wireframe: true
        //transparent: true
    } )
);
shapeOne.position.y += 10;
shapeOne.rotateZ(Math.PI/3);
shapeOne.castShadow = true;
scene.add( shapeOne );


// add second shape
var shapeTwo = new THREE.Mesh(
    new THREE.OctahedronGeometry( 5,1 ),
    new THREE.MeshStandardMaterial( {
        color: 0x47689b,
        shading: THREE.FlatShading,
        metalness: 0,
        roughness: 0.8
    } )
);
shapeTwo.position.y += 5;
shapeTwo.position.x += 15;
shapeTwo.rotateZ(Math.PI/5);
shapeTwo.castShadow = true;
scene.add( shapeTwo );

var geoBox = new THREE.Mesh(
    new THREE.BoxGeometry( 1,10,20,1 ),
    new THREE.MeshStandardMaterial( {
        color: 0xCE0CE8,
        shading: THREE.FlatShading,
        metalness: 0,
        roughness: 1
    } )
);
geoBox.position.y += 6;
geoBox.position.x += 30;
//geoBox.rotateZ(Math.PI/50);
geoBox.rotateY(Math.PI/2);
geoBox.castShadow = true;
scene.add( geoBox );


var cube = new THREE.Mesh(
    new THREE.CubeGeometry( 5, 5, 5, 5 ),
    new THREE.MeshStandardMaterial( {
        color: 0xCE0CE8,
        side: THREE.BackSide
    } )
);
cube.position.z += 20;
cube.position.y += 6;
cube.castShadow = true;
scene.add( cube );

// var element = document.createElement( 'img' );
// element.src = 'BryanStephens_Resume.pdf';
// var cssObject = new THREE.CSS3DObject( element );
// scene.add( cssObject );
//

var ball = new THREE.Mesh(
    new THREE.SphereGeometry( 7, 9, 4 ),
    new THREE.MeshLambertMaterial( {
        color: 0xCE0CE8,
        side: THREE.BackSide
    } )
);
// ball.position.z += 20;
// ball.position.x += 30;
// ball.position.y += 5;
ball.position.set( 20, 6, 20 );
ball.castShadow = true;
scene.add( ball );


//render the scene/camera
renderer.render( scene, camera );
//add orbit control
var controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.target = new THREE.Vector3( 0,15,0 );
controls.maxPolarAngle = Math.PI / 2;
controls.addEventListener('change', function() { renderer.render( scene, camera ) } );
