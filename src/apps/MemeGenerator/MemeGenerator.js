import React, { useState, useEffect } from 'react'
import axios from 'axios'

import BodyTemplate from '../../component/BodyTemplate'
import './meme.css'

const MemeGenerator = () => {
  const initialData = {
    font_size: '32',
    topText: '',
    bottomText: '',
    memeImage: 'http://i.imgflip.com/265j.jpg',
    allMemeImgs: [],
    toggleData: (property, value) => setState({ ...state, [property]: value })
  }

  const [ state, setState ] = useState(initialData)
  const fontSize = { fontSize: Number(state.font_size) }

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://api.imgflip.com/get_memes')
      const { memes} = result.data.data
      setState(state => ({ ...state, allMemeImgs: memes }))
    }
    fetchData()
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target
    setState({ ...state, [name]: value })
  }

  const handleClick = () => {
    let randomNum = Math.floor(
      Math.random() * state.allMemeImgs.length
    )
    setState({ ...state, memeImage: state.allMemeImgs[randomNum].url })
  }

  return (
    <BodyTemplate title={'Meme Generator'}>
      <div className="meme-form">
        <input type="text"
               name="topText"
               placeholder="top text"
               onChange={handleChange}
               value={state.topText}
        />
        <br />

        <input type="text"
               name="bottomText"
               placeholder="bottom text"
               onChange={handleChange}
               value={state.bottomText}
        />
        <br />

        <input type="number"
               name="font_size"
               placeholder="font size"
               onChange={handleChange}
               value={state.font_size}
        />

        <button onClick={handleClick}>New Meme!</button>
      </div>

      <div className="meme">
        <h2 className="top" style={fontSize}>{ state.topText }</h2>
        <img src={state.memeImage} alt=".." />
        <h2 className="bottom" style={fontSize}>{ state.bottomText }</h2>
      </div>
    </BodyTemplate>
  )
}

export default MemeGenerator
