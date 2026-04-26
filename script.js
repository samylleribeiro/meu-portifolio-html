// lista de projetos
const MeusProjetos =[
    {
        titulo: "Portifólio Pessoal",
        descricao: "Este é o meu portifólio pessoal, onde apresento uma breve descrição minha,lista com meus projetos e contatos.",
        link:"https://github.com/SamylleCarvalho/MeuPortif-lio",
    },
    {
        titulo: "Projeto Integrador 1 - AgendJá",
        descricao: "Aplicativo de agendamento de serviços,desenvolvido em equipe,para a disciplina Projeto Integrador 1.",
        link: "https://github.com/SamylleCarvalho/Aplicativo-AgendJa",
    },
    {
        titulo:"calculadora de médias",
        descricao:"calculadora simples para calcular notas de alunos,e exibir se o aluno foi aprovado ou reprovado,no semestre.",
        link:"https://samyllecarvalho.github.io/calcular-m-dia/",
    },
    {
        titulo:"ferramenta par ou ímpar",
        descricao:"ferramenta simples para verificar se um número é par ou ímpar.",
        link:"https://samyllecarvalho.github.io/ferramenta-par-ou-impar/",
    },
    {
        titulo:"Meu portifólio react",
        descricao:"Este é o meu portifólio react,onde apresento uma breve descrição minha,uma lista com alguns projetos e contatos.",
        link:"https://portifolio-react-amber.vercel.app/",
    },
    {
        titulo:"Calculadora de Porcentagem",
        descricao:"Calculadora simples para calcular a porcentagem entre 2 numeros e exibir(N1 % de N2 e um valorX)",
        link:" https://samylleribeiro.github.io/calculadora-de-porcentagem/",
    }, 
    {
        titulo:"Ferramenta positivo ou negativo",
        descricao:"Ferramenta simples onde vai solicitar um número ao usuário e exibir se o número é positivo,negativo ou zero",
        link:" https://samylleribeiro.github.io/ferramenta-positivo-negativo/",
    }, 
    {
        titulo:"Calculadora para divisão",
        descricao:"Calculadora simples para calcular a divisão entre dois números(num1/num2)",
        link:" https://samylleribeiro.github.io/calculadora-para-divisao/",
    },
    {
        titulo:"Calculadora para multiplicação",
        descricao:"Calculadora simples para calcular a multiplicação entre dois números(num1*num2)",
        link:" https://samylleribeiro.github.io/calculadora-para-multiplicar./",
    },
    {
        titulo:"Calculadora para subtração",
        descricao:"Calculadora simples para calcular a subtração entre dois números(num1-num2)",
        link:" https://samylleribeiro.github.io/calculadora-para-subtrair/",
    },
    {
        titulo:"Calculadora para somar",
        descricao:"Calculadora simples para calcular a subtração entre dois números(num1-num2)",
        link:" https://samylleribeiro.github.io/calculadora-para-somar/",
    },
    {
        titulo:"Calculadora para média",
        descricao:"Calculadora simples para calcular a média entre 5 notas e calcular se o aluno foi aprovado, reprovado ou ficou de exame final na disciplina",
        link:" https://samylleribeiro.github.io/media-aritmetica/",
    },
    {
        titulo:"Calculadora para potência",
        descricao:"Calculadora simples para calcular a média entre 5 notas e calcular se o aluno foi aprovado, reprovado ou ficou de exame final na disciplina",
        link:" https://samylleribeiro.github.io/potencia/",
    },
];
// Gerar os cards(caixinhas) dos projetos dinamicamente
const container =document.querySelector(".container-meus-projetos");
//laço de repetição para criar os cards dos projetos sem precisar escrever o código HTML para cada um deles, tornando o processo mais eficiente e organizado.
MeusProjetos.forEach(projeto => {
//cria o elemento para cada projeto, adiciona as informações do projeto e o link para visualização dos projetos.    
    const projetoElement = document.createElement("div");
//adiciona a classe de estilização css.   
    projetoElement.classList.add("projeto-card");
//adiciona o conteudo html para cada projeto, utilizando as informações do objeto projeto.    
    projetoElement.innerHTML = `
        <h3>${projeto.titulo}</h3>
        <p>${projeto.descricao}</p>
        <a href="${projeto.link}"
        class="ver-projeto" target="_blank">Ver Projeto</a>
        `;
//adiciona o card pronto para o container dos projetos.        
        container.appendChild(projetoElement);
    });
// lista de contatos
    const Contatos =[
        {
            titulo: "WhatsApp",
            link: "https://wa.me/5586981774652"
        },
        {
            titulo: "E-mail",
            link: "mailto:samylliribeiro2018@gmail.com"
        },
        {
            titulo: "GitHub",
            link: "https://github.com/samylleribeiro"
        },
    ]
// Gerar os botões de contato dinamicamente.    
    const containerContato = document.querySelector(".container-contato");
//laço de repetição para criar os botões de contato sem precisar escrever o código HTML para cada um deles.    
    Contatos.forEach(item => {
//cria o elemento para cada contato, adiciona as informações do contato e o link para visualização dos contatos.        
        const botao = document.createElement("a");
        botao.href = item.link;
        botao.target = "_blank";
        botao.textContent = item.titulo;
        botao.classList.add("botao-contato");
        containerContato.appendChild(botao);
    });