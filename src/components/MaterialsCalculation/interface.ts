import {CSVData} from "../../interface/interface";

export interface FieldProps {
    coefficient: string;
    csvData: CSVData[];
    setProductionCost: (productionCost: number) => void;
    setCoefficient: (coefficient: string) => void;
}