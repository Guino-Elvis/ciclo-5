import axios from "axios";
import { useState, useEffect } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Label from "../components/Label";
import Modal from 'react-modal';
import App from "../App.css";
const Alumnos = () => {
  const API_URL = "http://localhost:8081";
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [alumnos, setAlumnos] = useState([]);
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
        // handle success
        setAlumnos(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

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
    <div className="form-container">
      <h2 className="editar-title">{alumnoEditado.id ? 'Editar Alumno' : 'Crear Alumno'}</h2>
      <form className="form-group" onSubmit={alumnoEditado.id ? actualizarAlumno : crearAlumno}>
        <Label className="label-name" title="Nombre:" />
        <Input
          type="text"
          value={alumnoEditado.nombre}
          onChange={(event) =>
            setAlumnoEditado({
              ...alumnoEditado,
              nombre: event.target.value,
            })
          }
          className="editar-input"
        />
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
        <Label className="label-name" title="DNI:" />
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
        <Label className="label-name" title="Código:" />
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
        />
        {alumnoEditado.id ? (
          <Button onClick={actualizarAlumno} className="actualizar-btn" title="Actualizar" />
        ) : (
          <Button onClick={crearAlumno} className="crear-btn" title="Crear Alumno" />
        )}
      </form>
    </div>
  );

  return (
    <div className="alumnos-container">
      <div className="alumnos-title">Lista de Alumnos</div>
      <div style={{ display: "flex", justifyContent: "end"}}>
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
        {alumnos.map((alumno) => (
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
    </div>
  );
}

export default Alumnos;
