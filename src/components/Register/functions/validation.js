import empty from 'is-empty'
export default async function  validation(name,email,password,ConfirmPassword){
    if(await empty(name) ||empty(email) ||empty(password)||empty(ConfirmPassword)){return 'All Fields are mandatory'}
    if(await password!==ConfirmPassword){return 'Password & ConfirmPassword must be same'}
}