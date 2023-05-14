import axios from "axios";
import * as XLSX from 'xlsx';
import { useState, useEffect } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Label from "../components/Label";
import Modal from 'react-modal';
import inscripccion from "../styles/inscripccion.css";
const Inscripccions = () => {
 
  // paginacion
const [currentPage, setCurrentPage] = useState(1);
const [itemsPerPage, setItemsPerPage] = useState(5);
const [searchTerm, setSearchTerm] = useState('');
const [filteredInscripccions, setFilteredInscripccions] = useState([]);

const getCurrentItems = () => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // return inscripccions.slice(startIndex, endIndex);
  return filteredInscripccions.slice(startIndex, endIndex);
};
// end paginacion
  const API_URL = "http://localhost:9090";
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [inscripccions, setInscripccions] = useState([]);
  //fracmento de paginacion
  const totalPages = Math.ceil(inscripccions.length / itemsPerPage);
  const hasNextPage = () => {
  return currentPage < totalPages && inscripccions.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).length > 0;
};
// end fracmento de paginacion
  const [inscripccionEditado, setInscripccionEditado] = useState({
    id: null,
    serie: "",
    numero: "",
    descripcion: "",
    alumnoId: "",
    detalle: "",
  });

  const getInscripccions = () => {
    axios
      .get(`${API_URL}/inscripccion`)
      .then((response) => {
        // ordenar de manera decendente 
        const sortedInscripccions = response.data.sort();
        setInscripccions(sortedInscripccions.reverse());
        // end ordenar de manera decendente 
        // handle success
         // Filtrar inscripccions por nombre
      const filtered = response.data.filter((inscripccion) => {
        const nombreCompleto = `${inscripccion.serie} ${inscripccion.alumnoId}`;
        return nombreCompleto.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setFilteredInscripccions(filtered);
        // setinscripccions(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }
  const exportToExcel = (data) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Inscripccions');
    const filename = 'inscripccions.xlsx';
    XLSX.writeFile(workbook, filename);
  }

  const editarinscripccion = (id) => {
    const inscripccion = inscripccions.find((p) => p.id === id);
    setInscripccionEditado({
      id: inscripccion.id,
      serie: inscripccion.serie,
      numero: inscripccion.numero,
      descripcion: inscripccion.descripcion,
      alumnoId: inscripccion.alumnoId,
      detalle: inscripccion.detalle,
    });
    setModalIsOpen(true)
  }

  const crearInscripccion = (event) => {
    event.preventDefault();
    if (!inscripccionEditado.serie.trim() || !inscripccionEditado.numero.trim() || !inscripccionEditado.descripcion.trim() || !inscripccionEditado.alumnoId.trim()) {
      return; // do nothing if any required input is empty or only whitespace
    }
    axios
      .post(`${API_URL}/inscripccion`, inscripccionEditado)
      .then((response) => {
        setInscripccionEditado({
            id: null,
            serie: "",
            numero: "",
            descripcion: "",
            alumnoId: "",
            detalle: "",
        });
        getInscripccions();
        setModalIsOpen(false)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const actualizarInscripccion = (event) => {
    event.preventDefault();
    axios
      .put(`${API_URL}/inscripccion`, inscripccionEditado)
      .then((response) => {
        setInscripccionEditado({
            id: null,
            serie: "",
            numero: "",
            descripcion: "",
            alumnoId: "",
            detalle: "",
        });
        getInscripccions();
        setModalIsOpen(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const eliminarInscripccion = (id) => {
    axios
      .delete(`${API_URL}/inscripccion/${id}`)
      .then((response) => {
        getInscripccions();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  useEffect(() => {
    getInscripccions();
  }, []);

  const contenidoModal = (
    <div className="form-container">
      <h2 className="editar-title">{inscripccionEditado.id ? 'Editar inscripccion' : 'Crear inscripccion'}</h2>
      <form className="form-group" onSubmit={inscripccionEditado.id ? actualizarInscripccion : crearInscripccion}>
        <Label className="label-name" title="Serie:" />
        <Input
          type="text"
          value={inscripccionEditado.serie}
          onChange={(event) =>
            setInscripccionEditado({
              ...inscripccionEditado,
              serie: event.target.value,
            })
          }
          className="editar-input"
        />
        <Label className="label-name" title="Numero:" />
        <Input
          type="text"
          value={inscripccionEditado.numero}
          onChange={(event) =>
            setInscripccionEditado({
              ...inscripccionEditado,
              numero: event.target.value,
            })
          }
          className="editar-input"
        />
        <Label className="label-name" title="Descripcion:" />
        <Input
          type="text"
          value={inscripccionEditado.descripcion}
          onChange={(event) =>
            setInscripccionEditado({
              ...inscripccionEditado,
              descripcion: event.target.value,
            })
          }
          className="editar-input"
        />
        <Label className="label-name" title="AlumnoID:" />
        <Input
          type="text"
          value={inscripccionEditado.alumnoId}
          onChange={(event) =>
            setInscripccionEditado({
              ...inscripccionEditado,
              alumnoId: event.target.value,
            })
          }
          className="editar-input"
        />
        <Label className="label-name" title="Detalle:" />
        <Input
          type="text"
          value={inscripccionEditado.detalle}
          onChange={(event) =>
            setInscripccionEditado({
              ...inscripccionEditado,
              detalle: event.target.value,
            })
          }
          className="editar-input"
        />
        {inscripccionEditado.id ? (
          <Button onClick={actualizarInscripccion} className="actualizar-btn" title="Actualizar" />
        ) : (
          <Button onClick={crearInscripccion} className="crear-btn" title="Crear inscripccion" />
        )}
      </form>
    </div>
  );

  const currentItems = getCurrentItems();
  return (
    <div className="inscripccions-container">
      <div className="inscripccions-title">Lista de inscripccions</div>
      <div style={{ display: "flex", justifyContent: "end"}}>
               {/*  BUSCADOR */}
       <div className=" w-full pr-20">  
      <div className="m-2 ml-0  mt-4 flex">
        <Input className={"rounded-md p-4 w-9/12 border-double border-2 border-indigo-600"} 
        type="text"
        id="searchInput"
        value={searchTerm}
        // onInput={(event) => setSearchTerm(event.target.value)}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Buscar por nombre"
        />
        <button onClick={getInscripccions} className=" flex rounded-md p-4 ml-2 bg-indigo-400 text-white font-semibold">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-6 w-6 mr-2">
        <path
          fill-rule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clip-rule="evenodd" />
      </svg>
      BUSCAR inscripccion</button></div>
      </div>
      {/* END BUSCADOR */}
        {/* BOTON DE EXPORTAR EXEL */}
        <Button className="nuevo m-2" onClick={() => exportToExcel(inscripccions)} title="Exportar a Excel" />
        {/* END BOTON DE EXPORTAR EXEL */}
        <Button className="nuevo" onClick={() => setModalIsOpen(true)} title="Nuevo" />
      </div>

      <Modal className="modal" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        {contenidoModal}
      </Modal>
      <div className="encabezado-list">
        <p className="encabezado-title" >id</p>
        <p className="encabezado-title" >Serie</p>
        <p className="encabezado-title" >Numero</p>
        <p className="encabezado-title" >Descripccion</p>
        <p className="encabezado-title" >Alumno ID</p>
        <p className="encabezado-title" >Detalle ID</p>
        <p className="encabezado-title" >Opciones</p>
      </div>
      <div className="container-List">
        {currentItems.map((inscripccion) => (
          <div className="inscripccions-list" key={inscripccion.id}>
            <h1 className="inscripccion-name">{inscripccion.id}</h1>
            <h1 className="inscripccion-name">{inscripccion.serie}</h1>
            <h1 className="inscripccion-name">{inscripccion.numero}</h1>
            <h1 className="inscripccion-name">{inscripccion.descripcion}</h1>
            <h1 className="inscripccion-name">{inscripccion.alumnoId}</h1>
            <h1 className="inscripccion-name">{inscripccion.detalle.id}</h1>
            <div className="container-buttonsEE">
              <Button
                className="editar-btn "
                onClick={() => editarinscripccion(inscripccion.id)}
                title="EDITAR"
              />
              <Button
                className="eliminar-btn"
                onClick={() => eliminarInscripccion(inscripccion.id)}
                title="ELIMINAR"
              />
            </div>
          </div>
        ))}
      </div>
            {/* botones para paginacion */}
            <div>
              <Button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="anterior-btn bg-neutral-500 p-2 m-2 text-white"
                title="Anterior"
              />
              <span>{`Página ${currentPage} de ${totalPages}`}</span>
              <Button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentItems.length < itemsPerPage || !hasNextPage()}
                className="siguiente-btn bg-blue-400 p-2 m-2 text-white"
                title="Siguiente"
              />
          </div>
  {/* end botones para paginacion */}
    </div>
  );
}

export default Inscripccions;


