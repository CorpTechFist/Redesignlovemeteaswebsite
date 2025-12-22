import { useState } from 'react';

const herbs = [
  {
    name: 'ALTHEA',
    description: 'The common names are marshmallow, mortification, sweet weed, or wymote. The entirety of the herb is useful for medicine. The root is boiled or cold infused, decocted until it becomes a thick solution & taken a small mouthful or a syrup. Depending on the part of the plant which is used it can affect digestive difficulties in the intestines during the season. Greeks utilized its harvested root to flavoring it using icy raspberry particles. It is a well-known wild plant which is wild, it is a widespread disease following energy comes with the spring, the root is best harvested during August, after the upper parts die down, the disease can be gathered throughout times in its dried back to the roots.'
  },
  {
    name: 'ANGELICA',
    description: 'Angelica has been used for more than a millennium & it is perceived, it is known for its medicinal purposes. It is cultivated in many gardens in Europe, and it has strong anti-inflammatory properties increasing blood circulation, it is widely used in flavoring various alcoholic drinks. Archangel Michael was believed to have revealed its use during the Middle Ages. Angelica has a first line medical alliance. An infusion of the substance & in compresses often serves as a medicinal part. Angelica is considered as a cure for pestilence. The only plant so remarkable which would ever bring the disease.'
  },
  {
    name: 'ANISEED',
    description: 'Aniseed is often confused with Star Anise however they are different you have similar flavor, in ancient Greece, aniseed was used for spices or medicine. It has energies of the intoxication & restoratives; stability & exhaustion, as well as it is recommended to carminative, stomachic & diuretic nature due to heart disease in Egypt, aniseed has grown by the Egyptians over 4000 years ago and is Antispasmodic & relaxant muscles.'
  },
  {
    name: 'BALM',
    description: 'The Balm plant comes from the same family as mint & is native to southern Europe & northern Africa. Melissa from the Greek word, Melissa, means honey bee, the honey bee plant is a natural anxiety reliever, relieves nausea. It has an ease of nausea affecting the body. It also aids a sweet flavor. Balm was recognized as an official medicine in Germany.'
  },
  {
    name: 'CARAWAY',
    description: 'Caraway is a biennial or perennial plant, its seeds carry numerous medicinal properties. It is of an antiputrescent, stomachic, & tonic qualities. The raw extract oil which is applied topically by rubbing your skin is said to have a positive effect on the appetite & digestive system. It also promotes the onset of menstruation, relieves uterine cramps, treats digestive disorders (including flatulence). Its taste is pungent or sharp its color is nutmish, & is a robust aromatic volatile. It is not only a common kitchen spice, its medicinal.'
  },
  {
    name: 'CHAMOMILE',
    description: 'Chamomile is not only a beautiful plant but it also has a variety of medicinal uses, it is most known for its calming effects. Chamomile has anti-inflammatory properties, it stimulates the immune system, & it helps address sleeplessness & fever in children. Germans Chamomile is known to deal with nervous conditions, enteritis, colleyitis, fever. It is often infused in teas, extracts, & capsules. Inflammation it can be used as a poultices for skin conditions. It can be added to baths to calm nerves.'
  },
  {
    name: 'COLTSFOOT',
    description: 'Coltsfoot is a perennial plant, that grows in areas such as grasslands, railways & hillsides & wasteland. In alternative medicine, coltsfoot is used for coughs, asthma, bronchial conditions (including inflammation of the Airways or passages in the nose). It also use to treats laryngitis. It was the traditional herbalism, coltsfoot is used as an herbal remedy, for sore throat, irritated mucous membranes, mouth & throat, calcium, potassium, it is widely known for its flavors. Its calcium boosts collagen, & zinc contain the leaves. The leaves are also used internally & medicinally for the coarse cough resulting in aid from even chronic conditions.'
  },
  {
    name: 'FENNEL',
    description: 'Fennel has been used as a condiment since the EIRos of journalism & Anglo-Saxons. All the edible fiber such as roots, stems, leaves. The greeks believed which is placed with the crown which the greeks its name & it has a strong in the time of the American revolution was being utilized for the oil (it is high concentration was derived from fennel\'s use tossing cough & chronic diarrhea). A fennel poultice is crushed & directly on the mouth to fresher or yield have biogersenic. Freshen has expectorant was derived from fennel\'s use tossing cough.'
  },
  {
    name: 'GENTIAN',
    description: 'The gentian blue that often from Gentius (ancient King of Illyria - southeastern Italy) whom supposedly discovered the medicinal value in these plants. A close in distant cultures found its a tonic at homes, and a tonic is a medicinal. It is beneficial to the digestive system, or other contracting plants of the gentian family.'
  },
  {
    name: 'HIBISCUS',
    description: 'Hibiscus has remained a perennial success in its flower tea its medicinal properties but it has captivated the world, each typically medicinal varieties & or arrays of aspects. It can behave as an apertif or to soothing tea. It can be useful in high blood pressure, it can be useful in cholesterol. It is excellent for fevers, & to soothe the nervous system. Egyptians also used the plant as a powerful antiseptic. Hibiscus is a powerful plant in so many ways.'
  },
  {
    name: 'HOPS',
    description: 'Hops has been used by Native Americans. Hops the Pilgrims, it is known for its healing properties thus a aromatic volatile bitters. It helps in many ailments anti-inflammatory, therapeutic. & anti-uborice it is believed it often been heat down feel a anti-septic (including sedative). It promotes can digestion & has tonic.'
  },
  {
    name: 'LANCE LEAF',
    description: 'According to legend, Lance Leaf Plantain originated from a maiden who spend so much time by the roadside watching for her lover that she turned into this common roadside plant. In the medieval Christian all plantain symbolizes the well-trodden path of the multitudes who sought Christ. It\'s useful in treating swellings, inflammation & it can be used for insect stings, sunburn, bruising, & ant irritations.'
  },
  {
    name: 'LAVENDER',
    description: 'The name lavender is derived from the Latin lavandula, "to be washed" probably because it was used in ancient times to perfume both water. Lavender has a long history as a medicinal plant & it grows wild in the hills of Mediterranean Europe.'
  },
  {
    name: 'LICORICE ROOT',
    description: 'Licorice Root is a medicinal plant also known for flavoring products on the market today. The root is the most productive. It is prescribed to treat allergies, ulcers and uses as a stimulant, diuretic, expectorant & laxative. It is often used as medicine for stomach problems such as heartburn & stomach ulcers. Licorice Root can also be taken for stomach issues, such as peptic ulcers, hepatic, or family doctor, or with upper digestive symptoms. Licorice Root is beneficial in fever.'
  },
  {
    name: 'LUNGWORT',
    description: 'In the Middle Ages it was commonly believed that the outward appearance of a plant was a clue as to what affliction or part of the body it would heal. The spotted leaf was called the Doctrine of Signatures, lungwort received its lung-shaped leaflets were automatically a sign of breathing disorders and had to be the lung-shaped. physicians primarily linked to the thirteenth-century physician Theodorius/Nicholas Theophrasts in his botanical work in 1588. "Doctrine" does not refer to religion however it does to an instructional declaration, they were supposed to unfold man.'
  },
  {
    name: 'MILFOIL',
    description: 'Milfoil\'s genus name Achillea is taken from Achilles, the Greek hero in the Trojan War. During that time, it was traditionally used for stopping bleeding and reducing soldiers. The title believes employed milfoil for similar purposes. But its name was given to the plant because it was used in the Trojan War. Achilles had not considered it sacred plant with spiritual qualities. This if was an appropriate mixture he had it that ground a testa could help wounds and with proper remedies was used for many illnesses. it is the English medicinal or traditional of consulting like "I Ching". My place partial stiks old manipulation to receive wisdom is the answers from the Universe.'
  },
  {
    name: 'MULLEIN WHOLE FLOWER',
    description: 'Mullein is a medicinal plant that carries properties in the whole flower. You will find the plant growing along roadsides in lots of regions, or along rock shores & cliff areas. Throughout Middle Ages the down dried flowers allow flower is best shown for its analgesic, pectoral, coughs, epilepsy bloody, & bronchial ailments. If you have been subjected to inhaled medicine or in the seeding of hemorrhoids.'
  },
  {
    name: 'OAK BARK',
    description: 'The majestic oak, with its impressive size and frequently homes found, have long held a thousand years of historical significant symbolism in many ancient cultures. Long a symbol for the Celts and druids, the oak, as besides other 50 Northern plant hospitality to find and loss of his length, also saw it glorified in three timeless, famous novels along by author Johann Wolfgang Von Goethe. One of the most differentia aspects in the right history is a sacred text & in the oral tradition.'
  },
  {
    name: 'PEPPERMINT',
    description: 'Peppermint has a long history of being used to flavor many ailments, as well as it still flavoring. It can alleviate a flavoring, meditational energies, eucalyptus, minolol stimulant. Essentially, inhaling the aroma is said to get fragrant & fresh brightens and overnight'
  },
  {
    name: 'PRIMROSE',
    description: 'A Primrose of traditional botanical is flowering in the botanical flowers, as the entire plant is useful. It is a woodland plant that grows in 99 meadows, woodlands, and it is throughout winter and early spring. It is believed to have strong, diuretic, expectorant. & a flower essence is used to help migraine headaches, insomnia, with various central nervous system & rheumatism. The root is used externally to accelerate traumatic healing, obstructions, or congestion of the bronchial tubes, or other wise used in cosmetics, it is an anti-spasmodic & analgesic flower full in relaxing and a various other conditions contributed to contamination.'
  },
  {
    name: 'SHAVEGRASS',
    description: 'Shavegrass is a member of the same family. Botanically the plant is important for supporting nutritional value in recent years. It is a potent source different parts that mixed as far as extensively the silica mineral. Major of it constituents & it contains significant amounts of substances that are beneficial to help improve many of patient success. Shavegrass is a general mineral of satisfaction need to be significantly result. A polish mixture which is known as horsetail. It has officially many other ailments.'
  },
  {
    name: 'ST. JOHNSWORT',
    description: 'St. Johnswort has known as Amber or in old seed is a wild flowering plant that traditionally use externally its medicinal properties include an Antispasmodic, antiseptic, especially it is analgesic. The extraction of its properties it can be considered using it through maintaining, it nervous system unease, taking it in teas gained to help during depression. Its dried flower extract treating various ailments, symptoms, it can help to be cramping & menstruation.'
  },
  {
    name: 'SWEET FLAG ROOT',
    description: 'Sweet Flag Root is known as Calamus is a perennial plant that grows along shoreline edges. A bunch of claims in which Ancient Greeks cultivated sweet flag for medicine carminative, gastrointestinal as a sedative, & stomach digestive aid. Sweet Flag herb has been cited for its uses in Ayurveda & Chinese traditional medicine. The fact digestive herbal teas and tincture have added to baths and meant to assist it is a tonic herbal. Also known for its medicinal value of respiratory system.'
  },
  {
    name: 'VALERIAN ROOT',
    description: 'Valerian Root is mainly known for its sedative properties. It is the used plant known to derived medicinal value and it is known as a remedy for the medicinal values, such as the herbal carrier, like so many pharmaceutical anticanxiety medication as today. Valerian has been used for medicinal purposes since the time of ancient Greeks. It is made up of over 150 components, making it a complex plant, but has never resulted in negative side effects from its many properties. Its therapeutic uses are respectively, insomnia, quiet stomach, cognitive, tiredness, menstrual cramps, & it is beneficial for many various symptoms.'
  },
  {
    name: 'WORMWOOD',
    description: 'Wormwood has a long tradition of its healing properties of preparing stimulating tonic. An infusion of leaf, been and flower. Also utilized as an Expectorant, antiseptic, & antispasmodic. Externally when soaking the other parts. Legend has it that wormwood first arising from the impression made by the serpent as it is crawled out of Eden. Later was known called absinthium. Folklore, wormwood was reputed to deprive a man of his virility. But it shall make feel it was supposed to be an aphrodisiac. The earliest uses of wormwood dates that wormwood is a principal ingredient in the distillation of the alcoholic drink absinthe, which has been banned in the past/currently, there also laws various prohibitions. The plant is extremely bitter, & wormwood is mostly used in teas. Probably used in perfume botanical therapies.'
  }
];

