import { setWallpaper } from 'wallpaper'
import { nanoid } from 'nanoid'
import { download } from './download.mjs';
import { getUrl } from './getUrl.mjs';
import { resolve } from 'node:path'
import { exit } from 'node:process';

try {
    const fileName = nanoid()
    const imageUrl = await getUrl('https://api.unsplash.com/photos/random?query="nature fog"&orientation=landscape');
    const hasWorked = await download(imageUrl.urls.raw, fileName);

    if (!hasWorked) {
        console.log('The file already exists ...')
        exit(0)
    }

    await setWallpaper(`./downloads/${fileName}.jpg`);
    console.log('File has been written in ' + resolve('downloads', fileName + '.jpg',))
    exit(0)

} catch (error) {
    console.error(error)
    exit(1)
}