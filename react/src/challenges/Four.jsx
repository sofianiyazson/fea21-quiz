import React from 'react';
import { useState, useEffect } from 'react';

// Den här komponenten har ett par stycken problem och
// saknar några delar. Mer exakt: 5 stycken.
// Det är din uppgift att identifiera och lösa dessa.
//
// Men komponentens syfte är att hämta en användare
// från dummyjson-apiet och skriva ut dennes namn.

const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

async function getUser(setUser, setLoading) {
  setLoading(true);
  const user = await getData('https://dummyjson.com/users/1');
  setUser(user);
  setLoading(false);
}

const Four = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUser(setUser, setLoading);
  }, []);

  if (loading) {
    return <div data-testid="four-loading">Loading...</div>;
  }
  // Rör inte koden under denna kommentaren
  if (!user) {
    return <div data-testid="four-name">No user found</div>;
  }

  return <div data-testid="four-name">My name is: {user[0].firstName}</div>;
};

export default Four;
