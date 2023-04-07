import axios from 'axios';
// import * as Get from '~/firebase';
const httpRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  // headers: {
  //   'content-type': 'application/json',
  // },
});

// httpRequest.interceptors.request.use(async (config) => {
//   const currentUser = Get.auth.currentUser;
//   if (currentUser) {
//     const token = await currentUser.getIdToken();
//     config.headers.Authorization = `Bearer ${token}`;
//   }
// });

export const get = async (path, options = {}) => {
  const res = await httpRequest.get(path, options);
  return res.data;
};

export default httpRequest;
