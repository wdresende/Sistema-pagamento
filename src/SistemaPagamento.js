class SistemaPagamento {
  constructor() {
    this.pagamentos = [];
  }

  pagar(codigoBarras, empresa, valor) {
    if (typeof valor !== 'number' || Number.isNaN(valor) || valor <= 0) {
      throw new Error('Valor inválido para pagamento');
    }

    let categoria;

    if (valor > 100.00) {
      categoria = 'cara';
    } else {
      categoria = 'padrão';
    }

    const pagamento = {
      codigoBarras: codigoBarras,
      empresa: empresa,
      valor: valor,
      categoria: categoria
    };

    this.pagamentos.push(pagamento);

    return pagamento;
  }

  consultarUltimoPagamento() {
    return this.pagamentos.at(-1);
  }
}

module.exports = SistemaPagamento;