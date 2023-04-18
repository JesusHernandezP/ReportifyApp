import { apiURL } from "../config"

async function httpService({ url, method = 'GET', token = null, body = null }) {
    if (!url.startsWith('/')) throw new Error('URL Must Start With a Slash (/)')

    const fullURL = new URL(apiURL + url)
    const config = {
    method,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    }

    if (token) {
    config.headers.Authorization = `Bearer ${token}`
    }

    if (body) {
    config.body = JSON.stringify(body)
    }

    try {
    const response = await fetch(fullURL.href, config)
    const data = await response.json()
      // if (!response.ok) throw new Error(data.error)

    return { data, loading: false, error: data.error || null }

    } catch (error) {
    return { data: null, loading: false, error }
    }
}

export default httpService