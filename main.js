// Configurazione iniziale della scena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, // Campo visivo
  window.innerWidth / window.innerHeight, // Rapporto d'aspetto
  0.1, // Piano vicino
  1000 // Piano lontano
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Aggiunta di una sorgente luminosa
const light = new THREE.PointLight(0xffffff, 1, 100); // Colore bianco, intensità 1, raggio massimo 100
light.position.set(10, 10, 10); // Posizionamento della luce nella scena
scene.add(light);

// Creazione della base della casa (cubo)
const baseGeometry = new THREE.BoxGeometry(4, 2, 4); // Larghezza, altezza, profondità
const baseMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 }); // Materiale marrone
const base = new THREE.Mesh(baseGeometry, baseMaterial);
base.position.y = 1; // Solleva la base sopra il piano di appoggio
scene.add(base);

// Creazione del tetto della casa (cono)
const roofGeometry = new THREE.ConeGeometry(3.5, 2, 4); // Raggio di base, altezza, numero di segmenti
const roofMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 }); // Materiale rosso
const roof = new THREE.Mesh(roofGeometry, roofMaterial);
roof.position.y = 3; // Posizionamento sopra la base
roof.rotation.y = Math.PI / 4; // Rotazione per allineamento al cubo sottostante
scene.add(roof);

// Aggiunta del piano (terra)
const groundGeometry = new THREE.PlaneGeometry(20, 20); // Dimensioni del piano
const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x228b22 }); // Materiale verde per simulare l'erba
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = -Math.PI / 2; // Rotazione per rendere il piano orizzontale
scene.add(ground);

// Posizionamento della camera
camera.position.z = 10; // Sposta la camera lontano dalla scena per avere una vista chiara

// Funzione di animazione (render loop)
function animate() {
  requestAnimationFrame(animate); // Richiama continuamente la funzione per un'animazione fluida
  base.rotation.y += 0.01; // Rotazione della base per una vista dinamica
  roof.rotation.y += 0.01; // Rotazione del tetto sincronizzata con la base
  renderer.render(scene, camera); // Renderizza la scena con la camera
}

// Avvio dell'animazione
animate();
