import { render, screen } from '@testing-library/react';
import React from 'react';
import PawsItem from './PawsItem';
import mocks from '../../mocks.js';
import { StaticRouter, Router} from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from 'history';

describe('Paw item components', () => {
  // render?
  test('Should render the Paws component with the given data', () => {
    //arrange
    render(
      <StaticRouter>
        <PawsItem paw={mocks.singleData} />
      </StaticRouter>
    );
    expect(screen.getByText(/parrot/)).toBeInTheDocument();
  });

  // https://stackoverflow.com/questions/61869886/simplest-test-for-react-routers-link-with-testing-library-react
  test('Should route to the clicked and update dom', async () => {

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
