import { useContext } from "react";
import { DefaultContext } from "../../Context";

import { ReactComponent as StarWarsLogoSVG } from "../../assets/star-wars.svg";
import { ReactComponent as IconSearchSVG } from "../../assets/icon-search.svg";
import { ReactComponent as FacebookLogoSVG } from "../../assets/facebook.svg";
import { ReactComponent as InstagramLogoSVG } from "../../assets/instagram.svg";
import { ReactComponent as TwitterLogoSVG } from "../../assets/twitter.svg";
import { ReactComponent as YoutubeLogoSVG } from "../../assets/youtube.svg";

import { Button } from "@mui/material";

const swLinks = [
    {
      url: "https://www.facebook.com/StarWars",
      name: "facebook_logo",
      component: <FacebookLogoSVG />,
    },
    {
      url: "https://www.instagram.com/starwars/",
      name: "instagram_logo",
      component: <InstagramLogoSVG />,
    },
    {
      url: "https://twitter.com/starwars",
      name: "twitter_logo",
      component: <TwitterLogoSVG />,
    },
    {
      url: "https://www.youtube.com/user/starwars",
      name: "youtube_logo",
      component: <YoutubeLogoSVG />,
    },
  ];

export const Header = ({ fan, theme }) => {
    const { handleSetTheme } = useContext(DefaultContext);
    return (
      <header className={`${theme}`}>
        <div className="links-layout">
          <div className="links-container">
            {swLinks.map((link) => (
              <a
                key={link.name}
                className="link"
                href={link.url}
                target="_blank"
                alt={link.name}
                rel="noreferrer"
              >
                {link.component}
              </a>
            ))}
          </div>
          <div className="btn-change-theme">
            <button className="btn-theme" onClick={() => handleSetTheme(theme)}>Change Theme</button>
          </div>
        </div>
        <StarWarsLogoSVG />
        <div className="search-layout">
            <input placeholder="Search Star Wars" type="text" />
            <Button 
              style={{
                backgroundColor: "#343434",
                borderRadius: "0",
              }}>
              <IconSearchSVG />
            </Button>
            <div style={{ color: "white", paddingTop: "1rem" }}>
              I am fan of: {fan}
            </div>
        </div>
      </header>
    )
}