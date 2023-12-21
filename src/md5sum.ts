import { PathOrFileDescriptor } from 'node:fs';
import { createHash } from 'node:crypto'
import { readFileSync, readdir } from 'node:fs';

const md5sum = (filePath: PathOrFileDescriptor) => {
    const data = readFileSync(filePath);
    return createHash('md5').update(data).digest('hex');
}

export const compareNewImageToAllDownloaded = (targetImagePath: PathOrFileDescriptor) => {
    const targetImageHash = md5sum(targetImagePath);
    const downloadsFolderPath = './downloads'

    // Get a list of files in the downloads folder
    readdir(downloadsFolderPath, (error, files) => {
        if (error) {
            console.error(error);
            return;
        }

        // Loop through each file in the folder
        for (const file of files) {
            const filePath = `${downloadsFolderPath}/${file}`;

            // Check if the file is an image (you can add more image file extensions if needed)
            if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
                // Calculate the MD5 hash of the current image in the folder
                const currentImageHash = md5sum(filePath);

                // Compare the MD5 hashes
                if (targetImageHash === currentImageHash) {
                    console.log(`Image match: ${file}`);
                } else {
                    console.log(`Image do not match: ${file}`);
                }
            }
        }
    });
}