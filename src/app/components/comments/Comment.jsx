import { useState } from "react";
import { CommentForm } from "./CommentForm";
import { Rate } from 'antd'
import moment from "moment";

import "./Styles.scss";
const Comment = ({
  comment,
  type,
  handleSubmitReply,
}) => {
  const [hide, setHide] = useState(true);
  const [active, setActive] = useState(false);
  return (
    <div
      key={comment.ID}
      className="comment"
      style={
        type === "comment" ? {} :
          {
            "paddingTop": "10px"
          }
      }
    >
      <div className="comment-image-container">
        <img src="/portal/media/avatars/user-icon.png" />
        <div
          style={
            type === "reply" ? {} :
              {
                "borderLeft": "1px dashed #999",
                "height": "calc(80% - 32px)",
                "marginLeft": "calc(50% - 0.5px)",
                "marginTop": "2px"
              }
          }
        ></div>
      </div>
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-wrapper">
            <div className="comment-author">{comment.TableName}</div>
            <span>{moment(comment.Created).format('DD/MM/yyyy HH:mm')}</span>
          </div>
          {type == "reply" ? "" :
            <Rate
              className="view-rate"
              value={comment.Point}
              disabled
              allowHalf
            />
          }
        </div>
        <div className="comment-text">{comment.Content}</div>
        <div className="comment-actions">
          <div
            className="comment-action"
            onClick={() => setActive(true)}
          >
            Trả lời
          </div>
        </div>
        {active &&
          <div
            style={{"paddingBottom": "8px"}}
          >
            <CommentForm
              parentID={comment.ID}
              cancelButton={true}
              type="reply"
              handleSubmitReply={handleSubmitReply}
              setActive={setActive}
            />
          </div>
        }
        {type === "comment" &&
          comment.replies &&
          comment.replies.length > 0 &&
          comment.replies.map((reply, index) => {
            return (
              <div
                hidden={index >= 1 && hide}
                key={index}
                className="comment"
                style={
                  type === "comment" ? {} :
                    {
                      "paddingTop": "10px"
                    }
                }
              >
                <div className="comment-image-container">
                  <img src="/portal/media/avatars/user-icon.png" />
                </div>
                <div className="comment-right-part">
                  <div className="comment-content">
                    <div className="comment-wrapper">
                      <div className="comment-author">{reply.TableName}</div>
                      <span>{moment(reply.Created).format('DD/MM/yyyy HH:mm')}</span>
                    </div>
                  </div>
                  <div className="comment-text">{reply.Content}</div>
                </div>
              </div>
            )
          })
        }
        <div className="comment-status">
          <span
            className="comment-status-text"
            onClick={() => setHide(!hide)}
          >
            {(comment.replies &&
              comment.replies.length > 1) &&
              (hide &&
                `Hiển thị thêm ${comment.replies.length - 1} phản hồi`
                || `Ẩn bớt`
              )
            }
          </span>

        </div>
        

      </div>
    </div>
  );
};

export { Comment };
