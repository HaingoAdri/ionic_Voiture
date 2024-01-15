export default interface Annonce {
    idAnnonce: number,
    proprietaire: {
        idUtilisateur: number,
        email: string,
        motDePasse: string,
        isAdmin: number
    },
    categorie: {
        idCategorie: number,
        nomCategorie: string
    },
    modele: {
        idModele: number,
        nomModele: string
    },
    typeOccasion: {
        idTypeOccasion: number,
        nomTypeOccasion: string
    },
    couleur: {
        idCouleur: number,
        nomCouleur: string
    },
    marque: {
        idMarque: number,
        nomMarque: string
    },
    listePhotos: [
        {
            idPhoto: number,
            repertoire: string
        },
        {
            idPhoto: number,
            repertoire: string
        },
        {
            idPhoto: number,
            repertoire: string
        },
        {
            idPhoto: number,
            repertoire: string
        }
    ],
    prix: number,
    pourcentageCommission: number,
    description: string,
    etats: [
        {
            idEtatAnnonce: number,
            typeEtat: number,
            dateHeureEtat: string
        }
    ],
    etatAnnonce: number,
    dateHeureCreation: string,
    favoris: boolean
}