import { createWriteStream, existsSync, mkdir } from 'node:fs'
import { Readable, finished } from 'node:stream';
import { getStream } from './getUrl.mjs';
import { writeFile } from 'node:fs/promises';

/**
 * 
 * @param {string} url 
 * @param {string} path 
 * @returns boolean
 */
export const download = async (url, path) => {
    if (!existsSync('./downloads')) await mkdir('./downloads')
    if (existsSync('./downloads/' + path + '.jpg')) return false

    const response = await getStream(url);
    const buffer = Buffer.from(await response.arrayBuffer())
    await writeFile('./downloads/' + path + '.jpg', buffer)

    return true
}
