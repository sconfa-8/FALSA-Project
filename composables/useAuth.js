import users from "../data/users.json"

export const useAuth = () => {
    const isLogged = ref(false)
    const login = (username,password) => {
        const user = users.find((el) => el.username === username)
        if(!user){
            isLogged.value = false
            return {status:false}
        }
        if(user.password !== password){
            isLogged.value = false
            return {status:false}
        }
        isLogged.value = true
        return {status:true,isHR:user.isHR}
    }
    return{
        isLogged,
        login
    }
}