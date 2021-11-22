import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event'
import App from './App';
// import mocks from './mocks.js';


jest.mock('./ApiService', () => {

  const singleData = [{
    _id: '61941eec4bf9e3b1b5effddc',
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
    _id: '61941fb54bf9e3b1b5effde0',
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
]
  return {
    getPaws: () => Promise.resolve(singleData),
    deletePaws: () => Promise.resolve(singleData[1])
  }
})

jest.mock('./components/Map/Map', () => 'p')

// jest.mock('./components/PawsItem/PawsItem', () => {
//   return {
//     window.confirm: () => return true
//   }
// })

// jest.mock("./map", () => {
//   return function DummyMap(props) {
//     return (
//       <div data-testid="map">
//         {props.center.lat}:{props.center.long}
//       </div>
//     );
//   };
// });

describe('Testing dashboard integration', () => {

    test('Testing the list of paws renders', async () => {
     //arrange
      act(() => {
        render(
        <StaticRouter >
            <App />
        </StaticRouter>)
        })

     //act
     await waitForElementToBeRemoved(() => screen.queryByText(/there no pets in this list/))
    //  screen.debug(screen.finByText(/parrot/))

     //asset
     expect(screen.queryByText(/parrot/)).toBeInTheDocument();
    })


    test('Testing the deletion of a Paw', async () => {
      act(() => {
        render(
        <StaticRouter >
            <App />
        </StaticRouter>)
        })

     //act
     await waitForElementToBeRemoved(() => screen.queryByText(/there no pets in this list/))

     act(()=> {
      userEvent.click(screen.getAllByTestId('muhbtn')[0])
     })

     await waitForElementToBeRemoved(() => screen.queryByText(/parrot/))

     expect(screen.queryByText(/parrot/)).not.toBeInTheDocument();



    });

})

// test('should show text content as loading maps', async () => {
//   // Render App
//   render(<App />);
//   // Asynchronously extract header with new text
//   const header = await screen.findByText('loading maps');
//   // Assert header to have text 'Goodbye!'
//   expect(header).toBeInTheDocument();
// });

// function mockFetch(data) {
//   return jest.fn().mockImplementation(() =>
//     Promise.resolve({
//       ok: true,
//       json: () => data
//     })
//   );
// }

// test('fetchPerson()', async () => {
//   fetch = mockFetch(someJson); // or window.fetch

//   const person = await fetchPerson('whatever id');
//   expect(person).toEqual(someJson);

//   // Make sure fetch has been called exactly once
//   expect(fetch).toHaveBeenCalledTimes(1);
// });
