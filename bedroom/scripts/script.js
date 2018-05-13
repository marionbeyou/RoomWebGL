/*********** SCENE ***********/

const scene = new THREE.Scene()

/*********** CAMERA ***********/

let windowWidth = window.innerWidth
let windowHeight = window.innerHeight
const camera = new THREE.PerspectiveCamera(70, windowWidth / windowHeight)
camera.position.z = 3
camera.position.x = 1



/*********** OBJECTS ***********/

// Bed
const bed = new THREE.Mesh(
    new THREE.BoxGeometry(8, 6, 2),
    new THREE.MeshStandardMaterial({ color: 0x000000, metalness: 0.3, roughness: 0.8 })
)
bed.rotation.x = - Math.PI * 0.5
bed.position.x = 6
bed.position.y = - 0.5
bed.position.z = 1
bed.castShadow = true
scene.add(camera)

// Bedhead
const bedhead = new THREE.Mesh(
    new THREE.BoxGeometry(0.1, 6, 2),
    new THREE.MeshStandardMaterial({ color: 0x000000, metalness: 0.3, roughness: 0.8 })
)
bedhead.rotation.x = - Math.PI * 0.5
bedhead.position.x = 7.5
bedhead.position.y = 0.5
bedhead.position.z = 1
bedhead.castShadow = true
scene.add(bedhead)

// Matress 
const matress = new THREE.Mesh(
    new THREE.BoxGeometry(7, 5, 1.7),
    new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.3, roughness: 0.8 })
)
matress.rotation.x = - Math.PI * 0.5
matress.position.x = 6
matress.position.y = - 0.1
matress.position.z = 1
matress.castShadow = true
scene.add(matress)


// Pillows
const pillow1 = new THREE.Mesh(
    new THREE.BoxGeometry(1.5, 0.2, 1.7),
    new THREE.MeshStandardMaterial({ color: 0x51FF67, metalness: 0.3, roughness: 0.8})
)

pillow1.position.x = 7
pillow1.position.y = 0.8
pillow1.position.z = 2
pillow1.castShadow = true
scene.add(pillow1)

const pillow2 = new THREE.Mesh(
    new THREE.BoxGeometry(1.5, 0.2, 1.7),
    new THREE.MeshStandardMaterial({ color: 0x51FF67, metalness: 0.3, roughness: 0.8})
)

pillow2.position.x = 7
pillow2.position.y = 0.8
pillow2.position.z = 0
pillow2.castShadow = true
scene.add(pillow2)

// Bedside table
const bedsidetable = new THREE.Mesh(
    new THREE.BoxGeometry(1.2, 2, 0),
    new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.3, roughness: 0.8 })
)
bedsidetable.rotation.x = - Math.PI * 0.5
bedsidetable.position.x = 7
bedsidetable.position.y = 0
bedsidetable.position.z = 6
bedsidetable.castShadow = true
scene.add(bedsidetable)

const bedsidetablehandle = new THREE.Mesh(
    new THREE.BoxGeometry(1, 0.01, 1),
    new THREE.MeshStandardMaterial({ color: 0x000000, metalness: 0.3, roughness: 0.8 })
)
bedsidetablehandle.rotation.x = - Math.PI * 2
bedsidetablehandle.position.x = 6.8
bedsidetablehandle.position.y = 0.2
bedsidetablehandle.position.z = 6
bedsidetablehandle.castShadow = true
scene.add(bedsidetablehandle)

// Lamp
const lamp = new THREE.Mesh (
    new THREE.ConeGeometry(0.8, 1.5, 32),
    new THREE.MeshBasicMaterial({color: 0xf7ced8})
)
lamp.position.x = 7
lamp.position.y = 2
lamp.position.z = 6
lamp.castShadow = true
scene.add(lamp);

