import { downloadTestFiles } from './download';
import { BlobServiceClient } from '@azure/storage-blob';

jest.mock('@azure/storage-blob');

describe('Download test files', () => {

    beforeEach(async () => {
        jest.resetAllMocks();
        /*
        process.env = Object.assign(process.env, {
          ...config.Values
        });
        */
        
      });
    it('succeeds to download test files', async () => {

        const list = await  downloadTestFiles();

        expect(list.length).toBeGreaterThan(0);
    });
});