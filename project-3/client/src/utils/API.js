import axios from "axios";

export default {
    signUp: function (userData) {
        return axios.post("/", userData);
    },

    findAll: function (userData) {
        return axios.get("/admin", userData);
    }
}