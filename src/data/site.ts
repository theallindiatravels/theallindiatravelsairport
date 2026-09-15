export const site = {
  name: 'The All India Travels Airport',
  tagline: 'Chennai Airport Taxi & Outstation Cabs',
  phone: '+91 93635 39853',
  phoneRaw: '919363539853',
  email: 'theallindiatravels@gmail.com',
  address: 'Near Chennai International Airport (MAA), Meenambakkam, Chennai, Tamil Nadu 600027',
  hours: '24/7 — Every Day',
  founded: '2016',
  passengers: '10,000+',
  fleet: '50+',
  rating: '4.9',
};

export const waLink = (text: string) =>
  `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(
    text.includes(site.name)
      ? text
      : `Hi, ${site.name}. ${text.replace(/^Hi,\s*/i, '')}`,
  )}`;

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Routes & Fares', path: '/routes' },
  { label: 'Tourist Places', path: '/tourist-places' },
  { label: 'Fleet', path: '/fleet' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Reviews', path: '/reviews' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

export const services = [
  {
    icon: 'Plane',
    title: 'Airport Taxi Transfers',
    desc: 'Hassle-free 24/7 airport pickup and drop at Chennai International Airport (MAA). Live flight tracking, zero waiting charges for delayed arrivals, and meet-and-greet service.',
    image: 'https://images.pexels.com/photos/34405177/pexels-photo-34405177.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: ['Live flight tracking', 'Zero waiting charges', 'Meet & greet', 'Nameboard pickup'],
  },
  {
    icon: 'ArrowLeftRight',
    title: 'One Way Outstation Taxi',
    desc: 'Save up to 40% on intercity travel across Tamil Nadu. Pay only for the one-side distance with no return fare penalties. Chennai to Pondicherry, Tirupati, Vellore & more.',
    image: 'https://images.pexels.com/photos/30317431/pexels-photo-30317431.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: ['Pay one side only', 'No return charge', 'Door-to-door drop', 'Private cab'],
  },
  {
    icon: 'Car',
    title: 'Round-Trip Outstation Cabs',
    desc: 'Comfortable outstation rides for family vacations, business visits, and weekend getaways. Well-maintained Sedans, Ertiga, and Innova Crysta with seasoned highway drivers.',
    image: 'https://images.pexels.com/photos/33117406/pexels-photo-33117406.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: ['Dedicated car & driver', 'Unlimited stops', 'Multi-day flexibility', 'Highway-certified drivers'],
  },
  {
    icon: 'Church',
    title: 'South Indian Temple Tours',
    desc: 'Tailor-made pilgrimage tour packages covering Tirupati Balaji, Kanchipuram, Madurai Meenakshi, Rameswaram, Thanjavur Big Temple, and Kumbakonam Navagraha circuits.',
    image: 'https://images.pexels.com/photos/37678479/pexels-photo-37678479.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: ['Tirupati Balaji', 'Madurai Meenakshi', 'Rameswaram', 'Navagraha circuit'],
  },
  {
    icon: 'Mountain',
    title: 'Holiday & Hill Station Trips',
    desc: 'Scenic holiday road trips to Ooty, Kodaikanal, Yercaud, Mahabalipuram, and Pondicherry beach promenades. Custom multi-day itineraries with flexible halt points.',
    image: 'https://images.pexels.com/photos/5330349/pexels-photo-5330349.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: ['Ooty & Kodaikanal', 'Pondicherry beaches', 'Mahabalipuram', 'Custom itineraries'],
  },
  {
    icon: 'Briefcase',
    title: 'Corporate & Executive Travel',
    desc: 'Dedicated executive fleets for business travelers, IT corridors (OMR, Guindy, DLF Cybercity, Mahindra World City), with centralized GST invoicing and monthly contracts.',
    image: 'https://images.pexels.com/photos/4964955/pexels-photo-4964955.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: ['GST invoicing', 'Monthly contracts', 'IT corridor routes', 'Executive sedans'],
  },
];

export const fleet = [
  {
    name: 'Prime Sedan',
    models: 'Dzire, Etios, Amaze',
    seats: '4 Passengers',
    bags: '2 Bags',
    image: 'https://images.pexels.com/photos/241190/pexels-photo-241190.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    bestFor: 'Solo travellers, couples, airport drops, small family highway journeys',
    fareFrom: '₹499',
  },
  {
    name: 'SUV / Innova Crysta',
    models: 'Toyota Innova, Crysta, Ertiga',
    seats: '6-7 Passengers',
    bags: '4 Bags',
    image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    bestFor: 'Highway stability, recliner captain seats, ample luggage for holiday families',
    fareFrom: '₹899',
  },
  {
    name: 'Tempo Traveller & Urbania',
    models: 'Force Urbania, Deluxe Traveller',
    seats: '12-26 Passengers',
    bags: 'Unlimited',
    image: 'https://images.pexels.com/photos/33693159/pexels-photo-33693159.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    bestFor: 'Pilgrimage batches, wedding groups, corporate outings, large family travel',
    fareFrom: 'On Request',
  },
];

export const fareTable = [
  { service: 'Airport Pickup / Drop', vehicle: 'Sedan (Dzire / Etios)', seats: '4 Pax', fare: '₹499 onwards', includes: 'Flight tracking, 45-min free wait, AC, baggage aid' },
  { service: 'Airport Pickup / Drop', vehicle: 'SUV (Innova / Ertiga)', seats: '6-7 Pax', fare: '₹899 onwards', includes: 'Extra luggage boot, dual AC, nameboard greeting' },
  { service: 'One Way Outstation', vehicle: 'Sedan (Dzire / Etios)', seats: '4 Pax', fare: '₹15 / km', includes: 'Pay strictly one side, door-to-door drop, private cab' },
  { service: 'One Way Outstation', vehicle: 'SUV (Innova Crysta)', seats: '6-7 Pax', fare: '₹22 / km', includes: 'No return charge, captain reclining seats, spacious' },
  { service: 'Round-Trip Outstation', vehicle: 'Prime Sedan', seats: '4 Pax', fare: '₹14 / km', includes: 'Dedicated car & driver for entire multi-day trip' },
  { service: 'Round-Trip Outstation', vehicle: 'Toyota Innova SUV', seats: '6-7 Pax', fare: '₹20 / km', includes: 'Ghat road certified driver, comfortable for hills' },
  { service: 'Local City Rental (8h/80km)', vehicle: 'Sedan / SUV', seats: '4-7 Pax', fare: '₹2,100 / ₹3,200', includes: 'City shopping, meetings, multiple stops across Chennai' },
  { service: 'Group / Pilgrimage', vehicle: 'Tempo Traveller (12-26s)', seats: '12-26 Pax', fare: 'On Request', includes: 'Pushback seats, LED TV, full family travel together' },
];

export const popularRoutes = [
  { from: 'Chennai Airport', to: 'Pondicherry', distance: '150 km', time: '3 hrs', fare: '₹3,499', image: 'https://images.pexels.com/photos/37266538/pexels-photo-37266538.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { from: 'Chennai', to: 'Tirupati', distance: '135 km', time: '3.5 hrs', fare: '₹2,999', image: 'https://images.pexels.com/photos/38312860/pexels-photo-38312860.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { from: 'Chennai', to: 'Madurai', distance: '460 km', time: '7 hrs', fare: '₹6,499', image: 'https://images.pexels.com/photos/37809042/pexels-photo-37809042.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { from: 'Chennai', to: 'Mahabalipuram', distance: '60 km', time: '1.5 hrs', fare: '₹1,499', image: 'https://images.pexels.com/photos/7365981/pexels-photo-7365981.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { from: 'Chennai', to: 'Bangalore', distance: '350 km', time: '6 hrs', fare: '₹5,499', image: 'https://images.pexels.com/photos/39409614/pexels-photo-39409614.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { from: 'Chennai', to: 'Ooty', distance: '560 km', time: '9 hrs', fare: '₹7,999', image: 'https://images.pexels.com/photos/5213208/pexels-photo-5213208.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
];

export const airportCityRoutes = [
  { to: 'Tambaram / Chromepet', area: 'GST Road, Bus Stand & Railway Junction', distance: '10 km', time: '20-25 mins', fare: '₹399' },
  { to: 'Velachery', area: 'Phoenix Marketcity, Vijayanagar, Bypass', distance: '12 km', time: '25-35 mins', fare: '₹449' },
  { to: 'T. Nagar', area: 'Pondy Bazaar, Panagal Park, Usman Road', distance: '15 km', time: '30-45 mins', fare: '₹499' },
  { to: 'Adyar / Besant Nagar', area: 'LB Road, Gandhi Nagar, Elliot\'s Beach', distance: '18 km', time: '35-45 mins', fare: '₹549' },
  { to: 'Anna Nagar', area: 'Anna Arch, Round Avenue, Shanthi Colony', distance: '20 km', time: '40-50 mins', fare: '₹599' },
  { to: 'OMR / Sholinganallur', area: 'IT Corridor, Tidel Park, SIPCOT', distance: '25 km', time: '45-60 mins', fare: '₹699' },
  { to: 'Egmore / Central', area: 'Railway Stations, Parry\'s Corner, George Town', distance: '16 km', time: '30-40 mins', fare: '₹499' },
  { to: 'Porur / Ramapuram', area: 'DLF, L&T, Ramachandra Hospital', distance: '14 km', time: '30-40 mins', fare: '₹499' },
];

export const touristPlaces = [
  {
    name: 'Pondicherry',
    tagline: 'French Quarter & Beach Promenade',
    desc: 'Stroll the French colonial streets of White Town, relax on Promenade Beach, and enjoy the cafés of this former French colony.',
    image: 'https://images.pexels.com/photos/32661287/pexels-photo-32661287.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    distance: '150 km from Chennai',
    duration: '2-3 days',
    highlights: ['Promenade Beach', 'Auroville', 'French Quarter', 'Sri Aurobindo Ashram'],
  },
  {
    name: 'Mahabalipuram',
    tagline: 'UNESCO Shore Temple & Stone Carvings',
    desc: 'Explore ancient rock-cut temples, the famous Shore Temple, and the Pancha Rathas along the Coromandel Coast.',
    image: 'https://images.pexels.com/photos/7365981/pexels-photo-7365981.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    distance: '60 km from Chennai',
    duration: '1 day',
    highlights: ['Shore Temple', 'Pancha Rathas', 'Arjuna\'s Penance', 'Krishna\'s Butter Ball'],
  },
  {
    name: 'Tirupati',
    tagline: 'Sri Venkateswara Balaji Temple',
    desc: 'The most visited pilgrimage center in the world. Tirumala hills, Balaji darshan, and Padmavathi temple at Tiruchanoor.',
    image: 'https://images.pexels.com/photos/38312860/pexels-photo-38312860.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    distance: '135 km from Chennai',
    duration: '1-2 days',
    highlights: ['Balaji Darshan', 'Tirumala Hills', 'Padmavathi Temple', 'Silathoranam'],
  },
  {
    name: 'Madurai',
    tagline: 'Meenakshi Amman Temple',
    desc: 'The ancient temple city with the magnificent Meenakshi Amman Temple, Thirumalai Nayakkar Palace, and vibrant street markets.',
    image: 'https://images.pexels.com/photos/37809042/pexels-photo-37809042.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    distance: '460 km from Chennai',
    duration: '2-3 days',
    highlights: ['Meenakshi Temple', 'Thirumalai Nayakkar Palace', 'Alagar Kovil', 'Gandhi Museum'],
  },
  {
    name: 'Ooty',
    tagline: 'Queen of the Blue Mountains',
    desc: 'Rolling tea gardens, the Nilgiri Mountain Railway, botanical gardens, and cool weather in this classic hill station.',
    image: 'https://images.pexels.com/photos/5330349/pexels-photo-5330349.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    distance: '560 km from Chennai',
    duration: '3-4 days',
    highlights: ['Tea Gardens', 'Botanical Garden', 'Doddabetta Peak', 'Ooty Lake'],
  },
  {
    name: 'Kumbakonam',
    tagline: 'Navagraha Temple Circuit',
    desc: 'The temple town for the Navagraha (nine planets) pilgrimage, plus Airavatesvara Temple and Darasuram UNESCO site.',
    image: 'https://images.pexels.com/photos/38073986/pexels-photo-38073986.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    distance: '280 km from Chennai',
    duration: '2-3 days',
    highlights: ['Navagraha Temples', 'Airavatesvara Temple', 'Mahamaham Tank', 'Darasuram'],
  },
];

export const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'IT Professional, OMR',
    rating: 5,
    text: 'Booked an airport pickup at 2 AM after a delayed international flight. The driver was already waiting with a name board, no surge charges. Spotless sedan, smooth ride to Sholinganallur. Best taxi experience in Chennai.',
  },
  {
    name: 'Priya Venkatesh',
    role: 'NRI Traveller, Singapore',
    rating: 5,
    text: 'Used The All India Travels Airport for a 5-day temple tour — Tirupati, Kanchipuram, and Madurai. The driver knew all the temple timings and VIP darshan queues. Felt completely safe as a solo female traveller.',
  },
  {
    name: 'Mohammed Faisal',
    role: 'Business Owner, Dubai',
    rating: 5,
    text: 'Monthly corporate contract for our Chennai office. Always on time, clean cars, and the GST invoices come on time. The Innova Crysta for airport pickups is top class.',
  },
  {
    name: 'Lakshmi Narayanan',
    role: 'Family Holiday, Bangalore',
    rating: 5,
    text: 'One-way taxi from Chennai to Pondicherry — paid only one side fare, saved almost 40% compared to other cab services. Driver was polite, AC was ice cold, and the car was brand new.',
  },
];

