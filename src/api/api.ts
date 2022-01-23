import axios from 'axios'

export const instance = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "05a7a359-cb94-467a-8ee7-2a5e1d9aec12"},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
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