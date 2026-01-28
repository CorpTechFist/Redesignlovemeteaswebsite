const fs = require('fs');
const path = require('path');
const https = require('https');

const images = [
  // Herbal Teas
  {
    url: 'https://images.unsplash.com/photo-1659200735264-955ed8519cd6?q=80&w=1080',
    out: 'src/assets/products/herbal-teas/anxiety-buster.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1733287041570-0d28af17bf83?q=80&w=1080',
    out: 'src/assets/products/herbal-teas/bp-reducer.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1733287041570-0d28af17bf83?q=80&w=1080',
    out: 'src/assets/products/herbal-teas/cold-cough-crusher.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1733287041570-0d28af17bf83?q=80&w=1080',
    out: 'src/assets/products/herbal-teas/sleep-sound.jpg',
  },

  // Essential Oils
  {
    url: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1080',
    out: 'src/assets/products/essential-oils/bergamot-lavender.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1080',
    out: 'src/assets/products/essential-oils/eucalyptus.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1080',
    out: 'src/assets/products/essential-oils/cbd-tincture.jpg',
  },

  // Beeswax Candles
  {
    url: 'https://images.unsplash.com/photo-1610858631039-61b9fd88cf22?q=80&w=1080',
    out: 'src/assets/products/beeswax-candles/beeswax-candle.jpg',
  },

  // Bath & Body
  {
    url: 'https://images.unsplash.com/photo-1730378616989-499041edc37a?q=80&w=1080',
    out: 'src/assets/products/bath-body/body-butter.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1080',
    out: 'src/assets/products/bath-body/bath-salts.jpg',
  },
];

console.log('Downloading product images to src/assets/products/...');

images.forEach(({ url, out }) => {
  const dir = path.dirname(out);
  fs.mkdirSync(dir, { recursive: true });

  https.get(url, (res) => {
    const file = fs.createWriteStream(out);
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Saved: ${out}`);
    });
  }).on('error', (err) => {
    console.error(`Failed to download ${url}`, err.message);
  });
});