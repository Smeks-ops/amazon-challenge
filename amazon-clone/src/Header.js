import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'


function header() {
  return (
    <div className='header'>
      <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon
          className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          {/* Hello sign in */}
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>

        </div>
        <div className="header__option">
          {/* Returns and Orders */}
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>

        </div>
        <div className="header__option">
          {/* Your Prime */}
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>

        </div>

        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>

      </div>
    </div>
  )
}

export default header
