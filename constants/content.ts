interface OpenScreenDataProps{
    title : string
    des1 : string
    des2 : string
}

interface BeachDataProps{
    id: number
    link: string
    title: string
    subtitle: string
    added: boolean
    rating: number
    location: string
}

interface HistoryDataProps{
    id: string
    title: string
    subtitle: string
    date: string
    imageUrl: string
    rating: number
}

export const OpenScreenData:OpenScreenDataProps = {
    title : "Beach Bhraman",
    des1 : "Discover safe beaches for your perfect getaway!",
    des2 : "Get real-time updates on weather, waves, and water quality to plan your coastal adventures"
}

const goaBagaBeach = require('@/assets/images/beaches/goa-baga-beach.jpg')
const keralaVarkalaBeach = require('@/assets/images/beaches/kerala-varkala-beach.jpg')
const andamanRadhanagarBeach = require('@/assets/images/beaches/andaman-radhanagar-beach.jpg')
const goaCalanguteBeach = require('@/assets/images/beaches/goa-calangute-beach.jpg')
const odishaPuriBeach = require('@/assets/images/beaches/odisha-puri-beach.jpg')
const karnatakaOmBeach = require('@/assets/images/beaches/karnataka-om-beach.jpg')


export const BeachData:BeachDataProps[] = [
    {
      id: 1,
      link: goaBagaBeach,
      title: "Baga Beach",
      subtitle: "Popular beach in North Goa with vibrant nightlife.",
      added: true,
      rating: 4.5,
      location: "Goa"
    },
    {
      id: 2,
      link: keralaVarkalaBeach,
      title: "Varkala Beach",
      subtitle: "Cliffside beach with stunning sunset views in Kerala.",
      added: false,
      rating: 4.7,
      location: "Kerala"
    },
    {
      id: 3,
      link: andamanRadhanagarBeach,
      title: "Radhanagar Beach",
      subtitle: "White sandy beach on Havelock Island, Andaman.",
      added: true,
      rating: 5,
      location: "Andaman & Nicobar Islands"
    },
    {
      id: 4,
      link: goaCalanguteBeach,
      title: "Calangute Beach",
      subtitle: "The queen of beaches in Goa, perfect for watersports.",
      added: false,
      rating: 4.2,
      location: "Goa"
    },
    {
      id: 5,
      link: odishaPuriBeach,
      title: "Puri Beach",
      subtitle: "Famous beach along the Bay of Bengal, Odisha.",
      added: true,
      rating: 4.3,
      location: "Odisha"
    },
    {
      id: 6,
      link: karnatakaOmBeach,
      title: "Om Beach",
      subtitle: "A naturally shaped Om symbol beach in Gokarna, Karnataka.",
      added: false,
      rating: 4.6,
      location: "Karnataka"
    },
    {
      id: 7,
      link: goaBagaBeach,
      title: "Kovalam Beach",
      subtitle: "Scenic crescent-shaped beach in Kerala.",
      added: true,
      rating: 4.8,
      location: "Kerala"
    },
    {
      id: 8,
      link: keralaVarkalaBeach,
      title: "Anjuna Beach",
      subtitle: "Hippie paradise with flea markets and full moon parties in Goa.",
      added: false,
      rating: 4.4,
      location: "Goa"
    },
    {
      id: 9,
      link: andamanRadhanagarBeach,
      title: "Marina Beach",
      subtitle: "One of the longest urban beaches in Chennai, Tamil Nadu.",
      added: true,
      rating: 4,
      location: "Tamil Nadu"
    },
    {
      id: 10,
      link: goaCalanguteBeach,
      title: "Palolem Beach",
      subtitle: "Quiet, serene beach known for its calm waters in Goa.",
      added: false,
      rating: 4.7,
      location: "Goa"
    },
    {
      id: 11,
      link: odishaPuriBeach,
      title: "Elephant Beach",
      subtitle: "Perfect snorkeling beach in Havelock Island, Andaman.",
      added: true,
      rating: 4.9,
      location: "Andaman & Nicobar Islands"
    },
    {
      id: 12,
      link: keralaVarkalaBeach,
      title: "Alibaug Beach",
      subtitle: "Famous for its black sand and water sports, Maharashtra.",
      added: false,
      rating: 4.1,
      location: "Maharashtra"
    },
    {
      id: 13,
      link: andamanRadhanagarBeach,
      title: "Ramakrishna Beach",
      subtitle: "Popular beach in Visakhapatnam, Andhra Pradesh.",
      added: true,
      rating: 4.2,
      location: "Andhra Pradesh"
    },
    {
      id: 14,
      link:  goaCalanguteBeach,
      title: "Mahabalipuram Beach",
      subtitle: "Historical beach with ancient temples, Tamil Nadu.",
      added: false,
      rating: 4.5,
      location: "Tamil Nadu"
    },
    {
      id: 15,
      link: odishaPuriBeach,
      title: "Colva Beach",
      subtitle: "A tranquil beach with white sand in South Goa.",
      added: true,
      rating: 4.3,
      location: "Goa"
    },
    {
      id: 16,
      link: keralaVarkalaBeach,
      title: "Murudeshwar Beach",
      subtitle: "Known for its iconic Shiva statue and scenic beauty in Karnataka.",
      added: false,
      rating: 4.7,
      location: "Karnataka"
    },
    {
      id: 17,
      link: andamanRadhanagarBeach,
      title: "Digha Beach",
      subtitle: "Popular family beach along the Bay of Bengal, West Bengal.",
      added: true,
      rating: 3.9,
      location: "West Bengal"
    },
    {
      id: 18,
      link: goaCalanguteBeach,
      title: "Vijaynagar Beach",
      subtitle: "Quiet, less crowded beach in Andaman, perfect for relaxation.",
      added: false,
      rating: 4.6,
      location: "Andaman & Nicobar Islands"
    },
    {
      id: 19,
      link:  odishaPuriBeach,
      title: "Agonda Beach",
      subtitle: "Pristine beach ideal for solitude in Goa.",
      added: true,
      rating: 4.8,
      location: "Goa"
    },
    {
      id: 20,
      link: keralaVarkalaBeach,
      title: "Kashid Beach",
      subtitle: "Clean, serene beach located near Alibaug, Maharashtra.",
      added: false,
      rating: 4.5,
      location: "Maharashtra"
    }
  ];

export  const HistoryData: HistoryDataProps[] = [
    {
      id: '1',
      title: "Baga Beach",
      subtitle: "Popular beach in North Goa with vibrant nightlife.",
      imageUrl: goaBagaBeach,
      date: 'June 16, 2023',
      rating: 4.5,
    },
    {
      id: '2',
      title: 'Agonda Beach',
      subtitle: 'Pristine beach ideal for solitude in Goa.',
      imageUrl: odishaPuriBeach,
      date: 'May 20, 2023',
      rating: 4.8,
    },
    {
      id: '3',
      title: 'Kashid Beach',
      subtitle: 'Clean, serene beach located near Alibaug, Maharashtra.',
      imageUrl: keralaVarkalaBeach,
      date: 'May 20, 2024',
      rating: 4.5,
    },
    {
      id: '4',
      title: 'Digha Beach',
      subtitle: 'Popular family beach along the Bay of Bengal, West Bengal.',
      imageUrl: andamanRadhanagarBeach,
      date: 'July 20, 2023',
      rating: 3.9,
    },
   
  ];

export const SearchPlaceholder:string[] = ['Search Beach...', 'Search Sea...', 'Search Lake...', 'Search Under the Sea...']


  