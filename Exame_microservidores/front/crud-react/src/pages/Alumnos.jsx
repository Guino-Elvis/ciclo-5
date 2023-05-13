import axios from "axios";
import * as XLSX from 'xlsx';
import { useState, useEffect } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Label from "../components/Label";
import Modal from 'react-modal';
import App from "../App.css";
const Alumnos = () => {
// paginacion
const [currentPage, setCurrentPage] = useState(1);
const [itemsPerPage, setItemsPerPage] = useState(5);
const [searchTerm, setSearchTerm] = useState('');
const [filteredAlumnos, setFilteredAlumnos] = useState([]);

const getCurrentItems = () => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // return alumnos.slice(startIndex, endIndex);
  return filteredAlumnos.slice(startIndex, endIndex);
};

// end paginacion
  
  const API_URL = "http://localhost:9090";
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [alumnos, setAlumnos] = useState([]);
  //fracmento de paginacion
  const totalPages = Math.ceil(alumnos.length / itemsPerPage);
 const hasNextPage = () => {
  return currentPage < totalPages && alumnos.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).length > 0;
};
// end fracmento de paginacion
  const [alumnoEditado, setAlumnoEditado] = useState({
    id: null,
    nombre: "",
    apellido: "",
    codigo: "",
    correo: "",
    dni: "",
  });

  const getAlumnos = () => {
    axios
      .get(`${API_URL}/alumno`)
      .then((response) => {
        // ordenar de manera decendente 
        const sortedAlumnos = response.data.sort();
        setAlumnos(sortedAlumnos.reverse());
         // end ordenar de manera decendente 
        // handle success
              // Filtrar alumnos por nombre
      const filtered = response.data.filter((alumno) => {
        const nombreCompleto = `${alumno.nombre} ${alumno.apellido}`;
        return nombreCompleto.toLowerCase().includes(searchTerm.toLowerCase());
      });
      
      setFilteredAlumnos(filtered);
        //setAlumnos(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  const exportToExcel = (data) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Alumnos');
    const filename = 'alumnos.xlsx';
    XLSX.writeFile(workbook, filename);
  }
  // useEffect(() => {
  //   const delayDebounceFn = setTimeout(() => {
  //     handleSearch();
  //   }, 500);
  //   return () => clearTimeout(delayDebounceFn);
  // }, [searchTerm]);

  const editarAlumno = (id) => {
    const alumno = alumnos.find((p) => p.id === id);
    setAlumnoEditado({
      id: alumno.id,
      nombre: alumno.nombre,
      apellido: alumno.apellido,
      codigo: alumno.codigo,
      dni: alumno.dni,
      correo: alumno.correo,
    });
    setModalIsOpen(true)
  }

  const crearAlumno = (event) => {
    event.preventDefault();
    if (!alumnoEditado.nombre.trim() || !alumnoEditado.apellido.trim() || !alumnoEditado.dni.trim() || !alumnoEditado.codigo.trim() || !alumnoEditado.correo.trim()) {
      return; // do nothing if any required input is empty or only whitespace
    }
    axios
      .post(`${API_URL}/alumno`, alumnoEditado)
      .then((response) => {
        setAlumnoEditado({
          id: null,
          nombre: "",
          apellido: "",
          codigo: "",
          dni: "",
          correo: "",
        });
        getAlumnos();
        setModalIsOpen(false)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const actualizarAlumno = (event) => {
    event.preventDefault();
    axios
      .put(`${API_URL}/alumno`, alumnoEditado)
      .then((response) => {
        setAlumnoEditado({
          id: null,
          nombre: "",
          apellido: "",
          codigo: "",
          dni: "",
          correo: "",
        });
        getAlumnos();
        setModalIsOpen(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const eliminarAlumno = (id) => {
    axios
      .delete(`${API_URL}/alumno/${id}`)
      .then((response) => {
        getAlumnos();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  useEffect(() => {
    getAlumnos();
  }, []);

  const contenidoModal = (
<div className="modalgino">    
  <div className="form-container   ">
      <h2 className="editar-title">{alumnoEditado.id ? 'Editar Alumno' : 'Crear Alumno'}</h2>
      <form className="form-group" onSubmit={alumnoEditado.id ? actualizarAlumno : crearAlumno}>
       <div className="w-80 p-4"> 
        <Label className="label-name " title="Nombre:" />
        <Input 
          type="text "
          value={alumnoEditado.nombre}
          onChange={(event) =>
            setAlumnoEditado({
              ...alumnoEditado,
              nombre: event.target.value,
            })
          }
          className="editar-input " 
        />
        </div>
        <div className="w-80 p-4"> 
        <Label className="label-name" title="Apellido:" />
        <Input
          type="text"
          value={alumnoEditado.apellido}
          onChange={(event) =>
            setAlumnoEditado({
              ...alumnoEditado,
              apellido: event.target.value,
            })
          }
          className="editar-input"
        />
        </div>
        <div className="w-80 p-4"> 
        <Label className="label-name ml-10" title="DNI:" />
        <Input
          type="text"
          value={alumnoEditado.dni}
          onChange={(event) =>
            setAlumnoEditado({
              ...alumnoEditado,
              dni: event.target.value,
            })
          }
          className="editar-input"
        />
        </div>
        <div className="p-1">
        <Label className="label-name ml-6 " title="Código:" />
        <Input
          type="text"
          value={alumnoEditado.codigo}
          onChange={(event) =>
            setAlumnoEditado({
              ...alumnoEditado,
              codigo: event.target.value,
            })
          }
          className="editar-input"
        />
        <Label className="label-name" title="Correo:" />
        <Input
          type="email"
          value={alumnoEditado.correo}
          onChange={(event) =>
            setAlumnoEditado({
              ...alumnoEditado,
              correo: event.target.value,
            })
          }
          className="editar-input"
        /> </div> <div className="pl-96 pt-10">
        {alumnoEditado.id ? (
          <Button onClick={actualizarAlumno} className="actualizar-btn " title="Actualizar" />
        ) : (
          <Button onClick={crearAlumno} className="crear-btn" title="Crear Alumno" />
        )} </div>
      </form>
    </div></div>
  );

  const currentItems = getCurrentItems();
  return (
    <div className="alumnos-container">
      <div className="alumnos-title">Lista de Alumnos</div>
    
      <div style={{ display: "flex", justifyContent: "end"}}>
          {/* BUSCADOR */}
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
        <button onClick={getAlumnos} className=" flex rounded-md p-4 ml-2 bg-indigo-400 text-white font-semibold">
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
      BUSCAR ALUMNO</button></div>
      </div>
 {/* END BUSCADOR */}
      <Button className="nuevo m-2" onClick={() => exportToExcel(alumnos)} title="Exportar a Excel" />
        <Button className="nuevo m-2" onClick={() => setModalIsOpen(true)} title="Nuevo" />
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
        {currentItems.map((alumno)  => (
          <div className="alumnos-list" key={alumno.id}>
            <h1 className="alumno-name">{alumno.id}</h1>
            <h1 className="alumno-name">{alumno.nombre}</h1>
            <h1 className="alumno-name">{alumno.apellido}</h1>
            <h1 className="alumno-name">{alumno.dni}</h1>
            <h1 className="alumno-name">{alumno.codigo}</h1>
            <h1 className="alumno-name">{alumno.correo}</h1>
            <div className="container-buttonsEE">
              <Button
                className="editar-btn bg-black"
                onClick={() => editarAlumno(alumno.id)}
                title="EDITAR"
              />
              <Button
                className="eliminar-btn"
                onClick={() => eliminarAlumno(alumno.id)}
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

export default Alumnos;
