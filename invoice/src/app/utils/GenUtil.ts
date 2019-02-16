export default class GenUtil {

  static base64Email(email : string){
    return btoa(email.toLowerCase());
  }

}
