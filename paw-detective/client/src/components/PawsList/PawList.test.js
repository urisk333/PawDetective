import { render, screen } from '@testing-library/react';
import React from 'react';

import PawsList from './PawList.js';
import { StaticRouter } from 'react-router-dom';

const singleData = [
  {
    _id: { $oid: '61941eec4bf9e3b1b5effddc' },
    lostOrFound: 'Found',
    picture:
      'https://firebasestorage.googleapis.com/v0/b/paw-detective-app.appspot.com/o/images%2Fparrot.jpg?alt=media&token=744f23c7-1a28-4574-97f6-769ab76791d3',
    animal: 'Bird',
    description:
      'I found this little blue parrot in my garden. If anyone is looking for it contact me!',
    location: 'Dublin',
    lat: 53.59119120788164,
    long: -6.4613600058531695,
    email: 'natasa410@hotmail.com',
    date: { $date: '2021-11-16T21:13:16.879Z' },
    __v: 0,
  },
  {
    _id: { $oid: '61941fb54bf9e3b1b5effde0' },
    lostOrFound: 'Lost',
    picture:
      'https://firebasestorage.googleapis.com/v0/b/paw-detective-app.appspot.com/o/images%2Fraccoon.jpg?alt=media&token=07834b39-a0b9-4e85-ba04-e9540311923f',
    animal: 'Other',
    description:
      'Our cheeky raccoon Ted has escaped again. He is small and friendly. If you have food with you he will definitely want to meet you',
    location: 'Swords, Ireland',
    lat: 53.45987775831185,
    long: -6.212519573239081,
    email: 'natasa410@hotmail.com',
    date: { $date: '2021-11-16T21:16:37.424Z' },
    __v: 0,
  },
];

describe('Paw list component test', () => {
  test('Renders "there no pets..."', async () => {
    render(<PawsList paws={[]} />);
    const items = await screen.findAllByText(/there no pets in this list😉/);

    expect(items).toHaveLength(1);
  });

  test('Renders a list of different pets from the data', () => {
    /*
    const container = document.createElement('div');

    ReactDOM.render(
      <StaticRouter>
        <PawsList paws={singleData} />
      </StaticRouter>,

      container
    );
    console.log(container.textContent);
    expect(container.textContent).toMatch('Bird');
    expect(container.textContent).toMatch('Other');
    expect(container.textContent).toMatch('Dublin');
    expect(container.textContent).toMatch('little blue parrot in my garden.');
    This works but is improper
    */
    //----------------------------------------------------------
    render(
      <StaticRouter>
        <PawsList paws={singleData} />
      </StaticRouter>
    );

    // const items = await screen.findAllByText(/Bird/); --> Dont use when searching for indiviual element

    expect(screen.getByText(/Bird/)).toBeInTheDocument();
  });
});

describe('App', () => {});
