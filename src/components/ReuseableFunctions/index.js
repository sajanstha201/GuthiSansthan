// import axios from "axios";
import i18next from "i18next";
// import { showAlert } from "../AlertLoader";

export function addLanguage({ key, lngs }) {
    Object.entries(lngs).forEach(([k, value]) => {
        if (typeof value !== 'undefined'&&value!=='') {
            i18next.addResource(k, 'translation', key, value);
        }
    });
}
// export function fetchGifToURL(url){
//     return new Promise(async (resolve, reject) => {
//         try {
//             const response = await axios.get(url, { responseType: 'arraybuffer' });
//             const blobImage = new Blob([response.data], { type: 'image/gif' });
//             const imageUrl = URL.createObjectURL(blobImage);
//             resolve(imageUrl);
//         } catch (error) {
//             console.error('Error fetching image:', error);
//             reject(error); 
//         }
//     }); 
// }
// export function fetchImageToURL(url) {
//     return new Promise(async (resolve, reject) => {
//         try {
//             const response = await axios.get(url, { responseType: 'arraybuffer' });
//             const blobImage = new Blob([response.data], { type: 'application/octet-stream' });
//             const imageUrl = URL.createObjectURL(blobImage);
//             resolve(imageUrl);
//         } catch (error) {
//             console.error('Error fetching image:', error);
//             reject(error); 
//         }
//     });
// }
// export function fetchBgVideoToUrl(url){
//     return new Promise(async (resolve, reject) => {
//         try {
//             const response = await axios.get(url, { responseType: 'arraybuffer' });
//             const blobImage = new Blob([response.data], { type: 'video/mp4' });
//             const imageUrl = URL.createObjectURL(blobImage);
//             resolve(imageUrl);
//         } catch (error) {
//             console.error('Error fetching image:', error);
//             reject(error); 
//         }
//     });
// }
// export function convertBinaryToURL({imageBinaryData}){
// }