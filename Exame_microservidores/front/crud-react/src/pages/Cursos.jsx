import axios from "axios";
import * as XLSX from 'xlsx';
import { useState, useEffect } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Label from "../components/Label";
import Modal from 'react-modal';
import curso from "../styles/curso.css";
const Cursos = () => {
 
  // paginacion
const [currentPage, setCurrentPage] = useState(1);
const [itemsPerPage, setItemsPerPage] = useState(5);
const [searchTerm, setSearchTerm] = useState('');
const [filteredCursos, setFilteredCursos] = useState([]);

const getCurrentItems = () => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // return cursos.slice(startIndex, endIndex);
  return filteredCursos.slice(startIndex, endIndex);
};
// end paginacion
  const API_URL = "http://localhost:9090";
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [cursos, setCursos] = useState([]);
  //fracmento de paginacion
  const totalPages = Math.ceil(cursos.length / itemsPerPage);
  const hasNextPage = () => {
  return currentPage < totalPages && cursos.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).length > 0;
};
// end fracmento de paginacion
  const [cursoEditado, setCursoEditado] = useState({
    id: null,
    nombre: "",
  });

  const getCursos = () => {
    axios
      .get(`${API_URL}/curso`)
      .then((response) => {
        // ordenar de manera decendente 
        const sortedCursos = response.data.sort();
        setCursos(sortedCursos.reverse());
        // end ordenar de manera decendente 
        // handle success
         // Filtrar cursos por nombre
      const filtered = response.data.filter((curso) => {
        const nombreCompleto = `${curso.nombre}`;
        return nombreCompleto.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setFilteredCursos(filtered);
        // setcursos(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }
  const exportToExcel = (data) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'cursos');
    const filename = 'cursos.xlsx';
    XLSX.writeFile(workbook, filename);
  }

  const editarcurso = (id) => {
    const curso = cursos.find((p) => p.id === id);
    setCursoEditado({
      id: curso.id,
      nombre: curso.nombre,
    });
    setModalIsOpen(true)
  }

  const crearCurso = (event) => {
    event.preventDefault();
    if (!cursoEditado.nombre.trim()) {
      return; // do nothing if any required input is empty or only whitespace
    }
    axios
      .post(`${API_URL}/curso`, cursoEditado)
      .then((response) => {
        setCursoEditado({
          id: null,
          nombre: "",
        });
        getCursos();
        setModalIsOpen(false)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const actualizarCurso = (event) => {
    event.preventDefault();
    axios
      .put(`${API_URL}/curso`, cursoEditado)
      .then((response) => {
        setCursoEditado({
          id: null,
          nombre: "",
        });
        getCursos();
        setModalIsOpen(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const eliminarCurso = (id) => {
    axios
      .delete(`${API_URL}/curso/${id}`)
      .then((response) => {
        getCursos();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  useEffect(() => {
    getCursos();
  }, []);

  const contenidoModal = (
    <div className="form-container">
      <h2 className="editar-title">{cursoEditado.id ? 'Editar curso' : 'Crear curso'}</h2>
      <form className="form-group" onSubmit={cursoEditado.id ? actualizarCurso : crearCurso}>
        <Label className="label-name" title="Nombre:" />
        <Input
          type="text"
          value={cursoEditado.nombre}
          onChange={(event) =>
            setCursoEditado({
              ...cursoEditado,
              nombre: event.target.value,
            })
          }
          className="editar-input"
        />
       
        {cursoEditado.id ? (
          <Button onClick={actualizarCurso} className="actualizar-btn" title="Actualizar" />
        ) : (
          <Button onClick={crearCurso} className="crear-btn" title="Crear curso" />
        )}
      </form>
    </div>
  );

  const currentItems = getCurrentItems();
  return (
    <div className="cursos-container">
      <div className="cursos-title">Lista de cursos</div>
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
        <button onClick={getCursos} className=" flex rounded-md p-4 ml-2 bg-indigo-400 text-white font-semibold">
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
      BUSCAR curso</button></div>
      </div>
      {/* END BUSCADOR */}
        {/* BOTON DE EXPORTAR EXEL */}
        <Button className="nuevo m-2" onClick={() => exportToExcel(cursos)} title="Exportar a Excel" />
        {/* END BOTON DE EXPORTAR EXEL */}
        <Button className="nuevo" onClick={() => setModalIsOpen(true)} title="Nuevo" />
      </div>

      <Modal className="modal" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        {contenidoModal}
      </Modal>
      <div className="encabezado-list">
        <p className="encabezado-title" >id</p>
        <p className="encabezado-title" >Nombre</p>
        <p className="encabezado-title" >Opciones</p>
      </div>
      <div className="container-List">
        {currentItems.map((curso) => (
          <div className="cursos-list" key={curso.id}>
            <h1 className="curso-name">{curso.id}</h1>
            <h1 className="curso-name">{curso.nombre}</h1>
            <div className="container-buttonsEE">
              <Button
                className="editar-btn "
                onClick={() => editarcurso(curso.id)}
                title="EDITAR"
              />
              <Button
                className="eliminar-btn"
                onClick={() => eliminarCurso(curso.id)}
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

export default Cursos;


