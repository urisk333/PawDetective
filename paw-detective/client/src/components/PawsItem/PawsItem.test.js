import { render, screen } from '@testing-library/react';
import React from 'react';
import PawsItem from './PawsItem';
import mocks from '../../mocks.js';
import { StaticRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
// import { Simulate } from 'react-dom/test-utils';
// import PawList from '../PawsList/PawList';

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

  // test('should delete item from the list', async () => {

  //   const mockDeleteItem = jest.fn();
  //   const items = [{_id: '61941eec4bf9e3b1b5effddc'},  { _id: '61941fb54bf9e3b1b5effde0'}]

  //   // render PawList

  //   render(
  //     <StaticRouter>
  //       <PawList list={items} onClick={mockDeleteItem} />
  //     </StaticRouter>
  //   );

  //   Simulate.click('button');
  //
  //   expect(mockDeleteItem).toHaveBeenCalledTimes(1);
  //   expect(mockDeleteItem).toHaveBeenCalledWith('61941eec4bf9e3b1b5effddc') // 'mock.item.id'

  // })

});
