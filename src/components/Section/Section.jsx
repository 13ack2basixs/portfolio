import React from 'react';

// Create section tag
const Section = ({ id, children }) => (
  <section id={id} className="section">
    {children}
  </section>
);

export default Section;
