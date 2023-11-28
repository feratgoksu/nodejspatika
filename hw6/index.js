const Koa = require('koa');
const app = new Koa();

const port = 3000;

// Ana sayfa
app.use((ctx, next) => {
  if (ctx.path === '/') {
    ctx.body = '<h1>Hoşgeldiniz xxx sayfasına!</h1>';
  } else {
    next();
  }
});

// Hakkında sayfası
app.use((ctx, next) => {
  if (ctx.path === '/about') {
    ctx.body = '<h1>Hoşgeldiniz about sayfasına!</h1>';
  } else {
    next();
  }
});

// İletişim sayfası
app.use((ctx, next) => {
  if (ctx.path === '/contact') {
    ctx.body = '<h1>Hoşgeldiniz contact sayfasına!</h1>';
  } else {
    next();
  }
});

app.listen(port, () => {
  console.log(`Server http://localhost:${port} adresinde çalışıyor.`);
});
