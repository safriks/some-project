require("dotenv").config({"/../.env" });

const app = require("./app.js")


const port = process.env.PORT;
app.listen(port, () => {
  console.log(`food donation api API live! listeneing on port ${port}.....`);
});
