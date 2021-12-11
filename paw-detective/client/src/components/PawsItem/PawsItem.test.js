import { render, screen } from '@testing-library/react';
import React from 'react';
import PawsItem from './PawsItem';
import mocks from '../../mocks.js';
import { StaticRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('Paw item components', () => {

  test('Should render the Paws component with the given data', () => {

    render(
      <StaticRouter>
        <PawsItem paw={mocks.singleData} />
      </StaticRouter>
    );

    expect(screen.getByText(/parrot/)).toBeInTheDocument();
  });

  test('Should render an anchor tag with a link to the profile', async () => {

    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <PawsItem paw={mocks.singleData} />
      </Router>
    );

    screen.debug(screen.getByRole('link'));
    expect(screen.getByRole('link')).toHaveAttribute('href',`/profile/${mocks.singleData._id}`);
  });
});
