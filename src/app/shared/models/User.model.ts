export class UserModel{
    public email!:string;
    public password!: string;
    public age!: number;
    public gender!: string;

    constructor(email: string, password: string, age: number, gender: string){
        this.email = email;
        this.password = password;
        this.age = age;
        this.gender = gender;
    }
}