const lampfoot = new THREE.Mesh (
    new THREE.BoxGeometry(0.1, 1, 0.1),
    new THREE.MeshBasicMaterial({color: 0x703aBC})
)
lampfoot.position.x = 7
lampfoot.position.y = 1
lampfoot.position.z = 6
lampfoot.castShadow = true
scene.add(lampfoot);

// Cupboard
const cupboard = new THREE.Mesh(
    new THREE.BoxGeometry(8, 8, 2),
    new THREE.MeshStandardMaterial({ color: 0xcbb076, metalness: 0.3, roughness: 0.8})
)

cupboard.position.x = 4
cupboard.position.z = - 7
cupboard.castShadow = true
scene.add(cupboard)

const line = new THREE.Mesh(
    new THREE.BoxGeometry(-0.1, 8, 0.1),
    new THREE.MeshStandardMaterial({ color: 0x000000, metalness: 0.3, roughness: 0.8})
)

line.position.x = 3.5
line.position.z = - 6
line.castShadow = true
scene.add(line)

// Handles cupboard
const handle = new THREE.Mesh(
    new THREE.BoxGeometry(-0.1, 2, 0.1),
    new THREE.MeshStandardMaterial({ color: 0x000000, metalness: 0.3, roughness: 0.8})
)

handle.position.x = 0.2
handle.position.y = 1.5
handle.position.z = - 6
handle.castShadow = true
scene.add(handle)

const handle2 = new THREE.Mesh(
    new THREE.BoxGeometry(-0.1, 2, 0.1),
    new THREE.MeshStandardMaterial({ color: 0x000000, metalness: 0.3, roughness: 0.8})
)

handle2.position.x = 7.5
handle2.position.y = 1.5
handle2.position.z = - 6
handle2.castShadow = true
scene.add(handle2)

// Desk 
const desk = new THREE.Mesh(
    new THREE.BoxGeometry(3, 2, .2),
    new THREE.MeshStandardMaterial({ color: 0x000000, metalness: 0.3, roughness: 0.8 })
)
desk.rotation.x = - Math.PI * 0.5
desk.position.x = - 4
desk.position.y = 1
desk.position.z = - 7
desk.castShadow = true
scene.add(desk)

// Foot of desk

// blanc
var geometry = new THREE.CylinderGeometry( 0.1, 0.1, 1.8, 8 );
var material = new THREE.MeshBasicMaterial( {color: 0x000000} );
var cylinder = new THREE.Mesh( geometry, material );
cylinder.position.x = - 5.4
cylinder.position.y = 0
cylinder.position.z = - 7.6
scene.add( cylinder );

 // vert 
var geometry = new THREE.CylinderGeometry( 0.1, 0.1, 1.8, 8 );
var material = new THREE.MeshBasicMaterial( {color: 0x000000} );
var cylinder2 = new THREE.Mesh( geometry, material );
cylinder2.position.x = - 2.6
cylinder2.position.y = 0
cylinder2.position.z = - 7.6
scene.add( cylinder2 );

//rose
var geometry = new THREE.CylinderGeometry( 0.1, 0.1, 1.8, 8 );
var material = new THREE.MeshBasicMaterial( {color: 0x000000} );
var cylinder4 = new THREE.Mesh( geometry, material );
cylinder4.position.x = - 5.4
cylinder4.position.y = 0
cylinder4.position.z = - 6.1
scene.add( cylinder4 );

// jaune
var geometry = new THREE.CylinderGeometry( 0.1, 0.1, 1.8, 8 );
var material = new THREE.MeshBasicMaterial( {color: 0x000000} );
var cylinder3 = new THREE.Mesh( geometry, material );
cylinder3.position.x = - 2.6
cylinder3.position.y = 0
cylinder3.position.z = - 6.1
scene.add( cylinder3 );

// Rack
const rack = new THREE.Mesh(
    new THREE.BoxGeometry(6, 1, 3.5),
    new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.3, roughness: 0.8 })
)
rack.rotation.x = - Math.PI * 0.5
rack.position.x = - 4
rack.position.y = - 0.6
rack.position.z = 7
rack.castShadow = true
scene.add(rack)

