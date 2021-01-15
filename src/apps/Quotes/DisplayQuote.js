import React from 'react'

const DisplayQuote = ({ quote, handleClick, color }) => (
  <div>
    <div className="card">
      <div className="card-header">
        Quote
      </div>

      <div className="card-body">
        <blockquote className="blockquote mb-0 font-italic">
          <p className="fadeIn">“{quote.quote}”</p>
          <footer className="blockquote-footer float-right">
            { quote.author }
          </footer>
        </blockquote>
      </div>
    </div>

    <div className="d-flex justify-content-center mt-3">
      <button className="btn bg-primary"
              type="button"
              onClick={handleClick}
              style={{ backgroundcolor: color() }}>
        Next
      </button>
    </div>
  </div>
)

export default DisplayQuote
