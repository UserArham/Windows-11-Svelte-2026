// Start menu toggle
const startBtn = document.getElementById('startBtn');
const startMenu = document.getElementById('startMenu');

startBtn.addEventListener('click', () => {
  startMenu.style.display = startMenu.style.display === 'flex' ? 'none' : 'flex';
});

// App windows
const apps = document.querySelectorAll('.app');
const windows = document.querySelectorAll('.window');

apps.forEach(app => {
  app.addEventListener('click', () => {
    const win = document.getElementById(app.dataset.app);
    if(win) {
      win.style.display = 'flex';
      win.style.zIndex = 600;
    }
  });
});

// Window buttons
windows.forEach(win => {
  const closeBtn = win.querySelector('.close');
  const minimizeBtn = win.querySelector('.minimize');
  const maximizeBtn = win.querySelector('.maximize');

  closeBtn.addEventListener('click', () => win.style.display = 'none');

  minimizeBtn.addEventListener('click', () => {
    win.style.display = 'none';
  });

  maximizeBtn.addEventListener('click', () => {
    if(win.dataset.maximized === 'true') {
      // Restore
      win.style.width = win.dataset.width;
      win.style.height = win.dataset.height;
      win.style.top = win.dataset.top;
      win.style.left = win.dataset.left;
      win.dataset.maximized = 'false';
    } else {
      // Save current position/size
      win.dataset.width = win.style.width;
      win.dataset.height = win.style.height;
      win.dataset.top = win.style.top;
      win.dataset.left = win.style.left;

      // Maximize
      win.style.top = '0px';
      win.style.left = '0px';
      win.style.width = window.innerWidth + 'px';
      win.style.height = (window.innerHeight - 48) + 'px'; // minus taskbar
      win.dataset.maximized = 'true';
    }
  });
});

// Draggable windows, working square
let activeWindow = null;
let offsetX = 0;
let offsetY = 0;

windows.forEach(win => {
  const header = win.querySelector('.window-header');
  header.addEventListener('mousedown', (e) => {
    activeWindow = win;
    offsetX = e.clientX - win.offsetLeft;
    offsetY = e.clientY - win.offsetTop;
    win.style.zIndex = 1000; // bring to front
  });
});

document.addEventListener('mousemove', (e) => {
  if(activeWindow) {
    activeWindow.style.left = (e.clientX - offsetX) + 'px';
    activeWindow.style.top = (e.clientY - offsetY) + 'px';
  }
});

document.addEventListener('mouseup', () => {
  activeWindow = null;
});