export function PlantHistory() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredHerbs = herbs.filter(herb =>
    herb.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="history" className="py-20 bg-gradient-to-b from-purple-700 via-purple-600 to-purple-800 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 tracking-wider">
            PLANT HISTORY & LEGEND
          </h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-4">
            Plants have a rich history of lore, folklore, symbolism, and mythology that often dates back thousands of years. Plants should have the most folk associated with them are those which were most useful to man as food, medicine, or source of raw materials.
          </p>
          <p className="text-base md:text-lg max-w-4xl mx-auto leading-relaxed mb-4">
            As modern folk we are conditioned to reach with excitement at hear toward these stories, but discovering real history, we will also confine risk of being mere stories.
          </p>
          <p className="text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
            Both fact & legend in plant history, provides a glimpse into the past, letting us see even the most familiar plants around us in a new light. Perhaps this information will allow you to view the natural world through the same (eyes).
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-12">
          <input
            type="text"
            placeholder="Search for a plant..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
          />
        </div>

        {/* Herbs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredHerbs.map((herb, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all hover:shadow-2xl"
            >
              <h3 className="text-2xl md:text-3xl mb-4 tracking-wider border-b border-white/30 pb-3">
                {herb.name}
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-white/90">
                {herb.description}
              </p>
            </div>
          ))}
        </div>

        {filteredHerbs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl opacity-70">No plants found matching "{searchTerm}"</p>
          </div>
        )}
      </div>
    </section>
  );
}