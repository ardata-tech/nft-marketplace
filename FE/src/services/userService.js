import httpService from "./httpService";
import apiUrl from "../configs/api";

const userEndpoint = apiUrl + "user/";
const signinEndpoint = apiUrl + "signin/";
const signupEndpoint = apiUrl + "signup/";

export function getUserByAddress(address) {
    return httpService.get(userEndpoint + address, {validateStatus: false});
}

export function updateUser(user) {
    return httpService.post(`${userEndpoint}update/`, user);
}

export function signinUser(body) {
    return httpService.post(signinEndpoint, body);
}

export function signupUser(body) {
    return httpService.post(signupEndpoint, body);
}
