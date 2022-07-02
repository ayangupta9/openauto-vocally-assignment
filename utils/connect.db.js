const { MongoClient, ServerApiVersion } = require('mongodb')
const uri = process.env.MONGODB_URI

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1
}

let client
let clientPromise

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  console.log(uri)
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default clientPromise
