/*
  Este arquivo é a fonte de verdade para parâmetros bancários utilizados na simulação.

  Nenhuma instituição deve ser habilitada sem:
  - parâmetros validados;
  - fonte identificada;
  - data da fonte;
  - revisão da lógica da modalidade.
*/

(function () {
  "use strict";

  window.MOST_SIMULATOR_BANK_CONFIG = Object.freeze([
    {
      id: "itau",
      name: "Itaú",
      enabled: false,
      annualRate: null,
      maxLtv: null,
      maxIncomeCommitment: null,
      maxTermMonths: null,
      maxAgeAtEnd: null,
      amortizationSystem: null,
      source: null,
      sourceDate: null,
      notes: "TODO: validar parâmetros públicos antes de habilitar."
    },
    {
      id: "bradesco",
      name: "Bradesco",
      enabled: false,
      annualRate: null,
      maxLtv: null,
      maxIncomeCommitment: null,
      maxTermMonths: null,
      maxAgeAtEnd: null,
      amortizationSystem: null,
      source: null,
      sourceDate: null,
      notes: "TODO: validar parâmetros públicos antes de habilitar."
    },
    {
      id: "santander",
      name: "Santander",
      enabled: false,
      annualRate: null,
      maxLtv: null,
      maxIncomeCommitment: null,
      maxTermMonths: null,
      maxAgeAtEnd: null,
      amortizationSystem: null,
      source: null,
      sourceDate: null,
      notes: "TODO: validar parâmetros públicos antes de habilitar."
    },
    {
      id: "caixa",
      name: "Caixa",
      enabled: false,
      annualRate: null,
      maxLtv: null,
      maxIncomeCommitment: null,
      maxTermMonths: null,
      maxAgeAtEnd: null,
      amortizationSystem: null,
      source: null,
      sourceDate: null,
      notes: "TODO: validar parâmetros públicos antes de habilitar."
    },
    {
      id: "inter",
      name: "Inter",
      enabled: false,
      annualRate: null,
      maxLtv: null,
      maxIncomeCommitment: null,
      maxTermMonths: null,
      maxAgeAtEnd: null,
      amortizationSystem: null,
      source: null,
      sourceDate: null,
      notes: "TODO: validar parâmetros públicos antes de habilitar."
    }
  ]);
}());

/*
  Checklist para ativação de uma instituição:
  1. validar taxa;
  2. validar LTV;
  3. validar comprometimento;
  4. validar prazo;
  5. validar idade;
  6. validar sistema;
  7. informar fonte;
  8. informar data;
  9. testar cenários;
  10. somente então enabled=true.
*/
