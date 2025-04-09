# 🎧 Migana Music Player

Migana Music Player is a modern, responsive web application built with **React** and **Tailwind CSS** that allows users to search for and stream music using the [Deezer API](https://developers.deezer.com/api). The app features a sleek UI, real-time search, and an interactive audio player.
## 🚀 Features

- 🔍 Search Music – Find songs and artists using live search.
- 🎵 Stream Tracks – Play songs directly using the embedded player.
- 🔁 Track Controls – Play, pause, skip next/previous tracks.
- 🧑‍💻 Authentication System – Login and sign up functionality.
- 🔐 Protected Pages – Only authenticated users can access the main music area.
- 💡 Responsive UI – Fully responsive layout for mobile and desktop.
- 🔄 Auto Update UI – Smooth loading states and error messages.

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS, React Router
- **Authentication**: Firebase Auth (or your custom auth setup)
- **API**: Deezer Public API
- **State Management**: React Hooks
- **Routing**: React Router v6

## 📦 Installation

Clone the project and install dependencies:

```bash
git clone https://github.com/your-username/migana-music-player.git
cd migana-music-player
npm install
```

### 🔧 Start the development server:

```bash
npm run dev
```

### ⚠️ CORS Notice for Deezer API

This app uses the [CORS Anywhere](https://cors-anywhere.herokuapp.com/corsdemo) proxy to bypass Deezer’s CORS restrictions. You must visit the demo page **once per session** to allow access:

👉 https://cors-anywhere.herokuapp.com/corsdemo


## 📁 Project Structure


migana-music-player/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── context/
│   ├── hooks/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles/
└── README.md



## 🧪 Future Improvements

- 💾 Save playlists or liked tracks
- 👤 User profiles
- 🎧 Recently played history
- 🌙 Dark/light mode toggle
- 📱 PWA support for offline use


## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 📃 License

MIT License – Free to use and modify.

## 👨‍🎤 Credits

Built by **Natnael Darsema** with love for music and clean code. 🎶  
Design inspired by modern music streaming platforms.


