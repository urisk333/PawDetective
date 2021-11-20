import { render, screen } from '@testing-library/react';
import React from 'react';

import PawsList from './PawList.js';
import { StaticRouter } from 'react-router-dom';
import mocks from '../../mocks.js'

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
        <PawsList paws={mocks.arrayData} />
      </StaticRouter>
    );

    // const items = await screen.findAllByText(/Bird/); --> Dont use when searching for indiviual element

    expect(screen.getByText(/Bird/)).toBeInTheDocument();
  });
});

