
import {apiURL} from '../utils/baseUrl';



export async function findSuggestAdress(adress: string) {

    const response = await fetch(`${apiURL}/suggest?f=json&text=${adress}`);
    
    return response.json();
};



export async function findAddress(adress: string) {

    const response = await fetch(`${apiURL}/findAddressCandidates?SingleLine=${adress}&f=json`);
    return response.json();
};