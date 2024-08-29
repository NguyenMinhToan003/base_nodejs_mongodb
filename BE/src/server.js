import express from 'express'
const app = express()

const hostname = 'localhost'
const port = 4001


app.listen(port, hostname, () => {
  // eslint-disable-next-line no-console
  console.log(`Hello Trung Quan Dev, I am running at ${hostname}:${port}/`)
})
