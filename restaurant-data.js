// ============================================================
// TEHZEEB DASTARKHWAN — Restaurant data
// This object is the single source of truth for the site.
// It is rendered into the Menu/Locations pages AND fed to the
// chatbot as its knowledge base, so the bot always matches
// what's actually on the site.
// ============================================================

const RESTAURANT_DATA = {
  brand: {
    name: "Tehzeeb Dastarkhwan",
    tagline: "Nawabi Zaika, Since 1985",
    founded: 1985,
    city: "Lucknow, Uttar Pradesh",
    description:
      "A family-run Awadhi restaurant chain serving the slow-cooked kebabs, biryanis and dastarkhwan traditions of old Lucknow. Four generations of the Rizvi family recipe book, unchanged since 1985.",
    phone: "+91 522 400 1985",
    email: "dastarkhwan@tehzeeb-demo.example",
    whatsapp: "+91 98765 43210",
    hours: "11:00 AM – 11:00 PM, all days"
  },

  about: {
    story:
      "Tehzeeb Dastarkhwan began in 1985 as a single tawa stall outside Aminabad, run by Haji Sharafat Rizvi with a coal handi and his grandmother's Kakori kebab recipe. Within a decade the family opened a proper dining room, then a second, then a third — each one keeping the same dum-pukht process, the same butcher, the same hand-ground spice blend. Today the chain has five dining rooms across Lucknow, but every kitchen still uses the original slow-cooking method: meat marinated overnight in raw papaya, ghee and a house garam masala, then sealed and cooked on dying coals for hours, never a flame.",
    founder: "Haji Sharafat Rizvi (founder, 1985); now run by his grandson Imran Rizvi",
    philosophy:
      "Dastarkhwan means the cloth spread on the floor for a shared meal — the Awadhi idea that food is hospitality first, dish second. Every table gets complimentary kebab and sharbat while the main order is prepared, exactly as guests were welcomed in 1985.",
    signatureDish: "Galouti Kebab, pounded 100+ times and cooked on a tawa with a whisper of rose water"
  },

  menu: {
    currency: "₹",
    categories: [
      {
        name: "Kebabs & Tikkas",
        note: "Cooked to order on coal tawa",
        items: [
          { name: "Galouti Kebab", desc: "Minced mutton, 160-plus spices, melts on the tongue", price: 320, veg: false, signature: true },
          { name: "Kakori Kebab", desc: "Skewer-grilled mutton seekh, raw papaya marinade", price: 340, veg: false, signature: true },
          { name: "Boti Kebab", desc: "Charcoal-grilled mutton chunks, yogurt marinade", price: 300, veg: false },
          { name: "Shami Kebab", desc: "Mutton and chana dal patties, pan-seared", price: 220, veg: false },
          { name: "Murgh Malai Tikka", desc: "Cream and cheese marinated chicken, tandoor-finished", price: 260, veg: false },
          { name: "Paneer Kalmi Kebab", desc: "Skewered cottage cheese, saffron and yogurt", price: 240, veg: true }
        ]
      },
      {
        name: "Biryani & Pulao",
        note: "Dum-cooked in sealed handi, min. 40 min",
        items: [
          { name: "Awadhi Mutton Biryani", desc: "Layered basmati, dum-sealed with mutton and kewra", price: 380, veg: false, signature: true },
          { name: "Murgh Yakhni Pulao", desc: "Chicken stock rice, whole spice, no chilli powder", price: 300, veg: false },
          { name: "Motia Pulao", desc: "Mildly sweet saffron rice with dry fruits", price: 260, veg: true },
          { name: "Subz Dum Biryani", desc: "Seasonal vegetables, dum-cooked with mint", price: 250, veg: true }
        ]
      },
      {
        name: "Curries",
        note: "Served with sheermal or rice",
        items: [
          { name: "Nihari", desc: "Slow-braised mutton shank, overnight simmer", price: 360, veg: false, signature: true },
          { name: "Murgh Korma", desc: "Chicken in cashew-yogurt gravy, whole spice", price: 300, veg: false },
          { name: "Dum Aloo Lucknawi", desc: "Baby potatoes, yogurt-based Awadhi gravy", price: 220, veg: true },
          { name: "Paneer Do Pyaza", desc: "Cottage cheese, onion and bell pepper", price: 240, veg: true }
        ]
      },
      {
        name: "Breads",
        items: [
          { name: "Sheermal", desc: "Saffron milk bread, lightly sweet, tandoor-baked", price: 60, veg: true },
          { name: "Taftan", desc: "Leavened bread with poppy seed and milk wash", price: 70, veg: true },
          { name: "Roomali Roti", desc: "Paper-thin whole wheat, hand-tossed", price: 40, veg: true },
          { name: "Ulta Tawa Paratha", desc: "Layered paratha cooked on an inverted tawa", price: 55, veg: true }
        ]
      },
      {
        name: "Rolls (Street Counter)",
        note: "Available at all outlets, takeaway counter",
        items: [
          { name: "Seekh Kebab Roll", desc: "Mutton seekh, onion, mint chutney, roomali roti", price: 150, veg: false },
          { name: "Chicken Tikka Roll", desc: "Malai tikka, sliced onion, house chutney", price: 140, veg: false },
          { name: "Paneer Roll", desc: "Kalmi paneer, pickled onion, mint chutney", price: 120, veg: true }
        ]
      },
      {
        name: "Desserts",
        items: [
          { name: "Shahi Tukda", desc: "Fried bread in saffron rabri, dry fruit", price: 140, veg: true, signature: true },
          { name: "Malai Makhan", desc: "Whipped clotted cream, a winter-only Lucknow classic", price: 120, veg: true },
          { name: "Kulfi Falooda", desc: "Pistachio kulfi, vermicelli, rose syrup", price: 130, veg: true }
        ]
      },
      {
        name: "Beverages",
        items: [
          { name: "Sharbat-e-Gulab", desc: "Rose syrup, chilled water, ice", price: 70, veg: true },
          { name: "Kesar Doodh", desc: "Warm saffron milk", price: 90, veg: true },
          { name: "Nimbu Pani", desc: "Fresh lime, mint, black salt", price: 50, veg: true }
        ]
      }
    ]
  },

  locations: [
    {
      name: "Hazratganj",
      address: "14 Mall Avenue, Hazratganj, Lucknow – 226001",
      phone: "+91 522 400 1001",
      hours: "11:00 AM – 11:00 PM",
      flagship: true,
      note: "Original dining room, opened 1995. Seats 80, valet available."
    },
    {
      name: "Gomti Nagar",
      address: "Vipin Khand, Gomti Nagar, Lucknow – 226010",
      phone: "+91 522 400 1002",
      hours: "11:00 AM – 11:00 PM",
      note: "Family hall + private dining room, seats 120."
    },
    {
      name: "Aminabad",
      address: "Near Nadan Mahal Road, Aminabad, Lucknow – 226018",
      phone: "+91 522 400 1003",
      hours: "10:00 AM – 11:00 PM",
      note: "The original 1985 stall location — now a takeaway + roll counter."
    },
    {
      name: "Indira Nagar",
      address: "Sector 14, Indira Nagar, Lucknow – 226016",
      phone: "+91 522 400 1004",
      hours: "11:00 AM – 11:00 PM",
      note: "Seats 60, rooftop seating in winter."
    },
    {
      name: "Alambagh",
      address: "Near Alambagh Bus Station, Lucknow – 226005",
      phone: "+91 522 400 1005",
      hours: "10:30 AM – 10:30 PM",
      note: "Closest outlet to Charbagh railway station, quick-serve counter."
    }
  ],

  policies: {
    delivery: "In-house delivery within 6 km of each outlet, 45–60 min. Delivered via Zomato/Swiggy beyond that (demo data — not real integrations).",
    reservations: "Recommended for Hazratganj and Gomti Nagar on weekends. Call the outlet directly.",
    payment: "Cash, UPI, all major cards.",
    catering: "Dastarkhwan catering for weddings and events, minimum 50 guests, 7 days advance notice.",
    dietary: "Vegetarian items marked on menu. No pork served anywhere. Jain/no-onion-garlic on request."
  }
};

// Expose for both the page-render scripts and the chatbot
if (typeof module !== "undefined") module.exports = RESTAURANT_DATA;
