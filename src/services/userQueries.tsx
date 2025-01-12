import { domain, header } from "./endpoint";

const registerUserQuery = async (data: any) => {
    return await domain.post('users/', data, header)
}


export {
    registerUserQuery
}