// Scripts
const log =  console.log;
log("Usando Scripts...")
log(process.env.EMAIL);
log(process.env.PASSWORD);

log("Hello")

/*
Usando os scripts do package.json

"scripts": {
    "start": "node --env-file .env src/index.js",
    "watch": "node --watch --env-file .env src/index.js"
}

*/