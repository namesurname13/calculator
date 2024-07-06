import axios from "axios";
import { googleSheetUrl } from "../constants/constants";
import {CSVData} from "../interface/interface";
import React from "react";

export const parseCSV = (csvText: string): CSVData[] => {
    const rows = csvText.split(/\r?\n/);
    const headers = rows[0].split(",");
    const data: CSVData[] = [];
    for (let i = 1; i < rows.length; i++) {
        const rowData = rows[i].split(",");
        const rowObject: { [key: string]: string } = {};
        for (let j = 0; j < headers.length; j++) {
            rowObject[headers[j]] = rowData[j];
        }
        data.push(<CSVData>rowObject);
    }
    return data;
};

export const fetchCSVData = (
    setCsvData: React.Dispatch<React.SetStateAction<CSVData[]>>,
    setIsLoading: (isLoading: boolean) => void,
    setIsError: (isError: boolean) => void
) => {
    axios.get<string>(googleSheetUrl)
        .then((response) => {
            setCsvData(parseCSV(response.data));
            setIsLoading(false);
        })
        .catch((error) => {
            console.error("Error fetching CSV data:", error);
            setIsError(true);
        });
};
