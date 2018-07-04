import fetch from 'node-fetch'

class Request {
  constructor () {
    this._baseUrl = 'http://www.recipepuppy.com/api/?q='
  }

  connection (
        method,
        data,
        headers
        ) {
    const customHeaders = headers || {'Accept': 'application/json', 'content-type': 'application/json', 'Connection': 'keep-alive', 'Access-Control-Allow-Origin': '*' }
    return fetch(`${this._baseUrl}${data}`, {
      method: method,
      headers: customHeaders,
    })
  }
}

export default new Request()
