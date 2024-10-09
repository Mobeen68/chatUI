import { Button } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import chat from "../../../assets/chatIcon.png";
import call from "../../../assets/callIcon.png";

const SidebarHeader = () => {
  return (
    <div className="sidebar-header-container">
      {/* Button for Selecting Number */}
      <div className="number-select-container">
        <p style={{ marginBottom: "2px", marginLeft: "5px", color: "#000" }}>
          Select your number
        </p>
        <div>
          <Button
            sx={{
              background: "linear-gradient(180deg, #D92CC1 0%, #4D72F8 100%)",
              color: "white",
              borderRadius: "50px",
              padding: "8px 16px",
              display: "flex",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: "14px",
              boxShadow: "none",
              textTransform: "none",
            }}
            endIcon={<ArrowDropDownIcon />}
          >
            All Numbers
          </Button>
        </div>
      </div>

      {/* Icon Buttons */}
      <div className="icon-buttons-container">
        <div>
          <img src={chat} style={{ width: "22px", height: "20px" }} />
        </div>
        <div>
          <img src={call} style={{ width: "20px", height: "20px" }} />
        </div>
      </div>
    </div>
  );
};

export default SidebarHeader;
