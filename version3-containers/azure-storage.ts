import { BlobServiceClient } from '@azure/storage-blob';
import { promises as fs } from 'fs';
import { dirname, join } from 'path';

export async function download(
  connectionstring: string,
  containername: string,
  localFilePath: string) {
  const serviceClient = await BlobServiceClient.fromConnectionString(
    connectionstring
  );

  // Create container if necessary
  const containerClient = await serviceClient.getContainerClient(containername);

  let fileList = [];

  // Download all
  for await (const blob of containerClient.listBlobsFlat()) {

    // skip subdirectories
    if (blob.name.includes('/')) {
      continue;
    }

    // construct local path
    const localDestination = join(__dirname, localFilePath, blob.name);
    fileList.push({from: blob.name, to: localDestination});

    // create path if is doesn't exist
    await fs.mkdir(dirname(localDestination), { recursive: true });

    // get file handle
    const blockClient = await containerClient.getBlockBlobClient(blob.name);

    // download file
    await blockClient.downloadToFile(localDestination);
  }
  return fileList;
}