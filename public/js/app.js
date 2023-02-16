import advantages from "./advantagesComp";
import brand from "./brandComp";
import cart from "./cartComp";
import contacts from "./contComp";
import feedback from "./feedbackComp";
import myFilter from "./myFilterComp";
import products from "./productComp";
import sales from "./salesComp";

const app = {
  el: "#app",
  components: {
    cart,
    products,
    brand,
    advantages,
    contacts,
    feedback,
    sales,
    "my-filter": myFilter,
  },
  methods: {
    getJson(url) {
      return fetch(url)
        .then((result) => result.json())
        .catch((error) => {
          console.log(error);
        });
    },
    postJson(url, data) {
      return fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((result) => result.json())
        .catch((error) => {
          console.log(error);
        });
    },
    putJson(url, data) {
      return fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((result) => result.json())
        .catch((error) => {
          console.log(error);
        });
    },
    delJson(url, data) {
      return fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((result) => result.json())
        .catch((error) => console.log(error));
    },
    cleanJson(url, data) {
      return fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((result) => result.json())
        .catch((error) => console.log(error));
    },
  },
};

export default app;
