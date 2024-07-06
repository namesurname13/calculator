import React, {useEffect, useState} from "react";
import {Row} from "react-bootstrap";
import DropDown from "../DropDown/DropDown";
import Field from "../Field/Field";
import {coefficientDefaults, typesDefaults} from "../../constants/constants";
import {FieldProps} from "./interface";

const MaterialsCalculation: React.FC<FieldProps> = ({csvData, setProductionCost, setCoefficient, coefficient}) => {

    const [width, setWidth] = useState<string>("");
    const [height, setHeight] = useState<string>("");
    const [length, setLength] = useState<string>("");
    const [diameter, setDiameter] = useState<string>("");
    const [material, setMaterial] = useState<string>("Не выбрано");
    const [itemType, setItemType] = useState<string>(typesDefaults[0]);
    const [materialPrice, setMaterialPrice] = useState<number>(0);

    const handleSelectMaterial = (eventKey: string) => {
        setMaterial(eventKey);
        const selectedObject = csvData.find(item => item["Наименование"] === eventKey);

        if (selectedObject) {
            setMaterialPrice(1 + Number(selectedObject["ИТОГ"]));
        }
    };

    const calculateCost = (cost: number) => {
        if ((!width || !height || !length) && !diameter) {
            setProductionCost(0);
            return;
        }
        if (itemType === "Полусфера") {
            const x = Math.pow((+diameter + 0.1), 2) * materialPrice;
            setProductionCost(x);
        } else {
            const baseAmount = itemType === "Куб" ? 2 : 1;
            setProductionCost((cost * (baseAmount * (+width * +length) + 2 * (+height * +length) + 2 * (+width * +height))));
        }
    };

    const resetValues = () => {
        setWidth("");
        setHeight("");
        setLength("");
        setDiameter("");
    };

    const handleItemTypeChange = (newItemType: string): void => {
        setItemType(newItemType || "Куб");
        setCoefficient(coefficientDefaults[newItemType || "Куб"]);
    };

    useEffect(() => {
        calculateCost(materialPrice);
    }, [itemType, width, height, length, diameter, material]);

    useEffect(() => {
        resetValues();
    }, [itemType]);

    return (
        <>
            <Row
                className={`container mt-5 ${itemType === "Полусфера" ? "row-cols-sm-2 row-cols-md-4" : "row-cols-md-4"} row-cols-sm-2 p-0 d-flex justify-content-start`}>
                <DropDown itemType={itemType} handleSelect={handleItemTypeChange}
                          items={typesDefaults}
                          label={"Тип"} type={""}/>
                <DropDown itemType={material} handleSelect={handleSelectMaterial} items={csvData}
                          label={"Материал"} type={"csvData"}/>
            </Row>
            <Row
                className={`container mt-5 ${itemType === "Полусфера" ? "row-cols-sm-2 row-cols-md-4" : "row-cols-md-4"} row-cols-2 p-0 d-flex justify-content-start`}>
                {itemType !== "Полусфера" &&
                    <>
                        <Field onChange={setLength} label={"Длинна"} value={length}
                               placeholder={"Введите длину"}/>
                        <Field onChange={setWidth} label={"Ширина"} value={width}
                               placeholder={"Введите ширину"}/>
                        <Field onChange={setHeight} label={"Высота"} value={height}
                               placeholder={"Введите высоту"}/>
                    </>
                }
                {itemType === "Полусфера" &&
                    <Field onChange={setDiameter} label={"Диаметр"} value={diameter}
                           placeholder={"Введите диаметр"}/>
                }
                <Field onChange={setCoefficient} label={"КЭФ"} value={coefficient}
                       placeholder={"Введите коэфициент"}/>
            </Row>
        </>
    );
};

export default MaterialsCalculation;