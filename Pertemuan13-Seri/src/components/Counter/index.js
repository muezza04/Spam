import { useEffect, useState } from "react";

function Counter() {
  // mengembalikan sepasang value (array) : [0, function()]
  const [angka, setAngka] = useState(0);

  function AddAngka() {
    setAngka(angka + 1);
  }

  /**
   * useEffect dijalankan pasa lifecycle mount dan update.
   */

  function updateDOM() {
    console.log("Lifecycle: Dimount");

    //melakukan side effect: mengakses DOM
    document.title = `Hasil: ${angka}`;
  }
  useEffect(updateDOM, [angka]);

  console.log("Lifecycle: Dirender");

  return (
    <div>
      <p>Hasil: {angka}</p>
      <button onClick={AddAngka}>Add</button>
    </div>
  );
}

export default Counter;
