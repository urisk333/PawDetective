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

    render(
      <StaticRouter>
        <PawsList paws={mocks.arrayData} />
      </StaticRouter>
    );

    expect(screen.getByText(/Bird/)).toBeInTheDocument();
  });
});
