import React, {useState, useEffect} from 'react';
import './App.css';

const status="initial";
function App() {
 const [words, setwords] = useState({
    word1: '',
    word3: '',
    word4: '',
    word5: '',
    word6: '',
    word7: '',
    word8: '',
    word9: '',
    word10: '',
    word11: '',
    word12: '',
    word13: '',
    yourName: '',
    theirName:''
});

  const [showWord, setShowWord] = useState("");

  function handleSubmit(event) {
    // Evita comportamiento default
    event.preventDefault();
    setShowWord(words)
  }

  function onSubmit(event){
  event.preventDefault(); //event no comportamiento default
    status="complete";


    }

  function onClick(event){
      status= "initial";
      console.log(status);

    }


  return (

    <div className="App">
      <form >
        <div className="inputs">
          <label htmlFor="word1">INCREDIBLE NEGATIVE ADJETIVE</label>
          <input id="word1" type="text" />
        </div>

          <label>UNIQUE/RARE/ENDANGERED</label>
          <input type="text" />
          
          <label>BORING/MISERABLE/STUPID LITTLE</label>
          <input type="text" />

          <label>A TERRIBLE FEELING</label>
          <input type="text" />

          <label>BORING/MISERABLE/STUPID LITTLE</label>
          <input type="text" />

          <label>BORING/MISERABLE/STUPID LITTLE</label>
          <input type="text" />

      <button onSubmit={onSubmit}>GENERATE</button>
      
      </form>
      <input type="Reset" value="Borrar todo" onClick={onClick}/>
      


      <div className="FormatoCarta">
        <h1>Marriage Proposal</h1>
        <h4>TO MY DEAREST</h4>
        <p id="text">
          Today, whilst pondering the {showWord.word1} the state of the human condition,
          realized we together have something particularity _2_______. 
          While most people are stuck walking blindly toward death, we have been given 
          the unique opportunuty to rise above our_____3_________ lives, and perhaps 
          even experience a brieaf respite of joy in this horrble world.
        </p>

         <p id="text">
           What brougty on these thoughts? I recently noticed that I cannot be away from 
           you without intese feeling of____4___, which serve only as a 
           reminder of the ____5___ and ___6___ I am filled with when I am
           by your side. Fortunately, may dear, I am quite clever, anf have found a solution:
         </p>

         <h2> WE MUST WED AT ONCE!</h2>

         <p id="text">
           We are perfect together your ______7_____ could not possibile
           compliment my _____8_____ amy more than the sky can hide from the sun.
           Truly, by marrying, we will form a union that will serve as an example to all
           mankind. Lesser couples will look toward us as a shining beacon of 
           _____9______, an our ____10___ children will be the finest
           example of ____11___ know to man.
         </p>

         <p id="text">
           If you too can not deny the logic in this plan, meet me _____12___
           at _____13____ and we will make it official. Do not delay!
         </p>
         <h3>Then We will Forever be known as:</h3>
         <h3>____yourName___ & ____theirName___</h3>



        

      </div>

    </div>


  );
}

export default App;
