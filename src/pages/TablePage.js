import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Input from '@material-ui/core/Input';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormLabel from '@material-ui/core/FormLabel';

const TablePageBlock = styled.div`
  margin: 0 auto;

  border: none;
  padding: 1rem;
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');

  body {
    font-family: 'Quicksand', sans-serif;
    display: flex;
    justify-content: center;
    padding: 0;
    color: #4d4d4d;
  }

  #title {
    margin-top: 1px;
    margin-left: 200px;
  }

  #room {
    border-collapse: collapse;
    border: 3px solid #ddd;
  }

  #room td,
  #room th {
    border: 1px solid #ddd;
    padding: 12px;
  }

  #room tr:hover {
    background-color: #ddd;
  }

  #room th {
    padding: 10px;
    text-align: center;
    background-color: #3e68f1;
    color: white;
  }

  .opration {
    text-align: center;
  }

  .button {
    border: none;
    outline: none;
    font-size: 11px;
    font-family: 'Quicksand', sans-serif;
    color: #f44336;
    padding: 3px 10px;
    border-radius: 8px;
    cursor: pointer;
    border: 1px solid #f44336;
    background-color: transparent;
  }

  .button:active {
    border: 1px solid blue;
  }
`;

const URL = '/room';

const TablePage = () => {
  const [rooms, setRooms] = useState([]);
  const [description, setDescription] = useState();
  const [title, setTitle] = useState('');
  const [hour, setHour] = useState('');
  const [min, setMin] = useState('');
  const [auth, setAuth] = useState([]);

  useEffect(() => {
    getData();
    authData();
  }, []);
  const setDescriptionText = (e) => {
    setDescription(e.target.value);
  };
  const setTitleText = (e) => {
    setTitle(e.target.value);
  };
  const setHourText = (e) => {
    setHour(e.target.value);
  };
  const setMinText = (e) => {
    setMin(e.target.value);
  };
  const SetAuthText = (e) => {
    setAuth(e.target.value);
  };
  const save = (e) => {
    e.preventDefault();
    const submitValue = {
      description: description,
      title: title,
      hour: hour,
      min: min,
    };
    axios.post('/room', { submitValue }).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };
  const getData = async () => {
    const response = await axios.get(URL);
    setRooms(response.data);
  };
  const authData = async () => {
    axios.get('/auth/session').then((res) => {
      const authValue = JSON.parse(res.data.auth);
      setAuth(authValue);
    });
  };
  const removeData = (course_code) => {
    axios.delete(`${URL}/${course_code}`).then((res) => {
      const del = rooms.filter((room) => course_code !== room.course_code);
      setRooms(del);
    });
  };
  const postData = (course_code) => {
    axios.post(`${URL}/${course_code}`).then((res) => {
      const del = rooms.filter((room) => course_code !== room.course_code);
      setRooms(del);
    });
  };

  const renderHeader = () => {
    let headerElement = ['course_code', 'url'];

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  const renderBody = () => {
    return (
      rooms &&
      rooms.map(({ course_code, url }) => {
        return (
          <tr key={course_code}>
            <td>{course_code}</td>
            <td>{url}</td>
            <td className="opration">
              <button
                className="button"
                onClick={() => removeData(course_code)}
              >
                삭제하기
              </button>
            </td>
          </tr>
        );
      })
    );
  };
  return (
    <TablePageBlock>
      <>
        <br />
        <br />
        <h1 id="title">Room</h1>
        <div style={{ margin: '200px' }}>
          <table id="room">
            <thead>
              <tr>{renderHeader()}</tr>
            </thead>
            <tbody>{renderBody()}</tbody>
          </table>
        </div>

        <form onSubmit={save} style={{ marginTop: '1px', marginLeft: '200px' }}>
          <FormLabel htmlFor="description">강의 설명</FormLabel>
          <Input
            name="decription"
            id="description"
            placeholder=""
            onChange={setDescriptionText}
          />
          <br />

          <FormLabel htmlFor="title">주차</FormLabel>
          <NativeSelect id="title" name="title" onChange={setTitleText}>
            <option value={title}></option>
            <option value="ROOM000001">1주차</option>
            <option value="ROOM000002">2주차</option>
            <option value="ROOM000003">3주차</option>
            <option value="ROOM000004">4주차</option>
            <option value="ROOM000005">5주차</option>
            <option value="ROOM000006">6주차</option>
            <option value="ROOM000007">7주차</option>
            <option value="ROOM000008">8주차</option>
            <option value="ROOM000009">9주차</option>
          </NativeSelect>
          <br />
          <FormLabel htmlFor="hour">시</FormLabel>
          <NativeSelect id="hour" name="hour" onChange={setHourText}>
            <option value={hour}></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </NativeSelect>
          <br />
          <FormLabel htmlFor="min">분</FormLabel>
          <NativeSelect id="min" name="min" onChange={setMinText}>
            <option value={min}></option>
            <option value="0">0</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="30">30</option>
            <option value="35">35</option>
            <option value="40">40</option>
            <option value="45">45</option>
            <option value="50">50</option>
            <option value="55">55</option>
          </NativeSelect>
          <br />
          <br />
          <button
            type="submit"
            value="저장"
            style={{ backgroundColor: '#3E68F1', color: 'white' }}
          >
            개설하기
          </button>
        </form>
      </>
    </TablePageBlock>
  );
};
export default TablePage;
