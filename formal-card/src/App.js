import React, {useState, useEffect} from 'react';
import './App.css';


function App() {

 const[status,setStatus]=useState("initial");

 const [list, setList] = useState({
    word1: '',
    word2: '',
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
  const [active, setActive] = useState(false);
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
    setActive(true);
    setStatus("complete");
  }


  function onReset(event){
    event.preventDefault();// Evita comportamiento default
    setList(defForm);
    setListCont(defForm);
    setActive(false);
    setStatus("initial")

    }


    return (
    

     <div className="App">

        <div className ="formulario">
          <form >

                {/*word1*/}
              <div className="inputs">
                <label htmlFor="word1Txt">Incredibly negative adjetive</label><br></br>
                <input id="word1Txt" className="formInputs"  type="text" 
                name="word1" onChange={handleChange}  value={list.word1} readOnly={active}/>
              </div>

            {/*word2*/}
            <div className="inputs">
              <label htmlFor="word2Txt">Unique/rare/endangeres</label><br></br>
              <input id="word2Txt" className="formInputs"  type="text" 
              name="word2" onChange={handleChange}  value={list.word2} readOnly={active}/>
            </div>

            {/*word3*/}
            <div className="inputs">
              <label htmlFor="word3Txt">Boring/miserable/stupid little</label><br></br>
              <input id="word3Txt" className="formInputs"  type="text" 
              name="word3" onChange={handleChange}  value={list.word3} readOnly={active}/>
            </div>

            {/*word4*/}
            <div className="inputs">
              <label htmlFor="word4Txt">A terrible feeling</label><br></br>
              <input id="word4Txt" className="formInputs"  type="text" 
              name="word4" onChange={handleChange}  value={list.word4} readOnly={active}/>
            </div>

            {/*word5*/}
            <div className="inputs">
              <label htmlFor="word5Txt">A nice feeling</label><br></br>
              <input id="word5Txt" className="formInputs"  type="text" 
              name="word5" onChange={handleChange}  value={list.word5} readOnly={active}/>
            </div>

            {/*word6*/}
            <div className="inputs">
              <label htmlFor="word6Txt">Another nice feeling</label><br></br>
              <input id="word6Txt" className="formInputs"  type="text" 
              name="word6" onChange={handleChange}  value={list.word6} readOnly={active}/>
            </div>

            {/*word7*/}
            <div className="inputs">
              <label htmlFor="word7Txt">Unique characteristic</label><br></br>
              <input id="word7Txt" className="formInputs"  type="text" 
              name="word7" onChange={handleChange}  value={list.word7} readOnly={active}/>
            </div>

            {/*word8*/}
            <div className="inputs">
              <label htmlFor="word8Txt">Odd skill</label><br></br>
              <input id="word8Txt" className="formInputs"  type="text" 
              name="word8" onChange={handleChange}  value={list.word8} readOnly={active}/>
            </div>

            {/*word9*/}
            <div className="inputs">
              <label htmlFor="word9Txt">Positive quality</label><br></br>
              <input id="word9Txt" className="formInputs"  type="text" 
              name="word9" onChange={handleChange}  value={list.word9} readOnly={active}/>
            </div>

            {/*word10*/}
            <div className="inputs">
              <label htmlFor="word10Txt">Number higher than seven</label><br></br>
              <input id="word10Txt" className="formInputs"  type="text" 
              name="word10" onChange={handleChange}  value={list.word10} readOnly={active}/>
            </div>

            {/*word11*/}
            <div className="inputs">
              <label htmlFor="word11Txt">Profession</label><br></br>
              <input id="word11Txt" className="formInputs"  type="text" 
              name="word11" onChange={handleChange}  value={list.word11} readOnly={active}/>
            </div>

            {/*word12*/}
            <div className="inputs">
              <label htmlFor="word12Txt">Date</label><br></br>
              <input id="word12Txt" className="formInputs"  type="text" 
              name="word12" onChange={handleChange}  value={list.word12} readOnly={active}/>
            </div>

            {/*word13*/}
            <div className="inputs">
              <label htmlFor="word13Txt">Place/venue</label><br></br>
              <input id="word13Txt" className="formInputs"  type="text" 
              name="word13" onChange={handleChange}  value={list.word13} readOnly={active}/>
            </div>

            {/*yourName*/}
            <div className="inputs">
              <label htmlFor="yourNameTxt">Your name</label><br></br>
              <input id="yourNameTxt" className="formInputs"  type="text" 
              name="yourName" onChange={handleChange}  value={list.yourName} readOnly={active}/>
            </div>

            {/*theirName*/}
            <div className="inputs">
              <label htmlFor="theirNameTxt">The name of your lover</label><br></br>
              <input id="theirNameTxt" className="formInputs"  type="text" 
              name="theirName" onChange={handleChange}  value={list.theirName} readOnly={active}/>
            </div>


          <button type="submit" id="button-generate" onClick={onSubmit}>GENERATE</button>
          <button type="reset" id="button-reset" onClick={onReset}>RESET</button>
          <button type="reset" id="button-reset" onClick={onReset}>RESET</button>
          
          </form>
        </div>
      

      {status === "complete" && <React.Fragment>
          <div className="FormatoCarta">
            <h1>Marriage Proposal</h1>
            <h4 id="dearest">TO MY DEAREST</h4>
            <p id="text">
              Today, whilst pondering the <i>{list.word1}</i> the state of the human condition,
              realized we together have something particularity <i>{list.word2}</i>. 
              While most people are stuck walking blindly toward death, we have been given 
              the unique opportunuty to rise above our <i>{list.word3}</i> lives, and perhaps 
              even experience a brieaf respite of joy in this horrble world.
            </p>

             <p id="text">
               What brougty on these thoughts? I recently noticed that I cannot be away from 
               you without intese feeling of <i>{list.word4}</i>, which serve only as a 
               reminder of the <i>{list.word5}</i> and <i>{list.word6}</i> I am filled with when I am
               by your side. Fortunately, may dear, I am quite clever, anf have found a solution:
             </p>

             <h2 id="once"> WE MUST WED AT ONCE!</h2>

             <p id="text">
               We are perfect together your <i>{list.word7}</i> could not possibile
               compliment my <i>{list.word8}</i> amy more than the sky can hide from the sun.
               Truly, by marrying, we will form a union that will serve as an example to all
               mankind. Lesser couples will look toward us as a shining beacon of 
               <i>{list.word9}</i>, an our <i>{list.word10}</i> children will be the finest
               example of <i>{list.word11}</i> know to man.
             </p>

             <p id="text">
               If you too can not deny the logic in this plan, meet me <i>{list.word12}</i>
               at <i>{list.word13}</i> and we will make it official. Do not delay!
             </p>
             <h3>Then We will Forever be known as:</h3>
             <h3 id="nombres">{list.yourName}   &   {list.theirName}</h3>
        </div>
      </React.Fragment>}
    </div>


  );
}

export default App;
