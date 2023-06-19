
// Componentes
import Ident from './components/Ident';
import ReBack from './components/ReBack';
import TheEnd from './components/TheEnd';
import Steps from './components/Steps';
// import Done from './done';
import { FiSend } from 'react-icons/fi'


import './App.css';

// HOOKS
import { useForm } from './hooks/useForm';
import { useState } from 'react';

const FormTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
}

function App() {
  const [data, setData] = useState(FormTemplate);
  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value }
    })
  }

  // Para ter fácil acesso por índice
  const formComponents = [
    <Ident data={data} updateFieldHandler={updateFieldHandler} />,
    <ReBack data={data} updateFieldHandler={updateFieldHandler} />,
    <TheEnd data={data} updateFieldHandler={updateFieldHandler} />,
    // <Done data={data} updateFieldHandler={updateFieldHandler} />,
  ];

  // Extraindo de OBJ
  const {
    currentStep,
    currentComponent,
    changeStep,
    isLastStep,
    isFirstStep,
    currentReBack,
  } = useForm(formComponents)

  return (
    <div className="app">
      <div className="header">
        <h1><span className='red'>Feed</span>Back do Serviço</h1>
        <p>Bem vindo ao processo de avaliação do serviço.<br />
          Por favor, insira os dados abaixo.</p>
      </div>
      <div className="form-main">
        <div className="p">
          <Steps currentStep={currentStep} />
        </div>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-main">
            {currentComponent}
          </div>
          <div className="act">
            <div className="btn-div">
              {!isFirstStep && (
                <button type="button" className='btn'
                  onClick={() => changeStep(currentStep - 1)}>
                  Voltar</button>
              )}
            </div>
            <div className="btn-div">
              {!isLastStep ? (
                <button type="submit" className='btn'>
                  Próximo
                </button>
              ) : (<button type="submit" className='btn'>
                Enviar
                <FiSend /></button>)}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
