# Plano de Testes de Software

Caso de teste 1- RF-001 Permitir que o usuário crie um cadastro de acesso (registro)
Cenário: Um novo usuário acessa o sistema.
Passos:
Abre a página inicial.
Clica no botão de registro.
Preenche corretamente todos os campos obrigatórios (nome, e-mail, senha).
Clica em "Registrar".
Resultado Esperado: O usuário é registrado com sucesso e redirecionado para a página inicial logado.

Caso de teste 2- RF-002 Os usuários devem conseguir realizar o cadastro de nova conta
Cenário: Um usuário acessa o sistema sem ter uma conta.
Passos:
Acessa a página inicial.
Clica em "Criar conta".
Preenche todos os campos necessários.
Clica em "Criar conta".
Resultado Esperado: A nova conta é criada com sucesso e o usuário é redirecionado para a página inicial logado.

Caso de teste 3- RF-003 Permitir que o usuário acesse a conta através de login e senha
Cenário: Um usuário já registrado tenta acessar sua conta.
Passos:
Abre a página inicial.
Insere seu e-mail e senha.
Clica em "Login".
Resultado Esperado: O usuário é autenticado com sucesso e redirecionado para a página inicial logado.

Caso de teste 4- RF-004 Permitir que o usuário cadastre (adicione) novas peças de roupas
Cenário: Um usuário deseja adicionar uma nova peça ao seu guarda-roupa.
Passos:
Na página inicial, seleciona a opção de adicionar nova peça.
Preenche os detalhes da peça (tipo, cor, tamanho, descrição).
Clica em "Salvar".
Resultado Esperado: A nova peça é adicionada com sucesso ao guarda-roupa do usuário.

Caso de teste 5- RF-005 Os usuários podem dar categorias aos itens cadastrados, como cor e tamanho
Cenário: Um usuário deseja categorizar uma peça já cadastrada.
Passos:
Seleciona a peça desejada na galeria.
Edita as categorias (cor, tamanho, etc.).
Salva as alterações.
Resultado Esperado: As categorias são atualizadas com sucesso para a peça selecionada.

Caso de teste 6- RF-006 Os usuários podem visualizar os itens cadastrados em uma galeria
Cenário: Um usuário acessa a galeria de peças cadastradas.
Passos:
Navega até a seção de galeria.
Visualiza todas as peças cadastradas.
Resultado Esperado: Todas as peças cadastradas são exibidas corretamente na galeria.

Caso de teste 7- RF-007 Permitir que os usuários removam os itens cadastrados
Cenário: Um usuário deseja remover uma peça do seu guarda-roupa.
Passos:
Acessa a galeria de peças.
Seleciona a opção de remover para a peça desejada.
Confirma a exclusão.
Resultado Esperado: A peça é removida com sucesso do guarda-roupa do usuário.

Caso de teste 8 - RF-008 Os usuários devem poder criar looks combinando diferentes peças de roupa do seu guarda-roupa
Cenário: Um usuário quer criar um novo look combinando suas peças.
Passos:
Na página inicial, acessa a opção de criar look.
Seleciona as peças desejadas para compor o look.
Salva o look.
Resultado Esperado: O novo look é criado e pode ser visualizado na galeria de looks.

Caso de teste 9- RF-009 Os usuários podem filtrar suas roupas por categorias (por exemplo, camisetas, calças, vestidos, etc.)
Cenário: Um usuário quer visualizar apenas suas camisetas cadastradas.
Passos:
Na galeria de peças, aplica o filtro de categoria "camisetas".
Resultado Esperado: A galeria exibe apenas as camisetas cadastradas pelo usuário.

Caso de teste 10- RF-010 Os usuários podem salvar looks na categoria de favoritos
Cenário: Um usuário deseja salvar um look como favorito.
Passos:
Ao visualizar um look, seleciona a opção de salvar como favorito.
Resultado Esperado: O look é salvo na categoria de favoritos do usuário e pode ser acessado facilmente.
