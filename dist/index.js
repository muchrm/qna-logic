"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAnswerByQuestion = exports.getAll = void 0;
const qnaList = [
    {
        id: 1,
        question: `Suppose you want to develop a supervised machine learning model to predict whether a given email is "spam" or "not spam." Which of the following statements are true?`,
        answer: `Emails not marked as "spam" or "not spam" are unlabeled examples.`,
    },
    {
        id: 2,
        question: `Suppose an online shoe store wants to create a supervised ML model that will provide personalized shoe recommendations to users. That is, the model will recommend certain pairs of shoes to Marty and different pairs of shoes to Janet. The system will use past user behavior data to generate training data. Which of the following statements are true?`,
        answer: `"The user clicked on the shoe's description" is a useful label.`,
    },
];
function getAll() {
    return Promise.resolve(qnaList.map(qna => ({ id: qna.id, question: qna.question })));
}
exports.getAll = getAll;
function getAnswerByQuestion(id) {
    return new Promise((resolve, reject) => {
        const qna = qnaList.find((qna) => qna.id == id);
        if (qna) {
            return resolve(qna.answer);
        }
        return reject(new Error("Could not find"));
    });
}
exports.getAnswerByQuestion = getAnswerByQuestion;
