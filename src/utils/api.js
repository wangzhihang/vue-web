import {get,post} from './http.js'
let baseUrl='http://192.168.10.221:8088/';

export const getLoginIn=(username,password)=>{
    return get(baseUrl+'auth/login?username='+username+'&password='+password)
}