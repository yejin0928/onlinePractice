import React from 'react';
import styled from 'styled-components';
import ReviseCourseForm from '../components/course/ReviseCourseForm';

import CourseContainer from '../containers/course/CourseContainer';

const ReviseCoursePageBlock = styled.div``;

const ReviseCoursePage = () => {
  return (
    <ReviseCoursePageBlock>
      <CourseContainer>
        <ReviseCourseForm />
      </CourseContainer>
    </ReviseCoursePageBlock>
  );
};
export default ReviseCoursePage;
