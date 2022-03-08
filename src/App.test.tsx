import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import state, {addPost, updateNewPostText} from "./redux/state";



test('renders learn react link', () => {
  render(<App state={state}addPost={addPost} updateNewPostText={updateNewPostText}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
