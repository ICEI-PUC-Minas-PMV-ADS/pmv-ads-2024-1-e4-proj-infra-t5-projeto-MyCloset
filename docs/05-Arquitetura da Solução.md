# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

A arquitetura de um aplicativo mobile é um aspecto crucial que influencia diretamente na criação, manutenção e escalabilidade do aplicativo. A escolha da arquitetura correta é fundamental para garantir que o aplicativo seja eficiente, seguro, e possa ser facilmente modificado ou expandido. 

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t5-projeto-MyCloset/blob/main/docs/img/mobile_diagrama_classes.png)



## Diagrama de Classes do Sistema de Gestão de Roupas

Este diagrama de classes representa as principais entidades do sistema de gestão de roupas, incluindo suas propriedades e métodos, e as relações entre elas.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t5-projeto-MyCloset/blob/main/docs/img/Diagrama%20de%20Classes%20-%20My%20Closet.drawio%20(2).png)

## Modelo ER

Um diagrama de entidade-relacionamento (DER) é uma representação visual que descreve a estrutura de um sistema de banco de dados ou as relações entre entidades (tabelas) dentro desse sistema. Ele usa símbolos gráficos para representar entidades, atributos e os relacionamentos entre entidades. O principal objetivo de um DER é modelar como os dados são organizados e inter-relacionados em um banco de dados, proporcionando uma visão clara das entidades envolvidas e suas conexões. É amplamente utilizado em engenharia de software e gerenciamento de banco de dados para planejar, projetar e documentar sistemas de informações complexos.

A seguir, apresentamos um modelo de entidade-relacionamento (DER) para o sistema MyCloset, que foi desenhado para gerenciar informações sobre usuários, transações, peças de roupas, guarda-roupas, páginas de favoritos, páginas de itens selecionados, APIs de clima e de busca de fotos, além do banco de dados:


![diagrama de classes](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t5-projeto-MyCloset/blob/main/docs/img/Modelo%20de%20entidade%20relacional.drawio.png)


Os relacionamentos entre essas entidades são indicados por linhas que conectam as entidades, especificando a multiplicidade de cada relação (por exemplo, 1.., N..). Esses relacionamentos ajudam a definir como as entidades interagem e se relacionam dentro do sistema.

O diagrama DER facilita a visualização do modelo de dados do sistema, ajudando a garantir que todas as entidades necessárias e seus relacionamentos sejam considerados durante o processo de design e implementação do banco de dados.


## Esquema Relacional

O esquema relacional representa os dados em tabelas, juntamente com as restrições de integridade e as chaves primárias. O projeto **My Closet** visa organizar e gerenciar informações sobre peças de vestuário, looks e categorias de moda, associando esses dados a usuários individuais. O esquema relacional proposto é composto por quatro tabelas principais: **Usuários**, **Peças**, **Looks** e **Categorias**.


![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t5-projeto-MyCloset/blob/main/docs/img/Esquema%20relacional%20aj-%20My%20Closet.drawio.png)


Este esquema relacional foi projetado para otimizar o gerenciamento de dados de moda, proporcionando uma estrutura robusta e eficiente que suporta operações de consulta e manutenção de forma consistente.

  
## Tecnologias Utilizadas

### Front-End:

1. **JavaScript** 
2. **Frameworks de JavaScript:** React Native, Node.js.

3. **Design Responsivo:** Para garantir que o aplicativo seja acessível em dispositivos móveis, tablets e desktops.

4. **UI/UX Design:**  Figma, Canva.
### Back-End:

5. **Linguagem de Programação:** Javascript.

6. **Frameworks de Desenvolvimento:** React (Node.js).

7. **Banco de Dados:** MongoDb.


### Tecnologias Inteligentes:

10. **Servidores Web:** AWS/amplify.

### Sistemas:

11. O sistema utilizado foi o MERN, que é um stack baseado em JavaScript full-stack que simplifica o desenvolvimento de aplicações web modernas. 
![WhatsApp Image 2023-11-19 at 11 50 47](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t4-2023-e3-projmovt4-time2-myclosetweb-atualizado/assets/112135152/fbb85e72-ceb0-485f-aa2a-38bbccac9f58)

### Segurança:

12. React, o Node. js, o Express e o MongoDB.


### Testes e QA:

13. Jest.


## Hospedagem

Na etapa de hospedagem, o aplicativo foi publicado em um servidor. Como um software de aplicação distribuída, é essencial garantir que todos os componentes do sistema funcionem harmoniosamente em diferentes servidores e locais.

A escolha do servidor atendeu aos seguintes requisitos:

- **Capacidade**: O servidor deve ter capacidade suficiente para suportar o tráfego esperado do aplicativo.
- **Segurança**: O servidor deve ser seguro para proteger o aplicativo de ataques.
- **Performance**: O servidor deve fornecer desempenho suficiente para garantir que o aplicativo seja responsivo.



## Lançamento

Na etapa de lançamento, o aplicativo foi disponibilizado para os usuários.

O lançamento foi realizado nas seguintes plataformas:

- **Loja de aplicativos**: O aplicativo é publicado nas lojas de aplicativos, como App Store e Google Play.
  


