const app = require("./app")
const connectDb = require('./config/connectDb');

const port = process.env.PORT || 5179;



app.listen(port, async() => {
  console.log(`Example app listening on port http://localhost:${port}`);
  await connectDb()
})