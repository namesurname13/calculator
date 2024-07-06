import React from 'react';
import { Form, Col } from 'react-bootstrap';
import {FieldProps} from "./interface";

const Field: React.FC<FieldProps> = ({ onChange, value, label, placeholder }) => {
    return (
        <Form.Group as={Col} controlId="formWidth">
            <Form.Label>{label}</Form.Label>
            <Form.Control
                className={"field"}
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value.replace(',', '.'))}
            />
        </Form.Group>
    );
};

export default Field;