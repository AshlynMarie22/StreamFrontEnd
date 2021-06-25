import ky from "ky";

const baseURL = "http://localhost:8143";

const api = {
  /**
   * Get all recipes.
   * @param {string} [path = 'recipes] - API path
   * @returns {Promise} Promise object represents array of recipes
   */
  index(path = "user") {
    return ky.get(`${baseURL}/${path}`).json();
  },

  show(id, path = "user") {
    return ky.get(`${baseURL}/${path}/${id}`).json();
  },

  update(payload, path = "user") {
    return ky.put(`${baseURL}/${path}`, { json: payload });
  },

  create(payload, path = "user") {
    return ky.post(`${baseURL}/${path}`, { json: payload }).json();
  },

  delete(id, path = "user") {
    return ky.delete(`${baseURL}/${path}/${id}`);
  },
};

export default api;