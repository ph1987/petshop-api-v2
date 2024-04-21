import Owner from "../models/owner.model.js";

async function createOwner(owner) {
  try {
    return await Owner.create(owner);
  } catch (err) {
    throw err;
  }
}

async function getOwners() {
  try {
    return await Owner.findAll();
  } catch (err) {
    throw err;
  }
}

async function getOwner(id) {
  try {
    const owner = await Owner.findByPk(id);
    return owner;
  } catch (err) {
    throw err;
  }
}

async function updateOwner(owner, id) {
  try {
    await Owner.update(owner, {
      where: {
        id: id
      }
    });
    return await getOwner(id);
  } catch (err) {
    throw err;
  }
}

async function deleteOwner(id) {
  try {
    return await Owner.destroy({
      where: {
        id: id
      }
    });
  } catch (err) {
    throw err;
  }
}

export default {
  createOwner,
  getOwners,
  getOwner,
  updateOwner,
  deleteOwner,
};
