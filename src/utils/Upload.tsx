import axios from 'axios';

export default async function uploadToImgServer(key : string, image : File | null, url : string) {
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