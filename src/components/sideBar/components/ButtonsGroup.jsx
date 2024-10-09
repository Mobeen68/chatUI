/* eslint-disable react/prop-types */
import { Button } from "@mui/material";

const ButtonsGroup = ({ activeButton, handleButtonClick }) => {
  return (
    <div
      className="buttons-group"
      style={{
        padding: "10px 20px",
      }}
    >
      <Button
        sx={{
          background:
            activeButton === "all"
              ? "linear-gradient(180deg, #D92CC1 0%, #4D72F8 100%)"
              : "#fff",
          color: activeButton === "all" ? "white" : "gray",
          borderRadius: "50px",
          border: activeButton === "all" ? "none" : "1px solid transparent",
          backgroundImage:
            activeButton !== "all"
              ? "linear-gradient(#fff, #fff), linear-gradient(180deg, #D92CC1 0%, #4D72F8 100%)"
              : "",
          backgroundOrigin: "border-box",
          backgroundClip:
            activeButton !== "all" ? "padding-box, border-box" : "",
          padding: "10px 20px",
          transition: "all 0.3s ease",
        }}
        variant="contained"
        onClick={() => handleButtonClick("all")}
        size="small"
      >
        All
      </Button>
      <Button
        sx={{
          background:
            activeButton === "missed"
              ? "linear-gradient(180deg, #D92CC1 0%, #4D72F8 100%)"
              : "#fff",
          color: activeButton === "missed" ? "white" : "gray",
          borderRadius: "50px",
          border: activeButton === "missed" ? "none" : "1px solid transparent",
          backgroundImage:
            activeButton !== "missed"
              ? "linear-gradient(#fff, #fff), linear-gradient(180deg, #D92CC1 0%, #4D72F8 100%)"
              : "",
          backgroundOrigin: "border-box",
          backgroundClip:
            activeButton !== "missed" ? "padding-box, border-box" : "",
          padding: "10px 20px",
          transition: "all 0.3s ease",
        }}
        variant="contained"
        size="small"
        onClick={() => handleButtonClick("missed")}
      >
        Missed
      </Button>
      <Button
        size="small"
        sx={{
          background:
            activeButton === "incoming"
              ? "linear-gradient(180deg, #D92CC1 0%, #4D72F8 100%)"
              : "#fff",
          color: activeButton === "incoming" ? "white" : "gray",
          borderRadius: "50px",
          border:
            activeButton === "incoming" ? "none" : "1px solid transparent",
          backgroundImage:
            activeButton !== "incoming"
              ? "linear-gradient(#fff, #fff), linear-gradient(180deg, #D92CC1 0%, #4D72F8 100%)"
              : "",
          backgroundOrigin: "border-box",
          backgroundClip:
            activeButton !== "incoming" ? "padding-box, border-box" : "",
          padding: "10px 20px",
          transition: "all 0.3s ease",
        }}
        variant="contained"
        onClick={() => handleButtonClick("incoming")}
      >
        Incoming
      </Button>
    </div>
  );
};

export default ButtonsGroup;
