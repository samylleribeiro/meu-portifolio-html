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
    {   titulo:"Conversor de distâncias📏",
        descricao:"Conversor de medidas de distância(cm-m-km) ",
        link:"https://samylleribeiro.github.io/Conversor-medidas-distancia/ ",
    },
    {   titulo:"Conversor de liquidos💧",
        descricao:"Conversor de medidas de liquidos(L-ml) ",
        link:"https://samylleribeiro.github.io/conversor-medidas-liquidos/",
    },
     {   titulo:"Conversor de tempo⏲️",
        descricao:"Conversor de medidas de tempo(seg-mim-horas) ",
        link:" https://samylleribeiro.github.io/Conversor-de-tempo/",
    },
    {   titulo:"Conversor de temperatura🌡️",
        descricao:"Conversor de medidas de temperatura(°C-°F-K) ",
        link:"https://samylleribeiro.github.io/conversor-temperatura/",
    },
    {   titulo:"Calculadora de IMC ⚖️",
        descricao:"Calculadora indice de massa corporal(IMC) ",
        link:" https://samylleribeiro.github.io/calculadora-imc/",
    },
    {   titulo:"Medidor de glicemia🩸",
        descricao:"Medidor simples de glicemia, onde vai exibir uma mensagem informando se o valor da glicemia que o usuário digitou esta normal,pre-diabetico ou já e diabetico" ,
        link:" https://samylleribeiro.github.io/medidor-glicemia/",
    },
    {   titulo:"Medidor de colesterol🩸🧪",
        descricao:"Medidor simples de colesterol, onde vai exibir uma mensagem informando se o valor do colesterol que o usuário digitou esta normal,limitrofe ou se já e elevado" ,
        link:" https://samylleribeiro.github.io/medidor-colesterol/",
    },
    {   titulo:"Medidor de triglicerídeos 🩸🔬",
        descricao:"Medidor simples de triglicerídeos, onde vai exibir uma mensagem informando se o valor do triglicerídeo que o usuário digitou esta normal,limitrofe ou se já e elevado" ,
        link:" https://samylleribeiro.github.io/medidor-triglicerideos/",
    },
    {   titulo:"Medidor de pressão arterial🩺💓",
        descricao:"Medidor simples de pressão arterial, onde vai exibir uma mensagem informando se o valor da pressão arterial que o usuário digitou esta baixa,normal,com pressão alta,hipertensão estágio 1,hipertensão estágio 2 ou crise hipertensiva" ,
        link:" https://samylleribeiro.github.io/medidor-pressao/",
    },
    {   titulo:"Calculadora de hidratação💧",
        descricao:"Calculadora de hidratação, onde vai exibir a quantidade recomendada de água que o usuário deve beber diariamente com base em seu peso(peso*35ml) " ,
        link:" https://samylleribeiro.github.io/calculadora-hidratacao/",
    },
    {   titulo:"Medidor de frequência cardíaca💓🫀",
        descricao:"Medidor simples de frequência cardíaca, onde vai exibir uma mensagem informando se o valor da frequência cardíaca que o usuário digitou esta normal,baixa ou alta" ,
        link:" https://samylleribeiro.github.io/frequencia-cardiaca/",
    },
     {   titulo:"Contador de passos e calorias 🚶‍♂️🔥",
        descricao:"Contador simples de passos, onde vai exibir a quantidade aproximada de calorias queimadas,de acordo com a quantidade de passos digitada pelo usuário " ,
        link:" https://samylleribeiro.github.io/contador-passos-calorias/",
    },
     {   titulo:"Gerador de frases motivacionais e versículos bíblicos 📖 💪✨",
        descricao:"Gerador de frases motivacionais, onde vai exibir uma frase inspiradora toda vez que o usuário clicar no botão " ,
        link:"https://samylleribeiro.github.io/frases-motivacionais/",
    },
     {   titulo:"Orações 📖 📿",
        descricao:"Praticar a oração é uma maneira de fortalecer a fé e encontrar conforto espiritual.Este projeto apresenta uma coleção de orações para diferentes ocasiões, como gratidão, proteção, saúde e paz interior.Cada oração é cuidadosamente selecionada para inspirar e elevar o espírito, proporcionando momentos de reflexão e conexão com o divino." ,
        link:"https://samylleribeiro.github.io/oracoes/",
    },
    {   titulo:"Mandamentos bíblicos 📖 ✝️",
        descricao:"Um projeto que apresenta os 10 mandamentos da lei de Deus." ,
        link:"https://samylleribeiro.github.io/mandamentos/",
    },
    {   titulo:"Monitor de sono 🛌💤",
        descricao:"Um projeto que apresenta as informações sobre o sono,usuário informa a quantidade de horas dormidas na noite,e o sistema vai exibir uma mensagem informando se o usuário teve uma boa qualidade de sono ou não." ,
        link:"https://samylleribeiro.github.io/monitor-sono/",
    },
    {   titulo:"App de receitas 🍽️",
        descricao:"Um projeto que apresenta uma lista de receitas deliciosas e fáceis de preparar." ,
        link:"https://samylleribeiro.github.io/receitas/",
    },
    {   titulo:"Cronômetro pomodoro ⏱️",
        descricao:"Um projeto que apresenta um cronômetro pomodoro para contagem de tempo,informando o usuário sobre o tempo restante e os períodos de descanso." ,
        link:"https://samylleribeiro.github.io/pomodoro/",
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