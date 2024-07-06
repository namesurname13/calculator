import React from "react";
import {Form, DropdownButton, Dropdown} from "react-bootstrap";
import "./DropDown.css";
import {DropDownProps} from "./interface";

const DropDown: React.FC<DropDownProps> = ({itemType, handleSelect, items, label, type}) => {
    return (
        <Form.Group controlId="formWidth" className={"dropDown mb-2"}>
            <Form.Label>{label}</Form.Label>
            <DropdownButton id={"dropdown-basic-button"} title={itemType} onSelect={(e) => handleSelect(e as string)}>
                {type !== "csvData"
                    ? (items as string[]).map((name: string, i: number) => (
                        <Dropdown.Item key={i} eventKey={name} className={`${itemType === name && "active"}`}>
                            {name}
                        </Dropdown.Item>
                    ))
                    : (items as { Наименование: string }[]).map((item: { Наименование: string }, i: number) => (
                        <Dropdown.Item key={i} eventKey={item["Наименование"]}
                                       className={`${itemType === item["Наименование"] && "active"}`}>
                            {item["Наименование"]}
                        </Dropdown.Item>
                    ))}
            </DropdownButton>
        </Form.Group>
    );
};

export default DropDown;