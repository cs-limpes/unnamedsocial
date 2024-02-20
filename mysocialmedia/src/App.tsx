import React, { useEffect, useState } from 'react';
import { SignOutButton, SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react"
import './App.css'

function App() {
 
  return (
    <>
    <div>
      <h1>Welcome to My Social Media App</h1>
      <p>This is a social media app project where I'm doing to create a social media site. I... haven't figure it out yet, but here's the sign in page? So that's something.</p>
      <p>Sign up or sign in to see the private content</p>
    </div>
    <div>
        <SignedOut>
          <p>This content is public. Only signed out users can see this.</p>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <p>This content is private. Only signed in users can see this.</p>
          <SignOutButton signOutCallback={() => redirect('/')} />
        </SignedIn>
      </div>
    </>
  )
}
 
export default App