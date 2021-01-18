import React from 'react';
import styled from 'styled-components';
import CourseForm from '../components/course/CourseForm';
import CourseContainer from '../containers/course/CourseContainer';

const OpenCoursePageBlock=styled.div``;

const OpenCoursePage=()=>{
    return(
        <OpenCoursePageBlock>
           <CourseContainer><CourseForm/></CourseContainer>
            
        </OpenCoursePageBlock>
    );
};
export default OpenCoursePage;