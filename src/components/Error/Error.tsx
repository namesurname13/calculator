import React from 'react';
import {Badge} from "react-bootstrap";

const Error: React.FC = () => {
    return (
        <div className={'text-center d-flex justify-content-center w-100'}>
            <Badge className={'p-3 fs-5'} bg="danger">Ошибка загрузки данных, перезагрузите страницу</Badge>
        </div>
    );
};

export default Error;