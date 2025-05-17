const express = require('express');
const path = require('path');

const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const images = [
  "/images/DSC01516.jpg",
  "/images/DSC01529.jpg",
  "/images/DSC01583.jpg",
  "/images/DSC01610.jpg",
  "/images/DSC01614.jpg",
  "/images/DSC01635.jpg",
  "/images/DSC01728.jpg",
  "/images/DSC01743.jpg",
  "/images/DSC01766.jpg",
  "/images/DSC01826.jpg",
  "/images/DSC01624.jpg"
];

app.get('/', (req, res) => {
  res.render('index', { images });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
