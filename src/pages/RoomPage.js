import React, { useState } from 'react';
import Input from '@material-ui/core/Input';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormLabel from '@material-ui/core/FormLabel';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const RoomPageBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 2px solid black;
  padding: 1rem;
`;
const RoomPage = () => {
  const [description, setDescription] = useState();
  const [title, setTitle] = useState('');
  const [hour, setHour] = useState('');
  const [min, setMin] = useState('');
  const [RoomURL, setURL] = useState(null);
  const onClick = () => {
    axios.get('/room/:course_code').then((response) => {
      setURL(response.RoomURL.course_code);
    });
  };

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

  return (
    <>
      <RoomPageBlock>
        <h1>Room</h1>
        <form onSubmit={save}>
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
          <button type="submit" value="저장">
            정보저장
          </button>
        </form>
        <button onClick={onClick}>개설</button>
        {RoomURL && <a href={RoomURL}></a>}

        <button type="submit" value="저장">
          Room
        </button>
      </RoomPageBlock>
    </>
  );
};

export default RoomPage;
