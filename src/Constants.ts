export enum IMAGE_TYPES {
    DOG
}

export type NestedArrayEl = string | string[];

export type NestedMessage = {
    [key: string]: string[];
}

export interface DogApiResponse {
    message: string | NestedMessage;
    status: 'success' | 'failure';
}
