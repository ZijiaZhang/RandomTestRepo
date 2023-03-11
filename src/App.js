import './App.css';
import {useState} from "react";


const getTemp = ({text, img}, rev) => `<div style="display: flex; ${rev ? 'flex-direction: row-reverse': ''}; align-items: center;">
  <div style="padding: 0 5%; width: 50%; letter-spacing: 2px; text-indent:2em">
    ${text}
  </div>
  <div style="width: 50%;">
    <img class="alignnone wp-image-11194 size-full" src="${img}"
      alt="" />
  </div>
</div>`


function App() {
  const [data, setData] = useState([]);
  const [rev, setRev] = useState(true);
    const [wide, setWide] = useState('');
  let r = rev;
  console.log(data);
  return (
    <div className="App">
      <div style={{width: '90vw', margin:"auto"}}>
          <div style={{display:"flex"}}>
              <div style={{width: '40%'}}>text</div><div style={{width: '40%'}}>image</div>

          </div>
        {data.map((d, index) => {
          return <div key={'index'} >
              <textarea style={{width: '40%'}} value={d['text']} onChange={(evt)=> setData((prevState) => {
                  prevState[index]['text'] = evt.target.value
              return [...prevState]
          })}/>
              <textarea style={{width: '40%'}} value={d['img']}

                       onChange={(evt)=> setData((prevState) => {
                           prevState[index]['img'] = evt.target.value
                           return [...prevState]
                       })}
          />
              <button onClick={()=> setData((prevState) => {
                  return prevState.filter((d, i) => i!==index);
              })}>-</button>
          </div>
        })}
          <div>wide</div>
          <div><textarea style={{width: '40%'}} value={wide} onChange={(evt)=> setWide(evt.target.value)}/></div>
        <button onClick={()=> setData((prevState) => {
            return [...prevState, {text: '', img: ''}]
        })}>+</button>
          <input type={'checkbox'} checked={rev} onChange={(evt) => setRev(evt.target.checked)}/>
          <label> Reverse</label>
      </div>
        <div>
            {data.map((d) => {
                r = !r;
                const trimedData = {
                  text: d.text,
                  img: d.img,
                };
                trimedData.text = trimedData.text.replace(/\r?\n|\r/g, "");
                return getTemp(trimedData, !r)
            }).join('')}
            {wide.length && `<div style="margin-top: 1%; margin-bottom: 2%;">
  <img decoding="async" class="alignnone wp-image-11194 size-full" src="${wide}" alt="">
</div>`}
        </div>
    </div>
  );
}

export default App;
