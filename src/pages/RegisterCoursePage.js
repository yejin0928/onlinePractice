import React from 'react';
import styled from 'styled-components';
import AttendTemplate from '../components/attend/AttendTemplate';
import StudentRegisterCourse from '../components/course/StudentRegisterCourse';

const RegisterCoursePageBlock = styled.div``;

const RegisterCoursePage = () => {
  return (
    <RegisterCoursePageBlock>
      <AttendTemplate>
        <StudentRegisterCourse />
      </AttendTemplate>
    </RegisterCoursePageBlock>
  );
};
export default RegisterCoursePage;
