const events = [
  {
    title: "🎨 Creative Art Night",
    date: "Saturday, Jan 4",
    description: "Relaxed art session focused on creativity and self-expression."
  },
  {
    title: "🧘 Mindful Yoga & Breathing",
    date: "Saturday, Jan 11",
    description: "Gentle yoga and breathing exercises designed for teens."
  },
  {
    title: "💃 Dance & Movement",
    date: "Saturday, Jan 18",
    description: "Fun, inclusive dance session to energize and de-stress."
  },
  {
    title: "🚶 Walk & Talk",
    date: "Saturday, Jan 25",
    description: "Guided community walk encouraging connection and conversation."
  }
];

const container = document.getElementById("event-list");

events.forEach(e => {
  const div = document.createElement("div");
  div.className = "event";
  div.innerHTML = `
    <h3>${e.title}</h3>
    <p><strong>${e.date}</strong> | 5:00 – 6:00 PM</p>
    <p>${e.description}</p>
  `;
  container.appendChild(div);
});
