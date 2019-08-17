import React from 'react';

const Members = props => {
    return (
        <div>
            {props.membersList.map(member => {
                return (
                    <div className="member" key={member.name}>
                        <h3>{member.name}</h3>
                        <p>{member.email}</p>
                        <p>{member.role}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Members;