const rackhandle = new THREE.Mesh(
    new THREE.BoxGeometry(2, .001, .1),
    new THREE.MeshStandardMaterial({ color: 0x000000, metalness: 0.3, roughness: 0.8 })
)
rackhandle.rotation.x = - Math.PI * 0.5
rackhandle.position.x = - 2.3
rackhandle.position.y = 0.6
rackhandle.position.z = 6.5
rackhandle.castShadow = true
scene.add(rackhandle)

const rackhandle2 = new THREE.Mesh(
    new THREE.BoxGeometry(2, .001, .1),
    new THREE.MeshStandardMaterial({ color: 0x000000, metalness: 0.3, roughness: 0.8 })
)
rackhandle2.rotation.x = - Math.PI * 0.5
rackhandle2.position.x = -5
rackhandle2.position.y = 0.6
rackhandle2.position.z = 6.5
rackhandle2.castShadow = true
scene.add(rackhandle2)

// Audio Hi-fi
const audio = new THREE.Mesh(
    new THREE.BoxGeometry(0.7, 0.7, 1),
    new THREE.MeshStandardMaterial({ color: 0x9c9c9c, metalness: 0.3, roughness: 0.8 })
)
audio.rotation.x = - Math.PI * 0.5
audio.position.x = - 2
audio.position.y = 2
audio.position.z = 6.8
audio.castShadow = true
scene.add(audio)

const audio2 = new THREE.Mesh(
    new THREE.BoxGeometry(0.7, 0.7, 1),
    new THREE.MeshStandardMaterial({ color: 0x9c9c9c, metalness: 0.3, roughness: 0.8 })
)
audio2.rotation.x = - Math.PI * 0.5
audio2.position.x = - 4.3
audio2.position.y = 2
audio2.position.z = 6.8
audio2.castShadow = true
scene.add(audio2)

const hifi = new THREE.Mesh(
    new THREE.BoxGeometry(1, 0.7, 0.7),
    new THREE.MeshStandardMaterial({ color: 0x9c9c9c, metalness: 0.3, roughness: 0.8 })
)
hifi.rotation.x = - Math.PI * 0.5
hifi.position.x = - 3.3
hifi.position.y = 2
hifi.position.z = 6.7
hifi.castShadow = true
scene.add(hifi)


/*********** TEXTURES ***********/

// Wall's texture
const textureLoader = new THREE.TextureLoader()

const woodTexture = textureLoader.load('textures/bois.jpg')
woodTexture.wrapS = THREE.RepeatWrapping
woodTexture.wrapT = THREE.RepeatWrapping
woodTexture.repeat.set(4, 4)

const textureRoch = new THREE.TextureLoader()

const woodRoch = textureRoch.load('textures/roch.jpg')
woodRoch.wrapS = THREE.RepeatWrapping
woodRoch.wrapT = THREE.RepeatWrapping
woodRoch.repeat.set(4, 4)

// Carpet's texture
const textureCarpet = new THREE.TextureLoader()

const woodCarpet = textureCarpet.load('textures/carpet.jpg')
woodCarpet.wrapS = THREE.RepeatWrapping
woodCarpet.wrapT = THREE.RepeatWrapping
woodCarpet.repeat.set(4, 4)

// TV texture 
const textureTV = new THREE.TextureLoader()

const logotv = textureTV.load('textures/tv.jpg')
logotv.repeat.set(4,4)


/*********** BEDROOM ***********/

const house = new THREE.Object3D()
scene.add(house)
bed.receiveShadow = true
house.add(bed)


// Floor
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(16, 16, 3),
    new THREE.MeshStandardMaterial({ map: woodTexture, metalness: 0.3, roughness: 0.8 })
)
floor.rotation.x = - Math.PI * 0.5
floor.position.y = - 0.5
floor.receiveShadow = true
house.add(floor)

