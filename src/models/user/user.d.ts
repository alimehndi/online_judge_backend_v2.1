interface IUser {
    username: string,
    email: string,
    password: string,
    isAdmin: boolean
}

interface IQuestion {
    _id: {
        type: string,
        required: true,
    },
    questionDescription: {
        type: string,
        required: true,
    }
}
interface IAnswer {
    _id: {
        type: string,
        required: true,
    },
    languageChosen: {
        type: String,
        required: true,
    },
    answerDescription: {
        type: string,
        required: true,
    }
}
export { IUser, IQuestion, IAnswer };