[<img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" width="100">](https://www.apple.com/app-store/)
[<img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" width="100">](https://play.google.com/store)
  

## Qualidade de Software

A norma ISO 9126 é uma norma internacional que define um conjunto de características e subcaracterísticas para a avaliação da qualidade de software.  A escolha específica de características e subcaracterísticas dependerá das necessidades e objetivos do projeto de software.

**Tabela de qualidade de software**

| Característica               | Subcaracterística     | Definição                                                                                                                                   |
|------------------------------|-----------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| **1. Funcionalidade**        | Adequação Funcional   | ▪ Suporte para adicionar, visualizar e gerenciar roupas.                                                                                    |
|                              |                       | ▪ Recomendações de roupas com base em preferências e clima.                                                                                 |
|                              | Interoperabilidade    | ▪ Integração com outros aplicativos e dispositivos de moda.                                                                                 |
|                              |                       | ▪ Compatibilidade com assistentes virtuais para sugestões de looks.                                                                         |
|                              | Segurança de Acesso   | ▪ Controle de acesso para garantir que apenas o usuário autorizado possa gerenciar o guarda-roupa.                                          |
| **2. Confiabilidade**        | Maturidade            | ▪ Garantia de que o software funcione sem falhas significativas.                                                                            |
|                              | Tolerância a Falhas   | ▪ Capacidade de lidar com erros sem interrupção significativa no serviço.                                                                   |
| **3. Usabilidade**           | Inteligibilidade      | ▪ Interface de usuário clara e intuitiva para adicionar e gerenciar roupas.                                                                 |
|                              | Aprendizado           | ▪ Facilidade de uso para novos usuários.                                                                                                    |
|                              | Operacionalidade      | ▪ Eficiência na realização de tarefas relacionadas ao guarda-roupa.                                                                         |
| **4. Eficiência**            | Desempenho            | ▪ Tempo de resposta rápido ao adicionar ou visualizar roupas.                                                                               |
|                              | Utilização de Recursos| ▪ Uso eficiente de recursos de hardware e software.                                                                                         |
| **5. Manutenibilidade**      | Modificabilidade      | ▪ Facilidade de fazer alterações no software para adicionar novos recursos.                                                                 |
|                              | Estabilidade          | ▪ Garantia de que as alterações não causem efeitos colaterais indesejados.                                                                  |
| **6. Portabilidade**         | Adaptabilidade        | ▪ Capacidade de ser executado em diferentes dispositivos e sistemas operacionais.                                                           |
|                              | Coexistência          | ▪ Capacidade de funcionar em conjunto com outros aplicativos ou sistemas.                                                                   |
| **7. Funcionalidade de Segurança**| Confidencialidade  | ▪ Proteção dos dados do usuário, como informações de roupas e preferências.                                                                  |
|                              | Integridade           | ▪ Garantia de que os dados do guarda-roupa não sejam alterados sem autorização.                                                             |
| **8. Documentação**          | Manual do Usuário     | ▪ Fornecimento de documentação clara sobre como usar o software.                                                                            |
|                              | Documentação Técnica  | ▪ Documentação para desenvolvedores que desejam estender o software.                                                                        |
| **9. Portabilidade**         | Adaptabilidade        | ▪ Capacidade de funcionar em diferentes dispositivos, como smartphones e computadores.                                                      |
|                              | Coexistência          | ▪ Integração com outros sistemas ou aplicativos relacionados à moda.                                                                        |



## Requisitos de Qualidade

#### Funcionalidade

- **Adequação:** Fornecer uma variedade de funções para organização de guarda-roupa em diferentes dispositivos e plataformas.
- **Acurácia:** Alto grau de precisão na exibição de informações sobre roupas e conjuntos, sincronizando dados entre dispositivos.
- **Interoperabilidade:** Compatibilidade com Android, iOS e plataformas web, garantindo uma experiência consistente em todos os dispositivos.
- **Segurança:** Criptografia de dados pessoais e autenticação do usuário em todos os pontos de acesso da aplicação.
- **Conformidade:** Conformidade com as leis de proteção de dados e outras regulamentações, considerando as diferenças regionais.

#### Usabilidade

- **Inteligibilidade:** Design responsivo e intuitivo para fácil navegação em diferentes tamanhos de tela.
- **Apreensibilidade:** Inclusão de tutoriais ou guias interativos para auxiliar novos usuários em diferentes plataformas.
- **Operabilidade:** Facilidade de uso com controles bem projetados, como filtros e recursos de busca, adaptados para interação via toque ou mouse.
- **Atratividade:** Design visualmente agradável, com uma paleta de cores apropriada e adaptação ao tema do dispositivo (claro/escuro).
- **Conformidade:** Adesão às melhores práticas e padrões da indústria para design de UI/UX em aplicações multiplataforma.

#### Qualidade dos Padrões de Codificação

- **Local Storage:**
  - **Nomeação de Chaves:** Use nomes descritivos e claros para facilitar a compreensão em um contexto distribuído.
  - **Verificação de Existência:** Verifique se a chave já existe no Local Storage antes de tentar recuperar dados, considerando a possibilidade de sincronização entre dispositivos.
  - **Segurança:** Evite armazenar informações sensíveis e considere o uso de mecanismos de armazenamento mais seguros para dados críticos.

- **JSON:**
  - **Indentação:** Mantenha a indentação consistente para facilitar a leitura e manutenção do JSON em um ambiente de desenvolvimento colaborativo.
  - **Nomeação de Atributos:** Use camelCase para nomear atributos, mantendo a consistência em toda a aplicação distribuída.
  - **Validação de JSON:** Certifique-se de que o JSON é válido antes de usá-lo em sua aplicação, especialmente ao receber dados de diferentes fontes.
  - **Tipo de Dados:** Seja consistente com os tipos de dados para garantir a integridade e consistência dos dados em toda a aplicação.

### Considerações Adicionais para Aplicações Distribuídas

- **Escalabilidade:** Garanta que a aplicação possa escalar horizontalmente para lidar com o aumento da carga e do número de usuários.
- **Disponibilidade:** Implemente estratégias para garantir a alta disponibilidade da aplicação, como o uso de balanceadores de carga e replicação de dados.
- **Consistência:** Considere os desafios de consistência de dados em um ambiente distribuído e escolha o modelo de consistência adequado para sua aplicação.




