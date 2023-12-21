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
export const getUrl = async (url: string) => {
    const response = await _fetch(url)

    if (!response.ok) {
        throw new Error(await response.text())
    }
    return response.json()
}

/**
 * @param {string} url 
 * @returns Promise<Response>
 */
export const getStream = async (url: any) => {
    const response = await _fetch(url)
    
    if (!response.ok) {
        throw new Error(await response.text())
    }

    return response
}