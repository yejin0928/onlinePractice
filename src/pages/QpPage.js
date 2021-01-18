import React from 'react';
import styled from 'styled-components';
import QpForm from '../components/QuestionProblem/QpForm';

const QpPageBlock = styled.div``;

const QpPage = () => {
  return (
    <QpPageBlock>
      <QpForm />
    </QpPageBlock>
  );
};
export default QpPage;
