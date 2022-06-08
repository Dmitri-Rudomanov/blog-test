const styles = {
  wrapper: {
    lineHeight: 1.6,
    padding: 15,
  },
  lines: {
    fontSize: 20,
    fontWeight: 700,
  },
};

const About = () => {
  return (
    <div style={styles.wrapper}>
      <p style={styles.lines}>Super simple react blog</p>
      <p style={styles.lines}>
        Add new posts,comment them and change them if you want
      </p>
      <h2>Why React?</h2>
      React’s popularity today has eclipsed that of all other front-end
      development frameworks. Here is why:
      <ul>
        <li>
          Easy creation of dynamic applications:React makes it easier to create
          dynamic web applications because it requires less coding and offers
          more functionality
        </li>
        <li>
          Improved performance: React uses Virtual DOM, thereby creating web
          applications faster.
        </li>
        <li>
          Reusable components: Components are the building blocks of any React
          application, and a single app usually consists of multiple components.
        </li>
        <li>
          Unidirectional data flow: React follows a unidirectional data flow.
        </li>
        <li>
          Small learning curve: React is easy to learn, as it mostly combines
          basic HTML and JavaScript concepts with some beneficial additions.
        </li>
        <li>
          Dedicated tools for easy debugging: Facebook has released a Chrome
          extension that can be used to debug React applications.
        </li>
      </ul>
    </div>
  );
};

export default About;
