import React, { useState } from 'react';
import MemberForm from './components/MemberForm';
import Members from './components/Members';
import './App.css';

function App() {
  const [members, setMembers] = useState([]);

  const addNewMember = member => {
    setMembers([...members, member]);
  }

  return (
    <div className="App">
      <h1>Team Members</h1>
      <MemberForm addNewMember={addNewMember} />
      <Members membersList={members} />
    </div>
  );
}

export default App;