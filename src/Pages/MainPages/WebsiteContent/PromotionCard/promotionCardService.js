import axios from 'axios';

import { GENERALSETTINGS_API } from "../../../../Utils/Api";

import { getToken } from '../../../../Utils/auth';

const token = getToken()
const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`,
  'Content-Type': 'multipart/form-data',

};

export async function getItem() {
  const response = await axios.get(`${GENERALSETTINGS_API}/promotionCards`)
  return response.data
}

export async function addItem(formData) {
  const formDataObj = new FormData();
  formDataObj.append("category", formData.category);
  formDataObj.append('image', formData.image);
  formDataObj.append('link', formData.link);
  const response = await axios.post(`${GENERALSETTINGS_API}/promotionCards`, formDataObj, { headers })
  return response.data
}
export async function editItem(id, data) {
  const formDataObj = new FormData();

  if (data.image) {
    formDataObj.append('image', data.image);
  }

  formDataObj.append('link', data.link);
  formDataObj.append("category", data.category);

  const response = await axios.patch(`${GENERALSETTINGS_API}/promotionCards/${id}`, formDataObj, { headers });

  return response.data;
}
export async function deleteItem(id) {
  const response = await axios.delete(`${GENERALSETTINGS_API}/promotionCards/${id}`, { headers })
  return response.data
}
export async function getSingleItems(id) {
  const response = await axios.get(`${GENERALSETTINGS_API}/promotionCards/getSinglePromotionCard/${id}`);
  return response.data;
}
