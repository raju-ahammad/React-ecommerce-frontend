import { API } from "../../../Api";

export const getProducts = () => {
    return fetch(`${API}product/`, {method: "GET"})
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
}