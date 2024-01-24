import get from './Getter';
import AllCriteres from '../models/AllCriteres';
import Annonce from '../models/Annonce';
export default function getEtatAnnonce(annonce : Annonce) {
    // non valide 
    if(annonce.etats.length === 0) return 1;
    
    //valide non vendue
    const hasEtatWithType10 = annonce.etats.some((etat) => etat.typeEtat === 10);
    if(hasEtatWithType10) return 10;

    //valide et vendue
    const hasEtatWithType100 = annonce.etats.some((etat) => etat.typeEtat === 100);
    if(hasEtatWithType100) return 100;

}