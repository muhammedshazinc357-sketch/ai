const chat = document.getElementById("chat");
const form = document.getElementById("chatForm");
const input = document.getElementById("userInput");

function addMessage(text, who) {
  const article = document.createElement("article");
  article.className = `message ${who}`;
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.textContent = text; // Use textContent so user input is never treated as HTML.
  article.appendChild(bubble);
  chat.appendChild(article);
  chat.scrollTop = chat.scrollHeight;
  article.scrollIntoView({behavior:"smooth", block:"nearest"});
}

function answerQuestion(raw) {
  const q = raw.toLowerCase().replace(/[’']/g, "").trim();

  if (/\b(time|clock|what time|current time)\b/.test(q)) {
    return `The current time on your device is ${new Date().toLocaleTimeString([], {hour:"2-digit", minute:"2-digit", second:"2-digit"})}.`;
  }
  if (/\b(name|who are you)\b/.test(q)) return "I am Muhammed Shazin C. I am Shazin's AI assistant.";
  if (/\b(age|how old)\b/.test(q)) return "I am 17 years old.";
  if (/\b(study|studying|school|class|course|plus two|commerce)\b/.test(q)) return "I am studying Plus Two Commerce at Seethi Sahib Higher Secondary School, Taliparamba.";
  if (/\b(future|college|after plus|degree|career|plan)\b/.test(q)) return "My future plan is to study BCA followed by MCA.";
  if (/\b(instagram|insta|social media)\b/.test(q)) return "My Instagram ID is @shazinshafeeq_.";
  if (/\b(phone|mobile|number|whatsapp|contact)\b/.test(q)) return "You can call or WhatsApp me at 9400 701 146.";
  if (/\b(father|dad|papa)\b/.test(q)) return "My father's name is Shafeeq.";
  if (/\b(mother|mom|mum)\b/.test(q)) return "My mother's name is Bushra.";
  if (/\b(gmail|email|e-mail)\b/.test(q)) return "My Gmail address is muhammedshazinc357@gmail.com.";

  // Basic general-knowledge responses. Add more Q&A below as desired.
  if (/\b(prime minister|pm)\b/.test(q) && /\b(india|indian)\b/.test(q)) return "The Prime Minister of India is Narendra Modi.";
  if (/\b(capital)\b/.test(q) && /\b(india|indian)\b/.test(q)) return "The capital of India is New Delhi.";
  if (/\b(president)\b/.test(q) && /\b(india|indian)\b/.test(q)) return "The President of India is Droupadi Murmu.";
  if (/\b(largest planet)\b/.test(q)) return "Jupiter is the largest planet in our Solar System.";
  if (/\b(hello|hi|hey)\b/.test(q)) return "Hello! 😊 What would you like to know?";
  if (/\b(thank you|thanks)\b/.test(q)) return "You're welcome! Ask me anything else.";
  return "I don't have a ready answer for that yet. Try asking about Shazin, the current time, or a general-knowledge question. You can add more answers in script.js.";
}

function sendQuestion(question) {
  const text = question.trim();
  if (!text) return;
  addMessage(text, "user");
  input.value = "";
  // A tiny delay makes the exchange feel conversational.
  window.setTimeout(() => addMessage(answerQuestion(text), "bot"), 180);
}

form.addEventListener("submit", event => {
  event.preventDefault();
  sendQuestion(input.value);
});
document.querySelectorAll("[data-question]").forEach(button => {
  button.addEventListener("click", () => sendQuestion(button.dataset.question));
});
