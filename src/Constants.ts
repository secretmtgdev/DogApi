export enum IMAGE_TYPES {
    DOG
}

export interface RandomDogResponse {
    message: string;
    status: 'success' | 'failure';
}