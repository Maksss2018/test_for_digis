/* eslint-disable no-console */
const jsonServer = require("json-server")
const server = jsonServer.create()
const path = require("path")
const router = jsonServer.router(path.join(__dirname, "db.json"))

const middlewares = jsonServer.defaults()
server.use(middlewares)
server.use(jsonServer.bodyParser)

server.use(function(req, res, next) {
  setTimeout(next, 0)
})

server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now()
  }
  next()
})
server.get("/usersMarks", function(req, res, next) {
  const error = validate(req.body)
  console.log(` !!!!req = ${JSON.stringify(req)}`);
  if (error) {
    res.status(400).send(error)
  } else {
    req.body.id = req.body.token
    next()
  }

})
server.use(router)

const port = 3001
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`)
})

function createSlug(value) {
  return value
    .replace(/[^a-z0-9_]+/gi, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase()
}

function validate({token}) {
  if (!token) return "token unset"
  return ""
}
