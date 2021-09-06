
import api from './api'
const ApiService = {
    
    // setHeader() {
    //     api.defaults.headers.common[
    //       "Authorization"
    //     ] = `Token ${JwtService.getToken()}`;
    // },
    query(resource, params) {
      
        return api.get(resource, params).catch(error => {
          throw new Error(`[RWV] ApiService ${error}`);
        });
    },
    
    get(resource, slug = "") {
        return api.get(`${resource}/${slug}`).catch(error => {
          throw new Error(`[RWV] ApiService ${error}`);
        });
    },   
    post(resource, params) {
        return api.post(`${resource}`, params);
    },
    update(resource, slug, params) {
        return api.put(`${resource}/${slug}`, params);
    },
    put(resource, params) {
        return api.put(`${resource}`, params);
    },
    
    delete(resource) {
        return api.delete(resource).catch(error => {
          throw new Error(`[RWV] ApiService ${error}`);
        });
    }
}

export default ApiService;


export const InboxService = {
    query(page, params) {
      return ApiService.query("inbox", {
        params: params
      });
    },
    get(slug) {
      return ApiService.get("inbox", slug);
    },
    create(params) {
      return ApiService.post("inbox", { article: params });
    },
    update(slug, params) {
      return ApiService.update("inbox", slug, { article: params });
    },
    destroy(slug) {
      return ApiService.delete(`inbox/${slug}`);
    }
  };