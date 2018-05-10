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
    new THREE.BoxGeometry(8, 6, .5),
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
    new THREE.BoxGeometry(0.1, 6, 1.5),
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
    new THREE.BoxGeometry(7, 5, .5),
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
    new THREE.BoxGeometry(1.5, 0.2, 1.5),
    new THREE.MeshStandardMaterial({ color: 0x51FF67, metalness: 0.3, roughness: 0.8})
)

pillow1.position.x = 7
pillow1.position.y = 0.1
pillow1.position.z = 2
pillow1.castShadow = true
scene.add(pillow1)

const pillow2 = new THREE.Mesh(
    new THREE.BoxGeometry(1.5, 0.2, 1.5),
    new THREE.MeshStandardMaterial({ color: 0x51FF67, metalness: 0.3, roughness: 0.8})
)

pillow2.position.x = 7
pillow2.position.y = 0.1
pillow2.position.z = 0
pillow2.castShadow = true
scene.add(pillow2)


// Cupboard
const cupboard = new THREE.Mesh(
    new THREE.BoxGeometry(8, 8, 2),
    new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.3, roughness: 0.8})
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

// Handles
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
var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
var cylinder = new THREE.Mesh( geometry, material );
cylinder.position.x = - 5.4
cylinder.position.y = 0
cylinder.position.z = - 7.6
scene.add( cylinder );

 // vert 
var geometry = new THREE.CylinderGeometry( 0.1, 0.1, 1.8, 8 );
var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
var cylinder2 = new THREE.Mesh( geometry, material );
cylinder2.position.x = - 2.6
cylinder2.position.y = 0
cylinder2.position.z = - 7.6
scene.add( cylinder2 );

//rose
var geometry = new THREE.CylinderGeometry( 0.1, 0.1, 1.8, 8 );
var material = new THREE.MeshBasicMaterial( {color: 0xFF4CBC} );
var cylinder4 = new THREE.Mesh( geometry, material );
cylinder4.position.x = - 5.4
cylinder4.position.y = 0
cylinder4.position.z = - 6.1
scene.add( cylinder4 );

// jaune
var geometry = new THREE.CylinderGeometry( 0.1, 0.1, 1.8, 8 );
var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var cylinder3 = new THREE.Mesh( geometry, material );
cylinder3.position.x = - 2.6
cylinder3.position.y = 0
cylinder3.position.z = - 6.1
scene.add( cylinder3 );

// Settee



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

// WALL in white 
const wallone = new THREE.Mesh(
    new THREE.PlaneGeometry(16, 6, 5),
    new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.3, roughness: 0.8})
)
wallone.rotation.x = - Math.PI * 2
wallone.position.x = 0
wallone.position.y = 2.5
wallone.position.z = - 8
wallone.receiveShadow = true
house.add(wallone)

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