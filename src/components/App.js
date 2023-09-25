import React from 'react'
import '../styles/App.css';
import { Loader } from './Loader';
import { PhotoFrame } from './PhotoFrame';
const App = () => {
  const[id,setId] = React.useState(null);
  const[photo,setPhoto] = React.useState(null);
  console.log(photo)
  React.useEffect(()=>{
    if(id === 0) return;
      setPhoto(null)
      fetch(`https://jsonplaceholder.typicode.com/photos/${id}`).then((response)=>{
        return response.json()
      }).then(result=>{
        setPhoto(result)
      })
  },[id])
  return (
    <div className="App">
      <input type="number" onChange={(event)=>{
        setId(event.target.value)
      }}/>
      {photo && <PhotoFrame title={photo.title} url={photo.url} />}
      {id && !photo && <Loader/>}
    </div>
  );
}


export default App;
