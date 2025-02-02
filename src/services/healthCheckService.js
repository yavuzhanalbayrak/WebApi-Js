import personRepository from "../repositories/personRepository.js";

export async function healthCheck(userData) {
    let response = await personRepository.getAllPersons();
    return response;
}