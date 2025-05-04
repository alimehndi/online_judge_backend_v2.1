interface IUser {
    username : string,
    email: string,
    password : string,
    isAdmin: boolean
}

interface IQuestion {
    _id : {
       type :  string,
       required : true,
    },
    questionDescription : {
        type :  string,
       required : true,
    }
}
export { IUser,IQuestion};