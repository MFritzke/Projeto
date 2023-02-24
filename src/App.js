import React from 'react';
import RoutesMain from './routes.js';
import AuthContextProvider from "./contest/AuthContest";

export default function App() {
  return (
    <AuthContextProvider>
      <RoutesMain/>
    </AuthContextProvider>
  )
};