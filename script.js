const canvas = document.getElementById('simulationCanvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = 800;
canvas.height = 600;

// Example variables
let simulationRunning = false;

// Example function to render orbit
function drawOrbit() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Example static orbit
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 100, 0, Math.PI * 2);
  ctx.strokeStyle = 'white';
  ctx.stroke();

  if (simulationRunning) {
    requestAnimationFrame(drawOrbit);
  }
}

// Control functions
function startSimulation() {
  if (!simulationRunning) {
    simulationRunning = true;
    drawOrbit();
  }
}

function pauseSimulation() {
  simulationRunning = false;
}

function resetSimulation() {
  simulationRunning = false;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}