import users from "../data/users.json"

export const useAuth = () => {
    const isLogged = ref(false)
    const login = (username,password) => {
        const hasUsername = users.some((el) => el.username === username)
        if(!hasUsername){
            isLogged.value = false
            return false
        }
        const hasPassword = users.some((el) => el.password === password)
        if(!hasPassword){
            isLogged.value = false
            return false
        }
        isLogged.value = true
        return true
    }
    return{
        isLogged,
        login
    }
}