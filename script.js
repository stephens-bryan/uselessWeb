/**
 * Created by bryanstephens on 2017-06-14.
 */

// SDK for Facebook share link (taken from : https://developers.facebook.com/docs/plugins/share-button)



//// three.js
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
    // var title = new THREE.Mesh(
    //     new THREE.TextGeometry( "Space, The Final Frontier", {
    //         size: 40,
    //         height: 10,
    //         curveSegments: 12,
    //         bevelThickness: 1,
    //         bevelSize: 1,
    //         bevelEnabled: false
    //     }),
    //     new THREE.MeshStandardMaterial({
    //         color: 0xFF6D00
    //     })
    // );
    // scene.add( title );



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
            if(spaceship.position.x <= -790){
                spaceship.position.x += 1;
            }
        }
        renderer.render( scene, camera );

    }

    spaceman();

    controls.addEventListener('change', function () {
        renderer.render(scene, camera)
    });
