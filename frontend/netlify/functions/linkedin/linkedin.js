import googleIt from 'google-it'

export const handler = async (event) => {
  try {
    query = JSON.parse(event.body).query

    return googleIt({'query': `site:linkedin.com/in intitle:"${query}"`}).then(results => {
      return {
        statusCode: 200,
        body: JSON.stringify({ users: results }),
      }
    }).catch(e => {
      console.log("error")
    })
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}
