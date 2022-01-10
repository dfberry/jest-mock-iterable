import { download } from './azure-storage';

export const downloadTestFiles = async() =>{
     
    console.log(process.env.AZURE_STORAGE_CONNECTION_STRING);
    console.log(process.env.AZURE_STORAGE_CONNECTION_STRING);

    // download test files before running tests
    return await download(
        process.env.AZURE_STORAGE_CONNECTION_STRING,
        process.env.AZURE_STORAGE_CONTAINER_NAME,
        './data'
    );

}