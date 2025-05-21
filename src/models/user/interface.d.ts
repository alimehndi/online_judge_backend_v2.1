interface IUser {
    _userId: string,
    username: string,
    email: string,
    password: string,
    isAdmin: boolean,
    matchPassword(enteredPassword: string): Promise<boolean>;
}

interface IQuestionExample {
    questionExampleId: string,
    questionExampleInput: String,
    questionExampleOutput: String
}

interface IQuestion {
    _questionId: string,
    questionDescription: string
    questionExample: IQuestionExample[]
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

interface IJwtPayload {
    user_id: string
}
export { IUser, IQuestion, IQuestionExample, IAnswer, IJwtPayload };