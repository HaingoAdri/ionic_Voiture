import axios from 'axios';
import PreAnnonce from '../models/PreAnnonce';

export async function uploadToImgServer(key : string, image : File | null, url : string) {
    try {
        if (!image) {
          console.error('Veuillez sélectionner une photo');
          return;
        }
    
        // Créez un objet FormData pour inclure le fichier
        const formData = new FormData();
        formData.append('key', key); // Remplacez par votre clé API
        formData.append('image', image);
    
        // Envoyez la requête POST vers l'API ImgBB
        const response = await axios.post('https://api.imgbb.com/1/upload', formData);
    
        // La réponse contient les détails de l'image téléchargée
        // console.log('Réponse ImgBB:', response.data);
        return response.data;
      } catch (error) {
        console.error('Erreur lors de l\'envoi de la photo:', error);
      }
}

export default async function uploadImagesToServer(preAnnonce : PreAnnonce, apiKey :string, urlUpload : string) {
    const response1 = await uploadToImgServer(
      apiKey,
      preAnnonce.photo1,
      urlUpload
    );
    console.log("photo1 upload success " + response1.data.url);
    const response2 = await uploadToImgServer(
      apiKey,
      preAnnonce.photo2,
      urlUpload
    );
    console.log("photo2 upload success " + response2.data.url);
    const response3 = await uploadToImgServer(
      apiKey,
      preAnnonce.photo3,
      urlUpload
    );
    console.log("photo3 upload success " + response3.data.url);
    const response4 = await uploadToImgServer(
      apiKey,
      preAnnonce.photo4,
      urlUpload
    );
    console.log("photo4 upload success " + response4.data.url);
    return { urlPhoto1 : response1.data.url, urlPhoto2 : response2.data.url, urlPhoto3 : response3.data.url, urlPhoto4 : response4.data.url };
}