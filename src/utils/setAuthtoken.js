import axios from 'axios'

const setAuthToken = token => {
 // console.log("setAuthToken",token);
 if (token) {
   axios.defaults.headers.common['Authorization'] = "Bearer " + token;
 } else {
   delete axios.defaults.headers.common['Authorization'];
 }
};

export default setAuthToken;
