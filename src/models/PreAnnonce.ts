export default interface Annonce {
    idUtilisateur : string;
    idMarque : string;
    idModele : string;
    idCategorie : string;
    idTypeOccasion : string;
    idCouleur : string;
    prix : number;
    photo1 : File | null;
    photo2 : File | null;
    photo3 : File | null;
    photo4 : File | null;
    description : string;
}