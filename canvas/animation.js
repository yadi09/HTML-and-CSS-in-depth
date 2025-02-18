const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Ball properties
let ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 20,
    dx: 4, // Horizontal speed
    dy: 3, // Vertical speed
    color: "red"
};

// Function to draw the ball
function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = ball.color;
    ctx.fill();
    ctx.closePath();
}

// Function to update ball position
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    drawBall();

    // Ball collision with walls
    if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
        ball.dx *= -1; // Reverse direction
        changeColor();
    }
    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.dy *= -1; // Reverse direction
        changeColor();
    }

    // Move the ball
    ball.x += ball.dx;
    ball.y += ball.dy;

    requestAnimationFrame(update); // Animation loop
}

// Function to change ball color randomly
function changeColor() {
    const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
    ball.color = colors[Math.floor(Math.random() * colors.length)];
}

// Start animation
update();
