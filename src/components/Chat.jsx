import { Avatar, TextField, IconButton } from "@mui/material";
// import SendIcon from "@mui/icons-material/Send";
import girl from "../assets/girl.png";
import phone from "../assets/callIcon.png";
import menu from "../assets/menuIcon.png";
import clip from "../assets/clipIcon.png";
import schedule from "../assets/scheduleIcon.png";
import smiley from "../assets/smileyIcon.png";
import microphone from "../assets/microphoneIcon.png";
import send from "../assets/sendIcon.png";

const Chat = () => {
  return (
    <div className="chat">
      {/* Chat Header */}
      <div
        className="chat-header"
        style={{
          paddingLeft: "2rem",
          paddingTop: "1.2rem",
          height: "75px",
          boxShadow: "0 6px 6px -1px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
            }}
          >
            <Avatar alt="Mishal Irfan" src={girl} />
            <div style={{ marginLeft: "16px" }}>
              <p style={{ margin: 0, fontWeight: "bold" }}>Mishal Irfan</p>
              <p style={{ margin: 0, fontSize: "12px", color: "gray" }}>
                Last seen at 2:34 PM
              </p>
            </div>
          </div>
          <div
            style={{
              paddingRight: "2rem",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img
              src={phone}
              alt="phone"
              style={{
                height: "25px",
                width: "25px",
              }}
            />
            <img
              src={menu}
              alt="menu"
              style={{
                height: "25px",
                width: "25px",
              }}
            />
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="chat-messages">
        <div className="chat-timestamp">
          Today,{" "}
          {new Date().toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </div>
        <div className="message received">
          <div className="message-box">
            Hello, are you available for meeting?
            <span className="message-time">2:34 PM</span>
          </div>
        </div>

        <div className="message sent">
          <div className="message-box">
            Hello
            <span className="message-time">2:35 PM</span>
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className="message-input">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            paddingLeft: "1rem",
            paddingRight: "0.5rem",
          }}
        >
          <img
            src={clip}
            alt="clip"
            style={{
              height: "25px",
              width: "25px",
            }}
          />
          <img
            src={schedule}
            alt="schedule"
            style={{
              height: "25px",
              width: "25px",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
          }}
        >
          <TextField
            fullWidth
            placeholder="Type a message"
            variant="outlined"
            size="small"
            sx={{
              backgroundColor: "#F0F2F5",
              borderRadius: "5px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "transparent",
                },
                "&:hover fieldset": {
                  borderColor: "transparent",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "transparent",
                },
              },
            }}
            InputProps={{
              endAdornment: (
                <span
                  role="img"
                  aria-label="search-icon"
                  style={{
                    color: "#9E9E9E",
                    display: "inline-flex",
                    gap: "8px",
                  }}
                >
                  <img
                    src={smiley}
                    alt="search"
                    style={{ width: "15px", height: "15px" }}
                  />
                  <img
                    src={microphone}
                    alt="search"
                    style={{ width: "15px", height: "15px" }}
                  />
                </span>
              ),
            }}
          />
          <IconButton color="primary">
            <Avatar
              // {...stringAvatar(send)}
              src={send}
              sx={{
                height: "30px",
                width: "30px",
                padding: "4px",
                background: "linear-gradient(180deg, #d92cc1 0%, #4d72f8 100%)",
              }}
            />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Chat;
