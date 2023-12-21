import { existsSync } from 'node:fs'
import { getStream } from './get-url.js';
import { writeFile, mkdir } from 'node:fs/promises';

export const download = async (url: string, path: string) => {
    const imagePath = './downloads/' + path + '.jpg'
    if (!existsSync('./downloads')) await mkdir('./downloads')
    if (existsSync(imagePath)) return false

    const response = await getStream(url);
    const buffer = Buffer.from(await response.arrayBuffer())
    await writeFile(imagePath, buffer)
    
    // TODO: compareNewImageToAllDownloaded(imagePath)

    return true
}
