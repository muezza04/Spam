const Hello = (props) => {
    const { name, jurusan } = props;
    return (
      <div>
        <h1>Saya {name}</h1>
        <p>Saya sedang belajar React.js</p>
        <p>Saya Jurusan {jurusan}</p>
      </div>
    );
  };
  
  export default Hello;