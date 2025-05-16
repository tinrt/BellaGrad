const express = require('express');
const path = require('path');

const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Explicit image list from your folder
const images = [
  "/images/20220518154718_IMG_5042.jpg",
  "/images/baby-goat.jpg",
  "/images/blog_goaT-1024x571.jpg",
  "/images/goat_right_aligned.jpg",
  "/images/Goat-face-close-up.jpg",
  "/images/Hausziege_04.jpg",
  "/images/images (1).jpg",
  "/images/images (2).jpg",
  "/images/images (3).jpg",
  "/images/images.jpg"
];

app.get('/', (req, res) => {
  res.render('index', { images });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
