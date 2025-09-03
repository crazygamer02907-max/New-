* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: Arial, sans-serif; background: #f5f6fa; color: #333; }

/* Navbar */
.navbar {
  display: flex; justify-content: space-between; align-items: center;
  padding: 10px 20px; background: #1877f2; color: white;
}
.logo { font-size: 20px; font-weight: bold; }
.nav-icon { margin: 0 8px; cursor: pointer; font-size: 18px; }

/* Layout */
.container { display: flex; height: calc(100vh - 50px); }
.sidebar {
  width: 20%; background: #fff; border-right: 1px solid #ddd;
  padding: 15px; overflow-y: auto;
}
.sidebar h2 { margin-bottom: 10px; }
.sidebar ul { list-style: none; }
.sidebar li { margin: 8px 0; font-size: 14px; }
.online { color: green; }
.offline { color: gray; }

/* Chat */
.chat-section { flex: 1; display: flex; flex-direction: column; }
.chat-header { padding: 10px; background: #f0f2f5; border-bottom: 1px solid #ddd; }
.chat-box {
  flex: 1; padding: 10px; overflow-y: auto; background: #e9eff6;
}
.message {
  max-width: 60%; margin: 5px; padding: 8px 12px;
  border-radius: 15px; clear: both;
}
.sent { background: #1877f2; color: white; margin-left: auto; }
.received { background: #fff; border: 1px solid #ddd; }

/* Input */
.chat-input {
  display: flex; align-items: center; padding: 10px; background: #fff; border-top: 1px solid #ddd;
}
.chat-input input { flex: 1; padding: 10px; border: 1px solid #ddd; border-radius: 20px; }
.img-upload { margin: 0 10px; cursor: pointer; }
button { border: none; background: #1877f2; color: white; padding: 8px 12px; border-radius: 50%; cursor: pointer; }

/* Profile */
.profile-panel {
  width: 25%; background: #fff; padding: 20px; border-left: 1px solid #ddd;
}
.hidden { display: none; }
.profile-pic img { width: 100px; height: 100px; border-radius: 50%; margin-bottom: 10px; }

/* Dark Theme */
body.dark { background: #1e1e1e; color: white; }
body.dark .navbar { background: #333; }
body.dark .chat-box { background: #2c2c2c; }
body.dark .chat-input, body.dark .sidebar, body.dark .profile-panel { background: #222; color: white; }
