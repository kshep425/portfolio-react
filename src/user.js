/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, {useState, useEffect} from 'react';

export default function User(props) {
  const [user, setUser] = useState(null);

  /**
   * fetchUserData
   * @param {*} id user id
   * @return {null}
   */
  async function fetchUserData(id) {
    const response = await fetch('/' + id);
    // setUser(await response.json());
    setUser({
      name: 'Joni Baez',
      age: '32',
      address: '123 Charming Avenue',
    });
  };

  useEffect(() => {
    fetchUserData(props.id);
  }, [props.id]);

  if (!user) {
    return 'loading...';
  }

  return (
    <details>
      <summary>{user.name}</summary>
      <strong>{user.age}</strong>
      <br />
      lives in {user.address}
    </details>
  );
};
