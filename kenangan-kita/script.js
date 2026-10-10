// PERSONALISASI: edit teks dan nama file musik/foto sesuai kenangan kalian.
const screens = [...document.querySelectorAll('.screen')];
const showScreen = (id) => {
  screens.forEach(screen => screen.classList.toggle('active', screen.id === id));
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const hintText = document.getElementById('hintText');
document.getElementById('yesButton').addEventListener('click', () => showScreen('teaseScreen'));
document.getElementById('noButton').addEventListener('click', () => {
  hintText.textContent = 'hee jangan no donkk,aku cium bluno ni. coba pilih yesss ajah xixi♡';
  const btn = document.getElementById('noButton');
  btn.animate([{transform:'translateX(0)'},{transform:'translateX(-5px)'},{transform:'translateX(5px)'},{transform:'translateX(0)'}], {duration:260});
});
document.getElementById('continueButton').addEventListener('click', () => showScreen('musicScreen'));
document.getElementById('letterButton').addEventListener('click', () => showScreen('letterScreen'));
document.getElementById('memoriesButton').addEventListener('click', () => showScreen('memoriesScreen'));
document.getElementById('finalButton').addEventListener('click', () => showScreen('finalScreen'));
document.getElementById('restartButton').addEventListener('click', () => showScreen('welcomeScreen'));



const audioCandidates = ['lagu-kita.mp3', 'lagu-kita.mp3.mpeg'];
const audio = document.getElementById('backgroundMusic');
const musicButton = document.getElementById('musicButton');

let selectedAudioSource = null;

const tryLoadAudio = () => {
  for (const fileName of audioCandidates) {
    const candidate = `assets/${fileName}`;
    const testAudio = new Audio(candidate);
    testAudio.preload = 'metadata';
    testAudio.addEventListener('loadedmetadata', () => {
      selectedAudioSource = candidate;
      audio.src = candidate;
      audio.load();
    }, { once: true });
    testAudio.addEventListener('error', () => {
      if (fileName === audioCandidates[audioCandidates.length - 1]) {
        musicButton.textContent = '♪';
        musicButton.disabled = true;
      }
    }, { once: true });
    testAudio.load();

    if (selectedAudioSource) break;
  }
};

tryLoadAudio();

audio.loop = true;
audio.preload = 'metadata';

audio.addEventListener('play', () => {
  musicButton.textContent = 'Ⅱ';
});

audio.addEventListener('pause', () => {
  musicButton.textContent = '▶';
});

audio.addEventListener('error', () => {
  console.error('Audio gagal dimuat:', audio.error);
  musicButton.textContent = '♪';
  musicButton.disabled = true;
});

musicButton.addEventListener('click', async () => {
  try {
    if (!selectedAudioSource) {
      musicButton.textContent = '♪';
      return;
    }

    if (audio.paused) {
      await audio.play();
    } else {
      audio.pause();
    }
  } catch (error) {
    console.error('Musik gagal diputar:', error);
    musicButton.textContent = '♪';
  }
});



// Titik navigasi foto. Ganti jumlah foto di index.html sesuai kebutuhan.
const photoWindow = document.querySelector('.photo-window');
const photos = [...document.querySelectorAll('.memory-photo')];
const dots = document.getElementById('photoDots');
photos.forEach((photo, index) => {
  const dot = document.createElement('button');
  dot.className = `dot${index === 0 ? ' active' : ''}`;
  dot.type = 'button';
  dot.setAttribute('aria-label', `Lihat foto ${index + 1}`);
  dot.addEventListener('click', () => photo.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'}));
  dots.appendChild(dot);
});
if (photoWindow) {
  photoWindow.addEventListener('scroll', () => {
    const center = photoWindow.scrollLeft + photoWindow.clientWidth / 2;
    let nearest = 0, distance = Infinity;
    photos.forEach((photo, index) => {
      const photoCenter = photo.offsetLeft + photo.offsetWidth / 2;
      const d = Math.abs(center - photoCenter);
      if (d < distance) { distance = d; nearest = index; }
    });
    [...dots.children].forEach((dot, index) => dot.classList.toggle('active', index === nearest));
  }, {passive:true});
}
