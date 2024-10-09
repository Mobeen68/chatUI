import { Avatar, TextField } from "@mui/material";
import search from "../assets/searchIcon.png";
import question from "../assets/questionIcon.png";
import settings from "../assets/settingsIcon.png";
import add from "../assets/addIcon.png";
import dropdown from "../assets/dropdownIcon.png";
import { useState } from "react";

const Contacts = () => {
  // Sample contact data (you would typically fetch this from an API or database)
  const contacts = [
    { name: "Aftab", phone: "123-456-789" },
    { name: "Aftab", phone: "123-456-789" },
    { name: "Brown", phone: "234-567-890" },
    { name: "Brown", phone: "234-567-890" },
  ];

  // Sort contacts alphabetically
  const sortedContacts = contacts.sort((a, b) => a.name.localeCompare(b.name));

  // Group contacts by first letter
  const groupedContacts = sortedContacts.reduce((acc, contact) => {
    const firstLetter = contact.name[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(contact);
    return acc;
  }, {});

  // Create an array of alphabet letters
  const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );

  // Get only the letters that have contacts
  // const activeLetters = Object.keys(groupedContacts).sort();

  function stringAvatar(name) {
    return {
      children: `${name[0].toUpperCase()}`,
    };
  }

  const [recentExpanded, setRecentExpanded] = useState(false);
  const [favoritesExpanded, setFavoritesExpanded] = useState(false);

  const recentContacts = [
    { name: "John Doe", phone: "123-456-7890" },
    { name: "Jane Smith", phone: "098-765-4321" },
  ];

  const favoriteContacts = [
    { name: "Alice Johnson", phone: "111-222-3333" },
    { name: "Bob Williams", phone: "444-555-6666" },
  ];

  const renderContactItem = (contact, index) => (
    <div key={index} className="contact-item">
      <Avatar
        {...stringAvatar(contact.name)}
        sx={
          {
            /* ... existing Avatar styles ... */
          }
        }
      />
      <div className="contact-info">
        <p className="contact-name">{contact.name}</p>
        <p className="contact-phone">{contact.phone}</p>
      </div>
    </div>
  );

  return (
    <div className="contacts">
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
            alignItems: "end",
            justifyContent: "end",
          }}
        >
          <div
            style={{
              paddingRight: "1.5rem",
              paddingTop: "0.5rem",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img
              src={question}
              alt="question"
              style={{
                height: "25px",
                width: "25px",
              }}
            />
            <img
              src={settings}
              alt="settings"
              style={{
                height: "25px",
                width: "25px",
              }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          paddingLeft: "20px",
          paddingRight: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "16px",
          marginTop: "3rem",
        }}
      >
        <h2>Contact</h2>
        <div>
          <Avatar
            // {...stringAvatar(send)}
            src={add}
            sx={{
              height: "25px",
              width: "25px",
              padding: "4px",
              background: "linear-gradient(180deg, #d92cc1 0%, #4d72f8 100%)",
            }}
          />
        </div>
      </div>
      {/* Search Bar */}
      <div className="search-bar">
        <TextField
          fullWidth
          placeholder="Search contact"
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
      <div className="contacts-container">
        <div className="contacts-list">
          <div>
            {alphabet.map((letter) => (
              <div key={letter} id={`letter-${letter}`}>
                {groupedContacts[letter] && (
                  <>
                    <h3 className="letter-header">{letter}</h3>
                    {groupedContacts[letter].map((contact, index) => (
                      <div key={index} className="contact-item">
                        <Avatar
                          {...stringAvatar(contact.name)}
                          sx={{
                            height: "40px",
                            width: "40px",
                            color: "#4d72f8",
                            background: "white",
                            fontSize: "16px",
                            fontWeight: "bold",
                            border: "1px solid",
                            borderColor:
                              "linear-gradient(180deg, #d92cc1 0%, #4d72f8 100%)",
                            backgroundClip: "padding-box",
                            position: "relative",
                            "&::after": {
                              content: '""',
                              position: "absolute",
                              top: "-2px",
                              left: "-2px",
                              right: "-2px",
                              bottom: "-2px",
                              background:
                                "linear-gradient(180deg, #d92cc1 0%, #4d72f8 100%)",
                              borderRadius: "50%",
                              zIndex: -1,
                            },
                          }}
                        />
                        <div className="contact-info">
                          <p className="contact-name">{contact.name}</p>
                          <p className="contact-phone">{contact.phone}</p>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="alphabet-index">
            {alphabet.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="alphabet-letter"
              >
                {letter}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="special-section">
        <div
          className="section-header"
          onClick={() => setRecentExpanded(!recentExpanded)}
        >
          <h1>Recent</h1>
          <img src={dropdown} alt="dropdown" />
        </div>
        {recentExpanded && (
          <div className="section-content">
            {recentContacts.map(renderContactItem)}
          </div>
        )}
      </div>

      <div
        className="special-section"
        style={{
          paddingBottom: "20px",
        }}
      >
        <div
          className="section-header"
          onClick={() => setFavoritesExpanded(!favoritesExpanded)}
        >
          <h1>Favorites</h1>
          <img src={dropdown} alt="dropdown" />
        </div>
        {favoritesExpanded && (
          <div className="section-content">
            {favoriteContacts.map(renderContactItem)}
          </div>
        )}
      </div>
    </div>
  );
};

export default Contacts;
