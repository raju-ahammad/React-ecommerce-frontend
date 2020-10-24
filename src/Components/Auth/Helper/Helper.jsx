import { API } from "../../../Api";


export const signUp = (user) => {
    return fetch(`${API}user/`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(user),
    })
    .then((response)=> {
        return response.json()
    })
    .catch((err) => console.log(err));
}