import ky from 'ky';

const baseURL = 'http://localhost:8143/meetup';

export const index = ({ type, value }) =>
  ky.get(`${baseURL}/${type}/${value}`).json();

/**
 * Update a meetup
 * @param {Object} payload - customer
 * @return
 */
export const update = payload => ky.put(`${baseURL}`, { json: payload });

export const add = payload => ky.post(`${baseURL}`, { json: payload });

export const deleteMeetup = id => ky.delete(`${baseURL}/${id}`);
