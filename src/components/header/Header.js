import React from 'react'
import './Header.css'

function Header() {

  return (
    <div id="header-cont">

      <div id="top-header">

        <div id="search-bar-cont">

          <i className="fas fa-search"></i>
          <div id="search-input-cont">
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div id="prof-pic"></div>
      </div>

      <div id="bottom-header">

        <div className="library" href="/php/library.php"><p>Library</p></div>
        <div className="explore" href="/php/explore.php"><p>Explore</p></div>
        <div className="radio" href="/php/radio.php"><p>Radio</p></div>
        <div className="charts" href="/php/charts.php"><p>Charts</p></div>
        <span id="current-page-accent"></span>
      </div>
    </div>
  )


}

export default Header;
