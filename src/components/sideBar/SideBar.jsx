import { useState } from "react";
import SidebarHeader from "./components/SidebarHeader";
import ButtonsGroup from "./components/ButtonsGroup";
import "./sidebar.css";
import ToggleButtons from "./components/ToggleButtons";
import { Avatar } from "@mui/material";
import phone from "../../assets/callIcon.png";
import info from "../../assets/infoIcon.png";

const Sidebar = () => {
  const [activeButton, setActiveButton] = useState("all");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  function stringAvatar(name) {
    return {
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  return (
    <div className="sidebar">
      {/* Sidebar Header */}
      <SidebarHeader />

      {/* Toggle Buttons and Search Bar */}
      <ToggleButtons />

      {/* Buttons Group */}
      <ButtonsGroup
        activeButton={activeButton}
        handleButtonClick={handleButtonClick}
      />
      <div
        style={{
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        {/* Call Logs */}
        {[
          "Kim Williamson",
          "Shane Watson",
          "Hazelwood arain",
          "Zuniha Butt",
        ].map((name, index) => (
          <div
            key={index}
            style={{
              marginBottom: "16px",
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#fff",
              padding: "10px 13px",
              borderRadius: "10px",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "start", gap: "0.5rem" }}
            >
              <Avatar
                {...stringAvatar(name)}
                sx={{
                  height: "34px",
                  width: "34px",
                  background:
                    "linear-gradient(180deg, #d92cc1 0%, #4d72f8 100%)",
                }}
              />
              <div>
                <p>{name}</p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <img
                    src={phone}
                    alt="phone"
                    style={{
                      height: "14px",
                      width: "14px",
                    }}
                  />
                  <p style={{ fontSize: "12px", color: "gray" }}>Outgoing</p>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p style={{ fontSize: "12px", color: "gray" }}>2:34 PM</p>
              <img
                src={info}
                alt="info"
                style={{ height: "18px", width: "18px" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
