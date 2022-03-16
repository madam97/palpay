import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose, AiFillBank } from 'react-icons/ai';
import { MdAttachMoney } from 'react-icons/md';
import { FaRegAddressCard } from 'react-icons/fa';
import { BsArrowLeftRight } from 'react-icons/bs';
import { RiLogoutBoxLine } from 'react-icons/ri';
import {ReactComponent as Logo} from '../assets/logo.svg';
import '../scss/components/header.scss';

export default function Header() {

  const [opened, setOpened] = useState<boolean>(false);

  const toggleNav = (event: React.FormEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setOpened(!opened);
  }

  // ---------------------------------------

  return (
    <header className="navbar">
      <nav>
        <Link to="/">
          <Logo width="150" />
        </Link>

        <button className="navbar-toggler ml-auto" type="button" onClick={toggleNav}>
          {!opened && <AiOutlineMenu className="icon icon-md" />}
          {opened && <AiOutlineClose className="icon icon-md" />}
        </button>

        <ul className={`nav ${opened ? 'opened' : 'closed'}`}>

          <li className="nav-divider">Transactions</li>
          <li>
            <Link to="/transaction/history">
              <BsArrowLeftRight className="icon icon-mr" /> History
            </Link>
          </li>
          <li>
            <Link to="/transaction/new">
              <MdAttachMoney className="icon icon-mr" /> New transaction
            </Link>
          </li>

          <li className="nav-divider">Profile</li>
          <li>
            <Link to="/profile/bank-account">
              <AiFillBank className="icon icon-mr" /> Bank account
            </Link>
          </li>
          <li>
            <Link to="/profile/contacts">
              <FaRegAddressCard className="icon icon-mr" /> Contacts
            </Link>
          </li>

          <li>
            <button type="button">
              <RiLogoutBoxLine className="icon icon-mr" /> Logout
            </button>
          </li>

        </ul>
      </nav>
    </header>
  )
}