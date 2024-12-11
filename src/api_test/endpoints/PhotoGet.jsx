import React from 'react';

const PhotoGet = () => {
  const [id, setId] = React.useState('');

  function handleSubmiti(event) {
    event.preventDefault();
    fetch(`https://dogsapi.origamid.dev/json/api/photo/${id}`)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }
  return (
    <form onSubmit={handleSubmiti}>
      <input type="text" value={id} onChange={({target}) => setId(target.value)}/>
      <button>Enviar</button>
    </form>
  );
};

export default PhotoGet;
