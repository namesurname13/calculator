import React, {useEffect, useState} from "react";
import {fetchCSVData} from "../../helper/helper";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Header from "../Header/Header";
import MaterialsCalculation from "../MaterialsCalculation/MaterialsCalculation";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {CSVData} from "../../interface/interface";
import Error from "../Error/Error";

function App() {

    const [csvData, setCsvData] = useState<CSVData[]>([]);
    const [coefficient, setCoefficient] = useState<string>("4");
    const [productionCost, setProductionCost] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        fetchCSVData(setCsvData, setIsLoading, setIsError);
    }, []);

    return (
        <div className={`App-header ${isLoading && "loading"}`}>
            {isLoading && <LoadingSpinner/>}
            {isError && <Error/>}
            {!isLoading && !isError &&
                <>
                    <Header productionCost={productionCost} coefficient={+coefficient}/>
                    <MaterialsCalculation
                        csvData={csvData}
                        coefficient={coefficient}
                        setProductionCost={setProductionCost}
                        setCoefficient={setCoefficient}
                    />
                </>
            }
        </div>
    );
}

export default App;
