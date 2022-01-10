import { downloadTestFiles } from './download';
require('dotenv').config()

downloadTestFiles()
.then(list => console.log(list))
.catch(err => console.log(err))