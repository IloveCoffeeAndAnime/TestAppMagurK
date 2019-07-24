const API_URL = 'https://api.unsplash.com/photos/';
const CLIENT_ID = 'd37765656d486dbcaae5d38abbfd4291d8ba282f0cbdac7752ecfc4c4bcd7fcb';

export function getUnsplashUrl(){
    return API_URL+'?client_id='+CLIENT_ID;
}