import React, {Fragment} from 'react';
import {Search} from '../components/Search/Search';
import {Card} from '../components/Card/Card';


export const Home = () => {

  const cards = new Array(9)
    .fill('')
    .map((_, i) => i);


  return (
    <Fragment>
      <Search />

      <div className="row">
        {
          cards.map((card) => {
            return (
              <div className="col-sm-4 mb-4 mt-4" key={card}>
                <Card />
              </div>
            )
          })
        }
       
      </div>
    </Fragment>
  )
}