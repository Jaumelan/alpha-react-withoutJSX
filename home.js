import React from 'react';
import { Navigate } from 'react-router-dom';
import Header from '../../components/Header';
import HomeBody from '../../components/HomeBody';

const HomePage = () => {
  const token = localStorage.getItem('token');
  return /*#__PURE__*/React.createElement("div", null, token ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(HomeBody, null)) : /*#__PURE__*/React.createElement(Navigate, {
    to: "/"
  }));
};

export default HomePage;