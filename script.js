const events = [
  {
    date: "Saturday, Jan 4",
    time: "5:00 – 6:00 PM",
    title: "🎨 Creative Art Night",
    description: "Relax with drawing, coloring, and creative expression."
  },
  {
    date: "Saturday, Jan 11",
    time: "5:00 – 6:00 PM",
    title: "🧘 Mindful Yoga & Breathing",
    description: "Gentle yoga and mindfulness techniques to reduce stress."
  },
  {
    date: "Saturday, Jan 18",
    time: "5:00 – 6:00 PM",
    title: "💃 Dance & Zumba Fun",
    description: "Move, energize, and have fun with music and dance."
  },
  {
    date: "Saturday, Jan 25",
    time: "5:00 – 6:00 PM",
    title: "🚶 Walk Together & Talk",
    description: "A guided group walk focused on connection and conversation."
  }
];

const eventList = document.getElementById("event-list");

events.forEach(event => {
  const card = document.createElement("div");
  card.className = "event-card";

  card.innerHTML = `
    <h3>${event.title}</h3>
    <p class="event-meta"><strong>${event.date}</strong> | ${event.time}</p>
    <p>${event.description}</p>
  `;

  eventList.appendChild(card);
});
