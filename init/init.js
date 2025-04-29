const listings = [
  {
    "title": "Beachfront Villa in Bali",
    "description": "Luxury villa with private beach",
    "image": {
      "url": "https://res.cloudinary.com/drmamt6fh/image/upload/v1745127593/31_lbwajj.jpg",
      "filename": "1.jpg"
    },
    "price": 3500,
    "location": "Bali",
    "country": "Indonesia"
  },
  {
    "title": "Downtown Tokyo Loft",
    "description": "Modern loft in heart of Tokyo",
    "image": {
      "url": "https://res.cloudinary.com/drmamt6fh/image/upload/v1745127589/29_civlcy.jpg",
      "filename": "2.jpg"
    },
    "price": 2800,
    "location": "Tokyo",
    "country": "Japan"
  },
  {
    "title": "Parisian Chic Apartment",
    "description": "Elegant flat near Eiffel Tower",
    "image": {
      "url": "https://res.cloudinary.com/drmamt6fh/image/upload/v1745127589/30_x9kkpr.jpg",
      "filename": "3.jpg"
    },
    "price": 1900,
    "location": "Paris",
    "country": "France"
  },
  {
    "title": "Mountain Cabin Retreat",
    "description": "Cozy cabin with stunning views",
    "image": {
      "url": "https://res.cloudinary.com/drmamt6fh/image/upload/v1745127585/28_c3dd2b.avif",
      "filename": "4.avif"
    },
    "price": 1500,
    "location": "Aspen",
    "country": "United States"
  },
  {
    "title": "Rooftop Penthouse NYC",
    "description": "Luxury penthouse Manhattan views",
    "image": {
      "url": "https://res.cloudinary.com/drmamt6fh/image/upload/v1745127584/25_gw0pxq.avif",
      "filename": "5.avif"
    },
    "price": 5000,
    "location": "New York",
    "country": "United States"
  },
  {
    "title": "Seaside Cottage Cornwall",
    "description": "Charming cottage by the sea",
    "image": {
      "url": "https://res.cloudinary.com/drmamt6fh/image/upload/v1745127585/27_kn4btp.avif",
      "filename": "6.avif"
    },
    "price": 1750,
    "location": "Cornwall",
    "country": "UK"
  },
  {
    "title": "Ski-in Chalet Switzerland",
    "description": "Direct ski access luxury chalet",
    "image": {
      "url": "https://res.cloudinary.com/drmamt6fh/image/upload/v1745127584/26_eneiyx.avif",
      "filename": "7.avif"
    },
    "price": 4200,
    "location": "Zermatt",
    "country": "Switzerland"
  },
  {
    "title": "Desert Oasis Marrakech",
    "description": "Private riad with pool",
    "image": {
      "url": "https://res.cloudinary.com/drmamt6fh/image/upload/v1745127581/24_mcynuj.avif",
      "filename": "8.avif"
    },
    "price": 2200,
    "location": "Marrakech",
    "country": "Morocco"
  },
  {
    "title": "Harborview Sydney Apartment",
    "description": "Stunning Opera House views",
    "image": {
      "url": "https://res.cloudinary.com/drmamt6fh/image/upload/v1745127581/22_ewebxn.avif",
      "filename": "9.avif"
    },
    "price": 3100,
    "location": "Sydney",
    "country": "Australia"
  },
  {
    "title": "Vineyard Estate Tuscany",
    "description": "Historic villa among vineyards",
    "image": {
      "url": "https://res.cloudinary.com/drmamt6fh/image/upload/v1745127581/23_lwgg3v.avif",
      "filename": "10.avif"
    },
    "price": 3800,
    "location": "Tuscany",
    "country": "Italy"
  },
  {
    "title": "Boutique Hotel Room Barcelona",
    "description": "Designer room in Gothic Quarter",
    "image": {
      "url": "https://res.cloudinary.com/drmamt6fh/image/upload/v1745127581/21_zycmha.avif",
      "filename": "11.avif"
    },
    "price": 2300,
    "location": "Barcelona",
    "country": "Spain"
  },
  {
    "title": "Lakefront Cottage Canada",
    "description": "Quaint cottage on pristine lake",
    "image": {
      "url": "https://res.cloudinary.com/drmamt6fh/image/upload/v1745127580/20_sxuif1.avif",
      "filename": "12.avif"
    },
    "price": 1800,
    "location": "Ontario",
    "country": "Canada"
  },
  {
    "title": "Luxury Treehouse Costa Rica",
    "description": "Jungle retreat with ocean view",
    "image": {
      "url": "https://res.cloudinary.com/drmamt6fh/image/upload/v1745127579/19_qomkqq.avif",
      "filename": "13.avif"
    },
    "price": 2700,
    "location": "Manuel Antonio",
    "country": "Costa Rica"
  },
  {
    "title": "Historic Castle Stay Ireland",
    "description": "Authentic castle experience",
    "image": {
      "url": "https://res.cloudinary.com/drmamt6fh/image/upload/v1745127578/17_opz1aw.avif",
      "filename": "14.avif"
    },
    "price": 4500,
    "location": "County Kerry",
    "country": "Ireland"
  },
  {
    "title": "Minimalist Oslo Apartment",
    "description": "Scandinavian design downtown",
    "image": {
      "url": "https://res.cloudinary.com/drmamt6fh/image/upload/v1745127578/18_wkch4t.avif",
      "filename": "15.avif"
    },
    "price": 2100,
    "location": "Oslo",
    "country": "Norway"
  },
  {
    "title": "Beach Bungalow Thailand",
    "description": "Steps from white sand beach",
    "image": {
      "url": "https://res.cloudinary.com/drmamt6fh/image/upload/v1745127577/16_viekg8.avif",
      "filename": "16.avif"
    },
    "price": 1600,
    "location": "Phuket",
    "country": "Thailand"
  },
  {
    "title": "Artist's Loft Berlin",
    "description": "Creative space in Kreuzberg",
    "image": {
      "url": "https://res.cloudinary.com/drmamt6fh/image/upload/v1745127576/15_dhzdcm.avif",
      "filename": "17.avif"
    },
    "price": 1950,
    "location": "Berlin",
    "country": "Germany"
  },
  {
    "title": "Cliffside Villa Santorini",
    "description": "Iconic white villa with pool",
    "image": {
      "url": "https://res.cloudinary.com/drmamt6fh/image/upload/v1745127575/14_oa2jqr.avif",
      "filename": "18.avif"
    },
    "price": 4900,
    "location": "Santorini",
    "country": "Greece"
  },
  {
    "title": "Safari Tent South Africa",
    "description": "Luxury glamping Kruger Park",
    "image": {
      "url": "https://res.cloudinary.com/drmamt6fh/image/upload/v1745127574/13_vmz5se.avif",
      "filename": "19.avif"
    },
    "price": 3200,
    "location": "Kruger Park",
    "country": "South Africa"
  },
  {
    "title": "Alpine Lodge New Zealand",
    "description": "Mountain views ski access",
    "image": {
      "url": "https://res.cloudinary.com/drmamt6fh/image/upload/v1745127574/12_quknvg.avif",
      "filename": "20.avif"
    },
    "price": 2900,
    "location": "Queenstown",
    "country": "New Zealand"
  },
  {
    "title": "Historic Canal House Amsterdam",
    "description": "17th century character",
    "image": {
      "url": "https://res.cloudinary.com/drmamt6fh/image/upload/v1745127572/11_mmiz2j.avif",
      "filename": "21.avif"
    },
    "price": 2500,
    "location": "Amsterdam",
    "country": "Netherlands"
  },
  {
    "title": "Modern Dubai Penthouse",
    "description": "Burj Khalifa view luxury",
    "image": {
      "url": "https://res.cloudinary.com/drmamt6fh/image/upload/v1745127571/10_gchmkf.avif",
      "filename": "22.avif"
    },
    "price": 5000,
    "location": "Dubai",
    "country": "UAE"
  },
  {
    "title": "Colonial Home Havana",
    "description": "Vintage Cuban charm",
    "image": {
      "url": "https://res.cloudinary.com/drmamt6fh/image/upload/v1745127571/9_bqp6u0.avif",
      "filename": "23.avif"
    },
    "price": 1700,
    "location": "Havana",
    "country": "Cuba"
  },
  {
    "title": "Floating Houseboat Kerala",
    "description": "Unique backwaters experience",
    "image": {
      "url": "https://res.cloudinary.com/drmamt6fh/image/upload/v1745127570/7_nednsi.avif",
      "filename": "24.avif"
    },
    "price": 1400,
    "location": "Alleppey",
    "country": "India"
  },
  {
    "title": "Luxury RV Park Utah",
    "description": "Glamping with canyon views",
    "image": {
      "url": "https://res.cloudinary.com/drmamt6fh/image/upload/v1745127571/8_vjijbw.avif",
      "filename": "25.avif"
    },
    "price": 2300,
    "location": "Moab",
    "country": "United States"
  },
  {
    "title": "Traditional Ryokan Kyoto",
    "description": "Authentic Japanese inn",
    "image": {
      "url": "https://res.cloudinary.com/drmamt6fh/image/upload/v1745127570/2_na2iav.avif",
      "filename": "26.avif"
    },
    "price": 2600,
    "location": "Kyoto",
    "country": "Japan"
  },
  {
    "title": "Cliffside Cabin Big Sur",
    "description": "Dramatic Pacific Ocean views",
    "image": {
      "url": "https://res.cloudinary.com/drmamt6fh/image/upload/v1745127571/5_bpvpgg.avif",
      "filename": "27.avif"
    },
    "price": 3300,
    "location": "Big Sur",
    "country": "United States"
  },
  {
    "title": "Art Deco Miami Apartment",
    "description": "Vibrant South Beach style",
    "image": {
      "url": "https://res.cloudinary.com/drmamt6fh/image/upload/v1745127570/6_zgexia.avif",
      "filename": "28.avif"
    },
    "price": 2400,
    "location": "Miami",
    "country": "United States"
  },
  {
    "title": "Historic Windmill Stay",
    "description": "Converted windmill rental",
    "image": {
      "url": "https://res.cloudinary.com/drmamt6fh/image/upload/v1745127570/3_iy9wen.avif",
      "filename": "29.avif"
    },
    "price": 2100,
    "location": "Rotterdam",
    "country": "Netherlands"
  },
  {
    "title": "Overwater Bungalow Bora Bora",
    "description": "Crystal clear lagoon access",
    "image": {
      "url": "https://res.cloudinary.com/drmamt6fh/image/upload/v1745127570/4_dieir4.avif",
      "filename": "30.avif"
    },
    "price": 5000,
    "location": "Bora Bora",
    "country": "French Polynesia"
  }
];

module.exports = { data: listings };