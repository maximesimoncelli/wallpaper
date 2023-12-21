import { createWriteStream, existsSync } from 'node:fs'
import { Readable, finished } from 'node:stream';
import { getStream } from './getUrl.js';
import { writeFile, mkdir } from 'node:fs/promises';
import { compareNewImageToAllDownloaded } from './md5sum.js';

/**
 * 
 * @param {string} url 
 * @param {string} path 
 * @returns boolean
 */
export const download = async (url, path) => {
    const imagePath = './downloads/' + path + '.jpg'
    if (!existsSync('./downloads')) await mkdir('./downloads')
    if (existsSync(imagePath)) return false

    const response = await getStream(url);
    const buffer = Buffer.from(await response.arrayBuffer())
    await writeFile(imagePath, buffer)
    
    // compareNewImageToAllDownloaded(imagePath)

    return true
}
