import React, { useState, useEffect } from "react";
import { Layout } from "../components/Layout.jsx";
import { Account } from "../components/Account.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData, toggleEditForm, updateUserData } from "../redux/features/profile/profile.slice.js";
import { useNavigate } from "react-router-dom";
import '../../src/index.css';

export function Profile() {
  const dispatch = useDispatch();
  const { firstName, lastName, error, isEditing, loading } = useSelector((state) => state.profile);
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);

  useEffect(() => {
    if (token) {
      dispatch(fetchUserData(token));
    } else if (!token || error) {
      navigate("/Signin");
    }
  }, [token, navigate, dispatch, error]);

  useEffect(() => {
    setNewFirstName(firstName);
    setNewLastName(lastName);
  }, [firstName, lastName]);

  const submit = (e) => {
    e.preventDefault();
    dispatch(updateUserData({ token, firstName: newFirstName, lastName: newLastName }));
    dispatch(toggleEditForm());
  };

  const editMode = () => {
    dispatch(toggleEditForm());
  };

  return (
    <Layout>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {firstName} {lastName}!
          </h1>
          {!isEditing ? (
            <button onClick={editMode} className="edit-button">
              Edit Name
            </button>
          ) : (
            <form onSubmit={submit} className="edit-form">
              <div className="inputs-wrapper">
                <input
                  type="text"
                  value={newFirstName}
                  onChange={(e) => setNewFirstName(e.target.value)}
                  placeholder="First Name"
                />
                <input
                  type="text"
                  value={newLastName}
                  onChange={(e) => setNewLastName(e.target.value)}
                  placeholder="Last Name"
                />
              </div>
              <div className="buttons-wrapper">
                <button className="edit-button" type="submit">
                  Save
                </button>
                <button onClick={editMode} className="edit-button" type="button">
                  Cancel
                </button>
              </div>
            </form>
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
