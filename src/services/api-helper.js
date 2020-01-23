import axios from 'axios';

const token = '$2a$10$53EeYqF/IuWDvJinfX40cu1a3r/WiFXxQvx2FNmGos1i.U01gOdLS';
const base = 'https://www.potterapi.com/v1/';

export const getAllCharacters = async () => {
  const res = await axios.get(`${base}characters/?key=${token}`)
  return res
}

export const getCharacterById = async (id) => {
  const res = await axios.get(`${base}characters/${id}&key=${token}`)
  return res
}

export const getCharacterByName = async (name) => {
  const res = await axios.get(`${base}characters/?name=${name}&key=${token}`)
  return res
}