export const faqs = [
  {
    q: 'Do you charge surge pricing for late-night or early-morning airport pickups?',
    a: 'Never. We have a strict no-surge policy. The fare you are quoted is the fare you pay — even at 2 AM, during monsoon rains, or on festival days. Our airport sedan pickup starts at just ₹499.',
  },
  {
    q: 'How does the one-way outstation taxi work? Do I really pay only one side?',
    a: 'Yes. With our one-way drop service, you pay only for the distance from your pickup to your drop point. There is no return fare penalty. For example, Chennai to Pondicherry in a sedan costs ₹11/km for one side only.',
  },
  {
    q: 'Will the driver track my flight for airport pickups?',
    a: 'Absolutely. Every airport booking includes live flight tracking. If your flight is delayed, the driver adjusts automatically and waits at no extra charge for the first 45 minutes after landing.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept UPI (GPay, PhonePe, Paytm), cash, and all major credit/debit cards. For corporate clients, we offer monthly billing with centralized GST invoicing.',
  },
  {
    q: 'Can I book a Tempo Traveller for a large group or pilgrimage?',
    a: 'Yes. We have 12, 14, 17, 20, and 26-seater Force Urbania and Tempo Travellers with pushback seats, LED TV, and music system — perfect for pilgrimage batches, wedding groups, and corporate outings.',
  },
  {
    q: 'How do I book a cab?',
    a: 'Simply call or WhatsApp us at +91 93635 39853 with your pickup, drop, date, and time. You will receive an instant fixed quote with all tolls and taxes included, followed by driver and vehicle details.',
  },
];

