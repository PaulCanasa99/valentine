import { useState } from 'react'
import './App.css'
import assets from './assets';

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
      return <img src={assets.Hermosa} className="w-2/3 m-auto rounded-2xl"/>
    }
    if (noCount < phrases.length) {
      return <img className="w-1/3 m-auto rounded-2xl" src={assets.Gato}/>
    }
    return <img className="w-2/3 m-auto rounded-2xl" src={assets.Traka}/>
  };
  return (
    <div className="bg-cover bg" style={{backgroundImage: `url(${assets.Background})`}}>
    {yesPressed ? 
      <>
        <h1 className="py-2">Te amo</h1>
        <h2 className="mb-2">Qué tal eh, sabía que dirías que sí</h2>
        <img className="w-2/3 m-auto rounded-2xl" src={assets.Yes}/>
        <img className="rounded-2xl w-1/3 m-auto mt-2" src={assets.ILoveYou}/>
      </> 
      :
      <>
        <h1 className="py-2">Hola princesa</h1>
        <h2 className="mb-2">Will you be my Valentine?</h2>
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
