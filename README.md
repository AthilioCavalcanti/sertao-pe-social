# Sertão-PE Social
## Introdução
Sertão-PE Social trata-se de um site que apresenta uma seleção de associações sociais rurais e urbanas presentes no sertão do estado de Pernambuco e tem como objetivo facilitar a busca de quem pesquisa por associações sem fins lucrativos que atuam nessa região.

Os arquivos e pastas deste projeto:
* __./index.html__: Código HTML que estrutura o site
* __./css/__: Diretório que contém arquivos com extensão .css
* __./css/media-query.css__: Código CSS com estilizações para telas com 992 ou mais pixels de largura; 
* __./css/styles.css__: Código CSS com as principais estilizações do site e estilizações para telas inferiores a 992px de largura
* __./css/variables.css__: Código CSS com as variáveis de cores usadas no site
* __./images/__: Diretório que contém os arquivos de imagens usados no site
* __./javascript/__: Diretório que contém arquivos com extensão .js
* __./javascript/main.js__: Código javascript manipulando eventos atrelados ao menu em telas menores que 992px de largura.

## Cores

* <span style="color:#1B3772; background-color:#ccc; padding: 0 10px;">**#1B3772**</span>
* <span style="color:#00A19A; background-color:#ccc; padding: 0 10px;">**#00A19A**</span>
* <span style="color:#FF9C00; background-color:#ccc; padding: 0 10px;">**#FF9C00**</span>
* <span style="color:#FFFFFF; background-color:#ccc; padding: 0 10px;">{c:#ffffff}**#FFFFFF**{/c}</span>

## Tipografia
* **Montserrat** (regular 400, semibold 600 e bold 700)

  ![Exemplo da fonte Montserrat](https://www.fontmirror.com/app_public/files/t/1/featured_image/2020/01/featured_1597.jpg)

## Variáveis
```
:root {
  --color-blue: #1B3772;
  --color-green: #00A19A;
  --color-orange: #FF9C00;
}
```
## Patterns
* Para telas inferiores a 992px de largura:
  * Título de primeiro nível (h1): 18px de tamanho e 700 de peso;
  * Título de primeiro nível (h2): 22px de tamanho e 700 de peso;
  * Corpo do texto: 14px de tamanho e 400 de peso;
  * Blocos (sections e footer): 60px de preenchimento superior;

* Para telas igual ou superiores a 992px de largura:
  * Título de primeiro nível (h1): 28px de tamanho e 700 de peso;
  * Título de primeiro nível (h2): 26px de tamanho e 700 de peso;
  * Corpo do texto: 14px de tamanho e 400 de peso;
  * Blocos (sections e footer): 60px de preenchimento superior;

## Blocos
Cada bloco possui imediatamente um elemento filho **div.container** que auxilia a delimitar a área de exibição do conteúdo do site.

* <span style="text-decoration:underline;">**header #header**</span>: Cabeçalho principal da página, possuindo o texto "Sertão-PE Social" e uma lista de links para a navegação dentro do site.

* <span style="text-decoration:underline;">**section #hero**</span>: Seção inicial da página, possuindo o **h1** da página,  um texto explicado o que é o site e uma **img**. 

* <span style="text-decoration:underline;">**section #collected-data**</span>: Seção com dados coletados de algumas regiões do sertão pernabucano, possuindo um **header**, contendo um h2 como título da seção, **div.graphics**, contendo os gráficos que apresentão os dados, e **div.description**, que envolve a legenda e fonte dos dados dos graficos. 

* <span style="text-decoration:underline;">**section #about-freehelper**</span>: Seção apresentando a Freehelper, possuindo um **header**, contendo um h2 como título da seção, e uma **div** contendo a logo da freehelper, um texto de apresentação e um link encaminhado para o site da organização.

* <span style="text-decoration:underline;">**section #participating-associations**</span>: Seção das associações mapeada, possuindo um **header**, contendo um h2 como título da seção e 3 **div.region-associations**, que agrupam, de acordo com as regiões, *cards*(div.association) com informações das associações.

* <span style="text-decoration:underline;">**section #contact**</span>: Seção com informações de contado, possuindo uma ancora mailto para o email de contado da freehelper.

* <span style="text-decoration:underline;">**footer**</span>: Rodapé da página, possuindo os créditos da realização do site.


## Tecnologias utilizadas
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Google Fonts](https://fonts.google.com/)
- [Iconify](https://docs.iconify.design/) (Biblioteca de ícones)
