import { IQuestion, IQuestionState, ISingleOrMultipleChoicesAnswer } from 'typescript/interfaces/general_interfaces';

const isQuestionSuccess = (quizzState: any): boolean => {
    const rightAnswers: ISingleOrMultipleChoicesAnswer[] = quizzState?.currentQuestion?.answers?.filter(
        (el: ISingleOrMultipleChoicesAnswer) => {
            return el?.correct;
        }
    );

    const selectedRightAnswers: ISingleOrMultipleChoicesAnswer[] = quizzState?.selectedAnswers?.filter(
        (el: ISingleOrMultipleChoicesAnswer) => {
            return el?.correct;
        }
    );

    if (selectedRightAnswers?.length > 0 && rightAnswers?.length == selectedRightAnswers?.length) return true;

    return false;
};

export { isQuestionSuccess };
