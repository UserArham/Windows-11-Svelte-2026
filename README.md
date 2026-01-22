<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Windows 11 Clone</title>
<!-- Adobe Fonts for Segoe UI Light -->
<link rel="stylesheet" href="https://use.typekit.net/xxxxxxx.css">
<style>
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI Light','Segoe UI',sans-serif; }
    body {
        height: 100vh;
        width: 100vw;
        background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4k5t89A49b_xXiP_tEvmAl6azlCgaw6OG6A&s') no-repeat center center fixed;
        background-size: cover;
        overflow: hidden;
    }
    .taskbar {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 48px;
        background: rgba(50,50,50,0.85);
        display: flex;
        align-items: center;
        padding: 0 10px;
        z-index: 1000;
    }
    .start-button {
        width: 36px;
        height: 36px;
        background: url('https://i.namu.wiki/i/Q6w344sEJTFQ1knhHS9whpmSUfYn11SKwIuhcwbidm03Ci_-GKXuQjEvgRl1HyX8EfnOEUp4erRNlPKUtGg4Dg.svg') no-repeat center/contain;
        cursor: pointer;
    }
    .start-menu {
        position: fixed;
        bottom: 48px;
        left: 10px;
        width: 360px;
        background: rgba(240,240,240,0.95);
        border-radius: 10px;
        box-shadow: 0 0 20px rgba(0,0,0,0.5);
        padding: 15px;
        display: none;
        flex-wrap: wrap;
        z-index: 999;
    }
    .start-menu .app {
        width: 60px;
        height: 60px;
        margin: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    .start-menu .app img, .start-menu .app span {
        text-align: center;
    }
    .start-menu .app span {
        font-size: 10px;
        margin-top: 2px;
    }
    .window {
        position: absolute;
        top: 50px;
        left: 50px;
        width: 400px;
        height: 300px;
        background: rgba(255,255,255,0.95);
        border-radius: 8px;
        box-shadow: 0 0 15px rgba(0,0,0,0.4);
        display: none;
        flex-direction: column;
        z-index: 500;
    }
    .window-header {
        height: 32px;
        background: rgba(200,200,200,0.9);
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 8px;
        cursor: move;
    }
    .window-header .buttons { display: flex; gap: 4px; }
    .window-header .buttons div {
        width: 16px; height: 16px; border-radius: 2px; cursor: pointer;
    }
    .window-header .buttons .close { background: #ff5f57; }
    .window-header .buttons .minimize { background: #ffbd2e; }
    .window-header .buttons .maximize { background: #28c940; }
    .window-content { flex: 1; padding: 10px; overflow: auto; }
    video,audio,iframe { width: 100%; height: 100%; border: none; }
</style>
</head>
<body>
<div class="taskbar">
    <div class="start-button" id="startBtn"></div>
</div>

<div class="start-menu" id="startMenu">
    <!-- 50 apps -->
</div>

<!-- Windows container -->
<div id="windowsContainer"></div>

<script>
const apps = [
{ id:'mediaPlayer', name:'Media Player', icon:'🎵', type:'audio', src:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
{ id:'videoPlayer', name:'Video Player', icon:'🎬', type:'video', src:'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' },
{ id:'paint', name:'Paint', icon:'🖌️', type:'iframe', src:'https://lightbrush.art/paint' },
{ id:'calculator', name:'Calculator', icon:'🧮', type:'iframe', src:'https://www.online-calculator.com/html5/' },
{ id:'notepad', name:'Notepad', icon:'📝', type:'iframe', src:'https://www.editpad.org/' },
{ id:'calendar', name:'Calendar', icon:'📅', type:'iframe', src:'https://calendar.google.com/' },
{ id:'weather', name:'Weather', icon:'☀️', type:'iframe', src:'https://weather.com/' },
{ id:'maps', name:'Maps', icon:'🗺️', type:'iframe', src:'https://www.google.com/maps' },
{ id:'browser', name:'Browser', icon:'🌐', type:'iframe', src:'https://www.wikipedia.org/' },
{ id:'mail', name:'Mail', icon:'✉️', type:'iframe', src:'https://mail.google.com/' },
{ id:'clock', name:'Clock', icon:'⏰', type:'iframe', src:'https://time.is/' },
{ id:'camera', name:'Camera', icon:'📷', type:'iframe', src:'https://webcammictest.com/' },
{ id:'musicStore', name:'Music Store', icon:'🎧', type:'iframe', src:'https://www.spotify.com/' },
{ id:'videoStore', name:'Video Store', icon:'📽️', type:'iframe', src:'https://www.youtube.com/' },
{ id:'photos', name:'Photos', icon:'🖼️', type:'iframe', src:'https://photos.google.com/' },
{ id:'docs', name:'Docs', icon:'📄', type:'iframe', src:'https://docs.google.com/' },
{ id:'sheets', name:'Sheets', icon:'📊', type:'iframe', src:'https://sheets.google.com/' },
{ id:'slides', name:'Slides', icon:'📽️', type:'iframe', src:'https://slides.google.com/' },
{ id:'tasks', name:'Tasks', icon:'✅', type:'iframe', src:'https://tasks.google.com/' },
{ id:'notes', name:'Notes', icon:'🗒️', type:'iframe', src:'https://keep.google.com/' },
{ id:'contacts', name:'Contacts', icon:'👥', type:'iframe', src:'https://contacts.google.com/' },
{ id:'terminal', name:'Terminal', icon:'💻', type:'iframe', src:'https://www.tutorialspoint.com/execute_bash_online.php' },
{ id:'explorer', name:'Explorer', icon:'📁', type:'iframe', src:'https://www.google.com/drive/' },
{ id:'store', name:'Store', icon:'🛒', type:'iframe', src:'https://www.microsoft.com/store' },
{ id:'news', name:'News', icon:'📰', type:'iframe', src:'https://news.google.com/' },
{ id:'sports', name:'Sports', icon:'🏀', type:'iframe', src:'https://www.espn.com/' },
{ id:'finance', name:'Finance', icon:'💰', type:'iframe', src:'https://www.bloomberg.com/' },
{ id:'photoshop', name:'Photoshop', icon:'🖌️', type:'iframe', src:'https://www.photopea.com/' },
{ id:'aiWriter', name:'AI Writer', icon:'🤖', type:'iframe', src:'https://chat.openai.com/' },
{ id:'translator', name:'Translator', icon:'🌎', type:'iframe', src:'https://translate.google.com/' },
{ id:'dictionary', name:'Dictionary', icon:'📖', type:'iframe', src:'https://www.dictionary.com/' },
{ id:'calculatorPro', name:'Calculator Pro', icon:'🧮', type:'iframe', src:'https://www.desmos.com/scientific' },
{ id:'videoEditor', name:'Video Editor', icon:'✂️', type:'iframe', src:'https://www.wevideo.com/' },
{ id:'musicEditor', name:'Music Editor', icon:'🎹', type:'iframe', src:'https://www.soundtrap.com/' },
{ id:'pdfReader', name:'PDF Reader', icon:'📕', type:'iframe', src:'https://www.adobe.com/acrobat/online/pdf-reader.html' },
{ id:'scanner', name:'Scanner', icon:'📠', type:'iframe', src:'https://www.onlineocr.net/' },
{ id:'weatherPro', name:'Weather Pro', icon:'⛅', type:'iframe', src:'https://www.accuweather.com/' },
{ id:'translatorPro', name:'Translator Pro', icon:'🈯', type:'iframe', src:'https://www.deepl.com/translator' },
{ id:'emailPro', name:'Email Pro', icon:'📧', type:'iframe', src:'https://outlook.live.com/' },
{ id:'taskManager', name:'Task Manager', icon:'📋', type:'iframe', src:'https://todo.microsoft.com/tasks/' },
{ id:'alarm', name:'Alarm', icon:'⏱️', type:'iframe', src:'https://timer.onlineclock.net/' },
{ id:'recipes', name:'Recipes', icon:'🍲', type:'iframe', src:'https://www.allrecipes.com/' },
{ id:'books', name:'Books', icon:'📚', type:'iframe', src:'https://books.google.com/' },
{ id:'movies', name:'Movies', icon:'🎥', type:'iframe', src:'https://www.imdb.com/' },
{ id:'games', name:'Games', icon:'🎮', type:'iframe', src:'https://www.miniclip.com/games/en/' },
{ id:'stocks', name:'Stocks', icon:'📈', type:'iframe', src:'https://www.nasdaq.com/' },
{ id:'crypto', name:'Crypto', icon:'₿', type:'iframe', src:'https://www.coinbase.com/' },
{ id:'gallery', name:'Gallery', icon:'🖼️', type:'iframe', src:'https://www.flickr.com/' },
{ id:'chat', name:'Chat', icon:'💬', type:'iframe', src:'https://web.whatsapp.com/' },
{ id:'social', name:'Social', icon:'👤', type:'iframe', src:'https://www.facebook.com/' }
];

// Generate start menu apps
const startMenu = document.getElementById('startMenu');
const windowsContainer = document.getElementById('windowsContainer');

apps.forEach(app => {
    const appDiv = document.createElement('div');
    appDiv.className = 'app';
    appDiv.dataset.app = app.id;
    appDiv.innerHTML = `<span style="font-size:24px;">${app.icon}</span><span>${app.name}</span>`;
    startMenu.appendChild(appDiv);

    const win = document.createElement('div');
    win.className = 'window';
    win.id = app.id;
    win.innerHTML = `
        <div class="window-header">
            <span>${app.name}</span>
            <div class="buttons">
                <div class="minimize"></div>
                <div class="maximize"></div>
                <div class="close"></div>
            </div>
        </div>
        <div class="window-content">
            ${app.type==='audio'?`<audio controls src="${app.src}"></audio>`:
              app.type==='video'?`<video controls src="${app.src}"></video>`:
              `<iframe src="${app.src}" allowfullscreen></iframe>`}
        </div>`;
    windowsContainer.appendChild(win);
});

// Start menu toggle
const startBtn = document.getElementById('startBtn');
startBtn.addEventListener('click', ()=>{ startMenu.style.display = startMenu.style.display==='flex'?'none':'flex'; });

// Open apps
document.querySelectorAll('.app').forEach(app=>{
    app.addEventListener('click', ()=>{
        const win = document.getElementById(app.dataset.app);
        win.style.display='flex';
        win.style.zIndex=600;
    });
});

// Window buttons
document.querySelectorAll('.window').forEach(win=>{
    const closeBtn = win.querySelector('.close');
    closeBtn.addEventListener('click', ()=> win.style.display='none');
});

// Dragging
let activeWindow=null, offsetX=0, offsetY=0;
document.querySelectorAll('.window').forEach(win=>{
    const header=win.querySelector('.window-header');
    header.addEventListener('mousedown',e=>{
        activeWindow=win;
        offsetX=e.clientX-win.offsetLeft;
        offsetY=e.clientY-win.offsetTop;
    });
});
document.addEventListener('mousemove',e=>{
    if(activeWindow){
        activeWindow.style.left=(e.clientX-offsetX)+'px';
        activeWindow.style.top=(e.clientY-offsetY)+'px';
    }
});
document.addEventListener('mouseup',()=>{ activeWindow=null; });
</script>
</body>
</html>
