import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import {FaSearch} from "react-icons/fa";

// Este componente por el momento no esta funcional por falta de tiempo para la entrega

export const SearchBar = () => {
    return (
      <InputGroup>
        <Form.Control type="search" placeholder="Buscar" />
      <Button variant="danger">{<FaSearch/>}</Button>
      </InputGroup>
    );
  };