// WALL in green 
const wallone = new THREE.Mesh(
    new THREE.PlaneGeometry(16, 6, 5),
    new THREE.MeshStandardMaterial({ color: 0x23a638, metalness: 0.3, roughness: 0.8})
)
wallone.rotation.x = - Math.PI * 2
wallone.position.x = 0
wallone.position.y = 2.5
wallone.position.z = - 8
wallone.receiveShadow = true
house.add(wallone)

/** 
// WALL in pink 
const walltwo = new THREE.Mesh(
    new THREE.PlaneGeometry(16, 6, 5),
    new THREE.MeshStandardMaterial({ color: 0xf7ced8, metalness: 0.3, roughness: 0.8})
)

walltwo.position.x = 0
walltwo.position.y = 2.5
walltwo.position.z = 2
walltwo.receiveShadow = true
house.add(walltwo)
**/

// WALL in roch
const wallback = new THREE.Mesh(
    new THREE.PlaneGeometry(16, 10, 10),
    new THREE.MeshStandardMaterial({ map: woodRoch, metalness: 0.3, roughness: 0.8})
)
wallback.rotation.x = - Math.PI * 2
wallback.rotation.y = - Math.PI * 0.5
wallback.position.x = 8
wallback.position.y = 0.5
wallback.position.z = 0
wallback.receiveShadow = true
house.add(wallback)

// Carpet 
const carpet = new THREE.Mesh(
    new THREE.BoxGeometry(6, 5, .1),
    new THREE.MeshStandardMaterial({ map: woodCarpet, metalness: 0.3, roughness: 0.8 })
)
carpet.rotation.x = - Math.PI * 0.5
carpet.position.x = - 4
carpet.position.y = - 0.5
carpet.position.z = - 5
carpet.castShadow = true
house.add(carpet)

// Television
const tv = new THREE.Mesh(
    new THREE.BoxGeometry(3, 0.1, 2),
    new THREE.MeshStandardMaterial({ map: logotv, metalness: 0.3, roughness: 0.8 })
)
tv.rotation.x = - Math.PI * 0.5
tv.position.x = - 4
tv.position.y = 3
tv.position.z = - 8
tv.castShadow = true
scene.add(tv)

/*********** LIGHTS ***********/

const ambientLight = new THREE.AmbientLight(0x003366)
scene.add(ambientLight)

const pointLight = new THREE.PointLight(0xffffff, 1.5)
pointLight.position.z = - 7
pointLight.position.y = 6
pointLight.position.x = - 2
pointLight.castShadow = true
scene.add(pointLight)

const directionLight = new THREE.DirectionalLight(0xccccff, 0.7)
directionLight.position.x = 1
directionLight.position.y = 1
directionLight.position.z = 1
directionLight.castShadow = true
directionLight.shadow.camera.top = 1.20
directionLight.shadow.camera.right = 1.20
directionLight.shadow.camera.bottom = -1.20
directionLight.shadow.camera.left = -1.20
scene.add(directionLight)

/*********** RENDERER ***********/

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(windowWidth, windowHeight)
renderer.shadowMap.enabled = true

document.body.appendChild(renderer.domElement)

/*********** MOUSE ***********/

const mouse = { x: 0, y: 0 }
window.addEventListener('mousemove', (event) =>
{
    mouse.x = event.clientX / windowWidth - 3
    mouse.y = event.clientY / windowHeight - 3
})

/*********** RESIZE ***********/

window.addEventListener('resize', () =>
{
    windowWidth = window.innerWidth
    windowHeight = window.innerHeight

    camera.aspect = windowWidth / windowHeight
    camera.updateProjectionMatrix() // projeter scene 

    renderer.setSize(windowWidth, windowHeight)
    
})

/*********** LOOP ***********/

const loop = () =>
{
    window.requestAnimationFrame(loop)

    camera.position.x = mouse.x * 3
    camera.position.y = - mouse.y * 3
    camera.lookAt(scene.position)

    renderer.render(scene, camera)
}
loop()