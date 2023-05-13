import axios from "axios";
import * as XLSX from 'xlsx';
import { useState, useEffect } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Label from "../components/Label";
import Modal from 'react-modal';
import docente from "../styles/docente.css";
const Docentes = () => {
 
  // paginacion
const [currentPage, setCurrentPage] = useState(1);
const [itemsPerPage, setItemsPerPage] = useState(5);
const [searchTerm, setSearchTerm] = useState('');
const [filteredDocentes, setFilteredDocentes] = useState([]);

const getCurrentItems = () => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // return Docentes.slice(startIndex, endIndex);
  return filteredDocentes.slice(startIndex, endIndex);
};
// end paginacion
  const API_URL = "http://localhost:9090";
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [docentes, setDocentes] = useState([]);
  //fracmento de paginacion
  const totalPages = Math.ceil(docentes.length / itemsPerPage);
  const hasNextPage = () => {
  return currentPage < totalPages && docentes.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).length > 0;
};
// end fracmento de paginacion
  const [docenteEditado, setDocenteEditado] = useState({
    id: null,
    nombre: "",
    apellido: "",
    telefono: "",
    correo: "",
    dni: "",
  });

  const getDocentes = () => {
    axios
      .get(`${API_URL}/docente`)
      .then((response) => {
        // ordenar de manera decendente 
        const sortedDocentes = response.data.sort();
        setDocentes(sortedDocentes.reverse());
        // end ordenar de manera decendente 
        // handle success
         // Filtrar docentes por nombre
      const filtered = response.data.filter((docente) => {
        const nombreCompleto = `${docente.nombre} ${docente.apellido}`;
        return nombreCompleto.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setFilteredDocentes(filtered);
        // setDocentes(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }
  const exportToExcel = (data) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Docentes');
    const filename = 'docentes.xlsx';
    XLSX.writeFile(workbook, filename);
  }

  const editardocente = (id) => {
    const docente = docentes.find((p) => p.id === id);
    setDocenteEditado({
      id: docente.id,
      nombre: docente.nombre,
      apellido: docente.apellido,
      telefono: docente.telefono,
      dni: docente.dni,
      correo: docente.correo,
    });
    setModalIsOpen(true)
  }

  const crearDocente = (event) => {
    event.preventDefault();
    if (!docenteEditado.nombre.trim() || !docenteEditado.apellido.trim() || !docenteEditado.dni.trim() || !docenteEditado.telefono.trim() || !docenteEditado.correo.trim()) {
      return; // do nothing if any required input is empty or only whitespace
    }
    axios
      .post(`${API_URL}/docente`, docenteEditado)
      .then((response) => {
        setDocenteEditado({
          id: null,
          nombre: "",
          apellido: "",
          telefono: "",
          dni: "",
          correo: "",
        });
        getDocentes();
        setModalIsOpen(false)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const actualizarDocente = (event) => {
    event.preventDefault();
    axios
      .put(`${API_URL}/docente`, docenteEditado)
      .then((response) => {
        setDocenteEditado({
          id: null,
          nombre: "",
          apellido: "",
          telefono: "",
          dni: "",
          correo: "",
        });
        getDocentes();
        setModalIsOpen(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const eliminarDocente = (id) => {
    axios
      .delete(`${API_URL}/docente/${id}`)
      .then((response) => {
        getDocentes();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  useEffect(() => {
    getDocentes();
  }, []);

  const contenidoModal = (
    <div className="form-container">
      <h2 className="editar-title">{docenteEditado.id ? 'Editar Docente' : 'Crear Docente'}</h2>
      <form className="form-group" onSubmit={docenteEditado.id ? actualizarDocente : crearDocente}>
        <Label className="label-name" title="Nombre:" />
        <Input
          type="text"
          value={docenteEditado.nombre}
          onChange={(event) =>
            setDocenteEditado({
              ...docenteEditado,
              nombre: event.target.value,
            })
          }
          className="editar-input"
        />
        <Label className="label-name" title="Apellido:" />
        <Input
          type="text"
          value={docenteEditado.apellido}
          onChange={(event) =>
            setDocenteEditado({
              ...docenteEditado,
              apellido: event.target.value,
            })
          }
          className="editar-input"
        />
        <Label className="label-name" title="DNI:" />
        <Input
          type="text"
          value={docenteEditado.dni}
          onChange={(event) =>
            setDocenteEditado({
              ...docenteEditado,
              dni: event.target.value,
            })
          }
          className="editar-input"
        />
        <Label className="label-name" title="Telefono:" />
        <Input
          type="text"
          value={docenteEditado.telefono}
          onChange={(event) =>
            setDocenteEditado({
              ...docenteEditado,
              telefono: event.target.value,
            })
          }
          className="editar-input"
        />
        <Label className="label-name" title="Correo:" />
        <Input
          type="email"
          value={docenteEditado.correo}
          onChange={(event) =>
            setDocenteEditado({
              ...docenteEditado,
              correo: event.target.value,
            })
          }
          className="editar-input"
        />
        {docenteEditado.id ? (
          <Button onClick={actualizarDocente} className="actualizar-btn" title="Actualizar" />
        ) : (
          <Button onClick={crearDocente} className="crear-btn" title="Crear docente" />
        )}
      </form>
    </div>
  );

  const currentItems = getCurrentItems();
  return (
    <div className="docentes-container">
      <div className="docentes-title">Lista de docentes</div>
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
        <button onClick={getDocentes} className=" flex rounded-md p-4 ml-2 bg-indigo-400 text-white font-semibold">
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
      BUSCAR DOCENTE</button></div>
      </div>
      {/* END BUSCADOR */}
        {/* BOTON DE EXPORTAR EXEL */}
        <Button className="nuevo m-2" onClick={() => exportToExcel(docentes)} title="Exportar a Excel" />
        {/* END BOTON DE EXPORTAR EXEL */}
        <Button className="nuevo" onClick={() => setModalIsOpen(true)} title="Nuevo" />
      </div>

      <Modal className="modal" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        {contenidoModal}
      </Modal>
      <div className="encabezado-list">
        <p className="encabezado-title" >id</p>
        <p className="encabezado-title" >Nombre</p>
        <p className="encabezado-title" >Apellido</p>
        <p className="encabezado-title" >DNI</p>
        <p className="encabezado-title" >Código</p>
        <p className="encabezado-title" >Correo</p>
        <p className="encabezado-title" >Opciones</p>
      </div>
      <div className="container-List">
        {currentItems.map((docente) => (
          <div className="docentes-list" key={docente.id}>
            <h1 className="docente-name">{docente.id}</h1>
            <h1 className="docente-name">{docente.nombre}</h1>
            <h1 className="docente-name">{docente.apellido}</h1>
            <h1 className="docente-name">{docente.dni}</h1>
            <h1 className="docente-name">{docente.telefono}</h1>
            <h1 className="docente-name">{docente.correo}</h1>
            <div className="container-buttonsEE">
              <Button
                className="editar-btn "
                onClick={() => editardocente(docente.id)}
                title="EDITAR"
              />
              <Button
                className="eliminar-btn"
                onClick={() => eliminarDocente(docente.id)}
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

export default Docentes;


