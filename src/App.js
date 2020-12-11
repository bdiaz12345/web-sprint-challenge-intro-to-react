import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Content from './Content';

const imageData = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4oEJJlTlC3otMMiE5x9Bkk-Bys89UDb0VKQ&usqp=CAU',
  'data:image/jpeg;base64,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',
  'https://i.redd.it/nh3uei66vx421.jpg',
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f06a5152-4c13-4335-99c8-87346e51e7eb/d6n6dfc-d72a7f21-9f20-47db-a928-460504247033.jpg/v1/fill/w_1024,h_820,q_75,strp/badass_charmander_by_mr123spiky_d6n6dfc-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04MjAiLCJwYXRoIjoiXC9mXC9mMDZhNTE1Mi00YzEzLTQzMzUtOTljOC04NzM0NmU1MWU3ZWJcL2Q2bjZkZmMtZDcyYTdmMjEtOWYyMC00N2RiLWE5MjgtNDYwNTA0MjQ3MDMzLmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Xiphc7FQM6bBqRoQspAtptMR0m0xCTaBFYXo6RLlGTk',
  'https://library.kissclipart.com/20180917/okw/kissclipart-badass-charmeleon-clipart-charmeleon-pokmon-char-bdb169c5601e7308.jpg',
  'https://i.kinja-img.com/gawker-media/image/upload/t_original/btcrrlshicwnm7tmvyml.jpg',
  'https://pm1.narvii.com/6060/df3c625dc629e8e76a18f8395ce36c7bb7bd2126_hq.jpg',
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0e2528df-75e8-4b2b-8771-c5b21c54f6f9/d4nbylp-23840a2f-a94d-4c69-b860-59634cc44300.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMGUyNTI4ZGYtNzVlOC00YjJiLTg3NzEtYzViMjFjNTRmNmY5XC9kNG5ieWxwLTIzODQwYTJmLWE5NGQtNGM2OS1iODYwLTU5NjM0Y2M0NDMwMC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.2ZD8YKG-9xLPY4wpaa-qvcLBAtn0sXSOffGJzRQAFE8',
  'https://i.pinimg.com/originals/be/df/c7/bedfc7ca1f270f379d0c96dacadc7928.jpg',
  'https://pm1.narvii.com/6054/993d709b82f5842f661cd7b731c36875e4f0099a_hq.jpg',
  'https://static1.fjcdn.com/comments/+_1adc7c356caa9a114d1e42f02f247212.jpg',
  'https://64.media.tumblr.com/655f6477029b041d5783b914c811afca/tumblr_nv6e2hiFc31un95hzo1_1280.png',
  'https://cdn.drawception.com/images/panels/2016/8-24/qRaXaBZ6b3-14.png',
  'https://bogleech.com/pokemon/allpokes/014Kakuna.png',
  'https://cdn.donmai.us/sample/5b/f5/sample-5bf5465b995588dfcbff9b98181c1099.jpg',
  'https://i2.wp.com/twinfinite.net/wp-content/uploads/2016/11/pidgey--600x338.jpg?resize=461%2C260',
  'https://pbs.twimg.com/profile_images/378800000392155868/b9b1e238d1b18b11cd781061445a6568_400x400.jpeg',
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d73a6b6c-6504-4223-b4b0-f092bbe7db68/d1xw9at-5f696870-c9a0-4efd-b14d-d9966c063d48.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZDczYTZiNmMtNjUwNC00MjIzLWI0YjAtZjA5MmJiZTdkYjY4XC9kMXh3OWF0LTVmNjk2ODcwLWM5YTAtNGVmZC1iMTRkLWQ5OTY2YzA2M2Q0OC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.rpRaXh1jhQKLo7uz0rE1HUfE2Eydh6-o0ErTKxz84Aw',
  'https://i.pinimg.com/600x315/f7/cd/e3/f7cde333eeedd6fc5c4e95b36ee88709.jpg',
  'https://static.pokemonpets.com/images/monsters-images-800-800/18020-Shiny-Alolan-Raticate.png'
]

axios
  .get('https://pokeapi.co/api/v2/pokemon/')
  .then(res => {
    console.log(res.data.results)
  })

const App = () => {
  const [names, setNames] = useState([])
  const [images, setImages] = useState(imageData)

  useEffect(() => {
    const fetchData = () => {
      axios
        .get('https://pokeapi.co/api/v2/pokemon/')
        .then(res => {
          setNames(res.data.results.map((pokemon) => {
            return pokemon.name
          }))
          setImages(imageData.map((image) => {
            return image
          }))
        })
        .catch(err => {console.log(err)})
    }
    fetchData();
  }, [])

  console.log(names)

  console.log(images)

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Pokemanz</h1>
      <Content names={names} images={images} />
    </div>
  );
}

export default App;
