import React, { useState } from 'react'

import BodyTemplate from '../../component/BodyTemplate'
import DisplayQuote from './DisplayQuote'
import quotes from './data'

import './quote.css'

const Quotes = () => {
  const [ quote, setQuote ] = useState({
    quote: quotes[0].quote,
    author: quotes[0].author
  })

  const randomQuote = () => quotes[Math.floor(Math.random() * quotes.length)]
  const shuffleQuotes = array => array.sort(() => Math.random() - 0.5 )

  const handleClick = () => {
    const generateRandomQuote = randomQuote()
    setQuote({
      quote: generateRandomQuote.quote,
      author: generateRandomQuote.author
    })
    shuffleQuotes(quotes)
  }

  const randomColor = () => {
    const color = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)})
    )`
    return color
  }

  return (
    <BodyTemplate className="'Words of Wisdom from Filipino Presidents'">
      <DisplayQuote quote={quote}
                    handleClick={handleClick}
                    color={randomColor} />
    </BodyTemplate>
  )
}

export default Quotes
