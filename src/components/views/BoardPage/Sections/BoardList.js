import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../WriterPage/Sections/antd";

function BoardList(props) {
  // console.log(props.board);

  return (
    <div>
      <table style={{ width: "100%" }}>
        <colgroup>
          <col width="10%" />
          <col width="70%" />
          <col width="10%" />
          <col width="10%" />
        </colgroup>
        <tbody>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>조회수</th>
            <th></th>
          </tr>
        </tbody>
        <tbody>
          {props.board.map((article) => (
            <tr key={article.id}>
              <td>{article.id}</td>
              <Link to={`/article/${article.id}`}>
                <td>
                  {article.title}
                  &nbsp;
                  {props.commentLength[article.id] > 0 &&
                    `[${props.commentLength[article.id]}]`}
                </td>
              </Link>
              <td>{article.views}</td>
              <td>
                <Button onClick={() => props.handleDeleteClick(article.id)}>
                  X
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BoardList;
