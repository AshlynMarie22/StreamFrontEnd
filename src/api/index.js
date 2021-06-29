import ky from 'ky';

const baseURL = 'http://localhost:8080/meetup';

// export const index = ({ value }) => ky.get(`${baseURL}/${value}`).json();
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
