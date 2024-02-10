import { useState } from 'react'
import './App.css'

const phrases = [
  'No',
  'Queeeeeee!',
  'ZZZ con todo respeto',
  'Wait whaaaaaat?',
  'Tas bien?',
  'Mala :c',
];

function App() {
  const [yesPressed, setYesPressed] = useState(false);
  const [noCount , setNoCount] = useState(0);
  const yesButtonSize = noCount * 20 + 100;

  const getPhrase = () => {
    const index = Math.min(noCount, phrases.length - 1);
    return phrases[index];
  };

  const geNnoImage = () => {
    if (noCount === 0) {
      return <img src='/src/assets/Hermosa.jpg' className="w-2/3 m-auto rounded-2xl"/>
    }
    if (noCount < phrases.length) {
      return <img className="w-1/3 m-auto rounded-2xl" src='/src/assets/Gato.jpeg'/>
    }
    return <img className="w-2/3 m-auto rounded-2xl" src='/src/assets/Traka.jpeg'/>
  };
  return (
    <div className="bg-cover bg" style={{backgroundImage: 'url(/src/assets/Background.jpg)'}}>
    {yesPressed ? 
      <>
        <h1 className="py-6">Te amo</h1>
        <h2 className="mb-8">Qué tal eh, sabía que dirías que sí</h2>
        <img className="w-2/3 m-auto rounded-2xl" src='/src/assets/Yes.jpeg'/>
        <img className="rounded-2xl w-1/3 m-auto mt-10" src='/src/assets/ILoveYou.jpeg'/>
      </> 
      :
      <>
        <h1 className="py-6">Hola princesa</h1>
        <h2 className="mb-16">Will you be my Valentine?</h2>
        {geNnoImage()}
        <div className="flex justify-center mt-4 space-x-4 px-2">
          <button
            className="flex-auto w-64 shadow-md"
            onClick={() => setYesPressed(true)}
            style={{width: `${yesButtonSize + 16}px`, height: `${yesButtonSize}px`}}
          >
            {noCount !== phrases.length ? 'Sí' : 'Se acabo el no, te amo'}
          </button>
          {noCount < phrases.length &&
            <button
              className="flex-auto w-10 shadow-md"
              style={{backgroundColor: '#F08589'}}
              onClick={() => setNoCount(noCount + 1)}>{getPhrase()}
            </button>
          }
        </div>
      </>
    }
  </div>
  )
}

export default App
