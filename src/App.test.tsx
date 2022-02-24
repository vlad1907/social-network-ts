import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

let posts = [
  {id: 1, message: "Hi dude", likes: 12},
  {id: 2, message: "Fuck you", likes: 11}
]
let dialogs = [
  {id: 1, name: 'Vlad'},
  {id: 2, name: 'Leontiev'},
  {id: 3, name: 'Bevkin'}
]

let messages = [
  {id: 1, message: "Hi"},
  {id: 2, message: "How are you?"},
  {id: 3, message: "Yo"}
]

test('renders learn react link', () => {
  render(<App posts={posts} messages={messages} dialogs={dialogs}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
