import React, { useState, useEffect } from 'react';

const ScrollText = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const triggerHeight = 300; // Adjust this value based on when you want the text to appear

    if (scrollTop > triggerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div style={{ height: '100px' }}>
        <p>Scroll down to see the text appear.</p>
      </div>
      {isVisible && (
        <div>
          <p>This text appears when you scroll down.</p>
        </div>
      )}
      <div className='my-96'>
        <h1>hi</h1>
      </div>
    </div>
  );
};

export default ScrollText;
