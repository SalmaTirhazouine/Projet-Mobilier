
export class Produit {
    id!: number;
    nom!: string;
    description!: string;
    prix!: number;
    imageUrl!: string;
    categorie!: {
        id: number;
        nom: string;
    };
}