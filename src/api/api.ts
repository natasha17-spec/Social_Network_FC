import axios from 'axios'
export const instance = axios.create({
    withCredentials:true,
    headers:{"API-KEY": "aee8e0dc-0edb-41fe-ae30-2037f01a0933"},
    baseURL:'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers(page=1,count=10) {
        return instance.get(`users?page=${page}&count=${count}`)
            .then(response=>{
                return response.data
            })
    },
    follow(userId:number){
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId:number){
        return instance.delete(`follow/${userId}`)
    }
}