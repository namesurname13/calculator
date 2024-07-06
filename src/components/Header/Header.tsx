import React from 'react';
import {HeaderProps} from "./interface";

const Header: React.FC<HeaderProps> = ({productionCost, coefficient}) => {
    return (
        <header>
            <h1>
                Итоговая: <small>р.</small>{!!productionCost ? (productionCost * coefficient || 0).toFixed(2) : "0.00"}
            </h1>
            <h1>
                Себестоимость: <small>р.</small>{!!productionCost ? (productionCost).toFixed(2) : "0.00"}
            </h1>
        </header>
    );
};

export default Header;