const Provinsi = (props) => {
   const { province, no } = props;
 
   return (
     <tr>
       <td>{no}</td>
       <td>{province.kota}</td>
       <td>{province.kasus}</td>
       <td>{province.sembuh}</td>
       <td>{province.dirawat}</td>
       <td>{province.meninggal}</td>
     </tr>
   );
 };

export default Provinsi;