import React from 'react';

import Steps from 'rc-steps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faQuestion, faExclamation } from '@fortawesome/free-solid-svg-icons';

import { IQuestionState } from 'typescript/interfaces/general_interfaces';
import animations from 'utils/animations';

import { useRecoilState } from 'recoil';
import { quizzStateSelector } from 'recoil/quizzState';

import 'rc-steps/assets/index.css';
import classes from './QuestionsSteps.module.less';
import cx from 'classnames';

const QuestionsSteps = () => {
    const [quizzState, setQuizzState] = useRecoilState<any>(quizzStateSelector);
    const icons = {
        success: faLightbulb,
        fail: faLightbulb,
        upcoming: faQuestion,
        current: faExclamation,
    };

    return (
        <Steps current={0}>
            {quizzState?.questionsState?.map((el: IQuestionState) => {
                return (
                    <Steps.Step
                        className={cx(animations?.fadeIn, animations?.delay2)}
                        key={el?.number}
                        title=""
                        icon={
                            <FontAwesomeIcon icon={icons[el?.state]} className={cx(classes[el?.state], classes.icon)} />
                        }
                    />
                );
            })}
        </Steps>
    );
};

export default QuestionsSteps;
