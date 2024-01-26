import Utilisateur from "./Utilisateur"

export default interface Session {
    idSession : number,
    utilisateur : Utilisateur,
    dateHeureLogin : string,
    code : string,
    isConnected : number,
    token : string
}