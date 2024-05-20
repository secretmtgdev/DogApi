import { IMAGE_TYPES, DogApiResponse, NestedArrayEl, NestedMessage } from "./Constants";

const DOG_ENDPOINTS = {
    RANDOM_DOG: 'https://dog.ceo/api/breeds/image/random',
    ALL_BREEDS: 'https://dog.ceo/api/breeds/list/all'
}

export function getImageOf(imageType: IMAGE_TYPES): Promise<string> {
    if (imageType === IMAGE_TYPES.DOG) {
        return getRandomDog();
    } else {
        return new Promise((res, rej) => res(''));
    }
}

async function getRandomDog(): Promise<string>{
    let dogImageRef = await fetch(DOG_ENDPOINTS.RANDOM_DOG)
        .then(response => response.json())
        .then((content: DogApiResponse) => {
            if (content.status === 'success') {
                return content.message as string
            } else {
                return '';
            }
        });
    return dogImageRef;
}

export function GetAllDogs(): Promise<NestedArrayEl[]> {
    return getAllBreeds();
}

async function getAllBreeds(): Promise<NestedArrayEl[]> {
    let allBreeds = await fetch(DOG_ENDPOINTS.ALL_BREEDS)
        .then(response => response.json())
        .then((content: DogApiResponse) => {
            if (content.status === 'success') {
                const allBreeds: NestedArrayEl[] = [];
                for(const key in content.message as NestedMessage) {
                    allBreeds.push(key);
                    if ((content.message as NestedMessage)[key].length) {
                        allBreeds.push((content.message as NestedMessage)[key]);
                    }
                }
                return allBreeds;
            } else {
                return [''];
            }
    });
    return allBreeds;
}