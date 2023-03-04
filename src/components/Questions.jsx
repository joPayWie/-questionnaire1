import { useState } from 'react'
import { questions } from '../data/questions'

export const Questions = () => {

  const [ questionNumber, setQuestionNumber ] = useState(0)
  const [ selectValue, setSelectValue ] = useState('')
  const [ finishAlert, setFinishAlert ] = useState(false) 
  const [ correctAnswer, setCorrectAnswer ] = useState(false)
  const [ wrongAnswer, setWrongAnswer ] = useState(false)
  const { question, answers } = questions[questionNumber]

   const changeQuestionNumber = () => {
        questions[questionNumber + 1] ? setQuestionNumber(questionNumber + 1) : setFinishAlert(true)
        setCorrectAnswer(false)
    }

    const finishValidationExecution = () => {
        setWrongAnswer(false)  
        setCorrectAnswer(true)
        window.setTimeout(changeQuestionNumber, 1000)
    }
  
    const validateAnswer = () => {
        for (const answer of answers) {
        if (selectValue === answer.id && answer.hasOwnProperty('correct')) {
            return finishValidationExecution()
            }
            else if (selectValue !== answer.id && !answer.hasOwnProperty('correct')) {
                setWrongAnswer(true) 
                } 
            }
        }  

  return (
    <>
        { !finishAlert && 
        <div>
            <h1>{question}</h1>
                <select value={selectValue} onChange={(e) => {
                    setSelectValue(e.target.value) 
                }}>
                    <option>Seleccione una opción</option>
                    {answers.map(answer => {
                        return <option value={answer.id} key={answer.id}>{answer.text}</option>
                    })}
                </select>
                <button onClick={validateAnswer} style={{marginLeft: '1rem'}}>Enviar</button>
                { correctAnswer && <h2 style={{backgroundColor: 'green', padding: '10px', borderRadius: '10px'}}>¡Respuesta correcta! 💪</h2> }
                { wrongAnswer && <h2 style={{backgroundColor: 'red', padding: '10px', borderRadius: '10px'}}>Respuesta incorrecta 😥</h2>}
        </div> }
        { finishAlert && 
        <div>
            <h1>Felicitaciones terminaste el cuestionario! 😁</h1> 
            <button onClick={ () => {window.location.reload(true)} }>Volver a empezar</button>
        </div> }
    </>
  )
}