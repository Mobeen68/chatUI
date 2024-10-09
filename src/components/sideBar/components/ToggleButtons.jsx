import { TextField } from "@mui/material";
import search from "../../../assets/searchIcon.png";

const ToggleButtons = () => {
  return (
    <div className="toggle-buttons-container">
      {/* Toggle Buttons */}
      <div className="toggle-buttons">
        <input
          id="toggle-on"
          className="toggle toggle-left"
          name="toggle"
          value="false"
          type="radio"
          checked
        />
        <label htmlFor="toggle-on" className="btn">
          Messages
        </label>
        <input
          id="toggle-off"
          className="toggle toggle-right"
          name="toggle"
          value="true"
          type="radio"
        />
        <label htmlFor="toggle-off" className="btn">
          Calls
        </label>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <TextField
          fullWidth
          placeholder="Search"
          variant="outlined"
          size="small"
          sx={{
            backgroundColor: "#fff",
            borderRadius: "50px",
            boxShadow: "0px 0px 10px 3px rgba(0, 0, 0, 0.1)",
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
            startAdornment: (
              <span
                role="img"
                aria-label="search-icon"
                style={{
                  paddingRight: "8px",
                  paddingLeft: "8px",
                  color: "#9E9E9E",
                }}
              >
                <img
                  src={search}
                  alt="search"
                  style={{ width: "15px", height: "15px" }}
                />
              </span>
            ),
          }}
        />
      </div>
    </div>
  );
};

export default ToggleButtons;
