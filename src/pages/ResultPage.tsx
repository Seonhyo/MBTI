import React from "react";

import { ResultData } from "../stores/Result/ResultData";

function Result(): React.ReactElement {
    return (
        <img src={ResultData[0].image} width={350} height={350}/>
    )
}

export default Result;