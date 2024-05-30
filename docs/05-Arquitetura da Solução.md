# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

A arquitetura de um aplicativo mobile é um aspecto crucial que influencia diretamente na criação, manutenção e escalabilidade do aplicativo. A escolha da arquitetura correta é fundamental para garantir que o aplicativo seja eficiente, seguro, e possa ser facilmente modificado ou expandido. 

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t5-pmv-ads-2024-1-e4-proj-infra-t5-grupo05/assets/104511336/0501fe98-a9e8-4bb2-8679-e19ac47643a6)



## Diagrama de Classes do Sistema de Gestão de Roupas

Este diagrama de classes representa as principais entidades do sistema de gestão de roupas, incluindo suas propriedades e métodos, e as relações entre elas.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t5-projeto-MyCloset/blob/main/docs/img/Diagrama%20de%20Classes%20-%20My%20Closet.drawio%20(2).png)

## Modelo ER

Um diagrama de entidade-relacionamento (DER) é uma representação visual que descreve a estrutura de um sistema de banco de dados ou as relações entre entidades (tabelas) dentro desse sistema. Ele usa símbolos gráficos para representar entidades, atributos e os relacionamentos entre entidades. O principal objetivo de um DER é modelar como os dados são organizados e inter-relacionados em um banco de dados, proporcionando uma visão clara das entidades envolvidas e suas conexões.  É amplamente utilizado em engenharia de software e gerenciamento de banco de dados para planejar, projetar e documentar sistemas de informações complexos.

![diagrama de classes](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t4-2023-e3-projmovt4-time2-myclosetweb-atualizado/blob/5411395d0a1aae135bd37173f64963b0154ada21/docs/img/Diagrama%20ER%20Mycloset%2011.jpeg)


## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t5-pmv-ads-2024-1-e4-proj-infra-t5-grupo05/assets/161225132/dc90b8be-43b8-42e1-bf17-76f1b238b8f0)

  
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

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t5-pmv-ads-2024-1-e4-proj-infra-t5-grupo05/assets/161225132/c8b6c80f-7c16-449d-ba04-887098589807)

## Qualidade de Software

A norma ISO 9126 é uma norma internacional que define um conjunto de características e subcaracterísticas para a avaliação da qualidade de software.  A escolha específica de características e subcaracterísticas dependerá das necessidades e objetivos do projeto de software.
![![0bb2b6e2-9941-492f-ab11-e75b531b5179](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t4-2023-e3-projmovt4-time2-myclosetweb/assets/104511336/92ca2769-6662-4c64-82b4-06843a718be6)
imagem da tabela de qualidade de software](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t4-2023-e3-projmovt4-time2-myclosetweb/blob/main/docs/img/Qualidade%20de%20Softwere-1.png)

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




