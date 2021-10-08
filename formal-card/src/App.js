import React, {useState, useEffect} from 'react';
import './App.css';


function App() {

 const[status,setStatus]=useState("initial");

 const [list, setList] = useState({
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

  const [defForm, setDefForm]= useState(list);
  const [show, setShow] = useState(false);
  const [listCont, setListCont]= useState(list);

  function handleChange(event) {
    const value = event.target.value;
    setList({
      ...list,
      [event.target.name]: value,
    });
  }

  function onSubmit(event) {
    event.preventDefault();// Evita comportamiento default
    setListCont(list);
    setShow(true);
    setStatus("complete");
  }


  function onReset(event){
    event.preventDefault();// Evita comportamiento default
    setList(defForm);
    setListCont(defForm);
    setShow(false);
    setStatus("initial")

    }


  return (

    <div className="App">
      <form >

        {/*word1*/}
        <div className="inputs">
          <label htmlFor="word1Txt">Incredibly negative adjetive</label>
          <input id="word1Txt" className="formInputs"  type="text" 
          name="word1" onChange={handleChange}  value={list.word1} readOnly={show}/>
        </div>

        {/*word2*/}
        <div className="inputs">
          <label htmlFor="word2Txt">Unique/rare/endangeres</label>
          <input id="word2Txt" className="formInputs"  type="text" 
          name="word2" onChange={handleChange}  value={list.word2} readOnly={show}/>
        </div>

        {/*word3*/}
        <div className="inputs">
          <label htmlFor="word3Txt">Boring/miserable/stupid little</label>
          <input id="word3Txt" className="formInputs"  type="text" 
          name="word3" onChange={handleChange}  value={list.word3} readOnly={show}/>
        </div>

        {/*word4*/}
        <div className="inputs">
          <label htmlFor="word4Txt">A terrible feeling</label>
          <input id="word4Txt" className="formInputs"  type="text" 
          name="word4" onChange={handleChange}  value={list.word4} readOnly={show}/>
        </div>

        {/*word5*/}
        <div className="inputs">
          <label htmlFor="word5Txt">A nice feeling</label>
          <input id="word5Txt" className="formInputs"  type="text" 
          name="word5" onChange={handleChange}  value={list.word5} readOnly={show}/>
        </div>

        {/*word6*/}
        <div className="inputs">
          <label htmlFor="word6Txt">Another nice feeling</label>
          <input id="word6Txt" className="formInputs"  type="text" 
          name="word6" onChange={handleChange}  value={list.word6} readOnly={show}/>
        </div>

        {/*word7*/}
        <div className="inputs">
          <label htmlFor="word7Txt">Unique characteristic</label>
          <input id="word7Txt" className="formInputs"  type="text" 
          name="word7" onChange={handleChange}  value={list.word7} readOnly={show}/>
        </div>

        {/*word8*/}
        <div className="inputs">
          <label htmlFor="word8Txt">Odd skill</label>
          <input id="word8Txt" className="formInputs"  type="text" 
          name="word8" onChange={handleChange}  value={list.word8} readOnly={show}/>
        </div>

        {/*word9*/}
        <div className="inputs">
          <label htmlFor="word9Txt">Positive quality</label>
          <input id="word9Txt" className="formInputs"  type="text" 
          name="word9" onChange={handleChange}  value={list.word9} readOnly={show}/>
        </div>

        {/*word10*/}
        <div className="inputs">
          <label htmlFor="word10Txt">Number higher than seven</label>
          <input id="word10Txt" className="formInputs"  type="text" 
          name="word10" onChange={handleChange}  value={list.word10} readOnly={show}/>
        </div>

        {/*word11*/}
        <div className="inputs">
          <label htmlFor="word11Txt">Profession</label>
          <input id="word11Txt" className="formInputs"  type="text" 
          name="word11" onChange={handleChange}  value={list.word11} readOnly={show}/>
        </div>

        {/*word12*/}
        <div className="inputs">
          <label htmlFor="word12Txt">Date</label>
          <input id="word12Txt" className="formInputs"  type="text" 
          name="word12" onChange={handleChange}  value={list.word12} readOnly={show}/>
        </div>

        {/*word13*/}
        <div className="inputs">
          <label htmlFor="word13Txt">Place/venue</label>
          <input id="word13Txt" className="formInputs"  type="text" 
          name="word13" onChange={handleChange}  value={list.word13} readOnly={show}/>
        </div>

        {/*yourName*/}
        <div className="inputs">
          <label htmlFor="yourNameTxt">Your name</label>
          <input id="yourNameTxt" className="formInputs"  type="text" 
          name="yourName" onChange={handleChange}  value={list.yourName} readOnly={show}/>
        </div>

        {/*theirName*/}
        <div className="inputs">
          <label htmlFor="theirNameTxt">The name of your lover</label>
          <input id="theirNameTxt" className="formInputs"  type="text" 
          name="theirName" onChange={handleChange}  value={list.theirName} readOnly={show}/>
        </div>


      <button type="submit" id="button-generate" onClick={onSubmit}>GENERATE</button>
      <button type="reset" id="button-reset" onClick={onReset}>RESET</button>
      
      </form>
      
      

      {status === "complete" && <React.Fragment>
          <div className="FormatoCarta">
            <h1>Marriage Proposal</h1>
            <h4 id="dearest">TO MY DEAREST</h4>
            <p id="text">
              Today, whilst pondering the ---{list.word1}--- the state of the human condition,
              realized we together have something particularity ---{list.word2}. 
              While most people are stuck walking blindly toward death, we have been given 
              the unique opportunuty to rise above our---{list.word3}--- lives, and perhaps 
              even experience a brieaf respite of joy in this horrble world.
            </p>

             <p id="text">
               What brougty on these thoughts? I recently noticed that I cannot be away from 
               you without intese feeling of__{list.word4}__, which serve only as a 
               reminder of the ____{list.word5}___ and ___{list.word6}___ I am filled with when I am
               by your side. Fortunately, may dear, I am quite clever, anf have found a solution:
             </p>

             <h2 id="once"> WE MUST WED AT ONCE!</h2>

             <p id="text">
               We are perfect together your ______{list.word7}_____ could not possibile
               compliment my _____{list.word8}_____ amy more than the sky can hide from the sun.
               Truly, by marrying, we will form a union that will serve as an example to all
               mankind. Lesser couples will look toward us as a shining beacon of 
               ___{list.word9}____, an our __{list.word10}__ children will be the finest
               example of __{list.word11}___ know to man.
             </p>

             <p id="text">
               If you too can not deny the logic in this plan, meet me ___{list.word12}_
               at ___{list.word13}__ and we will make it official. Do not delay!
             </p>
             <h3>Then We will Forever be known as:</h3>
             <h3>___{list.yourName}___ & __{list.theirName}__</h3>
        </div>
      </React.Fragment>}
    </div>


  );
}

export default App;
