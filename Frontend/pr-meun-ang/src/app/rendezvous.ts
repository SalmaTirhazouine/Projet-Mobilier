export class RendezVous {
    id!: number;
    nomClient!: string;
    numeroTelephone!: string;
    date!: string; // LocalDate peut être représenté par une chaîne de caractères (format ISO) en TypeScript
    heure!: string; // LocalTime peut également être représenté par une chaîne de caractères (format ISO)
    message!: string;
    isValidated: boolean = false;
}
