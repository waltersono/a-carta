import Question from "../models/question.model";
import Option from "../models/option.model";
const QUIZES_DATA = [
  new Question(
    "O sinal indica:",
    "img1.png",
    [
      new Option("Existencia de controlo de trafego adiante."),
      new Option("Controlo policial por pirilampos.", true),
      new Option("Congestionamento do trafego."),
    ],
    1
  ),
  new Question(
    "Os automovies na imagem classificam-se em:",
    "img2.png",
    [
      new Option("Ligeiros e Pesados", true),
      new Option("Ligeiros, Pesados e Motociclos"),
      new Option(
        "Motociclos, Ciclomotores, Triciclos, Quadriciclos, Ligeiros e Pesados"
      ),
      new Option("Ligeiros, Pesados e Mistos"),
    ],
    1
  ),
  new Question(
    "E aconselhavel viajar a noite para evitar a fadiga?:",
    "img3.png",
    [
      new Option("Nao, porque o sono aparece mais facilmente", true),
      new Option("Sim, se a viagem e longa"),
      new Option("Sim, porque ha menos trafego."),
      new Option("Sim, viajar durante a noite e sempre mais seguro."),
    ],
    1
  ),
  new Question(
    "O que indica o sinal de informacao?",
    "img4.png",
    [
      new Option("Area reservada para automoveis ligeiros.", true),
      new Option("Area reservada para taxis."),
      new Option(
        "Parque de estacionamento para automoveis ligeiros de passageiros"
      ),
    ],
    1
  ),
  new Question(
    "Que veiculo deve retroceder para dar passagem ao outro, numa passagem estreita sem sinalizacao onde nao seja possivel efectuar o cruzamento?",
    "img5.png",
    [
      new Option("O veiculo mais pesado."),
      new Option("O veiculo com maior largura."),
      new Option(
        "O veiculo que esta mais proximo do local em que o curzamento seja possivel",
        true
      ),
      new Option(
        "O veiculo que desce, se for numa via de inclinacao acentuada."
      ),
    ],
    1
  ),
  new Question(
    "Deve utilizar-se as luzes de perigo...",
    "img6.png",
    [
      new Option("ao estacionar em segunda fila."),
      new Option(
        "para avistar os outros utentes que o veiculo vai fazer marcha atras."
      ),
      new Option(
        "em caso de imobilizacao por acidente ou avaria, se origina perigo para os demais utentes da via.",
        true
      ),
      new Option("apenas quando o veiculo esteja a ser rebocado."),
    ],
    1
  ),
  new Question(
    "O que indica a marca rodoviaria branca?",
    "img7.png",
    [
      new Option("Indica a existencia de bandas sonoras."),
      new Option("Indica a reducao de filas de transito."),
      new Option("Indica a existencia de lombas.", true),
    ],
    1
  ),
  new Question(
    "Atirar do veiculo ou abandonar na via objectos ou substancias, constitui contravencao:",
    "img8.png",
    [new Option("Leve"), new Option("Grave"), new Option("Media", true)],
    1
  ),
  new Question(
    "Entende-se por visibilidade reduzida ou insuficiente, quando o condutor nao possa avistar a faixa de rodagem em toda a sua largura numa extensao de:",
    "img9.png",
    [
      new Option("Pelo menos, 50 metros.", true),
      new Option("Pelo menos, 200 metros."),
      new Option("Pelo menos, 100 metros."),
      new Option("Pelo menos, 25 metros."),
    ],
    1
  ),
  new Question(
    "O que indica o sinal?",
    "img10.png",
    [
      new Option("Sentido proibido."),
      new Option("Transito proibido.", true),
      new Option("Transito proibido a automoveis ligeiros de passageiros"),
    ],
    1
  ),
  new Question(
    "Uma das consequencias de aumentar a velocidade, e que...",
    "img11.png",
    [
      new Option("melhora o tempo de reaccao."),
      new Option("aumenta a gravidade das lesoes em caso de acidente.", true),
      new Option("reduz a distancia de travagem."),
      new Option("reduz as distracoes."),
    ],
    1
  ),
  new Question(
    "O transito de veiculos ou de animais e feito...",
    "img12.png",
    [
      new Option(
        "do lado direito das faixas de rodagem e o mais proximo possivel das bermas ou passeios"
      ),
      new Option("proximo do eixo da via"),
      new Option(
        "pela esquerda das faixas de rodagem e o mais proximo possivel das bermas ou passeios, mas a uma distancia destes que permita evitar qualquer acidente"
      ),
    ],
    1
  ),
  new Question(
    "Numa auto-estrada, pode-se inverter o sentido de marcha?",
    "img13.png",
    [
      new Option("Sempre que possivel"),
      new Option("Nunca", true),
      new Option("Sim, se a manobra for feita lentamente."),
    ],
    1
  ),
  new Question(
    "O que indica o sinal",
    "img14.png",
    [
      new Option(
        "Paragem proibida a veiculos que transportam substancias perigosas",
        true
      ),
      new Option(
        "Paragem obrigatoria para veiculos que transportam substancias perigosas"
      ),
      new Option(
        "Area reservada para veiculos que transportam substancias perigosas."
      ),
    ],
    1
  ),
  new Question(
    "Que cominica o comunica o condutor aos outros utentes da via?",
    "img15.png",
    [
      new Option("Que vai voltar para o lado esquerdo do voltante"),
      new Option("Que vai voltar para o lado direito do volante."),
      new Option("Que vai reduzir a velocidade", true),
    ],
    1
  ),
  new Question(
    "O que indica o sinal?",
    "img16.png",
    [
      new Option("A presenca de cancela motorizada ao centro"),
      new Option("A presenca de ponte movel", true),
      new Option("A presenca de entrocamento obliquo a esquerda"),
    ],
    1
  ),
  new Question(
    "O que indica o sinal?",
    "img17.png",
    [
      new Option("Pre-advertencia da direccao de saida", true),
      new Option("Advertencia da direccao de saida"),
      new Option("Direccao de saida"),
    ],
    1
  ),
  new Question(
    "Considera-se morte por acidente de viacao:",
    "img18.png",
    [
      new Option(
        "Aquela que ocorre ate 30 dias apos o registo do sinistro",
        true
      ),
      new Option("So aquela que ocorre no local do sinistro"),
      new Option("So aquela que ocorre a caminho da unidade sanitaria"),
      new Option("Aquela que ocorre 30 dias depois do registo do sinistro"),
    ],
    1
  ),
  new Question(
    "Os peoes, para atravessar a faixa de rodagem...",
    "img19.png",
    [
      new Option(
        "podem faze-lo sem utilizar as passagens para peoes, se nao existe nenhuma a distancia inferior a 10m"
      ),
      new Option(
        "estao sempre obrigados a utilizar a passagem desnivelada para peoes."
      ),
      new Option("tem sempre prioridade de passagem"),
      new Option(
        "devem certificar-se de que a distancia e velocidade dos veiculos, permite faze-lo sem perigo de acidente.",
        true
      ),
    ],
    1
  ),
  new Question(
    "Nos veiculos de mercadorias, a carga deve ser disposta de modo a que:",
    "img20.png",
    [
      new Option("O principal peso fique sobre o eixo da retaguarda."),
      new Option(
        "Fique livre o maior espaco possivel a retaguarda da caxa de carga"
      ),
      new Option(
        "Seja assegurado o equilibrio do veiculo, parado ou em movimento",
        true
      ),
    ],
    1
  ),
  new Question(
    "O que indica o sinal?",
    "img21.png",
    [
      new Option("Transito proibido a peoes, animais e veiculos automoveis."),
      new Option(
        "Transito proibido a peoes, animais e veiculos nao automoveis.",
        true
      ),
      new Option("Transito proibido a animais e veiculos nao automoveis"),
    ],
    1
  ),
  new Question(
    "E proibido ultrapassar:",
    "img22.png",
    [
      new Option("Em todas as curvas"),
      new Option("Depois dos cruzamentos."),
      new Option(
        "Nas estradas que so tenham uma via de transito para cada sentido"
      ),
      new Option("Imediatamente antes e nas passagens para peoes", true),
    ],
    1
  ),
  new Question(
    "Os automoveis pesados de passageiros, fora das localidades, nao devem exceder a velocidade instantanea de:",
    "img23.png",
    [
      new Option("80 km/h."),
      new Option("120 km/h."),
      new Option("100 km/h", true),
    ],
    1
  ),
  new Question(
    "Todos os condutores de veiculos ou animais sao obrigados a...",
    "img24.png",
    [
      new Option(
        "abandonar os veiculos nos locais de estacionamento sem motivo justificado."
      ),
      new Option(
        "reduzir ou suspender intencionalmente a circulacao, formando filas de transito desnecessarias."
      ),
      new Option(
        "obedecer ao sinal de paragem feito pelas autoridades com competencia para fiscalizacao do transito",
        true
      ),
    ],
    1
  ),
  new Question(
    "O que indica o sinal?",
    "img25.png",
    [
      new Option("Sentido obrigatorio para frente."),
      new Option("Via rapida."),
      new Option("Existencia de portagem na via em que segue", true),
    ],
    1
  ),
];

export default QUIZES_DATA;
