import Animal from "../models/animal.model.js";

async function createAnimal(animal) {
  try {
    return await Animal.create(animal);
  } catch (err) {
    throw err;
  }
}

async function getAnimals() {
  try {
    return await Animal.findAll();
  } catch (err) {
    throw err;
  }
}

async function getAnimalsByOwner(owner_id) {
  try {
    return await Animal.findAll({
      where: {
        ownerId: owner_id
      }
    });
  } catch (err) {
    throw err;
  }
}

async function getAnimal(id) {
  try {
    return await Animal.findByPk(id);
  } catch (err) {
    throw err;
  }
}

async function updateAnimal(animal, id) {
  try {
    await Animal.update(animal, {
      where: {
        id: id
      }
    });
    return await getAnimal(id);
  } catch (err) {
    throw err;
  }
}

async function deleteAnimal(id) {
  try {
    return await Animal.destroy({
      where: {
        id: id
      }
    });
  } catch (err) {
    throw err;
  }
}

export default {
  createAnimal,
  getAnimals,
  getAnimal,
  updateAnimal,
  deleteAnimal,
  getAnimalsByOwner,
};
