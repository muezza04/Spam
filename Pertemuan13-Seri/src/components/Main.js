/**
 * membuat component main
 * menampung konten utama
 */
import Hello from "./Hello";

const Main = () => {
  return (
    <main>
      <Hello name="Seri Ani Ritonga" jurusan=" Frontend Engineer" />
      <Hello name="Deri Yamsi" jurusan=" Frontend Engineer" />
      <Hello name="Yulia Ritonga" jurusan=" Frontend Engineer" />
      <Hello name="Sari Ritonga" jurusan=" Frontend Engineer" />
      <Hello name="Putri Ritonga" jurusan=" Frontend Engineer" />
    </main>
  );
};

export default Main;
