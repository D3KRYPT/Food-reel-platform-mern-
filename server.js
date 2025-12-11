 const app = require('./src/app')
 const connectDb = require('./src/db/db')
 const port = 3000
connectDb();
 app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})