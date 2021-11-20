import { render, screen } from '@testing-library/react';
import React from 'react';
import PawsItem from './PawsItem';

const singleData = {
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
};

describe('Paw item components', () => {
  test('Renders the Paws component with the given data', () => {
    //arrange
    render(<PawsItem paw={singleData} />);
    //act

    //asset
  });
});
