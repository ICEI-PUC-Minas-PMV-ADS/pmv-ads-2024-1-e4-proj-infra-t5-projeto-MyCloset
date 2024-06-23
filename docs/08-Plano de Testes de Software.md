# Plano de Testes de Software

#### **Caso de teste 01**

RF-001 Permitir que o usuário crie um cadastro de acesso (registro)
Cenário: Usuário cria um novo cadastro com informações válidas
Passos:
Acessar a página de registro.
Preencher todos os campos obrigatórios com dados válidos.
Clicar no botão de registro.
Resultado esperado: O usuário é cadastrado com sucesso e redirecionado para a página inicial.
Cenário: Tentativa de cadastro com informações inválidas
Passos:
Acessar a página de registro.
Preencher os campos com informações inválidas (ex: e-mail inválido, senha curta).
Clicar no botão de registro.
Resultado esperado: O sistema exibe mensagens de erro específicas para os campos incorretos.

#### **Caso de teste 02**

RF-002 Os usuários devem conseguir realizar o cadastro de nova conta
Cenário: Usuário cria uma nova conta com sucesso
Passos:
Acessar a página de registro.
Preencher todos os campos obrigatórios com informações válidas.
Clicar no botão de registro.
Resultado esperado: O sistema confirma o cadastro e permite o login com a nova conta.
Cenário: Tentativa de criar conta com e-mail já existente
Passos:
Acessar a página de registro.
Preencher os campos com um e-mail já registrado.
Clicar no botão de registro.
Resultado esperado: O sistema impede o cadastro e informa que o e-mail já está em uso.

#### **Caso de teste 03**

RF-003 Permitir que o usuário acesse a conta através de login e senha
Cenário: Usuário faz login com credenciais válidas
Passos:
Acessar a página de login.
Preencher o campo de e-mail e senha corretamente.
Clicar no botão de login.
Resultado esperado: O usuário é redirecionado para a página inicial logado na conta.
Cenário: Tentativa de login com credenciais inválidas
Passos:
Acessar a página de login.
Preencher o campo de e-mail e senha com informações incorretas.
Clicar no botão de login.
Resultado esperado: O sistema exibe uma mensagem de erro indicando que as credenciais estão incorretas.

#### **Caso de teste 04**

RF-004 Permitir que o usuário cadastre (adicione) novas peças de roupas
Cenário: Usuário adiciona uma nova peça de roupa com todas as informações necessárias
Passos:
Acessar a função de adicionar nova peça de roupa.
Preencher todos os campos obrigatórios (nome, descrição, categoria, etc.).
Clicar no botão de salvar.
Resultado esperado: A nova peça de roupa é cadastrada com sucesso e aparece na lista de itens cadastrados.
Cenário: Tentativa de adicionar uma peça de roupa sem preencher informações obrigatórias
Passos:
Acessar a função de adicionar nova peça de roupa.
Deixar em branco algum campo obrigatório.
Clicar no botão de salvar.
Resultado esperado: O sistema não permite o cadastro e mostra mensagens de erro nos campos não preenchidos.

#### **Caso de teste 05**

RF-005 Os usuários podem dar categorias aos itens cadastrados, como cor e tamanho
Cenário: Usuário atribui categorias de cor e tamanho a uma peça de roupa
Passos:
Acessar a edição de uma peça de roupa já cadastrada.
Selecionar uma cor e um tamanho válidos para a peça.
Salvar as alterações.
Resultado esperado: As categorias de cor e tamanho são atualizadas com sucesso para a peça de roupa.
Cenário: Tentativa de atribuir categorias inválidas
Passos:
Acessar a edição de uma peça de roupa já cadastrada.
Selecionar uma cor ou tamanho inválido.
Tentar salvar as alterações.
Resultado esperado: O sistema impede a modificação e exibe mensagens de erro para categorias inválidas.

#### **Caso de teste 06**

RF-006 Os usuários podem visualizar os itens cadastrados em uma galeria
Cenário: Usuário acessa a galeria de itens cadastrados
Passos:
Navegar até a página de visualização da galeria.
Verificar a apresentação visual dos itens cadastrados.
Resultado esperado: Todos os itens cadastrados são exibidos corretamente na galeria.
Cenário: Verificação da ordem e layout dos itens na galeria
Passos:
Navegar até a página de visualização da galeria.
Verificar se os itens são mostrados na ordem correta e com o layout esperado.
Resultado esperado: Os itens estão organizados conforme esperado, com informações visuais claras.

#### **Caso de teste 07**

RF-007 Permitir que os usuários removam os itens cadastrados
Cenário: Usuário remove uma peça de roupa cadastrada
Passos:
Acessar a função de remover um item da lista.
Confirmar a exclusão quando solicitado pelo sistema.
Resultado esperado: A peça de roupa é removida com sucesso da lista de itens cadastrados.
Cenário: Cancelamento da operação de exclusão
Passos:
Acessar a função de remover um item da lista.
Optar por não confirmar a exclusão quando solicitado.
Resultado esperado: O sistema cancela a operação de exclusão sem remover o item da lista.

#### **Caso de teste 08**

RF-008 Os usuários devem poder criar looks combinando diferentes peças de roupa do seu guarda-roupa
Cenário: Usuário cria um novo look combinando diversas peças de roupa
Passos:
Acessar a função de criação de looks.
Selecionar várias peças de roupa para compor o look.
Salvar o look criado.
Resultado esperado: O look é salvo com sucesso e pode ser visualizado na lista de looks criados.
Cenário: Tentativa de criar um look sem selecionar peças suficientes
Passos:
Acessar a função de criação de looks.
Tentar salvar um look sem selecionar todas as peças necessárias.
Resultado esperado: O sistema não permite a criação do look e indica que mais peças precisam ser selecionadas.

#### **Caso de teste 09**

RF-009 Os usuários podem filtrar suas roupas por categorias (por exemplo, camisetas, calças, vestidos, etc.)
Cenário: Usuário filtra suas roupas por categoria de camisetas
Passos:
Acessar a função de filtro por categoria.
Selecionar a categoria "camisetas".
Aplicar o filtro.
Resultado esperado: A lista de itens é atualizada mostrando apenas as camisetas cadastradas.
Cenário: Filtragem por categoria com resultados vazios
Passos:
Acessar a função de filtro por categoria.
Selecionar uma categoria que não tem itens cadastrados.
Aplicar o filtro.
Resultado esperado: A lista de itens não mostra nenhum resultado, indicando que não há itens cadastrados na categoria selecionada.

#### **Caso de teste 10**

RF-010 Os usuários podem salvar looks na categoria de favoritos
Cenário: Usuário salva um look como favorito
Passos:
Visualizar um look já criado.
Selecionar a opção de salvar como favorito.
Resultado esperado: O look é marcado como favorito e pode ser facilmente acessado na lista de looks favoritos.
Cenário: Remoção de um look da lista de favoritos
Passos:
Acessar a lista de looks favoritos.
Remover um look previamente marcado como favorito.
Resultado esperado: O look é removido da lista de favoritos e não é mais exibido lá.
