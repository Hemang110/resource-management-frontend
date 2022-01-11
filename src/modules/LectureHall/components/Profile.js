import React from 'react';
import { useHistory } from "react-router-dom";


export default function Profile() {
  const history = useHistory();
  
  return (
    <div className="w-1/3 m-auto p-2">
      <button
        className="w-full bg-blue-500 rounded p-3 m-3"
        onClick= {() => history.push("/UpdateEmail")}>
        Update Email
      </button>
      <button
        className="w-full bg-blue-500 rounded p-3 m-3"
        onClick={() => {
          // Update password
        }}
      >
        Update Password
      </button>
      <button
        className="w-full bg-blue-500 rounded p-3 m-3"
        onClick={() => history.push("/UpdateMobile")}
      >
        Update Mobile Number
      </button>
      <button
        className="w-full bg-red-500 rounded p-3 m-3"
        onClick={() => {
          // Delete Account
        }}
      >
        Delete Account
      </button>
    </div>
  );
}