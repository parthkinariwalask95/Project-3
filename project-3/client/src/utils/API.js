import axios from "axios";

export default {
 // Gets all books
 getviewmatch: function() {
   return axios.get("/api/a/");
 },
 getInfoById: function(id) {
  return axios.get("/api/a/" + id);
},
};