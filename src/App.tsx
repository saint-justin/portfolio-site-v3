import * as React from 'react';
import CardRow from 'layouts/CardRow';
import Header from 'components/Header';
import { DinoCard, ChangelingCard, EggCard } from './PageData';


export default () => (
  <>
    <Header />
    <CardRow 
      id='games'
      title='Neat Games' 
      description='A few examples of some of the cool game dev projects I have worked on over the years.'
      cardInfo={[EggCard, ChangelingCard, DinoCard]} 
    />
  </>

);
