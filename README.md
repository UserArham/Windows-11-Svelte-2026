# Windows 11 HTML Clone

A lightweight **Windows 11 clone** built entirely with **HTML, CSS, and JavaScript**. This project simulates the Windows 11 desktop environment with a taskbar, Start menu, draggable windows, media/video players, and a paint application via iframe.

---

## Features

- Windows 11-style **Taskbar** and **Start Button**
- **Start Menu** with 50 sample apps
- **Draggable Windows** with minimize, maximize, and close
- **Media Player** with sample audio
- **Video Player** with sample videos
- **Paint App** using [LightBrush](https://lightbrush.art/paint)
- **Custom Wallpaper** support
- **Segoe UI Light** font via Adobe Fonts

---

## Demo

Wallpaper example:

![Windows 11 Clone Wallpaper](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4k5t89A49b_xXiP_tEvmAl6azlCgaw6OG6A&s)

Start Menu and apps (icons represented by emojis/SVG placeholders):

---

## Start Menu Sample Apps

| Icon | App Name |
|------|----------|
| 🎵 | Media Player |
| 🎬 | Video Player |
| 🎨 | Paint |
| 📁 | File Explorer |
| 🌐 | Browser |
| 📧 | Mail |
| 📝 | Notepad |
| 📅 | Calendar |
| 🕒 | Clock |
| 📷 | Camera |
| 🎙️ | Voice Recorder |
| 🔒 | Security Center |
| ⚙️ | Settings |
| 🛠️ | Control Panel |
| 📊 | Excel |
| 📖 | Word |
| 🖼️ | Photos |
| 🎥 | Movie Maker |
| 💬 | Messaging |
| 🌙 | Weather |
| 🎮 | Xbox Game Bar |
| 🖱️ | Mouse Settings |
| 🎹 | Music Maker |
| 🔊 | Sound Settings |
| 🧩 | Calculator |
| 🗑️ | Recycle Bin |
| 📦 | Store |
| 🏷️ | Sticky Notes |
| 🧭 | Maps |
| 📞 | Phone |
| 📺 | TV |
| 🛡️ | Defender |
| 🗂️ | Archive Manager |
| 🧾 | PDF Reader |
| 🖋️ | Sketchpad |
| 💻 | Terminal |
| 🌐 | Edge Browser |
| 🗃️ | Backup Utility |
| 🖥️ | System Monitor |
| 🧹 | Disk Cleanup |
| 🛠️ | Troubleshooter |
| 📡 | Network Settings |
| 🛎️ | Notifications |
| 🎤 | Microphone Settings |
| 🛠️ | Device Manager |
| ⚡ | Power Settings |
| 📀 | Disc Burner |
| 📌 | Pinboard |
| 🧠 | Memory Cleaner |
| 🔍 | Search |

> Note: These are all sample apps. You can replace emojis with real **SVG icons** and actual functionality.

---

## Installation

1. Clone the repository:
``` bash 
git clone https://github.com/UserArham/windows-11-svelte-my-version.git
```

2. Open `index.html` in your browser.

---

## Usage

- Click **Start Button** to open the Start Menu
- Click an app icon to open its window
- Drag windows around via the header
- Use minimize, maximize, and close buttons for window control
- Media/Video players have **sample media**
- Paint app opens **LightBrush** iframe

---

## Folder Structure
``` structra
windows-11-html-clone/
│
├─ index.html # Main HTML file
├─ style.css # Optional CSS
├─ script.js # Optional JS
├─ media/ # Sample audio/video files
├─ icons/ # SVG or PNG icons
└─ README.md # This file
```

---

## Customization

- **Wallpaper:** Change `body` background in CSS
- **Add apps:** Duplicate `.app` divs in Start Menu and corresponding `.window` divs
- **Font:** Use Adobe Fonts for Segoe UI Light

---

## Credits

- Wallpaper: [Google Images](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4k5t89A49b_xXiP_tEvmAl6azlCgaw6OG6A&s)
- Icons: [Flaticon](https://www.flaticon.com/)
- LightBrush Paint: [https://lightbrush.art](https://lightbrush.art)
- Sample Media: [SoundHelix](https://www.soundhelix.com), [Sample Videos](https://sample-videos.com)

---

## License

This project is **MIT Licensed**. Free to use, modify, and distribute.

---

## Notes

- Fully frontend; no backend
- For **Vercel/Netlify deployment**, ensure `index.html` is in the root folder
