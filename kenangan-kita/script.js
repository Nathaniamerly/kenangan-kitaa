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


// Nama file musik di dalam folder assets


const musicFile = 'lagu-kita.mp3.mpeg';
const audio = document.getElementById('backgroundMusic');
const musicButton = document.getElementById('musicButton');

audio.src = `assets/${musicFile}`;
audio.loop = true;
audio.autoplay = true;

// Ikon tombol mengikuti status musik
audio.addEventListener('play', () => {
  musicButton.textContent = 'Ⅱ';
});

audio.addEventListener('pause', () => {
  musicButton.textContent = '▶';
});

// Tombol untuk memutar atau menjeda musik
musicButton.addEventListener('click', async () => {
  try {
    if (audio.paused) {
      await audio.play();
    } else {
      audio.pause();
    }
  } catch (error) {
    alert('Musik belum bisa diputar. Cek nama dan lokasi file musiknya yaa ♡');
  }
});

// Coba putar musik otomatis saat halaman dibuka
window.addEventListener('load', async () => {
  try {
    await audio.play();
  } catch (error) {
    musicButton.textContent = '▶';
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
