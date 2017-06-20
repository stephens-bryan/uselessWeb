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
    var loader = new THREE.FontLoader();

    loader.load('/examples/fonts/droid/optimer_bold.typeface.json', function ( font ) {
        var geometry = new THREE.TextGeometry( 'Space, The Final Frontier', {
            font: font,
            size: 17,
            height, 1,
            curveSegments: 20,
            bevelEnabled: false,
            bevelSize: 8,
            bevelSegments: 5
        });
    });


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
    planet8.position.y += 7;
    planet8.position.z += -10;
    scene.add(planet8);


    var spaceship = new THREE.Mesh(
        new THREE.CylinderGeometry( 1, 13.6, 1, 64 ),
        new THREE.MeshBasicMaterial({
            color: 0xBFBCBC,
            shading: THREE.FlatShading
        })
    );
    spaceship.position.x += 550;
    spaceship.position.z += -75;
    scene.add( spaceship );

// TODO: add more planets
// TODO: configure y positioning on planets
// TODO: add satellite

//add stars using for loop
    var particle, array = [];
    for (var i = -1000; i < 1000; i += 20) {
        particle = new THREE.Mesh(
            new THREE.OctahedronGeometry(1.5, 1),
            new THREE.MeshStandardMaterial({
                color: 0xffffff,
                shading: THREE.FlatShading
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

    function spaceman() {
        requestAnimationFrame( spaceman );
        spaceship.position.x += -1;
        console.log(spaceship.position);
        if (spaceship.position.x === -790){
            spaceship.position.x += 1;

        }
        renderer.render( scene, camera );

    }

    spaceman();

    controls.addEventListener('change', function () {
        renderer.render(scene, camera)
    });
