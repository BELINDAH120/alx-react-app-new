const UserProfile = (props) => {
        return (
                <div
                        style={{
                                border: '1px solid gray',
                                padding: '15px',
                                margin: '20px auto',
                                width: '320px',
                                borderRadius: '10px',
                                backgroundColor: '#fafafa',
                                boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
                        }}
                >
                        <h2 style={{ color: 'blue', marginBottom: '8px', fontSize: '1.2rem' }}>{props.name}</h2>

                        <p style={{ marginBottom: '6px' }}>
                                Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span>
                        </p>

                        <p style={{ fontStyle: 'italic', color: '#333' }}>{props.bio}</p>
                </div>
        );
};

export default UserProfile;