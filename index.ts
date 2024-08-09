import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

 const countries = [
  { ru: "Россия", en: "Russia" },
  { ru: "Турция", en: "Turkey" },
  { ru: "Египет", en: "Egypt" },
  { ru: "Греция", en: "Greece" },
  { ru: "Испания", en: "Spain" },
  { ru: "Италия", en: "Italy" },
  { ru: "Кипр", en: "Cyprus" },
  { ru: "Мальдивы", en: "Maldives" },
  { ru: "Таиланд", en: "Thailand" },
  { ru: "Вьетнам", en: "Vietnam" },
  { ru: "Доминикана", en: "Dominican Republic" },
  { ru: "Мексика", en: "Mexico" },
  { ru: "Куба", en: "Cuba" },
  { ru: "ОАЭ", en: "UAE" },
  { ru: "Индонезия", en: "Indonesia" },
  { ru: "Шри-Ланка", en: "Sri Lanka" },
  { ru: "Марокко", en: "Morocco" },
  { ru: "Тунис", en: "Tunisia" },
  { ru: "Португалия", en: "Portugal" },
  { ru: "Франция", en: "France" },
  { ru: "Хорватия", en: "Croatia" },
  { ru: "Черногория", en: "Montenegro" },
  { ru: "Болгария", en: "Bulgaria" },
  { ru: "Румыния", en: "Romania" },
  { ru: "Чехия", en: "Czech Republic" },
  { ru: "Словения", en: "Slovenia" },
  { ru: "Польша", en: "Poland" },
  { ru: "Германия", en: "Germany" },
  { ru: "Австрия", en: "Austria" },
  { ru: "Швейцария", en: "Switzerland" },
  { ru: "Ирландия", en: "Ireland" },
  { ru: "Великобритания", en: "United Kingdom" },
  { ru: "США", en: "USA" },
  { ru: "Канада", en: "Canada" },
  { ru: "Багамы", en: "Bahamas" },
  { ru: "Ямайка", en: "Jamaica" },
  { ru: "Барбадос", en: "Barbados" },
  { ru: "Сейшелы", en: "Seychelles" },
  { ru: "Маврикий", en: "Mauritius" },
  { ru: "Филиппины", en: "Philippines" },
  { ru: "Сингапур", en: "Singapore" },
  { ru: "Малайзия", en: "Malaysia" },
  { ru: "Бали", en: "Bali" },
  { ru: "Камбоджа", en: "Cambodia" },
  { ru: "Лаос", en: "Laos" },
  { ru: "Мьянма", en: "Myanmar" },
  { ru: "Непал", en: "Nepal" },
  { ru: "Индия", en: "India" },
  { ru: "Южная Корея", en: "South Korea" },
  { ru: "Япония", en: "Japan" },
  { ru: "Китай", en: "China" },
  { ru: "Тайвань", en: "Taiwan" },
  { ru: "Австралия", en: "Australia" },
  { ru: "Новая Зеландия", en: "New Zealand" },
  { ru: "Фиджи", en: "Fiji" },
  { ru: "Тонга", en: "Tonga" },
  { ru: "Самоа", en: "Samoa" },
  { ru: "Кука", en: "Cook Islands" },
  { ru: "Гонконг", en: "Hong Kong" },
  { ru: "Макао", en: "Macau" },
  ];

  const reviews = [
    {
      id: 1,
      date: new Date(),
      rating: '4.7',
      text: "The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.",
      authorImage:"https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      authorName: "Anthony Bruff"
    },
    {
      id: 2,
      date: new Date(),
      rating: '4.7',
      text: "The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.",
      authorImage:"https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      authorName: "Anthony Bruff"
    },
    {
      id: 3,
      date: new Date(),
      rating: '4.7',
      text: "The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results.",
      authorImage:"https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      authorName: "Anthony Bruff"
    }
  ]

  const rooms = [
    {
      id: 1, 
      rating: '4.7',
      reviews: 4,
      title: 'The Royal Room',
      description: `<p>This cozy furnished room with fresh renovation consists of a separate entrance hall with mirror, a bedroom with a large double bed and closet, a kitchen combined with the living room. There is also a shower cubicle and an area with sink and toilet cabinet.</p>
      <p>The windows are large so there is plenty of light in the apartment, but there are also curtains to block out unwanted light if needed.
  The area is very calm and quiet, in walking distance is everything you need: supermarket, bus stop, park, cinema, school, city hall.
  </p>`,
      images: ['https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1683134440527-28b19fabf89d?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1683134440527-28b19fabf89d?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1661962964017-b985533e1f45?q=80&w=2797&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
      decorImages:[
        'https://plus.unsplash.com/premium_photo-1680632913194-be52bf941229?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1667313302163-11b23b89432d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1582131503261-fca1d1c0589f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ],  
      price: 160000,
      available: true,
    },
    {
      id: 2, 
      rating: '4.7',
      reviews: 4,
      title: 'The Royal Room',
      description: `<p>This cozy furnished room with fresh renovation consists of a separate entrance hall with mirror, a bedroom with a large double bed and closet, a kitchen combined with the living room. There is also a shower cubicle and an area with sink and toilet cabinet.
</p><p>The windows are large so there is plenty of light in the apartment, but there are also curtains to block out unwanted light if needed.
The area is very calm and quiet, in walking distance is everything you need: supermarket, bus stop, park, cinema, school, city hall.
</p>`,
      images: [
        'https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1683134440527-28b19fabf89d?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1683134440527-28b19fabf89d?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1661962964017-b985533e1f45?q=80&w=2797&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
     
      decorImages:[
        'https://plus.unsplash.com/premium_photo-1680632913194-be52bf941229?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1667313302163-11b23b89432d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1582131503261-fca1d1c0589f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ],
      price: 160000,
      available: true,
    },
    {
      id: 3, 
      rating: '4.7',
      reviews: 4,
      title: 'The Royal Room',
      description: `<p>This cozy furnished room with fresh renovation consists of a separate entrance hall with mirror, a bedroom with a large double bed and closet, a kitchen combined with the living room. There is also a shower cubicle and an area with sink and toilet cabinet.
</p><p>The windows are large so there is plenty of light in the apartment, but there are also curtains to block out unwanted light if needed.
The area is very calm and quiet, in walking distance is everything you need: supermarket, bus stop, park, cinema, school, city hall.
</p>`,
      images: ['https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1683134440527-28b19fabf89d?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1683134440527-28b19fabf89d?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
       'https://plus.unsplash.com/premium_photo-1661962964017-b985533e1f45?q=80&w=2797&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
      
      rice: 160000,
      available: true,
    },
    {
      id: 4, 
      rating: '4.7',
      reviews: 4,
      title: 'The Royal Room',
      description: `<p>This cozy furnished room with fresh renovation consists of a separate entrance hall with mirror, a bedroom with a large double bed and closet, a kitchen combined with the living room. There is also a shower cubicle and an area with sink and toilet cabinet.
</p><p>The windows are large so there is plenty of light in the apartment, but there are also curtains to block out unwanted light if needed.
The area is very calm and quiet, in walking distance is everything you need: supermarket, bus stop, park, cinema, school, city hall.
</p>`,
      images: ['https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1683134440527-28b19fabf89d?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1683134440527-28b19fabf89d?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
       'https://plus.unsplash.com/premium_photo-1661962964017-b985533e1f45?q=80&w=2797&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
      decorImages:[
        'https://plus.unsplash.com/premium_photo-1680632913194-be52bf941229?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1667313302163-11b23b89432d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1582131503261-fca1d1c0589f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ],
      price: 160000,
      available: true,
    },
    {
      id: 5, 
      rating: '4.7',
      reviews: 4,
      title: 'The Royal Room',
      description: `<p>This cozy furnished room with fresh renovation consists of a separate entrance hall with mirror, a bedroom with a large double bed and closet, a kitchen combined with the living room. There is also a shower cubicle and an area with sink and toilet cabinet.
</p><p>The windows are large so there is plenty of light in the apartment, but there are also curtains to block out unwanted light if needed.
The area is very calm and quiet, in walking distance is everything you need: supermarket, bus stop, park, cinema, school, city hall.
</p>`,
      images: ['https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1683134440527-28b19fabf89d?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1683134440527-28b19fabf89d?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1683134440527-28b19fabf89d?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1683134440527-28b19fabf89d?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
       'https://plus.unsplash.com/premium_photo-1661962964017-b985533e1f45?q=80&w=2797&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
      
       decorImages:[
        'https://plus.unsplash.com/premium_photo-1680632913194-be52bf941229?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1667313302163-11b23b89432d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1582131503261-fca1d1c0589f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
       ],
      price: 160000,
      available: true,
    },
    {
      id: 6, 
      rating: '4.7',
      reviews: 4,
      title: 'The Royal Room',
      description: `<p>This cozy furnished room with fresh renovation consists of a separate entrance hall with mirror, a bedroom with a large double bed and closet, a kitchen combined with the living room. There is also a shower cubicle and an area with sink and toilet cabinet.</p>
        <p>The windows are large so there is plenty of light in the apartment, but there are also curtains to block out unwanted light if needed.
        The area is very calm and quiet, in walking distance is everything you need: supermarket, bus stop, park, cinema, school, city hall.
        </p>`,
      images: ['https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1683134440527-28b19fabf89d?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1683134440527-28b19fabf89d?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
       'https://plus.unsplash.com/premium_photo-1661962964017-b985533e1f45?q=80&w=2797&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
      
       decorImages:[
        'https://plus.unsplash.com/premium_photo-1680632913194-be52bf941229?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1667313302163-11b23b89432d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1582131503261-fca1d1c0589f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
       ],
       price: 160000,
      available: true,
    },
    {
      id: 7, 
      rating: '4.7',
      reviews: 4,
      title: 'The Royal Room',
      description: `<p>This cozy furnished room with fresh renovation consists of a separate entrance hall with mirror, a bedroom with a large double bed and closet, a kitchen combined with the living room. There is also a shower cubicle and an area with sink and toilet cabinet.</p>
<p>The windows are large so there is plenty of light in the apartment, but there are also curtains to block out unwanted light if needed.
The area is very calm and quiet, in walking distance is everything you need: supermarket, bus stop, park, cinema, school, city hall.
</p>`,
      images: ['https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1683134440527-28b19fabf89d?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1683134440527-28b19fabf89d?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
       'https://plus.unsplash.com/premium_photo-1661962964017-b985533e1f45?q=80&w=2797&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
      
       decorImages:[
        'https://plus.unsplash.com/premium_photo-1680632913194-be52bf941229?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1667313302163-11b23b89432d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1582131503261-fca1d1c0589f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
       ],
      price: 160000,
      available: true,
    },
    {
      id: 8, 
      rating: '4.7',
      reviews: 4,
      title: 'The Royal Room',
      description: `<p>This cozy furnished room with fresh renovation consists of a separate entrance hall with mirror, a bedroom with a large double bed and closet, a kitchen combined with the living room. There is also a shower cubicle and an area with sink and toilet cabinet.
</p><p>The windows are large so there is plenty of light in the apartment, but there are also curtains to block out unwanted light if needed.
The area is very calm and quiet, in walking distance is everything you need: supermarket, bus stop, park, cinema, school, city hall.
</p>`,
      images: ['https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1683134440527-28b19fabf89d?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1683134440527-28b19fabf89d?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
       'https://plus.unsplash.com/premium_photo-1661962964017-b985533e1f45?q=80&w=2797&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
      
       decorImages:[
        'https://plus.unsplash.com/premium_photo-1680632913194-be52bf941229?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1667313302163-11b23b89432d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1582131503261-fca1d1c0589f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
       ],
      price: 160000,
      available: true,
    },
    {
      id: 9, 
      rating: '4.7',
      reviews: 4,
      title: 'The Royal Room',
      description: `<p>This cozy furnished room with fresh renovation consists of a separate entrance hall with mirror, a bedroom with a large double bed and closet, a kitchen combined with the living room. There is also a shower cubicle and an area with sink and toilet cabinet.
</p><p>The windows are large so there is plenty of light in the apartment, but there are also curtains to block out unwanted light if needed.
The area is very calm and quiet, in walking distance is everything you need: supermarket, bus stop, park, cinema, school, city hall.
</p>`,
      images: ['https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1683134440527-28b19fabf89d?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1683134440527-28b19fabf89d?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
       'https://plus.unsplash.com/premium_photo-1661962964017-b985533e1f45?q=80&w=2797&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
      
       decorImages:[
        'https://plus.unsplash.com/premium_photo-1680632913194-be52bf941229?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1667313302163-11b23b89432d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1582131503261-fca1d1c0589f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
       ],
      price: 160000,
      available: true,
    },
    {
      id: 10, 
      rating: '4.7',
      reviews: 4,
      title: 'The Royal Room',
      description: `<p>This cozy furnished room with fresh renovation consists of a separate entrance hall with mirror, a bedroom with a large double bed and closet, a kitchen combined with the living room. There is also a shower cubicle and an area with sink and toilet cabinet.
</p><p>The windows are large so there is plenty of light in the apartment, but there are also curtains to block out unwanted light if needed.
The area is very calm and quiet, in walking distance is everything you need: supermarket, bus stop, park, cinema, school, city hall.
</p>`,
      images: ['https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1683134440527-28b19fabf89d?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1683134440527-28b19fabf89d?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
       'https://plus.unsplash.com/premium_photo-1661962964017-b985533e1f45?q=80&w=2797&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
      
       decorImages:[
        'https://plus.unsplash.com/premium_photo-1680632913194-be52bf941229?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1667313302163-11b23b89432d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1582131503261-fca1d1c0589f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
       ],
      price: 160000,
      available: true,
    },
    {
      id: 11, 
      rating: '4.7',
      reviews: 4,
      title: 'The Royal Room',
      description: `<p>This cozy furnished room with fresh renovation consists of a separate entrance hall with mirror, a bedroom with a large double bed and closet, a kitchen combined with the living room. There is also a shower cubicle and an area with sink and toilet cabinet.
</p><p>The windows are large so there is plenty of light in the apartment, but there are also curtains to block out unwanted light if needed.
The area is very calm and quiet, in walking distance is everything you need: supermarket, bus stop, park, cinema, school, city hall.
</p>`,
      images: ['https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'https://plus.unsplash.com/premium_photo-1683134440527-28b19fabf89d?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1683134440527-28b19fabf89d?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
       'https://plus.unsplash.com/premium_photo-1661962964017-b985533e1f45?q=80&w=2797&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
      
       decorImages:[
        'https://plus.unsplash.com/premium_photo-1680632913194-be52bf941229?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1667313302163-11b23b89432d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1582131503261-fca1d1c0589f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
       ],
      price: 160000,
      available: true,
    },
    {
      id: 12, 
      rating: '4.7',
      reviews: 4,
      title: 'The Royal Room',
      description: `<p>This cozy furnished room with fresh renovation consists of a separate entrance hall with mirror, a bedroom with a large double bed and closet, a kitchen combined with the living room. There is also a shower cubicle and an area with sink and toilet cabinet.
</p><p>The windows are large so there is plenty of light in the apartment, but there are also curtains to block out unwanted light if needed.
The area is very calm and quiet, in walking distance is everything you need: supermarket, bus stop, park, cinema, school, city hall.
</p>`,
      images: ['https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'https://plus.unsplash.com/premium_photo-1683134440527-28b19fabf89d?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1683134440527-28b19fabf89d?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
       'https://plus.unsplash.com/premium_photo-1661962964017-b985533e1f45?q=80&w=2797&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
      
       decorImages:[
        'https://plus.unsplash.com/premium_photo-1680632913194-be52bf941229?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1667313302163-11b23b89432d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1582131503261-fca1d1c0589f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
       ],
      price: 160000,
      available: true,
    },
    {
      id: 13, 
      rating: '4.7',
      reviews: 4,
      title: 'The Royal Room',
      description: `<p>This cozy furnished room with fresh renovation consists of a separate entrance hall with mirror, a bedroom with a large double bed and closet, a kitchen combined with the living room. There is also a shower cubicle and an area with sink and toilet cabinet.
</p><p>The windows are large so there is plenty of light in the apartment, but there are also curtains to block out unwanted light if needed.
The area is very calm and quiet, in walking distance is everything you need: supermarket, bus stop, park, cinema, school, city hall.
</p>`,
      images: ['https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1683134440527-28b19fabf89d?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1683134440527-28b19fabf89d?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
       'https://plus.unsplash.com/premium_photo-1661962964017-b985533e1f45?q=80&w=2797&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
      
       decorImages:[
        'https://plus.unsplash.com/premium_photo-1680632913194-be52bf941229?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1667313302163-11b23b89432d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1582131503261-fca1d1c0589f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
       ],
      price: 160000,
      available: true,
    }
  ]

const tours = [
  {
    id: 1,
    country: 'Brazil',
    city: 'Brasília',
    currency: 'BRL',
    flag: 'https://www.countryflags.com/wp-content/uploads/brazil-flag-png-large.png',
  },
  {
    id: 2,
    country: 'Brazil',
    city: 'Brasília',
    currency: 'BRL',
    flag: 'https://www.countryflags.com/wp-content/uploads/brazil-flag-png-large.png',
  },
  {
    id: 3,
    country: 'Belarus',
    city: 'Brasília',
    currency: 'BRL',
    flag: 'https://www.countryflags.com/wp-content/uploads/brazil-flag-png-large.png',
  },
  {
    id: 4,
    country: 'Alaska',
    city: 'Brasília',
    currency: 'BRL',
    flag: 'https://www.countryflags.com/wp-content/uploads/brazil-flag-png-large.png',
  },
];

const typeDefs = `
  type Country {
    ru: String
    en: String
  }

 type Review {
    id: Int
    date: String 
    rating: String 
    text: String
    authorImage: String
    authorName: String
  }
  
  type Room {
    id: Int
    rating: String 
    reviews: Int
    title: String
    description: String
    images: [String]
    decorImages: [String]
    price: Int
    available: Boolean
  }

  type Tour {
    id: Int
    country: String
    city: String
    currency: String
    flag: String
  }
  
  type TourResult {
    tours: [Tour]
    totalItems: Int
  }

  type Query {
    countries: [Country]
    reviews: [Review]
    room(id: Int): Room
    rooms(offset: Int, limit: Int): [Room]
    tours(country: String, offset: Int, limit: Int): TourResult
    toursCountries(country: String): [Tour]
  }

`;


const resolvers = {
  Query: {
    countries: () => countries,
    reviews: () => reviews,
    rooms: ( _, args: { offset : number, limit: number}) => {
      const {offset, limit } = args;
      console.log(rooms.slice(offset, offset + limit).map(({id}) => id))

      return rooms.slice(offset, offset + limit);
    },
    room: ( _, args: {id: number}) => {
      return rooms.find((room) => room.id === args.id);
    },
    tours: ( _, args: { country: string, offset : number, limit: number}) => {
      const { country, offset, limit } = args;
     
      const filterdTours = tours.filter((tour) => tour.country.toLowerCase().includes(country.toLowerCase()));
      
      return {tours: filterdTours.slice(offset, offset + limit), totalItems: filterdTours.length};
    },
    toursCountries: ( _, args: {country: string}) => {
      return tours.reduce((acc, val) => {
        if (!acc.some(tour => tour.country === val.country) && val.country.toLowerCase().includes(args.country.toLowerCase())) {
          acc.push(val);
        }
        return acc;
      }, []);
    }
  },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  const { url } = await startStandaloneServer(server, {
    listen:{ port: +process.env.PORT || 4000 },
   });
  
  console.log(`🚀  Server ready at: ${url}`);
  