// membuat component //
const Hello = (props) => {
  return (
    <div>
      <h2>hai {props.name} </h2>
      <p>Saya {props.jurusan}</p>
    </div>
  );
};

export default Hello;
