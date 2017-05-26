INSERT INTO TAXONOMIA (NOME, DESCRICAO, DATA_CRIACAO, DATA_ALTERACAO) VALUES (
'Taxonomia II',
'Domínios, classes e diagnósticos de enfermagem na Taxonomia II da NANDA-I',
NOW(),
NOW());

INSERT INTO TAXONOMIA (NOME, DESCRICAO, DATA_CRIACAO, DATA_ALTERACAO) VALUES (
'Taxonomia III',
'Domínios, classes e diagnósticos de enfermagem na Taxonomia III - Proposta',
NOW(),
NOW());

 INSERT INTO DOMINIO (ID_TAXONOMIA, NOME, DESCRICAO, DATA_CRIACAO, DATA_ALTERACAO) VALUES (
 1,
 'Promoção da Saúde',
 'Percepção de bem-estar ou de normalidade de função e de estratégias utilizadas para manter o controle e
melhorar esse bem-estar ou normalidade de função.',
NOW(),
NOW());

 INSERT INTO DOMINIO (ID_TAXONOMIA, NOME, DESCRICAO, DATA_CRIACAO, DATA_ALTERACAO) VALUES (
 1,
 'Nutrição',
 'Atividades de ingerir, assimilar e utilizar nutrientes para fins de manutenção e reparação dos tecidos e
produção de energia.',
NOW(),
NOW());

 INSERT INTO DOMINIO (ID_TAXONOMIA, NOME, DESCRICAO, DATA_CRIACAO, DATA_ALTERACAO) VALUES (
 1,
 'Eliminação e Troca',
 'Secreção e excreção de produtos residuais do organismo.',
NOW(),
NOW());

 INSERT INTO DOMINIO (ID_TAXONOMIA, NOME, DESCRICAO, DATA_CRIACAO, DATA_ALTERACAO) VALUES (
 1,
 'Atividade - Repouso',
 'Produção, conservação, gasto ou equilíbrio de recursos energéticos.',
NOW(),
NOW());

 INSERT INTO DOMINIO (ID_TAXONOMIA, NOME, DESCRICAO, DATA_CRIACAO, DATA_ALTERACAO) VALUES (
 1,
 'Percepção - Cognição',
 'Sistema humano de processamento de informações que inclui atenção, orientação, sensações, percepção,
cognição e comunicação.',
NOW(),
NOW());

 INSERT INTO DOMINIO (ID_TAXONOMIA, NOME, DESCRICAO, DATA_CRIACAO, DATA_ALTERACAO) VALUES (
 1,
 'Autopercepção',
 'Percepção de si mesmo.',
NOW(),
NOW());

 INSERT INTO DOMINIO (ID_TAXONOMIA, NOME, DESCRICAO, DATA_CRIACAO, DATA_ALTERACAO) VALUES (
 1,
 'Papéis e Relacionamentos',
 'Conexões ou associações positivas e negativas entre pessoas ou grupos de pessoas, e os meios pelos quais
essas conexões são demonstradas.',
NOW(),
NOW());

 INSERT INTO DOMINIO (ID_TAXONOMIA, NOME, DESCRICAO, DATA_CRIACAO, DATA_ALTERACAO) VALUES (
 1,
 'Sexualidade',
 'Identidade sexual, função sexual e reprodução.',
NOW(),
NOW());

 INSERT INTO DOMINIO (ID_TAXONOMIA, NOME, DESCRICAO, DATA_CRIACAO, DATA_ALTERACAO) VALUES (
 1,
 'Enfrentamento - Tolerância ao Estresse',
 'Confronto com eventos ou processos de vida.',
NOW(),
NOW());

 INSERT INTO DOMINIO (ID_TAXONOMIA, NOME, DESCRICAO, DATA_CRIACAO, DATA_ALTERACAO) VALUES (
 1,
 'Princípios da Vida',
 'Princípios que subjazem à conduta, ao pensamento e ao comportamento com relação a atos, costumes ou
instituições, entendidos como verdadeiros ou com valor intrínseco.',
NOW(),
NOW());

 INSERT INTO DOMINIO (ID_TAXONOMIA, NOME, DESCRICAO, DATA_CRIACAO, DATA_ALTERACAO) VALUES (
 1,
 'Segurança - Proteção',
 'Estar livre de perigo, lesão física ou dano ao sistema imunológico; conservação contra perdas e proteção
da segurança e da ausência de perigos.',
NOW(),
NOW());

 INSERT INTO DOMINIO (ID_TAXONOMIA, NOME, DESCRICAO, DATA_CRIACAO, DATA_ALTERACAO) VALUES (
 1,
 'Conforto',
 'Sensação de bem-estar ou tranquilidade mental, física ou social.',
NOW(),
NOW());

 INSERT INTO DOMINIO (ID_TAXONOMIA, NOME, DESCRICAO, DATA_CRIACAO, DATA_ALTERACAO) VALUES (
 1,
 'Crescimento - Desenvolvimento',
 'Aumentos adequados à idade nas dimensões físicas, amadurecimento de sistemas de órgãos e/ou progressão
ao longo dos marcos do desenvolvimento.',
NOW(),
NOW());

 INSERT INTO DOMINIO (ID_TAXONOMIA, NOME, DESCRICAO, DATA_CRIACAO, DATA_ALTERACAO) VALUES (
 2,
 'Domínio Fisiológico',
 'Estruturas anatômicas e processos fisiológicos essenciais à saúde humana.',
NOW(),
NOW());

 INSERT INTO DOMINIO (ID_TAXONOMIA, NOME, DESCRICAO, DATA_CRIACAO, DATA_ALTERACAO) VALUES (
 2,
 'Domínio Mental',
 'Processos e padrões mentais essenciais à saúde humana.',
NOW(),
NOW());

 INSERT INTO DOMINIO (ID_TAXONOMIA, NOME, DESCRICAO, DATA_CRIACAO, DATA_ALTERACAO) VALUES (
 2,
 'Domínio Existencial',
 'Experiências e percepções de vida essenciais à saúde humana',
NOW(),
NOW());

 INSERT INTO DOMINIO (ID_TAXONOMIA, NOME, DESCRICAO, DATA_CRIACAO, DATA_ALTERACAO) VALUES (
 2,
 'Domínio Funcional',
 'Processos do ciclo de vida, funções básicas e habilidades essenciais à saúde humana.',
NOW(),
NOW());

 INSERT INTO DOMINIO (ID_TAXONOMIA, NOME, DESCRICAO, DATA_CRIACAO, DATA_ALTERACAO) VALUES (
 2,
 'Domínio Segurança',
 'Características de comportamentos de risco, riscos à saúde e perigos do meio ambiente, essenciais à saúde
humana.',
NOW(),
NOW());

 INSERT INTO DOMINIO (ID_TAXONOMIA, NOME, DESCRICAO, DATA_CRIACAO, DATA_ALTERACAO) VALUES (
 2,
 'Domínio Família',
 'Processos reprodutivos e familiares e papéis familiares essenciais à saúde humana.',
NOW(),
NOW());

 INSERT INTO DOMINIO (ID_TAXONOMIA, NOME, DESCRICAO, DATA_CRIACAO, DATA_ALTERACAO) VALUES (
 2,
 'Domínio Ambiente',
 'Sistema de saúde e processos de atendimento de saúde essenciais à saúde humana.',
NOW(),
NOW());

