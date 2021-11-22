import { render, screen } from '@testing-library/react';
import React from 'react';
import PawsList from './PawList.js';
import { StaticRouter } from 'react-router-dom';
import mocks from '../../mocks.js'
// import userEvent from '@testing-library/user-event'
// import { Simulate } from 'react-dom/test-utils';


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

  // test('should delete item from the list', async () => {

  //   const mockDeleteItem = jest.fn();
  //   const items = [{_id: '61941eec4bf9e3b1b5effddc'},  { _id: '61941fb54bf9e3b1b5effde0'}]

  //   // render PawList

  //   render(
  //     <StaticRouter>
  //       <PawsList list={items} onClick={mockDeleteItem} />
  //     </StaticRouter>
  //   );

  //   Simulate.click('button');

  //   expect(mockDeleteItem).toHaveBeenCalledWith('61941eec4bf9e3b1b5effddc') // 'mock.item.id'

  // })
});
