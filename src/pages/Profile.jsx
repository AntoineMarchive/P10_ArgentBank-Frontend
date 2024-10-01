import React, { useState, useEffect } from "react";
import { Layout } from "../components/Layout.jsx";
import { Account } from "../components/Account.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData, updateUserData } from "../redux/features/profile/profile.actions.js";
import { useNavigate } from "react-router-dom";

export function Profile() {
  const dispatch = useDispatch();
  const { firstName, lastName, error } = useSelector((state) => state.user);
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  const [editableUserName, setEditableUserName] = useState("");


  const [isEditing, setIsEditing] = useState(false);  // Utilisation de useState pour isEditing

  useEffect(() => {
    if (token) {
      dispatch(fetchUserData(token));
    } else if (!token || error) {
      navigate("/signin");
    }
  }, [token, navigate, dispatch, error]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    dispatch(updateUserData({ userName: editableUserName, firstName, lastName, token })); // Passer aussi le token
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <Layout>
      <main className="main bg-dark">
        <div className="header">
          {isEditing ? (
            <div className="form-container">
              <h1>Edit user info</h1>
              <form onSubmit={handleSave}>
                <div className="form-group">
                  <label htmlFor="userName">User Name:</label>
                  <input
                    type="text"
                    id="userName"
                    value={editableUserName}
                    onChange={(e) => setEditableUserName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="firstName">First Name:</label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    className="no-edit"
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name:</label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    className="no-edit"
                    readOnly
                  />
                </div>
                <div className="form-buttons">
                <button type="submit">Save</button>
                  <button type="button" onClick={handleCancel}>Cancel</button>
                </div>
              </form>
            </div>
          ) : (
            <div>
              <h1>
                Welcome back<br />
                {firstName} {lastName}!
              </h1>
              <button className="edit-button" onClick={handleEditClick}>Edit Name</button>
            </div>
          )}
        </div>

        <h2 className="sr-only">Accounts</h2>
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
        />
      </main>
    </Layout>
  );
}
