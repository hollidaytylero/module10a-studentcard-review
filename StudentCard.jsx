// This react component shows a student's profile in the format of a card. It receives information like name, major, year, bio, and image. Then the component uses useState hook to show if the student's biography is visible. When the user clicks on the button the bio is visible or it can be hidden.


function StudentCard(props) {

  //This creates the state variable. The props get passed down into the component.
    //usestate creates a state variable called showBio. The state stores the data and it can change when the component is running. The bio is hidden when the page starts to load.
  //setShowBio is the function that updates the state.
  const { name, major, year, bio, imageUrl } = props;
  const [showBio, setShowBio] = React.useState(false);

  //This function will run when the button is clicked. It switches showBio between false and true. 
  //As the state changes, React will re-start the component.
  const toggleBio = () => {
    setShowBio(!showBio);
  };
   
  //This is what displays the student profile card.
  return (
    <div 
    
    //Here is the contanier styling for the student card.
    style={{
      maxWidth: '350px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '12px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      margin: '20px auto',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>

      //This is the display of the student's profile picture.
      <img
        src={imageUrl}
        alt={name + "'s profile"}
        style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginBottom: '12px' }}
      />

      //This displays the student's name from the props.
      <h2 style={{ margin: '0', fontSize: '22px' }}>{name}</h2>
      
      //This display's the student's major and class year.
      <p style={{ margin: '4px 0', fontSize: '16px' }}>{major} – {year}</p>
      
      //This is the button that calls toggleBio when it is clicked. The button text changes as the state changes.
      <button onClick={toggleBio} style={{
        marginTop: '12px',
        padding: '8px 16px',
        fontSize: '14px',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: '#007BFF',
        color: 'white'
      }}>

        //If shoBio is true it will display "hide bio"
        {showBio ? 'Hide Bio' : 'Show Bio'}
      </button>

      //This is a conditional function and the bio is displayed when showBio is true. React will skip this rendering when showBio is false.
      {showBio && <p style={{ marginTop: '16px', fontSize: '14px' }}>{bio}</p>}
    </div>
  );
}

//This is the final export so the student card can be imported and used in other files.
export default StudentCard;
