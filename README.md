Validação para cartão de crédito.
====================

Bin e padrões para validação de cartão de crédito.

Repositório para esta [gist](https://gist.github.com/erikhenrique/5931368)

Os dados dos cartões: ~~Elo~~, Hipercard desta tabela *não* são oficiais.
Tentei diversas vezes falar com o pessoal dessas bandeiras afim de ter uma informação oficial, porém, é muito difícil falar com o setor técnico e as atendentes nem sabem o que é bin de cartão :(

Esta tabela inicialmente foi montada com coleta de dados de cartões de crédito reais. Onde o usuário colocava o número do cartão de crédito dele e quando não conseguíamos saber qual a banheira pedíamos para que o usuário selecionasse a bandeira e desta forma armazenavamos os primeiros digitos do cartão.

### Pull Request, contribua

Fique a vontade para mandar um PR para que esta tabela permaneça atualizada. Ao fazer o PR por favor, informe como conseguiu essa informação de atualização para que possamos sempre ter dados confiáveis nesta tabela.


| Bandeira   | Começa com                                  | Máximo de número | Máximo de número cvc | Observações |
| ---------- | ------------------------------------------- | ---------------- | -------------------- | ----------- |
| Visa       | 4                                           | 13,16            | 3                    | |
| Mastercard | 510000 até 559999 e 222100 até 272099                                           | 16               | 3                    | |
| Diners     | 301, 305, 36, 38 [link](http://bin-iin.com/American-Express-BIN-List.html)                               | 14,16            | 3                     ||
| Elo        | 4011, 431274, 438935, 451416, 457393, 4576, 457631, 457632, 504175, 506699 à 506778, 509000 à 509999, 627780, 636297, 636368, 636369, 650031 à 650033, 650035 à 650051, 650405 à 650439, 650485 à 650538, 650541 à 650598, 650700 à 650718, 650720 à 650727, 650901 à 650920, 651652 à 651679, 655000 à 655019, 655021 à 655058 | 16               | 3                    | |
| Amex       | 340000 a 349999 e 370000 a 379999           | 15               | 4                    | |
| Discover   | 6011, 622, 64, 65                           | 16               | 4                    | |
| Aura       | 50                                          | 16               | 3                    | |
| jcb        | 35                                          | 16               | 3                    | |
| Hipercard  | 384100, 384140, 384160, 606282, 637095, 637568, 637599, 637609, 637612             | 13,16,19         | 3                    | |
| BaneseCard | 636117 (Crédito / Débito/ Múltiplo (Tarja)), 637473 (Crédito (Chip)), 637470 (Múltiplo (Chip)), 637472 (Pré Pago (Tarja)), 650725 (Crédito Puro (Chip)), 650046 (Débito (Chip)), 650591 (Múltiplo (Chip)), 651668 (Múltiplo (Chip)), 651679 (Puro (Chip)) | 16 | 3 | Cartões antigos podem ser bandeira Maestro, e os novos cartões são bandeirados ELO, então no seu bincheck você deve primeiro verificar por Banese para depois verificar por Maestro/Elo |





# Contribuidores

- @jotafelipe
- @ahonorato 
- @renatoelias
- @eliezio
- @tryvin
