import { useState } from 'react';
import './PalleteApp.css';
import Button from './Button';
import AppHeader from './AppHeader';
import AppSideBar from './AppSideBar';
import AppPreview from './AppPreview';

export default function PalleteApp() {
  

  return (
    <>
    <AppHeader />
    <div className="app-body">
    <AppSideBar />
    <AppPreview />
    </div>
    
    </>
  );
}
