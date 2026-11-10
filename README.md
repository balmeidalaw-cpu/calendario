# Calendário
Calendário mensal em JavaScript, construído em duas fases: primeiro no terminal e depois em uma página no navegador.

## Status
Em desenvolvimento, fase atual: terminal, função 'diaNoMes'.

## Fases
1. **No terminal:** o programa recebe o ano e o mês e imprime o calendário no terminal.
2. **No navegador:** o mesmo calendário numa página com layout próprio, publicada no GitHub Pages. As funções de lógica da fase 1 continuam as mesmas, mudando apenas a forma de mostraar o resultado.

## Como usar
Quando a fase 1 estiver pronta, o programa vai rodar assim:
```bash
node calendario.js 2026 11
```

## O que este projeto pratica
- funções, condições e laços em JavaScript
- validação de entrada (por exemplo, recusar o mês 13)
- organização do código em funções pequenas, cada uma com uma responsabilidade
- separação entre a lógica e a apresentação (a mesma lógica servindo ao terminal e ao navegador)
