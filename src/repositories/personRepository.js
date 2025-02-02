import Person from "../models/person.js";

class PersonRepository {
  async getAllPersons() {
      const persons = await Person.find();
      return persons;
  }
}

export default new PersonRepository();
