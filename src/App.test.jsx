/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('le portfolio s\'affiche sans erreur', () => {
  render(<App />);
  const mainElement = document.body;
  expect(mainElement).toBeDefined();
});