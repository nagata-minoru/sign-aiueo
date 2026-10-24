import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('タイトルが表示される', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: '手話学習アプリ「あいうえお」' })).toBeInTheDocument();
});

test('最初は「あ」の手話画像が表示される', () => {
  render(<App />);
  expect(screen.getByRole('img', { name: 'あ' })).toHaveAttribute('src', './signs/a.png');
});

test('「次へ」で あ → い → う → え → お → あ と切り替わる', () => {
  render(<App />);
  const next = screen.getByRole('button', { name: '次へ' });
  const expected = [
    ['い', './signs/i.png'],
    ['う', './signs/u.png'],
    ['え', './signs/e.png'],
    ['お', './signs/o.png'],
    ['あ', './signs/a.png'],
  ];

  expected.forEach(([sign, src]) => {
    fireEvent.click(next);
    expect(screen.getByRole('img', { name: sign })).toHaveAttribute('src', src);
  });
});
