import empty from 'is-empty'
export default async function  validation(name,email,password,ConfirmPassword){
    if(await empty(name) ||empty(email) ||empty(password)||empty(ConfirmPassword)){return 'All Fields are mandatory'}
    if(await password!==ConfirmPassword){return 'Password & ConfirmPassword must be same'}
}

 export  async function  Login_validation(email , password){
     console.log(email,password)
    if(await empty(email) ||empty(password)){return 'All Fields are mandatory'}
    else{
    return undefined}
}
