process.on("unhandledRejection" , (err,p) => {
    console.log(`Custom unhandledRejection ${err}`);
});

process.on("uncaughtException", (err) => {
    console.log(`Custom uncaughtException, ${err}`)
});

// Promise( resolve => JSON.pasre({ color: "blue" }));
// test();
throw "mi error";