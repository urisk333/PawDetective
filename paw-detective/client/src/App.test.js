import { render } from '@testing-library/react';
import App from './App';

test('Mounts App without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
});