INSERT INTO CLASSE (ID_DOMINIO, NOME, DESCRICAO, DATA_CRIACAO, DATA_ALTERACAO) VALUES (
1,
'Percepção da saúde',
'Reconhecimento de função normal e bem-estar',
NOW(),
NOW());

INSERT INTO CLASSE (ID_DOMINIO, NOME, DESCRICAO, DATA_CRIACAO, DATA_ALTERACAO) VALUES (
1,
'Controle da Saúde',
'Identificação, controle, desempenho e integração de atividades para manter a saúde e o bem-estar',
NOW(),
NOW());


INSERT INTO DIAGNOSTICO (ID_CLASSE, CODIGO, DESCRICAO, DATA_CRIACAO, DATA_ALTERACAO) VALUES (
1,
'00097',
'Atividade de recreação deficiente',
NOW(),
NOW());

INSERT INTO DIAGNOSTICO (ID_CLASSE, CODIGO, DESCRICAO, DATA_CRIACAO, DATA_ALTERACAO) VALUES (
1,
'00168',
'Estilo de vida sedentário',
NOW(),
NOW());

INSERT INTO DIAGNOSTICO (ID_CLASSE, CODIGO, DESCRICAO, DATA_CRIACAO, DATA_ALTERACAO) VALUES (
2,
'00079',
'Falta de adesão',
NOW(),
NOW());

INSERT INTO DIAGNOSTICO (ID_CLASSE, CODIGO, DESCRICAO, DATA_CRIACAO, DATA_ALTERACAO) VALUES (
2,
'00188',
'Comportamento de saúde propenso a risco',
NOW(),
NOW());

INSERT INTO DIAGNOSTICO (ID_CLASSE, CODIGO, DESCRICAO, DATA_CRIACAO, DATA_ALTERACAO) VALUES (
2,
'00080',
'Controle da saúde familiar ineficaz',
NOW(),
NOW());



