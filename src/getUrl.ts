const accessKey = process.env.UNSPLASH_ACCESS_KEY

/**
 * 
 * @param {string} url 
 * @returns Promise<Response>
 */
const _fetch = async (url: string | URL | Request) => {
    return fetch(url, {
        headers: {
            'Authorization': `Client-ID ${accessKey}`
        }
    })
}

/**
 * 
 * @param {string} url 
 * @returns Promise<any>
 */
export const getUrl = async <T>(url: string): Promise<T> => {
    const response = await _fetch(url)

    if (!response.ok) {
        throw new Error(await response.text())
    }
    const json = response.json() as T
    return json
}

/**
 * @param {string} url 
 * @returns Promise<Response>
 */
export const getStream = async (url: string): Promise<Response> => {
    const response = await _fetch(url)
    
    if (!response.ok) {
        throw new Error(await response.text())
    }

    return response
}