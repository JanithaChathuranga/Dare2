```javascript
// අභියෝග වල අගය
const dares = [
    "Dance like nobody's watching for 1 minute.",
    "Send a funny selfie to your best friend.",
    "Do 10 push-ups right now!",
    "Imitate an animal for 30 seconds.",
    "Post a silly video on your story.",
    "Call someone and sing them a random song.",
    "Act like a robot for 2 minutes.",
    "Share an embarrassing story from your childhood."
];

// අහඹු අභියෝගයක් තෝරා ගැනීමේ ක්‍රියාවලිය 
function generateDare() {
    const randomIndex = Math.floor(Math.random() * dares.length);
    const randomDare = dares[randomIndex];

    // අභියෝගය dare-box එක තුල පෙන්වන්න
    document.getElementById("dare").innerHTML = `<p>${randomDare}</p>`;
}
```