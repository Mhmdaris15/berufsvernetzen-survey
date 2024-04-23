import React from 'react'
import './App.css'
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { json } from './types/surveys';
import { ContrastDark } from "survey-core/themes/contrast-dark";
import "survey-core/defaultV2.min.css";

function App() {
  const survey = new Model(json);
  const [pageNo, setPageNo] = React.useState<number>(0);

  React.useEffect(() => {
    survey.applyTheme(ContrastDark);
    setPageNo(survey.currentPageNo);
  }, [survey]); // Apply theme only when survey object changes

  return (
    <Survey currentPageNo={pageNo} model={survey} />
  )
}

export default App
