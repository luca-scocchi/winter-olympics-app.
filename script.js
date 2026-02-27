// ── Snow Canvas ──
const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');
let flakes = [];

function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}
window.addEventListener('resize', resize);
resize();

for (let i = 0; i < 120; i++) {
    flakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 3 + 1,
        speed: Math.random() * 0.8 + 0.3,
        drift: (Math.random() - 0.5) * 0.4
    });
}

function snow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(255,255,255,0.75)';
    flakes.forEach(f => {
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fill();
        f.y += f.speed;
        f.x += f.drift;
        if (f.y > canvas.height) { f.y = -5; f.x = Math.random() * canvas.width; }
        if (f.x > canvas.width) f.x = 0;
        if (f.x < 0) f.x = canvas.width;
    });
    requestAnimationFrame(snow);
}
snow();

// ── Tabs ──
function showTab(id) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('tab-' + id).classList.add('active');
    event.target.classList.add('active');
}

// ── Scroll reveal ──
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.sport-card, .record-card, .fact-card, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'all .5s ease';
    observer.observe(el);
});
