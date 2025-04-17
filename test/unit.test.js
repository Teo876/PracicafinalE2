const fs = require('fs');

test('La página contiene "Esta es la práctica final de Electiva 2"', () => {
  const htmlContent = fs.readFileSync('src/index.html', 'utf8');
  expect(htmlContent).toContain('Esta es la práctica final de Electiva 2');
});

