const UserProfile = (props) => {
    return (
        <div
              style={{
                      border: '1px solid gray',
                              padding: '15px',
                                      margin: '20px auto',
                                              width: '300px',
                                                      borderRadius: '10px',
                                                              backgroundColor: '#fafafa'
                                                                    }}
                                                                        >
                                                                              <h2 style={{ color: 'blue', marginBottom: '10px' }}>{props.name}</h2>

                                                                                    <p style={{ marginBottom: '5px' }}>
                                                                                            Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span>
                                                                                                  </p>

                                                                                                        <p style={{ fontStyle: 'italic' }}>{props.bio}</p>
                                                                                                            </div>
                                                                                                              );
                                                                                                              };

                                                                                                              export default UserProfile;
                                                                                                              
}