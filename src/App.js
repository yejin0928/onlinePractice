import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { Helmet } from 'react-helmet-async';
import AtttendancePage from './pages/AttendancePage';
import OpenCoursePage from './pages/OpenCoursePage';
import ReviseCoursePage from './pages/ReviseCoursePage';
import MainRoomPage from './pages/MainRoomPage';
import QpPage from './pages/QpPage';
import QpwritePage from './pages/QpwritePage';
import QpListPage from './pages/QpListPage';
import QpreadPage from './pages/QpreadPage';
import RoomPage from './pages/RoomPage';
import TablePage from './pages/TablePage';
import RegisterCoursePage from './pages/RegisterCoursePage';

const App = () => {
  return (
    <>
      <Helmet>
        <title>Codinator</title>
      </Helmet>
      <Switch>
        {/*홈 화면 */}
        <Route component={PostListPage} path={['/@:username', '/']} exact />

        {/*로그인 */}
        <Route component={LoginPage} path="/login" />
        {/*회원가입 */}
        <Route component={RegisterPage} path="/register" />

        {/*출석수정 및 확인 */}
        <Route component={AtttendancePage} path="/attendance" />

        {/* 강의개설*/}
        <Route component={OpenCoursePage} path="/opencourse" />
        {/* 강의신청*/}
        <Route component={RegisterCoursePage} path="/registercourse" />
        {/*강의정보 수정*/}
        <Route component={ReviseCoursePage} path="/revisecourse" />
        {/*강의실*/}
        <Route component={MainRoomPage} path="/mainroom" />

        {/*질문목록*/}
        <Route component={QpListPage} path="/Qplist" />
        {/*질문할 문제 선택페이지*/}
        <Route component={QpPage} path="/QuestionProblem" />
        {/*질문작성 */}
        <Route component={QpwritePage} path="/Qpwrite" />
        {/*질문 내용 상세페이지 및 답변작성 페이지 */}
        <Route component={QpreadPage} path="/Qpread" />

        {/*room 개설*/}
        <Route component={TablePage} path="/tablepage" />

        {/*필요없는 페이지*/}
        <Route component={RoomPage} path="/roompage" />
      </Switch>
    </>
  );
};
export default App;
