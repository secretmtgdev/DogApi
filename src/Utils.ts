import { IMAGE_TYPES, RandomDogResponse } from "./Constants";

const DOG_ENDPOINTS = {
    RANDOM_DOG: 'https://dog.ceo/api/breeds/image/random'
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
        .then((content: RandomDogResponse) => {
            console.log(content);
            if (content.status === 'success') {
                return content.message
            } else {
                return '';
            }
        });
    return dogImageRef;
}

