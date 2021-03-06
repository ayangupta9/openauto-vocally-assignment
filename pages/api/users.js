import clientPromise from '../../utils/connect.db'

export default async function handler (req, res) {
  const client = await clientPromise
  const db = client.db('openauto-db')

  if (req.method === 'POST') {
    let bodyObject = req.body
    try {
      const newUser = await db.collection('userinfo').insertOne(bodyObject)
      res.status(200).json({
        message: `Thanks for registering, ${req.body.name}.`
      })
    } catch (e) {
      console.error(e)
      res.status(500).json({
        error: e,
        message: 'Some error occured. Data could not be registered.'
      })
    }
  }
}
