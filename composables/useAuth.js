import users from "../data/users.json"

export const useAuth = () => {
    const login = (username,password) => {
        const hasUsername = users.some((el) => el.username === username)
        console.log(hasUsername);
        if(!hasUsername){
            return false
        }
        const hasPassword = users.some((el) => el.password === password)
        console.log(hasPassword);
        if(!hasPassword){
            return false
        }
        return true
    }
    return{
        login
    }
}