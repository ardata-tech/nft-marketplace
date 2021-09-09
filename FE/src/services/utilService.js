import httpService from "./httpService";
import apiUrl from "../configs/api";
import _ from "lodash";


export function uploadFile(formData) {
    return httpService.post(`${apiUrl}upload`,formData,{ headers: {
            'Content-Type': 'multipart/form-data',
        }});
}


export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(items)
        .slice(startIndex)
        .take(pageSize)
        .value();
}
