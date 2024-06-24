

# Sprint Banco de dados

Durante a sprint de banco de dados, nosso principal objetivo foi garantir a eficiência, segurança e escalabilidade do sistema de armazenamento de dados. Esta sprint focou na implementação de uma API protegida para gerenciar a interação com nosso banco de dados MongoDB, além da integração com o Cloudinary para armazenamento de fotos.

# Funcionalidades Principais

## API Protegida
- A interação com o banco de dados MongoDB é realizada através de uma API protegida.
- Garante que somente usuários autorizados possam acessar e modificar os dados.
- Mantém a integridade e segurança dos dados armazenados.

## Armazenamento de Fotos
- As fotos enviadas pelos usuários são inicialmente armazenadas no MongoDB.
- Antes de serem enviadas para o MongoDB, as fotos passam por um processamento inicial.
- Posteriormente, as fotos são transferidas para o Cloudinary para armazenamento permanente.

## Integração com Cloudinary
- Utilizado para armazenar fotos devido à sua capacidade de gerenciar arquivos de mídia de maneira eficiente e segura.
- As fotos são enviadas para nosso sistema, processadas, e depois transferidas para o Cloudinary.
- Melhora a performance e a gestão dos arquivos de mídia.

## Processo de Upload de Fotos
1. **Recepção de Fotos**: Fotos são enviadas pelos usuários através de um frontend intuitivo.
2. **Processamento Inicial**: Fotos passam por redimensionamento, compressão e verificação de conformidade.
3. **Armazenamento Temporário no MongoDB**: Fotos processadas são armazenadas temporariamente no MongoDB.
4. **Transferência para o Cloudinary**: Fotos verificadas são transferidas para o Cloudinary.
5. **Atualização do Banco de Dados**: MongoDB é atualizado com os links das fotos armazenadas no Cloudinary.

## Segurança e Escalabilidade
- **Autenticação e Autorização**: Mecanismos robustos para garantir acesso seguro aos dados.
- **Backups Regulares**: Realização de backups regulares dos dados no MongoDB.
- **Monitoramento Contínuo**: Utilização de ferramentas de monitoramento para identificar e resolver problemas de performance ou segurança.



## Sprint das Peças
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t5-projeto-MyCloset/assets/104511336/0b412ec9-75e4-408b-8f2e-e8729f501fda)

## Sprint dos Outifits

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t5-projeto-MyCloset/assets/104511336/3ed5151e-fa56-45d8-a353-c93290bfe0dc)

## Sprint dos Usuários

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t5-projeto-MyCloset/assets/104511336/ffd16eb8-df36-4a4a-b385-8e0137b09ea0)


