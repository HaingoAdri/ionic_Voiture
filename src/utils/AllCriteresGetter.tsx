import get from './Getter';
import AllCriteres from '../models/AllCriteres';
export default async function getAllCriteres(baseUrl : string,token : string) {
    const data_marques = await get(`${baseUrl}/marques`, token);
    const data_categories = await get(`${baseUrl}/categories`, token);
    const data_modeles = await get(`${baseUrl}/modeles`, token);
    const data_typeOccasions = await get(`${baseUrl}/type-occasions`, token);
    const data_couleurs = await get(`${baseUrl}/couleurs`, token);
    const allCritere : AllCriteres = {
        marques : data_marques.donnee, 
        categories : data_categories.donnee,
        modeles : data_modeles.donnee,
        typeOccasions : data_typeOccasions.donnee,
        couleurs : data_couleurs.donnee
    };
    return allCritere;
}