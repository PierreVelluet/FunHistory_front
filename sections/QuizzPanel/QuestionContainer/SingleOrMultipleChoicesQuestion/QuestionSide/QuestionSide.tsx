import React from 'react';

import Typist from 'react-typist';

import { useRecoilState } from 'recoil';
import { loadingState } from 'recoil/loadingState';
import { quizzStateSelector } from 'recoil/quizzState';
import { settingsStateSelector } from 'recoil/settingsState';

import classes from './QuestionSide.module.less';
import cx from 'classnames';

const QuestionSide = (props: any) => {
    const { setAnswersIn }: { setAnswersIn: any } = props;

    const [quizzState, setQuizzState] = useRecoilState<any>(quizzStateSelector);

    return (
        <Typist cursor={{ show: false }} onTypingDone={() => setAnswersIn(true)}>
            <div className={cx(classes.question)}>{quizzState?.currentQuestion?.question ?? ''}</div>
        </Typist>
    );
};

export default QuestionSide;
