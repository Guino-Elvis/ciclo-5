import axios from "axios";
import { useState, useEffect } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Label from "../components/Label";
import Modal from 'react-modal';
import docente from "../styles/docente.css";
const Docentes = () => {
  const API_URL = "http://localhost:9090";
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [docentes, setDocentes] = useState([]);
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
        // handle success
        setDocentes(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
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

  return (
    <div className="docentes-container">
      <div className="docentes-title">Lista de docentes</div>
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
        {docentes.map((docente) => (
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
    </div>
  );
}

export default Docentes;


