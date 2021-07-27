import React from 'react'


type Settings= {
  name: string,
  rate: string,
  bgImg: string
}

export const Card = ({name, rate, bgImg}: Settings) => {
  return (
    <div className="container">
      <div className="row">
        <div className="card" style={{ backgroundImage: `url(${bgImg})` }}>
          <div className="text">
            <h3>{name}</h3>
            <div className="rate">
              <span>{rate} / 10</span>
              </div>
            </div>
          </div>
        </div>
    </div>
    )
}

