import React from 'react';
import { Picker } from 'emoji-mart';
import Image from 'next/image';

const Mainpage = () => {
    const gradientText = {
        background: 'linear-gradient(to right, #F59115, #FFF878)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        marginBottom: '20px',
        fontSize: '24px',
        fontWeight: 'bold',
      };
  return (
    <div style={{
      backgroundColor: '#1E1E1E',
      backgroundImage: 'linear-gradient(#1E1E1E, #003041, #1E1E1E)',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px solid #1E1E1E',
      boxSizing: 'border-box',
      position: 'relative',
    }}>
      <div style={{ marginBottom: '20px' }}> {/* Add margin to create space between text and buttons */}
        <p style={gradientText}>Emotion for the day??</p>
      </div>
      <div style={{    
        display: 'grid',
        gridTemplateRows: 'repeat(4, 1fr)',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '10px', 
      }}>
<<<<<<< HEAD
        <button style={buttonStyle}> 😄 Happy </button>
        <button style={buttonStyle}> 😞 Sad</button>
        <button style={buttonStyle}> 😁 Excited</button>
        <button style={buttonStyle}> ☹️ Worried</button>
=======
        <button style={buttonStyle}>Happy</button>
        <button style={buttonStyle}>Sad</button>
        <button style={buttonStyle}>Excited</button>
        <button style={buttonStyle}>Worried</button>
>>>>>>> a0a1c0fcf8b24af3238f658fa27d474be5ab5035
        <button style={buttonStyle}>Surprised</button>
        <button style={buttonStyle}>Scared</button>
        <button style={buttonStyle}>Crazy </button>
        <button style={buttonStyle}>Frustrated</button>
        <button style={buttonStyle}>Angry</button>
        <button style={buttonStyle}>Bored</button>
        <button style={buttonStyle}>Sick</button>
        <button style={buttonStyle}>Embarrassed</button>
        <button style={buttonStyle}>Tired</button>
        <button style={buttonStyle}>Nervous</button>
        <button style={buttonStyle}>Calm</button>
        <button style={buttonStyle}>Confused</button>
        <button style={buttonStyle}>Anxious</button>
        <button style={buttonStyle}>Aggressive</button>
        <button style={buttonStyle}>Sleepy</button>
        <button style={buttonStyle}>Hungry</button>
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: '10px',
  backgroundColor: '#D9D9D9',
  color: '#000000',
  border: 'none',
  borderRadius: '20px',
  cursor: 'pointer',
};

<<<<<<< HEAD
export default Mainpage;
=======
export default Mainpage;
>>>>>>> a0a1c0fcf8b24af3238f658fa27d474be5ab5035
