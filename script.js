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

    var scene = new THREE.Scene();

//create/position camera
    var camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

//reposition camera
    camera.position.set(100, 150, 250);

//point camera at given co-ordinates
    camera.lookAt(new THREE.Vector3(0, 15, 0));

//create renderer
    var renderer = new THREE.WebGLRenderer({antialias: true});

//size should be same as window
    renderer.setSize(window.innerWidth, window.innerHeight);

//set a near black clear color
    renderer.setClearColor(0x000000);

//enable shadow mapping
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;

//append to the document
    document.body.appendChild(renderer.domElement);

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

    //// add a 3-D title
    // var title = document.createElement('canvas');
    // var context = title.getContext('2d');
    // context.font = 'Bold 40px Arial';
    // context.fillStyle = "rgba(255,0,0,0)";
    // context.fillText('Space, the Final Frontier', 0, 50);
    //
    // var texture = new THREE.Texture(context);
    // texture.needsUpdate = true;
    // console.log(texture);
    //
    // var titleMaterial = new THREE.MeshBasicMaterial({map: texture, side: THREE.DoubleSide});
    // titleMaterial.transparent = true;
    // console.log(titleMaterial);
    // var titleMesh = new THREE.Mesh(
    //     new THREE.PlaneGeometry(title.width, title.height),
    //     titleMaterial
    // );
    // titleMesh.position.y += 250;
    // scene.add(titleMesh);


////simple geometric shape with flat material

// sun at epicenter
    var sun = new THREE.Mesh(
        new THREE.OctahedronGeometry(35, 5),
        new THREE.MeshStandardMaterial({
            color: 0xFF6D00,
            metalness: 0,
            roughness: 0.3
        })
    );
//sun.position.y += 10;
    scene.add(sun);

    var planet1 = new THREE.Mesh(
        new THREE.OctahedronGeometry(8, 5),
        new THREE.MeshStandardMaterial({
            color: 0x74707F,
            shading: THREE.FlatShading,
            metalness: 0,
            roughness: 0.3
        })
    );
    planet1.position.x += 75;
    planet1.position.z += 5;
    scene.add(planet1);


    var planet2 = new THREE.Mesh(
        new THREE.OctahedronGeometry(5, 5),
        new THREE.MeshStandardMaterial({
            color: 0x6780FF,
            shading: THREE.FlatShading,
            metalness: 0,
            roughness: 0.3
        })
    );
    planet2.position.x += 110;
    planet2.position.z += 110;
    scene.add(planet2);

    var planet3 = new THREE.Mesh(
        new THREE.OctahedronGeometry(10, 5),
        new THREE.MeshStandardMaterial({
            color: 0x20FF9C,
            shading: THREE.FlatShading,
            metalness: 0,
            roughness: 0.3
        })
    );
    planet3.position.x += 250;
    scene.add(planet3);


    var planet4 = new THREE.Mesh(
        new THREE.OctahedronGeometry(15, 5),
        new THREE.MeshStandardMaterial({
            color: 0xFF54F4,
            shading: THREE.FlatShading,
            metalness: 0,
            roughness: 0.3
        })
    );
    planet4.position.x += 150;
    planet4.position.z += -150;
    scene.add(planet4);

    var planet5 = new THREE.Mesh(
        new THREE.OctahedronGeometry(15, 5),
        new THREE.MeshStandardMaterial({
            color: 0xE8B867,
            shading: THREE.FlatShading,
            metalness: 0,
            roughness: 0.3
        })
    );
