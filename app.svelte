<script>
  let startMenuVisible = false;

  // 50 sample apps
 let apps = [
  { id: 'mediaPlayer', name: 'Media Player', icon: '🎵', type: 'audio', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
  { id: 'videoPlayer', name: 'Video Player', icon: '🎬', type: 'video', src: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' },
  { id: 'paint', name: 'Paint', icon: '🖌️', type: 'iframe', src: 'https://lightbrush.art/paint' },
  { id: 'calculator', name: 'Calculator', icon: '🧮', type: 'iframe', src: 'https://www.online-calculator.com/html5/' },
  { id: 'notepad', name: 'Notepad', icon: '📝', type: 'iframe', src: 'https://www.editpad.org/' },
  { id: 'calendar', name: 'Calendar', icon: '📅', type: 'iframe', src: 'https://calendar.google.com/' },
  { id: 'weather', name: 'Weather', icon: '☀️', type: 'iframe', src: 'https://weather.com/' },
  { id: 'maps', name: 'Maps', icon: '🗺️', type: 'iframe', src: 'https://www.google.com/maps' },
  { id: 'browser', name: 'Browser', icon: '🌐', type: 'iframe', src: 'https://www.wikipedia.org/' },
  { id: 'mail', name: 'Mail', icon: '✉️', type: 'iframe', src: 'https://mail.google.com/' },
  { id: 'clock', name: 'Clock', icon: '⏰', type: 'iframe', src: 'https://time.is/' },
  { id: 'camera', name: 'Camera', icon: '📷', type: 'iframe', src: 'https://webcammictest.com/' },
  { id: 'musicStore', name: 'Music Store', icon: '🎧', type: 'iframe', src: 'https://www.spotify.com/' },
  { id: 'videoStore', name: 'Video Store', icon: '📽️', type: 'iframe', src: 'https://www.youtube.com/' },
  { id: 'photos', name: 'Photos', icon: '🖼️', type: 'iframe', src: 'https://photos.google.com/' },
  { id: 'docs', name: 'Docs', icon: '📄', type: 'iframe', src: 'https://docs.google.com/' },
  { id: 'sheets', name: 'Sheets', icon: '📊', type: 'iframe', src: 'https://sheets.google.com/' },
  { id: 'slides', name: 'Slides', icon: '📽️', type: 'iframe', src: 'https://slides.google.com/' },
  { id: 'tasks', name: 'Tasks', icon: '✅', type: 'iframe', src: 'https://tasks.google.com/' },
  { id: 'notes', name: 'Notes', icon: '🗒️', type: 'iframe', src: 'https://keep.google.com/' },
  { id: 'contacts', name: 'Contacts', icon: '👥', type: 'iframe', src: 'https://contacts.google.com/' },
  { id: 'terminal', name: 'Terminal', icon: '💻', type: 'iframe', src: 'https://www.tutorialspoint.com/execute_bash_online.php' },
  { id: 'explorer', name: 'Explorer', icon: '📁', type: 'iframe', src: 'https://www.google.com/drive/' },
  { id: 'store', name: 'Store', icon: '🛒', type: 'iframe', src: 'https://www.microsoft.com/store' },
  { id: 'news', name: 'News', icon: '📰', type: 'iframe', src: 'https://news.google.com/' },
  { id: 'sports', name: 'Sports', icon: '🏀', type: 'iframe', src: 'https://www.espn.com/' },
  { id: 'finance', name: 'Finance', icon: '💰', type: 'iframe', src: 'https://www.bloomberg.com/' },
  { id: 'photoshop', name: 'Photoshop', icon: '🖌️', type: 'iframe', src: 'https://www.photopea.com/' },
  { id: 'aiWriter', name: 'AI Writer', icon: '🤖', type: 'iframe', src: 'https://chat.openai.com/' },
  { id: 'translator', name: 'Translator', icon: '🌎', type: 'iframe', src: 'https://translate.google.com/' },
  { id: 'dictionary', name: 'Dictionary', icon: '📖', type: 'iframe', src: 'https://www.dictionary.com/' },
  { id: 'calculatorPro', name: 'Calculator Pro', icon: '🧮', type: 'iframe', src: 'https://www.desmos.com/scientific' },
  { id: 'videoEditor', name: 'Video Editor', icon: '✂️', type: 'iframe', src: 'https://www.wevideo.com/' },
  { id: 'musicEditor', name: 'Music Editor', icon: '🎹', type: 'iframe', src: 'https://www.soundtrap.com/' },
  { id: 'pdfReader', name: 'PDF Reader', icon: '📕', type: 'iframe', src: 'https://www.adobe.com/acrobat/online/pdf-reader.html' },
  { id: 'scanner', name: 'Scanner', icon: '📠', type: 'iframe', src: 'https://www.onlineocr.net/' },
  { id: 'weatherPro', name: 'Weather Pro', icon: '⛅', type: 'iframe', src: 'https://www.accuweather.com/' },
  { id: 'translatorPro', name: 'Translator Pro', icon: '🈯', type: 'iframe', src: 'https://www.deepl.com/translator' },
  { id: 'emailPro', name: 'Email Pro', icon: '📧', type: 'iframe', src: 'https://outlook.live.com/' },
  { id: 'taskManager', name: 'Task Manager', icon: '📋', type: 'iframe', src: 'https://todo.microsoft.com/tasks/' },
  { id: 'alarm', name: 'Alarm', icon: '⏱️', type: 'iframe', src: 'https://timer.onlineclock.net/' },
  { id: 'recipes', name: 'Recipes', icon: '🍲', type: 'iframe', src: 'https://www.allrecipes.com/' },
  { id: 'books', name: 'Books', icon: '📚', type: 'iframe', src: 'https://books.google.com/' },
  { id: 'movies', name: 'Movies', icon: '🎥', type: 'iframe', src: 'https://www.imdb.com/' },
  { id: 'games', name: 'Games', icon: '🎮', type: 'iframe', src: 'https://www.miniclip.com/games/en/' },
  { id: 'stocks', name: 'Stocks', icon: '📈', type: 'iframe', src: 'https://www.nasdaq.com/' },
  { id: 'crypto', name: 'Crypto', icon: '₿', type: 'iframe', src: 'https://www.coinbase.com/' },
  { id: 'gallery', name: 'Gallery', icon: '🖼️', type: 'iframe', src: 'https://www.flickr.com/' },
  { id: 'chat', name: 'Chat', icon: '💬', type: 'iframe', src: 'https://web.whatsapp.com/' },
  { id: 'social', name: 'Social', icon: '👤', type: 'iframe', src: 'https://www.facebook.com/' }
];

  ];

  let openWindows = {};

  function openApp(app) {
    openWindows = { ...openWindows, [app.id]: true };
  }

  function closeWindow(id) {
    openWindows = { ...openWindows, [id]: false };
  }

  // Draggable logic
  let dragging = null;
  let offsetX = 0;
  let offsetY = 0;

  function startDrag(e, id) {
    dragging = id;
    offsetX = e.clientX - document.getElementById(id).offsetLeft;
    offsetY = e.clientY - document.getElementById(id).offsetTop;
  }

  function drag(e) {
    if (dragging) {
      const win = document.getElementById(dragging);
      win.style.left = e.clientX - offsetX + 'px';
      win.style.top = e.clientY - offsetY + 'px';
    }
  }

  function stopDrag() {
    dragging = null;
  }
</script>

<div class="taskbar">
  <div class="start-button" on:click={() => startMenuVisible = !startMenuVisible}></div>
</div>

{#if startMenuVisible}
<div class="start-menu">
  {#each apps as app}
    <div class="app" on:click={() => openApp(app)}>
      <img src={app.icon} alt={app.name} />
      <span>{app.name}</span>
    </div>
  {/each}
</div>
{/if}

{#each apps as app}
  {#if openWindows[app.id]}
    <div class="window" id={app.id} on:mousedown={e => startDrag(e, app.id)}>
      <div class="window-header">
        <span>{app.name}</span>
        <div class="buttons">
          <div class="minimize"></div>
          <div class="maximize"></div>
          <div class="close" on:click={() => closeWindow(app.id)}></div>
        </div>
      </div>
      <div class="window-content">
        {#if app.type === 'audio'}
          <audio controls>
            <source src={app.src} type="audio/mpeg" />
          </audio>
        {:else if app.type === 'video'}
          <video controls>
            <source src={app.src} type="video/mp4" />
          </video>
        {:else if app.type === 'iframe'}
          <iframe src={app.src} allowfullscreen></iframe>
        {/if}
      </div>
    </div>
  {/if}
{/each}

<svelte:window on:mousemove={drag} on:mouseup={stopDrag} />
