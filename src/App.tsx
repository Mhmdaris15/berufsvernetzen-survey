import React from 'react'
import './App.css'
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { json } from './types/surveys';
import {  SolidLight } from "survey-core/themes/solid-light";
// import { ThreeDimensionalLight } from "survey-core/themes/threedimensional-light";
import "survey-core/defaultV2.min.css";

function App() {
  const survey = new Model(json);
  const [pageNo, setPageNo] = React.useState<number>(0);

  React.useEffect(() => {
    survey.applyTheme(SolidLight);
    
    setPageNo(survey.currentPageNo);
  }, [survey]); // Apply theme only when survey object changes 

  return (
    <Survey currentPageNo={pageNo} model={survey} />
  )
}

export default App
