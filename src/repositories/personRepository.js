import Person from "../models/person.js";

class PersonRepository {
  async getAllPersons() {
    return await Person.find()
      .then((persons) => {
        return persons;
      })
      .catch((error) => {
        throw new Error("Veri çekme hatası: " + error.message);
      });
  }
}

export default new PersonRepository();
