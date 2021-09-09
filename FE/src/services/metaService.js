import http from "./httpService";
import apiUrl from "../configs/api";

const apiEndpoint = apiUrl + "meta";

export function getMetaByTokenId(tokenID) {
    return http.get(`${apiEndpoint}/${tokenID}`);
}

export function getMetaForMany(tokenIDs) {
    return http.post(`${apiEndpoint}/many/`, tokenIDs);
}

export function saveMeta(meta) {
    return http.post(`${apiEndpoint}/`, meta);
}
