import app from "./server/index.js";

async function main() {
  try {
    app.listen(app.settings.port);
    console.log(`Server running ➜ PORT: ${app.settings.port}`);
  } catch (err) {
    console.log(err);
  }
}

main();