export const stats = [
  { value: '10,000+', label: 'Happy Passengers' },
  { value: '50+', label: 'Modern Vehicles' },
  { value: '4.9★', label: 'Average Rating' },
  { value: '24/7', label: 'Availability' },
];

export const bookingSteps = [
  { step: '01', title: 'Choose Service & Route', desc: 'Select your preferred service (Airport, One-Way, Outstation, or Tour) and tell us your pickup location, drop point, date, and timing.' },
  { step: '02', title: 'Instant Fixed Quote', desc: 'Receive an upfront, transparent quote with all tolls, driver allowance, and taxes explicitly clarified on WhatsApp or call.' },
  { step: '03', title: 'Driver & Cab Assigned', desc: 'Get instant confirmation with driver contact number, vehicle model, registration number, and live tracking details sent to you.' },
  { step: '04', title: 'Safe Trip & Easy Pay', desc: 'Enjoy a punctual, air-conditioned journey with polite chauffeurs. Pay comfortably via UPI, Cash, or Card upon completion.' },
];

export const extendedRoutes = [
  { from: 'Chennai', to: 'Vellore', distance: '140 km', time: '3 hrs', fare: '₹2,799', image: 'https://images.pexels.com/photos/10596079/pexels-photo-10596079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { from: 'Chennai', to: 'Kodaikanal', distance: '530 km', time: '9 hrs', fare: '₹7,499', image: 'https://images.pexels.com/photos/9411154/pexels-photo-9411154.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { from: 'Chennai', to: 'Rameswaram', distance: '570 km', time: '10 hrs', fare: '₹8,499', image: 'https://images.pexels.com/photos/32654427/pexels-photo-32654427.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { from: 'Chennai', to: 'Thanjavur', distance: '350 km', time: '6 hrs', fare: '₹5,499', image: 'https://images.pexels.com/photos/38623903/pexels-photo-38623903.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { from: 'Chennai', to: 'Kumbakonam', distance: '280 km', time: '5 hrs', fare: '₹4,499', image: 'https://images.pexels.com/photos/39498479/pexels-photo-39498479.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { from: 'Chennai', to: 'Kanchipuram', distance: '75 km', time: '2 hrs', fare: '₹1,799', image: 'https://images.pexels.com/photos/38312860/pexels-photo-38312860.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
];

export const allRoutes = [...popularRoutes, ...extendedRoutes];

export const fleetDetails = [
  {
    name: 'Prime Sedan',
    models: 'Maruti Dzire, Toyota Etios, Honda Amaze',
    seats: '4 Passengers',
    bags: '2 Large Bags',
    image: 'https://images.pexels.com/photos/241190/pexels-photo-241190.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    bestFor: 'Solo travellers, couples, airport drops, and small family highway journeys',
    fareFrom: '₹499',
    features: ['Chilled AC', '4+1 seating', 'Highway safety kit', 'Daily sanitized', 'Music system', 'Phone charging'],
    specs: { engine: '1.2L Petrol / CNG', mileage: '20+ km/l', ac: 'Front & Rear', safety: 'ABS + Dual Airbags' },
  },
  {
    name: 'SUV / Innova Crysta',
    models: 'Toyota Innova, Innova Crysta, Maruti Ertiga',
    seats: '6-7 Passengers',
    bags: '4 Large Bags',
    image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    bestFor: 'Highway stability, recliner captain seats, and ample luggage space for holiday families',
    fareFrom: '₹899',
    features: ['Captain recliner seats', 'Dual AC zones', 'Highway stability', 'Large luggage boot', 'Pushback seats', 'USB charging'],
    specs: { engine: '2.4L Diesel / 2.7L Petrol', mileage: '14+ km/l', ac: 'Dual Zone', safety: 'ABS + Airbags + ESC' },
  },
  {
    name: 'Tempo Traveller & Urbania',
    models: 'Force Urbania, Deluxe Traveller 12-26 Seater',
    seats: '12-26 Passengers',
    bags: 'Unlimited',
    image: 'https://images.pexels.com/photos/33693159/pexels-photo-33693159.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    bestFor: 'Pilgrimage batches, wedding groups, corporate outings, and large family travel',
    fareFrom: 'On Request',
    features: ['Pushback seats', 'LED TV', 'Music system', 'Roof AC', 'Large luggage', 'Microphone'],
    specs: { engine: '3.0L Diesel', mileage: '10+ km/l', ac: 'Roof mounted', safety: 'ABS + Seatbelts all rows' },
  },
];

export const galleryImages = [
  { src: 'https://images.pexels.com/photos/34405177/pexels-photo-34405177.jpeg?auto=compress&cs=tinysrgb&w=940&h=600', alt: 'Airport taxi pickup at Chennai International Airport', category: 'Airport' },
  { src: 'https://images.pexels.com/photos/37266538/pexels-photo-37266538.jpeg?auto=compress&cs=tinysrgb&w=940&h=600', alt: 'Pondicherry beach aerial view', category: 'Destinations' },
  { src: 'https://images.pexels.com/photos/37678479/pexels-photo-37678479.jpeg?auto=compress&cs=tinysrgb&w=940&h=600', alt: 'Tamil Nadu temple corridor with Dravidian architecture', category: 'Temples' },
  { src: 'https://images.pexels.com/photos/5330349/pexels-photo-5330349.jpeg?auto=compress&cs=tinysrgb&w=940&h=600', alt: 'Ooty tea plantation rolling hills', category: 'Hill Stations' },
  { src: 'https://images.pexels.com/photos/7365981/pexels-photo-7365981.jpeg?auto=compress&cs=tinysrgb&w=940&h=600', alt: 'Mahabalipuram Shore Temple UNESCO site', category: 'Temples' },
  { src: 'https://images.pexels.com/photos/32654427/pexels-photo-32654427.jpeg?auto=compress&cs=tinysrgb&w=940&h=600', alt: 'Rameswaram temple gopuram', category: 'Temples' },
  { src: 'https://images.pexels.com/photos/9411154/pexels-photo-9411154.jpeg?auto=compress&cs=tinysrgb&w=940&h=600', alt: 'Kodaikanal lake and hills aerial view', category: 'Hill Stations' },
  { src: 'https://images.pexels.com/photos/8572308/pexels-photo-8572308.jpeg?auto=compress&cs=tinysrgb&w=940&h=600', alt: 'Chennai Marina Beach and city skyline', category: 'City' },
  { src: 'https://images.pexels.com/photos/38623903/pexels-photo-38623903.jpeg?auto=compress&cs=tinysrgb&w=940&h=600', alt: 'Brihadeeswara Temple Thanjavur UNESCO', category: 'Temples' },
  { src: 'https://images.pexels.com/photos/32661287/pexels-photo-32661287.jpeg?auto=compress&cs=tinysrgb&w=940&h=600', alt: 'Pondicherry Promenade Beach', category: 'Destinations' },
  { src: 'https://images.pexels.com/photos/30317431/pexels-photo-30317431.jpeg?auto=compress&cs=tinysrgb&w=940&h=600', alt: 'Scenic highway winding through hills', category: 'Highway' },
  { src: 'https://images.pexels.com/photos/39498479/pexels-photo-39498479.jpeg?auto=compress&cs=tinysrgb&w=940&h=600', alt: 'Kumbakonam temple tower Tamil Nadu', category: 'Temples' },
  { src: 'https://images.pexels.com/photos/34260202/pexels-photo-34260202.jpeg?auto=compress&cs=tinysrgb&w=940&h=600', alt: 'Chennai fishing boats at sunrise', category: 'City' },
  { src: 'https://images.pexels.com/photos/37626302/pexels-photo-37626302.jpeg?auto=compress&cs=tinysrgb&w=940&h=600', alt: 'Tamil Nadu temple architecture with sculptures', category: 'Temples' },
  { src: 'https://images.pexels.com/photos/37809042/pexels-photo-37809042.jpeg?auto=compress&cs=tinysrgb&w=940&h=600', alt: 'Thanjavur temple Dravidian architecture', category: 'Temples' },
  { src: 'https://images.pexels.com/photos/5213208/pexels-photo-5213208.jpeg?auto=compress&cs=tinysrgb&w=940&h=600', alt: 'Misty tea plantation hillside', category: 'Hill Stations' },
];

export const extendedTestimonials = [
  ...testimonials,
  {
    name: 'Anand Subramanian',
    role: 'NRI Traveller, USA',
    rating: 5,
    text: 'Booked a round-trip from Chennai to Rameswaram and Kumbakonam for a Navagraha temple tour. The driver was incredibly knowledgeable about every temple\'s darshan timing. Spotless Innova, smooth ride, and zero hidden charges. Highly recommend for NRI families visiting Tamil Nadu.',
  },
  {
    name: 'Saritha Reddy',
    role: 'Family Trip, Hyderabad',
    rating: 5,
    text: 'Chennai to Ooty with two kids and elderly parents. The Innova Crysta was spacious and comfortable for the 9-hour drive. Driver knew all the good restaurants and rest stops along the way. Will definitely book again for our next South India trip.',
  },
  {
    name: 'James Wilson',
    role: 'Tourist, UK',
    rating: 5,
    text: 'Used this service for a 5-day tour covering Mahabalipuram, Pondicherry, and Kanchipuram. English-speaking driver, very professional, and always on time. The fare was exactly what was quoted — no surprises. Best taxi service I used in India.',
  },
  {
    name: 'Kavitha Krishnan',
    role: 'Doctor, Apollo Hospitals',
    rating: 5,
    text: 'I use The All India Travels Airport for my daily airport commutes between home and Chennai airport. Always on time, clean cars, and the drivers are courteous. The monthly corporate package saves me a lot compared to app-based cabs.',
  },
  {
    name: 'Vigneshwaran P',
    role: 'Pilgrimage Group, Coimbatore',
    rating: 5,
    text: 'Booked a 17-seater Tempo Traveller for a Tirupati pilgrimage with 15 family members. The vehicle was clean, AC was excellent, and the driver knew the VIP darshan process well. Everyone was comfortable throughout the trip.',
  },
  {
    name: 'Deepa Srinivasan',
    role: 'Wedding Transport, Chennai',
    rating: 5,
    text: 'Arranged 3 Innovas for wedding guest transport from Chennai to Pondicherry. All vehicles arrived on time, well-decorated, and the drivers were very professional with the guests. Made our wedding logistics completely stress-free.',
  },
];

export const extendedFaqs = [
  ...faqs,
  {
    q: 'Are your drivers licensed and verified?',
    a: 'Yes, every chauffeur holds a valid commercial driving license, has undergone background verification, and receives regular training in safe driving practices and customer service. All drivers carry ID cards and are tracked via live GPS during every trip.',
  },
  {
    q: 'What happens if my flight is delayed?',
    a: 'We track all incoming flights in real time. If your flight is delayed, the driver adjusts the pickup time automatically. You get the first 45 minutes of waiting time completely free after your flight lands. No extra charge for flight delays.',
  },
  {
    q: 'Can I modify or cancel my booking?',
    a: 'Yes, you can modify or cancel any booking by calling or WhatsApping us. We do not charge any cancellation fee if you cancel at least 2 hours before the pickup time. For last-minute cancellations, a nominal charge may apply.',
  },
  {
    q: 'Do you provide GST invoices for corporate clients?',
    a: 'Absolutely. We provide proper GST invoices for all corporate bookings and monthly contracts. Our GST registration number is included on every invoice. We support centralized billing for companies with multiple pickup points across Chennai.',
  },
  {
    q: 'Are your vehicles sanitized and safe?',
    a: 'Every vehicle undergoes daily interior sanitization, 25-point mechanical safety checks before each trip, and has high-speed chilled air-conditioning with clean cabin air filters. We also provide hand sanitizer in every car for passenger use.',
  },
  {
    q: 'Do you operate during festivals and public holidays?',
    a: 'Yes, we operate 24/7 including all festivals and public holidays. And importantly, we do not charge surge pricing even during peak festival seasons like Diwali, Pongal, or Christmas. The fare remains the same every day of the year.',
  },
  {
    q: 'Can I book a cab for multiple days?',
    a: 'Yes, our round-trip outstation service keeps the car and driver with you for the entire duration of your trip, whether it is 2 days or 10 days. You get unlimited stops, flexible timing, and a dedicated driver who stays with you throughout.',
  },
  {
    q: 'Do you provide child safety seats?',
    a: 'We can arrange child safety seats on request at no extra charge. Please mention this requirement when booking so we can ensure the appropriate seat is fitted before your pickup.',
  },
  {
    q: 'What areas do you cover for outstation trips?',
    a: 'We cover all of Tamil Nadu, Pondicherry, Andhra Pradesh (Tirupati, Nellore, Vijayawada), Karnataka (Bangalore, Mysore, Coorg), and Kerala. If your destination is not listed on our routes page, just WhatsApp us and we will provide a custom quote.',
  },
  {
    q: 'Is there a night charge for late-night pickups?',
    a: 'No. We do not charge any night surcharge or late-night fee. Whether you need a cab at 2 AM or 5 AM, the fare remains the same as during daytime. This is part of our no-surge, no-hidden-charges promise.',
  },
];

export const seoPages = {
  '/': {
    title: 'Chennai Airport Taxi | Best Cab Service Chennai | One Way Taxi Tamil Nadu — The All India Travels Airport',
    description: 'Book Chennai Airport Taxi & Outstation Cabs. 24/7 airport transfers from Chennai International Airport (MAA), one-way outstation taxi, temple tours & holiday trips across Tamil Nadu, Pondicherry & South India. No surge pricing.',
    keywords: ['chennai airport taxi', 'chennai cab service', 'one way taxi chennai', 'outstation cab tamil nadu', 'airport pickup chennai', 'chennai to pondicherry taxi', 'chennai to tirupati cab'],
  },
  '/about': {
    title: 'About The All India Travels Airport | Chennai Airport Taxi Service Since 2016',
    description: 'Family-owned Chennai airport taxi service since 2016. 50+ vehicles, 10,000+ happy passengers, 4.9-star rating. No surge pricing, live flight tracking, and professional chauffeurs across Tamil Nadu & South India.',
    keywords: ['about the all india travels', 'chennai taxi service', 'airport taxi chennai', 'family taxi business chennai'],
  },
  '/services': {
    title: 'Taxi Services in Chennai | Airport Transfer, One Way, Outstation Cab — The All India Travels Airport',
    description: 'Comprehensive taxi services in Chennai: airport transfers, one-way outstation cabs, round-trip cabs, temple tours, holiday trips & corporate rentals. Transparent fares, professional drivers, 24/7 availability.',
    keywords: ['chennai taxi services', 'airport transfer chennai', 'one way cab chennai', 'outstation cab service', 'temple tour tamil nadu', 'corporate car rental chennai'],
  },
  '/routes': {
    title: 'Chennai Taxi Fares & Routes | Airport Drop Rates | One Way Cab Prices — The All India Travels Airport',
    description: 'Transparent taxi fares from Chennai Airport to Tambaram, T Nagar, Velachery, OMR, Pondicherry, Tirupati, Madurai, Bangalore, Ooty & more. No surge pricing, no hidden charges.',
    keywords: ['chennai taxi fare', 'chennai to pondicherry taxi fare', 'chennai airport drop rate', 'one way cab price', 'chennai to tirupati fare', 'chennai to bangalore cab'],
  },
  '/tourist-places': {
    title: 'Tourist Places Near Chennai | South India Tour Packages — The All India Travels Airport',
    description: 'Explore Pondicherry, Mahabalipuram, Tirupati, Madurai, Ooty, Kumbakonam & Rameswaram with custom tour packages from Chennai. Experienced drivers, AC vehicles, flexible itineraries.',
    keywords: ['tourist places near chennai', 'south india tour packages', 'pondicherry tour from chennai', 'tirupati package from chennai', 'ooty trip from chennai', 'temple tour tamil nadu'],
  },
  '/fleet': {
    title: 'Our Fleet | Sedan, SUV Innova, Tempo Traveller — The All India Travels Airport Chennai',
    description: 'View our fleet of sedans (Dzire, Etios), SUVs (Innova Crysta, Ertiga), and Tempo Travellers (12-26 seater). All vehicles sanitized daily, 25-point safety checked, with chilled AC.',
    keywords: ['chennai taxi fleet', 'innova crysta rental chennai', 'tempo traveller chennai', 'sedan taxi chennai', 'suv cab chennai'],
  },
  '/gallery': {
    title: 'Gallery | Chennai Taxi, Tourist Destinations & Temples — The All India Travels Airport',
    description: 'Photo gallery of our taxi services, South Indian tourist destinations, temples, hill stations, and highway journeys across Tamil Nadu, Pondicherry & South India.',
    keywords: ['chennai taxi gallery', 'tamil nadu tourist photos', 'south india temple photos', 'ooty photos', 'pondicherry photos'],
  },
  '/reviews': {
    title: 'Customer Reviews | 10,000+ Happy Passengers — The All India Travels Airport Chennai',
    description: 'Read genuine customer reviews from 10,000+ happy passengers. 4.9-star average rating for airport taxi, outstation cab, temple tour, and corporate travel services in Chennai.',
    keywords: ['chennai taxi reviews', 'the all india travels reviews', 'chennai cab service review', 'airport taxi chennai feedback'],
  },
  '/faq': {
    title: 'FAQ | Chennai Airport Taxi & Outstation Cab Questions Answered — The All India Travels Airport',
    description: 'Answers to all your questions about Chennai airport taxi booking, one-way outstation fares, flight tracking, payment methods, cancellation policy, GST invoices, and more.',
    keywords: ['chennai taxi faq', 'airport taxi questions', 'outstation cab faq', 'one way taxi questions', 'chennai cab booking help'],
  },
  '/contact': {
    title: 'Contact The All India Travels Airport | Book Chennai Taxi 24/7',
    description: 'Contact The All India Travels Airport for Chennai airport taxi, outstation cab, temple tour, or corporate car rental bookings. Call +91 93635 39853 or WhatsApp 24/7. Instant quotes.',
    keywords: ['contact chennai taxi', 'book chennai cab', 'chennai airport taxi contact', 'whatsapp taxi booking chennai'],
  },
};
