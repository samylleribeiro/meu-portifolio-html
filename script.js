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
        link:"https://samylleribeiro.github.io/ferramenta-par-impar/",
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
        descricao:"Calculadora simples para calcular a soma entre dois números(num1+num2)",
        link:" https://samylleribeiro.github.io/calculadora-para-somar/",
    },
    {
        titulo:"Calculadora para média",
        descricao:"Calculadora simples para calcular a média entre 5 notas e calcular se o aluno foi aprovado, reprovado ou ficou de exame final na disciplina",
        link:" https://samylleribeiro.github.io/media-aritmetica/",
    },
    {   titulo:"Calculadora para potência",
        descricao:"Calculadora simples para calcular a potência (usuário informa o número e qual potência quer elevar)",
        link:" https://samylleribeiro.github.io/potencia/",
    },
    {   titulo:"Calculadora para raiz",
        descricao:"Calculadora simples para calcular a raiz quadrada do número escolhido pelo usuário",
        link:" https://samylleribeiro.github.io/raiz/",
    },
    {   titulo:"ferramenta identificação",
        descricao:"Ferramenta simples para identicação,vai solicitar ao usuário seu nome,endereço e idade,exibindo uma mensagem identificando-o",
        link:" https://samylleribeiro.github.io/identificar-se/",
    },
    {   titulo:"Calculadora para pitágoras(hipotenusa)",
        descricao:"Calculadora de pitágoras para calcular a hipotenusa através dos valores dos catetos informados pelo usuário",
        link:" https://samylleribeiro.github.io/pitagoras-hipotenusa/",
    },
    {   titulo:"Calculadora para pitágoras(cateto)",
        descricao:"Calculadora de pitágoras para calcular o cateto através dos dos valores do outro cateto e da hipotenusa informados pelo usuário",
        link:" https://samylleribeiro.github.io/pitagoras-cateto/",
    },
    {   titulo:"Calculadora para resto de divisão",
        descricao:"Calculadora simples para calcular o resto de uma divisão(num1%num2) ",
        link:" https://samylleribeiro.github.io/resto-divisao/",
    },
    {   titulo:"Calculadora para equação do primeiro grau",
        descricao:"Calculadora para calcular uma equação do primeiro grau ",
        link:" https://samylleribeiro.github.io/equacao-do-primeiro-grau/ ",
    },
    {   titulo:"Calculadora Multifuncional",
        descricao:"Calculadora multifuncional,pode ser usada pra varias operações ",
        link:"https://samylleribeiro.github.io/calculadora-multifuncional/ ",
    },
    {   titulo:"Calculadora para equação do segundo grau",
        descricao:"Calculadora para calcular uma equação do segundo grau ",
        link:"https://samylleribeiro.github.io/Equacao-segundo-grau/ ",
    },
    {   titulo:"Conversor de medidas(distância)",
        descricao:"Conversor de medidas de distância(cm-m-km) ",
        link:"https://samylleribeiro.github.io/Conversor-medidas-distancia/ ",
    },
    {   titulo:"Conversor de medidas(liquidos)",
        descricao:"Conversor de medidas de liquidos(L-ml) ",
        link:"https://samylleribeiro.github.io/conversor-medidas-liquidos/",
    },
     {   titulo:"Conversor de medidas(tempo)",
        descricao:"Conversor de medidas de tempo(seg-mim-horas) ",
        link:" https://samylleribeiro.github.io/Conversor-de-tempo/",
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