export interface Book {
    title: string;
    author: string;
    photo: string;
    price: number;
    description: string;
    isAvailable: boolean;
    linkKaspi: string;
    genre:string;
    like:number;

}

export const products = [
    {
        title: 'Little',
        author: 'Loisa May Alcott',
        photo: `https://m.media-amazon.com/images/I/714j9RdFgbL._AC_UF1000,1000_QL80_.jpg`,
        price: 10000,
        description: 'Little Women is a coming-of-age novel written by American novelist Louisa May Alcott, originally published in two volumes in 1868 and 1869. The story follows the lives of the four March sisters—Meg, Jo, Beth, and Amy—and details their passage from childhood to womanhood.',
        isAvailable: true,
        linkKaspi: `https://kaspi.kz/shop/p/alcott-l-m-little-women-108087744/?c=750000000`,
        genre: 'Classics',
        like: 0
      },
      {
        title: 'Ұшқан ұя',
        author: 'Бауыржан Момышұлы',
        photo: `https://egemen.kz/article_photo/1517461450_article_b.jpeg`,
        price: 3000,
        description: '«Ұшқан ұя» романы – Бауыржан Момышұлының мемуарлық шығармасы. Шығармаға автордың балалық шағынан, ес біле бастаған, мектеп табалдырығын аттағанға дейінгі өмірі өзек болған. Жазушы өзінің тұлға ретінде қалыптасуына ұшқан ұясы ықпал еткенін баяндай отырып, отбасы мүшелерін: әжесі Қызтумас, әкесі Момыш, немере ағасы Момынқұл, әпкелері Үбиан, Әлимандарды өзіндік бейнелерімен әр қырынан танытқан. «Ұшқан ұя» романы – мемуарлық шығарма ғана емес, қазақтың салт-дәстүрі, ғұрпы, ұстанымы, дүниетанымы әсерлі бейнеленген этнографиялық шығарма.',
        isAvailable: true,
        linkKaspi: `https://kaspi.kz/shop/p/momysh-ly-b-sh-an-ja-101327049/?c=750000000`,
        genre: 'Literature',
        like: 0
      },
      {
        title: 'Тәкаппар ғашықтар',
        author: 'Джейн Остин',
        photo: `https://resources.cdn-kaspi.kz/img/m/p/h92/h9f/84916462157854.png?format=gallery-large`,
        price: 4300,
        description: 'Pride and Prejudice is set in rural England at the turn of the 19th century, and it follows the Bennet family, which includes five very different sisters. The eldest, Jane, is sweet-tempered and modest. She is her sister Elizabeth’s confidant and friend. Elizabeth, the heroine of the novel, is intelligent and high-spirited. She shares her father’s distaste for the conventional views of society as to the importance of wealth and rank. The third daughter, Mary, is plain, bookish, and pompous, while Lydia and Kitty, the two youngest, are flighty and immature.',
        isAvailable: true,
        linkKaspi: `https://kaspi.kz/shop/p/dzhein-ostin-t-kappar-ashy-tar-105934631/?c=750000000`,
        genre: 'Classics',
        like: 0
      },
      {
        title: 'Миссия выполнима. Технология счастливой жизни',
        author: 'Сейсембай Маргулан',
        photo: `https://resources.cdn-kaspi.kz/img/m/p/h40/hc0/81323961483294.jpg?format=gallery-large`,
        price: 3348,
        description: 'Можно ли проверить алгеброй гармонию? И можно ли выработать технологию для такого неуловимого состояния, как счастье? Автор книги — казахский миллиардер, предприниматель и общественный деятель Маргулан Сейсембай — отвечает на эти вопросы уверенным «Да!» На основании своего богатого жизненного опыта Сейсембай разработал методику, которая позволит любому человеку обрести контроль над своей жизнью и достичь... не успеха, но счастья — автор призывает разделять эти два понятия, так как погоня за ними дает разные результаты.',
        isAvailable: true,
        linkKaspi: `https://kaspi.kz/shop/p/seisembai-m-missija-vypolnima-tehnologija-schastlivoi-zhizni-110909648/?c=750000000`,
        genre: 'Self-help',
        like: 0
      },
      {
        title: 'Десять негритят',
        author: 'Кристи А.',
        photo: `https://resources.cdn-kaspi.kz/img/m/p/h3f/h8b/63926013886494.jpg?format=gallery-large`,
        price: 1100,
        description: 'Ten people are invited to a castle situated on the Negro Island under various pretexts. They witness figures of Amerindians in the castle and a creepy poem in each bedroom of the castle.',
        isAvailable: true,
        linkKaspi: `https://kaspi.kz/shop/p/kristi-a-desjat-negritjat-100329448/?c=750000000`,
        genre: 'Detective',
        like: 0
      },
      {
        title: 'Тонкое искусство пофигизма. Парадоксальный способ жить счастливо',
        author: 'Мэнсон М.',
        photo: `https://resources.cdn-kaspi.kz/img/m/p/h7f/h3a/63817944662046.jpg?format=gallery-large`,
        price: 2100,
        description: 'Тонкое искусство заключается в том, чтобы отделять подлинное от подмены, правильное лично для меня от навязанного «общепринятого», удовольствие от счастья. Написанная в жанре «селф-хелп» книга, с привычной апелляцией к духовному росту, внутренним ценностям, преодолению страха, — вызов современному миру потребления.',
        isAvailable: true,
        linkKaspi: `https://kaspi.kz/shop/p/menson-m-tonkoe-iskusstvo-pofigizma-paradoksal-nyi-sposob-zhit-schastlivo-26016594/?c=750000000`,
        genre: 'Self-help',
        like: 0
      },
      {
        title: 'Мартин Иден',
        author: 'Лондон Д.',
        photo: `https://resources.cdn-kaspi.kz/img/m/p/h47/h4b/64225442988062.jpg?format=gallery-large`,
        price: 1100,
        description: 'Martin Eden is a 1909 novel by American author Jack London about a young proletarian autodidact struggling to become a writer. It was first serialized in The Pacific Monthly magazine from September 1908 to September 1909 and then published in book form by Macmillan in September 1909.',
        isAvailable: true,
        linkKaspi: `https://kaspi.kz/shop/p/london-d-martin-iden-101137240/?c=750000000`,
        genre: 'Classics',
        like: 0
      }
      ,
      {
        title: 'Бақытсыз Жамал',
        author: 'Дулатов М.',
        photo: `https://resources.cdn-kaspi.kz/img/m/p/hd5/hbd/84416161906718.jpg?format=gallery-large`,
        price: 2100,
        description: 'Міржақып Дулатовтың «Бақытсыз Жамал» романы XX ғасырдың басындағы қазақ әдебиетінің бұл жанрдағы тұңғыш жетістігі, тұңғыш роман. Әдеби ортада өзінен кейінгі көтерер жүгі, мақсатты мен бағыты бір көптеген романдарға алғышарт болды. Тек көркемдік жағынан ғана емес, тіл, форма жағынан да біраз дүниелерге сара жол болғаны анық. Роман алғаш жарық көргеннен бастап қазақ әйелдерінің бас бостандығының жаршысына айналды.',
        isAvailable: true,
        linkKaspi: `https://kaspi.kz/shop/p/-dulatov-m-ba-ytsyz-zhamal-114225861/?c=750000000`,
        genre: 'Literature',
        like: 0
      },
      {
        title: '48 законов власти',
        author: 'Грин Р.',
        photo: `https://resources.cdn-kaspi.kz/img/m/p/h10/hbe/65117734273054.jpg?format=gallery-large`,
        price: 2100,
        description: 'Это самая аморальная, самая скандальная, самая циничная... и самая правдивая книга о власти, начиная с незамысловатой, бытовой и кончая президентской. Отныне, познав блестяще сформулированные и подкрепленные интереснейшими и неожиданными историческими факторами жесткие и жестокие законы поведения во власти, вы без труда распознаете то, что стоит за теми или иными словами и поступками «маленьких» начальников и сильных мира сего, то, что так тщательно они пытаются скрыть. «48 законов власти» - настольная книга для тех, кто желает освоить науку управления людьми, безошибочно использовать их слабости для достижения собственного могущества.',
        isAvailable: true,
        linkKaspi: `https://kaspi.kz/shop/p/grin-r-48-zakonov-vlasti-104927974/?c=7500000000`,
        genre: 'Self-help',
        like: 0
      },
      {
        title: 'Will. Чему может научить нас простой парень, ставший самым высокооплачиваемым актером Голливуда',
        author: 'Смит Уилл, Мэнсон М.',
        photo: `https://resources.cdn-kaspi.kz/img/m/p/hc9/h86/64363552800798.jpg?format=gallery-large`,
        price: 4300,
        description: '«Я всегда считал себя трусом. Большая часть моих детских воспоминаний так или иначе связана со страхом: я боялся других детей, боялся покалечиться, боялся опозориться, боялся, что меня будут считать слабаком». Трудно поверить, но именно так начинает свою исповедь звезда Голливуда и любимчик миллионов Уилл Смит. Сложные отношения с отцом, взросление, головокружительная карьера и непростая личная жизнь — об этом и многом другом мистер «Я — легенда» откровенно рассказал в автобиографии «Will». Смелая, вдохновляющая книга написана в соавторстве с Марком Мэнсоном, автором многомиллионного бестселлера «Тонкое искусство пофигизма».',
        isAvailable: true,
        linkKaspi: `https://kaspi.kz/shop/p/smit-uill-menson-m-will-chemu-mozhet-nauchit-nas-prostoi-paren-stavshii-samym-vysokooplachivaemym-akterom-gollivuda-103331112/?c=750000000`,
        genre: 'Self-help',
        like: 0
      },
      {
        title: 'Менің атым - Қожа',
        author: 'Соқпақбаев Б.',
        photo: `https://resources.cdn-kaspi.kz/img/m/p/hd5/h04/63924801077278.jpg?format=gallery-large`,
        price: 1300,
        description: 'Повесте кішкентай Қожаның мектеп жасындағы бастан кешкен әр түрлі қызықты оқиғалары жайлы баяндалады. Ол қанша бұзықтық жасаса да жақсы адам болуға талпынысы бар. Өзінің жасаған бұзықтығының бәрі әкесіз өскендігінен деп ойлайды. Қожа өзінің мінезін, тәртібін өзгертуге тырысады. Әңгімеде Қожаның балалық махаббаты да үлкен рөл ойнайды. Ол сыныбындағы үлгілі, тәртіпті әрі сабағын үздік оқитын Жанар деген қызды жақсы көреді. Тіпті кей кездері Жанарға арнап өлең де шығарады. Жанарды әрқашан көргісі келіп тұрады. Қожа жазушы болуды армандайды.',
        isAvailable: true,
        linkKaspi: `https://kaspi.kz/shop/p/so-pa-baev-b-men-atym-ozha-100389354/?c=750000000`,
        genre: 'Literature',
        like: 0
      },
      {
        title: 'Гауһар тас',
        author: 'Исабеков Д.',
        photo: `https://resources.cdn-kaspi.kz/img/m/p/hb7/h99/64090025525278.jpg?format=gallery-large`,
        price: 1300,
        description: '  Бұл шығарма қарапайым Алматы облысындағы ауылда тұратын отбасы туралы жазылаған және олардың тіршілігі керемет бейнеленген.',
        isAvailable: true,
        linkKaspi: `https://kaspi.kz/shop/p/isabekov-d-gau-ar-tas-101501105/?c=750000000`,
        genre: 'Literature',
        like: 0
      },
      {
        title: 'Весь Шерлок Холмс',
        author: 'Дойл А. К.',
        photo: `https://resources.cdn-kaspi.kz/img/m/p/h13/h34/63783290339358.jpg?format=gallery-large`,
        price: 10000,
        description: '',
        isAvailable: true,
        linkKaspi: `https://kaspi.kz/shop/p/doil-a-k-ves-sherlok-holms-100044134/?c=750000000`,
        genre: 'Detective',
        like: 0
      },
      {
        title: 'Большая четверка. ',
        author: 'Кристи А.',
        photo: `https://resources.cdn-kaspi.kz/img/m/p/h38/h7f/64432458792990.jpg?format=gallery-large`,
        price: 3000,
        description: 'Книга Агаты Кристи',
        isAvailable: true,
        linkKaspi: `https://kaspi.kz/shop/p/kristi-a-bol-shaja-chetverka-agata-kristi-pervaja-ledi-detektiva-106675824/?c=750000000`,
        genre: 'Detective',
        like: 0
      },
      {
        title: 'Детектив',
        author: 'Хейли А.',
        photo: `https://resources.cdn-kaspi.kz/img/m/p/hbf/h52/64233509748766.jpg?format=gallery-large`,
        price: 3000,
        description: '',
        isAvailable: true,
        linkKaspi: `https://kaspi.kz/shop/p/heili-a-detektiv-101133178/?c=750000000`,
        genre: 'Detective',
        like: 0
      },
      {
        title: 'Dandelion wine',
        author: 'Ray Bradbury',
        photo: `https://m.media-amazon.com/images/I/81U2NnnB5YL._AC_UF894,1000_QL80_.jpg`,
        price: 3000,
        description: 'Dandelion Wine is a 1957 novel by Ray Bradbury set in the summer of 1928 in the fictional town of Green Town, Illinois, based upon Bradburys childhood home of Waukegan, Illinois, and serving as the first novel in his Green Town Trilogy.',
        isAvailable: true,
        linkKaspi: `https://kaspi.kz/shop/p/heili-a-detektiv-101133178/?c=750000000`,
        genre: 'Classics',
        like: 0
      }


      
     
     
     
     
     
      
]