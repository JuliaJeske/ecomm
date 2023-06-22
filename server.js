import app from "./src/app.js";

// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('server running ✨🚀')
})