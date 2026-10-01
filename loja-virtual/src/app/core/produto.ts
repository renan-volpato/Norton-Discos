import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Produto } from './models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private produtos: Produto[] = [
    { id: 1, nome: 'The Dark Side of the Moon', artista: 'Pink Floyd', preco: 149.90, imagem: 'img/dark-side-of-the-moon.jpg', descricao: 'Edição em vinil 180g, remasterizada.', ano: 1973, regiao: 'Internacional', 
    faixas: ['Speak to Me', 'Breathe (In the Air)', 'On the Run', 'Time', 'The Great Gig in the Sky', 'Money', 'Us and Them', 'Any Colour You Like', 'Brain Damage', 'Eclipse'] },
    { id: 2, nome: 'All Things Must Pass', artista: 'George Harrison', preco: 129.90, imagem: 'img/all-things-must-pass.jpg', descricao: 'Clássico, prensagem nacional.', ano: 1970, regiao: 'Internacional', 
    faixas: ["I'd Have You Anytime", 'My Sweet Lord', 'Wah-Wah', "Isn't It a Pity", 'What Is Life', 'If Not for You', 'Behind That Locked Door', 'Let It Down', 'Run of the Mill', 'I Live for You', 'Beware of Darkness', 'Let It Down', 'Whats Is Life','My Sweet Lord', 'Apple Scruffs', 'Ballad of Sir Frankie Crisp (Let It Roll)', 'Awaiting on You All', 'All Things Must Pass', 'I Dig Love', 'Art of Dying', 'Hear Me Lord', "It's Johnny's Birthday", 'Plug Me In', 'I Remember Jeep', 'Thanks for the Pepperoni', 'Out of the Blue'] },
    { id: 3, nome: 'Abbey Road', artista: 'The Beatles', preco: 159.90, imagem: 'img/abbey-road.jpg', descricao: 'Reedição 2019, capa gatefold.', ano: 1969, regiao: 'Internacional', 
    faixas: ['Come Together', 'Something', "Maxwell's Silver Hammer", 'Oh! Darling', "Octopus's Garden", 'I Want You (She\'s So Heavy)', 'Here Comes the Sun', 'Because', 'You Never Give Me Your Money', 'Sun King', 'Mean Mr. Mustard', 'Polythene Pam', 'She Came in Through the Bathroom Window', 'Golden Slumbers', 'Carry That Weight', 'The End', 'Her Majesty'] },
    { id: 4, nome: 'Gessinger, Licks & Maltz', artista: 'Engenheiros do Hawaii', preco: 139.90, imagem: 'img/glm.jpg', descricao: 'Vinil colorido, edição limitada.', ano: 1992, regiao: 'Nacional', 
    faixas: ['Ninguém = Ninguém', '?Até Quando Você Vai Ficar?', 'Pampa No Walkman', 'Túnel do Tempo', 'Chuva de Containers', 'Pose', 'No Inverno Fica Tarde + Cedo', 'Canival Vegetarino Devora Planta Carnivora', 'Parabólica', 'Conquista Do Espelho','Problemas... Sempre Existiram', 'Conquista Do Espaço'] },
    { id: 5, nome: 'Lemonade', artista: 'Aespa', preco: 119.90, imagem: 'img/lemonade.jpg', descricao: 'Clássico K-pop, 180g.', ano: 2026, regiao: 'Internacional', 
    faixas: ['WDA (Whole Different Animal)', 'Lemonade', 'Shakin', "Can't Help Myself", 'Camouflage', 'Bite', 'Switchblade', 'Roll', 'My Plan', 'Till We Die'] },
    { id: 6, nome: 'The Wall', artista: 'Pink Floyd', preco: 109.90, imagem: 'img/the-wall.jpg', descricao: 'Coletânea, vinil duplo.', ano: 1979, regiao: 'Internacional', 
    faixas: ['In the Flesh?', 'The Thin Ice', 'Another Brick in the Wall, Part 1', 'The Happiest Days of Our Lives', 'Another Brick in the Wall, Part 2', 'Mother', 'Goodbye Blue Sky', 'Empty Spaces', 'Young Lust', 'One of My Turns', "Don't Leave Me Now", 'Another Brick in the Wall, Part 3', 'Goodbye Cruel World', 'Hey You', 'Is There Anybody Out There?', 'Nobody Home', 'Vera', 'Bring the Boys Back Home', 'Comfortably Numb', 'The Show Must Go On', 'In the Flesh', 'Run Like Hell', 'Waiting for the Worms', 'Stop', 'The Trial', 'Outside the Wall'] },
    { id: 7, nome: "The Queen is Dead ", artista: 'The Smiths', preco: 129.90, imagem: 'img/the-queen-is-dead.jpg', descricao: 'Clássico indie, vinil colorido.', ano: 1986, regiao: 'Internacional', 
    faixas: ['The Queen Is Dead', 'Frankly, Mr. Shankly', "I Know It's Over", 'Never Had No One Ever', 'Cemetry Gates', 'Bigmouth Strikes Again', 'The Boy with the Thorn in His Side', 'Vicar in a Tutu', 'There Is a Light That Never Goes Out', 'Some Girls Are Bigger Than Others'] },
    { id: 8, nome: 'The New Abnormal', artista: 'The Strokes', preco: 109.90, imagem: 'img/the-new-abnormal.jpg', descricao: 'Prensagem europeia, 180g.', ano: 2020, regiao: 'Internacional', 
    faixas: ['The Adults Are Talking', 'Selfless', 'Brooklyn Bridge to Chorus', 'Bad Decisions', 'Eternal Summer', 'At the Door', 'Why Are Sundays So Depressing', 'Not the Same Anymore', 'Ode to the Mets'] },
    { id: 9, nome: 'Disintegration', artista: 'The Cure', preco: 139.90, imagem: 'img/disintegration.jpg', descricao: 'Álbum clássico do rock gótico, prensagem 180g.', ano: 1989, regiao: 'Internacional', 
    faixas: ['Plainsong', 'Pictures of You', 'Closedown', 'Lovesong', 'Last Dance', 'Lullaby', 'Fascination Street', 'Prayers for Rain', 'The Same Deep Water as You', 'Disintegration', 'Homesick', 'Untitled'] },
    { id: 10, nome: 'Blue Weekend', artista: 'Wolf Alice', preco: 119.90, imagem: 'img/blue-weekend.jpg', descricao: 'Edição em vinil colorido, lançamento 2021.', ano: 2021, regiao: 'Internacional', 
    faixas: ['The Beach', 'Delicious Things', 'Lipstick on the Glass', 'Smile', 'Safe from Heartbreak (if you never fall in love)', 'How Can I Make It OK?', 'Play the Greatest Hits', 'Feeling Myself', 'The Last Man on Earth', 'No Hard Feelings', 'The Beach II'] },
    { id: 11, nome: 'Dummy', artista: 'Portishead', preco: 129.90, imagem: 'img/dummy.jpg', descricao: 'Marco do trip-hop dos anos 90, prensagem europeia.', ano: 1994, regiao: 'Internacional', 
    faixas: ['Mysterons', 'Sour Times', 'Strangers', 'It Could Be Sweet', 'Wandering Star', "It's a Fire", 'Numb', 'Roads', 'Pedestal', 'Biscuit', 'Glory Box'] },
    { id: 12, nome: 'Born to Die', artista: 'Lana Del Rey', preco: 119.90, imagem: 'img/born-to-die.jpg', descricao: 'Vinil duplo, inclui encarte com letras.', ano: 2012, regiao: 'Internacional', 
    faixas: ['Born to Die', 'Off to the Races', 'Blue Jeans', 'Video Games', 'Diet Mountain Dew', 'National Anthem', 'Dark Paradise', 'Radio', 'Carmen', 'Million Dollar Man', 'Summertime Sadness', 'This Is What Makes Us Girls'] },
    { id: 13, nome: 'Diamond Eyes', artista: 'Deftones', preco: 109.90, imagem: 'img/diamond-eyes.jpg', descricao: 'Prensagem nacional, capa padrão.', ano: 2000, regiao: 'Internacional', 
    faixas: ['Diamond Eyes', 'Royal', 'CMND/CTRL', 'You\'ve Seen the Butcher', 'Beauty School', 'Prince', 'Rocket Skates', 'Sextape', 'Risk', '976-EVIL', 'This Place Is Death'] },
    { id: 14, nome: 'Paranoid', artista: 'Black Sabbath', preco: 149.90, imagem: 'img/paranoid.jpg', descricao: 'Clássico do heavy metal, remasterizado.', ano: 1970, regiao: 'Internacional', 
    faixas: ['War Pigs', 'Paranoid', 'Planet Caravan', 'Iron Man', 'Electric Funeral', 'Hand of Doom', 'Rat Salad', 'Fairies Wear Boots'] },
    { id: 15, nome: 'The Best of Sade', artista: 'Sade', preco: 99.90, imagem: 'img/the-best-of-sade.jpg', descricao: 'Coletânea com os maiores sucessos, vinil duplo.', ano: 1994, regiao: 'Internacional', 
    faixas: ['Your Love Is King', 'Hang on to Your Love', 'Smooth Operator', 'Jezebel', 'The Sweetest Taboo', 'Is It a Crime', 'Never as Good as the First Time', 'Paradise', 'Nothing Can Come Between Us', 'No Ordinary Love', 'Like a Tattoo', 'Kiss of Life', 'Please Send Me Someone to Love', 'Cherish the Day', 'Pearls'] },
    { id: 16, nome: 'The Doors', artista: 'The Doors', preco: 139.90, imagem: 'img/the-doors.jpg', descricao: 'Álbum de estreia, edição remasterizada.', ano: 1967, regiao: 'Internacional', 
    faixas: ['Break On Through (To the Other Side)', 'Soul Kitchen', 'The Crystal Ship', 'Twentieth Century Fox', 'Alabama Song (Whisky Bar)', 'Light My Fire', 'Back Door Man', 'I Looked at You', 'End of the Night', 'Take It as It Comes', 'The End'] },
    { id: 17, nome: 'The Rise and Fall of Ziggy Stardust and the Spiders from Mars', artista: 'David Bowie', preco: 159.90, imagem: 'img/ziggy-stardust.jpg', descricao: 'Álbum conceitual de 1972, capa gatefold.', ano: 1972, regiao: 'Internacional', 
    faixas: ['Five Years', 'Soul Love', 'Moonage Daydream', 'Starman', "It Ain't Easy", 'Lady Stardust', 'Star', 'Hang On to Yourself', 'Ziggy Stardust', 'Suffragette City', 'Rock \'n\' Roll Suicide'] },
    { id: 18, nome: 'Unknown Pleasures', artista: 'Joy Division', preco: 129.90, imagem: 'img/unknown-pleasures.jpg', descricao: 'Álbum de estreia, capa icônica do post-punk.', ano: 1979, regiao: 'Internacional', 
    faixas: ['Disorder', 'Day of the Lords', 'Candidate', 'Insight', 'New Dawn Fades', 'She\'s Lost Control', 'Shadowplay', 'Wilderness', 'Interzone', 'I Remember Nothing'] },
    { id: 19, nome: 'Information Society', artista: 'Information Society', preco: 99.90, imagem: 'img/information-society.jpg', descricao: 'Álbum de estreia da banda, prensagem nacional.', ano: 1988, regiao: 'Internacional', 
    faixas: ['What\'s on Your Mind (Pure Energy)', 'Tomorrow', 'Lay All Your Love on Me', 'Repetition', 'Walking Away', 'Over the Sea', 'Attitude', 'Something in the Air', 'Running', 'Make It Funky'] },
    { id: 20, nome: 'Reality Awaits', artista: 'The Strokes', preco: 119.90, imagem: 'img/reality-awaits.jpg', descricao: 'Lançamento, prensagem nacional.', ano: 2026, regiao: 'Internacional', 
    faixas: ['Psycho Shit', 'Dine N\'Dash', 'Lonely in the Future', 'Falling out of Love', 'Going to Babble On', 'Going Shopping', 'Liar\' Remorse', 'The Fruits of Conquest', 'Tyrants of the Mellow Moon'] },
    { id: 21, nome: 'Alucinação', artista: 'Belchior', preco: 129.90, imagem: 'img/alucinacao.jpg', descricao: 'Um dos discos mais influentes da MPB, remasterizado.', ano: 1976, regiao: 'Nacional',
    faixas: ['Apenas um Rapaz Latino-Americano', 'Velha Roupa Colorida', 'Como Nossos Pais', 'Sujeito de Sorte', 'Como o Diabo Gosta', 'Alucinação', 'Não Leve Flores', 'A Palo Seco', 'Fotografia 3x4', 'Antes do Fim'] },
    { id: 22, nome: 'Exagerado', artista: 'Cazuza', preco: 129.90, imagem: 'img/exagerado.jpg', descricao: 'Álbum de estreia solo, marco do rock nacional.', ano: 1985, regiao: 'Nacional',
    faixas: ['Exagerado', 'Medieval II', 'Cúmplice', 'Mal Nenhum', 'Balada de um Vagabundo', 'Codinome Beija-Flor', 'Desastre Mental', 'Boa Vida', 'Só as Mães São Felizes', 'Rock da Descerebração'] },
    { id: 23, nome: 'Secos & Molhados', artista: 'Secos & Molhados', preco: 119.90, imagem: 'img/secos-e-molhados.jpg', descricao: 'Segundo álbum da banda, também conhecido como Secos & Molhados II.', ano: 1974, regiao: 'Nacional',
    faixas: ['Tercer Mundo', 'Flores Astrais', 'Não: Não Digas Nada', 'Medo Mulato', 'Oh! Mulher Infiel', 'Vôo', 'Angústia', 'O Hierofonte', 'Caixinha de Música do João', 'O Doce e o Amargo', 'Preto Velho', 'Delírio...', 'Toada & Rock & Mambo & Tango & Etc.'] },
    { id: 24, nome: 'Dois', artista: 'Legião Urbana', preco: 139.90, imagem: 'img/dois.jpg', descricao: 'Segundo álbum de estúdio, um dos maiores clássicos do rock nacional.', ano: 1986, regiao: 'Nacional',
    faixas: ['Daniel na Cova dos Leões', 'Quase Sem Querer', 'Acrilic on Canvas', 'Eduardo e Mônica', 'Central do Brasil', 'Tempo Perdido', 'Metrópole', 'Plantas Embaixo do Aquário', 'Música Urbana 2', 'Andrea Doria', 'Fábrica', 'Índios'] },
    { id: 25, nome: 'A Tábua de Esmeralda', artista: 'Jorge Ben Jor', preco: 129.90, imagem: 'img/a-tabua-de-esmeralda.jpg', descricao: 'Um dos discos mais celebrados da carreira do artista.', ano: 1974, regiao: 'Nacional',
    faixas: ['Os Alquimistas Estão Chegando os Alquimistas', 'O Homem da Gravata Florida', 'Errare Humanum Est', 'Menina Mulher da Pele Preta', 'Eu Vou Torcer', 'Magnólia', 'Minha Teimosia, uma Arma pra Te Conquistar', 'Zumbi', 'Brother', 'O Namorado da Viúva', 'Hermes Trismegisto e sua Celeste Tábua de Esmeralda', 'Cinco Minutos'] },
    { id: 26, nome: 'Clube da Esquina', artista: 'Clube da Esquina', preco: 159.90, imagem: 'img/clube-da-esquina.jpg', descricao: 'Álbum duplo, um dos maiores discos da história da música brasileira.', ano: 1972, regiao: 'Nacional',
    faixas: ['Tudo que Você Podia Ser', 'Cais', 'O Trem Azul', 'Saídas e Bandeiras Nº 1', 'Nuvem Cigana', 'Cravo e Canela', 'Dos Cruces', 'Um Girassol da Cor do Seu Cabelo', 'San Vicente', 'Estrelas', 'Clube da Esquina Nº 2', 'Paisagem da Janela', 'Me Deixa em Paz', 'Os Povos', 'Saídas e Bandeiras Nº 2', 'Um Gosto de Sol', 'Pelo Amor de Deus', 'Lilia', 'Trem de Doido', 'Nada Será Como Antes', 'Ao Que Vai Nascer'] },
    { id: 27, nome: 'AmarElo', artista: 'Emicida', preco: 119.90, imagem: 'img/amarelo.jpg', descricao: 'Terceiro álbum de estúdio, vencedor do Grammy Latino.', ano: 2019, regiao: 'Nacional',
    faixas: ['Principia', 'A Ordem Natural das Coisas', 'Pequenas Alegrias da Vida Adulta', 'Quem Tem um Amigo (Tem Tudo)', 'Paisagem', 'Cananéia, Iguape e Ilha Comprida', '9nha', 'Ismália', 'Eminência Parda', 'AmarElo', 'Libre'] },
    { id: 28, nome: 'Minha Voz', artista: 'Gal Costa', preco: 109.90, imagem: 'img/minha-voz.jpg', descricao: 'Álbum de 1982, vendeu mais de 400 mil cópias no Brasil.', ano: 1982, regiao: 'Nacional',
    faixas: ['Minha Voz, Minha Vida', 'Azul', 'Musa Cabocla', 'Dom de Iludir', 'Solar', 'Borzeguim', 'Bloco do Prazer', 'Verbos do Amor', 'Luz do Sol', 'Pegando Fogo', 'Groupie'] },
    { id: 29, nome: 'Sobrevivendo no Inferno', artista: 'Racionais MC\'s', preco: 149.90, imagem: 'img/sobrevivendo-no-inferno.jpg', descricao: 'O álbum de rap mais vendido da história do Brasil.', ano: 1997, regiao: 'Nacional',
    faixas: ['Jorge da Capadócia', 'Genesis', 'Capítulo 4, Versículo 3', 'Tô Ouvindo Alguém Me Chamar', 'Rapaz Comum', '...', 'Diário de um Detento', 'Periferia é Periferia', 'Qual Mentira Vou Acreditar', 'Mágico de Oz', 'Fórmula Mágica da Paz', 'Salve'] },
    { id: 30, nome: 'O Papa é Pop', artista: 'Engenheiros do Hawaii', preco: 119.90, imagem: 'img/o-papa-e-pop.jpg', descricao: 'Álbum mais vendido da banda, disco de platina.', ano: 1990, regiao: 'Nacional',
    faixas: ['O Exército de um Homem Só, I', 'Era um Garoto que Como Eu Amava os Beatles e os Rolling Stones', 'O Exército de um Homem Só, II', 'Nunca Mais Poder', 'Pra Ser Sincero', 'Olhos Iguais aos Seus', 'O Papa é Pop', 'A Violência Travestida Faz Seu Trottoir', 'Anoiteceu em Porto Alegre', 'Ilusão de Ótica', 'Perfeita Simetria'] },
    { id: 31, nome: 'Clics Modernos', artista: 'Charly García', preco: 139.90, imagem: 'img/clics-modernos.jpg', descricao: 'Álbum solo mais aclamado da carreira do músico argentino.', ano: 1983, regiao: 'Internacional',
    faixas: ['Nos Siguen Pegando Abajo', 'No Soy un Extraño', 'Dos Cero Uno', 'Nuevos Trapos', 'Bancate Ese Defecto', 'No Me Dejan Salir', 'Los Dinosaurios', 'Plateado Sobre Plateado (Huellas en el Mar)', 'Ojos de Video Tape'] },
    { id: 32, nome: 'A Divina Comédia ou Ando Meio Desligado', artista: 'Os Mutantes', preco: 149.90, imagem: 'img/a-divina-comedia.jpg', descricao: 'Terceiro álbum da banda, marco do rock psicodélico brasileiro.', ano: 1970, regiao: 'Nacional',
    faixas: ['Ando Meio Desligado', 'Quem Tem Medo de Brincar de Amor', 'Ave, Lúcifer', 'Desculpe, Babe', 'Meu Refrigerador Não Funciona', 'Hey Boy', 'Preciso Urgentemente Encontrar um Amigo', 'Chão de Estrelas', 'Jogo de Calçada', 'Haleluia', 'Oh! Mulher Infiel'] },
  ];

  listarTodos(): Observable<Produto[]> {
    return of(this.produtos);
  }

  buscarPorId(id: number): Observable<Produto | undefined> {
    return of(this.produtos.find(p => p.id === id));
  }

  buscarPorNome(termo: string): Observable<Produto[]> {
    const termoLower = termo.toLowerCase();
    return of(this.produtos.filter(p =>
      p.nome.toLowerCase().includes(termoLower) ||
      p.artista.toLowerCase().includes(termoLower)
    ));
  }
}