// planet4.position.x += 150;
    planet5.position.z += 150;
    scene.add(planet5);


    var planet6 = new THREE.Mesh(
        new THREE.OctahedronGeometry(9, 5),
        new THREE.MeshStandardMaterial({
            color: 0x41FFBF,
            shading: THREE.FlatShading,
            metalness: 0,
            roughness: 0.3
        })
    );
    planet6.position.x += -40;
    planet6.position.z += -175;
    scene.add(planet6);

    var planet7 = new THREE.Mesh(
        new THREE.OctahedronGeometry(3, 5),
        new THREE.MeshStandardMaterial({
            color: 0xFFFAF8,
            shading: THREE.FlatShading,
            metalness: 0,
            roughness: 0.3
        })
    );
    planet7.position.x += -140;
    planet7.position.z += -55;
    scene.add(planet7);

    var planet8 = new THREE.Mesh(
        new THREE.OctahedronGeometry(17, 5),
        new THREE.MeshStandardMaterial({
            color: 0xFF291F,
            shading: THREE.FlatShading,
            metalness: 0,
            roughness: 0.3
        })
    );
    planet8.position.x += -205;
    planet8.position.y += 3;
    planet8.position.z += -10;
    scene.add(planet8);

// TODO: add more planets
// TODO: configure y positioning on planets
// TODO: add satellite
// add second shape
// var shapeTwo = new THREE.Mesh(
//     new THREE.OctahedronGeometry( 5,1 ),
//     new THREE.MeshStandardMaterial( {
//         color: 0x47689b,
//         shading: THREE.FlatShading,
//         metalness: 0,
//         roughness: 0.8
//     } )
// );
// shapeTwo.position.y += 5;
// shapeTwo.position.x += 15;
// shapeTwo.rotateZ(Math.PI/5);
// shapeTwo.castShadow = true;
// scene.add( shapeTwo );

// var geoBox = new THREE.Mesh(
//     new THREE.BoxGeometry( 1,10,20,1 ),
//     new THREE.MeshStandardMaterial( {
//         color: 0xCE0CE8,
//         shading: THREE.FlatShading,
//         metalness: 0,
//         roughness: 1
//     } )
// );
// geoBox.position.y += 6;
// geoBox.position.x += 30;
// //geoBox.rotateZ(Math.PI/50);
// geoBox.rotateY(Math.PI/2);
// geoBox.castShadow = true;
// scene.add( geoBox );


// var cube = new THREE.Mesh(
//     new THREE.CubeGeometry( 5, 5, 5, 5 ),
//     new THREE.MeshStandardMaterial( {
//         color: 0xCE0CE8,
//         side: THREE.BackSide
//     } )
// );
// cube.position.z += 20;
// cube.position.y += 6;
// cube.castShadow = true;
// scene.add( cube );

// var element = document.createElement( 'img' );
// element.src = 'BryanStephens_Resume.pdf';
// var cssObject = new THREE.CSS3DObject( element );
// scene.add( cssObject );
//

// var ball = new THREE.Mesh(
//     new THREE.SphereGeometry( 7, 9, 4 ),
//     new THREE.MeshLambertMaterial( {
//         color: 0xCE0CE8,
//         side: THREE.BackSide
//     } )
// );
// // ball.position.z += 20;
// // ball.position.x += 30;
// // ball.position.y += 5;
// ball.position.set( 20, 6, 20 );
// ball.castShadow = true;
// scene.add( ball );

//add stars using for loop
    var particle, array = [];
    for (var i = -1000; i < 1000; i += 20) {
        particle = new THREE.Mesh(
            new THREE.OctahedronGeometry(1.5, 1),
            new THREE.MeshStandardMaterial({
                color: 0xffffff,
                shading: THREE.FlatShading,
                metalness: 0,
                roughness: 1
            })
        );

        particle.position.y = Math.random() * 1000 - 500;
        particle.position.x = Math.random() * 1000 - 500;

        particle.position.z = i;

        scene.add(particle);
        array.push(particle);
    }


//render the scene/camera
    renderer.render(scene, camera);
//add orbit control
    var controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.target = new THREE.Vector3(0, 15, 0);
    controls.maxPolarAngle = Math.PI / 2;
    controls.addEventListener('change', function () {
        renderer.render(scene, camera)
    });
