// Theme toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Profile panel toggle
const profileIcon = document.getElementById("profileIcon");
const profilePanel = document.getElementById("profilePanel");
profileIcon.addEventListener("click", () => {
  profilePanel.classList.toggle("hidden");
});

// Send message
const sendBtn = document.getElementById("sendBtn");
const msgInput = document.getElementById("msgInput");
const chatBox = document.getElementById("chatBox");

sendBtn.addEventListener("click", () => {
  if (msgInput.value.trim() !== "") {
    let msg = document.createElement("div");
    msg.classList.add("message", "sent");
    msg.textContent = msgInput.value;
    chatBox.appendChild(msg);
    msgInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  }
});

// Image upload
const imgInput = document.getElementById("imgInput");
imgInput.addEventListener("change", () => {
  const file = imgInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      let imgMsg = document.createElement("div");
      imgMsg.classList.add("message", "sent");
      imgMsg.innerHTML = `<img src="${reader.result}" style="max-width:150px; border-radius:10px;">`;
      chatBox.appendChild(imgMsg);
      chatBox.scrollTop = chatBox.scrollHeight;
    };
    reader.readAsDataURL(file);
  }
});

// Edit profile
function editProfile() {
  const newName = prompt("Enter your name:");
  if (newName) document.getElementById("username").textContent = newName;
  const newBio = prompt("Enter your bio:");
  if (newBio) document.getElementById("bio").textContent = newBio;
}
