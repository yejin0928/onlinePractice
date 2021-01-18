import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  Card,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody,
} from 'reactstrap';
import { Button } from 'reactstrap';

const CourseRoomFormBlock = styled.div`
  h1 {
    margin: 0;
    margin-bottom: 1rem;
  }
`;

const CourseRoomForm = () => {
  const [CourseList, setCourseList] = useState([]);
  const [id, setID] = useState([]);
  useEffect(() => {
    getData();
    getID();
  }, []);

  const getData = async () => {
    const response = await axios.get('/course/:user_code');
    setCourseList(response.data);
  };
  const getID = async () => {
    const response = await axios.get('/auth/session').then(function (data) {
      if (data['success'] !== undefined) {
        //로그인 성공
        let a = data.user_code;
        setID(data.user_code);
        return a;
      } else {
        //로그인 실패
      }
    });
  };
  const [coursecode, setCourseCode] = useState(
    axios.get('/auth/session', getID()),
  );
  const onClick = async () => {
    const del = await axios.delete('/course', coursecode, getID());
    this.setState({
      name: '',
      description: '',
    });
    console.log(del);
  };
  const renderCardBody = () => {
    return (
      CourseList &&
      CourseList.map(({ code, name, description }) => {
        return (
          <CardBody key={code}>
            <CardTitle tag="h5"> {name}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {' '}
            </CardSubtitle>
            <CardText>{description}</CardText>
            <Link to="/QuestionProblem">
              <Button to="/" color="primary">
                질문
              </Button>{' '}
            </Link>
          </CardBody>
        );
      })
    );
  };
  const renderCardFoot = () => {
    return (
      id &&
      id.map(({ name }) => {
        return (
          <CardBody>
            if({name}==='professor')
            {
              <div>
                <Link to="/tablepage">
                  <Button color="warning">Room</Button>{' '}
                </Link>
                <Link to="/attendance">
                  <Button color="success">출석정보 수정</Button>{' '}
                </Link>
                <Link to="/revisecourse">
                  <Button color="info">강의정보 수정</Button>{' '}
                </Link>
                <Button color="danger" onclick={onClick}>
                  강의 폐강
                </Button>{' '}
              </div>
            }
            else if({name}==='student')
            {
              <div>
                <Link to="/tablepage">
                  {/*룸 입장시 개설된 방 확인후 입장*/}
                  <Button color="warning">Room</Button>{' '}
                </Link>
                {/*출석 확인창 만들어야 
              <Link to="/attendance">
                <Button color="success">출석정보 수정</Button>{' '}
              </Link>*/}
              </div>
            }
          </CardBody>
        );
      })
    );
  };
  const renderbutton = () => {
    return (
      id &&
      id.map(({ name }) => {
        return (
          <div>
            if({name}==='professor')
            {
              <div>
                <Link to="/opencourse">
                  <Button
                    color="secondary"
                    style={{ marginLeft: '10rem', width: '800px' }}
                  >
                    개설
                  </Button>{' '}
                </Link>
              </div>
            }{' '}
            else if({name}==='student'){' '}
            {
              <div>
                <Link to="/registercourse">
                  <Button
                    color="secondary"
                    style={{ marginLeft: '10rem', width: '800px' }}
                  >
                    신청
                  </Button>{' '}
                </Link>
              </div>
            }
          </div>
        );
      })
    );
  };

  return (
    <CourseRoomFormBlock>
      <h1 style={{ marginTop: '5rem', marginLeft: '30rem' }}>강의실</h1>
      <CardGroup
        style={{ margin: '10rem', marginLeft: '10rem', width: '800px' }}
      >
        <Card>
          {renderCardBody()}
          {renderCardFoot()}
        </Card>
      </CardGroup>
      {renderbutton()}
    </CourseRoomFormBlock>
  );
};
export default CourseRoomForm;
