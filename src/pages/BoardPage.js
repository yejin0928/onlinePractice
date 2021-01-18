import React from 'react';
import styled from 'styled-components';
import BoardList from '../components/QuestionBoard/Board/Sections/BoardList';
import { Link } from 'react-router-dom';

const BoardPageBlock = styled.div``;

const BoardPage = () => {
  return (
    <BoardPageBlock>
      <h1>Board Title</h1>

      <Link to="/Qpwrite">
        <button>New Post</button>
      </Link>
      <BoardList />
    </BoardPageBlock>
  );
};
export default BoardPage;
