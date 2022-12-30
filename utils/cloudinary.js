// Imports
import cloudinary from 'cloudinary'


// Configuration
const cloudinaryV = cloudinary.v2;
cloudinaryV.config({
    cloud_name:'jobook',
    api_key:'742411721618284',
    api_secret:'1RfZIjvJkjOaXpZw4tjdselHenM'
});


// Export
export default cloudinaryV;