import personRepository from "../repositories/personRepository.js";
const mapPerson = ({ _id, firstName, lastName }) => ({
  _id,
  firstName,
  lastName,
});

export async function healthCheck() {
  let people = await personRepository.getAllPersons();

  return people.map(mapPerson);
}
