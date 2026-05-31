const assert = require('assert');
const SistemaPagamento = require('../src/SistemaPagamento');

describe('SistemaPagamento - realização e consulta de pagamentos', function () {
  it('deve realizar um pagamento e retornar categoria cara quando o valor for maior que 100', function () {
    const sistemaPagamento = new SistemaPagamento();

    sistemaPagamento.pagar('0987-7656-3475', 'Samar', 156.87);

    const ultimoPagamento = sistemaPagamento.consultarUltimoPagamento();

    assert.strictEqual(ultimoPagamento.codigoBarras, '0987-7656-3475');
    assert.strictEqual(ultimoPagamento.empresa, 'Samar');
    assert.strictEqual(ultimoPagamento.valor, 156.87);
    assert.strictEqual(ultimoPagamento.categoria, 'cara');
  });

  it('deve realizar um pagamento e retornar categoria padrão quando o valor for menor que 100', function () {
    const sistemaPagamento = new SistemaPagamento();

    sistemaPagamento.pagar('1234-5678-9999', 'Caesb', 89.90);

    const ultimoPagamento = sistemaPagamento.consultarUltimoPagamento();

    assert.strictEqual(ultimoPagamento.codigoBarras, '1234-5678-9999');
    assert.strictEqual(ultimoPagamento.empresa, 'Caesb');
    assert.strictEqual(ultimoPagamento.valor, 89.90);
    assert.strictEqual(ultimoPagamento.categoria, 'padrão');
  });

  it('deve realizar um pagamento e retornar categoria padrão quando o valor for igual a 100', function () {
    const sistemaPagamento = new SistemaPagamento();

    sistemaPagamento.pagar('5555-5555-5555', 'Neoenergia', 100.00);

    const ultimoPagamento = sistemaPagamento.consultarUltimoPagamento();

    assert.strictEqual(ultimoPagamento.codigoBarras, '5555-5555-5555');
    assert.strictEqual(ultimoPagamento.empresa, 'Neoenergia');
    assert.strictEqual(ultimoPagamento.valor, 100.00);
    assert.strictEqual(ultimoPagamento.categoria, 'padrão');
  });

  it('deve retornar apenas o último pagamento realizado', function () {
    const sistemaPagamento = new SistemaPagamento();

    sistemaPagamento.pagar('1111-1111-1111', 'Empresa A', 50.00);
    sistemaPagamento.pagar('2222-2222-2222', 'Empresa B', 200.00);

    const ultimoPagamento = sistemaPagamento.consultarUltimoPagamento();

    assert.strictEqual(ultimoPagamento.codigoBarras, '2222-2222-2222');
    assert.strictEqual(ultimoPagamento.empresa, 'Empresa B');
    assert.strictEqual(ultimoPagamento.valor, 200.00);
    assert.strictEqual(ultimoPagamento.categoria, 'cara');
  });

  it('deve lançar erro quando o valor for zero', function () {
    const sistemaPagamento = new SistemaPagamento();

    assert.throws(
      function () {
        sistemaPagamento.pagar('3333-3333-3333', 'Empresa C', 0);
      },
      {
        message: 'Valor inválido para pagamento'
      }
    );
  });

  it('deve lançar erro quando o valor for negativo', function () {
    const sistemaPagamento = new SistemaPagamento();

    assert.throws(
      function () {
        sistemaPagamento.pagar('4444-4444-4444', 'Empresa D', -50);
      },
      {
        message: 'Valor inválido para pagamento'
      }
    );
  });

  it('deve lançar erro quando o valor não for um número', function () {
    const sistemaPagamento = new SistemaPagamento();

    assert.throws(
      function () {
        sistemaPagamento.pagar('6666-6666-6666', 'Empresa E', 'abc');
      },
      {
        message: 'Valor inválido para pagamento'
      }
    );
  });
});