import axios from 'axios';

//创建axios实例
var service=axios.create({
    timeout:5000
})
//添加request拦截器
service.interceptors.request.use(config=>{
    return config;
}),error=>{
    Promise.reject(error);
}
//添加response拦截器
service.interceptors.response.use(response=>{
    let res={};
    res.data=response.data;
});error=>{
    if(error.response&&error.response.status==404){
        console.log('请求错误');
    }
    return Promise.reject(error.response)
}


export default{
    //请求get方法
    get(url,params={}){
        return service({
            url:url,
            method:'get',
            headers:{},
            params,
        })
    },
    //post方法
    post(url,data={}){
        return service({
            url:url,
            method:'post',
            headers: {
                'Content-Type':'application/json;charset=UTF-8'       
            },
            data:JSON.stringify(data)
        })
    }
}

export{
    service
}
