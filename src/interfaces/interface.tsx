export interface Professor {
    id: number;
    firstName: string;
    lastName: string;
    title: string;
    category: string;
    department: string;
    imagePath: string;
    courseThemes: string[];
    biography?:string;
    reservationLink?:string;
}