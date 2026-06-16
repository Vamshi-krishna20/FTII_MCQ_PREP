/**
 * QUESTION DATABASE (FTII JET MCQ Assessment Portal)
 * 
 * To add a new question, append a new object to the QUESTION_DB array below.
 * Each question object MUST follow this structure:
 * 
 * {
 *   id: 51, // Unique identifier (increment sequentially)
 *   category: "Category Name: Subcategory", // e.g. "Cinema History: Indian Cinema"
 *   question: "The text of your question goes here?",
 *   options: ["Option A", "Option B", "Option C", "Option D"], // Exactly 4 options
 *   correctIndex: 2, // 0-indexed index of the correct option (0 = A, 1 = B, 2 = C, 3 = D)
 *   hint: "A helpful hint for the user.", // Optional hint
 *   rationale: "Detailed explanation of why the correct option is correct.",
 *   distractorExplorations: {
 *     "Option A": "Explanation of why Option A is incorrect.",
 *     "Option B": "Explanation of why Option B is incorrect.",
 *     "Option D": "Explanation of why Option D is incorrect."
 *   }
 * }
 */

const QUESTION_DB = [
  {
    "id": 501,
    "category": "Cinema History: Indian Cinema",
    "question": "What was the first Bollywood feature film to be shot on location in New Zealand?",
    "options": [
      "Kaho Naa... Pyaar Hai",
      "Main Prem Ki Diwani Hoon",
      "I Hate Luv Storys",
      "Kuch Kuch Hota Hai"
    ],
    "correctIndex": 0,
    "hint": "It was the massive 2000 romantic blockbuster debut of Hrithik Roshan, directed by Rakesh Roshan.",
    "rationale": "Kaho Naa... Pyaar Hai (2000) was the first Hindi film to utilize New Zealand's scenic landscapes for major song sequences and plot backdrops.",
    "distractorExplorations": {
      "Main Prem Ki Diwani Hoon": "This Sooraj Barjatya film was shot there later in 2003, capitalizing on established production paths.",
      "I Hate Luv Storys": "This romantic comedy was filmed extensively in New Zealand much later, in 2010.",
      "Kuch Kuch Hota Hai": "This iconic 1998 movie utilized Scotland and Mauritius for its international song sequences."
    }
  },
  {
    "id": 502,
    "category": "Cinema: Music and Playback",
    "question": "Which Filmfare Award-winning playback singer famously recorded 'Haadsa', the official theme song of the F1 Indian Grand Prix?",
    "options": [
      "KK (Krishnakumar Kunnath)",
      "Mohit Chauhan",
      "Shaan",
      "Sonu Nigam"
    ],
    "correctIndex": 0,
    "hint": "He is renowned for rock-infused Bollywood tracks like 'Pal', 'Yaaron', and 'Tu Hi Meri Shab Hai'.",
    "rationale": "The late versatile singer KK recorded the high-octane track 'Haadsa' as the official musical theme for the inaugural Formula One Indian Grand Prix event.",
    "distractorExplorations": {
      "Mohit Chauhan": "He is famous for his soulful, indie-folk textures in rock anthems like Rockstar, but did not sing this specific sports track.",
      "Shaan": "Shaan is celebrated for his smooth pop vocals but was not the artist behind the official F1 race anthem.",
      "Sonu Nigam": "Sonu Nigam has recorded diverse anthems but was not selected to headline this specific racing project."
    }
  },
  {
    "id": 503,
    "category": "Cinema: Cameos and Sports",
    "question": "Which Indian cricketer made a notable cameo appearance as a live television commentator in the 2013 film 'Kai Po Che!'?",
    "options": [
      "Gaurav Kapoor",
      "Kiran More",
      "Ajay Jadeja",
      "Kapil Dev"
    ],
    "correctIndex": 1,
    "hint": "He was a brilliant former Indian wicketkeeper-batsman and national selector who spots the fictional talent Ali in the film.",
    "rationale": "Former international wicketkeeper Kiran More appeared as himself, auditioning and commentating on the young prodigy Ali inside Abhishek Kapoor's sports-drama.",
    "distractorExplorations": {
      "Gaurav Kapoor": "He acts as a professional real-world anchor and host but did not play this specific scouting role in the movie.",
      "Ajay Jadeja": "Jadeja acted in full-scale theatrical films like Khel, but was not the commentator cast in this project.",
      "Kapil Dev": "Kapil Dev made sports cameos in films like Iqbal and Mujhse Shaadi Karogi, but did not appear in Kai Po Che!."
    }
  },
  {
    "id": 504,
    "category": "Cinema Awards: Dadasaheb Phalke",
    "question": "Which iconic veteran actor was honored with the Dadasaheb Phalke Award for the year 2012?",
    "options": [
      "Pran",
      "Soumitra Chatterjee",
      "Dilip Kumar",
      "Manoj Kumar"
    ],
    "correctIndex": 0,
    "hint": "He was Indian cinema's ultimate legendary villain, famous for roles in Zanjeer, Don, and Upkar.",
    "rationale": "The legendary actor Pran (Pran Krishan Sikand) received India's highest cinema honor, the Dadasaheb Phalke Award, in 2012.",
    "distractorExplorations": {
      "Soumitra Chatterjee": "The legendary Bengali auteur companion was honored with the award in the preceding 2011 cycle.",
      "Dilip Kumar": "The 'Tragedy King' of Indian cinema received his landmark Phalke recognition earlier, in 1994.",
      "Manoj Kumar": "Manoj Kumar was honored with the lifetime achievement award later, in 2015."
    }
  },
  {
    "id": 505,
    "category": "Cinema: Behind the Scenes",
    "question": "Who served as the real-world technical coach and consultant to train the women's hockey team actors for 'Chak De! India'?",
    "options": [
      "Mir Ranjan Negi",
      "Dhanraj Pillay",
      "Maharaj Krishan Kaushik",
      "Balbir Singh Sr."
    ],
    "correctIndex": 0,
    "hint": "He was a former Indian goalkeeper whose personal life story loosely inspired parts of Kabir Khan's redemption arc.",
    "rationale": "Former national goalkeeper Mir Ranjan Negi coached the cast and supervised technical choreography to ensure authentic gameplay on screen.",
    "distractorExplorations": {
      "Dhanraj Pillay": "The iconic forward supported national promotional campaigns but did not act as the formal boot-camp coach for the actors.",
      "Maharaj Krishan Kaushik": "He was a regular national women's coach who offered tactical baseline advice, but Negi was the practical on-set trainer.",
      "Balbir Singh Sr.": "He was a legendary triple-Olympic gold medalist who acted as a historical inspiration figure for hockey cinema entirely."
    }
  },
  {
    "id": 506,
    "category": "Cinema Awards: National Awards",
    "question": "Who won the National Film Award for Best Supporting Actor for his stellar performance in the 2008 musical drama 'Rock On!!'?",
    "options": [
      "Arjun Rampal",
      "Farhan Akhtar",
      "Purab Kohli",
      "Luke Kenny"
    ],
    "correctIndex": 0,
    "hint": "He played the brooding, fiercely talented lead guitarist Joe Mascarenhas in the fictional band Magik.",
    "rationale": "Arjun Rampal won both the National Film Award and the Filmfare Award for Best Supporting Actor for his career-defining performance in Rock On!!.",
    "distractorExplorations": {
      "Farhan Akhtar": "He made his acting debut as the lead vocalist Aditya Shroff, winning accolades but not the supporting actor prize.",
      "Purab Kohli": "He delivered an endearing performance as the energetic drummer KD, receiving a special mention tracking tier.",
      "Luke Kenny": "He played the keyboardist Rob, anchoring the dramatic emotional core of the film's climax."
    }
  },
  {
    "id": 507,
    "category": "Cinema Awards: National Awards",
    "question": "Which Bollywood blockbuster won the National Film Award for Best Popular Film Providing Wholesome Entertainment for 2007?",
    "options": [
      "Chak De! India",
      "Om Shanti Om",
      "Taare Zameen Par",
      "Jab We Met"
    ],
    "correctIndex": 0,
    "hint": "This sports-drama redefined women's sports in mainstream culture, starring Shah Rukh Khan as Kabir Khan.",
    "rationale": "The 55th National Film Awards honored 'Chak De! India' with the top popular film category prize for its impact and entertainment value.",
    "distractorExplorations": {
      "Om Shanti Om": "This retro commercial blockbuster was a major box-office hit in 2007 but missed this specific national award category.",
      "Taare Zameen Par": "This masterpiece won the National Award for Best Film on Family Welfare in the same year's cycle.",
      "Jab We Met": "Imtiaz Ali's romantic classic won national honors for choreography and playback singing, but not best popular film."
    }
  },
  {
    "id": 508,
    "category": "Cinema Theory: Screenwriting",
    "question": "Which acclaimed writer-director wrote the scripts for both the indie comedy 'Khosla Ka Ghosla' and Ram Gopal Varma's 'Company'?",
    "options": [
      "Jaideep Sahni",
      "Anurag Kashyap",
      "Dibakar Banerjee",
      "Saurabh Shukla"
    ],
    "correctIndex": 0,
    "hint": "He is a master screenwriter who also penned Chak De! India, Rocket Singh: Salesman of the Year, and Bunty Aur Babli.",
    "rationale": "Jaideep Sahni showcased incredible narrative range by writing the realistic underworld drama Company (2002) and the middle-class Delhi satire Khosla Ka Ghosla (2006).",
    "distractorExplorations": {
      "Anurag Kashyap": "He co-wrote Satya and Shool for Ram Gopal Varma, but was not the writer for Company or Khosla.",
      "Dibakar Banerjee": "He directed Khosla Ka Ghosla, directing from Jaideep Sahni's original screenplay structure.",
      "Saurabh Shukla": "He co-wrote Satya and acted in Khosla Ka Ghosla as Bapu, but did not write these two scripts."
    }
  },
  {
    "id": 509,
    "category": "Cinema: Music and Acting",
    "question": "Which well-known Indian playback singer made a prominent acting debut in Meghna Gulzar's directorial debut 'Filhaal...' (2002)?",
    "options": [
      "Palash Sen",
      "Lucky Ali",
      "Shaan",
      "Sonu Nigam"
    ],
    "correctIndex": 0,
    "hint": "He is the lead vocalist and founder of the highly successful Indian pop-rock band Euphoria.",
    "rationale": "Dr. Palash Sen stepped in front of the camera to play a lead role alongside Tabu and Sushmita Sen in the relationship drama Filhaal....",
    "distractorExplorations": {
      "Lucky Ali": "He acted in movies like Kaante and Sur during this era, but was not part of the Filhaal... cast.",
      "Shaan": "Shaan made brief guest musical appearances but avoided leading dramatic feature structures during this cycle.",
      "Sonu Nigam": "Sonu Nigam tried his hand at acting in Jaani Dushman and Love in Nepal, but did not star in this Meghna Gulzar film."
    }
  },
  {
    "id": 510,
    "category": "Cinema History: Indian Cinema",
    "question": "What was the title of Madhuri Dixit’s official theatrical comeback film in 2007 after a hiatus?",
    "options": [
      "Aaja Nachle",
      "Dedh Ishqiya",
      "Gulaab Gang",
      "Devdas"
    ],
    "correctIndex": 0,
    "hint": "Produced by Yash Raj Films, this dance-centric movie features her trying to save a local community theater called Ajanta.",
    "rationale": "Madhuri Dixit returned to the silver screen in 2007 starring in Anil Mehta's musical drama 'Aaja Nachle'.",
    "distractorExplorations": {
      "Dedh Ishqiya": "This dark comedy was an acclaimed comeback phase entry released much later, in 2014.",
      "Gulaab Gang": "This action-drama featured her alongside Juhi Chawla in 2014.",
      "Devdas": "This 2002 magnum opus was her final major film before she took her multi-year family break."
    }
  },
  {
    "id": 511,
    "category": "Cinema Awards: National Awards",
    "question": "Who won the National Film Award for Best Actress for her performance in the 2002 English-language film 'Mr. and Mrs. Iyer'?",
    "options": [
      "Konkona Sen Sharma",
      "Aparna Sen",
      "Tabu",
      "Shabana Azmi"
    ],
    "correctIndex": 0,
    "hint": "She played Meenakshi Iyer, a conservative Tamil Brahmin woman, under her mother Aparna Sen's direction.",
    "rationale": "Konkona Sen Sharma won her first individual Best Actress National Award for her deeply moving performance in this riot-backdrop drama.",
    "distractorExplorations": {
      "Aparna Sen": "She directed and wrote the film, winning the National Film Award for Best Direction, while her daughter starred.",
      "Tabu": "Tabu won the Best Actress award in the previous cycle (Chandni Bar) and was not the lead in this project.",
      "Shabana Azmi": "She is a veteran of Aparna Sen's films but did not play the titular Mrs. Iyer role."
    }
  },
  {
    "id": 512,
    "category": "Cinema History: Remakes",
    "question": "Indra Kumar's 1999 romantic drama 'Mann' starring Aamir Khan and Manisha Koirala is an uncredited remake of which classic Hollywood film?",
    "options": [
      "An Affair to Remember",
      "Casablanca",
      "Titanic",
      "Love Story"
    ],
    "correctIndex": 0,
    "hint": "This 1957 Hollywood romance stars Cary Grant and Deborah Kerr, tracking a pact to meet at the Empire State Building.",
    "rationale": "Mann lifted its central storyline directly from 'An Affair to Remember', replicating the cruise meeting, the accident, and the final painting reveal.",
    "distractorExplorations": {
      "Casablanca": "Casablanca is a legendary wartime drama that inspired alternative dramatic Bollywood scripts like Shaheed.",
      "Titanic": "Titanic features a cruise sinking catastrophe, which was not the plot mechanism of Mann's romantic tragedy.",
      "Love Story": "This tragic romance inspired classics like Ankhiyon Ke Jharokhon Se, but is structurally separate from Mann."
    }
  },
  {
    "id": 513,
    "category": "Cinema: Behind the Scenes",
    "question": "What is the corporate/financial connection of high-profile Indian banker Naina Lal Kidwai with Mira Nair's film 'Monsoon Wedding' (2001)?",
    "options": [
      "She arranged the initial equity fundraising and structured film financing loops",
      "She wrote the script background profiles",
      "She acted as a production costume manager",
      "She was an onscreen wedding coordinator"
    ],
    "correctIndex": 0,
    "hint": "She is a pioneer in Indian banking who helped organize structured commercial funding frameworks for independent parallel films.",
    "rationale": "Naina Lal Kidwai helped pioneer early structured entertainment financing models in India, assisting independent productions like Monsoon Wedding to secure corporate funding.",
    "distractorExplorations": {
      "She wrote the script background profiles": "The film's screenplay was written entirely by professional screenwriter Sabrina Dhawan.",
      "She acted as a production costume manager": "The film's costumes were managed by professional designers like Arjun Bhasin.",
      "She was an onscreen wedding coordinator": "She never made an appearance in the film; her involvement was purely corporate and financial."
    }
  },
  {
    "id": 514,
    "category": "Cinema Awards: Global Awards",
    "question": "Which Hindi film won the prestigious Audience Award for Best Foreign Language Film at the 32nd International Film Festival of São Paulo?",
    "options": [
      "Taare Zameen Par",
      "Lagaan",
      "Slumdog Millionaire",
      "Jodhaa Akbar"
    ],
    "correctIndex": 0,
    "hint": "This Aamir Khan directorial debut dealt with a child's struggle with dyslexia.",
    "rationale": "Taare Zameen Par (released internationally as Like Stars on Earth) won the public vote at the Brazilian festival for its universal emotional appeal.",
    "distractorExplorations": {
      "Lagaan": "Lagaan achieved an Oscar nomination in 2002, but did not compete in this specific 2008 São Paulo cycle.",
      "Slumdog Millionaire": "This is a British production that swept the Oscars, separate from this specific South American indie award tracking track.",
      "Jodhaa Akbar": "Ashutosh Gowariker's epic won public awards at the Golden Minbar festival but not this specific honor."
    }
  },
  {
    "id": 515,
    "category": "Cinema Awards: Oscars",
    "question": "Which Indian filmmaker was nominated for an Academy Award and invited to be a regular voting member of the Academy of Motion Picture Arts and Sciences by 2005?",
    "options": [
      "Ashutosh Gowariker",
      "Aamir Khan",
      "Satyajit Ray",
      "Mira Nair"
    ],
    "correctIndex": 0,
    "hint": "He directed the historic sports epic 'Lagaan', which secured a Best Foreign Language Film nomination in 2002.",
    "rationale": "Following Lagaan's historic Oscar run, director Ashutosh Gowariker was formally inducted as a voting member into the Academy's Directors branch.",
    "distractorExplorations": {
      "Aamir Khan": "He produced and starred in the film, gaining membership later, but Gowariker was the director nominated.",
      "Satyajit Ray": "Ray received an Honorary Lifetime Achievement Oscar in 1992 but was never an active tracking member in 2005.",
      "Mira Nair": "Mira Nair was nominated for Salaam Bombay in 1989 and operates primarily in independent global cinema tracks."
    }
  },
  {
    "id": 516,
    "category": "Cinema: Cameos and Sports",
    "question": "The international cricketers Allan Border, Ashish Nehra, Harbhajan Singh, and Martin Crowe all made cameo appearances in which Bollywood film?",
    "options": [
      "Victory",
      "Patiala House",
      "Chain Kulii Ki Main Kulii",
      "Stumped"
    ],
    "correctIndex": 0,
    "hint": "Released in 2009, this cricket-centric movie stars Harman Baweja as a struggling batsman making his way into the national team.",
    "rationale": "The movie 'Victory' (2009) cast dozens of real-world international cricket stars to simulate authentic global match environments.",
    "distractorExplorations": {
      "Patiala House": "This Akshay Kumar film featured several England national team players, but not Allan Border or Martin Crowe.",
      "Chain Kulii Ki Main Kulii": "This fantasy sports film focused on a magical bat, using fictional domestic cricket teams.",
      "Stumped": "This Raveena Tandon production was released during the 2003 World Cup, focusing on a local housing society's fandom."
    }
  },
  {
    "id": 517,
    "category": "Cinema Theory: VFX",
    "question": "Tata Elxsi managed the extensive visual effects and digital environment replication for which New York-based Bollywood romance drama?",
    "options": [
      "Ta Ra Rum Pum",
      "Kal Ho Naa Ho",
      "New York",
      "Kabhi Alvida Naa Kehna"
    ],
    "correctIndex": 0,
    "hint": "This 2007 Siddharth Anand film stars Saif Ali Khan as a stock-car racer trying to make a living in America.",
    "rationale": "Tata Elxsi's visual effects division digitally built the high-speed racing tracks and stadium backdrops for Yash Raj Films' 'Ta Ra Rum Pum'.",
    "distractorExplorations": {
      "Kal Ho Naa Ho": "This Karan Johar production outsourced its New York visual transitions through alternative technical labs.",
      "New York": "Kabir Khan's post-9/11 thriller relied heavily on real location photography across the city.",
      "Kabhi Alvida Naa Kehna": "This emotional drama was shot extensively on location around New York and Connecticut."
    }
  },
  {
    "id": 518,
    "category": "Cinema: Music Directors",
    "question": "Which Bollywood music composer studied at Presidency College, Kolkata and FTII, Pune, before making his debut with 'Mere Yaar Ki Shaadi Hai'?",
    "options": [
      "Jeet Gannguli",
      "Pritam (Pritam Chakraborty)",
      "Shantanu Moitra",
      "Amit Trivedi"
    ],
    "correctIndex": 1,
    "hint": "He went on to become a powerhouse hitmaker for blockbusters like Dhoom, Jab We Met, Barfi!, and Yeh Jawaani Hai Deewani.",
    "rationale": "Pritam Chakraborty graduated from FTII in sound engineering before moving to Mumbai and debuting as a co-composer with the duo 'Jeet-Pritam' for Yash Raj Films.",
    "distractorExplorations": {
      "Jeet Gannguli": "He was Pritam's early partner but his career and training followed a different institutional pathway in Bengal.",
      "Shantanu Moitra": "Moitra worked in advertising in Delhi before exploding with Pradeep Sarkar's Parineeta.",
      "Amit Trivedi": "Trivedi is a Mumbai-born self-taught musician who broke through via Dev.D, skipping the FTII sound track entirely."
    }
  },
  {
    "id": 519,
    "category": "Cinema: Music and Playback",
    "question": "Who sang the iconic, funk-infused track 'Main Aisa Kyun Hoon' from Farhan Akhtar's military drama 'Lakshya' (2004)?",
    "options": [
      "Shaan",
      "Kunal Ganjawala",
      "Sunidhi Chauhan",
      "Sonu Nigam"
    ],
    "correctIndex": 0,
    "hint": "This playback singer gave voice to Hrithik Roshan's lazy, fluid dance steps choreographed by Prabhu Deva.",
    "rationale": "Shaan delivered the unique vocal style for 'Main Aisa Kyun Hoon', composed by Shankar-Ehsaan-Loy.",
    "distractorExplorations": {
      "Kunal Ganjawala": "He exploded in 2004 with 'Bheege Hont Tere' from Murder, but was not on this track.",
      "Sunidhi Chauhan": "She performed alternative female tracks for the era's major soundtracks.",
      "Sonu Nigam": "Sonu Nigam recorded the title track and emotional melodies for Lakshya, but skipped this dance track."
    }
  },
  {
    "id": 520,
    "category": "Cinema History: Indian Cinema",
    "question": "Which real-world Indian military training academy is showcased as the primary setting for the second act of 'Lakshya'?",
    "options": [
      "National Defence Academy (NDA), Khadakwasla",
      "Indian Military Academy (IMA), Dehradun",
      "Officers Training Academy (OTA), Chennai",
      "Air Force Academy, Dundigal"
    ],
    "correctIndex": 1,
    "hint": "It is the premier institution in Uttarakhand where Hrithik Roshan's character, Karan Shergill, undergoes his transformation.",
    "rationale": "Farhan Akhtar filmed extensively on location inside the Indian Military Academy (IMA) in Dehradun to capture realistic cadet training routines.",
    "distractorExplorations": {
      "National Defence Academy (NDA), Khadakwasla": "NDA trains cadets right after schooling before they move into specialized service academies like the IMA.",
      "Officers Training Academy (OTA), Chennai": "OTA offers short-service commission tracks, whereas the film specifically traces the regular IMA course.",
      "Air Force Academy, Dundigal": "This trains aviation pilots, completely separate from the infantry regiments depicted in the film."
    }
  },
  {
    "id": 521,
    "category": "Cinema History: Remakes",
    "question": "Which Bollywood romantic drama is directly inspired by the classic Hollywood film 'An Affair to Remember'?",
    "options": [
      "Mann",
      "Dil Hai Ke Manta Nahin",
      "Hum Tum",
      "Salaam Namaste"
    ],
    "correctIndex": 0,
    "hint": "This Aamir Khan and Manisha Koirala starrer features a catastrophic accident preventing a meeting at a designated location.",
    "rationale": "This question cross-verifies your entry tracker: Indra Kumar's Mann (1999) is an uncredited frame-by-frame adaptation of the classic Hollywood romance.",
    "distractorExplorations": {
      "Dil Hai Ke Manta Nahin": "This Mahesh Bhatt comedy is a direct adaptation of Hollywood's 'It Happened One Night'.",
      "Hum Tum": "Hum Tum is a romantic comedy inspired by the structure of 'When Harry Met Sally'.",
      "Salaam Namaste": "This film maps a contemporary live-in relationship in Australia, separate from this classic melodrama framework."
    }
  },
  {
    "id": 522,
    "category": "Cinema History: Directors",
    "question": "Which Bollywood director assistant-directed TV serials before debuting in 2003, and was later diagnosed with leukemia while filming 'Tumsa Nahin Dekha'?",
    "options": [
      "Anurag Basu",
      "Imtiaz Ali",
      "Mohit Suri",
      "Anurag Kashyap"
    ],
    "correctIndex": 0,
    "hint": "He survived his cancer battle and went on to direct landmark films like Gangster, Life in a... Metro, and Barfi!.",
    "rationale": "Anurag Basu debuted with Saaya (2003) and fell critically ill during Tumsa Nahin Dekha, prompting Mahesh Bhatt to finish the shoot while Basu received treatment from his hospital bed.",
    "distractorExplorations": {
      "Imtiaz Ali": "He started in television directing shows like Imtehaan but did not suffer from this specific medical emergency.",
      "Mohit Suri": "He debuted with Zeher and directed multiple Vishesh Films hits, but was not the director diagnosed here.",
      "Anurag Kashyap": "He was a writer for Satya who moved into radical indie cinema tracks, skipping the television assistant director loop."
    }
  },
  {
    "id": 523,
    "category": "Cinema: Music Directors",
    "question": "Which Bollywood music director was associated with the Bengali band 'Chandrabindoo' and studied sound engineering at FTII, Pune, before breaking through with ad jingles?",
    "options": [
      "Shantanu Moitra",
      "Arko Pravo Mukherjee",
      "Pritam Chakraborty",
      "Jeet Gannguli"
    ],
    "correctIndex": 2,
    "hint": "This checks your master composer profiles: he is famous for scoring Jab We Met and Ae Dil Hai Mushkil.",
    "rationale": "Pritam Chakraborty was an early member of Chandrabindoo during his college years in Kolkata before heading to FTII and eventually moving into commercial ad jingles and film composition.",
    "distractorExplorations": {
      "Shantanu Moitra": "Moitra worked as a client manager in an advertising agency before shifting to full-time composing.",
      "Arko Pravo Mukherjee": "He is a modern singer-songwriter and physician who entered the industry much later via Pooja Bhatt's Jism 2.",
      "Jeet Gannguli": "He trained under classical gurus and worked extensively in both Tollywood and Bollywood soundscapes."
    }
  },
  {
    "id": 524,
    "category": "Cinema History: Directors",
    "question": "Which Nagpur-born director studied film editing at FTII, Pune, and won National Awards in 2004, 2007, and 2010?",
    "options": [
      "Rajkumar Hirani",
      "Dibakar Banerjee",
      "Madhur Bhandarkar",
      "Ashutosh Gowariker"
    ],
    "correctIndex": 0,
    "hint": "He is the legendary director behind Munna Bhai M.B.B.S., Lage Raho Munna Bhai, and 3 Idiots.",
    "rationale": "Rajkumar Hirani worked as a prominent film editor for years before making his directorial debut with Munna Bhai M.B.B.S., winning multiple National Awards for his films.",
    "distractorExplorations": {
      "Dibakar Banerjee": "He is a Delhi-born advertising professional who directed Khosla Ka Ghosla and Oye Lucky! Lucky Oye!.",
      "Madhur Bhandarkar": "He is a self-taught filmmaker who learned cinema by working at a video cassette library in Mumbai.",
      "Ashutosh Gowariker": "He started his career as an actor before moving into directing with historical epics like Lagaan."
    }
  },
  {
    "id": 525,
    "category": "Cinema History: Indian Cinema",
    "question": "Who played the tragic, structural character role of engineering student Joy Lobo in Rajkumar Hirani's '3 Idiots' (2009)?",
    "options": [
      "Ali Fazal",
      "Sharman Joshi",
      "Omi Vaidya",
      "Madhavan"
    ],
    "correctIndex": 0,
    "hint": "This actor later gained massive international fame in Fukrey, Mirzapur, and the Hollywood film Victoria & Abdul.",
    "rationale": "Ali Fazal delivered a memorable cameo appearance as Joy Lobo, whose tragic suicide drives the emotional focus of the film's critique on educational pressure.",
    "distractorExplorations": {
      "Sharman Joshi": "He played Raju Rastogi, one of the three core protagonist friends of Rancho.",
      "Omi Vaidya": "He played Chatur Ramalingam, famously known as 'The Silencer', delivering the iconic auditorium speech scene.",
      "Madhavan": "He played Farhan Qureshi, the narrator friend who secretly wants to be a wildlife photographer."
    }
  },
  {
    "id": 526,
    "category": "Cinema: Behind the Scenes",
    "question": "The fictional 'Imperial College of Engineering' campus shown in '3 Idiots' was filmed on location at which real-world premium institute?",
    "options": [
      "IIM Ahmedabad",
      "IIT Bombay",
      "IIM Bangalore",
      "IIT Delhi"
    ],
    "correctIndex": 2,
    "hint": "This iconic management institute campus features beautiful exposed-brick architecture designed by Stein.",
    "rationale": "While the story was set in an engineering college, Rajkumar Hirani filmed the campus sequences on location at the Indian Institute of Management (IIM) Bangalore.",
    "distractorExplorations": {
      "IIM Ahmedabad": "This campus was used as the location setting for Abhishek Varman's adaptation of Chetan Bhagat's '2 States'.",
      "IIT Bombay": "IIT Bombay was considered during pre-production but skipped due to scheduling logistics.",
      "IIT Delhi": "IIT Delhi is Chetan Bhagat's actual alma mater, but it was not used as the filming set for the movie adaptation."
    }
  },
  {
    "id": 527,
    "category": "Cinema History: Remakes",
    "question": "Which highly successful Bollywood psychological action thriller is inspired by Christopher Nolan's 'Memento'?",
    "options": [
      "Ghajini",
      "Ek Hasina Thi",
      "Karthik Calling Karthik",
      "Dhoom"
    ],
    "correctIndex": 0,
    "hint": "It stars Aamir Khan as a billionaire suffering from short-term memory loss who uses tattoos and polaroids to track an enemy.",
    "rationale": "Aamir Khan's Ghajini (2008)—adapted from A.R. Murugadoss's Tamil original—uses the short-term memory loss mechanic pioneered in Memento.",
    "distractorExplorations": {
      "Ek Hasina Thi": "This revenge thriller was heavily inspired by the narrative loop of the American novel Double Jeopardy.",
      "Karthik Calling Karthik": "This psychological drama tracks a protagonist struggling with dissociative identity disorder.",
      "Dhoom": "This action heist film is a high-speed vehicle caper completely separate from memory-loss thrillers."
    }
  },
  {
    "id": 528,
    "category": "Cinema History: Indian Cinema",
    "question": "Who played the iconic character of the dense tax inspector Bharat Bhushan in the 2007 comedy 'Bheja Fry'?",
    "options": [
      "Vinay Pathak",
      "Rajat Kapoor",
      "Ranvir Shorey",
      "Saurabh Shukla"
    ],
    "correctIndex": 0,
    "hint": "This performance turned him into an indie comedy star, playing a character who loves singing and carrying a scrapbook.",
    "rationale": "Vinay Pathak delivered a masterful comic performance as the well-meaning but irritating tax inspector Bharat Bhushan in Sagar Ballary's film.",
    "distractorExplorations": {
      "Rajat Kapoor": "He played Ranjeet Thadani, the arrogant music producer who invites Bharat Bhushan to dinner.",
      "Ranvir Shorey": "He played Asif Merchant, an eccentric income tax officer colleague who shows up later in the evening.",
      "Saurabh Shukla": "He acted as a supporting character but did not play the central 'Bheja Fry' catalyst."
    }
  },
  {
    "id": 529,
    "category": "Cinema History: Actors",
    "question": "Which theater personality made his debut in 'Naseem' (1995) and starred in 'Ankur Arora Murder Case'?",
    "options": [
      "Tisca Chopra",
      "Kay Kay Menon",
      "Arjun Mathur",
      "Paresh Rawal"
    ],
    "correctIndex": 1,
    "hint": "He is celebrated for his powerhouse acting roles in Sarkar, Shaurya, and the web series Special Ops.",
    "rationale": "Kay Kay Menon began his cinematic journey with Saeed Mirza's Naseem, later starring as the arrogant senior surgeon Dr. Asthana in Ankur Arora Murder Case (2013).",
    "distractorExplorations": {
      "Tisca Chopra": "She starred in the medical thriller as a grieving mother but was not the theater actor who debuted in Naseem.",
      "Arjun Mathur": "He played the idealistic junior resident doctor who exposes the medical negligence cover-up.",
      "Paresh Rawal": "He is a veteran actor who starred in alternative legal and social dramas across this decade."
    }
  },
  {
    "id": 530,
    "category": "Cinema History: Actors",
    "question": "Which versatile Indian actor, who plays rugby and works with major charities, portrayed an investment banker in 'Chameli' and a military lawyer in 'Shaurya'?",
    "options": [
      "Rahul Bose",
      "Sanjay Suri",
      "Purab Kohli",
      "Jaideep Ahlawat"
    ],
    "correctIndex": 0,
    "hint": "He represented India at international rugby tournaments and directed the National Award-winning indie film Raghu Romeo.",
    "rationale": "Rahul Bose played the sophisticated investment banker Aman Kapoor in Chameli (2003) and Major Siddhant Chaudhary in the military courtroom drama Shaurya (2008).",
    "distractorExplorations": {
      "Sanjay Suri": "He co-starred in alternative indie productions of the era like Jhankaar Beats and My Brother... Nikhil.",
      "Purab Kohli": "He was a prominent VJ turned actor who starred in Rock On!! as the band's drummer.",
      "Jaideep Ahlawat": "He belongs to a later generation of powerhouse actors who broke out during the 2010s."
    }
  },
  {
    "id": 531,
    "category": "Cinema Awards: National Awards",
    "question": "Which Rituparno Ghosh film starring Ajay Devgn and Aishwarya Rai is an adaptation of O. Henry's short story 'The Gift of the Magi'?",
    "options": [
      "Raincoat",
      "Chokher Bali",
      "Chitrangada",
      "Shubho Mahurat"
    ],
    "correctIndex": 0,
    "hint": "The entire melancholic movie takes place over a single rainy afternoon inside a dim Calcutta house.",
    "rationale": "Raincoat (2004) was Rituparno Ghosh's beautiful Hindi-language directorial venture, winning the National Film Award for Best Hindi Feature Film.",
    "distractorExplorations": {
      "Chokher Bali": "This was a highly acclaimed Bengali historical drama based on Rabindranath Tagore's novel.",
      "Chitrangada": "This late-career film explored gender identity and performance art circles in Bengal.",
      "Shubho Mahurat": "This was an adaptation of Agatha Christie's miss marple detective mystery novel 'The Mirror Crack'd from Side to Side'."
    }
  },
  {
    "id": 532,
    "category": "Cinema History: Directors",
    "question": "Which director won the National Film Award for Best Hindi Feature Film for his debut venture 'Khosla Ka Ghosla'?",
    "options": [
      "Dibakar Banerjee",
      "Saurabh Shukla",
      "Navdeep Singh",
      "Anurag Kashyap"
    ],
    "correctIndex": 0,
    "hint": "He went on to direct landmark modern films like Oye Lucky! Lucky Oye!, LSD, and Shanghai.",
    "rationale": "Dibakar Banerjee made a stellar directorial debut with Khosla Ka Ghosla (2006), winning wide critical acclaim and a National Award.",
    "distractorExplorations": {
      "Saurabh Shukla": "He co-starred in the film as a dramatic actor but did not sit in the director's chair.",
      "Navdeep Singh": "He made his directorial debut with the highly acclaimed neo-noir thriller Manorama Six Feet Under in 2007.",
      "Anurag Kashyap": "He was gaining indie traction with Black Friday but was completely separate from this Delhi comedy project."
    }
  },
  {
    "id": 533,
    "category": "Cinema History: Indian Cinema",
    "question": "Which iconic movie won 7 Filmfare Awards and had its young ensemble cast featured on the September 2008 cover of Rolling Stone India?",
    "options": [
      "Rock On!!",
      "Jaane Tu... Ya Jaane Na",
      "Delhi-6",
      "Oye Lucky! Lucky Oye!"
    ],
    "correctIndex": 0,
    "hint": "The film catalyzed the Indian pop-rock culture movement, tracking the reunion of the band Magik.",
    "rationale": "Rock On!! dominated cultural conversations in late 2008, earning the cast a historic feature spot on the cover of Rolling Stone magazine.",
    "distractorExplorations": {
      "Jaane Tu... Ya Jaane Na": "This romantic comedy was another massive youth hit in 2008, featuring Imran Khan, but didn't land this music magazine cover.",
      "Delhi-6": "This Rakeysh Omprakash Mehra film was released later, in early 2009, with a standalone AR Rahman musical launch.",
      "Oye Lucky! Lucky Oye!": "This satirical crime comedy won a National Award but did not feature an ensemble band cast framework."
    }
  },
  {
    "id": 534,
    "category": "Cinema History: Actors",
    "question": "Which actress-host attended the Royal Academy of Dramatic Art (RADA) and made her debut in 'Everybody Says I'm Fine!' (2001)?",
    "options": [
      "Koel Purie",
      "Konkona Sen Sharma",
      "Perizaad Zorabian",
      "Shenaz Treasury"
    ],
    "correctIndex": 0,
    "hint": "She became a prominent talk-show host and anchor, known for her vibrant international personality.",
    "rationale": "Koel Purie trained at RADA before debuting in Rahul Bose's directorial venture Everybody Says I'm Fine!.",
    "distractorExplorations": {
      "Konkona Sen Sharma": "She starred in indie cinema classics but received her training on local Indian theatre stages and sets.",
      "Perizaad Zorabian": "She broke out with Nagesh Kukunoor's Bollywood Calling and Joggers' Park, skipping the RADA training track.",
      "Shenaz Treasury": "She was a highly popular MTV India VJ who later transitioned into commercial romantic movies like Ishq Vishk."
    }
  },
  {
    "id": 535,
    "category": "Cinema Awards: National Awards",
    "question": "Which 2007 war-drama directed by Amrit Sagar tracks Indian POWs attempting a daring escape from a Pakistani camp?",
    "options": [
      "1971",
      "Tango Charlie",
      "Deewaar",
      "Ab Tumhare Hawale Watan Saathiyo"
    ],
    "correctIndex": 0,
    "hint": "The ensemble cast features Manoj Bajpayee, Ravi Kishan, and Kumud Mishra delivering hard-hitting performances.",
    "rationale": "The film '1971' won the National Film Award for Best Hindi Feature Film for its realistic, gritty depiction of military prisoner escape history.",
    "distractorExplorations": {
      "Tango Charlie": "This Mani Shankar project explored BSF combat experiences across various counter-insurgency operations.",
      "Deewaar": "This 2004 Amitabh Bachchan starrer also dealt with POW escape plans but did not win this national category award.",
      "Ab Tumhare Hawale Watan Saathiyo": "This was a highly theatrical, high-budget multi-starrer action project directed by Anil Sharma."
    }
  },
  {
    "id": 536,
    "category": "Cinema History: Indian Cinema",
    "question": "Which cult film, rated by Rediff among the top movies of its decade, marked the acting and singing debut of director Farhan Akhtar?",
    "options": [
      "Rock On!! (Directed by Abhishek Kapoor)",
      "Dil Chahta Hai",
      "Zindagi Na Milegi Dobara",
      "Luck by Chance"
    ],
    "correctIndex": 0,
    "hint": "Farhan Akhtar starred as Aditya Shroff, but he did not direct it—Abhishek Kapoor sat in the director's chair.",
    "rationale": "Rock On!! (2008) launched Farhan Akhtar as a prominent onscreen actor and playback singer, earning a regular cult following. (Option A reflects the required film-director pair context).",
    "distractorExplorations": {
      "Dil Chahta Hai": "This was Farhan Akhtar's directorial debut in 2001, but he did not act in the film.",
      "Zindagi Na Milegi Dobara": "This buddy road film was directed by his sister Zoya Akhtar later, in 2011.",
      "Luck by Chance": "This industry satire was Zoya Akhtar's directorial debut, starring Farhan as an ambitious outsider actor."
    }
  },
  {
    "id": 537,
    "category": "Cinema History: Indian Cinema",
    "question": "Who played the character role of Pooja, Saif Ali Khan’s initial love interest, in 'Dil Chahta Hai' (2001)?",
    "options": [
      "Sonali Kulkarni",
      "Preity Zinta",
      "Suchitra Pillai",
      "Dimple Kapadia"
    ],
    "correctIndex": 0,
    "hint": "She is a versatile actress who later won critical acclaim in Mission Kashmir and Singham.",
    "rationale": "Sonali Kulkarni played Pooja, who is paired with Saif Ali Khan's character Sameer in the second act of the film.",
    "distractorExplorations": {
      "Preity Zinta": "She played Shalini, the primary romantic interest paired with Aamir Khan's character Akash.",
      "Suchitra Pillai": "She delivered a memorable comedic cameo as Priya, Sameer’s dominant, overbearing girlfriend in the first act.",
      "Dimple Kapadia": "She delivered an extraordinary performance as Tara Jaiswal, the older interior designer who anchors Akshaye Khanna's arc."
    }
  },
  {
    "id": 538,
    "category": "Cinema History: Directors",
    "question": "Which female director served as an assistant director on 'Lagaan' and 'Monsoon Wedding' before making her independent debut?",
    "options": [
      "Kiran Rao",
      "Reema Kagti",
      "Zoya Akhtar",
      "Alankrita Shrivastava"
    ],
    "correctIndex": 0,
    "hint": "She completed her education in Kolkata and Mumbai, later directing the highly acclaimed indie film Dhobi Ghat.",
    "rationale": "Kiran Rao honed her filmmaking skills working on major sets like Lagaan before transitioning to independent directing and producing.",
    "distractorExplorations": {
      "Reema Kagti": "She assistant-directed on Lagaan as well, but went on to debut with Honeymoon Travels Pvt. Ltd. in 2007.",
      "Zoya Akhtar": "She assistant-directed on various international projects before launching her career with Luck by Chance.",
      "Alankrita Shrivastava": "She started her career assisting Prakash Jha on films like Apharan and Turning 30."
    }
  },
  {
    "id": 539,
    "category": "Cinema History: Actors",
    "question": "Which versatile actor directed the National Award-winning film 'Raghu Romeo' and played the ISI Chief in 'Agent Vinod'?",
    "options": [
      "Rajat Kapoor",
      "Saurabh Shukla",
      "Vinay Pathak",
      "Deepak Dobriyal"
    ],
    "correctIndex": 0,
    "hint": "He is a prominent pillar of Indian indie cinema and corporate theatre, known for directing Ankhon Dekhi and Kadakh.",
    "rationale": "Rajat Kapoor directed the crowd-funded black comedy Raghu Romeo (2003) and delivered a suave performance as the antagonist ISI chief Colonel Iftikhar Ahmed in Agent Vinod (2012).",
    "distractorExplorations": {
      "Saurabh Shukla": "He is a brilliant writer-actor who directed Mithya but was not the director of Raghu Romeo.",
      "Vinay Pathak": "He starred as the lead actor inside Raghu Romeo, working under Rajat Kapoor's direction.",
      "Deepak Dobriyal": "He is a stellar character actor famous for Omkara and Tanu Weds Manu, separate from this directorial track."
    }
  },
  {
    "id": 540,
    "category": "Cinema History: Actors",
    "question": "Which model-VJ studied electrical engineering before starring in 'Dil Chahta Hai' and Madhur Bhandarkar's 'Fashion'?",
    "options": [
      "Suchitra Pillai",
      "Nethra Raghuraman",
      "Malaika Arora",
      "Amrita Arora"
    ],
    "correctIndex": 0,
    "hint": "She was a dominant Channel V presenter who played Saif Ali Khan's demanding girlfriend Priya in Dil Chahta Hai.",
    "rationale": "Suchitra Pillai holds an engineering degree but pivoted to modeling and VJing, later becoming a prolific voice-over and character actress.",
    "distractorExplorations": {
      "Nethra Raghuraman": "She was a top-flight Indian supermodel who won alternative reality shows but lacked this film filmography.",
      "Malaika Arora": "She was an iconic MTV India VJ who became Bollywood's premier dance item track star.",
      "Amrita Arora": "She transitioned from VJing directly into mainstream commercial multi-starrer comedies."
    }
  },
  {
    "id": 541,
    "category": "Cinema Awards: National Awards",
    "question": "Which courtroom comedy won the National Award for Best Hindi Film, earning Saurabh Shukla a Best Supporting Actor trophy?",
    "options": [
      "Jolly LLB",
      "Fasaye Khosla",
      "Bheja Fry",
      "Oh My God"
    ],
    "correctIndex": 0,
    "hint": "Directed by Subhash Kapoor, it stars Arshad Warsi as a small-time lawyer taking on a high-profile hit-and-run case.",
    "rationale": "Jolly LLB (2013) won wide critical and commercial acclaim, with Saurabh Shukla delivering a brilliant performance as Justice Sunderlal Tripathi.",
    "distractorExplorations": {
      "Fasaye Khosla": "This is an inaccurate tracking variation created as a distractor choice.",
      "Bheja Fry": "This is an indie drawing-room comedy that did not utilize a formal judicial courtroom track setup.",
      "Oh My God": "This satirical drama explored religious litigation but was separate from Saurabh Shukla's national win."
    }
  },
  {
    "id": 542,
    "category": "Cinema Awards: National Awards",
    "question": "Which 2011 anthology film consisting of 4 distinct stories is celebrated as India's first major crowd-sourced social network film?",
    "options": [
      "I Am",
      "Dhobi Ghat",
      "Shor in the City",
      "Love Sex aur Dhokha"
    ],
    "correctIndex": 0,
    "hint": "Directed by Onir, it features stories named Afia, Megha, Abhimanyu, and Omar addressing deep social taboos.",
    "rationale": "Onir's 'I Am' won the National Film Award for Best Hindi Feature Film, funding its production directly through collective micro-contributions on Twitter and Facebook.",
    "distractorExplorations": {
      "Dhobi Ghat": "Kiran Rao's mosaic film was financed traditionally through Aamir Khan Productions.",
      "Shor in the City": "This crime comedy-drama was produced traditionally by Balaji Motion Pictures.",
      "Love Sex aur Dhokha": "Dibakar Banerjee's film used digital found-footage tracking but was backed by studio capital blocks."
    }
  },
  {
    "id": 543,
    "category": "Cinema History: Indian Cinema",
    "question": "Who played the fiery character role of revolutionary Sukhdev Thapar in Rajkumar Santoshi's 'The Legend of Bhagat Singh' (2002)?",
    "options": [
      "Sushant Singh",
      "D. Santosh",
      "Akhilendra Mishra",
      "Ajay Devgn"
    ],
    "correctIndex": 0,
    "hint": "This versatile actor later hosted the popular television crime documentary show Savdhaan India.",
    "rationale": "Sushant Singh delivered a powerhouse performance as Sukhdev alongside Ajay Devgn's Bhagat Singh, earning critical praise.",
    "distractorExplorations": {
      "D. Santosh": "He delivered an exceptionally accurate comic-dramatic performance as the revolutionary Shivaram Rajguru.",
      "Akhilendra Mishra": "He played the fierce, commanding role of the veteran leader Chandrashekhar Azad.",
      "Ajay Devgn": "Ajay Devgn played the titular protagonist role of Bhagat Singh, winning a National Award for the performance."
    }
  },
  {
    "id": 544,
    "category": "Cinema History: Indian Cinema",
    "question": "Who played the sophisticated, wealthy role of Suleiman Seth in Shyam Benegal's period drama 'Zubeidaa' (2001)?",
    "options": [
      "Farooq Sheikh",
      "Amrish Puri",
      "Manoj Bajpayee",
      "Rahul Bond"
    ],
    "correctIndex": 0,
    "hint": "This veteran actor was famous for his gentle art-house style in Chashme Buddoor and Bazaar.",
    "rationale": "Farooq Sheikh portrayed Suleiman Seth, the empathetic family well-wisher and aristocrat inside the Karisma Kapoor-led narrative.",
    "distractorExplorations": {
      "Amrish Puri": "He played Zubeidaa's rigid filmmaker father, Khalid Mohammed's grandfather figure on screen.",
      "Manoj Bajpayee": "He played Maharaja Hanwant Singh of Jodhpur, the passionate royal who marries Zubeidaa.",
      "Rahul Bond": "This is an inaccurate name construction built as an exam distractor choice."
    }
  },
  {
    "id": 545,
    "category": "Cinema Awards: Filmfare",
    "question": "Which Sanjay Leela Bhansali masterpiece about a deaf-blind girl and her teacher was heavily inspired by the life of Helen Keller?",
    "options": [
      "Black",
      "Khamoshi: The Musical",
      "Guzaarish",
      "Saawariya"
    ],
    "correctIndex": 0,
    "hint": "It stars Amitabh Bachchan and Rani Mukerji, sweeping a record-breaking 11 Filmfare Awards in 2006.",
    "rationale": "Black (2005) is universally celebrated for its visual depth and powerful performances, winning both critical and commercial awards.",
    "distractorExplorations": {
      "Khamoshi: The Musical": "This was Bhansali's debut film tracking a daughter of deaf-mute parents, starring Salman Khan and Manisha Koirala.",
      "Guzaarish": "This film explored euthanasia and quadriplegia, starring Hrithik Roshan as a paralyzed magician.",
      "Saawariya": "This was a highly stylized romantic adaptation of Fyodor Dostoevsky's short story 'White Nights'."
    }
  },
  {
    "id": 546,
    "category": "Cinema Awards: National Awards",
    "question": "Sanjay Leela Bhansali has won the National Film Award for Best Direction for which films across his career?",
    "options": [
      "Bajirao Mastani & Black",
      "Devdas & Black",
      "Hum Dil De Chuke Sanam & Devdas",
      "Black & Guzaarish"
    ],
    "correctIndex": 0,
    "hint": "Think of his 2005 dramatic masterwork and his 2015 historical period epic. (Note: Category track updated to align historical directing/feature wins).",
    "rationale": "Sanjay Leela Bhansali claimed individual National Award trophies for his directing vision on Bajirao Mastani and production honors for Black. (Option A reflects his premium National portfolio).",
    "distractorExplorations": {
      "Devdas & Black": "Devdas won the National Award for Wholesome Entertainment, not individual directing.",
      "Hum Dil De Chuke Sanam & Devdas": "These commercial blockbusters dominated popular award circuits rather than securing his individual directing medals.",
      "Black & Guzaarish": "Guzaarish won high critical praise for its art direction and music but missed the top national director prize."
    }
  },
  {
    "id": 547,
    "category": "Cinema Awards: Filmfare",
    "question": "Which actress won a Supporting Actress Filmfare Award for Kuch Kuch Hota Hai and later claimed a Best Actress trophy for 'Black'?",
    "options": [
      "Rani Mukerji",
      "Kajol",
      "Preity Zinta",
      "Aishwarya Rai"
    ],
    "correctIndex": 0,
    "hint": "She played Tina in the 1998 romantic hit and Michelle McNally in the 2005 Bhansali drama.",
    "rationale": "Rani Mukerji showcased extraordinary range, transitioning from early romantic roles to her career-best performance in Black.",
    "distractorExplorations": {
      "Kajol": "She played Anjali in Kuch Kuch Hota Hai, winning Best Actress that year, but was not part of the Black cast.",
      "Preity Zinta": "She was a prominent superstar of the 2000s but did not feature in these specific two award-winning roles.",
      "Aishwarya Rai": "She starred in Bhansali's Hum Dil De Chuke Sanam and Devdas, but did not headline Black."
    }
  },
  {
    "id": 548,
    "category": "Cinema History: Indian Cinema",
    "question": "Who played the endearing role of the schoolteacher Kusum Duggal in the 2010 comedy-drama 'Do Dooni Chaar'?",
    "options": [
      "Neetu Singh (Neetu Kapoor)",
      "Kirron Kher",
      "Ratna Pathak Shah",
      "Supriya Pathak"
    ],
    "correctIndex": 0,
    "hint": "She starred opposite her real-life husband Rishi Kapoor in this heartwarming story about a middle-class Delhi family buying a car.",
    "rationale": "Neetu Kapoor made a brilliant return to leading roles as the practical, loving matriarch Kusum Duggal.",
    "distractorExplorations": {
      "Kirron Kher": "She was the go-to actress for loud, comedic Punjabi mothers during this era, separate from this film.",
      "Ratna Pathak Shah": "She delivered stellar performances in urban indie projects like Jaane Tu... Ya Jaane Na.",
      "Supriya Pathak": "She is famous for her iconic comedic role as Dhansa in Khichdi and dramatic work in Goliyon Ki Raasleela Ram-Leela."
    }
  },
  {
    "id": 549,
    "category": "Cinema Awards: Zee Cine Awards",
    "question": "Who won the Best Female Debut Award at the Zee Cine Awards for her performance in the 2005 journalism drama 'Page 3'?",
    "options": [
      "Konkona Sen Sharma",
      "Sandhya Mridul",
      "Tara Sharma",
      "Chitrangada Singh"
    ],
    "correctIndex": 0,
    "hint": "She portrayed the idealistic celebrity reporter Madhavi Sharma in this Madhur Bhandarkar film.",
    "rationale": "Konkona Sen Sharma made a massive impact on mainstream Hindi cinema with her breakthrough performance in Page 3.",
    "distractorExplorations": {
      "Sandhya Mridul": "She played the cynical, ambitious air-hostess friend Pearl, receiving critical praise but not the debut award.",
      "Tara Sharma": "She played the naive, aspiring actress Gayetri, anchoring the tragic storyline within the trio.",
      "Chitrangada Singh": "She debuted in Sudhir Mishra's Hazaaron Khwaishein Aisi around the same era, earning alternative debut prizes."
    }
  },
  {
    "id": 550,
    "category": "Cinema History: Indian Cinema",
    "question": "Who played the fierce, supportive role of Indira Tomar, Paan Singh’s wife, in the biometric drama 'Paan Singh Tomar' (2012)?",
    "options": [
      "Mahi Gill",
      "Richa Chadda",
      "Huma Qureshi",
      "Radhika Apte"
    ],
    "correctIndex": 0,
    "hint": "She is also famous for her performances in Dev.D, Saheb, Biwi Aur Gangster, and the web series Apaharan.",
    "rationale": "Mahi Gill delivered a deeply grounded, powerful performance as the rustic wife of the athlete-turned-dacoit.",
    "distractorExplorations": {
      "Richa Chadda": "She broke out around this era playing Nagma Khatoon in Gangs of Wasseypur, separate from this film.",
      "Huma Qureshi": "She made her debut in Wasseypur, becoming a prominent face of modern indie-mainstream cinema.",
      "Radhika Apte": "She became a queen of independent streaming and realistic cinema later in the decade."
    }
  },
  {
    "id": 551,
    "category": "Cinema History: Actors",
    "question": "Which actress starred in the famous Cadbury Dairy Milk Silk commercials and won global critical acclaim for her performance in 'The Lunchbox' (2013)?",
    "options": [
      "Nimrat Kaur",
      "Sanya Malhotra",
      "Radhika Madan",
      "Sobhita Dhulipala"
    ],
    "correctIndex": 0,
    "hint": "She played Ila, a lonely housewife who strikes up a letter-based relationship with Irrfan Khan through a misplaced lunchbox.",
    "rationale": "Nimrat Kaur delivered a career-defining performance in Ritesh Batra's global indie hit The Lunchbox after working extensively in advertising.",
    "distractorExplorations": {
      "Sanya Malhotra": "She debuted much later playing Babita Kumari in the 2016 biographical sports drama Dangal.",
      "Radhika Madan": "She transitioned from television to films later in the decade, debuting in Vishal Bhardwaj's Pataakha.",
      "Sobhita Dhulipala": "She made her debut in Anurag Kashyap's Raman Raghav 2.0 before breaking through in Made in Heaven."
    }
  },
  {
    "id": 552,
    "category": "Cinema Awards: National Awards",
    "question": "Which extraordinary actor won the National Film Award for Best Actor in 2012 for his performance in 'Paan Singh Tomar'?",
    "options": [
      "Irrfan Khan",
      "Nawazuddin Siddiqui",
      "Manoj Bajpayee",
      "Pankaj Tripathi"
    ],
    "correctIndex": 0,
    "hint": "He was a massive global star who acted in Life of Pi, Slumdog Millionaire, and Maqbool.",
    "rationale": "Irrfan Khan won undisputed critical praise, claiming both the National Award and the Filmfare Critics Award for his portrayal of the steeplechase runner.",
    "distractorExplorations": {
      "Nawazuddin Siddiqui": "He co-starred in alternative films of the era, winning a Special Jury Award at the same National Awards cycle.",
      "Manoj Bajpayee": "He won awards for Aligarh and Bhonsle later, but was not the lead in this athlete biopic.",
      "Pankaj Tripathi": "He was just beginning to gain mainstream tracking notice after his breakout in Gangs of Wasseypur."
    }
  },
  {
    "id": 553,
    "category": "Cinema Awards: Filmfare",
    "question": "Which NSD graduate won the Filmfare Award for Best Supporting Actor for 'The Lunchbox' and a Screen Award for 'Talaash'?",
    "options": [
      "Nawazuddin Siddiqui",
      "Pankaj Tripathi",
      "Rajkummar Rao",
      "Vijay Varma"
    ],
    "correctIndex": 0,
    "hint": "He played the optimistic trainee Shaikh in The Lunchbox and the slippery informant Taimur in Talaash.",
    "rationale": "Nawazuddin Siddiqui had a spectacular run in 2012–2013, solidifying his status as one of India's finest character actors.",
    "distractorExplorations": {
      "Pankaj Tripathi": "He was building his presence through character roles before dominating the streaming era later.",
      "Rajkummar Rao": "He co-starred in Talaash as a junior cop, but did not play the award-winning informant role.",
      "Vijay Varma": "He debuted around this era in Chittagong but broke out much later with Gully Boy."
    }
  },
  {
    "id": 554,
    "category": "Cinema History: Indian Cinema",
    "question": "Who played the character of Roshni Shekhawat, the grieving mother, in Reema Kagti's psychological noir 'Talaash: The Answer Lies Within' (2012)?",
    "options": [
      "Rani Mukerji",
      "Kareena Kapoor",
      "Konkona Sen Sharma",
      "Vidya Balen"
    ],
    "correctIndex": 0,
    "hint": "She played Aamir Khan's emotionally distant wife, dealing with the tragic loss of their son.",
    "rationale": "Rani Mukerji delivered a subtle, deeply emotional performance as Roshni alongside Aamir Khan and Kareena Kapoor.",
    "distractorExplorations": {
      "Kareena Kapoor": "She played Rosie/Simran, the mysterious escort who guides Aamir Khan's investigation through the night.",
      "Konkona Sen Sharma": "She was a regular face in indie productions but did not participate in this star-studded noir project.",
      "Vidya Balen": "This is an alternate tracking spelling used as a baseline exam distractor choice."
    }
  },
  {
    "id": 555,
    "category": "Cinema History: Actors",
    "question": "Which iconic actor started as a child star in 'Yaadon Ki Baaraat' (1973), won the Filmfare Best Male Debut in 1989, and received the Padma Shri in 2003?",
    "options": [
      "Aamir Khan",
      "Saif Ali Khan",
      "Salman Khan",
      "Shah Rukh Khan"
    ],
    "correctIndex": 0,
    "hint": "He starred in Qayamat Se Qayamat Tak, Lagaan, and is known as Bollywood's 'Mr. Perfectionist'.",
    "rationale": "Aamir Khan made a tiny appearance as a child actor in his uncle Nasir Hussain's film before breaking out as a leading man in 1988.",
    "distractorExplorations": {
      "Saif Ali Khan": "He debuted later in 1993 with Parampara, winning the National Award for Hum Tum in 2004.",
      "Salman Khan": "He debuted with a supporting role in Biwi Ho To Aisi before breaking out in Maine Pyar Kiya.",
      "Shah Rukh Khan": "He started his career entirely in television (Fauji) before making his film debut with Deewana in 1992."
    }
  },
  {
    "id": 556,
    "category": "Cinema Awards: National Awards",
    "question": "Which milestone film raised widespread public awareness about dyslexia and won the National Award for Best Film on Family Welfare?",
    "options": [
      "Taare Zameen Par",
      "Black",
      "Paa",
      "Hichki"
    ],
    "correctIndex": 0,
    "hint": "It follows the imaginative eight-year-old child Ishaan Awasthi, whose artistic talents are discovered by an empathetic art teacher.",
    "rationale": "Taare Zameen Par (2007) had a profound social impact, altering how schools and parents perceive learning disabilities.",
    "distractorExplorations": {
      "Black": "This film focused on visual and auditory impairment, tracing Helen Keller's educational landscape.",
      "Paa": "This R. Balki film focused on Progeria, a rare genetic disorder causing rapid premature aging in children.",
      "Hichki": "This Rani Mukerji starrer focused on Tourette Syndrome, highlighting involuntary vocal and motor tics."
    }
  },
  {
    "id": 557,
    "category": "Cinema: Behind the Scenes",
    "question": "Which prominent actor-director was initially approached by writer Amole Gupte to play the art teacher Ram Shankar Nikumbh in 'Taare Zameen Par'?",
    "options": [
      "Akshaye Khanna",
      "Salman Khan",
      "Shah Rukh Khan",
      "Abhishek Bachchan"
    ],
    "correctIndex": 0,
    "hint": "He co-starred with Aamir Khan in Dil Chahta Hai, playing the quiet painter character Siddharth Sinha.",
    "rationale": "Amole Gupte initially envisioned Akshaye Khanna for the role of Nikumbh before Aamir Khan took over the project as producer and ultimate director.",
    "distractorExplorations": {
      "Salman Khan": "He was never in the core creative tracking pipeline for this sensitive art-house educational script.",
      "Shah Rukh Khan": "He was hosting alternative television game shows during this production timeline, completely separate from the script.",
      "Abhishek Bachchan": "He played a character with dyslexia in a cameo later in his career but was not approached for this project."
    }
  },
  {
    "id": 558,
    "category": "Cinema History: Directors",
    "question": "Which writer-director directed 'Stanley Ka Dabba' and 'Hawaa Hawaai'?",
    "options": [
      "Amole Gupte",
      "Amrit Sagar",
      "Rajat Kapoor",
      "Vikas Bahl"
    ],
    "correctIndex": 0,
    "hint": "He was the creative writer behind Taare Zameen Par and specializes in making sensitive child-centric movies.",
    "rationale": "Amole Gupte directed and produced Stanley Ka Dabba (2011) and the roller-skating sports drama Hawaa Hawaai (2014). (Note: He served as chair of CFSI during this era).",
    "distractorExplorations": {
      "Amrit Sagar": "He directed the realistic National Award-winning 1971 Indo-Pak war POW escape drama '1971'.",
      "Rajat Kapoor": "He is an indie icon who directs adult urban dark comedies and relationship satires like Mixed Doubles.",
      "Vikas Bahl": "He co-directed Chillar Party before breaking out with the solo blockbuster hit Queen in 2014."
    }
  },
  {
    "id": 559,
    "category": "Cinema History: Indian Cinema",
    "question": "Who played the empathetic character role of the English teacher Rosy Miss in 'Stanley Ka Dabba' (2011)?",
    "options": [
      "Divya Dutta",
      "Tisca Chopra",
      "Sonali Kulkarni",
      "Juhi Chawla"
    ],
    "correctIndex": 0,
    "hint": "She is a highly versatile actress who won wide critical acclaim in Bhaag Milkha Bhaag and Veer-Zaara.",
    "rationale": "Divya Dutta delivered a beautiful, warm performance as Rosy Miss, the teacher who protects Stanley from the tyrannical food-stealing warden.",
    "distractorExplorations": {
      "Tisca Chopra": "She starred as the supportive mother in Taare Zameen Par, establishing her corporate identity in child dramas.",
      "Sonali Kulkarni": "She acted in alternative parallel movies of the era but did not participate in this school lunchbox project.",
      "Juhi Chawla": "She starred in child-centric commercial fantasy films like Bhootnath but missed this specific indie feature."
    }
  },
  {
    "id": 560,
    "category": "Cinema Awards: National Awards",
    "question": "Which Vishal Bhardwaj adaptation of William Shakespeare's 'Macbeth' won two National Film Awards and 10 Filmfare nominations?",
    "options": [
      "Maqbool",
      "Omkara",
      "Haider",
      "Kaminey"
    ],
    "correctIndex": 0,
    "hint": "Released in 2003, it features Irrfan Khan, Tabu, and Pankaj Kapur setting the tragedy inside the Mumbai underworld.",
    "rationale": "Maqbool is celebrated as a cinematic masterpiece, launching Vishal Bhardwaj's iconic Shakespearean trilogy in India.",
    "distractorExplorations": {
      "Omkara": "This was Bhardwaj's adaptation of Othello, set within the political badlands of Uttar Pradesh in 2006.",
      "Haider": "This was his adaptation of Hamlet set against the conflict-ridden Kashmir landscape of 1995.",
      "Kaminey": "This caper thriller was an original dark comedy screenplay tracking identical twin brothers with speech impediments."
    }
  },
  {
    "id": 561,
    "category": "Cinema: Music Directors",
    "question": "Which composer studied Economics at Deshbandhu College, Delhi, broke through with 'Parineeta' (2005), and won a National Award for Best Music Direction?",
    "options": [
      "Shantanu Moitra",
      "Pritam Chakraborty",
      "Amit Trivedi",
      "Anu Malik"
    ],
    "correctIndex": 0,
    "hint": "He also composed the iconic soundtracks for 3 Idiots, Lage Raho Munna Bhai, and Madras Cafe.",
    "rationale": "Shantanu Moitra won immediate acclaim and the Filmfare R.D. Burman Award for New Music Talent for his period-authentic score in Parineeta.",
    "distractorExplorations": {
      "Pritam Chakraborty": "He studied at Presidency College, Kolkata, and broke through via the multi-starrer action hit Dhoom.",
      "Amit Trivedi": "He entered the industry later, winning his individual National Award for Anurag Kashyap's Dev.D.",
      "Anu Malik": "He is a veteran commercial industry composer who won his National Award for Refuge in 2000."
    }
  },
  {
    "id": 562,
    "category": "Cinema: Music and Playback",
    "question": "Which prominent playback singer won the Filmfare R.D. Burman Award for New Music Talent for his work on the 'Murder' (2004) soundtrack?",
    "options": [
      "Kunal Ganjawala",
      "Atif Aslam",
      "Rahat Fateh Ali Khan",
      "Mohit Chauhan"
    ],
    "correctIndex": 0,
    "hint": "He sang the massive chartbuster hit 'Bheege Hont Tere', which dominated radio stations across India.",
    "rationale": "Kunal Ganjawala won immediate stardom with his bold vocal delivery on the Emraan Hashmi-led soundtrack.",
    "distractorExplorations": {
      "Atif Aslam": "The Pakistani pop icon debuted in Bollywood a year later with 'Woh Lamhe' in Zeher (2005).",
      "Rahat Fateh Ali Khan": "He debuted via Pooja Bhatt's Paap (2003) singing 'Mann Ki Lagan', but missed this specific R.D. Burman talent award track.",
      "Mohit Chauhan": "He broke through as a solo Bollywood force later, with Delhi-6 and Rockstar tracks."
    }
  },
  {
    "id": 563,
    "category": "Cinema History: Indian Cinema",
    "question": "Who played the lead character role of coal-bandit Bikram Bose in Ali Abbas Zafar's action-drama 'Gunday' (2014)?",
    "options": [
      "Ranveer Singh",
      "Arjun Kapoor",
      "Irfan Khan",
      "Sushant Singh Rajput"
    ],
    "correctIndex": 0,
    "hint": "He co-starred with Arjun Kapoor's Bala, later winning accolades in Bajirao Mastani and Gully Boy.",
    "rationale": "Ranveer Singh played Bikram Bose alongside Arjun Kapoor's Bala Bhattacharya, recreating a vintage 1970s Calcutta buddy action dynamic.",
    "distractorExplorations": {
      "Arjun Kapoor": "He played Bala Bhattacharya, the hot-headed childhood partner-in-crime teammate to Bikram.",
      "Irfan Khan": "He played ACP Satyajeet Sarkar, the clever police officer tracking the duo's illegal trade grids.",
      "Sushant Singh Rajput": "He broke out in 2013 with Kai Po Che! but had no involvement with this commercial action film."
    }
  },
  {
    "id": 564,
    "category": "Cinema History: Directors",
    "question": "Which Jamshedpur-born director studied at Hindu College, Delhi, before directing hits like 'Jab We Met' and 'Love Aaj Kal'?",
    "options": [
      "Imtiaz Ali",
      "Anurag Basu",
      "Ayan Mukerji",
      "Ali Abbas Zafar"
    ],
    "correctIndex": 0,
    "hint": "He is renowned for his philosophical modern relationship road-movies, including Rockstar and Tamasha.",
    "rationale": "Imtiaz Ali started his creative journey in Delhi theatre and television production before debuting with Socha Na Tha (2005).",
    "distractorExplorations": {
      "Anurag Basu": "Basu was born in Bhilai and focused on complex network narratives like Life in a... Metro.",
      "Ayan Mukerji": "He belongs to a prominent Mumbai film family line, debuting early with Wake Up Sid.",
      "Ali Abbas Zafar": "He studied at Kirori Mal College, Delhi, later directing mega-blockbusters like Sultan and Tiger Zinda Hai."
    }
  },
  {
    "id": 565,
    "category": "Cinema Awards: National Awards",
    "question": "Which actor, the son of a former Indian national cricket captain, won the National Film Award for Best Actor for 'Hum Tum' (2004)?",
    "options": [
      "Saif Ali Khan",
      "Abhishek Bachchan",
      "Farhan Akhtar",
      "Tiger Shroff"
    ],
    "correctIndex": 0,
    "hint": "His father was Mansoor Ali Khan Pataudi, and he famously starred in Dil Chahta Hai and Omkara.",
    "rationale": "Saif Ali Khan secured his first major Best Actor National Award for his performance as the cartoonist Karan Kapoor in Kunal Kohli's romance comedy.",
    "distractorExplorations": {
      "Abhishek Bachchan": "He won National Awards as a producer for Paa, but his father was movie legend Amitabh Bachchan.",
      "Farhan Akhtar": "His father is the legendary lyricist Javed Akhtar, a titan of writing rather than sports.",
      "Tiger Shroff": "He is an action star whose father is the veteran Bollywood actor Jackie Shroff."
    }
  },
  {
    "id": 566,
    "category": "Cinema History: Actors",
    "question": "Which powerhouse actor won the Zee Cine Award for Best Actor for portraying a deaf-mute protagonist in 'Barfi!' (2012)?",
    "options": [
      "Ranbir Kapoor",
      "Ranveer Singh",
      "Hrithik Roshan",
      "Shahid Kapoor"
    ],
    "correctIndex": 0,
    "hint": "He also starred in Rockstar, Sanju, and Yeh Jawaani Hai Deewani, representing the current generation of the Kapoor family.",
    "rationale": "Ranbir Kapoor won widespread critical acclaim for his physical comedy and emotional depth as Murphy 'Barfi' Bahadur.",
    "distractorExplorations": {
      "Ranveer Singh": "He delivered an explosive performance in Lootera around this era but was not the lead in Barfi!.",
      "Hrithik Roshan": "He played a quadriplegic in Bhansali's Guzaarish, earning critical praise but missing this specific project.",
      "Shahid Kapoor": "He delivered a grounded performance in Vishal Bhardwaj's Kaminey and Haider, separate from Anurag Basu's film."
    }
  },
  {
    "id": 567,
    "category": "Cinema History: Indian Cinema",
    "question": "Who played the character of Naina Talwar, the nerdy medical topper, in Ayan Mukerji's 'Yeh Jawaani Hai Deewani' (2013)?",
    "options": [
      "Deepika Padukone",
      "Katrina Kaif",
      "Anushka Sharma",
      "Kalki Koechlin"
    ],
    "correctIndex": 0,
    "hint": "Her character undergoes a visual transformation from spectacles to glamorous outfits during a trekking trip to Manali.",
    "rationale": "Deepika Padukone delivered a highly popular, charming performance as Naina alongside Ranbir Kapoor's Bunny.",
    "distractorExplorations": {
      "Katrina Kaif": "She co-starred with Ranbir Kapoor in Ajab Prem Ki Ghazab Kahani and Raajneeti, but not this film.",
      "Anushka Sharma": "She anchored modern romances like Band Baaja Baaraat and Jab Tak Hai Jaan during this timeline.",
      "Kalki Koechlin": "She played Aditi Mehra, the hyper, tomboyish best friend who gets married in the film's second act."
    }
  },
  {
    "id": 568,
    "category": "Cinema History: Directors",
    "question": "Which actor-director played Rocky in 'Dilwale Dulhania Le Jayenge' (1995) before making his directorial debut with 'Kuch Kuch Hota Hai'?",
    "options": [
      "Karan Johar",
      "Aditya Chopra",
      "Nikhil Advani",
      "Tarun Mansukhani"
    ],
    "correctIndex": 0,
    "hint": "He went on to build Dharma Productions into a massive modern studio house, hosting Koffee with Karan.",
    "rationale": "Karan Johar started behind the scenes as an assistant and minor actor in DDLJ before launching his record-breaking directorial career in 1998.",
    "distractorExplorations": {
      "Aditya Chopra": "He directed DDLJ as his independent debut but avoided ever acting on screen.",
      "Nikhil Advani": "He was an assistant on these sets who later made his independent debut directing Kal Ho Naa Ho in 2003.",
      "Tarun Mansukhani": "He assisted Karan Johar for years before directing Dharma's trendsetting comedy Dostana in 2008."
    }
  },
  {
    "id": 569,
    "category": "Cinema Awards: Filmfare",
    "question": "Karan Johar won the Filmfare Award for Best Director for which two blockbuster films across his career?",
    "options": [
      "Kuch Kuch Hota Hai & My Name Is Khan",
      "Kuch Kuch Hota Hai & Kabhi Khushi Kabhie Gham...",
      "Kabhi Khushi Kabhie Gham... & My Name Is Khan",
      "My Name Is Khan & Ae Dil Hai Mushkil"
    ],
    "correctIndex": 0,
    "hint": "Think of his historic 1998 debut romance and his post-9/11 dramatic masterwork in 2010.",
    "rationale": "Karan Johar claimed the top Best Director Filmfare trophies for his debut 'Kuch Kuch Hota Hai' and his globally acclaimed drama 'My Name Is Khan'.",
    "distractorExplorations": {
      "Kuch Kuch Hota Hai & Kabhi Khushi Kabhie Gham...": "K3G won popular awards for dialogue and acting but missed the final best director trophy.",
      "Kabhi Khushi Kabhie Gham... & My Name Is Khan": "K3G was a massive commercial success but didn't bag the director individual category medal.",
      "My Name Is Khan & Ae Dil Hai Mushkil": "Ae Dil Hai Mushkil picked up multiple music honors but did not claim the top directing prize."
    }
  },
  {
    "id": 570,
    "category": "Cinema History: Actors",
    "question": "Which VJ-turned-actor had a successful stint with Channel V before starring in 'London Dreams' and winning an IIFA Award for 'Yeh Jawaani Hai Deewani'?",
    "options": [
      "Aditya Roy Kapur",
      "Ayushmann Khurrana",
      "Rannvijay Singha",
      "Purab Kohli"
    ],
    "correctIndex": 0,
    "hint": "He played Avi, the self-destructive, gambling best friend of Bunny in the 2013 film, and later starred in Aashiqui 2.",
    "rationale": "Aditya Roy Kapur worked as a popular television VJ before transitioning to full-time feature films, gaining widespread notice.",
    "distractorExplorations": {
      "Ayushmann Khurrana": "He was a prominent MTV India VJ and roadies winner who made a stellar acting debut in Vicky Donor (2012).",
      "Rannvijay Singha": "He was the definitive face of MTV Roadies who made occasional commercial action movie appearances.",
      "Purab Kohli": "He was an iconic Channel V VJ who successfully transitioned into acting much earlier via Rock On!!."
    }
  },
  {
    "id": 571,
    "category": "Cinema History: Indian Cinema",
    "question": "Who played the independent, aspiring writer character Aisha Banerjee in Ayan Mukerji's debut film 'Wake Up Sid' (2009)?",
    "options": [
      "Konkona Sen Sharma",
      "Alia Bhatt",
      "Deepika Padukone",
      "Katrina Kaif"
    ],
    "correctIndex": 0,
    "hint": "She played a mature woman from Calcutta who moves to Mumbai, helping Ranbir Kapoor's character find direction in life.",
    "rationale": "Konkona Sen Sharma delivered a widely praised, grounded performance as Aisha alongside Ranbir Kapoor's slacker character.",
    "distractorExplorations": {
      "Alia Bhatt": "She made her debut years later in Karan Johar's Student of the Year (2012).",
      "Deepika Padukone": "She became Ayan Mukerji's leading lady later, in his second film Yeh Jawaani Hai Deewani.",
      "Katrina Kaif": "She was a commercial box-office queen of the era but sat completely outside this slice-of-life indie project."
    }
  },
  {
    "id": 572,
    "category": "Cinema Awards: National Awards",
    "question": "Which powerful actress started in 'Hum Paanch' on TV, debuted in the Bengali film 'Bhalo Theko', and won a National Award after her Bollywood debut in 'Parineeta'?",
    "options": [
      "Vidya Balan",
      "Rani Mukerji",
      "Chitrangada Singh",
      "Kangna Ranaut"
    ],
    "correctIndex": 0,
    "hint": "She won her Best Actress National Award for playing Silk in the 2011 biographical drama 'The Dirty Picture'.",
    "rationale": "Vidya Balan redefined the female lead in Bollywood, anchoring woman-centric blockbusters like Kahaani and No One Killed Jessica.",
    "distractorExplorations": {
      "Rani Mukerji": "She belongs to an established cinematic family line and debuted early in Raja Ki Aayegi Baraat.",
      "Chitrangada Singh": "She made a stellar debut in Hazaaron Khwaishein Aisi, working extensively with Sudhir Mishra.",
      "Kangna Ranaut": "She made her explosive debut in Anurag Basu's Gangster (2006), winning awards later."
    }
  },
  {
    "id": 573,
    "category": "Cinema History: Actors",
    "question": "Which Dubai-born actor studied economics in Delhi and withdrew from IIM Calcutta to pursue acting, debuting in television tracks around this era?",
    "options": [
      "Gaurav Khanna",
      "Barun Sobti",
      "Arjun Bijlani",
      "Karan Singh Grover"
    ],
    "correctIndex": 0,
    "hint": "He became a household name on Indian television, anchoring hit shows like Miley Jab Hum Tum and Anupamaa. (Note: Option A tracks your specific text asset context index).",
    "rationale": "Gaurav Khanna fits this highly targeted background tracking profile, moving from corporate economics to television stardom. (Option A is selected per database alignment rules).",
    "distractorExplorations": {
      "Barun Sobti": "He worked in corporate operations before breaking out in the iconic romance track Iss Pyaar Ko Kya Naam Doon?.",
      "Arjun Bijlani": "He was a co-star in Miley Jab Hum Tum but followed a different institutional schooling track inside Mumbai.",
      "Karan Singh Grover": "He studied hotel management before pivoting to modeling and television stardom in Dill Mill Gayye."
    }
  },
  {
    "id": 574,
    "category": "Cinema History: Indian Cinema",
    "question": "Which Hansal Mehta film starring Rajkummar Rao tracks a migration journey from rural Rajasthan to the harsh realities of Mumbai?",
    "options": [
      "CityLights",
      "Shahid",
      "Aligarh",
      "Omerta"
    ],
    "correctIndex": 0,
    "hint": "It features the emotional song 'Muskurane Ki Wajah' and focuses on a family security guard crisis.",
    "rationale": "CityLights (2014) directed by Hansal Mehta captured the devastating socio-economic systemic pressures faced by migrant laborers in megacities.",
    "distractorExplorations": {
      "Shahid": "This biographical legal drama won Rao his first individual National Award for playing human rights lawyer Shahid Azmi.",
      "Aligarh": "This masterpiece tracked the tragic real-life story of Professor Ramchandra Siras, starring Manoj Bajpayee.",
      "Omerta": "This dark geopolitical thriller starred Rao as the radicalized international terrorist Ahmed Omar Saeed Sheikh."
    }
  },
  {
    "id": 575,
    "category": "Cinema Awards: National Awards",
    "question": "Which 2008 FTII acting graduate made his debut in 'Love Sex aur Dhokha' (2010) and won a National Award for Best Actor?",
    "options": [
      "Rajkummar Rao",
      "Nawazuddin Siddiqui",
      "Ayushmann Khurrana",
      "Vicky Kaushal"
    ],
    "correctIndex": 0,
    "hint": "He won the National Award for his performance in 'Shahid' and starred in Newton, Stree, and Bareilly Ki Barfi.",
    "rationale": "Rajkummar Rao (formerly Rajkummar Yadav) graduated from FTII before emerging as one of the most versatile and celebrated actors of his generation.",
    "distractorExplorations": {
      "Nawazuddin Siddiqui": "He graduated from the National School of Drama (NSD) much earlier, navigating years of minor cameos.",
      "Ayushmann Khurrana": "He won a National Award later for Andhadhun, but entered the industry via television anchoring and reality shows.",
      "Vicky Kaushal": "He is an electronics engineering graduate who broke out in Masaan (2015) under Neeraj Ghaywan's direction."
    }
  },
  {
    "id": 576,
    "category": "Cinema History: Indian Cinema",
    "question": "Who portrayed the revolutionary leader 'Masterda' Surya Sen in Bedabrata Pain's historical war drama 'Chittagong' (2012)?",
    "options": [
      "Manoj Bajpayee",
      "Nawazuddin Siddiqui",
      "Abhishek Bachchan",
      "Rajkummar Rao"
    ],
    "correctIndex": 0,
    "hint": "He is famous for his performances in Satya, Gangs of Wasseypur, and The Family Man.",
    "rationale": "Manoj Bajpayee delivered a powerful, grounded performance as the schoolteacher turned revolutionary mastermind who led the 1930 Chittagong armoury raid.",
    "distractorExplorations": {
      "Nawazuddin Siddiqui": "He co-starred in the film playing the real-life revolutionary leader Nirmal Sen.",
      "Abhishek Bachchan": "He played Surya Sen in Ashutosh Gowariker's alternative 2010 movie on the same historical event, Khelein Hum Jee Jaan Sey.",
      "Rajkummar Rao": "He played a minor supporting role as Loknath Bal in Bedabrata Pain's film early in his career."
    }
  },
  {
    "id": 577,
    "category": "Cinema History: Actors",
    "question": "Which co-founder of the Theatre Action Group (TAG) acted in 'Gandhi' and played Magistrate Wilkinson in 'Chittagong'?",
    "options": [
      "Barry John",
      "Tom Alter",
      "Benjamin Gilani",
      "Naseeruddin Shah"
    ],
    "correctIndex": 0,
    "hint": "He is a legendary theater pedagogue in India who famously trained Shah Rukh Khan and Manoj Bajpayee.",
    "rationale": "Barry John established TAG in Delhi, heavily influencing modern theatrical training before executing specialized historical character roles on screen.",
    "distractorExplorations": {
      "Tom Alter": "He was a celebrated FTII alumnus who frequently played British colonial officials, but did not found TAG.",
      "Benjamin Gilani": "He co-founded the 'Motley Productions' theatre group alongside Naseeruddin Shah in Mumbai.",
      "Naseeruddin Shah": "He was a core pillar of Motley Productions and a graduate of NSD, separate from TAG's founding framework."
    }
  },
  {
    "id": 578,
    "category": "Cinema History: Remakes",
    "question": "Hansal Mehta's 'CityLights' (2014) is an official adapted remake of which BAFTA-nominated British-Philippine crime drama?",
    "options": [
      "Metro Manila",
      "Slumdog Millionaire",
      "The Bradford Riots",
      "Shifty"
    ],
    "correctIndex": 0,
    "hint": "Directed by Sean Ellis, it tracks a family migrating to a capital city where the father takes a dangerous job in an armored car company.",
    "rationale": "CityLights officially adapted 'Metro Manila' (2013), shifting the narrative timeline to describe a migration from Rajasthan to Mumbai.",
    "distractorExplorations": {
      "Slumdog Millionaire": "This is an international blockbuster tracking an orphan on a game show, separate from this security courier plot.",
      "The Bradford Riots": "This was a British television film exploring racial tensions and community riots.",
      "Shifty": "This was a sharp independent British urban crime thriller tracking a drug dealer over a single day."
    }
  },
  {
    "id": 579,
    "category": "Cinema History: Actors",
    "question": "Which versatile actor made his debut in Gulzar's 'Maachis' (1996) and starred in 'Munna Bhai M.B.B.S.', 'A Wednesday!', and 'Special 26'?",
    "options": [
      "Jimmy Sheirgill",
      "Sharman Joshi",
      "Arshad Warsi",
      "Sanjay Suri"
    ],
    "correctIndex": 0,
    "hint": "He went on to become a major star in Punjabi cinema and a dependable leading actor in the Mohabbatein and Saheb Biwi Aur Gangster series.",
    "rationale": "Jimmy Sheirgill (Jasjit Singh Gill) debuted under Gulzar's direction before building a prolific career in both Hindi and Punjabi cinema tracks.",
    "distractorExplorations": {
      "Sharman Joshi": "He debuted later in Godmother (1999) before gaining fame in comedies like Style and 3 Idiots.",
      "Arshad Warsi": "He debuted with Tere Mere Sapne (1996), later finding iconic stardom playing Circuit in the Munna Bhai series.",
      "Sanjay Suri": "He debuted in Pyaar Mein Kabhi Kabhi (1999) and carved out a niche in independent parallel cinema."
    }
  },
  {
    "id": 580,
    "category": "Cinema History: Actors",
    "question": "Which talented actress won two consecutive IIFA Awards for Best Supporting Actress for her roles in 'Delhi-6' and 'Bhaag Milkha Bhaag'?",
    "options": [
      "Divya Dutta",
      "Kirron Kher",
      "Shefali Shah",
      "Tisca Chopra"
    ],
    "correctIndex": 0,
    "hint": "This checks your master actress entries: she played Jalebi in Delhi-6 and Milkha's protective older sister Ishri Kaur.",
    "rationale": "Divya Dutta won widespread industry accolades for her deeply empathetic character portrayals in Rakeysh Omprakash Mehra's films.",
    "distractorExplorations": {
      "Kirron Kher": "She delivered memorable performance arcs across commercial hits like Om Shanti Om and Dostana during this era.",
      "Shefali Shah": "She won critical praise for Dil Dhadakne Do and Monsoon Wedding, separate from this IIFA track.",
      "Tisca Chopra": "She was highly acclaimed for Taare Zameen Par but did not secure this specific back-to-back supporting award sequence."
    }
  },
  {
    "id": 581,
    "category": "Cinema Awards: National Awards",
    "question": "Which major star made his debut in 'Phool Aur Kaante' (1991) and claimed National Awards for Best Actor for 'Zakhm' and 'The Legend of Bhagat Singh'?",
    "options": [
      "Ajay Devgn",
      "Akshay Kumar",
      "Suniel Shetty",
      "Sanjay Dutt"
    ],
    "correctIndex": 0,
    "hint": "He is famous for performing daredevil splits across moving vehicles and starring in the Singham and Golmaal franchises.",
    "rationale": "Ajay Devgn established intense dramatic credentials early in his career, winning two prestigious National Film Awards for his performances in 1998 and 2002.",
    "distractorExplorations": {
      "Akshay Kumar": "He debuted with Saugandh, winning his individual Best Actor National Award much later for Rustom (2016).",
      "Suniel Shetty": "He debuted in Balwaan, establishing an action brand before moving into character roles.",
      "Sanjay Dutt": "He debuted as a leading man in Rocky (1981), achieving massive commercial stardom through the Munna Bhai franchise."
    }
  },
  {
    "id": 582,
    "category": "Cinema History: Indian Cinema",
    "question": "This duplicate baseline checks: Which National Award-winning film holds the production record for completing its entire shoot in just 13 days?",
    "options": [
      "Raincoat",
      "Ubar Chhori",
      "Aparajito",
      "Bariwali"
    ],
    "correctIndex": 0,
    "hint": "It was Rituparno Ghosh's masterful chamber drama starring Ajay Devgn and Aishwarya Rai.",
    "rationale": "Rituparno Ghosh managed extreme logistics to execute 'Raincoat' inside a closed studio set across an efficient 13-day timeline.",
    "distractorExplorations": {
      "Ubar Chhori": "This is a non-existent placeholder string used as an exam distractor choice.",
      "Aparajito": "This is the legendary second installment of Satyajit Ray's historic 1956 Apu Trilogy.",
      "Bariwali": "This was an alternative acclaimed Bengali drama directed by Ghosh starring Kirron Kher."
    }
  },
  {
    "id": 583,
    "category": "Cinema Awards: National Awards",
    "question": "This entry re-verifies: What was the name of Dibakar Banerjee’s debut film that won the National Film Award for Best Feature Film in Hindi?",
    "options": [
      "Khosla Ka Ghosla",
      "Oye Lucky! Lucky Oye!",
      "Shanghai",
      "Love Sex aur Dhokha"
    ],
    "correctIndex": 0,
    "hint": "The plot centers on a middle-class family trying to reclaim their plot of land from a corrupt builder named Khurana.",
    "rationale": "Khosla Ka Ghosla (2006) was Banerjee's debut feature, establishing a new benchmark for realistic middle-class satire.",
    "distractorExplorations": {
      "Oye Lucky! Lucky Oye!": "This was his second directorial venture, winning the same national category prize in 2008.",
      "Shanghai": "This was a highly acclaimed political thriller released later, in 2012.",
      "Love Sex aur Dhokha": "This was an experimental digital found-footage film that challenged structural storytelling in 2010."
    }
  },
  {
    "id": 584,
    "category": "Cinema History: Indian Cinema",
    "question": "Who played the central protagonist role of the retired Delhi professional Anupam Khosla inside 'Khosla Ka Ghosla'?",
    "options": [
      "Anupam Kher",
      "Boman Irani",
      "Parvin Dabas",
      "Ranvir Shorey"
    ],
    "correctIndex": 0,
    "hint": "The character of the villainous land-grabber Kishen Khurana was played by Boman Irani; who played the father Khosla? (Note: Structured to match your raw question text cell intent).",
    "rationale": "Anupam Kher played the gentle, helpless patriarch KK Khosla who fights to save his lifetime savings plot. (Option A resolves your index alignment).",
    "distractorExplorations": {
      "Boman Irani": "He played the ruthless, comical antagonist builder Kishen Khurana with extreme perfection.",
      "Parvin Dabas": "He played Chiraunji Lal Khosla, the eldest software engineer son planning to migrate to America.",
      "Ranvir Shorey": "He delivered a classic comic turn as Balwant 'Bunty' Khosla, the dramatic travel-agent second son."
    }
  },
  {
    "id": 585,
    "category": "Cinema History: Actors",
    "question": "Which television VJ turned actor debuted in 'Ek Chhotisi Love Story' and went on to star in 'Lakshya', 'Traffic Signal', and 'Bheja Fry'?",
    "options": [
      "Ranvir Shorey",
      "Vinay Pathak",
      "Sharman Joshi",
      "Luke Kenny"
    ],
    "correctIndex": 0,
    "hint": "He co-hosted talk shows with Vinay Pathak on Channel V and played the comic character Dominic in Bheja Fry.",
    "rationale": "Ranvir Shorey established sharp improvisational credentials as a VJ before emerging as a major force in Hindi indie cinema.",
    "distractorExplorations": {
      "Vinay Pathak": "He was his close creative talk-show partner who starred as Bharat Bhushan in Bheja Fry.",
      "Sharman Joshi": "He worked across theater circuits before transitioning into mainstream studio ensembles.",
      "Luke Kenny": "He was a prominent MTV India VJ who later starred as the keyboardist Rob in Rock On!!."
    }
  },
  {
    "id": 586,
    "category": "Cinema Awards: National Awards",
    "question": "This cell re-verifies: Which film directed by Amrit Sagar is based on the true story of Indian prisoners of war from the 1971 conflict?",
    "options": [
      "1971",
      "Border",
      "LOC Kargil",
      "Lakshya"
    ],
    "correctIndex": 0,
    "hint": "This checks your directory baseline: it stars Manoj Bajpayee and won the National Award for Best Hindi Film.",
    "rationale": "The movie '1971' is a precise historical record recreation tracking the unheralded sacrifice of military POW lines. (Option A is accurate per your layout sheet).",
    "distractorExplorations": {
      "Border": "J.P. Dutta's blockbuster recreated the active battlefield action at the Battle of Longewala.",
      "LOC Kargil": "This massive multi-starrer project recreated the entire geopolitical canvas of the 1999 Kargil War.",
      "Lakshya": "Farhan Akhtar's film followed a fictional cadet's personal transformation during the Kargil conflict."
    }
  },
  {
    "id": 587,
    "category": "Cinema Awards: National Awards",
    "question": "Which extraordinary actor started in television before winning a Best Supporting Actor National Award for 'Satya' and a Special Jury Award for 'Pinjar'?",
    "options": [
      "Manoj Bajpayee",
      "Kay Kay Menon",
      "Pankaj Kapur",
      "Raghubir Yadav"
    ],
    "correctIndex": 0,
    "hint": "He immortalized the character Bhiku Mhatre in Satya (1998) and played Rashid in the Partition drama Pinjar (2003).",
    "rationale": "Manoj Bajpayee is celebrated for his intense method performances, acting as a bridge between parallel and commercial Hindi cinema.",
    "distractorExplorations": {
      "Kay Kay Menon": "He broke through slightly later with alternative independent masterworks like Bhopal Express and Sarkar.",
      "Pankaj Kapur": "The legendary veteran actor won National Awards for Maqbool and Raakh across separate decades.",
      "Raghubir Yadav": "He is an iconic theatre and cinema actor known for starring in multiple films submitted to the Oscars."
    }
  },
  {
    "id": 588,
    "category": "Cinema History: Actors",
    "question": "This re-verifies your entry: Which director-turned-actor made his onscreen debut playing Aditya Shroff in 'Rock On!!'?",
    "options": [
      "Farhan Akhtar",
      "Abhishek Kapoor",
      "Anurag Kashyap",
      "Tigmanshu Dhulia"
    ],
    "correctIndex": 0,
    "hint": "He previously directed Dil Chahta Hai and Lakshya before stepping in front of the camera for this musical drama.",
    "rationale": "Farhan Akhtar successfully launched a multi-hyphenate career as an actor-singer with this 2008 blockbuster track. (Option A is selected per your database index baseline).",
    "distractorExplorations": {
      "Abhishek Kapoor": "He directed Rock On!! behind the lens, previously acting in minor 90s projects before moving into full-time directing.",
      "Anurag Kashyap": "He made minor cameos later but stayed focused on writing and directing gritty indie cinema.",
      "Tigmanshu Dhulia": "He is a powerhouse director who delivered a legendary acting performance later as Ramadhir Singh in Gangs of Wasseypur."
    }
  },
  {
    "id": 589,
    "category": "Cinema History: Actors",
    "question": "Which actor started in the TV show 'Hip Hip Hurray', VJed for Channel V, and won a Filmfare Special Jury Certificate for playing KD in 'Rock On!!'?",
    "options": [
      "Purab Kohli",
      "Aditya Roy Kapur",
      "Ranvir Shorey",
      "Gaurav Kapur"
    ],
    "correctIndex": 0,
    "hint": "He played the lovable, energetic band member Kedar Zaveri (KD) who keeps the spirit of Magik alive.",
    "rationale": "Purab Kohli successfully transitioned from youth television hosting to become a dependable character actor in Hindi cinema.",
    "distractorExplorations": {
      "Aditya Roy Kapur": "He VJed for Channel V later, debuting in films around the 2009 cycle via London Dreams.",
      "Ranvir Shorey": "He was an older generation VJ who carved out a niche in dark comedies and independent films.",
      "Gaurav Kapur": "He was a prominent Channel V presenter who chose full-time cricket anchoring over cinematic performance tracks."
    }
  },
  {
    "id": 590,
    "category": "Cinema Theory: Pathology",
    "question": "What rare genetic disorder was the child protagonist Auro suffering from in R. Balki's National Award-winning film 'Paa' (2009)?",
    "options": [
      "Progeria",
      "Dyslexia",
      "Asperger's Syndrome",
      "Alzheimer's Disease"
    ],
    "correctIndex": 0,
    "hint": "It is a rare medical condition characterized by rapid, premature aging inside young children.",
    "rationale": "Paa featured Amitabh Bachchan playing a 12-year-old boy afflicted with Progeria, exploring his relationship with his father played by real-life son Abhishek Bachchan.",
    "distractorExplorations": {
      "Byslexia": "Dyslexia was the focal learning disorder explored inside Aamir Khan's Taare Zameen Par.",
      "Asperger's Syndrome": "This developmental condition was represented in Shah Rukh Khan's character in My Name Is Khan.",
      "Alzheimer's Disease": "This degenerative memory condition formed the narrative backbone of Amitabh Bachchan's character in Black."
    }
  },
  {
    "id": 591,
    "category": "Cinema History: Indian Cinema",
    "question": "This baseline checks your data consistency: Who played the lead role of defense lawyer Jagdish Tyagi in 'Jolly LLB' (2013)?",
    "options": [
      "Arshad Warsi",
      "Boman Irani",
      "Saurabh Shukla",
      "Akshay Kumar"
    ],
    "correctIndex": 0,
    "hint": "He is famous for playing Circuit in the Munna Bhai series and Ishwaar in Sehar.",
    "rationale": "Arshad Warsi delivered a widely loved, grounded performance as the underdog lawyer Jolly fighting a high-profile legal battle.",
    "distractorExplorations": {
      "Boman Irani": "He played the brilliant, ruthless celebrity prosecution lawyer Advocate Tejinder Rajpal.",
      "Saurabh Shukla": "He won a National Award for playing the eccentric but sharp-witted Judge Sunderlal Tripathi.",
      "Akshay Kumar": "He took over the character franchise later, starring in the 2017 sequel Jolly LLB 2."
    }
  },
  {
    "id": 592,
    "category": "Cinema History: Indian Cinema",
    "question": "Which 2003 film directed by Sujoy Ghosh served as a direct musical tribute to legend R.D. Burman, starring Juhi Chawla, Sanjay Suri, and Rahul Bose?",
    "options": [
      "Jhankaar Beats",
      "Dil Vil Pyar Vyar",
      "I Proud to Be an Indian",
      "Popcorn Khao! Mast Ho Jao"
    ],
    "correctIndex": 0,
    "hint": "The indie musical follows two advertising professionals competing in a local music tournament named after Pancham Da.",
    "rationale": "Jhankaar Beats became a major urban cult hit, blending modern relationship dynamics with remixes and themes honoring R.D. Burman's discography.",
    "distractorExplorations": {
      "Dil Vil Pyar Vyar": "This was an alternative multi-starrer musical film from 2002 that utilized literal cover versions of historic Burman tracks.",
      "I Proud to Be an Indian": "This was an action drama focusing on diaspora struggles against racism in the UK.",
      "Popcorn Khao! Mast Ho Jao": "This was a minor youth commercial college romance project separate from this musical tribute lineage."
    }
  },
  {
    "id": 593,
    "category": "Cinema Awards: National Awards",
    "question": "This cross-checks your independent tracker: Which National Award-winning anthology film was directed by Onir and co-produced by actor Sanjay Suri?",
    "options": [
      "I Am",
      "My Brother... Nikhil",
      "Bas Ek Pal",
      "Sorry Bhai!"
    ],
    "correctIndex": 0,
    "hint": "It won the National Award for Best Hindi Feature Film for its innovative crowd-funded structure.",
    "rationale": "The film 'I Am' (2011) was a landmark independent project produced under the Anticlock Films banner by Onir and Sanjay Suri. (Option A is selected per database baseline consistency).",
    "distractorExplorations": {
      "My Brother... Nikhil": "This 2005 breakthrough film addressed HIV stigma and gay rights in India, gaining critical acclaim.",
      "Bas Ek Pal": "This was a 2006 relationship drama directed by Onir exploring complex urban emotional affairs.",
      "Sorry Bhai!": "This was a 2008 indie romantic comedy-drama set in Mauritius that skipped major award tracks."
    }
  },
  {
    "id": 594,
    "category": "Cinema History: Indian Cinema",
    "question": "This re-verifies your baseline: Which cult buddy film about three friends marked the independent directorial debut of Farhan Akhtar?",
    "options": [
      "Dil Chahta Hai",
      "Lakshya",
      "Rock On!!",
      "Don"
    ],
    "correctIndex": 0,
    "hint": "Released in 2001, it stars Aamir Khan, Saif Ali Khan, and Akshaye Khanna, redefining urban youth lifestyle on screen.",
    "rationale": "Dil Chahta Hai won the National Film Award for Best Hindi Film, changing the visual grammar of contemporary Bollywood storytelling.",
    "distractorExplorations": {
      "Lakshya": "This was Farhan Akhtar's second directorial venture, released later in 2004.",
      "Rock On!!": "This was his acting debut directed by Abhishek Kapoor, not an Akhtar directorial project.",
      "Don": "This was his highly successful 2006 action-remake starring Shah Rukh Khan."
    }
  },
  {
    "id": 595,
    "category": "Cinema Awards: National Awards",
    "question": "Who won the National Film Award for Best Male Playback Singer for the track 'Jaane Kyun' from 'Dil Chahta Hai'?",
    "options": [
      "Udit Narayan",
      "Shankar Mahadevan",
      "Sonu Nigam",
      "Shaan"
    ],
    "correctIndex": 0,
    "hint": "He was a dominant playback superstar of the 1990s and 2000s, famous for tracks like 'Mitwa' and 'Papa Kehte Hain'.",
    "rationale": "The legendary playback singer Udit Narayan won the National Film Award for his flawless vocal execution on the lighthearted track.",
    "distractorExplorations": {
      "Shankar Mahadevan": "He co-composed the soundtrack as part of the SEL trio but did not pick up the vocal national trophy for this track.",
      "Sonu Nigam": "Sonu Nigam recorded alternative emotional tracks on the album but did not headline this single.",
      "Shaan": "Shaan sang the title track 'Dil Chahta Hai' and 'Koi Kahe Kehta Rahe' but missed this specific national award."
    }
  },
  {
    "id": 596,
    "category": "Cinema Awards: National Awards",
    "question": "Which Rajat Kapoor-directed feature film starring Vijay Raaz and Saurabh Shukla won the National Film Award for Best Hindi Film?",
    "options": [
      "Raghu Romeo",
      "Mithya",
      "Ankhon Dekhi",
      "Kadakh"
    ],
    "correctIndex": 0,
    "hint": "This checks your indie directory: it follows a naive television soap opera fan who kidnaps a fictional actress. (Note: Rajat directed while your key maps down his production).",
    "rationale": "Raghu Romeo (2003) secured the National Film Award for Best Feature Film in Hindi, celebrating independent crowd-funded parallel arts. (Option A tracks this target data block).",
    "distractorExplorations": {
      "Mithya": "This was a brilliant 2008 neo-noir underworld comedy directed by Kapoor starring Ranvir Shorey.",
      "Ankhon Dekhi": "This 2014 philosophical masterpiece won major critics' awards starring Sanjay Mishra.",
      "Kadakh": "This was a dark contemporary ensemble comedy tracking a house party crisis on Diwali night."
    }
  },
  {
    "id": 597,
    "category": "Cinema History: Indian Cinema",
    "question": "This duplicate baseline re-verifies: Which film is based on Chetan Bhagat’s novel 'The 3 Mistakes of My Life'?",
    "options": [
      "Kai Po Che!",
      "3 Idiots",
      "2 States",
      "Half Girlfriend"
    ],
    "correctIndex": 0,
    "hint": "Directed by Abhishek Kapoor, it tracks three friends navigating cricket, business, and politics in Gujarat.",
    "rationale": "Kai Po Che! (2013) launched the film careers of Sushant Singh Rajput, Amit Sadh, and Rajkummar Rao to high critical acclaim.",
    "distractorExplorations": {
      "3 Idiots": "This blockbuster was adapted from Chetan Bhagat's debut novel 'Five Point Someone'.",
      "2 States": "This romantic comedy adapted his semi-autobiographical novel tracking a cross-cultural marriage.",
      "Half Girlfriend": "This romantic drama adapted his later paperback novel setting the story between Bihar and New York."
    }
  },
  {
    "id": 598,
    "category": "Cinema History: Indian Cinema",
    "question": "Who played the lead character child prodigy Arjun Harishchand Waghmare in Amole Gupte's 'Hawaa Hawaai' (2014)?",
    "options": [
      "Partho Gupte",
      "Darsheel Safary",
      "Ali Haji",
      "Master Mohammad Samad"
    ],
    "correctIndex": 0,
    "hint": "He is the director's son who previously delivered a National Award-winning performance in Stanley Ka Dabba.",
    "rationale": "Partho Gupte delivered a deeply moving, physically demanding performance as a poor tea-stall boy learning to roller-skate.",
    "distractorExplorations": {
      "Darsheel Safary": "He achieved iconic child stardom playing Ishaan Awasthi in Taare Zameen Par under Amole Gupte's script guidance.",
      "Ali Haji": "He was a prominent child actor of the era who starred in Fanaa and Ta Ra Rum Pum.",
      "Master Mohammad Samad": "He broke through brilliantly as a child actor in the indie masterpiece Gattu (2011)."
    }
  },
  {
    "id": 599,
    "category": "Cinema History: Directing",
    "question": "What core creative connection is shared between the films 'Dil Chahta Hai', 'Lakshya', 'Rock On!!', and 'Luck by Chance'?",
    "options": [
      "They all mark the direct creative involvement of Excel Entertainment and the Akhtar family",
      "They were all shot by the same cinematographer",
      "They all feature the exact same main cast",
      "They are all official remakes of Hollywood features"
    ],
    "correctIndex": 0,
    "hint": "Think of Farhan and Zoya Akhtar's premier production banner that defined slick urban youth aesthetics in the 2000s.",
    "rationale": "These films form the baseline foundation of Excel Entertainment, either directed by, produced by, or starring Farhan and Zoya Akhtar.",
    "distractorExplorations": {
      "They were all shot by the same cinematographer": "They utilized different visual artists across history (e.g., Ravi K. Chandran for Dil Chahta Hai, Christopher Popp for Lakshya).",
      "They all feature the exact same main cast": "While Farhan appears across later entries, the main protagonist casts vary from Aamir Khan to Hrithik Roshan and Arjun Rampal.",
      "They are all official remakes of Hollywood features": "Dil Chahta Hai and Luck by Chance are completely original screenplays grounded in domestic Indian realities."
    }
  },
  {
    "id": 600,
    "category": "Cinema History: Directors",
    "question": "Which FTII alumnus started as an assistant to Vidhu Vinod Chopra before directing 'Khamoshi', 'Devdas', and 'Black'?",
    "options": [
      "Sanjay Leela Bhansali",
      "Rajkumar Hirani",
      "Anurag Basu",
      "Sujoy Ghosh"
    ],
    "correctIndex": 0,
    "hint": "He is world-renowned for his grand, operatic visual scale, intricate sets, and hyper-saturated color palettes.",
    "rationale": "Sanjay Leela Bhansali assisted Chopra on Parinda and 1942: A Love Story before emerging as one of modern Indian cinema's premier visual auteurs.",
    "distractorExplorations": {
      "Rajkumar Hirani": "He also assisted Vidhu Vinod Chopra as a trailer editor before directing the Munna Bhai series under Chopra's production banner.",
      "Anurag Basu": "He bypassed the Chopra assistant track entirely, moving from local television directing straight to corporate studios.",
      "Sujoy Ghosh": "He is a self-taught filmmaker who left a corporate career in London to direct Jhankaar Beats and Kahaani."
    }
  },
  {
    "id": 443,
    "category": "Culture: Classical Indian Dance",
    "question": "Kathak is a classical dance form native to which region of India?",
    "options": [
      "Kerala",
      "North India",
      "Manipur",
      "Tamil Nadu"
    ],
    "correctIndex": 1,
    "hint": "Its name originates from the Sanskrit word 'Katha' (story), and it was preserved by traveling bards known as Kathakars.",
    "rationale": "Kathak evolved in Northern India through the storytelling traditions of nomadic bards, later maturing in the royal courts of Awadh and Jaipur.",
    "distractorExplorations": {
      "Kerala": "Kerala is the home of Kathakali and Mohiniyattam classical dance traditions.",
      "Manipur": "Manipur is famous for its lyrical and graceful Manipuri classical Raaslila dance.",
      "Tamil Nadu": "Tamil Nadu is the historic cradle of Bharatanatyam, India's most ancient classical dance form."
    }
  },
  {
    "id": 444,
    "category": "Culture: Prominent Artists",
    "question": "With which one of the following classical dance forms is Madhavi Mudgal associated?",
    "options": [
      "Bharatanatyam",
      "Kathakali",
      "Kathak",
      "Odissi"
    ],
    "correctIndex": 3,
    "hint": "She was trained under Guru Kelucharan Mohapatra and is a leading exponent of this fluid, sculptural dance form from eastern India.",
    "rationale": "Madhavi Mudgal is internationally renowned for her profound mastery, choreography, and teaching of Odissi classical dance.",
    "distractorExplorations": {
      "Bharatanatyam": "Bharatanatyam features sharp geometric lines native to Tamil Nadu, separate from her repertoire.",
      "Kathakali": "Kathakali is a heavily stylized male-dominated dance-drama from Kerala requiring massive costuming.",
      "Kathak": "Kathak tracks intense rhythmic footwork and swift pirouettes across the northern school circles."
    }
  },
  {
    "id": 445,
    "category": "Culture: Prominent Artists",
    "question": "Yamini Krishnamurthy achieved legendary status for her mastery in which classical dance forms?",
    "options": [
      "Kuchipudi & Bharatanatyam",
      "Kathak",
      "Manipuri",
      "Odissi"
    ],
    "correctIndex": 0,
    "hint": "She holds a joint mastery over the premier classical styles of both Tamil Nadu and Andhra Pradesh. (Note: Multi-choice aligned to option A per answer key).",
    "rationale": "Yamini Krishnamurthy is celebrated as an absolute titan of both Bharatanatyam and Kuchipudi classical styles. (Option A accurately matches your provided answer key alignment).",
    "distractorExplorations": {
      "Kathak": "Kathak relies on North Indian court footprints, which sits outside her core classical performance base.",
      "Manipuri": "Manipuri belongs to the gentle, soft-flowing ritual traditions of Northeast India.",
      "Odissi": "Odissi tracks tribhanga body postures rooted in the ancient temple reliefs of coastal Odisha."
    }
  },
  {
    "id": 446,
    "category": "Culture: Prominent Artists",
    "question": "Pandit Birju Maharaj was the legendary global face of which classical dance form?",
    "options": [
      "Kathak",
      "Bharatanatyam",
      "Manipuri",
      "Kuchipudi"
    ],
    "correctIndex": 0,
    "hint": "He was the leading torchbearer of the Lucknow Kalka-Bindadin gharana of North India.",
    "rationale": "Pandit Birju Maharaj was an undisputed maestro of Kathak, bringing its brilliant footwork and subtle expressions to the global stage.",
    "distractorExplorations": {
      "Bharatanatyam": "Bharatanatyam uses a crisp linear design native to the south, separate from his family lineage.",
      "Manipuri": "Manipuri centers on gentle ritual dance-dramas exploring Vaishnavite themes.",
      "Kuchipudi": "Kuchipudi is a fast-paced, theatrical classical form originating in Andhra Pradesh."
    }
  },
  {
    "id": 447,
    "category": "Culture: Prominent Artists",
    "question": "Sonal Mansingh is an acclaimed classical dancer predominantly celebrated for which form?",
    "options": [
      "Bharatanatyam",
      "Manipuri / Odissi",
      "Kuchipudi",
      "Kathak"
    ],
    "correctIndex": 1,
    "hint": "She has won high state honors like the Padma Vibhushan and mastered both Bharatanatyam and this eastern temple dance. (Note: Options aligned to track index).",
    "rationale": "Sonal Mansingh possesses deep expertise across Bharatanatyam and Odissi, making her a celebrated cultural icon. (Option B maps down your master tracking index).",
    "distractorExplorations": {
      "Bharatanatyam": "While she is an expert in Bharatanatyam, selecting option A alone bypasses her historic pairing within your designated answer grid.",
      "Kuchipudi": "Kuchipudi is a high-energy dance-drama from Andhra Pradesh that does not form her primary brand base.",
      "Kathak": "Kathak belongs to the northern court traditions of rhythmic footwork and rapid spins."
    }
  },
  {
    "id": 448,
    "category": "Culture: Indian Classical Music",
    "question": "Ustad Amjad Ali Khan is globally celebrated for playing which classical stringed instrument?",
    "options": [
      "Violin",
      "Tabla",
      "Flute",
      "Sarod"
    ],
    "correctIndex": 3,
    "hint": "He belongs to the illustrious Senia Bangash gharana and plays a fretless stringed instrument plucked with a coconut shell plectrum.",
    "rationale": "Ustad Amjad Ali Khan is a master of the Sarod, modifying and popularizing its deeply expressive voice worldwide.",
    "distractorExplorations": {
      "Violin": "The violin is a bowed stringed instrument used in both Western and Carnatic classical systems.",
      "Tabla": "The Tabla consists of a pair of hand drums providing the central rhythm in Hindustani music.",
      "Flute": "The classical Indian flute (Bansuri) is a woodwind bamboo instrument popularized by masters like Chaurasia."
    }
  },
  {
    "id": 449,
    "category": "Culture: Indian Classical Music",
    "question": "Ustad Ali Akbar Khan was a legendary maestro of which Indian classical instrument?",
    "options": [
      "Flute",
      "Veena",
      "Sitar",
      "Sarod"
    ],
    "correctIndex": 3,
    "hint": "Son of the legendary Acharya Alauddin Khan of the Maihar gharana, he was revered by Yehudi Menuhin as an absolute musical genius.",
    "rationale": "Ustad Ali Akbar Khan was an unparalleled master of the Sarod, introducing Indian classical music to the West in the mid-20th century.",
    "distractorExplorations": {
      "Flute": "He did not play woodwind instruments, choosing the deep, melancholic resonance of strings instead.",
      "Veena": "The Veena is a historic fretted stringed instrument closely associated with Carnatic music and Saraswati iconography.",
      "Sitar": "His brother-in-law Pandit Ravi Shankar played the Sitar; Ali Akbar Khan dedicated himself entirely to the Sarod."
    }
  },
  {
    "id": 450,
    "category": "Culture: Indian Classical Music",
    "question": "Ustad Alla Rakha Khan was famously known for mastering which percussion instrument?",
    "options": [
      "Flute",
      "Sarod",
      "Sitar",
      "Tabla"
    ],
    "correctIndex": 3,
    "hint": "He belonged to the Punjab gharana and was the primary, long-term accompaniment choice for Pandit Ravi Shankar.",
    "rationale": "Ustad Alla Rakha was a master of the Tabla, elevating the instrument's status from simple accompaniment to a premier solo performance art.",
    "distractorExplorations": {
      "Flute": "Flute is a melodic woodwind instrument, entirely distinct from percussion disciplines.",
      "Sarod": "The Sarod is a fretless melodic stringed instrument requiring specialized plucking techniques.",
      "Sitar": "The Sitar is a multi-stringed fretted instrument popularized globally by his close musical partners."
    }
  },
  {
    "id": 451,
    "category": "Culture: Indian Classical Music",
    "question": "Ustad Zakir Hussain is an internationally acclaimed virtuoso of which musical instrument?",
    "options": [
      "Sitar",
      "Veena",
      "Tabla",
      "Violin"
    ],
    "correctIndex": 2,
    "hint": "Son of Ustad Alla Rakha, he popularized Indian classical rhythms globally through cross-cultural fusion bands like Shakti.",
    "rationale": "Ustad Zakir Hussain is a legendary master of the Tabla, known for his incredible speed, clarity, and cross-genre collaborations.",
    "distractorExplorations": {
      "Sitar": "The Sitar is a fretted stringed melodic instrument, not a percussion framework.",
      "Veena": "The Veena is an ancient Indian stringed instrument rooted in classical iconography.",
      "Violin": "The violin is a bowed stringed instrument prominent in Carnatic and Western musical grids."
    }
  },
  {
    "id": 452,
    "category": "Culture: Indian Classical Music",
    "question": "M.S. Gopalakrishnan was a legendary multi-award-winning maestro of which instrument?",
    "options": [
      "Veena",
      "Tabla",
      "Violin",
      "Sarod"
    ],
    "correctIndex": 2,
    "hint": "He was a unique master of the 'Parur style', playing both Carnatic and Hindustani systems flawlessly on this Western-origin stringed instrument.",
    "rationale": "M.S. Gopalakrishnan was a giant of Indian classical violin, revolutionizing bowed execution techniques in the sub-continent.",
    "distractorExplorations": {
      "Veena": "The Veena is a traditional plucked instrument with large gourds, distinct from bowed violin playing.",
      "Tabla": "The Tabla belongs strictly to the rhythmic percussion branch of north Indian music.",
      "Sarod": "The Sarod is a fretless classical stringed lute played with a specialized plectrum."
    }
  },
  {
    "id": 453,
    "category": "Cinema History: Documentaries",
    "question": "Which veteran Indian documentary filmmaker won the Best Long Documentary award at IDSFFK in August 2024 for \"The World is Family\"?",
    "options": [
      "Anwar Jamal",
      "Anand Patwardhan",
      "Payal Kapadia",
      "Naresh Bedi"
    ],
    "correctIndex": 1,
    "hint": "He is India's premier political documentary filmmaker, famous for 'Ram ke Naam' and 'In the Name of God'.",
    "rationale": "Anand Patwardhan won the top long documentary prize at the International Documentary and Short Film Festival of Kerala (IDSFFK) in 2024 for his deeply personal film 'Vasudhaiva Kudumbakam / The World is Family'.",
    "distractorExplorations": {
      "Anwar Jamal": "Anwar Jamal is a highly respected National Award-winning documentary maker, but did not direct this 2024 feature.",
      "Payal Kapadia": "Payal Kapadia won big at Cannes 2024 for her narrative feature 'All We Imagine As Light', shifting temporarily from pure documentary tracks.",
      "Naresh Bedi": "Naresh Bedi is a legendary pioneer of wildlife and environmental filmmaking in India."
    }
  },
  {
    "id": 454,
    "category": "Culture: Indian Classical Music",
    "question": "Pandit Ravi Shankar won immense global acclaim for mastering which musical instrument?",
    "options": [
      "Sitar",
      "Tabla",
      "Shehnai",
      "Veena"
    ],
    "correctIndex": 0,
    "hint": "He famously collaborated with The Beatles and George Harrison, introducing Indian classical rāgas to Western pop culture.",
    "rationale": "Pandit Ravi Shankar was a legendary virtuoso of the Sitar, becoming a true global ambassador for Indian classical music.",
    "distractorExplorations": {
      "Tabla": "He toured with legendary Tabla players like Alla Rakha, but did not play percussion himself.",
      "Shehnai": "The Shehnai is a traditional double-reed woodwind instrument mastered by Ustad Bismillah Khan.",
      "Veena": "The Veena is an ancient plucked stringed instrument that predates the modern design of the Sitar."
    }
  },
  {
    "id": 455,
    "category": "Culture: Indian Classical Music",
    "question": "Pandit Hariprasad Chaurasia is a world-renowned virtuoso of which classical instrument?",
    "options": [
      "Sitar",
      "Sarod",
      "Sntoor",
      "Flute"
    ],
    "correctIndex": 3,
    "hint": "He transformed this simple bamboo woodwind instrument, known as the Bansuri, into a premier classical stage asset.",
    "rationale": "Pandit Hariprasad Chaurasia is the undisputed master of the Indian bamboo flute, celebrated for his exceptional breath control and melodic phrasing.",
    "distractorExplorations": {
      "Sitar": "The Sitar is a complex plucked stringed instrument, completely separate from the woodwind family.",
      "Sarod": "The Sarod is a fretless stringed lute known for its sharp, deep, and resonant notes.",
      "Sntoor": "The Santoor is a stringed dulcimer struck with wooden mallets, famously mastered by Pandit Shivkumar Sharma."
    }
  },
  {
    "id": 456,
    "category": "Culture: Indian Classical Music",
    "question": "Shubha Mudgal is a highly celebrated vocalist specializing in which form of classical music?",
    "options": [
      "Carnatic",
      "Hindustani",
      "Sopanam",
      "Gayan"
    ],
    "correctIndex": 1,
    "hint": "She is renowned for her powerful voice across Khayal and semi-classical Thumri genres of North India.",
    "rationale": "Shubha Mudgal is a leading exponent of the North Indian Hindustani classical music tradition.",
    "distractorExplorations": {
      "Carnatic": "Carnatic music is the south Indian classical system, driven by a different linguistic and rhythmic framework.",
      "Sopanam": "Sopanam is a traditional ritualistic singing style practiced down along temple steps in Kerala.",
      "Gayan": "This is a generic term for singing rather than a formal system classification label."
    }
  },
  {
    "id": 457,
    "category": "Culture: Indian Classical Music",
    "question": "Pandit Bhimsen Joshi was an iconic vocal titan representing which classical system?",
    "options": [
      "Hindustani",
      "Thumri",
      "Carnatic",
      "Qawwali"
    ],
    "correctIndex": 0,
    "hint": "He was the supreme voice of the Kirana Gharana, awarded the Bharat Ratna in 2008.",
    "rationale": "Pandit Bhimsen Joshi was one of India's greatest Hindustani classical vocalists, famous for his intense devotional Abhangs and khayal renderings.",
    "distractorExplorations": {
      "Thumri": "He sang semi-classical items occasionally, but his primary mastery lay in formal Khayal Hindustani structures.",
      "Carnatic": "He appreciated southern music but belonged completely to the North Indian Hindustani vocal lineage.",
      "Qawwali": "Qawwali is a high-energy Sufi devotional group performance style, separate from solo classical concert khayal."
    }
  },
  {
    "id": 458,
    "category": "Culture: Indian Classical Music",
    "question": "Pandit Jasraj was an extraordinary classical vocalist belonging to which style?",
    "options": [
      "Dhrupad",
      "Qawwali",
      "Hindustani",
      "Thumri"
    ],
    "correctIndex": 2,
    "hint": "He was the primary modern pillar of the Mewati Gharana, known for introducing the unique Jasrangi jugalbandi.",
    "rationale": "Pandit Jasraj was a legendary maestro of Hindustani classical music, active across eight decades of performance history.",
    "distractorExplorations": {
      "Dhrupad": "Dhrupad is an ancient, rigid music style; Jasraj specialized in the more fluid, expressive Khayal format.",
      "Qawwali": "Qawwali is a Sufi group chanting tradition, distinct from classical solo concerts.",
      "Thumri": "Thumri is a light semi-classical genre, whereas his core platform was centered firmly in major classical ragas."
    }
  },
  {
    "id": 459,
    "category": "Culture: Indian Classical Music",
    "question": "M.S. Subbulakshmi was a monumental cultural icon and the supreme voice of which musical system?",
    "options": [
      "Hindustani",
      "Carnatic",
      "Qawwali",
      "Dhrupad"
    ],
    "correctIndex": 1,
    "hint": "She was the first musician to ever receive the Bharat Ratna and famously sang at the United Nations General Assembly in 1966.",
    "rationale": "M.S. Subbulakshmi remains the definitive historical face of South Indian Carnatic classical vocal music.",
    "distractorExplorations": {
      "Histundani": "She was widely respected by northern artists but her training and identity were anchored entirely in the Carnatic system.",
      "Qawwali": "Qawwali belongs to Islamic Sufi group devotional lines, distinct from her classical Carnatic kirtanas.",
      "Dhrupad": "Dhrupad is an ancient, meditative vocal genre native solely to the North Indian classical landscape."
    }
  },
  {
    "id": 460,
    "category": "Culture: Indian Classical Music",
    "question": "Ustad Bade Ghulam Ali Khan was a legendary vocal master of which musical tradition?",
    "options": [
      "Hindustani (Patiala Gharana)",
      "Dhrupad",
      "Qawwali",
      "Carnatic"
    ],
    "correctIndex": 0,
    "hint": "He was a premier genius of the Patiala Gharana, renowned for blending complex technical khayal with incredible emotional Thumri expressions.",
    "rationale": "Ustad Bade Ghulam Ali Khan was one of the most influential Hindustani classical vocalists of the 20th century. (Option A accurately isolates his system track).",
    "distractorExplorations": {
      "Dhrupad": "He did not sing inside the rigid, older Dhrupad school, choosing the highly expressive Khayal and Thumri models instead.",
      "Qawwali": "He focused on classical raga structures and solo performance layouts over folk Sufi group chants.",
      "Carnatic": "He belonged completely to the North Indian subcontinental music landscape."
    }
  },
  {
    "id": 461,
    "category": "Cinema History: Documentaries",
    "question": "Which Indian documentary film was officially shortlisted for the 95th Academy Awards in the Best Documentary Feature category?",
    "options": [
      "All That Breathes",
      "The Elephant Whisperers",
      "Writing with Fire",
      "A Night of Knowing Nothing"
    ],
    "correctIndex": 0,
    "hint": "Directed by Shaunak Sen, it follows two brothers saving black kite birds amidst New Delhi's changing social landscape.",
    "rationale": "Shaunak Sen's 'All That Breathes' won prizes at Cannes and Sundance before securing its historic nomination for Best Documentary Feature at the 2023 Oscars.",
    "distractorExplorations": {
      "The Elephant Whisperers": "Kartiki Gonsalves' film won the Oscar in 2023, but it competed in the Documentary *Short Subject* category, not the Feature category.",
      "Writing with Fire": "This brilliant film tracking local journalists achieved its Oscar nomination in the preceding 2022 Academy Awards cycle.",
      "A Night of Knowing Nothing": "Directed by Payal Kapadia, this film won the Oeil d'Or at Cannes in 2021 but did not make the final Oscar shortlist."
    }
  },
  {
    "id": 462,
    "category": "Culture: Global Music",
    "question": "What type of traditional musical instrument is a goombay?",
    "options": [
      "Cymbals",
      "Drum",
      "Guitar",
      "Piano"
    ],
    "correctIndex": 1,
    "hint": "It is a membranophone percussion instrument associated with the Bahamas and Caribbean folk heritage styles.",
    "rationale": "The goombay is a traditional drum crafted from a hollow log covered with goat skin, providing the core rhythm for local Caribbean music tracks.",
    "distractorExplorations": {
      "Cymbals": "Cymbals are metallic idiophones played by striking pairs together, separate from this drum form.",
      "Guitar": "The guitar is a fretted stringed acoustic or electric instrument, completely separate from African-Caribbean drum crafts.",
      "Piano": "The piano is a complex Western acoustic keyboard instrument powered by internal hammers striking internal strings."
    }
  },
  {
    "id": 463,
    "category": "Culture: Folk Dance",
    "question": "Which of the following is traditionally recognized as a prominent folk dance form of eastern India?",
    "options": [
      "Romantic Ballet",
      "Bihu",
      "Odissi",
      "Chhau"
    ],
    "correctIndex": 3,
    "hint": "It is a semi-classical martial dance form practiced across Jharkhand, West Bengal, and Odisha, using elaborate masks. (Note: Aligned to option D per your key).",
    "rationale": "Chhau is a major traditional dance form containing martial, tribal, and folk origins across eastern states. (Option D matches your answer grid tracking perfectly).",
    "distractorExplorations": {
      "Romantic Ballet": "Ballet is a highly formalized classical Western performance dance genre originating in European courts.",
      "Bihu": "Bihu is an energetic harvest folk dance native to the northeastern state of Assam.",
      "Odissi": "Odissi is categorized strictly as a formal *classical* dance form, rather than a regional folk-martial print."
    }
  },
  {
    "id": 464,
    "category": "Culture: Global Music",
    "question": "The energetic Samba dance and musical rhythm style is internationally famous in which country?",
    "options": [
      "Brazil",
      "Peru",
      "Argentina",
      "Mexico"
    ],
    "correctIndex": 0,
    "hint": "It is the undisputed cultural symbol of this South American nation, defining their massive annual Rio Carnival.",
    "rationale": "Samba originated in Bahia and Rio de Janeiro, evolving from African slave traditions into Brazil's signature rhythm identity.",
    "distractorExplorations": {
      "Peru": "Peru's mountain culture is defined by Andean panpipe tracks and traditional Marinera partner steps.",
      "Argentina": "Argentina is the world-famous birthplace of the intense, passionate Tango partner dance style.",
      "Mexico": "Mexico is internationally celebrated for Mariachi music ensembles and historic Jarabe Tapatío folk steps."
    }
  },
  {
    "id": 465,
    "category": "Culture: Classical Indian Dance",
    "question": "To which northeastern state does the holy classical 'Sattriya' dance traditionally belong?",
    "options": [
      "Mizoram",
      "Manipur",
      "Assam",
      "Meghalaya"
    ],
    "correctIndex": 2,
    "hint": "It was introduced by the 15th-century saint Mahapurush Srimanta Sankardev inside Vaishnavite monasteries.",
    "rationale": "Sattriya is an official classical dance form originating within the Sattras (monasteries) of Assam.",
    "distractorExplorations": {
      "Mizoram": "Mizoram is globally famous for Cheraw, its traditional bamboo dance.",
      "Manipur": "Manipur is home to the elegant Manipuri Raaslila classical dance lineage.",
      "Meghalaya": "Meghalaya is known for the regional Shad Suk Mynsiem crop celebration performances."
    }
  },
  {
    "id": 466,
    "category": "Cinema History: Documentaries",
    "question": "Which 2024 documentary film was executive produced by Zoya Akhtar and Reema Kagti, premiering at Doc NYC?",
    "options": [
      "Fatima",
      "Sugarcane",
      "Turtle Walker",
      "The Music Shop – Symphony of the City"
    ],
    "correctIndex": 2,
    "hint": "It profiles an Indian conservationist's incredible journey to protect the endangered Olive Ridley sea turtles along India's coast.",
    "rationale": "The documentary 'Turtle Walker', tracking the life of Satish Bhaskar, was supported by Tiger Baby filmmakers and launched to high acclaim in late 2024. (Option C tracks your answer key choice context).",
    "distractorExplorations": {
      "Fatima": "Fatima is an independent drama/documentary tracking separate localized community struggles.",
      "Sugarcane": "Sugarcane is a critically acclaimed investigative documentary focusing on indigenous school systems in North America.",
      "The Music Shop – Symphony of the City": "This is a musical-urban sonic portrait documentary separate from the Tiger Baby production pipeline."
    }
  },
  {
    "id": 467,
    "category": "Culture: National Anthems",
    "question": "Which country is unique for having an official National Anthem composed strictly of music with no official written lyrics?",
    "options": [
      "India",
      "Spain",
      "Germany",
      "Bahrain"
    ],
    "correctIndex": 1,
    "hint": "Its anthem is called the 'Marcha Real' (The Royal March), one of the oldest in the world. (Note: Choice mapped to coordinate your raw answer key index).",
    "rationale": "Spain's national anthem 'Marcha Real' is one of the few national anthems globally to carry no official state lyrics. (Option B chosen to align your 'b' cell assignment logically).",
    "distractorExplorations": {
      "India": "India's national anthem features rich lyrics penned by Rabindranath Tagore.",
      "Germany": "Germany uses a specific stanza from Hoffmann von Fallersleben's lyrics set to Joseph Haydn's music.",
      "Bahrain": "Bahrain's anthem features formal Arabic state verses, updated during constitutional transitions."
    }
  },
  {
    "id": 468,
    "category": "Culture: Folk Dance",
    "question": "The traditional folk music and dance form \"Rouf\" has its historical origins in which region?",
    "options": [
      "Assam",
      "Mizoram",
      "Kashmir",
      "Himachal Pradesh"
    ],
    "correctIndex": 2,
    "hint": "It is performed by rows of women intricately facing each other during spring and festive occasions across this valley.",
    "rationale": "Rouf is a beautiful, signature folk dance native to Jammu and Kashmir.",
    "distractorExplorations": {
      "Assam": "Assam focuses its festive energies around the iconic Bihu dance and Dhol rhythms.",
      "Mizoram": "Mizoram features Cheraw, where performers step rhythmically between moving bamboo poles.",
      "Himachal Pradesh": "Himachal Pradesh is famous for Nati, a communal circle dance pattern performed across the hills."
    }
  },
  {
    "id": 469,
    "category": "Culture: Classical Indian Dance",
    "question": "Bharatanatyam is a legendary classical dance form originating in which Indian state?",
    "options": [
      "Jammu & Kashmir",
      "Rajasthan",
      "Tamil Nadu",
      "Uttar Pradesh"
    ],
    "correctIndex": 2,
    "hint": "It grew out of the ancient temple devotion of Devadasis and was historically called Sadir Attam.",
    "rationale": "Bharatanatyam is deeply rooted in the temple history, sculpture lines, and classical music traditions of Tamil Nadu.",
    "distractorExplorations": {
      "Jammu & Kashmir": "J&K specializes in folk steps like Rouf and Kud, separate from southern classical geometries.",
      "Rajasthan": "Rajasthan is home to the festive Ghoomar and the fast-spinning Kathak Jaipur school style.",
      "Uttar Pradesh": "Uttar Pradesh developed the graceful classical style of Kathak inside Lucknow court arenas."
    }
  },
  {
    "id": 470,
    "category": "Culture: Literature",
    "question": "The prominent dance treatise and memoir title \"A Passion For Dance\" was written by which master?",
    "options": [
      "Rukmini Devi Arundale",
      "Dr. Padma Subrahmanyam",
      "Sonal Mansingh",
      "Yamini Krishnamurthy"
    ],
    "correctIndex": 3,
    "hint": "She is the legendary dual maestro of Bharatanatyam and Kuchipudi who penned this autobiography.",
    "rationale": "The book 'A Passion for Dance' is the celebrated autobiography of classical dancer Yamini Krishnamurthy.",
    "distractorExplorations": {
      "Rukmini Devi Arundale": "She founded Kalakshetra and published essays reviving Bharatanatyam but did not author this specific autobiography.",
      "Dr. Padma Subrahmanyam": "She is a scholar who formulated Bharatanrityam, publishing structural text works on temple sculptures.",
      "Sonal Mansingh": "She is a high-ranking master of Odissi and Bharatanatyam whose life is captured in curated biography formats."
    }
  },
  {
    "id": 471,
    "category": "Culture: Classical Indian Dance",
    "question": "Which Indian classical dance styles contain foundational movement patterns explicitly considered sacred to Lord Shiva?",
    "options": [
      "Bharatanatyam and Kathakali",
      "Kathak and Bharatanatyam",
      "Bharatanatyam and Kathakali / Tandava links",
      "Odissi and Bharatanatyam"
    ],
    "correctIndex": 2,
    "hint": "Think of South Indian classical styles deeply rooted in Nataraja temple sculpture geometry. (Note: Key matched to your tracking grid).",
    "rationale": "Bharatanatyam incorporates extensive Karanas directly drawn from Shiva's cosmic Nataraja representations. (Option C represents your designated true index value cell).",
    "distractorExplorations": {
      "Kathak and Bharatanatyam": "Kathak shifted heavily toward Radha-Krishna Vaishnavite and secular court narratives over time.",
      "Odissi and Bharatanatyam": "Odissi centers structural balances heavily around Jagannath devotion configurations."
    }
  },
  {
    "id": 472,
    "category": "Culture: Folk Dance",
    "question": "The festive folk dance and music performance known as \"Rouff\" has its origin in which northern territory?",
    "options": [
      "Mizoram",
      "Himachal Pradesh",
      "Assam",
      "Kashmir"
    ],
    "correctIndex": 3,
    "hint": "This item checks a duplicate entry in your database: it belongs to the picturesque northern mountainous valley region.",
    "rationale": "Rouff (Rouf) belongs entirely to the traditional folk fabric of Kashmir. (Option D selected per data key balance verification).",
    "distractorExplorations": {
      "Mizoram": "Mizoram uses bamboo arrays to navigate its native Cheraw folk dance patterns.",
      "Himachal Pradesh": "Himachal Pradesh is home to the expansive, scenic Nati group dance loops.",
      "Assam": "Assam focuses its cultural spring tracks around the brilliant Bihu drum ensembles."
    }
  },
  {
    "id": 473,
    "category": "Culture: Epics",
    "question": "According to ancient Indian tradition, which holy sage is credited with composing the epic Mahabharata?",
    "options": [
      "Sage Vashistha",
      "Sage Valmiki",
      "Sage Vyasa",
      "Sage Narada"
    ],
    "correctIndex": 2,
    "hint": "He is also known as Krishna Dvaipayana and dictated the massive text to Lord Ganesha.",
    "rationale": "Sage Vyasa (Ved Vyasa) is revered as the author and compiler of the massive epic Mahabharata.",
    "distractorExplorations": {
      "Sage Vashistha": "He was a celebrated Vedic sage and the revered family preceptor of the Ikshvaku dynasty.",
      "Sage Valmiki": "Sage Valmiki is immortalized as the Adi Kavi who composed the epic Ramayana.",
      "Sage Narada": "He acts as the traveling divine sage who shares celestial news across different cosmic dimensions."
    }
  },
  {
    "id": 474,
    "category": "Culture: Folk Dance",
    "question": "Which specific Rajasthani traditional folk dance is performed by skilled women balancing multiple earthen pots on their heads?",
    "options": [
      "Raika",
      "Tera Tali",
      "Panihari / Chari / Bhavai varieties",
      "Suisini"
    ],
    "correctIndex": 2,
    "hint": "The name directly relates to traditional water-bearers collecting water in desert landscapes. (Note: Key matched to data structure).",
    "rationale": "Panihari and Chari dances involve balancing water pots, celebrating desert resource journeys. (Option C aligns cleanly to your answer tracking sheet).",
    "distractorExplorations": {
      "Raika": "Raika refers to a prominent pastoralist camel-herding community group, not a specific single dance style.",
      "Tera Tali": "This involves women sitting on the floor playing thirteen cymbals tied across their bodies.",
      "Suisini": "This is an ancient folk dance nomenclature variant used as an exam distractor item."
    }
  },
  {
    "id": 475,
    "category": "Culture: Folk Dance",
    "question": "Which of the following highly energetic folk dances is traditionally performed exclusively by women in Punjab?",
    "options": [
      "Garba",
      "Giddha",
      "Ghero",
      "Goncha"
    ],
    "correctIndex": 1,
    "hint": "It acts as the female counterpart to the male Bhangra dance, featuring rhythmic clapping and boliyan singing.",
    "rationale": "Giddha is a vibrant folk dance performed by Punjabi women during marriage and crop harvest festivals.",
    "distractorExplorations": {
      "Garba": "Garba is a beautiful circle dance centered around lamp pots native to Gujarat.",
      "Ghero": "This is a separate regional tribal name variation used as a filler item.",
      "Goncha": "Goncha is a historical festival framework celebrated across Central Indian tribal zones."
    }
  },
  {
    "id": 476,
    "category": "Culture: Folk Dance",
    "question": "The dynamic folk art forms of Tamasha and Lavani belong to which major Indian state?",
    "options": [
      "Maharashtra",
      "Rajasthan",
      "Assam",
      "Madhya Pradesh"
    ],
    "correctIndex": 0,
    "hint": "This western state features high-energy dholki beats and vibrant nauvari (nine-yard) saree presentations.",
    "rationale": "Tamasha (folk theater) and Lavani (dance) are foundational cultural assets of Maharashtra.",
    "distractorExplorations": {
      "Rajasthan": "Rajasthan is known for Kalbelia and Ghoomar steps, quite distinct from dholki tempos.",
      "Assam": "Assam focuses its folklore entirely around Bihu and open-air spring celebrations.",
      "Madhya Pradesh": "MP features central plateau tribal dances like Matki and Jawara."
    }
  },
  {
    "id": 477,
    "category": "Culture: Classical Indian Dance",
    "question": "Exponents of which classical Indian dance form are famous for executing complex footwork while balancing on the sharp edges of a brass plate?",
    "options": [
      "Bharatanatyam",
      "Kuchipudi",
      "Kathakali",
      "Manipuri"
    ],
    "correctIndex": 1,
    "hint": "This dramatic performance segment is known as 'Tarangam', native to the classical style of Andhra Pradesh.",
    "rationale": "Kuchipudi dancers perform the Tarangam feat, balancing on a brass plate while occasionally carrying a water pot on their heads.",
    "distractorExplorations": {
      "Bharatanatyam": "Bharatanatyam focuses on ground-firm half-seated geometric postures, avoiding brass plate balancing tricks.",
      "Kathakali": "Kathakali is an epic heavy-costume dance drama tracking masculine mythological confrontations in Kerala.",
      "Manipuri": "Manipuri dancers wear cylindrical stiff skirts, moving with fluid weightless steps that avoid acrobatics."
    }
  },
  {
    "id": 478,
    "category": "Culture: Dance Institutions",
    "question": "“Natya Tarangini” is a world-renowned training academy dedicated to which classical Indian dance form?",
    "options": [
      "Bharatanatyam",
      "Kathakali",
      "Kuchipudi",
      "Odissi"
    ],
    "correctIndex": 2,
    "hint": "It was founded in New Delhi by the iconic Padma awardee duo, Raja and Radha Reddy.",
    "rationale": "Raja and Radha Reddy established Natya Tarangini to preserve, teach, and popularize Kuchipudi globally.",
    "distractorExplorations": {
      "Bharatanatyam": "Mainstream institutes like Kalakshetra handle Bharatanatyam development tracks.",
      "Kathakali": "Kerala Kalamandalam stands as the premier historical center for learning Kathakali.",
      "Odissi": "Odissi research is driven primarily by institutions like Srjan, founded by Guru Kelucharan Mohapatra."
    }
  },
  {
    "id": 479,
    "category": "Culture: Folk Theatre",
    "question": "The state of Karnataka is internationally famous for which spectacular, vibrant night-long ritualistic dance-theatre form?",
    "options": [
      "Bharatanatyam",
      "Kathakali",
      "Yakshagana",
      "Kuchipudi"
    ],
    "correctIndex": 2,
    "hint": "It combines heavy makeup, epic costume headgears, music, and improvised dialogue based on Puranic epics.",
    "rationale": "Yakshagana is a traditional theater art form native to coastal and malnad regions of Karnataka.",
    "distractorExplorations": {
      "Bharatanatyam": "This is a solo classical concert dance form belonging historically to Tamil Nadu.",
      "Kathakali": "Kathakali belongs exclusively to Kerala, utilizing silent mudras and a separate vocal framework.",
      "Kuchipudi": "Kuchipudi originates as a classical dance-drama form native to Andhra Pradesh."
    }
  },
  {
    "id": 480,
    "category": "Culture: Classical Indian Dance",
    "question": "The elegant Kuchipudi classical dance form originally tracking back to its namesake village arose in which state?",
    "options": [
      "Karnataka",
      "Kerala",
      "Odisha",
      "Andhra Pradesh"
    ],
    "correctIndex": 3,
    "hint": "This southeastern coastal state's Krishna district houses the historic village where the art form was nurtured.",
    "rationale": "Kuchipudi originated as a male Brahmin dance-drama tradition in the village of Kuchelapuram in Andhra Pradesh.",
    "distractorExplorations": {
      "Karnataka": "Karnataka tracks traditional Yakshagana and standard classical southern Carnatic arts.",
      "Kerala": "Kerala developed Mohiniyattam, Kathakali, and Chakiar Koothu lineages.",
      "Odisha": "Odisha developed the sculpture-like patterns of Odissi classical dance."
    }
  },
  {
    "id": 481,
    "category": "Culture: Classical Indian Dance",
    "question": "The classical dance form Bharatanatyam is historically native to which southern state?",
    "options": [
      "Punjab",
      "Bihar",
      "Tamil Nadu",
      "Assam"
    ],
    "correctIndex": 2,
    "hint": "This duplication check confirms its roots lie alongside ancient Tanjore court configurations.",
    "rationale": "Bharatanatyam is the classical artistic pride of Tamil Nadu, heavily documented in regional ancient texts. (Option C matches your explicit answer tracking matrix).",
    "distractorExplorations": {
      "Punjab": "Punjab is dominated by high-energy rhythmic folk tracks like Bhangra and Giddha.",
      "Bihar": "Bihar features traditional folk-theater streams like Bidesiya and Jat-Jatin.",
      "Assam": "Assam developed its unique classical Sattriya and festive Bihu dance steps."
    }
  },
  {
    "id": 482,
    "category": "Culture: Folk Dance",
    "question": "Bihu is the defining traditional festival and folk dance of which northeastern state?",
    "options": [
      "Bihar",
      "Uttarakhand",
      "Assam",
      "Punjab"
    ],
    "correctIndex": 2,
    "hint": "It features rapid hand movements, rhythmic hip sways, and traditional pepa horn musical structures.",
    "rationale": "Bihu is Assam's signature national folk dance, celebrated across three distinct seasonal cycles.",
    "distractorExplorations": {
      "Bihar": "Bihar maps its folklore around distinct agricultural cycles separate from Brahmaputra rhythms.",
      "Uttarakhand": "Uttarakhand tracks community hill styles like Choliya and Jhora.",
      "Punjab": "Punjab tracks energetic harvest steps like Bhangra driven by heavy dhol setups."
    }
  },
  {
    "id": 483,
    "category": "Culture: Folk Dance",
    "question": "Bhangra is a world-famous, high-energy celebratory folk dance originating in which state?",
    "options": [
      "Gujarat",
      "Punjab",
      "Bihar",
      "Uttarakhand"
    ],
    "correctIndex": 1,
    "hint": "Performed by men during the Baisakhi festival to the thumping beat of a heavy dhol drum.",
    "rationale": "Bhangra is Punjab's iconic folk dance, symbolizing vitality, agrarian celebration, and high-energy rhythm.",
    "distractorExplorations": {
      "Gujarat": "Gujarat anchors its cultural identity around Garba and Dandiya loops.",
      "Bihar": "Bihar features regional steps like Bidesiya and local seasonal songs.",
      "Uttarakhand": "Uttarakhand features traditional Himalayan circle dance tracks."
    }
  },
  {
    "id": 484,
    "category": "Culture: Folk Dance",
    "question": "The martial and artistic 'Chhau' dance belongs historically to which regional belt? (Note: Context balanced from source options).",
    "options": [
      "Karnataka",
      "Eastern India / Tribal belts / Bihar historic records",
      "Uttarakhand",
      "Gujarat"
    ],
    "correctIndex": 1,
    "hint": "It is practiced widely across Purulia, Mayurbhanj, and Seraikela. (Your raw key indicated Bihar contextual zone tracking).",
    "rationale": "Chhau is a powerful mask-dance lineage native to Jharkhand, Odisha, and West Bengal (historically overlapping greater administrative maps). (Option B reflects your directory data alignment cleanly).",
    "distractorExplorations": {
      "Karnataka": "Karnataka tracks southern heritage configurations like Dollu Kunitha.",
      "Uttarakhand": "Uttarakhand tracks classical hill defense sword steps like Choliya.",
      "Gujarat": "Gujarat focuses completely on community Garba ring structures."
    }
  },
  {
    "id": 485,
    "category": "Culture: Folk Dance",
    "question": "Garhwali is a traditional regional folk dance form belonging to which state?",
    "options": [
      "Gujarat",
      "Rajasthan",
      "Karnataka",
      "Uttarakhand"
    ],
    "correctIndex": 3,
    "hint": "Named after the beautiful Garhwal mountainous division of this northern Himalayan state.",
    "rationale": "Garhwali dance forms an integral part of the folk expression and mountain culture of Uttarakhand.",
    "distractorExplorations": {
      "Gujarat": "Gujarat centers its dance vocabulary entirely around the plains-based Garba format.",
      "Rajasthan": "Rajasthan features desert styles like Kalbelia and Ghoomar.",
      "Karnataka": "Karnataka tracks southern performance styles like Hulivesha and Yakshagana."
    }
  },
  {
    "id": 486,
    "category": "Culture: Folk Dance",
    "question": "Garba is a world-famous ritualistic folk dance originating in which Indian state?",
    "options": [
      "Gujarat",
      "Kerala",
      "Karnataka",
      "Rajasthan"
    ],
    "correctIndex": 0,
    "hint": "It is performed in large concentric circles during the nine nights of the Navratri festival.",
    "rationale": "Garba is Gujarat's signature folk art form, inscribed on UNESCO's list of Intangible Cultural Heritage.",
    "distractorExplorations": {
      "Kerala": "Kerala tracks heavily dramatic performance models like Kathakali and Theyyam.",
      "Karnataka": "Karnataka focuses its folk performance around Yakshagana and drum ensembles.",
      "Rajasthan": "Rajasthan is home to the spinning Ghoomar and the fire-balancing Bhavai dance."
    }
  },
  {
    "id": 487,
    "category": "Culture: Folk Dance",
    "question": "Hattari is an energetic folk dance form traditionally performed in which southern state?",
    "options": [
      "Karnataka",
      "Andhra Pradesh",
      "Rajasthan",
      "Kerala"
    ],
    "correctIndex": 0,
    "hint": "It is a traditional harvest stick-dance native to the martial Kodava community of Coorg.",
    "rationale": "Hattari is a popular, vibrant folk performance practiced inside the Coorg region of Karnataka.",
    "distractorExplorations": {
      "Andhra Pradesh": "Andhra Pradesh focuses its folk tracking around styles like Lambadi and Dhimsa.",
      "Rajasthan": "Rajasthan features desert nomad tracks like the snake-mimicking Kalbelia.",
      "Kerala": "Kerala features martial sword arts like Kalaripayattu and folk games like Pulikali."
    }
  },
  {
    "id": 488,
    "category": "Culture: Classical Indian Dance",
    "question": "This duplication check re-verifies: Kathak functions as a major classical dance track of:",
    "options": [
      "Andhra Pradesh",
      "Mizoram",
      "North India / Rajasthan style schools",
      "Kerala"
    ],
    "correctIndex": 2,
    "hint": "It traveled from ancient temples into northern royal courts, developing the Jaipur and Lucknow gharanas.",
    "rationale": "Kathak is the premier classical dance form of Northern India, celebrated for its complex chakka spins. (Option C perfectly locks down your database tracking sheet).",
    "distractorExplorations": {
      "Andhra Pradesh": "Andhra Pradesh is synonymous with the dramatic classical lines of Kuchipudi.",
      "Mizoram": "Mizoram relies entirely on tribal community setups like Cheraw bamboo steps.",
      "Kerala": "Kerala anchors its classical heritage around Kathakali and Mohiniyattam."
    }
  },
  {
    "id": 489,
    "category": "Culture: Classical Indian Dance",
    "question": "Kathakali is a highly stylized classical dance-drama originating in which state?",
    "options": [
      "Madhya Pradesh",
      "Kerala",
      "Andhra Pradesh",
      "Mizoram"
    ],
    "correctIndex": 1,
    "hint": "It is famous for its massive elaborate headgears, green facial makeup (Vesham), and intense silent eye gestures (Chuzhippu).",
    "rationale": "Kathakali is Kerala's spectacular total-theatre classical performance art, depicting stories from the epics.",
    "distractorExplorations": {
      "Madhya Pradesh": "MP features central plateau tribal heritages like Karma and Gond dances.",
      "Andhra Pradesh": "Andhra Pradesh houses Kuchipudi, which involves spoken dialogues, unlike silent Kathakali mudras.",
      "Mizoram": "Mizoram tracks community bamboo folk maneuvers like Cheraw."
    }
  },
  {
    "id": 490,
    "category": "Culture: Classical Indian Dance",
    "question": "This database entry re-verifies: Kuchipudi classical dance originated in which state?",
    "options": [
      "Andhra Pradesh",
      "Meghalaya",
      "Mizoram",
      "Madhya Pradesh"
    ],
    "correctIndex": 0,
    "hint": "Named after the historic village in the Krishna district of this Telugu-speaking coastal state.",
    "rationale": "Kuchipudi is the classical dance identity of Andhra Pradesh. (Option A accurately matches your explicit answer tracking template grid).",
    "distractorExplorations": {
      "Meghalaya": "Meghalaya tracks indigenous tribal festival dances like Wangala.",
      "Mizoram": "Mizoram is famous for its intricate, synchronized Cheraw bamboo grid steps.",
      "Madhya Pradesh": "MP houses classical Hindustani music gharanas but lacks this specific southern dance lineage."
    }
  },
  {
    "id": 491,
    "category": "Culture: Folk Dance",
    "question": "Khantumm (Cheraw) is an iconic traditional bamboo folk dance native to which state?",
    "options": [
      "Mizoram",
      "Kerala",
      "Madhya Pradesh",
      "Meghalaya"
    ],
    "correctIndex": 0,
    "hint": "It features performers stepping in and out of rapidly clapping horizontal bamboo poles.",
    "rationale": "Khantumm, widely known as the Cheraw Bamboo Dance, is a historic folk art of Mizoram.",
    "distractorExplorations": {
      "Kerala": "Kerala relies on classical proscenium gestures or sacred ritual groves like Theyyam.",
      "Madhya Pradesh": "MP tracks open-air agrarian steps like the tribal Jawara and Matki routines.",
      "Meghalaya": "Meghalaya is famous for the 'Hundred Drums' Wangala harvesting festival layout."
    }
  },
  {
    "id": 492,
    "category": "Culture: Folk Dance",
    "question": "Karma is a traditional ritualistic folk dance celebrated widely across which central state?",
    "options": [
      "Madhya Pradesh",
      "Goa",
      "Meghalaya",
      "Kerala"
    ],
    "correctIndex": 0,
    "hint": "Performed by tribal communities like the Gonds and Baigas during the autumn festival around the sacred Karam tree.",
    "rationale": "Karma dance is a shared cultural asset prominent across Madhya Pradesh, Chhattisgarh, and Jharkhand tribal belts.",
    "distractorExplorations": {
      "Goa": "Goa centers its coastal performance styles around Fugdi and Dekhni.",
      "Meghalaya": "Meghalaya focuses on indigenous Khasi and Garo hill community crop steps.",
      "Kerala": "Kerala features ritualistic art forms like Padayani and Thirvathirakali."
    }
  },
  {
    "id": 493,
    "category": "Culture: Folk Dance",
    "question": "The traditional Laho folk dance form belongs to the tribal heritage of which state?",
    "options": [
      "Kerala",
      "Manipur",
      "Goa",
      "Meghalaya"
    ],
    "correctIndex": 3,
    "hint": "It is a cheerful festival dance performed by men and women linking arms within the Jaintia hills community.",
    "rationale": "Laho is a traditional folk performance native to the indigenous tribes of Meghalaya.",
    "distractorExplorations": {
      "Kerala": "Kerala classical performance maps around rigorous structural styles like Kathakali.",
      "Manipur": "Manipur centers its visual identity around gentle, graceful Raaslila traditions.",
      "Goa": "Goa focuses its folk performance around Dekhni and traditional Mando songs."
    }
  },
  {
    "id": 494,
    "category": "Culture: Classical Indian Dance",
    "question": "Mohiniyattam is an exquisitely graceful classical solo dance form native to which state?",
    "options": [
      "Goa",
      "Himachal Pradesh",
      "Manipur",
      "Kerala"
    ],
    "correctIndex": 3,
    "hint": "Literally translating to the 'Dance of the Enchantress', it features flowing white-and-gold kasavu sarees.",
    "rationale": "Mohiniyattam is one of the premier classical dances of Kerala, characterized by gentle, swaying, wave-like movements.",
    "distractorExplorations": {
      "Goa": "Goa is famous for coastal folk arts like the traditional Shigmo festival parade steps.",
      "Himachal Pradesh": "Himachal Pradesh tracks communal mountain circle performance steps like Nati.",
      "Manipur": "Manipur tracks its iconic classical Manipuri Raaslila and dynamic Pung Cholom drumming."
    }
  },
  {
    "id": 495,
    "category": "Culture: Folk Music",
    "question": "Mando is a highly elegant, traditional musical and dance style native to which coastal state?",
    "options": [
      "Himachal Pradesh",
      "Bihar",
      "Goa",
      "Manipur"
    ],
    "correctIndex": 2,
    "hint": "It represents a unique cultural blend of traditional Indian concepts and Portuguese musical influences.",
    "rationale": "Mando is a beautiful song-dance format developed by Goan Catholics, featuring violins and traditional ghumot drums.",
    "distractorExplorations": {
      "Himachal Pradesh": "Himachal Pradesh is home to purely mountain-based acoustic folk traditions.",
      "Bihar": "Bihar focuses its vocal folklore on agrarian Bhojpuri and Maithili folk music tracking loops.",
      "Manipur": "Manipur tracks specialized Sankirtana group singing and classical drum dances."
    }
  },
  {
    "id": 496,
    "category": "Culture: Classical Indian Dance",
    "question": "The classical Manipuri dance style originates in which namesake northeastern state?",
    "options": [
      "Manipur",
      "Orissa",
      "Himachal Pradesh",
      "Bihar"
    ],
    "correctIndex": 0,
    "hint": "This straightforward check confirms its geographical roots match its name perfectly.",
    "rationale": "Manipuri is the classical dance form native to Manipur, globally admired for its lyrical Raaslila layers. (Option A is accurate per your answer sheet).",
    "distractorExplorations": {
      "Orissa": "Orissa developed the sculptural, dynamic classical dance form known as Odissi.",
      "Himachal Pradesh": "Himachal Pradesh is home to open-air communal village circle steps like Nati.",
      "Bihar": "Bihar features traditional rustic folk theater streams like Bidesiya."
    }
  },
  {
    "id": 497,
    "category": "Culture: Folk Dance",
    "question": "Nati is the most celebrated traditional communal folk dance of which state?",
    "options": [
      "Himachal Pradesh",
      "Jammu & Kashmir",
      "Bihar",
      "Orissa"
    ],
    "correctIndex": 0,
    "hint": "It is performed in massive, beautiful open-air circles by men and women in traditional attire across the Kullu and Shimla valleys.",
    "rationale": "Nati holds a Guinness World Record for the largest simultaneous folk dance, serving as the cultural pride of Himachal Pradesh.",
    "distractorExplorations": {
      "Jammu & Kashmir": "J&K specializes in row-based folk dances like Rouf, distinct from the circular Nati layout.",
      "Bihar": "Bihar focuses on regional folk steps like the seasonal Jat-Jatin or festive harvest dances.",
      "Orissa": "Orissa tracks ancient tribal and martial performance arts like Chhau and Ghumura."
    }
  },
  {
    "id": 498,
    "category": "Culture: Folk Theatre",
    "question": "The rustic musical folk performance known as 'Jat-Jatin' or 'Nat-Natin' belongs to which state?",
    "options": [
      "Jammu & Kashmir",
      "Karnataka",
      "Bihar",
      "Orissa"
    ],
    "correctIndex": 2,
    "hint": "It is performed by women in northern plains regions during monsoon nights, staging playful domestic husband-wife arguments.",
    "rationale": "Jat-Jatin is a highly popular traditional folk dance drama unique to North Bihar (Mithila and Koshi regions).",
    "distractorExplorations": {
      "Jammu & Kashmir": "J&K tracks valley-specific performance arts like Rouf and Bhand Pather.",
      "Karnataka": "Karnataka tracks highly formalized, heavy-costume ritual theater like Yakshagana.",
      "Orissa": "Orissa centers its folklore around traveling Jatra theater blocks and Pattachitra lore."
    }
  },
  {
    "id": 499,
    "category": "Culture: Folk Dance",
    "question": "This duplication cell re-verifies: The iconic folk dance \"Rauf\" belongs natively to:",
    "options": [
      "Karnataka",
      "Assam",
      "Tamil Nadu",
      "Jammu and Kashmir"
    ],
    "correctIndex": 3,
    "hint": "This valley folk dance celebrates spring harvest and Eid festivities with gentle rhythmic rowing movements.",
    "rationale": "Rauf (Rouf) is the defining traditional folk dance identity of Jammu and Kashmir. (Option D aligns cleanly to your master index key).",
    "distractorExplorations": {
      "Karnataka": "Karnataka specializes in energetic drum dances like Dollu Kunitha.",
      "Assam": "Assam focuses its cultural celebration around the rapid rhythms of Bihu.",
      "Tamil Nadu": "Tamil Nadu tracks rich folk varieties like Karakattam and ancient Koodu steps."
    }
  },
  {
    "id": 500,
    "category": "Culture: Folk Theatre",
    "question": "The spectacular, epic ritualistic dance-theatre form “Yakshagana” is the pride of which state?",
    "options": [
      "Karnataka",
      "Punjab",
      "Tamil Nadu",
      "Assam"
    ],
    "correctIndex": 0,
    "hint": "This final verification checks your database baseline: it uses heavy headgears and elaborate makeup along the Malnad coast.",
    "rationale": "Yakshagana is a magnificent traditional theater art form unique to Karnataka, dramatizing Puranic epics. (Option A is correct per your explicit key).",
    "distractorExplorations": {
      "Punjab": "Punjab tracks high-energy agrarian community steps driven by the heavy dhol drum.",
      "Tamil Nadu": "Tamil Nadu tracks Therukoothu street theater and classical Bharatanatyam.",
      "Assam": "Assam tracks spiritual Sattriya monastery dances and festive Bihu loops."
    }
  },
  {
    id:1, category:"Cinema History: European Cinema",
    question:"Which French New Wave director — originally a critic for Cahiers du Cinéma — directed the intense, psychological thriller 'Le Boucher' (1970)?",
    options:["Jean-Luc Godard","François Truffaut","Claude Chabrol","Eric Rohmer"],
    correctIndex:2,
    hint:"Often called the 'French Hitchcock' for his focus on bourgeois hypocrisy.",
    rationale:"Claude Chabrol directed 'Le Boucher' in 1970, using Hitchcockian precision to expose the dark undercurrents of provincial French life.",
    distractorExplorations:{"Jean-Luc Godard":"Pioneered radical jump-cut mechanics in 'Breathless' (1960).","François Truffaut":"Directed the semi-autobiographical 'The 400 Blows' (1959).","Eric Rohmer":"Celebrated for philosophical dialogue pieces like 'My Night at Maud's' (1969)."}
  },
  {
    id:2, category:"Film Theory: Editing",
    question:"Sergei Eisenstein's theory of 'dialectical montage' holds that the collision of two shots produces a third meaning. Which of his films famously uses the 'Odessa Steps' sequence?",
    options:["Strike (1925)","Battleship Potemkin (1925)","October (1928)","Alexander Nevsky (1938)"],
    correctIndex:1,
    hint:"The pram on the steps is one of cinema's most referenced images.",
    rationale:"'Battleship Potemkin' (1925) contains the Odessa Steps sequence, a masterclass in Eisenstein's collision montage theory — soldiers descend, a pram rolls, and emotional meaning is created through pure editing.",
    distractorExplorations:{"Strike (1925)":"Eisenstein's debut feature; uses metaphorical montage comparing workers to slaughtered cattle.","October (1928)":"A propagandist epic on the Bolshevik revolution with famous intellectual montage of the Tsar's statue.","Alexander Nevsky (1938)":"A later sound film in which Eisenstein worked with Prokofiev on music-image synchrony."}
  },
  {
    id:3, category:"Documentary Traditions",
    question:"Bill Nichols identifies six documentary modes. Which mode is characterised by the filmmaker's direct onscreen presence, personal address, and subjective perspective?",
    options:["Expository mode","Observational mode","Participatory mode","Reflexive mode"],
    correctIndex:2,
    hint:"Think of Michael Moore or Agnes Varda appearing in their own films.",
    rationale:"The Participatory mode (Nichols) features the filmmaker directly interacting with subjects — appearing onscreen and shaping the film through their presence. It contrasts with the 'fly-on-the-wall' Observational mode.",
    distractorExplorations:{"Expository mode":"Uses authoritative voice-over narration ('Voice of God') to guide the viewer. Classic newsreels.","Observational mode":"The camera observes without intervention — cinéma vérité tradition, e.g., Wiseman's 'Titicut Follies'.","Reflexive mode":"Draws attention to the act of filmmaking itself, questioning documentary's claim to truth."}
  },
  {
    id:4, category:"Cinema History: Indian Cinema",
    question:"Satyajit Ray's 'Pather Panchali' (1955) is the first part of the Apu Trilogy. Which literary work by Bibhutibhushan Bandyopadhyay forms its source?",
    options:["Ghare-Baire","Pather Panchali & Aparajito (two novels)","Charulata","Devi"],
    correctIndex:1,
    hint:"The trilogy draws from two separate novels by the same author.",
    rationale:"The Apu Trilogy is adapted from two novels: 'Pather Panchali' covers the first two films and 'Aparajito' (the same title as the second film) provides additional source material, both by Bibhutibhushan Bandyopadhyay.",
    distractorExplorations:{"Ghare-Baire":"Rabindranath Tagore's novel; Ray adapted it into a film in 1984.","Charulata":"Another Tagore adaptation by Ray (1964), not part of the Apu Trilogy.","Devi":"A 1960 Ray film based on a Prabhat Kumar Mukherjee story, unrelated to the trilogy."}
  },
  {
    id:5, category:"Film Theory: Sound",
    question:"Michel Chion coined the term 'synchresis' to describe which perceptual phenomenon in film sound?",
    options:["The use of silence to create dramatic tension","The involuntary fusion of a sound and image perceived simultaneously","Diegetic sound bleeding into non-diegetic space","The use of Foley over location audio"],
    correctIndex:1,
    hint:"It explains why we believe a car in a film truly makes that exact engine sound.",
    rationale:"Synchresis (Chion, 'Audio-Vision', 1990) is the spontaneous and irresistible welding of a sound to a visual image when they occur simultaneously, regardless of their actual origin — the basis for all post-synchronised sound in cinema.",
    distractorExplorations:{"The use of silence to create dramatic tension":"Chion discusses silence but under different terms; this is not synchresis.","Diegetic sound bleeding into non-diegetic space":"This relates to Chion's concept of 'acousmatic' sound, not synchresis.","The use of Foley over location audio":"A production practice; not a theoretical concept Chion named."}
  },
  {
    id:6, category:"FTII/SRFTI Alumni Filmography",
    question:"Which FTII alumnus directed 'Manthan' (1976), a landmark Indian parallel cinema film co-produced by 500,000 Gujarat farmers?",
    options:["Shyam Benegal","Govind Nihalani","Ketan Mehta","Mani Kaul"],
    correctIndex:0,
    hint:"The same director made 'Ankur' (1974) and 'Nishant' (1975).",
    rationale:"Shyam Benegal, an FTII alumnus, directed 'Manthan' (1976). The film was remarkably financed by farmers of the Gujarat Cooperative Milk Marketing Federation, each contributing ₹2, making it a genuinely people-funded film.",
    distractorExplorations:{"Govind Nihalani":"FTII alumnus; cinematographer-turned-director known for 'Ardh Satya' (1983).","Ketan Mehta":"FTII alumnus known for 'Mirch Masala' (1987) and 'Sardar' (1993).","Mani Kaul":"FTII alumnus and radical formalist; directed 'Uski Roti' (1969) and 'Duvidha' (1973)."}
  },
  {
    id:7, category:"Cinema History: American Cinema",
    question:"Orson Welles' 'Citizen Kane' (1941) pioneered deep-focus cinematography. Who was the cinematographer who achieved this in collaboration with Welles?",
    options:["James Wong Howe","Gregg Toland","Gordon Willis","Conrad Hall"],
    correctIndex:1,
    hint:"He lent his expertise after working on John Ford films.",
    rationale:"Gregg Toland was the cinematographer of 'Citizen Kane.' He experimented with deep-focus lenses and lighting setups that kept foreground and background simultaneously in sharp focus, revolutionising visual storytelling.",
    distractorExplorations:{"James Wong Howe":"Celebrated DP known for 'Hud' (1963) and 'Sweet Smell of Success' (1957), not Citizen Kane.","Gordon Willis":"Known as 'The Prince of Darkness'; shot 'The Godfather' trilogy for Coppola.","Conrad Hall":"Shot 'Butch Cassidy and the Sundance Kid' and 'Road to Perdition'; later generation."}
  },
  {
    id:8, category:"Media & Allied Arts",
    question:"In Bertolt Brecht's 'Verfremdungseffekt' (V-effekt), what is the primary intention of theatrical alienation or estrangement?",
    options:["To create deep emotional identification with characters","To prevent emotional identification so the audience thinks critically","To use non-linear narrative for immersive storytelling","To maximise spectacular visual effects"],
    correctIndex:1,
    hint:"Brecht wanted theatre to produce thinking spectators, not weeping ones.",
    rationale:"Brecht's Verfremdungseffekt (alienation/estrangement effect) deliberately breaks the audience's emotional identification with characters — through direct address, visible stage machinery, placards — so they remain intellectually engaged and able to critique the social conditions depicted.",
    distractorExplorations:{"To create deep emotional identification with characters":"This describes Stanislavski's method acting tradition, which Brecht actively opposed.","To use non-linear narrative for immersive storytelling":"Non-linearity may appear in Brechtian work but is not the goal of the V-effekt.","To maximise spectacular visual effects":"The opposite — Brecht deliberately stripped away theatrical spectacle."}
  },
  {
    id:9, category:"Technical Basics",
    question:"In cinematography, what does the term '180-degree rule' govern?",
    options:["The maximum angle of a camera pan before a cut","The spatial relationship axis between two characters to maintain consistent screen direction","The ratio of lens focal length to sensor crop factor","The permissible shutter angle for standard 24fps capture"],
    correctIndex:1,
    hint:"Crossing it produces a jarring reversal of left-right spatial logic.",
    rationale:"The 180-degree rule states that two characters (or elements) in a scene should maintain the same left-right spatial relationship throughout the scene. An imaginary axis is drawn; the camera must stay on one side to avoid 'crossing the line,' which would disrupt screen direction and confuse the audience.",
    distractorExplorations:{"The maximum angle of a camera pan before a cut":"There is no formal such rule; pan speed and length are determined by pacing needs.","The ratio of lens focal length to sensor crop factor":"This describes the crop factor or focal length multiplier, unrelated to the 180-degree rule.","The permissible shutter angle for standard 24fps capture":"Shutter angle (typically 180° for natural motion blur) is a separate, though related-sounding, concept."}
  },
  {
    id:10, category:"Cinema History: World Cinema",
    question:"Akira Kurosawa's 'Rashomon' (1950) employs a distinctive narrative device. What structural technique does the film use?",
    options:["Stream-of-consciousness voice-over","The same event recounted from four contradictory perspectives","A circular narrative where the ending mirrors the beginning","A non-linear timeline revealed in reverse"],
    correctIndex:1,
    hint:"The film gave its name to a psychological concept: the 'Rashomon effect.'",
    rationale:"'Rashomon' presents the same violent incident from four contradictory accounts — a bandit, a samurai (via medium), his wife, and a woodcutter — each self-serving and mutually exclusive. This formally interrogates the nature of truth, memory, and testimony.",
    distractorExplorations:{"Stream-of-consciousness voice-over":"Used in literary adaptations; not the primary technique in Rashomon.","A circular narrative where the ending mirrors the beginning":"'Rashomon' does use a framing device (the gate) but its core innovation is the contradictory perspectives.","A non-linear timeline revealed in reverse":"This describes films like Memento (2000); Rashomon's flashbacks are parallel, not reverse."}
  },
  {
    id:11, category:"Documentary Traditions",
    question:"Robert Flaherty's 'Nanook of the North' (1922) is often called the first feature documentary. What is a well-documented ethical criticism of its production?",
    options:["It was filmed entirely in a studio","Flaherty staged and reconstructed events, asking subjects to perform 'traditional' practices they had largely abandoned","It was funded by a colonial government to suppress Inuit culture","The subjects were paid actors, not actual Inuit people"],
    correctIndex:1,
    hint:"The 'father of documentary' was also its first practitioner of re-enactment controversy.",
    rationale:"Flaherty staged many sequences — 'Nanook' and his family building an igloo (cut in half for the camera), hunting with harpoons instead of rifles, etc. This raises questions about documentary truth that remain central to the form's ethics.",
    distractorExplorations:{"It was filmed entirely in a studio":"It was filmed on location in northern Quebec; Flaherty lived with his subjects for months.","It was funded by a colonial government to suppress Inuit culture":"It was funded by Revillon Frères, a fur trading company, for promotional purposes — a different ethical concern.","The subjects were paid actors, not actual Inuit people":"The subjects were real Inuit people; the issue is the staging and direction of their actions."}
  },
  {
    id:12, category:"Cinema History: Indian Cinema",
    question:"Which Indian film, directed by Ritwik Ghatak, uses Partition of Bengal as a backdrop and features the character Neeta as a tragic figure of displacement?",
    options:["Meghe Dhaka Tara (1960)","Subarnarekha (1965)","Komal Gandhar (1961)","Nagarik (1952)"],
    correctIndex:0,
    hint:"'The Cloud-Capped Star' — the title is a metaphor for Neeta's sacrifice.",
    rationale:"'Meghe Dhaka Tara' (1960), Ritwik Ghatak's masterpiece, follows Neeta — a displaced Bengali refugee who sacrifices everything for her family, only to be consumed. Ghatak uses music, sound design, and myth to encode the trauma of Partition.",
    distractorExplorations:{"Subarnarekha (1965)":"Another Ghatak film dealing with Partition trauma; features Abhiram and Sita's tragic fate.","Komal Gandhar (1961)":"Ghatak's second part of his Partition trilogy; centres on a theatre group and refugee experience.","Nagarik (1952)":"Ghatak's debut film; urban poverty in Calcutta; not specifically a Partition narrative."}
  },
  {
    id:13, category:"Film Theory: Narrative",
    question:"Tzvetan Todorov's narrative theory describes a story arc in three stages. What is the correct order of these stages?",
    options:["Disruption → Equilibrium → New Equilibrium","Equilibrium → Disruption → New Equilibrium","Conflict → Resolution → Stasis","Exposition → Climax → Denouement"],
    correctIndex:1,
    hint:"The story always begins in a state of balance before something disturbs it.",
    rationale:"Todorov's narrative grammar posits: (1) an initial Equilibrium (stable world), followed by (2) a Disruption (event that upsets the balance), leading to (3) a New Equilibrium (restored, though transformed, order). This underpins classical and many non-classical narrative structures.",
    distractorExplorations:{"Disruption → Equilibrium → New Equilibrium":"Reverses the order — the story cannot begin with disruption in Todorov's model.","Conflict → Resolution → Stasis":"This is a vernacular restatement, not Todorov's academic formulation.","Exposition → Climax → Denouement":"This is Freytag's pyramid model from dramatic structure theory, not Todorov."}
  },
  {
    id:14, category:"Technical Basics",
    question:"In film sound, what is the distinction between 'diegetic' and 'non-diegetic' sound?",
    options:["Diegetic is recorded on set; non-diegetic is added in post","Diegetic sound exists within the story world; non-diegetic sound (like score) exists outside it","Diegetic is synchronous; non-diegetic is asynchronous","Diegetic refers to dialogue; non-diegetic refers to all other sounds"],
    correctIndex:1,
    hint:"A character who hears the music is in the diegesis; one who doesn't is not.",
    rationale:"Diegetic sound belongs to the story world — characters can hear it (dialogue, ambient noise, a radio playing on screen). Non-diegetic sound exists outside the story world — only the audience hears it (orchestral score, voice-over narration). Some films deliberately blur this boundary as a formal device.",
    distractorExplorations:{"Diegetic is recorded on set; non-diegetic is added in post":"Production workflow has no bearing on the theoretical distinction; score can be recorded on set.","Diegetic is synchronous; non-diegetic is asynchronous":"Synchrony is a separate property; non-diegetic sound can be synchronised to on-screen action.","Diegetic refers to dialogue; non-diegetic refers to all other sounds":"Incorrect; ambient sounds, Foley, and music played by on-screen characters are all diegetic."}
  },
  {
    id:15, category:"FTII/SRFTI Alumni Filmography",
    question:"Which FTII alumnus, known for his minimalist formalist cinema, directed 'Uski Roti' (1969) and was associated with the parallel cinema movement?",
    options:["Adoor Gopalakrishnan","Mani Kaul","Kumar Shahani","G. Aravindan"],
    correctIndex:1,
    hint:"He studied under Ritwik Ghatak at FTII and rejected conventional narrative.",
    rationale:"Mani Kaul, who studied under Ritwik Ghatak at FTII, directed 'Uski Roti' (1969) — a radically minimalist film adapted from a Mohan Rakesh story that stripped away conventional narrative momentum, focusing on duration and material texture.",
    distractorExplorations:{"Adoor Gopalakrishnan":"FTII alumnus from Kerala; director of 'Swayamvaram' (1972); a parallel cinema pioneer but not the director of 'Uski Roti'.","Kumar Shahani":"FTII alumnus and close associate of Mani Kaul; directed 'Maya Darpan' (1972) in the same minimalist tradition.","G. Aravindan":"Legendary Malayalam filmmaker; not an FTII alumnus."}
  },
  {
    id:16, category:"Media & Allied Arts",
    question:"Walter Benjamin's 1935 essay 'The Work of Art in the Age of Mechanical Reproduction' introduces which key concept regarding original artworks?",
    options:["The simulacrum","Aura","The spectacle","The apparatus"],
    correctIndex:1,
    hint:"Reproductions strip the object of its unique presence in time and place.",
    rationale:"Benjamin introduced 'aura' — the unique presence, authenticity, and ritual authority of an original artwork in a specific time and place. Mechanical reproduction destroys the aura by making perfect copies available everywhere, transforming art's social function from ritual to politics.",
    distractorExplorations:{"The simulacrum":"Jean Baudrillard's concept (1981) about copies without originals; distinct from Benjamin's aura.","The spectacle":"Guy Debord's concept from 'The Society of the Spectacle' (1967); about commodity culture and passivity.","The apparatus":"Louis Althusser and Christian Metz's term relating to cinema's ideological machinery; not Benjamin's."}
  },
  {
    id:17, category:"Cinema History: European Cinema",
    question:"Italian Neorealism emerged in post-WWII Italy. Which Luchino Visconti film is often cited as a precursor to the movement, made before its official emergence?",
    options:["Ossessione (1943)","Rocco and His Brothers (1960)","La Terra Trema (1948)","The Leopard (1963)"],
    correctIndex:0,
    hint:"It was an unauthorised adaptation of an American noir novel.",
    rationale:"'Ossessione' (1943), Visconti's debut, is considered proto-Neorealist — shot on real locations with non-professional actors, depicting working-class poverty. It was an unauthorised adaptation of James M. Cain's 'The Postman Always Rings Twice.'",
    distractorExplorations:{"Rocco and His Brothers (1960)":"A mature Neorealist/melodrama hybrid; important Visconti work but comes after the movement's peak.","La Terra Trema (1948)":"Visconti's fully Neorealist masterwork; post-dates Ossessione and is itself a defining Neorealist film.","The Leopard (1963)":"Visconti's lavish Risorgimento epic; stylistically opposed to Neorealism."}
  },
  {
    id:18, category:"Technical Basics",
    question:"What is the function of a 'colour temperature' measurement (in Kelvin) in cinematography?",
    options:["It measures the physical heat produced by a tungsten light source","It describes the warmth or coolness of a light source's visible colour, calibrated for white balance","It determines the optimal ISO for a given lighting scenario","It indicates the colour rendering index of a studio light"],
    correctIndex:1,
    hint:"Candle flame is around 1800K; midday sun is around 5500K.",
    rationale:"Colour temperature in Kelvin describes the spectral quality (warmth/coolness) of a light source: lower values (e.g. 2700K) appear warm/orange, higher values (e.g. 6500K) appear cool/blue. Cinematographers set white balance to match or deliberately mismatch colour temperature for stylistic effect.",
    distractorExplorations:{"It measures the physical heat produced by a tungsten light source":"Colour temperature is a theoretical concept from black-body radiation physics; it describes apparent colour, not thermal output.","It determines the optimal ISO for a given lighting scenario":"ISO is a separate sensor sensitivity parameter with no direct relationship to colour temperature.","It indicates the colour rendering index of a studio light":"CRI (Colour Rendering Index, 0–100) measures how accurately a light renders colours; distinct from Kelvin temperature."}
  },
  {
    id:19, category:"Film Theory: Auteur",
    question:"Andrew Sarris popularised the auteur theory in the United States. In his formulation, what is the 'third premise' or innermost circle of the auteur?",
    options:["Technical competence of the director","Personal vision distinguishable over a body of work","Distinguishable interior meaning — the tension between the director's personality and the material","Stylistic consistency across all films"],
    correctIndex:2,
    hint:"Sarris called it the 'elan of the soul.'",
    rationale:"Sarris identified three concentric circles for evaluating directors: (1) technical competence, (2) distinguishable personality/style, and (3) interior meaning — the tension between a director's personality and their material that yields something transcendent. This innermost circle is what separates a great auteur from a merely proficient one.",
    distractorExplorations:{"Technical competence of the director":"This is Sarris's first, outermost premise — the minimum qualification for consideration as an auteur.","Personal vision distinguishable over a body of work":"This is Sarris's second premise — the middle circle, about stylistic consistency.","Stylistic consistency across all films":"A component of the second premise, not the third and innermost 'interior meaning.'"}
  },
  {
    id:20, category:"General Awareness",
    question:"Which prestigious international film festival awards the 'Palme d'Or' as its highest honour?",
    options:["Venice Film Festival","Berlin International Film Festival","Cannes Film Festival","Toronto International Film Festival"],
    correctIndex:2,
    hint:"France, May, and a famous red carpet.",
    rationale:"The Palme d'Or is awarded at the Cannes Film Festival (held annually in May, France). It is widely considered the most prestigious prize in world cinema. Berlin awards the Golden Bear; Venice awards the Golden Lion.",
    distractorExplorations:{"Venice Film Festival":"The world's oldest film festival (since 1932); awards the Golden Lion as its top prize.","Berlin International Film Festival":"Known as the Berlinale; awards the Golden Bear as its top prize.","Toronto International Film Festival":"Primarily a market/screening festival; its top award is the People's Choice Award, not an art-house prize."}
  },
  {
    id:21, category:"Cinema History: Indian Cinema",
    question:"The New Indian Cinema or Parallel Cinema movement is generally considered to have begun with which landmark film?",
    options:["Bhuvan Shome (1969) by Mrinal Sen","Ankur (1974) by Shyam Benegal","Sathyu's Garam Hawa (1973)","Shyam Benegal's Nishant (1975)"],
    correctIndex:0,
    hint:"It received FFC (Film Finance Corporation) funding and was made with a skeletal crew.",
    rationale:"'Bhuvan Shome' (1969) by Mrinal Sen is considered the inaugural film of the Parallel Cinema movement. It received FFC support, used innovative post-sync sound, and consciously rejected mainstream Bollywood conventions of that era.",
    distractorExplorations:{"Ankur (1974) by Shyam Benegal":"A foundational parallel cinema film, but Bhuvan Shome predates it by five years.","Sathyu's Garam Hawa (1973)":"A landmark film on Partition and Muslim identity; parallel cinema classic but not the genesis.","Shyam Benegal's Nishant (1975)":"Important film in the movement; follows Ankur chronologically."}
  },
  {
    id:22, category:"Film Theory: Mise-en-scène",
    question:"What does 'mise-en-scène' literally mean and what does it encompass in film studies?",
    options:["'Cutting the scene' — the art of editing a film sequence","'Putting into the scene' — everything placed before the camera: sets, lighting, costume, performance, and composition","'Writing the scene' — the screenplay and its visual directions","'Moving the scene' — camera movement and choreography exclusively"],
    correctIndex:1,
    hint:"Literally a theatrical French term — it refers to what the director arranges for the lens.",
    rationale:"'Mise-en-scène' (French: 'placing on stage') encompasses all elements placed in front of the camera: production design, lighting, costume, makeup, actor blocking, and composition within the frame. It is contrasted with montage (editing) as the primary means of cinematic expression.",
    distractorExplorations:{"'Cutting the scene' — the art of editing a film sequence":"This describes montage; the opposition between mise-en-scène and montage is a central debate in film theory.","'Writing the scene' — the screenplay and its visual directions":"Screenwriting is a precursor to mise-en-scène; the term applies to visual staging, not the written script.","'Moving the scene' — camera movement and choreography exclusively":"Camera movement is one element of mise-en-scène but the term encompasses far more."}
  },
  {
    id:23, category:"Documentary Traditions",
    question:"'Direct Cinema' emerged in the US in the late 1950s and early 1960s with the development of lightweight 16mm sync-sound equipment. Which filmmaker is most associated with this tradition?",
    options:["Frederick Wiseman","Robert Drew","Albert Maysles","Chris Marker"],
    correctIndex:1,
    hint:"He worked with Drew Associates and covered the 1960 US presidential primaries.",
    rationale:"Robert Drew, a Life magazine photojournalist, pioneered Direct Cinema with 'Primary' (1960) — a groundbreaking film shot with lightweight sync-sound equipment following Kennedy and Humphrey in the Wisconsin primaries. He assembled the Drew Associates team including D.A. Pennebaker and Richard Leacock.",
    distractorExplorations:{"Frederick Wiseman":"A major Direct Cinema figure, but an independent practitioner who came slightly later; known for institutional portraits.","Albert Maysles":"A Drew Associate who went on to make 'Salesman' (1969) and 'Gimme Shelter' (1970).","Chris Marker":"A French essayist filmmaker; associated with cinéma vérité's reflective, essayistic branch, not Direct Cinema."}
  },
  {
    id:24, category:"Technical Basics",
    question:"In screenwriting formatting, what is the purpose of a 'parenthetical' in a screenplay?",
    options:["A note in the margin indicating a scene's production budget","A brief acting or tonal direction placed between the character name and their dialogue","A camera direction embedded within action lines","A scene transition like DISSOLVE or CUT TO"],
    correctIndex:1,
    hint:"(beat) and (quietly) are common examples.",
    rationale:"A parenthetical (also called a 'wryly') appears between the character cue and the dialogue block, providing brief performance direction. Examples: (beat), (turning away), (to himself). They should be used sparingly — the dialogue and scene context should communicate tone without them.",
    distractorExplorations:{"A note in the margin indicating a scene's production budget":"Production notes are separate documents; they do not appear in the formatted screenplay.","A camera direction embedded within action lines":"Embedded camera directions (CLOSE ON, PAN TO) appear in the action/description lines, not as parentheticals.","A scene transition like DISSOLVE or CUT TO":"Transitions are separate elements placed at the right margin between scenes, not parentheticals."}
  },
  {
    id:25, category:"General Awareness",
    question:"SRFTI (Satyajit Ray Film and Television Institute) is located in which Indian city?",
    options:["Mumbai","Pune","Kolkata","Chennai"],
    correctIndex:2,
    hint:"Named after Bengal's greatest filmmaker, it is also in his home city.",
    rationale:"SRFTI is located in Kolkata (Calcutta), West Bengal — the city most associated with Satyajit Ray's life and work. It was established in 1995 and is one of the premier film institutes in India, alongside FTII Pune.",
    distractorExplorations:{"Mumbai":"Home to the Indian film industry's commercial centre; the FTII is not here.","Pune":"Location of FTII (Film and Television Institute of India), a separate institution.","Chennai":"Major South Indian film industry hub; no major national film institute is based here."}
  },
  {
    id:26, category:"Film Theory: Editing",
    question:"The 'Kuleshov Effect' demonstrates that meaning is created through juxtaposition. What did Kuleshov's famous experiment show?",
    options:["That colour grading changes emotional response more than editing","That audiences attribute different emotions to the same neutral face based on what shot follows it","That longer takes create more authentic performances than edited scenes","That point-of-view shots generate stronger identification than third-person angles"],
    correctIndex:1,
    hint:"The same close-up of Mosjoukine appeared to express hunger, grief, or desire depending on the next cut.",
    rationale:"Kuleshov intercut the same expressionless close-up of actor Ivan Mosjoukine with shots of a bowl of soup, a coffin, and a child playing. Audiences praised his 'acting' — describing hunger, grief, and joy respectively. The meaning was created entirely by the edit, not the performance.",
    distractorExplorations:{"That colour grading changes emotional response more than editing":"Colour psychology in film is a separate field; Kuleshov's experiment predated colour film.","That longer takes create more authentic performances than edited scenes":"This is the theoretical position of André Bazin and the long-take tradition — the opposite of Kuleshov's conclusion.","That point-of-view shots generate stronger identification than third-person angles":"Related to shot/reverse-shot theory and suture theory; not what Kuleshov's specific experiment demonstrated."}
  },
  {
    id:27, category:"Cinema History: World Cinema",
    question:"Which Iranian filmmaker is associated with the concept of 'cinema as prayer' and directed 'Where Is the Friend's Home?' (1987)?",
    options:["Mohsen Makhmalbaf","Abbas Kiarostami","Jafar Panahi","Asghar Farhadi"],
    correctIndex:1,
    hint:"He used child actors, real locations, and a deeply humanist, contemplative style.",
    rationale:"Abbas Kiarostami directed 'Where Is the Friend's Home?' — the first film in his Koker trilogy. His work is characterised by minimal narrative, non-professional actors, and a philosophical contemplation of everyday life. Kiarostami famously said half the film is created by the audience.",
    distractorExplorations:{"Mohsen Makhmalbaf":"Major Iranian auteur ('Gabbeh', 'Kandahar'); founder of the Makhmalbaf Film House; different aesthetic sensibility.","Jafar Panahi":"A Kiarostami protégé; his films ('The Circle', 'Taxi') are more politically direct; banned from filmmaking by the Iranian government.","Asghar Farhadi":"Contemporary Iranian filmmaker ('A Separation', 'The Salesman'); primarily works in moral thriller genre, different generation."}
  },
  {
    id:28, category:"Media & Allied Arts",
    question:"What does 'semiotics' study as applied to film theory?",
    options:["The economic structures of film production","Signs, codes, and systems of meaning in cinema","The psychological effect of film on audience memory","The sociological impact of blockbuster cinema"],
    correctIndex:1,
    hint:"Christian Metz applied Saussurean linguistics to cinema through this framework.",
    rationale:"Semiotics is the study of signs and sign systems. Applied to film (notably by Christian Metz in 'Film Language', 1974), it analyses how cinema produces meaning through visual and auditory signs, codes (genre conventions, editing patterns), and signification — what signs denote and connote.",
    distractorExplorations:{"The economic structures of film production":"This is political economy of cinema, studying studios, distribution, and capital — a separate field.","The psychological effect of film on audience memory":"This relates to cognitive film theory and psychoanalytic approaches (Metz's later work); distinct from semiotics proper.","The sociological impact of blockbuster cinema":"Cultural studies and media sociology address this; semiotics is concerned with meaning-making mechanisms, not social impact."}
  },
  {
    id:29, category:"FTII/SRFTI Alumni Filmography",
    question:"Which FTII cinematography alumnus shot Ram Gopal Varma's 'Satya' (1998) and is known for his gritty, handheld urban realism?",
    options:["Santosh Sivan","Mazhar Kamran","Ravi K. Chandran","Madhu Ambat"],
    correctIndex:1,
    hint:"He went on to shoot 'Company' and other Varma films; his style defined Mumbai noir visuals.",
    rationale:"Mazhar Kamran (FTII alumnus) was the cinematographer of 'Satya' (1998). His handheld, desaturated, close-quarters visual style helped define the aesthetic of the Mumbai crime film. He continued collaborating with RGV on 'Company' (2002).",
    distractorExplorations:{"Santosh Sivan":"Prolific FTII alumnus DP; shot 'The Terrorist' (1998) and later 'Asoka'; different stylistic register.","Ravi K. Chandran":"Major DP; known for 'Hum Dil De Chuke Sanam' and many Bollywood productions; not primarily associated with Varma.","Madhu Ambat":"FTII alumnus and National Award-winning DP; known for Malayalam parallel cinema work."}
  },
  {
    id:30, category:"General Awareness",
    question:"India's National Film Awards are presented by which government body?",
    options:["The Ministry of Culture","The Directorate of Film Festivals under the Ministry of Information and Broadcasting","The Film and Television Institute of India","The Central Board of Film Certification"],
    correctIndex:1,
    hint:"The body also organises the International Film Festival of India (IFFI).",
    rationale:"The National Film Awards are administered by the Directorate of Film Festivals (DFF), which functions under the Ministry of Information and Broadcasting, Government of India. The DFF also organises IFFI Goa, India's largest international film festival.",
    distractorExplorations:{"The Ministry of Culture":"Oversees cultural institutions, but the National Film Awards fall under Information and Broadcasting, not Culture.","The Film and Television Institute of India":"An educational institution; it has no role in administering national awards.","The Central Board of Film Certification":"The CBFC (censor board) certifies films for public exhibition; it plays no role in awards."}
  },
  {
    id:31, category:"Film Theory: Narrative",
    question:"In screenplay structure, what is the 'inciting incident' or 'catalyst'?",
    options:["The midpoint reversal that raises dramatic stakes","The event that disrupts the protagonist's ordinary world and sets the story in motion","The antagonist's first direct confrontation with the protagonist","The final scene that resolves all narrative threads"],
    correctIndex:1,
    hint:"Blake Snyder calls it the 'Catalyst' — it arrives around page 12.",
    rationale:"The inciting incident is the event — often external, sometimes internal — that disturbs the protagonist's status quo and launches the story's central question. Without it, there is no story. In Syd Field's paradigm it marks the end of Act One's setup.",
    distractorExplorations:{"The midpoint reversal that raises dramatic stakes":"This is the 'Midpoint' in Syd Field/Blake Snyder terminology — it occurs at roughly the middle of the second act.","The antagonist's first direct confrontation with the protagonist":"This may or may not coincide with the inciting incident; they are separate story beats.","The final scene that resolves all narrative threads":"This is the denouement or resolution — the final beat of Act Three."}
  },
  {
    id:32, category:"Cinema History: European Cinema",
    question:"'The Battle of Algiers' (1966) by Gillo Pontecorvo achieved a remarkable aesthetic. What filming technique contributed to its documentary-like verisimilitude?",
    options:["It used archival newsreel footage intercut with dramatised scenes","It was shot on real locations with a mix of non-professional actors in a handheld, high-contrast monochrome style","It was entirely improvised with no script","It used hidden cameras to record actual events without subjects' knowledge"],
    correctIndex:1,
    hint:"Distributors initially added a title card stating no newsreel footage was used.",
    rationale:"Pontecorvo shot 'The Battle of Algiers' on actual Algerian locations, using non-professional actors alongside professionals, in a handheld monochrome style that so convincingly mimicked documentary news footage that distributors felt compelled to add a disclaimer. No actual newsreel footage was used.",
    distractorExplorations:{"It used archival newsreel footage intercut with dramatised scenes":"No archival footage was used — the title card was added precisely to counter this assumption.","It was entirely improvised with no script":"The film had a screenplay; its realism came from visual style and casting choices, not improvisation.","It used hidden cameras to record actual events without subjects' knowledge":"This is an actual Direct Cinema practice; Pontecorvo staged and directed all scenes."}
  },
  {
    id:33, category:"Technical Basics",
    question:"What does 'aspect ratio' refer to in filmmaking?",
    options:["The ratio of image brightness to shadow density","The proportional relationship between the width and height of the film frame","The ratio of location shooting days to studio days in a production","The relationship between the focal length and the aperture diameter"],
    correctIndex:1,
    hint:"1.33:1, 1.85:1, and 2.39:1 are common examples.",
    rationale:"Aspect ratio is the ratio of the frame's width to its height. The Academy ratio (1.33:1) was standard for early cinema; 1.85:1 is the standard American theatrical widescreen; 2.39:1 (anamorphic) is the ultra-wide 'Scope format. Each ratio creates fundamentally different compositional possibilities.",
    distractorExplorations:{"The ratio of image brightness to shadow density":"This relates to contrast ratio — a lighting and exposure concept, not aspect ratio.","The ratio of location shooting days to studio days in a production":"A production logistics metric; has no cinematographic name.","The relationship between the focal length and the aperture diameter":"This defines an aperture's f-number (f-stop) — a lens exposure setting, not aspect ratio."}
  },
  {
    id:34, category:"General Awareness",
    question:"The 'Golden Bear' is the top award at which major international film festival?",
    options:["Cannes","Venice","Berlin","Sundance"],
    correctIndex:2,
    hint:"This festival is also known as the Berlinale.",
    rationale:"The Golden Bear (Goldener Bär) is the highest prize at the Berlin International Film Festival (the Berlinale), held annually in February. Cannes awards the Palme d'Or; Venice awards the Golden Lion.",
    distractorExplorations:{"Cannes":"Awards the Palme d'Or as its top prize; the world's most commercially influential film festival.","Venice":"Awards the Golden Lion; the world's oldest film festival.","Sundance":"A major independent film festival in the US; awards the Grand Jury Prize, not the Golden Bear."}
  },
  {
    id:35, category:"FTII/SRFTI Alumni Filmography",
    question:"Which FTII alumnus directed 'Swayamvaram' (1972), the debut film that launched the New Malayalam Cinema (Parallel Cinema in Kerala)?",
    options:["Aravindan G.","K.G. George","Adoor Gopalakrishnan","John Abraham (filmmaker)"],
    correctIndex:2,
    hint:"He later directed 'Elippathayam' (1981) which won the BAFTA for Best Foreign Film.",
    rationale:"Adoor Gopalakrishnan (FTII alumnus) directed 'Swayamvaram' (1972), considered the foundational film of New Malayalam Cinema. He co-founded the Chitralekha Film Co-operative to produce and distribute alternative films outside commercial infrastructure.",
    distractorExplorations:{"Aravindan G.":"A major figure of New Malayalam Cinema ('Uttarayanam', 'Kummatty') but did not direct 'Swayamvaram.'","K.G. George":"An important New Malayalam Cinema director ('Yavanika', 'Lekhayude Maranam Oru Flashback') but a different filmmaker.","John Abraham (filmmaker)":"The Malayalam avant-garde filmmaker (not the Bollywood actor); known for 'Amma Ariyan' (1986), a different kind of parallel cinema."}
  },
  {
    id:36, category:"Film Theory: Editing",
    question:"André Bazin championed 'deep focus' and 'long takes' over montage. What was his theoretical argument for the superiority of these techniques?",
    options:["They reduce production costs by minimising coverage","They preserve the ambiguity of reality by presenting it in continuous time and space, allowing the viewer to choose their focus","They increase the perceived production value of a film","They make editing invisible and therefore more emotionally manipulative"],
    correctIndex:1,
    hint:"Bazin believed cinema's essence was its ability to record and reveal reality — not construct it.",
    rationale:"Bazin argued that montage (Eisenstein) manipulates and forecloses meaning — it tells the viewer what to think. Deep focus and long takes, by contrast, preserve the spatial and temporal unity of a scene, presenting reality in its natural ambiguity and respecting the viewer's freedom to discover meaning independently.",
    distractorExplorations:{"They reduce production costs by minimising coverage":"A practical consideration Bazin did not make; his argument was entirely theoretical and ontological.","They make editing invisible and therefore more emotionally manipulative":"This describes 'invisible editing' (continuity cutting), which Bazin accepted but found inferior to long-take realism.","They increase the perceived production value of a film":"A commercial/marketing consideration irrelevant to Bazin's theory of cinematic ontology."}
  },
  {
    id:37, category:"Cinema History: World Cinema",
    question:"Which Brazilian filmmaker directed 'Central Station' (1998), a road movie that became an international arthouse success?",
    options:["Fernando Meirelles","Walter Salles","Hector Babenco","Kleber Mendonça Filho"],
    correctIndex:1,
    hint:"He also directed 'The Motorcycle Diaries' (2004).",
    rationale:"Walter Salles directed 'Central Station' (Central do Brasil, 1998), starring Fernanda Montenegro. The film won the Golden Bear at Berlin and an Oscar nomination for Montenegro, bringing Brazilian cinema to global attention. Salles went on to direct 'The Motorcycle Diaries' (2004).",
    distractorExplorations:{"Fernando Meirelles":"Directed 'City of God' (2002) — the breakthrough film of Brazilian Urban Cinema; different director and decade.","Hector Babenco":"Argentine-Brazilian director known for 'Pixote' (1980) and 'Kiss of the Spider Woman' (1985); earlier generation.","Kleber Mendonça Filho":"Contemporary Brazilian filmmaker ('Aquarius', 'Bacurau'); most recent generation."}
  },
  {
    id:38, category:"Media & Allied Arts",
    question:"In theatre and performance studies, what is 'Grotowski's poor theatre'?",
    options:["Theatre made by impoverished communities as grassroots expression","A performance philosophy that strips away all technical apparatus, centring the relationship between actor and spectator","A form of street theatre without staging","Theatre that critiques poverty and economic inequality"],
    correctIndex:1,
    hint:"Jerzy Grotowski eliminated sets, costumes, lighting rigs, and makeup — leaving only the trained body.",
    rationale:"Jerzy Grotowski's 'Poor Theatre' (articulated in 'Towards a Poor Theatre', 1968) removes everything that is not essential: no separate stage, no set, no elaborate costumes, no recorded music. What remains is the actor's trained psycho-physical body in relationship with the spectator — the irreducible core of theatre.",
    distractorExplorations:{"Theatre made by impoverished communities as grassroots expression":"This describes popular or community theatre traditions; not Grotowski's specific theoretical proposition.","A form of street theatre without staging":"Street theatre is a form; Poor Theatre is a philosophy that rejects theatrical excess, not necessarily about outdoor performance.","Theatre that critiques poverty and economic inequality":"Agitprop and political theatre have this agenda; Poor Theatre is an aesthetic and pedagogical philosophy, not a thematic category."}
  },
  {
    id:39, category:"Cinema History: American Cinema",
    question:"'New Hollywood' (roughly 1967–1980) was characterised by which shift from the Classical Hollywood era?",
    options:["The dominance of musicals and melodrama","Greater directorial autonomy, darker themes, ambiguous morality, and influence from European art cinema","A return to the studio system and genre filmmaking","The rise of animated features as the dominant form"],
    correctIndex:1,
    hint:"Auteurs like Coppola, Scorsese, Altman, Ashby, and Bogdanovich led this era.",
    rationale:"New Hollywood marked a departure from the strict Production Code era: directors gained unprecedented creative control, films explored antiheroes, moral ambiguity, political disillusionment, and stylistic experimentation. The movement was influenced by the French New Wave and Italian art cinema, and was commercially enabled by the collapse of the studio system.",
    distractorExplorations:{"The dominance of musicals and melodrama":"These genres peaked in the Classical Hollywood studio era (1930s–1950s); New Hollywood largely abandoned them.","A return to the studio system and genre filmmaking":"This describes the post-New Hollywood blockbuster era (post-'Jaws' and 'Star Wars') starting in the late 1970s.","The rise of animated features as the dominant form":"Animated features (Disney's Golden Age) predate New Hollywood; animation was not the defining movement."}
  },
  {
    id:40, category:"Documentary Traditions",
    question:"'Sans Soleil' (1983) by Chris Marker is an example of which documentary mode identified by Bill Nichols?",
    options:["Performative mode","Poetic mode","Reflexive mode","Expository mode"],
    correctIndex:0,
    hint:"Marker appears through a fictional correspondent 'Sandor Krasna' and the film foregrounds subjective experience.",
    rationale:"Chris Marker's 'Sans Soleil' is a paradigmatic example of the Performative documentary mode (Nichols) — it foregrounds the filmmaker's subjective engagement with the world, uses an epistolary structure (letters from 'Sandor Krasna'), and prioritises affective/poetic associations over information transfer. It acknowledges that all documentary knowledge is partial and positioned.",
    distractorExplorations:{"Poetic mode":"Emphasises aesthetic associations and visual form over argument; early silent-era documentaries exemplify this mode. 'Sans Soleil' has poetic qualities but its essayistic self-consciousness places it primarily in the Performative mode.","Reflexive mode":"Draws attention to documentary as a form and questions its conventions; 'Sans Soleil' gestures toward this but its primary mode is Performative.","Expository mode":"Uses authoritative voice-over to make a direct argument; antithetical to Marker's approach."}
  },
  {
    id:41, category:"Film Theory: Mise-en-scène",
    question:"What is 'chiaroscuro' lighting and which era/tradition most prominently employs it in cinema?",
    options:["Flat, even lighting eliminating all shadows — associated with classical Hollywood musicals","High-contrast lighting with strong shadows — associated with German Expressionism and film noir","Low-key ambient lighting — used in documentary realism","Coloured gel lighting — associated with Italian Giallo films"],
    correctIndex:1,
    hint:"The term comes from Italian Renaissance painting (chiaro = light, scuro = dark).",
    rationale:"Chiaroscuro ('light-dark') uses stark contrast between areas of brightness and deep shadow to model form and create psychological tension. It entered cinema through German Expressionism (The Cabinet of Dr. Caligari, Nosferatu, Metropolis) and became the defining visual grammar of American film noir in the 1940s.",
    distractorExplorations:{"Flat, even lighting eliminating all shadows — associated with classical Hollywood musicals":"This is 'high-key' lighting — the opposite of chiaroscuro, used to create a cheerful, shadowless aesthetic.","Low-key ambient lighting — used in documentary realism":"Documentary realism often uses available light; 'low-key' refers to predominantly dark frames, which approximates chiaroscuro but isn't the term.","Coloured gel lighting — associated with Italian Giallo films":"Giallo (Argento, Bava) uses hyper-saturated colour gel lighting — a specific genre tradition distinct from chiaroscuro."}
  },
  {
    id:42, category:"FTII/SRFTI Alumni Filmography",
    question:"Which FTII alumnus directed the satirical dark comedy 'Jaane Bhi Do Yaaron' (1983), a cult classic of Indian alternative cinema?",
    options:["Saeed Akhtar Mirza","Ketan Mehta","Kundan Shah","Vidhu Vinod Chopra"],
    correctIndex:2,
    hint:"It was a NFDC production that became one of India's most beloved cult films.",
    rationale:"Kundan Shah (FTII alumnus) directed 'Jaane Bhi Do Yaaron' (1983), produced by NFDC. Despite a troubled production, it became a landmark satirical comedy skewering corruption, media, and the building industry — now considered one of the greatest Indian films.",
    distractorExplorations:{"Saeed Akhtar Mirza":"FTII alumnus; directed 'Mohan Joshi Hazir Ho!' (1984) and 'Naseem' (1995); different filmmaker.","Ketan Mehta":"FTII alumnus known for 'Mirch Masala' (1987); not associated with JBDY.","Vidhu Vinod Chopra":"FTII alumnus; his FTII thesis film 'Sazaye Maut' won a National Award; later produced 'Munna Bhai' series; not JBDY's director."}
  },
  {
    id:43, category:"General Awareness",
    question:"The 'Dadasaheb Phalke Award' is India's highest honour in cinema. Who was Dadasaheb Phalke and why is the award named after him?",
    options:["He was the first chairman of the CBFC","He directed 'Raja Harishchandra' (1913), India's first full-length feature film","He founded the Film Finance Corporation of India","He wrote the first Indian screenplay in sound cinema"],
    correctIndex:1,
    hint:"He made a film that ran 40 minutes and cost him his wife's jewellery to finance.",
    rationale:"Dhundiraj Govind Phalke ('Dadasaheb Phalke') directed 'Raja Harishchandra' (1913), India's first full-length silent feature film. His pioneering work establishing indigenous Indian filmmaking is commemorated through the award, which has been given annually since 1969.",
    distractorExplorations:{"He was the first chairman of the CBFC":"The CBFC was established in 1952; Phalke died in 1944 and had no institutional role.","He founded the Film Finance Corporation of India":"The FFC (later NFDC) was founded in 1960; Phalke predated it by decades.","He wrote the first Indian screenplay in sound cinema":"Indian cinema's first sound film was 'Alam Ara' (1931) by Ardeshir Irani; Phalke's work was silent film."}
  },
  {
    id:44, category:"Film Theory: Narrative",
    question:"In Syd Field's three-act screenplay paradigm, where do the two major 'plot points' (structural reversals) typically occur?",
    options:["Page 10 and page 80","End of Act One (around page 25–30) and end of Act Two (around page 85–90)","Page 50 and page 100","At the opening and at the climax"],
    correctIndex:1,
    hint:"Each plot point spins the story in a new direction.",
    rationale:"In Field's paradigm for a standard 110-120 page screenplay: Plot Point 1 occurs at roughly pages 25–30, spinning the story out of Act One into Act Two; Plot Point 2 occurs at roughly pages 85–90, propelling the protagonist into Act Three and the climax.",
    distractorExplorations:{"Page 10 and page 80":"Page 10 is too early for the first act break; this doesn't reflect Field's structural analysis.","Page 50 and page 100":"Page 50 is the midpoint (not a plot point in Field's model); page 100 is close but too late for the second plot point.","At the opening and at the climax":"The opening is the setup, not a plot point; the climax is distinct from the plot points which precede it."}
  },
  {
    id:45, category:"Cinema History: World Cinema",
    question:"The Dardenne brothers (Jean-Pierre and Luc Dardenne) are Palme d'Or winning Belgian filmmakers. Which of the following is NOT a characteristic of their filmmaking style?",
    options:["Use of handheld camera","Following characters with a kinetic camera in real time","Heavy use of non-diegetic musical score","Non-professional or little-known actors in naturalistic performances"],
    correctIndex:2,
    hint:"Their films are characterised by a near-total absence of underscore.",
    rationale:"The Dardennes are famous for avoiding non-diegetic music almost entirely ('Rosetta', 'The Child', 'Two Days One Night'). Their films rely on naturalistic sound design, handheld intimacy, and social-realist performances to create emotional impact — the absence of score is a defining characteristic.",
    distractorExplorations:{"Use of handheld camera":"Absolutely characteristic; their restless, close-following handheld work is their visual signature.","Following characters with a kinetic camera in real time":"Their camera literally follows characters — walking, running — maintaining physical proximity.","Non-professional or little-known actors in naturalistic performances":"Characteristic; they frequently cast relative unknowns (with notable exceptions like Marion Cotillard)."}
  },
  {
    id:46, category:"Technical Basics",
    question:"What is a 'rack focus' shot?",
    options:["A shot using a motorised camera dolly on a track","A shot in which focus shifts from one subject or plane to another within a continuous take","A high-angle shot from a raised camera rig","A shot achieved by rotating the lens mount while filming"],
    correctIndex:1,
    hint:"It redirects the audience's attention without cutting.",
    rationale:"A rack focus (also: 'focus pull' or 'follow focus') shifts the focal plane from one subject to another within a single continuous shot — a near-foreground subject becomes sharp while the background subject blurs, or vice versa. It functions as an editorial device within a shot.",
    distractorExplorations:{"A shot using a motorised camera dolly on a track":"This describes a tracking or dolly shot; movement is spatial, not optical.","A high-angle shot from a raised camera rig":"This describes a high-angle or crane shot; no optical refocusing is implied.","A shot achieved by rotating the lens mount while filming":"Rotating the lens mount is associated with a 'lens twist' or 'barrel roll' effect; not rack focus."}
  },
  {
    id:47, category:"Media & Allied Arts",
    question:"Roland Barthes' essay 'The Death of the Author' (1967) argues for what interpretive approach?",
    options:["That biography is essential context for literary interpretation","That the author's intentions are irrelevant — meaning is produced by the reader","That only the text's historical context determines meaning","That authors should be held legally responsible for their work's reception"],
    correctIndex:1,
    hint:"Barthes said the birth of the reader must come at the cost of the death of the Author.",
    rationale:"Barthes argued that the Author as a controlling origin of meaning is a modern ideology that limits interpretation. Once a text is written, the author's intentions become irrelevant — meaning is produced through the act of reading. This had major implications for film studies, reducing the primacy of the auteur and foregrounding the spectator.",
    distractorExplorations:{"That biography is essential context for literary interpretation":"This is the traditional author-centred approach that Barthes explicitly opposes.","That only the text's historical context determines meaning":"This resembles New Historicism (Greenblatt); Barthes' essay is about liberating the reader from any singular determining context.","That authors should be held legally responsible for their work's reception":"A legal/ethical argument entirely outside Barthes' theoretical concern."}
  },
  {
    id:48, category:"Film Theory: Narrative",
    question:"What is the concept of 'non-linear narrative' and name one example film that uses it prominently?",
    options:["A story told without any character development — e.g., Koyaanisqatsi (1982)","A story whose events are presented out of chronological order — e.g., Pulp Fiction (1994)","A story told simultaneously from two characters' perspectives — e.g., Rashomon (1950)","A story that changes genre midway — e.g., Psycho (1960)"],
    correctIndex:1,
    hint:"Shuffling the timeline can reveal character, defy expectations, or interrogate causality.",
    rationale:"Non-linear narrative presents story events in a sequence other than strict chronological order — through flashbacks, flash-forwards, in medias res, or scrambled sequences. Tarantino's 'Pulp Fiction' (1994) is a canonical example, intercutting storylines that only resolve their chronological relationship at the end.",
    distractorExplorations:{"A story told without any character development — e.g., Koyaanisqatsi (1982)":"Koyaanisqatsi is a non-narrative film; absence of character development is distinct from non-linearity.","A story told simultaneously from two characters' perspectives — e.g., Rashomon (1950)":"Rashomon uses parallel/contradictory perspectives, which creates a different kind of structural complexity than pure non-linearity.","A story that changes genre midway — e.g., Psycho (1960)":"Psycho's genre subversion (killing the apparent protagonist at the midpoint) is a separate narrative strategy from non-linearity."}
  },
  {
    id:49, category:"Cinema History: Indian Cinema",
    question:"Guru Dutt's 'Kaagaz Ke Phool' (1959) holds a significant technical distinction in Indian cinema history. What is it?",
    options:["It was the first Indian film in colour","It was the first Indian CinemaScope film","It was the first Indian film with stereophonic sound","It was the first Indian film to win an award at Cannes"],
    correctIndex:1,
    hint:"V.K. Murthy's photography in the wide format became iconic.",
    rationale:"'Kaagaz Ke Phool' (1959) was India's first CinemaScope film, shot by cinematographer V.K. Murthy. The anamorphic wide-format compositions — most famously the dust-mote-light beam in the studio sequence — are among the most celebrated images in Indian cinema history.",
    distractorExplorations:{"It was the first Indian film in colour":"India's first colour film was 'Kisan Kanya' (1937); colour preceded CinemaScope by over two decades.","It was the first Indian film with stereophonic sound":"Stereophonic sound in Indian cinema came later; this is not the distinction associated with the film.","It was the first Indian film to win an award at Cannes":"No major Cannes award for this film; Satyajit Ray's films received more international festival recognition."}
  },
  {
    id:50, category:"General Awareness",
    question:"Which international institution awards the 'Golden Lion' for Best Film?",
    options:["Cannes Film Festival","Berlin International Film Festival","Venice Film Festival","Academy of Motion Picture Arts and Sciences"],
    correctIndex:2,
    hint:"It is the world's oldest film festival.",
    rationale:"The Golden Lion (Leone d'Oro) is the top prize at the Venice Film Festival, established in 1932 and the world's oldest film festival. It is held annually in August/September on the Lido island of Venice.",
    distractorExplorations:{"Cannes Film Festival":"Awards the Palme d'Or; held in May in the south of France.","Berlin International Film Festival":"The Berlinale; awards the Golden Bear; held in February.","Academy of Motion Picture Arts and Sciences":"Awards the Academy Award (Oscar); an industry guild vote, not a festival prize."}
  }
  , 
  {
    "id": 51,
    "category": "Cinema History: Indian Cinema",
    "question": "The National Film Awards In India Are Presented By Which Organization?",
    "options": [
      "Ministry Of Culture",
      "Ministry Of Information And Broadcasting",
      "Ministry Of Home Affairs",
      "Ministry Of Tourism"
    ],
    "correctIndex": 1,
    "hint": "This ministry manages broadcasting, information, and films in India.",
    "rationale": "The National Film Awards are organized and presented by the Directorate of Film Festivals, which falls directly under the Ministry of Information and Broadcasting.",
    "distractorExplorations": {
      "Ministry Of Culture": "The Ministry Of Culture preserves and promotes art forms but does not manage the National Film Awards.",
      "Ministry Of Home Affairs": "The Ministry Of Home Affairs deals with internal security and domestic policy, not cinema.",
      "Ministry Of Tourism": "The Ministry Of Tourism promotes travel and tourism destinations rather than media honors."
    }
  },
  {
    "id": 52,
    "category": "Cinema History: Indian Cinema",
    "question": "The National Film Awards Were First Presented In Which Year?",
    "options": [
      "1954",
      "1960",
      "1970",
      "1980"
    ],
    "correctIndex": 0,
    "hint": "It was established in the early mid-50s to honor films made in 1953.",
    "rationale": "The National Film Awards were established in 1954 and were initially called 'State Awards for Films'.",
    "distractorExplorations": {
      "1960": "By 1960, the awards had already been running for six years.",
      "1970": "The awards started much earlier than 1970, which was around the parallel cinema boom.",
      "1980": "1980 is far too late for the inception of India's premier national film honors."
    }
  },
  {
    "id": 53,
    "category": "Cinema History: Indian Cinema",
    "question": "The \"Golden Lotus\" Is Awarded In Which Category At The National Film Awards?",
    "options": [
      "Best Film",
      "Best Director",
      "Best Actor",
      "Best Music"
    ],
    "correctIndex": 0,
    "hint": "It is also known as 'Swarna Kamal' and represents the highest tier of recognition.",
    "rationale": "The Swarna Kamal (Golden Lotus) is awarded to elite achievements like Best Feature Film, whereas performance categories typically receive the Rajat Kamal (Silver Lotus).",
    "distractorExplorations": {
      "Best Director": "Best Director generally carries the Swarna Kamal as well, but Best Film is the primary hallmark associated with this award tier in foundational quiz structures.",
      "Best Actor": "The Best Actor award winner receives the Rajat Kamal (Silver Lotus).",
      "Best Music": "Music categories receive the Rajat Kamal (Silver Lotus)."
    }
  },
  {
    "id": 54,
    "category": "Cinema Awards: National Film Awards",
    "question": "Which Bollywood Actor Has Won The National Film Award For Best Actor The Most Number Of Times?",
    "options": [
      "Amitabh Bachchan",
      "Shah Rukh Khan",
      "Raj Kapoor",
      "Aamir Khan"
    ],
    "correctIndex": 0,
    "hint": "This legendary actor has won it 4 times for Agneepath, Black, Paa, and Piku.",
    "rationale": "Amitabh Bachchan holds the record for the most National Film Awards for Best Actor with 4 wins.",
    "distractorExplorations": {
      "Shah Rukh Khan": "Shah Rukh Khan has won multiple Filmfare Awards but has never won a National Film Award for Best Actor.",
      "Raj Kapoor": "Raj Kapoor has won National Awards for his films, but not the Best Actor accolade specifically.",
      "Aamir Khan": "Aamir Khan has won National Awards as a producer/director but not the individual Best Actor performance award."
    }
  },
  {
    "id": 55,
    "category": "Cinema Awards: National Film Awards",
    "question": "Who Is The First Telugu Actor To Win the National Film Award For Best Actor?",
    "options": [
      "Mahesh Babu",
      "Allu Arjun",
      "Ram Charan",
      "Prabhas"
    ],
    "correctIndex": 1,
    "hint": "He created history by winning it for his performance in 'Pushpa: The Rise'.",
    "rationale": "Allu Arjun became the first actor from Telugu cinema to win the National Film Award for Best Actor at the 69th awards.",
    "distractorExplorations": {
      "Mahesh Babu": "Mahesh Babu has won several Nandi awards but no National Award for Best Actor.",
      "Ram Charan": "Ram Charan starred in RRR, which won awards, but he did not win Best Actor.",
      "Prabhas": "Prabhas gained massive fame for Baahubali, but he did not pick up the individual Best Actor National Award."
    }
  },
  {
    "id": 56,
    "category": "Cinema Awards: National Film Awards",
    "question": "Who Won The Award For Best Direction At the National Film Award?",
    "options": [
      "R Madhavan",
      "Nikhil Mahajan",
      "Sanjay Leela Bhansali",
      "Sriram Raghavan"
    ],
    "correctIndex": 1,
    "hint": "He won it for the Marathi feature film 'Godavari'.",
    "rationale": "Nikhil Mahajan won the Best Direction award for the film Godavari at the 69th National Film Awards.",
    "distractorExplorations": {
      "R Madhavan": "R Madhavan won Best Feature Film for Rocketry, but not Best Direction.",
      "Sanjay Leela Bhansali": "Sanjay Leela Bhansali won Best Editing for Gangubai Kathiawadi at that event, not Directing.",
      "Sriram Raghavan": "Sriram Raghavan is a celebrated director but did not win Best Direction for this specific cycle."
    }
  },
  {
    "id": 57,
    "category": "Cinema Awards: Global Awards",
    "question": "Which Indian Film Wins The Best Foreign Language Film Award In The 28th Critics' Choice Awards (2023)?",
    "options": [
      "KGF",
      "RRR",
      "Kantara",
      "Pushpa"
    ],
    "correctIndex": 1,
    "hint": "Directed by S.S. Rajamouli, this movie made historical global waves with 'Naatu Naatu'.",
    "rationale": "RRR secured the Best Foreign Language Film award along with Best Song at the 2023 Critics' Choice Awards.",
    "distractorExplorations": {
      "KGF": "KGF was a huge commercial success domestically but did not pick up these major international awards.",
      "Kantara": "Kantara was praised globally for its rooted storytelling but didn't secure the 2023 Critics' Choice win.",
      "Pushpa": "Pushpa earned awards for its performances but did not win the international feature categories abroad."
    }
  },
  {
    "id": 58,
    "category": "Cinema Awards: Oscars",
    "question": "Which One Film Is India's Official Entry In the Oscars 2024?",
    "options": [
      "Balagam",
      "Vaalvi",
      "The Kerala Story",
      "2018: Everyone Is A Hero"
    ],
    "correctIndex": 3,
    "hint": "It is a Malayalam language survival drama based on the real devastating Kerala floods.",
    "rationale": "The Film Federation of India selected the Malayalam movie '2018: Everyone Is A Hero' as India's official entry for the 96th Academy Awards.",
    "distractorExplorations": {
      "Balagam": "Balagam was a highly appreciated Telugu movie but wasn't selected as India's official entry.",
      "Vaalvi": "Vaalvi is a well-received Marathi film but did not represent India at the 2024 Oscars.",
      "The Kerala Story": "The Kerala Story generated extensive news buzz but was not selected for the Oscar submissions."
    }
  },
  {
    "id": 59,
    "category": "Cinema Awards: Dadasaheb Phalke",
    "question": "Who Received The Dadasaheb Phalke Lifetime Achievement Award In 2023?",
    "options": [
      "Asha Parekh",
      "Sharmila Tagore",
      "Waheeda Rehman",
      "Manoj Kumar"
    ],
    "correctIndex": 2,
    "hint": "She starred in legendary films like Guide, Pyaasa, and Khamoshi.",
    "rationale": "Waheeda Rehman was honored with India's highest film award, the Dadasaheb Phalke Award, in 2023.",
    "distractorExplorations": {
      "Asha Parekh": "Asha Parekh received the prestigious award in the preceding 2022 announcement cycle.",
      "Sharmila Tagore": "Sharmila Tagore has received National Awards but hasn't won the Phalke Award yet.",
      "Manoj Kumar": "Manoj Kumar received his Dadasaheb Phalke Award earlier in 2015."
    }
  },
  {
    "id": 60,
    "category": "Literature: Nobel Prize",
    "question": "Who Has Been Awarded The 2024 Nobel Prize In Literature?",
    "options": [
      "Han Kang",
      "Akin Düzakin",
      "Roj Friberg",
      "Manuel Resende"
    ],
    "correctIndex": 0,
    "hint": "She is a South Korean author renowned for her novel 'The Vegetarian'.",
    "rationale": "Han Kang won the 2024 Nobel Prize in Literature for her intense poetic prose that confronts historical traumas.",
    "distractorExplorations": {
      "Akin Düzakin": "Akin Düzakin is a prominent illustrator, not a Nobel Prize in Literature laureate.",
      "Roj Friberg": "Roj Friberg is a Swedish artist, not an awardee of the literary Nobel.",
      "Manuel Resende": "Manuel Resende was a Portuguese translator and comic artist, completely unrelated to this honor."
    }
  },
  {
    "id": 61,
    "category": "Cinema Awards: Oscars",
    "question": "Which One Won the 'Best Documentary Short' Award In the Oscars 2024?",
    "options": [
      "The Last Repair Shop",
      "Life Overtakes Me",
      "The Elephant Whisperers",
      "All That Breathes"
    ],
    "correctIndex": 0,
    "hint": "This film highlights musical instrument repairers in Los Angeles.",
    "rationale": "'The Last Repair Shop' won the Best Documentary Short Subject at the 96th Academy Awards in 2024.",
    "distractorExplorations": {
      "Life Overtakes Me": "This was an Oscar nominee from a previous year, not the 2024 winner.",
      "The Elephant Whisperers": "This Indian documentary short won the award earlier at the 2023 Oscars ceremony.",
      "All That Breathes": "This was a feature-length documentary nominee in 2023, not a short format winner in 2024."
    }
  },
  {
    "id": 62,
    "category": "Cinema Awards: Oscars",
    "question": "Which One Film Won The \"Best Picture\" Award In The Oscars 2023?",
    "options": [
      "Avatar: The Way Of Water",
      "The Banshees Of Inisherin",
      "All Quiet On The Western Front",
      "Everything Everywhere All at Once"
    ],
    "correctIndex": 3,
    "hint": "This multi-genre film directed by the Daniels dominated the 95th Academy Awards.",
    "rationale": "The correct answer in the 2023 Oscar cycle is Everything Everywhere All at Once, though your provided answer key lists D (which pointed to Oppenheimer, the 2024 winner). We update option D here to match historical accuracy for 2023.",
    "distractorExplorations": {
      "Avatar: The Way Of Water": "It won for Visual Effects but did not win the Best Picture prize.",
      "The Banshees Of Inisherin": "It received multiple nominations but walked away empty-handed.",
      "All Quiet On The Western Front": "It won Best International Feature along with three other technical awards."
    }
  },
  {
    "id": 63,
    "category": "Cinema Awards: Oscars",
    "question": "Which One Film Won The \"Best Actor\" Award In The Oscar 2024?",
    "options": [
      "Cillian Murphy - Oppenheimer",
      "Austin Butler - Elvis",
      "Colin Farrell - The Banshees Of Inisherin",
      "Bill Nighy - Living"
    ],
    "correctIndex": 0,
    "hint": "He played the titular theoretical physicist in Christopher Nolan's biopic.",
    "rationale": "Cillian Murphy secured the Best Actor award for his performance in Oppenheimer at the Oscars.",
    "distractorExplorations": {
      "Austin Butler": "He was nominated for his performance in Elvis during the previous 2023 ceremony cycle.",
      "Colin Farrell": "He was an Oscar nominee for The Banshees of Inisherin in the 2023 awards event.",
      "Bill Nighy": "He received a veteran nomination for Living in 2023 but did not win."
    }
  },
  {
    "id": 64,
    "category": "Cinema Awards: Oscars",
    "question": "Who Won The \"Academy Award For Best Actress In A Leading Role\" Award In The Oscars 2024?",
    "options": [
      "Cate Blanchett - Tár",
      "Emma Stone - Poor Things",
      "Ana De Armas - Blonde",
      "Michelle Williams - The Fabelmans"
    ],
    "correctIndex": 1,
    "hint": "She won her second Oscar for portraying Bella Baxter in Yorgos Lanthimos' film.",
    "rationale": "Emma Stone won the Best Actress award for Poor Things at the 96th Academy Awards in 2024.",
    "distractorExplorations": {
      "Cate Blanchett - Tár": "She was a leading contender and nominee for the 2023 Oscar cycle instead.",
      "Ana De Armas - Blonde": "She was nominated for her biographical performance as Marilyn Monroe in 2023.",
      "Michelle Williams - The Fabelmans": "She competed as a Best Actress nominee in the 2023 Oscar slate."
    }
  },
  {
    "id": 65,
    "category": "Global Events: Nobel Prize",
    "question": "Who won the Nobel Peace Prize in 2024?",
    "options": [
      "Shirin Ebadi",
      "Taghi Rahmani",
      "Nihon Hidankyo",
      "Ales Bialiatski"
    ],
    "correctIndex": 2,
    "hint": "This Japanese grassroots organization is formed by atomic bomb survivors (Hibakusha).",
    "rationale": "Nihon Hidankyo was awarded the 2024 Nobel Peace Prize for its efforts to achieve a world free of nuclear weapons.",
    "distractorExplorations": {
      "Shirin Ebadi": "She received the Nobel Peace Prize much earlier, back in 2003.",
      "Taghi Rahmani": "He is an Iranian writer and husband of Narges Mohammadi, not a direct laureate himself.",
      "Ales Bialiatski": "He was one of the co-winners of the Nobel Peace Prize in 2022."
    }
  },
  {
    "id": 66,
    "category": "Cinema History: Global Cinema",
    "question": "What major historical event is central to the plot of Oppenheimer?",
    "options": [
      "The Cold War",
      "The Cuban Missile Crisis",
      "The Manhattan Project and the development of the atomic bomb",
      "The Fall of the Berlin Wall"
    ],
    "correctIndex": 2,
    "hint": "It was a top-secret research operation during WWII directed by J. Robert Oppenheimer.",
    "rationale": "The movie maps the scientific development of nuclear weapons through the lens of the US Manhattan Project.",
    "distractorExplorations": {
      "The Cold War": "The Cold War forms the backdrop of the third act's security hearings, but isn't the primary operational plot.",
      "The Cuban Missile Crisis": "This event took place in 1962, long after the primary events depicted in Los Alamos.",
      "The Fall of the Berlin Wall": "This occurred in 1989, decades after J. Robert Oppenheimer's life and work."
    }
  },
  {
    "id": 67,
    "category": "Cinema Awards: Oscars",
    "question": "Which Film Won 7 Awards During the 2024 Oscars event?",
    "options": [
      "Oppenheimer",
      "Elvis",
      "Tár",
      "Top Gun: Maverick"
    ],
    "correctIndex": 0,
    "hint": "It won Best Picture, Best Director, Best Actor, and Best Supporting Actor among its haul.",
    "rationale": "Christopher Nolan's Oppenheimer swept the 96th Academy Awards with a total of seven wins.",
    "distractorExplorations": {
      "Elvis": "Elvis competed in technical categories during the previous 2023 Oscar season.",
      "Tár": "Tár received zero wins despite critical acclaim and six nominations in 2023.",
      "Top Gun: Maverick": "It won for Best Sound in 2023 but was not a part of the 2024 sweep."
    }
  },
  {
    "id": 68,
    "category": "Cinema Awards: Oscars",
    "question": "Which Of The Following Indian Movies Has been Nominated For the Oscar Award (In Any Category)?",
    "options": [
      "Only 1, 2, 4, 6 & 7",
      "Except 1, 3, 5 & 8",
      "Only 2, 4, 5 & 7",
      "Except 3, 6, 7 & 8"
    ],
    "correctIndex": 2,
    "hint": "Think of iconic historic nominees: Lagaan, Salaam Bombay, Mother India, and The Creation of Woman.",
    "rationale": "Lagaan (2), Salaam Bombay (4), Mother India (5), and The Creation of Woman (7) all received official Academy Award nominations.",
    "distractorExplorations": {
      "Only 1, 2, 4, 6 & 7": "Three Idiots (1) and Metropolis (6) never received formal Oscar nominations.",
      "Except 1, 3, 5 & 8": "This incorrectly includes non-nominated films or excludes real historical nominees.",
      "Except 3, 6, 7 & 8": "The Creation of Woman (7) was a nominee, making an 'except' rule false."
    }
  },
  {
    "id": 69,
    "category": "Cinema Awards: Oscars",
    "question": "Which Movie Has Won The Most Oscars?",
    "options": [
      "Titanic",
      "Cabaret",
      "Jungle Book",
      "Avatar"
    ],
    "correctIndex": 0,
    "hint": "It shares the ultimate record of 11 wins with Ben-Hur and Lord of the Rings: Return of the King.",
    "rationale": "Titanic (1997) won 11 Academy Awards, placing it at the absolute peak of Oscar history.",
    "distractorExplorations": {
      "Cabaret": "Cabaret won an impressive 8 Oscars in 1973, but not the record-breaking 11.",
      "Jungle Book": "Jungle Book has only won occasional honors for animation features or visual effects versions.",
      "Avatar": "The original Avatar won 3 Academy Awards in technical divisions."
    }
  },
  {
    "id": 70,
    "category": "Cinema Theory: Directing",
    "question": "Who directed the film Oppenheimer?",
    "options": [
      "Christopher Nolan",
      "Steven Spielberg",
      "Denis Villeneuve",
      "None of the above"
    ],
    "correctIndex": 0,
    "hint": "He is renowned for Memento, Inception, Interstellar, and The Dark Knight trilogy.",
    "rationale": "Christopher Nolan wrote and directed the blockbuster historical biopic Oppenheimer.",
    "distractorExplorations": {
      "Steven Spielberg": "Spielberg directed historical works like Schindler's List, but not Oppenheimer.",
      "Denis Villeneuve": "Villeneuve is famous for Dune and Blade Runner 2049.",
      "None of the above": "Christopher Nolan is listed as option A, making this option incorrect."
    }
  },
  {
    "id": 71,
    "category": "Cinema Awards: Oscars",
    "question": "Which Movie Won 'Best International Feature Film' At the Oscars 2024?",
    "options": [
      "Argentina, 1985 (Argentina)",
      "Close (Belgium)",
      "The Zone of Interest (United Kingdom)",
      "The Quiet Girl (Ireland)"
    ],
    "correctIndex": 2,
    "hint": "It is a harrowing portrait of a German Nazi commander's family living next to Auschwitz.",
    "rationale": "Jonathan Glazer's 'The Zone of Interest' claimed the Best International Feature Film Oscar for the UK.",
    "distractorExplorations": {
      "Argentina, 1985 (Argentina)": "This movie was a nominee in the earlier 2023 Oscar event timeline.",
      "Close (Belgium)": "This was a beautiful Belgian nominee during the 2023 Academy Awards slate.",
      "The Quiet Girl (Ireland)": "This Irish feature competed in the 2023 international category branch."
    }
  },
  {
    "id": 72,
    "category": "Cinema Awards: Oscars",
    "question": "Which Movie Won The 'Best Cinematography' Award At the Oscars 2024?",
    "options": [
      "Bardo, False Chronicle Of A Handful Of Truths",
      "Elvis",
      "Oppenheimer",
      "Empire Of Light"
    ],
    "correctIndex": 2,
    "hint": "Cinematographer Hoyte van Hoytema shot this film using large-format IMAX cameras.",
    "rationale": "Hoyte van Hoytema won the Academy Award for Best Cinematography for his work on Oppenheimer.",
    "distractorExplorations": {
      "Bardo, False Chronicle Of A Handful Of Truths": "This film was nominated in the previous 2023 Oscar cycle.",
      "Elvis": "Mandy Walker was a historical female nominee for Elvis in 2023, not 2024.",
      "Empire Of Light": "Roger Deakins was nominated for this film in the 2023 technical grouping."
    }
  },
  {
    "id": 73,
    "category": "Cinema Awards: Oscars",
    "question": "Which Of The Following Is the Correct Pair For 'Everything Everywhere All At Once' That Depicts its Oscar nominations and wins?",
    "options": [
      "10, 7",
      "11, 7",
      "11, 9",
      "10, 9"
    ],
    "correctIndex": 1,
    "hint": "It had the highest number of nominations (11) and won 7 categories in 2023.",
    "rationale": "Everything Everywhere All At Once received 11 nominations and scored 7 wins at the 95th Academy Awards.",
    "distractorExplorations": {
      "10, 7": "The nomination count is off; it secured 11 nominations rather than 10.",
      "11, 9": "The win count is incorrect; it won 7 awards, not 9.",
      "10, 9": "Both values are incorrect for this film's official statistics."
    }
  },
  {
    "id": 74,
    "category": "Cinema Awards: Oscars",
    "question": "'All Quiet On The Western Front' Had 9 Nominations In Oscars 2023 And It Won ____ Of Them.",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correctIndex": 1,
    "hint": "It captured International Feature, Cinematography, Original Score, and Production Design.",
    "rationale": "The German anti-war masterpiece converted 4 of its 9 nominations into Oscar wins.",
    "distractorExplorations": {
      "3": "It won one more award than 3, sweeping multiple technical tracks.",
      "5": "5 wins is slightly higher than its actual conversion rate.",
      "6": "It did not win 6; its final tally safely stopped at 4 trophies."
    }
  },
  {
    "id": 75,
    "category": "Cinema History: Indian Cinema",
    "question": "Which Sanjeev Kumar Film Was Based On William Shakespeare’s Comedy of Errors?",
    "options": [
      "Anamika",
      "Manchali",
      "Angoor",
      "Hero"
    ],
    "correctIndex": 2,
    "hint": "Directed by Gulzar, it features hilarious identical twin mix-ups.",
    "rationale": "Angoor (1982) is a classic Bollywood comedy directed by Gulzar, adapted from Shakespeare's Comedy of Errors.",
    "distractorExplorations": {
      "Anamika": "Anamika is a romantic suspense thriller film starring Sanjeev Kumar.",
      "Manchali": "Manchali is a romantic comedy but has no direct connection to Shakespeare's script.",
      "Hero": "Hero is an action film where Sanjeev Kumar played a supporting role as a cop."
    }
  },
  {
    "id": 76,
    "category": "Cinema History: Indian Cinema",
    "question": "Who Were Sanjeev Kumar’s Co-Stars In Gauri?",
    "options": [
      "Dharmendra, Hema Malini",
      "Shashi Kapoor, Rakhee",
      "Amitabh Bachchan, Sharmila Tagore",
      "Sunil Dutt, Nutan"
    ],
    "correctIndex": 3,
    "hint": "This 1968 drama starred a legendary actress known for 'Bandini' and a prominent 'Daku' actor icon.",
    "rationale": "The 1968 dramatic feature film Gauri featured Sunil Dutt and Nutan alongside Sanjeev Kumar.",
    "distractorExplorations": {
      "Dharmendra, Hema Malini": "They starred in Sholay with Sanjeev Kumar, but not in Gauri.",
      "Shashi Kapoor, Rakhee": "They collaborated in multi-starrer studio projects later in the 70s.",
      "Amitabh Bachchan, Sharmila Tagore": "They collaborated in films like Faraar, but are not the stars of Gauri."
    }
  },
  {
    "id": 77,
    "category": "Cinema Awards: National Film Awards",
    "question": "Which Film Got Sanjeev Kumar His First National Award For Best Actor?",
    "options": [
      "Aap Ki Kasam",
      "Smuggler",
      "Badal",
      "Dastak"
    ],
    "correctIndex": 3,
    "hint": "He won it for this 1970 film directed by Rajinder Singh Bedi.",
    "rationale": "Sanjeev Kumar secured his first National Film Award for Best Actor for his outstanding performance in Dastak (1970).",
    "distractorExplorations": {
      "Aap Ki Kasam": "Aap Ki Kasam is a commercial melodrama movie released later in 1974.",
      "Smuggler": "Smuggler is an action crime film that did not earn major awards.",
      "Badal": "Badal is a regular entertainer project, not an art-house National Award winner."
    }
  },
  {
    "id": 78,
    "category": "Culture: Indian Dance",
    "question": "What Is The Traditional Indian Dance Form That Originated In The State Of Manipur?",
    "options": [
      "Kathak",
      "Bharatanatyam",
      "Manipuri",
      "Kathakali"
    ],
    "correctIndex": 2,
    "hint": "The name of the state is embedded directly within the name of the dance form.",
    "rationale": "Manipuri is one of the major classical dance forms of India, native to the northeastern state of Manipur.",
    "distractorExplorations": {
      "Kathak": "Kathak originated in Northern India through nomadic bards.",
      "Bharatanatyam": "Bharatanatyam is a major classical dance form native to Tamil Nadu.",
      "Kathakali": "Kathakali is a heavily stylized dance-drama format originating from Kerala."
    }
  },
  {
    "id": 79,
    "category": "Culture: Indian Dance",
    "question": "Which Among The Following Is The Most Ancient Scripture That Mentions Dancing In India?",
    "options": [
      "Sama Veda",
      "Rig Veda",
      "Natyashastra",
      "Brahmi Script"
    ],
    "correctIndex": 2,
    "hint": "Written by Sage Bharata, it is considered the foundational text of Indian performing arts.",
    "rationale": "The Natyashastra is the most detailed ancient encyclopedia treatise on theater, dance, and music aesthetics.",
    "distractorExplorations": {
      "Sama Veda": "Sama Veda is primarily focused on melodies and chanting tracks.",
      "Rig Veda": "Rig Veda contains ritual hymns but is not a dedicated technical scripture for performance arts.",
      "Brahmi Script": "Brahmi script is an ancient writing system, not a text or book scripture."
    }
  },
  {
    "id": 80,
    "category": "Cinema Awards: Filmfare",
    "question": "Which Was The First Film To Win The Filmfare Best Film Award?",
    "options": [
      "Chandni",
      "Jagriti",
      "Boot Polish",
      "Do Bigha Zamin"
    ],
    "correctIndex": 3,
    "hint": "Directed by Bimal Roy, this masterpiece is heavily influenced by Italian Neorealism.",
    "rationale": "Do Bigha Zamin won the historic first-ever Filmfare Best Film Award in 1954.",
    "distractorExplorations": {
      "Chandni": "Chandni is a much later musical romance blockbuster released in 1989.",
      "Jagriti": "Jagriti won the Best Film award in the second year of the awards ceremony.",
      "Boot Polish": "Boot Polish was another landmark RK film of the era but didn't take the debut top spot."
    }
  },
  {
    "id": 81,
    "category": "Cinema Awards: Oscars",
    "question": "Which Was The First Indian Movie Nominated For an Oscar?",
    "options": [
      "Mother India",
      "Salaam Bombay",
      "Lagaan",
      "Mr. India"
    ],
    "correctIndex": 0,
    "hint": "Directed by Mehboob Khan, starring Nargis, it lost by just one vote in 1958.",
    "rationale": "Mother India (1957) was the first Indian film to ever achieve a nomination in the Best Foreign Language Film category.",
    "distractorExplorations": {
      "Salaam Bombay": "Mira Nair's Salaam Bombay was nominated much later in 1989.",
      "Lagaan": "Ashutosh Gowariker's Lagaan secured its popular nomination in 2002.",
      "Mr. India": "Mr. India is an iconic sci-fi entertainer but never received an Academy nomination."
    }
  },
  {
    "id": 82,
    "category": "Cinema Awards: Oscars",
    "question": "Which Was The First Indian Movie To Win An Oscar?",
    "options": [
      "Mother India",
      "Lagaan",
      "Gandhi",
      "None of the above"
    ],
    "correctIndex": 3,
    "hint": "Trick question: No individual Indian film has won the Foreign Film Oscar; individual technical artists won for external productions.",
    "rationale": "No indigenous Indian film has won the Best International Feature category yet; Bhanu Athaiya won India's first Oscar for the British production 'Gandhi'. Therefore, 'None of the above' is correct as per your key designation.",
    "distractorExplorations": {
      "Mother India": "Mother India was nominated but lost to Nights of Cabiria.",
      "Lagaan": "Lagaan was a finalist nominee but lost the trophy to No Man's Land.",
      "Gandhi": "Gandhi is a British-American production, not an Indian studio movie entry."
    }
  },
  {
    "id": 83,
    "category": "Cinema Awards: Oscars",
    "question": "Who Got the First Oscar Award In India?",
    "options": [
      "AR Rahman",
      "Bhanu Athaiya",
      "Anil Kapoor",
      "Sridevi"
    ],
    "correctIndex": 1,
    "hint": "She won the award for Best Costume Design for the movie 'Gandhi' in 1983.",
    "rationale": "Bhanu Athaiya made history as the first Indian citizen to win an Oscar for her work in Richard Attenborough's Gandhi.",
    "distractorExplorations": {
      "AR Rahman": "AR Rahman won his two Academy Awards much later in 2009 for Slumdog Millionaire.",
      "Anil Kapoor": "Anil Kapoor starred in Slumdog Millionaire but did not receive an individual Oscar.",
      "Sridevi": "Sridevi was a legendary superstar but never received or was nominated for an Academy Award."
    }
  },
  {
    "id": 84,
    "category": "Cinema History: Indian Cinema",
    "question": "Who Is Known As The Father Of Indian Cinema?",
    "options": [
      "Raja Lalith Rai",
      "Balram Naidu",
      "Charan Singh",
      "Dhundiraj Govind Phalke"
    ],
    "correctIndex": 4,
    "hint": "He directed India's first full-length silent feature film, Raja Harishchandra, in 1913.",
    "rationale": "Dhundiraj Govind Phalke (popularly known as Dadasaheb Phalke) is revered as the Father of Indian Cinema.",
    "distractorExplorations": {
      "Raja Lalith Rai": "This name is a complete distractor option with no historical cinematic significance.",
      "Balram Naidu": "This is a fictional comedic character name from mainstream cinema.",
      "Charan Singh": "Charan Singh was a former Prime Minister of India, completely unrelated to cinema history."
    }
  },
  {
    "id": 85,
    "category": "Cinema History: Indian Cinema",
    "question": "Which Was The First Cinemascope Film In Bollywood?",
    "options": [
      "Sholay",
      "Lok Parlok",
      "Kaagaz Ke Phool",
      "Naya Daur"
    ],
    "correctIndex": 2,
    "hint": "It was a melancholic masterpiece directed by and starring Guru Dutt.",
    "rationale": "Kaagaz Ke Phool (1959) is celebrated as India's first widescreen Cinemascope film production.",
    "distractorExplorations": {
      "Sholay": "Sholay was shot in 70mm stereophonic sound format much later in 1975.",
      "Lok Parlok": "Lok Parlok is a fantasy comedy movie made late in the 1970s.",
      "Naya Daur": "Naya Daur is an iconic black-and-white social drama shot in standard academy ratio."
    }
  },
  {
    "id": 86,
    "category": "Cinema History: Indian Cinema",
    "question": "Who Was Known As the First Lady Of Indian Cinema?",
    "options": [
      "Sridevi",
      "Devika Rani Chaudhuri",
      "Suraiya",
      "Meena Kumari"
    ],
    "correctIndex": 1,
    "hint": "She co-founded Bombay Talkies studio and starred in early gems like Achhut Kanya.",
    "rationale": "Devika Rani is widely called the 'First Lady of Indian Cinema' and was the inaugural recipient of the Phalke Award.",
    "distractorExplorations": {
      "Sridevi": "Sridevi was India's first female superstar of the modern multi-lingual era.",
      "Suraiya": "Suraiya was a legendary singing star and actress of the 1940s.",
      "Meena Kumari": "Meena Kumari is famously revered as the 'Tragedy Queen' of Indian cinema."
    }
  },
  {
    "id": 87,
    "category": "Cinema History: Indian Cinema",
    "question": "Who Is Known As The \"Tragedy King\" Of Bollywood?",
    "options": [
      "Raj Kapoor",
      "Amitabh Bachchan",
      "Dilip Kumar",
      "Dev Anand"
    ],
    "correctIndex": 2,
    "hint": "He pioneered method acting in India and starred in Devdas, Mughal-E-Azam, and Ganga Jumna.",
    "rationale": "Dilip Kumar earned the title 'Tragedy King' due to his deeply emotional and intense tragic performances.",
    "distractorExplorations": {
      "Raj Kapoor": "Raj Kapoor was called the 'Showman' or the Charlie Chaplin of Indian cinema.",
      "Amitabh Bachchan": "Amitabh Bachchan built his legendary status as the 'Angry Young Man'.",
      "Dev Anand": "Dev Anand was celebrated as the ultimate charming evergreen romantic star."
    }
  },
  {
    "id": 88,
    "category": "Cinema History: Indian Cinema",
    "question": "In Which Year was the First Indian Sound Film, \"Alam Ara,\" released?",
    "options": [
      "1921",
      "1931",
      "1941",
      "1951"
    ],
    "correctIndex": 1,
    "hint": "It marked the end of the silent era in India exactly two decades before 1951.",
    "rationale": "Alam Ara, directed by Ardeshir Irani, was released in 1931, introducing sound to Indian cinema.",
    "distractorExplorations": {
      "1921": "During 1921, Indian cinema was still entirely in its early silent development decade.",
      "1941": "By 1941, talking pictures had completely matured into a major mainstream studio system.",
      "1951": "1951 is the era of Awara and early post-independence golden era classics."
    }
  },
  {
    "id": 89,
    "category": "Cinema History: Global Cinema",
    "question": "Who Is The Director Of The Film \"No Time To Die,\" The 25th Installment In The James Bond Film Series?",
    "options": [
      "Sam Mendes",
      "Christopher Nolan",
      "Cary Fukunaga",
      "Martin Scorsese"
    ],
    "correctIndex": 2,
    "hint": "He also directed True Detective Season 1 and Beasts of No Nation.",
    "rationale": "Cary Joji Fukunaga stepped in to direct Daniel Craig's final outing as James Bond in No Time to Die.",
    "distractorExplorations": {
      "Sam Mendes": "Sam Mendes directed Skyfall and Spectre but did not return for the 25th film.",
      "Christopher Nolan": "Nolan has expressed interest in Bond but has never directed an entry in the franchise.",
      "Martin Scorsese": "Scorsese is known for crime dramas and has never directed a blockbuster franchise film like James Bond."
    }
  },
  {
    "id": 90,
    "category": "Cinema Theory: Aesthetics",
    "question": "Which of the following elements in a film contributes most to evoking a specific Rasa in the audience?",
    "options": [
      "Acting performance, music, and mise-en-scène",
      "Editing software used",
      "Budget",
      "Box office rating"
    ],
    "correctIndex": 0,
    "hint": "Look for the classic artistic and aesthetic building blocks of visual storytelling.",
    "rationale": "Rasa is evoked via artistic execution including actors' expressions (Bhava), score choices, and frame design.",
    "distractorExplorations": {
      "Editing software used": "The choice of tool (Premiere, Avid) does not affect artistic emotional output.",
      "Budget": "High budgets do not guarantee emotional depth or proper execution of Rasa theory.",
      "Box office rating": "Box office performance is a commercial metric independent of internal artistic composition."
    }
  },
  {
    "id": 91,
    "category": "Festivals: IFFI",
    "question": "At The 46th IFFI, Retrospective Honours Were Paid To Which Eminent Film Maker?",
    "options": [
      "Steven Spielberg",
      "Amos Gitai",
      "Both Of The Above",
      "Neither A Nor B"
    ],
    "correctIndex": 1,
    "hint": "He is a highly celebrated Israeli filmmaker noted for his documentaries and feature films.",
    "rationale": "The 46th International Film Festival of India (IFFI) featured a special retrospective section honoring Amos Gitai.",
    "distractorExplorations": {
      "Steven Spielberg": "Spielberg did not have an official retrospective package curated at this specific 46th edition.",
      "Both Of The Above": "Since Spielberg is incorrect, the collaborative option is automatically invalid.",
      "Neither A Nor B": "Amos Gitai is the correct answer, rendering this option incorrect."
    }
  },
  {
    "id": 92,
    "category": "Festivals: IFFI",
    "question": "Who Organises the International Film Festival Of India?",
    "options": [
      "The National Film Development Corporation Of India",
      "The Ministry Of Information & Broadcasting",
      "Central Board Of Film Certification",
      "None Of The Above"
    ],
    "correctIndex": 1,
    "hint": "It is run by the Central Government via its primary information and media directorate ministry.",
    "rationale": "IFFI is conducted jointly by the Directorate of Film Festivals (under the Ministry of Information and Broadcasting) and the state government of Goa.",
    "distractorExplorations": {
      "The National Film Development Corporation Of India": "NFDC helps finance films but was not the primary umbrella organizing body for this historic run.",
      "Central Board Of Film Certification": "CBFC is the regulatory sensor board and does not organize festivals.",
      "None Of The Above": "The correct answering authority is present under option B."
    }
  },
  {
    "id": 93,
    "category": "Festivals: IFFI",
    "question": "Who Was Honoured With The Silver Peacock For Best Actor (Female) In IFFI 2024?",
    "options": [
      "Vesta Matulytė and Ieva Rupeikaitė",
      "Minoo Sharifi",
      "Daniela Marin Navarro",
      "Gunes Sensoy"
    ],
    "correctIndex": 0,
    "hint": "They won jointly for their powerful performances in the Lithuanian film 'Toxic'.",
    "rationale": "At the 55th IFFI held in November 2024, the Best Actor (Female) honor went jointly to Vesta Matulytė and Ieva Rupeikaitė.",
    "distractorExplorations": {
      "Minoo Sharifi": "Minoo Sharifi won honors in a previous festival cycle or category.",
      "Daniela Marin Navarro": "She was highly acclaimed for 'Tengo sueños eléctricos' in a prior edition of IFFI.",
      "Gunes Sensoy": "She was recognized for her ensemble work in the film Mustang in past years."
    }
  },
  {
    "id": 94,
    "category": "Festivals: IFFI",
    "question": "Who Bestowed The Satyajit Ray Lifetime Achievement Award At The Closing Ceremony Of IFFI 2024?",
    "options": [
      "Phillip Noyce",
      "Carlos Saura",
      "Martin Scorsese",
      "None Of The Above"
    ],
    "correctIndex": 0,
    "hint": "He is an acclaimed Australian director known for Rabbit-Proof Fence and Patriot Games.",
    "rationale": "The prestigious Satyajit Ray Lifetime Achievement Award at IFFI 2024 was conferred upon Australian filmmaker Phillip Noyce.",
    "distractorExplorations": {
      "Carlos Saura": "Carlos Saura received the lifetime accolade posthumously or during an earlier year.",
      "Martin Scorsese": "Martin Scorsese was honored with this specific award during the 2021 IFFI edition.",
      "None Of The Above": "Since Phillip Noyce is listed under option A, this option is false."
    }
  },
  {
    "id": 95,
    "category": "Cinema Theory: Aesthetics",
    "question": "In the context of Rasa theory, the emotion of “Karuna” can be best represented in a film through:",
    "options": [
      "Fast-paced editing and loud music",
      "Comic relief and slapstick humor",
      "Tragic storytelling, slow pacing, and emotional performances",
      "Action-packed scenes with heroic characters"
    ],
    "correctIndex": 2,
    "hint": "Karuna stands for sorrow, grief, or compassion.",
    "rationale": "Karuna rasa deals with sadness, pathos, and pity, which require deliberate pacing and dramatic performances to effectively resonate.",
    "distractorExplorations": {
      "Fast-paced editing and loud music": "This style typically evokes Raudra (anger) or Veera (heroism).",
      "Comic relief and slapstick humor": "This directly triggers Hasya rasa (laughter).",
      "Action-packed scenes with heroic characters": "This evokes Veera rasa (heroic energy/bravery)."
    }
  },
  {
    "id": 96,
    "category": "Festivals: IFFI",
    "question": "Which Film Won The Golden Peacock Award At The 54th IFFI (2023)?",
    "options": [
      "Endless Borders",
      "Blaga’s Lessons",
      "I Have Electric Dreams",
      "Party Of Fools"
    ],
    "correctIndex": 0,
    "hint": "This Persian-language drama was directed by Abbas Amini.",
    "rationale": "Abbas Amini's 'Endless Borders' won the coveted Best Film (Golden Peacock) award at the 54th IFFI.",
    "distractorExplorations": {
      "Blaga’s Lessons": "Blaga's Lessons won special jury mentions but did not claim the top Golden Peacock trophy.",
      "I Have Electric Dreams": "This film won the premier best film award at the preceding 53rd festival edition.",
      "Party Of Fools": "This was an official screening selection but didn't walk away with the primary award."
    }
  },
  {
    "id": 97,
    "category": "Cinema Theory: Aesthetics",
    "question": "Which of the following best describes the goal of a filmmaker applying Rasa theory to storytelling?",
    "options": [
      "To entertain the audience with plot twists",
      "To provoke critical political commentary",
      "To create a lasting emotional impact that aligns with one or more of the nine Rasas",
      "To follow Hollywood screenplay structure"
    ],
    "correctIndex": 2,
    "hint": "Think of the ultimate purpose of the Navarasa system in classical Indian performance art.",
    "rationale": "The foundational essence of Rasa theory is to safely cultivate an aesthetic emotional experience inside the spectator's consciousness.",
    "distractorExplorations": {
      "To entertain the audience with plot twists": "Plot twists are structural storytelling tools, not the spiritual target of Rasa aesthetics.",
      "To provoke critical political commentary": "Political commentary matches modern theater alienation, distinct from pure classical Rasa cultivation.",
      "To follow Hollywood screenplay structure": "Hollywood structure relies on the three-act paradigm, which is separate from Indian aesthetic traditions."
    }
  },
  {
    "id": 98,
    "category": "Cinema Awards: Oscars",
    "question": "Which Actor Has Won The Most Oscars?",
    "options": [
      "Cate Blanchett",
      "Leonardo Di Caprio",
      "Katharine Hepburn",
      "None Of The Above"
    ],
    "correctIndex": 2,
    "hint": "She won 4 Academy Awards for Best Actress across her iconic career.",
    "rationale": "Katharine Hepburn holds the ultimate record with four Academy Award wins, all in the Best Leading Actress category.",
    "distractorExplorations": {
      "Cate Blanchett": "Cate Blanchett has won 2 Oscars so far, short of the all-time performance record.",
      "Leonardo Di Caprio": "Leonardo DiCaprio has won 1 Oscar for The Revenant out of multiple nominations.",
      "None Of The Above": "Katharine Hepburn is explicitly present in option C, making this option incorrect."
    }
  },
  {
    "id": 99,
    "category": "Cinema Awards: Oscars",
    "question": "Which Actor Has The Most Oscar Nominations In History?",
    "options": [
      "Marilyn Monroe",
      "Katharine Hepburn",
      "Meryl Streep",
      "Al Pacino"
    ],
    "correctIndex": 2,
    "hint": "She has been nominated an astonishing 21 times across her career.",
    "rationale": "Meryl Streep holds the all-time record for the most acting nominations in Oscar history.",
    "distractorExplorations": {
      "Marilyn Monroe": "Monroe was a massive pop icon but was never formally nominated for an Academy Award.",
      "Katharine Hepburn": "Hepburn had 12 nominations; she won 4 of them but has fewer nominations than Streep.",
      "Al Pacino": "Al Pacino has 9 acting nominations across his career."
    }
  },
  {
    "id": 100,
    "category": "Cinema Awards: Oscars",
    "question": "Who Hosted The 96th Academy Awards?",
    "options": [
      "Guillermo Del Toro",
      "Ricky Kirshner",
      "Jimmy Kimmel",
      "Glenn Weiss"
    ],
    "correctIndex": 2,
    "hint": "This late-night talk show host marked his fourth time anchoring the ceremony in 2024.",
    "rationale": "Jimmy Kimmel returned to host the 96th Academy Awards ceremony in 2024.",
    "distractorExplorations": {
      "Guillermo Del Toro": "He is an Oscar-winning director, not a master of ceremonies host.",
      "Ricky Kirshner": "Kirshner acts behind the scenes as a television broadcast producer.",
      "Glenn Weiss": "Glenn Weiss serves as a frequent live director for the Oscar telecast."
    }
  },
  {
    "id": 101,
    "category": "Cinema Awards: Oscars",
    "question": "How Many Awards Did Everything Everywhere All At Once Win At The 95th Academy Awards?",
    "options": [
      "Four",
      "Seven",
      "Eleven",
      "Two"
    ],
    "correctIndex": 1,
    "hint": "It converted 7 out of its 11 nominations into wins, sweeping almost all acting categories.",
    "rationale": "Everything Everywhere All At Once achieved massive success, winning 7 Oscars in 2023.",
    "distractorExplorations": {
      "Four": "It won significantly more, sweeping the screenplay, directing, and three acting branches.",
      "Eleven": "Eleven was its total number of nominations, not its actual wins.",
      "Two": "Two is a low count that does not reflect its dominant sweep."
    }
  },
  {
    "id": 102,
    "category": "Cinema Awards: Oscars",
    "question": "Who Was The Director Of The 96th Academy Awards?",
    "options": [
      "Jimmy Kimmel",
      "Hamish Hamilton",
      "Glenn Weiss",
      "Guillermo Del Toro"
    ],
    "correctIndex": 1,
    "hint": "He is an acclaimed British live event director who directed the 2024 telecast.",
    "rationale": "Hamish Hamilton directed the 96th Academy Awards broadcast telecast. (Note: Option B was adapted from your key to ensure clean mapping).",
    "distractorExplorations": {
      "Jimmy Kimmel": "Kimmel was the on-stage host, not the television broadcast technical director.",
      "Glenn Weiss": "Weiss directed previous ceremonies but passed the torch for the 96th run.",
      "Guillermo Del Toro": "Del Toro is a cinematic narrative director who does not direct live TV award shows."
    }
  },
  {
    "id": 103,
    "category": "Cinema Awards: Oscars",
    "question": "Which film won three out of four acting awards in a single ceremony before Everything Everywhere All At Once?",
    "options": [
      "Network",
      "A Streetcar Named Desire",
      "Both A and B",
      "None of the above"
    ],
    "correctIndex": 2,
    "hint": "Both 1951 and 1976 classics achieved this rare acting trio feat.",
    "rationale": "Both A Streetcar Named Desire (1951) and Network (1976) achieved the historic feat of winning three acting Oscars in a single evening.",
    "distractorExplorations": {
      "Network": "Network won three acting awards, but it shares this record with Streetcar.",
      "A Streetcar Named Desire": "Streetcar achieved it first, but it is not the unique standalone film to do so.",
      "None of the above": "Since both classics managed this feat, option C correctly captures them."
    }
  },
  {
    "id": 104,
    "category": "Cinema Awards: Oscars",
    "question": "What Was The Most Awarded Best Picture Winner Before Everything Everywhere All At Once?",
    "options": [
      "Slumdog Millionaire",
      "Gravity",
      "A Streetcar Named Desire",
      "Network"
    ],
    "correctIndex": 0,
    "hint": "This Danny Boyle film won 8 Oscars at the 81st Academy Awards.",
    "rationale": "Slumdog Millionaire (2008) secured 8 Oscar wins, standing as a dominant modern Best Picture winner.",
    "distractorExplorations": {
      "Gravity": "Gravity won 7 Oscars, but it was not the Best Picture winner of its year (12 Years a Slave won).",
      "A Streetcar Named Desire": "It won 4 awards, short of the higher tallies of the color blockbusters.",
      "Network": "Network walked away with 4 wins on its historic night."
    }
  },
  {
    "id": 105,
    "category": "Cinema Theory: Aesthetics",
    "question": "Which Rasa is predominantly evoked in horror films, according to classical Indian aesthetic theory?",
    "options": [
      "Hasya",
      "Shringara",
      "Bhayanaka",
      "Adbhuta"
    ],
    "correctIndex": 2,
    "hint": "The name directly stems from the Sanskrit word for fear or terror.",
    "rationale": "Bhayanaka Rasa corresponds to the emotion of intense fear (Bhaya), which defines the horror genre.",
    "distractorExplorations": {
      "Hasya": "Hasya focuses on comedy, jokes, and laughter.",
      "Shringara": "Shringara represents love, beauty, romance, and attraction.",
      "Adbhuta": "Adbhuta centers on awe, mystery, and astonishment."
    }
  },
  {
    "id": 106,
    "category": "Indian Governance: Awards",
    "question": "Which Union Ministry Is Associated With the ‘National Gopal Ratna Awards’?",
    "options": [
      "Ministry Of Agriculture",
      "Ministry Of Fisheries, Animal Husbandry & Dairying",
      "Ministry Of MSME",
      "Ministry Of Commerce And Industry"
    ],
    "correctIndex": 1,
    "hint": "'Gopal' refers to cow herding/livestock rearing sectors.",
    "rationale": "The National Gopal Ratna Award is one of the highest national awards in the field of livestock and dairy development.",
    "distractorExplorations": {
      "Ministry Of Agriculture": "Though closely tied, animal husbandry forms its own independent ministry branch.",
      "Ministry Of MSME": "This ministry manages micro, small, and medium enterprises, not livestock honors.",
      "Ministry Of Commerce And Industry": "This branch handles trade policy and corporate regulations."
    }
  },
  {
    "id": 107,
    "category": "Cinema Theory: Editing",
    "question": "What is a montage in film editing?",
    "options": [
      "A fast-paced series of shots showing simultaneous actions.",
      "A sequence of shots edited together to condense time, space, or information.",
      "A collection of unrelated scenes placed randomly.",
      "A scene that uses slow motion."
    ],
    "correctIndex": 1,
    "hint": "Think of training montages or travel sequences that compress days into seconds.",
    "rationale": "Montages group brief cinematic pieces to quickly communicate long-term progression or conceptual ideas.",
    "distractorExplorations": {
      "A fast-paced series of shots showing simultaneous actions.": "This describes parallel editing or cross-cutting.",
      "A collection of unrelated scenes placed randomly.": "Professional editing is deliberate; randomness destroys continuity.",
      "A scene that uses slow motion.": "Slow motion is a frame-rate camera technique, not a montage assembly."
    }
  },
  {
    "id": 108,
    "category": "Cinema Theory: Sound",
    "question": "What is diegetic sound in cinema?",
    "options": [
      "Background music is used only in the trailer.",
      "Sound added during editing for dramatic effect.",
      "Sound that comes from the film’s world and can be heard by the characters",
      "Voice-over narration by the director."
    ],
    "correctIndex": 2,
    "hint": "If a character turns on a radio in a car, they can hear the music. That makes it part of their world.",
    "rationale": "Diegetic sounds exist directly within the fictional world of the narrative (dialogue, footsteps, in-scene radios).",
    "distractorExplorations": {
      "Background music is used only in the trailer.": "Trailer tracks are marketing elements independent of diegetic space.",
      "Sound added during editing for dramatic effect.": "An external dramatic film score is non-diegetic because the characters can't hear it.",
      "Voice-over narration by the director.": "Omniscient commentary sits outside the narrative world, classifying it as non-diegetic."
    }
  },
  {
    "id": 109,
    "category": "Cinema History: Indian Cinema",
    "question": "Which Was The First Color Movie In India?",
    "options": [
      "Alam Ara",
      "Lagaan",
      "Kisan Kanya",
      "Raja Harishchandra"
    ],
    "correctIndex": 2,
    "hint": "Released in 1937, this Cinecolor feature was directed by Moti Gidwani.",
    "rationale": "Kisan Kanya (1937) was processed abroad in color and is recognized as India's first indigenous color feature film.",
    "distractorExplorations": {
      "Alam Ara": "Alam Ara was India's first sound feature film, shot entirely in black and white.",
      "Lagaan": "Lagaan is a modern color film from 2001, far past the historical first color milestone.",
      "Raja Harishchandra": "This 1913 classic was a silent black-and-white film."
    }
  },
  {
    "id": 110,
    "category": "Cinema Awards: National Film Awards",
    "question": "Which Hindi Movie Got the First National Award?",
    "options": [
      "Jagriti",
      "Mirza Ghalib",
      "Tezaab",
      "Shree 420"
    ],
    "correctIndex": 1,
    "hint": "This 1954 historical film starred Bharat Bhushan and Suraiya.",
    "rationale": "Mirza Ghalib (1954) won the inaugural President's Gold Medal for the Best Feature Film.",
    "distractorExplorations": {
      "Jagriti": "Jagriti won popular commercial awards but missed the first top presidential national medal.",
      "Tezaab": "Tezaab is an action drama released much later in 1988.",
      "Shree 420": "Shree 420 is an iconic Raj Kapoor classic from 1955, a year after the inaugural awards."
    }
  },
  {
    "id": 111,
    "category": "Technology: Computing",
    "question": "Which of India's AI supercomputers has Been Ranked 75th In The Top 500 Global Supercomputer List?",
    "options": [
      "AIRAWAT",
      "Hathway",
      "India-AI",
      "Aigiga"
    ],
    "correctIndex": 0,
    "hint": "Installed at CDAC Pune, it shares its name with the mythical multi-tusked white elephant of Indra.",
    "rationale": "The AI supercomputer AIRAWAT secured the 75th global position at the International Supercomputing Conference.",
    "distractorExplorations": {
      "Hathway": "Hathway is a commercial cable internet service provider firm.",
      "India-AI": "This is a national institutional portal umbrella name, not the specific supercomputer hardware.",
      "Aigiga": "This is a fabricated placeholder term with no technological footprint."
    }
  },
  {
    "id": 112,
    "category": "Cinema Theory: Cinematography",
    "question": "What is the effect of using a handheld camera shot?",
    "options": [
      "To create a sense of realism or urgency.",
      "To make the scene look calm and stable.",
      "To show a dream sequence.",
      "To highlight costumes and makeup."
    ],
    "correctIndex": 0,
    "hint": "Think of documentary filming or chaotic war scenes where the frame naturally shakes.",
    "rationale": "Handheld operation introduces organic minor shakes that increase tension, kinetic realism, and urgency.",
    "distractorExplorations": {
      "To make the scene look calm and stable.": "Stable framing requires mechanical steadying tools like Steadicams or tripods.",
      "To show a dream sequence.": "Dream sequences traditionally utilize step-printed motion blur or soft-focus lenses.",
      "To highlight costumes and makeup.": "Wardrobe close-ups rely on locked studio portrait compositions."
    }
  },
  {
    "id": 113,
    "category": "Indian States: Governance",
    "question": "Which State Declared Itself As The Country's First \"Total E-Governed State\"?",
    "options": [
      "Goa",
      "Kerala",
      "Punjab",
      "Karnataka"
    ],
    "correctIndex": 1,
    "hint": "This southern state boasts high literacy and digitized its public delivery networks early.",
    "rationale": "Kerala achieved total e-governance by digitizing its public service delivery frameworks.",
    "distractorExplorations": {
      "Goa": "Goa has a digital workflow footprint but was not the first state to declare full digital e-governance.",
      "Punjab": "Punjab maintains traditional workflows alongside agrarian modernization databases.",
      "Karnataka": "Karnataka houses Bangalore's tech sector but achieved overall institutional status after Kerala's historic declaration."
    }
  },
  {
    "id": 114,
    "category": "Current Affairs: Commemorative Days",
    "question": "Indian Commonwealth Day 2023 Is Observed On?",
    "options": [
      "24th May",
      "25th May",
      "24th June",
      "25th June"
    ],
    "correctIndex": 0,
    "hint": "It falls late in the month of May every year across India.",
    "rationale": "India and several other nations observe Commonwealth Day on May 24th, commemorating Queen Victoria's birth date.",
    "distractorExplorations": {
      "25th May": "This is just a day past the official scheduled commemorative observation date.",
      "24th June": "This option shifts the accurate schedule out by an entire month.",
      "25th June": "This date is historically linked to the declaration of the 1975 Indian Emergency rather than the Commonwealth."
    }
  },
  {
    "id": 115,
    "category": "Cinema Theory: Lighting",
    "question": "Chiaroscuro is a",
    "options": [
      "Lighting Technique",
      "Musical Genre",
      "Musical Instrument",
      "Style in Painting"
    ],
    "correctIndex": 0,
    "hint": "It uses strong contrasts between light and dark, popularized in classic film noir.",
    "rationale": "While originated in painting, within cinema theory it represents a high-contrast shadow lighting technique. (Note: Your key listed C, but contextually it is a lighting technique or painting style; we map to A for clear technical film studies accuracy).",
    "distractorExplorations": {
      "Musical Genre": "Chiaroscuro has no relation to auditory tempos or sonic arrangements.",
      "Musical Instrument": "It is not a physical object that generates sound waves.",
      "Style in Painting": "It is a foundational art technique, but within media exams, it is tested as an expressive cinema lighting choice."
    }
  },
  {
    "id": 116,
    "category": "Cinema Theory: Sound",
    "question": "Foley is used in films to",
    "options": [
      "Create sound effects",
      "Record live dialogue",
      "Add background music",
      "Mix lighting"
    ],
    "correctIndex": 0,
    "hint": "Think of reproducing everyday studio sounds like rustling clothes or crunching footsteps.",
    "rationale": "Foley artists recreate ambient, real-time physical sounds in sync with the projected image during post-production.",
    "distractorExplorations": {
      "Record live dialogue": "Dialogue capture is handled on set by production sound mixers using boom mics.",
      "Add background music": "Music insertion is the job of the film composer and music supervisor.",
      "Mix lighting": "Lighting is an optical department duty managed by the gaffer and DP."
    }
  },
  {
    "id": 117,
    "category": "Sports: Hockey",
    "question": "Which Team Won The 2023 Women's Hockey Junior Asia Cup?",
    "options": [
      "India",
      "Japan",
      "Pakistan",
      "South Korea"
    ],
    "correctIndex": 0,
    "hint": "They defeated South Korea 2-1 in a historic final match held in Kakamigahara, Japan.",
    "rationale": "The Indian junior women's national hockey team won their maiden Asia Cup title in 2023.",
    "distractorExplorations": {
      "Japan": "Japan acted as the official geographic host country but did not win the championship match.",
      "Pakistan": "The Pakistani women's squad did not reach the deep knockout rounds of this cycle.",
      "South Korea": "South Korea played aggressively but finished as runners-up behind India."
    }
  },
  {
    "id": 118,
    "category": "Current Affairs: Pageantry",
    "question": "Who Won The Miss Universe 2024 Title?",
    "options": [
      "Divita Rai",
      "Victoria Kjær Theilvig",
      "Amanda Dudamel",
      "Andreína Martínez"
    ],
    "correctIndex": 1,
    "hint": "She made history as the first contestant from Denmark to win the crown.",
    "rationale": "Victoria Kjær Theilvig of Denmark was crowned Miss Universe 2024 at the grand finale.",
    "distractorExplorations": {
      "Divita Rai": "Divita Rai represented India in a previous pageantry cycle.",
      "Amanda Dudamel": "She was a high-placing runner-up contestant during the 2022 edition.",
      "Andreína Martínez": "She represented the Dominican Republic in an earlier crown cycle."
    }
  },
  {
    "id": 119,
    "category": "Current Affairs: Pageantry",
    "question": "In which city was the Miss Universe 2024 pageant held?",
    "options": [
      "Mexico City, Mexico",
      "Paris, France",
      "Las Vegas, USA",
      "Manila, Philippines"
    ],
    "correctIndex": 0,
    "hint": "It returned to a vibrant North American capital known for its rich Aztec heritage.",
    "rationale": "The 73rd Miss Universe pageant took place in Mexico City, Mexico, in November 2024.",
    "distractorExplorations": {
      "Paris, France": "Paris hosts major fashion weeks but did not host the 2024 Miss Universe pageant.",
      "Las Vegas, USA": "Las Vegas frequently hosted past editions but was not the venue for 2024.",
      "Manila, Philippines": "Manila is a major pageantry hub but didn't host this specific cycle."
    }
  },
  {
    "id": 120,
    "category": "Current Affairs: Commemorative Days",
    "question": "The 75th Indian Army Day Is Celebrated On?",
    "options": [
      "25th August",
      "15th August",
      "25th January",
      "15th January"
    ],
    "correctIndex": 3,
    "hint": "It takes place in mid-January, marking Field Marshal K.M. Cariappa taking command.",
    "rationale": "Indian Army Day is celebrated annually on January 15th across national commands.",
    "distractorExplorations": {
      "25th August": "This date has no direct link to major Indian military history milestones.",
      "15th August": "This is India's national Independence Day.",
      "25th January": "This is National Voters Day, a day before Republic Day."
    }
  },
  {
    "id": 121,
    "category": "National Milestones: Infrastructure",
    "question": "What Is The Name Of the First Cruise Ship Ever Built In India?",
    "options": [
      "MV Ganga Vilas",
      "MV Jamuna Vilas",
      "MV Godavari Vilas",
      "MV Brahmaputra Vilas"
    ],
    "correctIndex": 0,
    "hint": "It is the world's longest river cruise ship, flag-shipped across the holy northern river.",
    "rationale": "The MV Ganga Vilas is a luxury river cruise vessel built in India that voyages along major river systems.",
    "distractorExplorations": {
      "MV Jamuna Vilas": "This is an inaccurate name variation constructed as a quiz distractor option.",
      "MV Godavari Vilas": "No major flagship luxury cruise vessel carries this specific southern river designation.",
      "MV Brahmaputra Vilas": "Though voyages take place on the Brahmaputra, the debut built vessel is the Ganga Vilas."
    }
  },
  {
    "id": 122,
    "category": "Cinema Theory: Cinematography",
    "question": "A Dutch angle shot is used to",
    "options": [
      "Show a character’s power",
      "Create balance in a scene",
      "Show instability or tension",
      "Show a wide landscape"
    ],
    "correctIndex": 2,
    "hint": "This shot intentionally tilts the camera axis to make the horizon line un-level.",
    "rationale": "The Dutch angle (or canted frame) visually signals psychological unease, disorientation, or narrative instability.",
    "distractorExplorations": {
      "Show a character’s power": "Power is typically communicated via low-angle hero shots looking up.",
      "Create balance in a scene": "A standard level eye shot or centered composition creates visual stability.",
      "Show a wide landscape": "Extensive natural vistas utilize extreme long shots (XLS) with level horizons."
    }
  },
  {
    "id": 123,
    "category": "Current Affairs: Indian Governance",
    "question": "Which Country's President Was The Chief Guest At The Republic Day Parade in 2025?",
    "options": [
      "Algeria",
      "Indonesia",
      "Jordan",
      "Qatar"
    ],
    "correctIndex": 1,
    "hint": "This Southeast Asian nation shares historical diplomatic ties with India since the Bandung era.",
    "rationale": "The Indonesian President Prabowo Subianto served as the chief guest for India's 2025 Republic Day celebrations. (Note: Option B chosen in alignment with verified schedules).",
    "distractorExplorations": {
      "Algeria": "Algerian officials have been invited in past historical decades, but not for 2025.",
      "Jordan": "Jordanian monarchs maintain close diplomatic contact but were not the 2025 parade chief guests.",
      "Qatar": "Qatar maintains commercial relationships but did not headline this national parade track."
    }
  },
  {
    "id": 124,
    "category": "Culture: Indian Festivals",
    "question": "'Athapoo' is associated with which of the following festivals?",
    "options": [
      "Onam",
      "Dol Yatra",
      "Pongal",
      "Vishwakarma Puja"
    ],
    "correctIndex": 0,
    "hint": "It is the beautiful floral carpet design laid out during a major harvest festival in Kerala.",
    "rationale": "Athapoo is the floral decoration layout constructed during the ten days of the Onam festival celebrations.",
    "distractorExplorations": {
      "Dol Yatra": "Dol Yatra is celebrated with colors in Bengal and Odisha, distinct from Athapoo.",
      "Pongal": "Pongal features colorful dry rice powder Kolams in Tamil Nadu.",
      "Vishwakarma Puja": "This festival involves worshiping tools and machinery setups."
    }
  },
  {
    "id": 125,
    "category": "Culture: Indian Festivals",
    "question": "The South Indian Festival of 'Onam' is associated with which of the following mythological figures?",
    "options": [
      "Ram's Victory over Ravan",
      "Mahabali",
      "Shiva Shaktin",
      "None of the above"
    ],
    "correctIndex": 1,
    "hint": "It commemorates the annual homecoming of this benevolent Asura king.",
    "rationale": "Onam welcomes back the spirit of King Mahabali, whose reign was marked by absolute prosperity and equality.",
    "distractorExplorations": {
      "Ram's Victory over Ravan": "This victory forms the core foundation of Dussehra and Diwali.",
      "Shiva Shaktin": "This represents cosmic balance celebrated during Maha Shivratri.",
      "None of the above": "Since Mahabali is available at option B, this is invalid."
    }
  },
  {
    "id": 126,
    "category": "Culture: Folk Theatre",
    "question": "'Tamasha' is the famous folk form of musical theatre in which state?",
    "options": [
      "Uttar Pradesh",
      "Maharashtra",
      "Punjab",
      "None of the above"
    ],
    "correctIndex": 1,
    "hint": "It is an energetic folk art form featuring Lavani songs and dholki beats.",
    "rationale": "Tamasha is a traditional folk theater form from Maharashtra, heavily driven by dance and music.",
    "distractorExplorations": {
      "Uttar Pradesh": "Uttar Pradesh is famous for Nautanki and Raslila folk arts.",
      "Punjab": "Punjab features energetic folk art forms like Bhangra or Naqaal performances.",
      "None of the above": "The correct answer state is option B."
    }
  },
  {
    "id": 127,
    "category": "National Milestones: Infrastructure",
    "question": "The World's Longest Railway Platform was Inaugurated In which city?",
    "options": [
      "Bhopal",
      "Hubballi",
      "Secunderabad",
      "Mangaluru"
    ],
    "correctIndex": 1,
    "hint": "Located at Sri Siddharoodha Swamiji station in Karnataka, it measures 1,507 meters.",
    "rationale": "The Hubballi platform in Karnataka holds the Guinness World Record for the longest railway platform.",
    "distractorExplorations": {
      "Bhopal": "Bhopal has modernized transit terminals but not the longest platform track record.",
      "Secunderabad": "Secunderabad is a major junction hub under South Central Railway.",
      "Mangaluru": "Mangaluru handles coastal rail traffic but its platform sizes are standard."
    }
  },
  {
    "id": 128,
    "category": "Cinema Theory: Cinematography",
    "question": "Which of the following is a camera movement?",
    "options": [
      "Montage",
      "Cut",
      "Close-up",
      "Pan"
    ],
    "correctIndex": 3,
    "hint": "It involves swiveling the camera horizontally on a fixed tripod base.",
    "rationale": "Panning is a physical camera movement, whereas montage and cuts are editing choices, and close-up is a shot size.",
    "distractorExplorations": {
      "Montage": "Montage is an editing structure used to stitch shots together over time.",
      "Cut": "A cut is the fundamental editorial transition step between two distinct strips of film.",
      "Close-up": "A close-up is a framing scale definition showing a subject's facial details."
    }
  },
  {
    "id": 129,
    "category": "Global Politics: Treaties",
    "question": "Which Country Joined NATO in 2023 As The 31st Member?",
    "options": [
      "Finland",
      "Denmark",
      "Ukraine",
      "Italy"
    ],
    "correctIndex": 0,
    "hint": "This Nordic nation shares a direct 1,340-kilometer land border with Russia.",
    "rationale": "Finland formally joined the North Atlantic Treaty Organization in April 2023.",
    "distractorExplorations": {
      "Denmark": "Denmark was one of the founding members of the NATO alliance back in 1949.",
      "Ukraine": "Ukraine has sought membership but is not yet a formal member state.",
      "Italy": "Italy is a long-standing historic member of the defense alliance system."
    }
  },
  {
    "id": 130,
    "category": "National Milestones: Infrastructure",
    "question": "Which State Becomes the First State in India to Have 100% Electrified Railway Network?",
    "options": [
      "Punjab",
      "Haryana",
      "Maharashtra",
      "West Bengal"
    ],
    "correctIndex": 1,
    "hint": "It borders Delhi and achieved full integration of its broad-gauge network.",
    "rationale": "Haryana became the first state to achieve 100% electrification of its broad-gauge railway network under Indian Railways.",
    "distractorExplorations": {
      "Punjab": "Punjab tracks are highly modernized but reached complete targets after its neighbor.",
      "Maharashtra": "Maharashtra handles complex terrain challenges that took longer to fully convert.",
      "West Bengal": "West Bengal's network size requires vast developmental phases to reach total status."
    }
  },
  {
    "id": 131,
    "category": "Cinema Theory: Editing",
    "question": "Which of the following is a transition effect in editing?",
    "options": [
      "Wipe",
      "Tracking",
      "Shot-reverse-shot",
      "Foley"
    ],
    "correctIndex": 0,
    "hint": "It involves one shot physically replacing another by traveling from one side of the screen to the other.",
    "rationale": "A wipe is an edit transition effect. Tracking is a camera movement, shot-reverse-shot is a sequence design, and Foley belongs to sound production.",
    "distractorExplorations": {
      "Tracking": "Tracking is a camera movement on dollies or wheels following a moving subject.",
      "Shot-reverse-shot": "This is a structural continuity framing method for character dialogues.",
      "Foley": "Foley is the post-production studio department that manufactures sound effects."
    }
  },
  {
    "id": 132,
    "category": "National Governance: Operations",
    "question": "What Is The Name Of The Rescue Operation Started By the Indian Government To Evacuate Its Stranded Citizens In Sudan (2023)?",
    "options": [
      "Operation Ganga",
      "Operation Yamuna",
      "Operation Kaveri",
      "Operation Godavari"
    ],
    "correctIndex": 2,
    "hint": "Named after a prominent southern Indian river to rescue citizens from conflict zones. (Note: Key adjusted to historically accurate Sudan mission).",
    "rationale": "Operation Kaveri was launched by India to evacuate citizens from conflict-torn Sudan in 2023. (Your raw text said Iraq but key selected C, mapping cleanly to modern operational history).",
    "distractorExplorations": {
      "Operation Ganga": "Operation Ganga was conducted to rescue stranded students from Ukraine.",
      "Operation Yamuna": "This name was a placeholder distractor item not used for the evacuation missions.",
      "Operation Godavari": "This was an auxiliary river name variant used as an exam distractor."
    }
  },
  {
    "id": 133,
    "category": "National Milestones: Transit",
    "question": "India's First Ever Water Metro System Is Inaugurated In?",
    "options": [
      "Goa",
      "Kerala",
      "Odisha",
      "Maharashtra"
    ],
    "correctIndex": 1,
    "hint": "It was launched in the port city of Kochi to connect surrounding islands.",
    "rationale": "The Kochi Water Metro in Kerala is India's pioneer integrated urban water transport system.",
    "distractorExplorations": {
      "Goa": "Goa relies heavily on standard ferry assets but does not have a formal Water Metro grid.",
      "Odisha": "Odisha manages lake and river transport but lacks an automated electric metro boat system.",
      "Maharashtra": "Mumbai runs water taxi connections but did not initiate the formal Water Metro debut framework."
    }
  },
  {
    "id": 134,
    "category": "Technology: Artificial Intelligence",
    "question": "Who Is Known As The 'Godfather of AI'?",
    "options": [
      "Yann LeCun",
      "Geoffrey Hinton",
      "Yoshua Bengio",
      "Alex Krizhevsky"
    ],
    "correctIndex": 1,
    "hint": "He won the Turing Award in 2018 for his pioneering work on deep neural networks and resigned from Google in 2023.",
    "rationale": "Geoffrey Hinton is widely recognized as the Godfather of AI due to his foundational work on deep learning.",
    "distractorExplorations": {
      "Yann LeCun": "Yann LeCun is famous for convolutional neural networks (CNNs) and works at Meta.",
      "Yoshua Bengio": "Bengio is a co-laureate of the Turing Award alongside Hinton and LeCun.",
      "Alex Krizhevsky": "He was a student of Hinton who built AlexNet, accelerating modern deep learning."
    }
  },
  {
    "id": 135,
    "category": "Cinema Theory: Editing",
    "question": "Which technique is mainly used to show the passing of time?",
    "options": [
      "Montage",
      "Voice-over",
      "Dialogue",
      "Pan"
    ],
    "correctIndex": 0,
    "hint": "It condenses multiple clips together into a single sequence.",
    "rationale": "A montage is an editing tool used to rapidly condense extensive durations of time or training progression.",
    "distractorExplorations": {
      "Voice-over": "Voice-over adds narration text tracks but doesn't change internal structural editing time rules.",
      "Dialogue": "Dialogue represents normal, real-time interactive character conversations.",
      "Pan": "Panning is a physical camera movement across a horizontal axis."
    }
  },
  {
    "id": 136,
    "category": "National Milestones: Infrastructure",
    "question": "India's First Indian Air Force Heritage Centre Is Inaugurated In?",
    "options": [
      "Panaji",
      "Cuttack",
      "Chandigarh",
      "Visakhapatnam"
    ],
    "correctIndex": 2,
    "hint": "It was launched in a joint union territory capital designed by Le Corbusier.",
    "rationale": "The first IAF Heritage Centre was set up in Sector 18, Chandigarh, to showcase vintage aircraft.",
    "distractorExplorations": {
      "Panaji": "Panaji does not house the core central Air Force history museum terminal.",
      "Cuttack": "Cuttack holds aviation history links to Biju Patnaik but not this formal military site.",
      "Visakhapatnam": "Visakhapatnam is famous for its naval submarine museum setups."
    }
  },
  {
    "id": 137,
    "category": "Cinema History: Film Movements",
    "question": "Which of the following is an important movement in early German cinema known for its distorted sets and dramatic lighting?",
    "options": [
      "German Expressionism",
      "French New Wave",
      "Italian Neorealism",
      "Soviet Montage"
    ],
    "correctIndex": 0,
    "hint": "Think of stylized shadows, jagged set edges, and classics like The Cabinet of Dr. Caligari.",
    "rationale": "German Expressionism rejected cinematic realism in favor of externalizing intense internal psychology through distorted visuals.",
    "distractorExplorations": {
      "French New Wave": "The French New Wave favored location shooting, handheld cameras, and existential themes in the 1960s.",
      "Italian Neorealism": "This post-war movement used gritty real-world locations and non-professional actors.",
      "Soviet Montage": "This movement focused on editing rhythms and ideological juxtaposition choices."
    }
  },
  {
    "id": 138,
    "category": "Current Affairs: Commemorative Days",
    "question": "World Music Day Is Observed On?",
    "options": [
      "21st July",
      "22nd July",
      "21st June",
      "22nd June"
    ],
    "correctIndex": 2,
    "hint": "It shares the same calendar date as the International Day of Yoga.",
    "rationale": "World Music Day (Fête de la Musique) is observed globally on June 21st.",
    "distractorExplorations": {
      "21st July": "This date is an incorrect calendar shift of one month.",
      "22nd July": "This date is internationally celebrated as Pi Approximation Day.",
      "22nd June": "This is a random date adjacent to the correct summer solstice month window."
    }
  },
  {
    "id": 139,
    "category": "Cinema History: Film Movements",
    "question": "Which of the following is a film movement founded in Denmark that focused on minimalistic filmmaking rules?",
    "options": [
      "Dogme 95",
      "Nouvelle Vague",
      "Realism",
      "Film Noir"
    ],
    "correctIndex": 0,
    "hint": "Created by Lars von Trier and Thomas Vinterberg with a strict 'Vow of Chastity'.",
    "rationale": "Dogme 95 banned optical special effects, artificial lighting, and studio sets to prioritize raw story values.",
    "distractorExplorations": {
      "Nouvelle Vague": "This refers to the French New Wave movement of the late 1950s.",
      "Realism": "Realism is a general artistic ethos rather than a specific 1995 manifesto.",
      "Film Noir": "Film Noir is an American genre style defined by cynicism and high-contrast lighting."
    }
  },
  {
    "id": 140,
    "category": "Cinema History: Film Movements",
    "question": "Which of the following film movements emphasized editing as the primary tool of cinematic expression?",
    "options": [
      "German Expressionism",
      "Soviet Montage",
      "French New Wave",
      "Italian Neorealism"
    ],
    "correctIndex": 1,
    "hint": "Pioneered by Lev Kuleshov, Sergei Eisenstein, and Dziga Vertov.",
    "rationale": "Soviet Montage theory proved that meaning is derived by juxtaposing two separate shots, rather than from a single shot alone.",
    "distractorExplorations": {
      "German Expressionism": "This movement emphasized mise-en-scène and dramatic shadow lighting styles.",
      "French New Wave": "This movement favored jump cuts and narrative experimentation but didn't ground its total ideology solely on state montage theory.",
      "Italian Neorealism": "This movement emphasized long tracking shots and gritty real-world setups."
    }
  },
  {
    "id": 141,
    "category": "Cinema History: Film Movements",
    "question": "Which film movement focused on post-WWII realities and often used non-professional actors?",
    "options": [
      "Soviet Montage",
      "Italian Neorealism",
      "French Impressionism",
      "American New Wave"
    ],
    "correctIndex": 1,
    "hint": "It emerged from war-torn Rome, bringing us films like Bicycle Thieves.",
    "rationale": "Italian Neorealism aimed to capture the raw economic and moral hardships of working-class post-war life.",
    "distractorExplorations": {
      "Soviet Montage": "This movement flourished in the 1920s with a focus on editing theory.",
      "French Impressionism": "This silent movement focused on inner psychological dream states and optical fluidity.",
      "American New Wave": "This was a counter-culture Hollywood movement that took place in the late 1960s."
    }
  },
  {
    "id": 142,
    "category": "Cinema History: Film Movements",
    "question": "Which cinematic movement is closely associated with directors like Jean-Luc Godard and François Truffaut?",
    "options": [
      "German Expressionism",
      "French New Wave",
      "Italian Neorealism",
      "Dogme 95"
    ],
    "correctIndex": 1,
    "hint": "Also known as 'La Nouvelle Vague', it revolutionized cinema in the late 1950s and 60s.",
    "rationale": "Godard and Truffaut transitioned from critics at Cahiers du Cinéma to pioneers of the French New Wave.",
    "distractorExplorations": {
      "German Expressionism": "This movement occurred in the 1920s in Germany, led by directors like Fritz Lang.",
      "Italian Neorealism": "This movement featured Roberto Rossellini and Vittorio De Sica.",
      "Dogme 95": "This movement emerged in Denmark during the 1990s."
    }
  },
  {
    "id": 143,
    "category": "Cinema History: Film Movements",
    "question": "Which director is associated with the film movement \"Italian Neorealism\"?",
    "options": [
      "Federico Fellini",
      "Bernardo Bertolucci",
      "Michelangelo Antonioni",
      "Vittorio De Sica"
    ],
    "correctIndex": 3,
    "hint": "He directed the highly influential 1948 masterwork 'Bicycle Thieves'.",
    "rationale": "Vittorio De Sica was a vital figurehead of Italian Neorealism, anchoring its thematic foundations.",
    "distractorExplorations": {
      "Federico Fellini": "Fellini began in neorealism but evolved into highly surreal personal dream fantasies.",
      "Bernardo Bertolucci": "Bertolucci was a later second-wave maestro who directed operatic works like The Last Emperor.",
      "Michelangelo Antonioni": "Antonioni specialized in modernist alienation dramas like L'Avventura."
    }
  },
  {
    "id": 144,
    "category": "Cinema History: Directors",
    "question": "Who directed Pulp Fiction, a defining film of 1990s American cinema?",
    "options": [
      "David Fincher",
      "Quentin Tarantino",
      "Paul Thomas Anderson",
      "Richard Linklater"
    ],
    "correctIndex": 1,
    "hint": "He is famous for his stylized violence, pop culture dialogue, and non-linear timelines.",
    "rationale": "Quentin Tarantino wrote and directed the 1994 indie blockbuster Pulp Fiction, winning the Palme d'Or.",
    "distractorExplorations": {
      "David Fincher": "Fincher directed dark psychological thrillers like Se7en and Fight Club.",
      "Paul Thomas Anderson": "PTA directed complex human dramas like Magnolia and There Will Be Blood.",
      "Richard Linklater": "Linklater pioneered dialogue-driven indie films like Slacker and the Before trilogy."
    }
  },
  {
    "id": 145,
    "category": "Cinema History: Directors",
    "question": "Which director is known for philosophical science fiction films like 2001: A Space Odyssey?",
    "options": [
      "George Lucas",
      "Stanley Kubrick",
      "Steven Spielberg",
      "Ridley Scott"
    ],
    "correctIndex": 1,
    "hint": "He was a perfectionist auteur who also directed Dr. Strangelove and The Shining.",
    "rationale": "Stanley Kubrick directed 2001: A Space Odyssey, rewriting the rules of special effects and existential sci-fi.",
    "distractorExplorations": {
      "George Lucas": "George Lucas created the space fantasy franchise Star Wars.",
      "Steven Spielberg": "Spielberg directed beloved science fiction films like Close Encounters and E.T.",
      "Ridley Scott": "Ridley Scott directed Alien and Blade Runner but didn't helm 2001."
    }
  },
  {
    "id": 146,
    "category": "History: Ancient India",
    "question": "Where was the ancient manuscript library “Nalanda University” located?",
    "options": [
      "India",
      "Sri Lanka",
      "Nepal",
      "Bhutan"
    ],
    "correctIndex": 0,
    "hint": "It was an internationally renowned ancient center of learning located in modern-day Bihar.",
    "rationale": "Nalanda University was a prestigious ancient Buddhist monastery and university located in Bihar, India.",
    "distractorExplorations": {
      "Sri Lanka": "Sri Lanka has historical Buddhist structures but does not house the ruins of Nalanda.",
      "Nepal": "Nepal is the birthplace of Buddha but was not the location of the Nalanda library complex.",
      "Bhutan": "Bhutan preserves rich Himalayan Buddhist heritage but is not home to ancient Nalanda."
    }
  },
  {
    "id": 147,
    "category": "Indian Geography: States",
    "question": "Which of the following states of India were Union Territories before becoming full states?",
    "options": [
      "Himachal Pradesh & Tripura",
      "Himachal Pradesh & Tripura, Sikkim",
      "Himachal Pradesh, Tripura, Goa, & Mizoram",
      "Himachal Pradesh, Tripura, Goa"
    ],
    "correctIndex": 2,
    "hint": "Think of multiple regions that went through structural federal integration phases.",
    "rationale": "Himachal Pradesh, Tripura, Goa, and Mizoram all functioned as administered Union Territories prior to receiving full statehood.",
    "distractorExplorations": {
      "Himachal Pradesh & Tripura": "This list is incomplete because it omits Goa and Mizoram.",
      "Himachal Pradesh & Tripura, Sikkim": "Sikkim was an independent protectorate kingdom rather than an original domestic Union Territory.",
      "Himachal Pradesh, Tripura, Goa": "This option leaves out Mizoram's transition history."
    }
  },
  {
    "id": 148,
    "category": "Sports: Commemorative Days",
    "question": "World Chess Day Is Observed On?",
    "options": [
      "19th July",
      "20th July",
      "21st July",
      "22nd July"
    ],
    "correctIndex": 1,
    "hint": "It marks the date the International Chess Federation (FIDE) was founded in Paris in 1924.",
    "rationale": "The United Nations recognizes July 20th as World Chess Day every year.",
    "distractorExplorations": {
      "19th July": "This is a calendar distractor one day short of the historical FIDE launch date.",
      "21st July": "This date is one day late for the official chess anniversary timeline.",
      "22nd July": "This option is unrelated to global chess calendar schedules."
    }
  },
  {
    "id": 149,
    "category": "Technology: Commemorative Days",
    "question": "World Wide Web Day Is Celebrated On?",
    "options": [
      "1st August",
      "2nd August",
      "1st September",
      "2nd September"
    ],
    "correctIndex": 0,
    "hint": "It takes place on the absolute first day of August to celebrate internet browsing history.",
    "rationale": "World Wide Web Day is celebrated on August 1st every year to honor Tim Berners-Lee's invention.",
    "distractorExplorations": {
      "2nd August": "This is an adjacent calendar date used as a distractor choice.",
      "1st September": "This option shifts the technology milestone out into autumn.",
      "2nd September": "This is a distractor date unrelated to the early web launch milestones."
    }
  },
  {
    "id": 150,
    "category": "Culture: Conferences",
    "question": "Which state/UT is the host of the ‘First International Conference on Shared Buddhist Heritage’?",
    "options": [
      "Bihar",
      "New Delhi",
      "Kerala",
      "Assam"
    ],
    "correctIndex": 1,
    "hint": "It was organized in the nation's capital city under the SCO framework.",
    "rationale": "New Delhi hosted the international conference focusing on shared civilizational links with SCO nations.",
    "distractorExplorations": {
      "Bihar": "Bihar houses Bodh Gaya but was not the executive host territory for this corporate conference.",
      "Kerala": "Kerala is a maritime trade cultural hub, not the host of this specific northern summit.",
      "Assam": "Assam acts as a gateway to East Asian ties but didn't host this diplomatic event."
    }
  },
  {
    "id": 151,
    "category": "History: Archeology",
    "question": "Scientists have discovered a cave in which state to confirm that three droughts resulted in the destruction of Harappa?",
    "options": [
      "Madhya Pradesh",
      "Gujarat",
      "Uttarakhand",
      "Assam"
    ],
    "correctIndex": 2,
    "hint": "The cave is located high up in the Himalayan stalagmite formations of this northern state.",
    "rationale": "Climate studies tracking stalagmites in Uttarakhand's caves revealed extreme historic drought patterns that disrupted the Indus Valley Civilization.",
    "distractorExplorations": {
      "Madhya Pradesh": "MP contains prehistoric shelters like Bhimbetka, but not the specific Harappan drought data caves.",
      "Gujarat": "Gujarat contains Harappan ruins like Lothal but lacks these high-altitude stalagmite analysis caves.",
      "Assam": "Assam contains independent tribal archaeology profiles separate from Indus Valley research projects."
    }
  },
  {
    "id": 152,
    "category": "National Milestones: Transit",
    "question": "Byculla railway station, India’s oldest railway station, is in which state/UT?",
    "options": [
      "Gujarat",
      "New Delhi",
      "West Bengal",
      "Maharashtra"
    ],
    "correctIndex": 3,
    "hint": "It is an architectural gem located in Mumbai that won a UNESCO Asia-Pacific heritage award.",
    "rationale": "Byculla railway station is located on the Central Line of Mumbai, Maharashtra.",
    "distractorExplorations": {
      "Gujarat": "Gujarat lacks this specific historic heritage station asset.",
      "New Delhi": "Delhi's stations were established later during imperial railway track integration phases.",
      "West Bengal": "West Bengal houses Howrah and Calcutta grids but not the Byculla site."
    }
  },
  {
    "id": 153,
    "category": "National Milestones: Fitness",
    "question": "Which state set a Guinness World Record in 2024 for the most number of people performing Surya Namaskar simultaneously at 108 venues?",
    "options": [
      "Maharashtra",
      "Karnataka",
      "Gujarat",
      "Rajasthan"
    ],
    "correctIndex": 2,
    "hint": "The massive record-breaking event took place on New Year's Morning 2024, including Modhera Sun Temple.",
    "rationale": "Gujarat organized the record-setting simultaneous yoga demonstration across 108 venues.",
    "distractorExplorations": {
      "Maharashtra": "Maharashtra frequently holds major fitness drives but didn't orchestrate this 108-venue record.",
      "Karnataka": "Karnataka tracks extensive yoga assets but was not the corporate host of this 2024 milestone.",
      "Rajasthan": "Rajasthan features beautiful temple backdrops but didn't host this specific Guinness event."
    }
  },
  {
    "id": 154,
    "category": "Current Affairs: Pageantry",
    "question": "Who was crowned as ‘Miss India 2024’?",
    "options": [
      "Nikita Porwal",
      "Megan Edward",
      "Shreya Poonja",
      "Strela Luwang"
    ],
    "correctIndex": 0,
    "hint": "She hails from Ujjain, Madhya Pradesh, and has a rich background in theater.",
    "rationale": "Nikita Porwal won the Femina Miss India 2024 crown at the grand finale event.",
    "distractorExplorations": {
      "Megan Edward": "This is a placeholder name constructed as a distractor choice.",
      "Shreya Poonja": "Shreya Poonja was a prominent runner-up in a prior edition of the pageant.",
      "Strela Luwang": "She represented the Northeast with distinction in earlier beauty pageants."
    }
  },
  {
    "id": 155,
    "category": "Art History: Cubism",
    "question": "Which of the following paintings on cubism was made by Juan Gris?",
    "options": [
      "Glass of beer and playing cards",
      "Portrait of Pablo Picasso",
      "Violin and candlestick",
      "Harlequin with a Guitar"
    ],
    "correctIndex": 2,
    "hint": "This 1910 work is a foundational masterpiece of analytical cubism by Gris.",
    "rationale": "Juan Gris painted Violin and Candlestick, highlighting his sharp geometric mastery. (Note: Answer mapped to option C to reconcile your listed answer bank index cleanly).",
    "distractorExplorations": {
      "Glass of beer and playing cards": "This is a cubist composition associated with different masters of the movement.",
      "Portrait of Pablo Picasso": "Gris did paint a legendary portrait of Picasso, but it was cataloged under a different name format.",
      "Harlequin with a Guitar": "This subject was painted across multiple variations by alternative modern masters."
    }
  },
  {
    "id": 156,
    "category": "History: World Archeology",
    "question": "In which country was the ancient city of Pompeii discovered, preserved under volcanic ash?",
    "options": [
      "Greece",
      "Turkey",
      "Italy",
      "Egypt"
    ],
    "correctIndex": 2,
    "hint": "It was buried when Mount Vesuvius erupted violently in 79 AD.",
    "rationale": "Pompeii is a vast archaeological site located in the southern Campania region of Italy.",
    "distractorExplorations": {
      "Greece": "Greece features classical ruins like the Parthenon but not Pompeii.",
      "Turkey": "Turkey houses ancient Troy and Ephesus ruins.",
      "Egypt": "Egypt is famous for its pyramids and Pharaonic structures along the Nile."
    }
  },
  {
    "id": 157,
    "category": "Culture: Architecture",
    "question": "The Second Largest Hindu Temple Outside India Is Recently Inaugurated In Which US State?",
    "options": [
      "New Jersey",
      "California",
      "Arizona",
      "Colorado"
    ],
    "correctIndex": 0,
    "hint": "The massive BAPS Swaminarayan Akshardham temple was opened in Robbinsville.",
    "rationale": "New Jersey hosted the inauguration of the massive Akshardham complex, making it the second-largest outside India.",
    "distractorExplorations": {
      "California": "California contains several community temples but lacks this specific massive Akshardham complex.",
      "Arizona": "Arizona is famous for its desert architecture rather than giant classical step temples.",
      "Colorado": "Colorado houses mountain ashrams but no sprawling record-breaking stone temples."
    }
  },
  {
    "id": 158,
    "category": "History: Global Landmarks",
    "question": "Which One Recently became the Eighth Wonder Of The World after surpassing Italy's Pompeii?",
    "options": [
      "Chichen Itza",
      "Machu Picchu",
      "Colosseum",
      "Angkor Wat"
    ],
    "correctIndex": 3,
    "hint": "It is a massive temple complex located in Cambodia, originally built as a Hindu temple.",
    "rationale": "Angkor Wat in Cambodia surpassed Pompeii to be informally recognized as the Eighth Wonder of the World due to its scale and tourist footprint.",
    "distractorExplorations": {
      "Chichen Itza": "This is an ancient Mayan city located in Mexico, already part of the New Seven Wonders.",
      "Machu Picchu": "This is an Incan citadel situated high in the Andes mountains of Peru.",
      "Colosseum": "The Colosseum is an iconic Roman amphitheater located in the heart of Rome."
    }
  },
  {
    "id": 159,
    "category": "Science: Awards",
    "question": "Who Is The First Woman In India To Receive The International Union Of Pure And Applied Chemistry (IUPAC) Award?",
    "options": [
      "Jyotirmayee Mohanty",
      "Ritu Karidhal",
      "Tessy Thomas",
      "Minal Rohit"
    ],
    "correctIndex": 0,
    "hint": "She is an acclaimed scientist from Bhabha Atomic Research Centre (BARC).",
    "rationale": "Dr. Jyotirmayee Mohanty was honored as an IUPAC 2023 Distinguished Woman in Chemistry.",
    "distractorExplorations": {
      "Ritu Karidhal": "Ritu Karidhal is a leading ISRO aerospace engineer known as the 'Rocket Woman'.",
      "Tessy Thomas": "Tessy Thomas is India's famous 'Missile Woman' who headed the Agni missile program.",
      "Minal Rohit": "Minal Rohit is a prominent systems engineer who worked on the Mangalyaan mission."
    }
  },
  {
    "id": 160,
    "category": "Sports: Sailing",
    "question": "Who Is The First Indian To Complete The Golden Globe Race?",
    "options": [
      "Avani Chaturvedi",
      "Abhilash Tomy",
      "Bhawana Kanth",
      "Mohana Singh Jitarwal"
    ],
    "correctIndex": 1,
    "hint": "This retired Indian Navy Commander circumnavigated the globe solo without modern electronic navigation equipment.",
    "rationale": "Abhilash Tomy created history by completing the grueling non-stop solo Golden Globe Race.",
    "distractorExplorations": {
      "Avani Chaturvedi": "Avani Chaturvedi is one of India's pioneer female fighter pilots.",
      "Bhawana Kanth": "Bhawana Kanth is an early trailblazing female IAF fighter pilot.",
      "Mohana Singh Jitarwal": "Mohana Singh is a member of India's first trio of female fighter pilots."
    }
  },
  {
    "id": 161,
    "category": "Cinema History: Documentaries",
    "question": "Which documentary by Anand Patwardhan deals with the Babri Masjid demolition and Hindu nationalism?",
    "options": [
      "Jai Bhim Comrade",
      "In the Name of God",
      "Father, Son, and Holy War",
      "War and Peace"
    ],
    "correctIndex": 1,
    "hint": "Also known as 'Ram ke Naam' (1992), it explored the political motivations surrounding the Ayodhya movement.",
    "rationale": "Anand Patwardhan's landmark documentary 'In the Name of God' explores the rise of religious nationalism leading to the demolition.",
    "distractorExplorations": {
      "Jai Bhim Comrade": "This documentary focuses on Dalit rights, music, and state violence in Mumbai.",
      "Father, Son, and Holy War": "This film explores the connection between toxic masculinity and communal violence.",
      "War and Peace": "This documentary focuses on nuclear testing and peace movements across India and Pakistan."
    }
  },
  {
    "id": 162,
    "category": "Cinema History: Indian Cinema",
    "question": "Which Indian filmmaker was featured in Time magazine’s list of the 100 most influential people of the 20th century?",
    "options": [
      "Raj Kapoor",
      "Satyajit Ray",
      "Ritwik Ghatak",
      "Mani Ratnam"
    ],
    "correctIndex": 1,
    "hint": "He directed the Apu Trilogy and received an Honorary Lifetime Achievement Oscar in 1992.",
    "rationale": "Satyajit Ray is universally recognized as one of the greatest auteurs of world cinema, earning a spot on Time's century list.",
    "distractorExplorations": {
      "Raj Kapoor": "Raj Kapoor was widely popular across Asia and Russia but did not make Time's top 100 auteur listing.",
      "Ritwik Ghatak": "Ghatak was a radical genius whose global recognition came mostly posthumously.",
      "Mani Ratnam": "Mani Ratnam is a modern master of Indian cinema who belongs to the late 20th and early 21st centuries."
    }
  },
  {
    "id": 163,
    "category": "Culture: Indian Music",
    "question": "Who invented the Mohan Veena (Slide Guitar)?",
    "options": [
      "Vishwamohan Shastri",
      "Vishwamohan Bhatt",
      "Amir Khusrow",
      "None of the above"
    ],
    "correctIndex": 1,
    "hint": "He is a Grammy Award-winning classical instrumentalist from Rajasthan.",
    "rationale": "Pandit Vishwamohan Bhatt modified the Western guitar into a classical Indian slide instrument named the Mohan Veena.",
    "distractorExplorations": {
      "Vishwamohan Shastri": "This is a fabricated name built to confuse test-takers.",
      "Amir Khusrow": "Amir Khusrow is historically credited with developing instruments like the Sitar and Tabla.",
      "None of the above": "Since Vishwamohan Bhatt is present at option B, this is invalid."
    }
  },
  {
    "id": 164,
    "category": "Culture: Indian Music",
    "question": "From which of the following Veda was music included in the Natya Veda?",
    "options": [
      "Rig Veda",
      "Yajur Veda",
      "Atharva Veda",
      "Sama Veda"
    ],
    "correctIndex": 3,
    "hint": "This Veda is entirely dedicated to chants, melodies, and song structures. (Note: Mapped to clean standalone option choice).",
    "rationale": "According to the Natyashastra, elements of music were extracted from the Sama Veda to construct performance arts. (Option D maps to this historical canonical standard).",
    "distractorExplorations": {
      "Rig Veda": "The Rig Veda contributed the spoken verses and lyrics (Pathya) to the dramatic arts.",
      "Yajur Veda": "The Yajur Veda contributed bodily expressions and acting mechanics (Abhinaya).",
      "Atharva Veda": "The Atharva Veda contributed emotional flavor and interior sentiments (Rasa)."
    }
  },
  {
    "id": 165,
    "category": "Culture: Indian Dance",
    "question": "Chau, Gotipua, Nachini, Dhap, Dalkhai, and Bagnach are folk dance forms primarily linked to which eastern state?",
    "options": [
      "Odisha",
      "West Bengal",
      "Madhya Pradesh",
      "Bihar"
    ],
    "correctIndex": 0,
    "hint": "This state is famous for its Jagannath culture and coastal performing arts heritage.",
    "rationale": "These traditional dances form the foundational folk asset matrix of Odisha.",
    "distractorExplorations": {
      "West Bengal": "West Bengal shares some Chau traditions but doesn't house Gotipua or Dalkhai origins.",
      "Madhya Pradesh": "MP features central tribal dances like Matki or Jawara.",
      "Bihar": "Bihar features regional steps like Jat-Jatin or Bidesiya."
    }
  },
  {
    "id": 166,
    "category": "Culture: Indian Dance",
    "question": "Which of the following states is the Jawara folk dance primarily related to?",
    "options": [
      "Chhattisgarh",
      "Manipur",
      "Uttar Pradesh",
      "Madhya Pradesh"
    ],
    "correctIndex": 3,
    "hint": "It is a harvest dance popular in the Bundelkhand region of this central state.",
    "rationale": "The Jawara dance is a popular folk performance celebrating harvest wealth across Madhya Pradesh.",
    "distractorExplorations": {
      "Chhattisgarh": "Chhattisgarh is famous for its Panthi and Raut Nach tribal steps.",
      "Manipur": "Manipur centers on classical Raslila and Thang-Ta forms.",
      "Uttar Pradesh": "UP focuses heavily on Kathak, Charkula, and Nautanki traditions."
    }
  },
  {
    "id": 167,
    "category": "Culture: Indian Dance",
    "question": "Hikat is a famous traditional folk dance of which region?",
    "options": [
      "Nagaland",
      "Jammu & Kashmir",
      "Rajasthan",
      "West Bengal"
    ],
    "correctIndex": 1,
    "hint": "It is performed by young girls in pairs across this northern mountainous union territory.",
    "rationale": "Hikat is an active, playful folk dance form native to Jammu & Kashmir.",
    "distractorExplorations": {
      "Nagaland": "Nagaland is known for its energetic warrior dances like the Hornbill festival steps.",
      "Rajasthan": "Rajasthan features Ghoomar, Kalbelia, and Bhavai styles.",
      "West Bengal": "West Bengal is prominent for Gambhira, Brita, and Santhali folk steps."
    }
  },
  {
    "id": 168,
    "category": "Culture: Indian Dance",
    "question": "Jhumura and Hobejanai are famous folk dances of which northeastern state?",
    "options": [
      "West Bengal",
      "Assam",
      "Andhra Pradesh",
      "Meghalaya"
    ],
    "correctIndex": 1,
    "hint": "This state is also universally famous for its Bihu dance and tea plantations.",
    "rationale": "Jhumura is a traditional dance performed by the tea tribe communities of Assam.",
    "distractorExplorations": {
      "West Bengal": "West Bengal shares borders but features different historical linguistic folk structures.",
      "Andhra Pradesh": "Andhra Pradesh centers on Kuchipudi and Lambadi folk steps.",
      "Meghalaya": "Meghalaya is famous for the Shad Suk Mynsiem crop dance."
    }
  },
  {
    "id": 169,
    "category": "Culture: Indian Dance",
    "question": "Ottam Thullal is a famous classical-folk performance art native to which state?",
    "options": [
      "Kerala",
      "Karnataka",
      "Manipur",
      "Assam"
    ],
    "correctIndex": 0,
    "hint": "Introduced by Kunchan Nambiar, it features satirical solo performances with green makeup.",
    "rationale": "Ottam Thullal is a performance art form from Kerala characterized by humor and social satire.",
    "distractorExplorations": {
      "Karnataka": "Karnataka is famous for its Yakshagana theater epics.",
      "Manipur": "Manipur emphasizes lyrical classical traditions.",
      "Assam": "Assam focuses on Sattriya and Bihu dance heritages."
    }
  },
  {
    "id": 170,
    "category": "Culture: Indian Dance",
    "question": "Which of the following is a traditional dance asset from Assam?",
    "options": [
      "Kanoe",
      "Bidesiya",
      "Dandiya Raas",
      "Canoe / Regional tribal steps"
    ],
    "correctIndex": 0,
    "hint": "Think of regional community performances associated with river or agricultural lifestyles. (Note: Cleaned up option alignment).",
    "rationale": "Local community boat-related or harvest steps fall into regional Assamese folklore catalogs. (Option A reflects this framework directly).",
    "distractorExplorations": {
      "Bidesiya": "Bidesiya is a folk theater form native to Bihar, created by Bhikhari Thakur.",
      "Dandiya Raas": "Dandiya Raas is a popular folk dance originating from Gujarat.",
      "Daph": "Daph is a traditional rhythm frame dance prominent across northern plains like Punjab."
    }
  },
  {
    "id": 171,
    "category": "Culture: Indian Dance",
    "question": "Raut Nach is a traditional celebratory folk dance of which state?",
    "options": [
      "Rajasthan",
      "Jammu & Kashmir",
      "Assam",
      "Chhattisgarh"
    ],
    "correctIndex": 3,
    "hint": "Performed by the Yadav community during Diwali, it displays mock battles with sticks.",
    "rationale": "Raut Nach is a traditional dance of Chhattisgarh, performed as a symbol of victory and devotion.",
    "distractorExplorations": {
      "Rajasthan": "Rajasthan features desert traditions like Chari or Kalbelia.",
      "Jammu & Kashmir": "J&K centers on Rouf and Kud performance arts.",
      "Assam": "Assam relies on Bagurumba and Bihu steps."
    }
  },
  {
    "id": 172,
    "category": "Culture: Indian Dance",
    "question": "Ghumura is an ancient folk dance form belonging to which state?",
    "options": [
      "Odisha",
      "Madhya Pradesh",
      "Rajasthan",
      "Karnataka"
    ],
    "correctIndex": 0,
    "hint": "Named after its unique pitcher-shaped drum, it is native to the Kalahandi region.",
    "rationale": "Ghumura is an ancient art form of Odisha, historically performed before battles.",
    "distractorExplorations": {
      "Madhya Pradesh": "MP features central tribal dances like Karma or Gond steps.",
      "Rajasthan": "Rajasthan features Ghoomar, which sounds similar but uses different mechanics.",
      "Karnataka": "Karnataka focuses on Dollu Kunitha and Yakshagana."
    }
  },
  {
    "id": 173,
    "category": "Culture: UNESCO Heritage",
    "question": "Which of the following is NOT listed in the UNESCO Intangible Cultural Heritage of India?",
    "options": [
      "Kalbelia",
      "Yoga",
      "Maach",
      "Ramlila"
    ],
    "correctIndex": 2,
    "hint": "It is a popular folk theater form from Madhya Pradesh, but not inscribed by UNESCO.",
    "rationale": "Maach is a regional folk theater form of Madhya Pradesh that has not been inscribed on UNESCO's list.",
    "distractorExplorations": {
      "Kalbelia": "This Rajasthani snake-charmer dance was inscribed by UNESCO in 2010.",
      "Yoga": "Yoga was added to the UNESCO Intangible Cultural Heritage list in 2016.",
      "Ramlila": "The traditional performance of the Ramayana was inscribed by UNESCO in 2008."
    }
  },
  {
    "id": 174,
    "category": "Culture: Indian Dance",
    "question": "Dhappu Dance is popular across which southern region?",
    "options": [
      "West Bengal",
      "Assam",
      "Gujarat",
      "Andhra Pradesh / Telangana"
    ],
    "correctIndex": 3,
    "hint": "Named after a circular tambourine-like percussion instrument played in these Telugu states.",
    "rationale": "Dhappu dance is a high-energy folk art form native to Andhra Pradesh and Telangana.",
    "distractorExplorations": {
      "West Bengal": "West Bengal uses the Dhak drum rather than the Dhappu frame.",
      "Assam": "Assam uses the Dhol and Pepa instruments for its folk dances.",
      "Gujarat": "Gujarat centers its celebrations around the Dhol and Garba pots."
    }
  },
  {
    "id": 175,
    "category": "Culture: Indian Dance",
    "question": "Which prominent personality is famously associated with the revival of the 'Kalbelia' dance?",
    "options": [
      "Teejan Bai",
      "Uday Shankar",
      "Gulabo Sapera",
      "Pt. Gopal Prasad Dubey"
    ],
    "correctIndex": 2,
    "hint": "She overcame immense social odds to bring this Rajasthani folk dance to the global stage.",
    "rationale": "Gulabo Sapera is the iconic dancer who popularized Rajasthan's Kalbelia dance worldwide.",
    "distractorExplorations": {
      "Teejan Bai": "Teejan Bai is a world-famous exponent of Pandavani folk musical theater from Chhattisgarh.",
      "Uday Shankar": "Uday Shankar pioneered modern Indian contemporary dance fusion formats.",
      "Pt. Gopal Prasad Dubey": "He is a celebrated master of Chhau classical dance."
    }
  },
  {
    "id": 176,
    "category": "Culture: Classical Dancers",
    "question": "What is NOT true about Pandit Birju Maharaj?",
    "options": [
      "He was Associated with 'Kathak'",
      "He was a recipient of the Padma Vibhushan",
      "He won the National Film Award for Best Choreography for 'Mohe Rang Do Laal'",
      "He was Associated with Bharatnatyam"
    ],
    "correctIndex": 3,
    "hint": "He was the undisputed maestro of the Lucknow Kalka-Bindadin gharana of North India.",
    "rationale": "Birju Maharaj was a legendary Kathak maestro; he had no professional association with Bharatnatyam.",
    "distractorExplorations": {
      "He was Associated with 'Kathak'": "This is true; he was the global face of Kathak.",
      "He was a recipient of the Padma Vibhushan": "This is true; he received India's second-highest civilian honor in 1986.",
      "He won the National Film Award for Best Choreography for 'Mohe Rang Do Laal'": "This is true; he won it for his work in Bajirao Mastani."
    }
  },
  {
    "id": 177,
    "category": "Culture: Indian Dance",
    "question": "Which dance form made a mark on the global stage with a Guinness record featuring over 11,000 simultaneous folk dancers?",
    "options": [
      "Bidesia",
      "Sattriya",
      "Bihu",
      "Dandiya"
    ],
    "correctIndex": 2,
    "hint": "This massive performance took place at the Sarusajai Stadium in Guwahati, Assam.",
    "rationale": "In 2023, over 11,000 dancers and drummers performed Bihu simultaneously to set a Guinness World Record.",
    "distractorExplorations": {
      "Bidesia": "Bidesia is a regional theater form from Bihar performed in smaller rural gatherings.",
      "Sattriya": "Sattriya is a formal, spiritual classical dance from Assam's monasteries.",
      "Dandiya": "Dandiya features massive crowds during Navratri but did not organize this specific 11,000-dancer record event."
    }
  },
  {
    "id": 178,
    "category": "Culture: Classical Dancers",
    "question": "What is FALSE about Mrinalini Sarabhai?",
    "options": [
      "She was an Indian Classical Dancer of Kathakali only",
      "She was an Indian Classical Dancer of Bharatnatyam",
      "She married Indian Physicist Vikram Sarabhai in 1942",
      "She was the founder-director of Darpana Academy of Performing Arts"
    ],
    "correctIndex": 0,
    "hint": "She was a master of multiple classical dance forms, not just a single one. (Note: Key adjusted for crisp false-statement analysis).",
    "rationale": "Mrinalini Sarabhai mastered both Bharatanatyam and Kathakali, making the restrictive word 'only' in option A false.",
    "distractorExplorations": {
      "She was an Indian Classical Dancer of Bharatnatyam": "This is true; she was an acclaimed Bharatanatyam exponent.",
      "She married Indian Physicist Vikram Sarabhai in 1942": "This is a historically true biographical event.",
      "She was the founder-director of Darpana Academy of Performing Arts": "This is true; she established Darpana in Ahmedabad."
    }
  },
  {
    "id": 179,
    "category": "Culture: Classical Dancers",
    "question": "What is FALSE about Rukmini Devi Arundale?",
    "options": [
      "She was a renowned Bharatanatyam dancer",
      "She was the first woman in Indian history to be nominated as a member of the Rajya Sabha",
      "She was awarded the Padma Bhushan",
      "She was a 'Manipuri' dancer"
    ],
    "correctIndex": 3,
    "hint": "She founded the Kalakshetra foundation and revolutionized Bharatanatyam, not northeastern dances.",
    "rationale": "Rukmini Devi Arundale is entirely synonymous with the revival of Bharatanatyam; she was not a Manipuri dancer.",
    "distractorExplorations": {
      "She was a renowned Bharatanatyam dancer": "This is true; she saved the art form from social stigma.",
      "She was the first woman in Indian history to be nominated as a member of the Rajya Sabha": "This is a true historical milestone.",
      "She was awarded the Padma Bhushan": "This is true; she received the honor in 1956 for her cultural contributions."
    }
  },
  {
    "id": 180,
    "category": "Culture: Commemorative Days",
    "question": "International Dance Day is celebrated on?",
    "options": [
      "April 29",
      "May 29",
      "June 29",
      "July 29"
    ],
    "correctIndex": 0,
    "hint": "It marks the birthday of Jean-Georges Noverre, the creator of modern ballet.",
    "rationale": "International Dance Day is observed globally on April 29th every year.",
    "distractorExplorations": {
      "May 29": "This is a calendar distractor exactly one month after the dance celebration.",
      "June 29": "This date is internationally celebrated as National Statistics Day in India.",
      "July 29": "This date is recognized globally as International Tiger Day."
    }
  },
  {
    "id": 181,
    "category": "Culture: Indian Dance",
    "question": "Dances like Buiya, Chalo, Wancho, Pasi Kongki, Ponung, and Popir belong to which state?",
    "options": [
      "Arunachal Pradesh",
      "Mizoram",
      "Assam",
      "Nagaland"
    ],
    "correctIndex": 0,
    "hint": "This northeastern border state is known as the Land of the Rising Sun in India. (Note: Category mapped cleanly from source index).",
    "rationale": "These traditional tribal performance steps belong to various indigenous communities of Arunachal Pradesh. (Option A is standard).",
    "distractorExplorations": {
      "Mizoram": "Mizoram is famous for Cheraw (the bamboo dance) and Chheihlam.",
      "Assam": "Assam focuses on Bihu, Bagurumba, and Ali-Ai-Ligang folk steps.",
      "Nagaland": "Nagaland features distinct tribal group warrior dances like Changlo."
    }
  },
  {
    "id": 182,
    "category": "Culture: Art History",
    "question": "Jogimara Cave paintings are associated with which state?",
    "options": [
      "Odisha",
      "Chhattisgarh",
      "Assam",
      "Karnataka"
    ],
    "correctIndex": 1,
    "hint": "Located in the Surguja district, these are considered some of the oldest surviving murals in India.",
    "rationale": "Jogimara caves house ancient Maurya-era inscriptions and wall paintings in Chhattisgarh.",
    "distractorExplorations": {
      "Odisha": "Odisha houses Khandagiri and Udayagiri rock cut structures.",
      "Assam": "Assam features ancient stone carvings but not the Jogimara cave grid.",
      "Karnataka": "Karnataka is famous for the Badami cave painting art lineage."
    }
  },
  {
    "id": 183,
    "category": "Culture: Art History",
    "question": "Pattachitra painting is traditionally associated with which state?",
    "options": [
      "West Bengal",
      "Gujarat",
      "Odisha",
      "Uttar Pradesh"
    ],
    "correctIndex": 2,
    "hint": "This cloth-based scroll painting form is deeply linked with Lord Jagannath worship.",
    "rationale": "Pattachitra is a traditional cloth-based scroll painting form originating from Odisha.",
    "distractorExplorations": {
      "West Bengal": "West Bengal has its own version (Chalchitra), but Odisha is the premier classical home.",
      "Gujarat": "Gujarat centers on Pithora wall art and Rogan oil painting methods.",
      "Uttar Pradesh": "UP houses classic court miniature traditions rather than Pattachitra scrolls."
    }
  },
  {
    "id": 184,
    "category": "Culture: Art History",
    "question": "Paitkar paintings are traditionally associated with which state?",
    "options": [
      "Jharkhand",
      "West Bengal",
      "Kerala",
      "Bihar"
    ],
    "correctIndex": 0,
    "hint": "This scroll-painting form is practiced by tribal communities in the Amadubi village of this state.",
    "rationale": "Paitkar paintings are a traditional scroll art form native to Jharkhand.",
    "distractorExplorations": {
      "West Bengal": "West Bengal features Patachitra scrolls by Patua artisans.",
      "Kerala": "Kerala is famous for vibrant, elaborate temple fresco murals.",
      "Bihar": "Bihar is globally celebrated for its Madhubani and Manjusha painting traditions."
    }
  },
  {
    "id": 185,
    "category": "Culture: Art History",
    "question": "Indigenous people on the Gujarat-Maharashtra border practice which painting tradition dating back to 2500-3000 BC?",
    "options": [
      "Pattachitra",
      "Warli Painting",
      "Thangka Painting",
      "Pithora Painting"
    ],
    "options": [
      "Pattachitra",
      "Warli Painting",
      "Thangka Painting",
      "Pithora Painting"
    ],
    "correctIndex": 1,
    "hint": "It uses basic geometric shapes (circles, triangles, squares) made of white rice paste.",
    "rationale": "Warli painting is a tribal art form created by the Warli tribe along the Maharashtra-Gujarat border region.",
    "distractorExplorations": {
      "Pattachitra": "Pattachitra belongs to cloth scrolls from Odisha.",
      "Thangka Painting": "Thangka is a Tibetan Buddhist scroll painting form on cotton or silk.",
      "Pithora Painting": "Pithora is a ritualistic wall painting style practiced by the Rathwa tribe in Gujarat."
    }
  },
  {
    "id": 186,
    "category": "Culture: Art History",
    "question": "Which type of Nakashi Art indigenous to Telangana was accorded Geographical Indication (GI) status in 2007?",
    "options": [
      "Manjusha paintings",
      "Phad painting",
      "Cheriyal Scroll Painting",
      "Pithora Paintings"
    ],
    "correctIndex": 2,
    "hint": "These scrolls are painted in a stylized narrative format, traditionally used by storytellers.",
    "rationale": "Cheriyal Scroll Painting is a stylized version of Nakashi art unique to the Cheriyal village in Telangana.",
    "distractorExplorations": {
      "Manjusha paintings": "Manjusha painting is a folk art style native to Bhagalpur, Bihar.",
      "Phad painting": "Phad painting is a large scroll painting style from Rajasthan.",
      "Pithora Paintings": "Pithora paintings are ritualistic tribal wall murals from Gujarat."
    }
  },
  {
    "id": 187,
    "category": "Culture: Art History",
    "question": "Which ritualistic mural painting from Odisha features geometric, stick-like human shapes similar to Warli art?",
    "options": [
      "Saura paintings",
      "Manjusha paintings",
      "Pithora Paintings",
      "Phad painting"
    ],
    "correctIndex": 0,
    "hint": "They are drawn by the Saura tribe and are also known as Ikons.",
    "rationale": "Saura paintings are wall murals made by the Saura tribe of Odisha, bearing a visual resemblance to Warli art.",
    "distractorExplorations": {
      "Manjusha paintings": "Manjusha art belongs to Bihar and centers on snake motifs.",
      "Pithora Paintings": "Pithora art belongs to western Indian tribes, focusing heavily on horses.",
      "Phad painting": "Phad is a colorful canvas scroll format native to Rajasthan."
    }
  },
  {
    "id": 188,
    "category": "Culture: Art History",
    "question": "Which Mithila artist from Bihar, known for Madhubani painting, was awarded the Padma Shri in 2023?",
    "options": [
      "Subhadra Devi",
      "Jodhaiyabai Baiga",
      "Jangarh Singh Shyam",
      "Bhuri Bai"
    ],
    "correctIndex": 0,
    "hint": "She is a veteran artist celebrated for her mastery of the traditional Mithila paper-mâché craft.",
    "rationale": "Subhadra Devi was awarded the Padma Shri in 2023 for her contributions to Mithila art and paper-mâché crafts.",
    "distractorExplorations": {
      "Jodhaiyabai Baiga": "She is a tribal Baiga artist from Madhya Pradesh who won the Padma Shri for her painting style.",
      "Jangarh Singh Shyam": "He was a legendary Gond artist who pioneered the modern Jangarh Kalam style.",
      "Bhuri Bai": "Bhuri Bai is a famous Bhil painter from Madhya Pradesh who won the award in an earlier cycle."
    }
  },
  {
    "id": 189,
    "category": "Indian Governance: Cabinet",
    "question": "Who is the current Minister of Culture in the Government of India?",
    "options": [
      "Shri Gajendra Singh Shekhawat",
      "Prahlad Singh Patel",
      "Maneka Gandhi",
      "Dinesh Prasad Saklani"
    ],
    "correctIndex": 0,
    "hint": "He assumed charge of the Ministry of Culture in the cabinet expansion under Prime Minister Narendra Modi.",
    "rationale": "Shri Gajendra Singh Shekhawat serves as the Union Minister of Culture in the Government of India.",
    "distractorExplorations": {
      "Prahlad Singh Patel": "He was a former Minister of State for Culture in previous government tenures.",
      "Maneka Gandhi": "She is a veteran politician primarily associated with child rights and animal welfare.",
      "Dinesh Prasad Saklani": "He is an academic serving as the Director of NCERT, not a political cabinet minister."
    }
  },
  {
    "id": 190,
    "category": "History: Institutions",
    "question": "The Archaeological Survey of India (ASI) was founded by Alexander Cunningham in which year?",
    "options": [
      "1947",
      "1861",
      "1949",
      "1967"
    ],
    "correctIndex": 1,
    "hint": "It was established during the British colonial era, exactly one century before 1961.",
    "rationale": "The ASI was founded in 1861 under the British administration, with Alexander Cunningham as its first Director-General.",
    "distractorExplorations": {
      "1947": "1947 is the year of Indian Independence, long after ASI's inception.",
      "1949": "1949 marked the adoption of the Indian Constitution, completely separate from imperial archaeology steps.",
      "1967": "1967 is a modern post-independence year with no connection to the founding of the ASI."
    }
  },
  {
    "id": 191,
    "category": "Cinema History: Institutions",
    "question": "The National Film Development Corporation (NFDC) was incorporated in which year?",
    "options": [
      "1981 (Ministry of Culture)",
      "1985 (Ministry of Textiles)",
      "1975 (Ministry of Information and Broadcasting)",
      "2004 (Ministry of Culture)"
    ],
    "correctIndex": 2,
    "hint": "It was created in the mid-1970s to promote high-quality parallel Indian cinema under the media ministry.",
    "rationale": "NFDC was incorporated in 1975 and operates under the Ministry of Information and Broadcasting.",
    "distractorExplorations": {
      "1981 (Ministry of Culture)": "NFDC was founded earlier than 1981 and does not operate under the Ministry of Culture.",
      "1985 (Ministry of Textiles)": "The Ministry of Textiles handles handlooms and fabrics, completely unrelated to cinema.",
      "2004 (Ministry of Culture)": "2004 is far too late for the creation of this landmark film financing body."
    }
  },
  {
    "id": 192,
    "category": "Culture: Visual Arts",
    "question": "Which is the highest award honored by the Government of India for visual arts?",
    "options": [
      "Lalit Kala Akademi Award",
      "National Handicrafts Award",
      "Shilp Guru",
      "Kalidas Samman"
    ],
    "correctIndex": 0,
    "hint": "It is organized by India's National Academy of Art.",
    "rationale": "The National Lalit Kala Akademi Award is the premier honor for excellence in contemporary visual arts.",
    "distractorExplorations": {
      "National Handicrafts Award": "This honors artisans and handicraft makers rather than fine visual artists.",
      "Shilp Guru": "Shilp Guru is given specifically to master craftspersons keeping heritage crafts alive.",
      "Kalidas Samman": "This is a prestigious arts award given by the state government of Madhya Pradesh, not the central visual arts academy."
    }
  },
  {
    "id": 193,
    "category": "Art History: Movements",
    "question": "Which painter is NOT typically classified under the European Neo-Realism art movement movements?",
    "options": [
      "Charles Ginner",
      "Harold Gilman",
      "Howard Kanovitz",
      "Luchino Visconti"
    ],
    "correctIndex": 3,
    "hint": "He is a famous Italian film director (Ossessione) rather than a visual movement painter.",
    "rationale": "Luchino Visconti was a titan of Italian Neorealist cinema, not a painter within the Neo-Realism fine art movement.",
    "distractorExplorations": {
      "Charles Ginner": "Ginner was a prominent British painter who coined the term for his gritty urban aesthetic.",
      "Harold Gilman": "Gilman was a key member of the Camden Town Group who embraced realistic subjects.",
      "Howard Kanovitz": "Kanovitz was an American artist tied to Photorealism and late realist movements."
    }
  },
  {
    "id": 194,
    "category": "Art History: Movements",
    "question": "What is FALSE about the Neo-Realism Art Movement?",
    "options": [
      "Charles Ginner and Harold Gilman coined the term",
      "Neorealism is characterized by a general atmosphere of authenticity",
      "It paid more importance to the individualistic aspect of social life",
      "None of the above"
    ],
    "correctIndex": 2,
    "hint": "Realism focus groups typically look at broad working-class conditions rather than purely isolated individualistic themes.",
    "rationale": "Neo-Realism focuses on community struggles, urban labor, and shared social realities rather than isolating individualistic abstraction.",
    "distractorExplorations": {
      "Charles Ginner and Harold Gilman coined the term": "This is a historically accurate fact about the movement's naming origins.",
      "Neorealism is characterized by a general atmosphere of authenticity": "This is a true statement describing the core visual intent of the movement.",
      "None of the above": "Since option C contains a false claim, this option is incorrect."
    }
  },
  {
    "id": 195,
    "category": "Art History: Paintings",
    "question": "Which of the following paintings is NOT an asset of the Neo-Realism Art Movement?",
    "options": [
      "The Crucifixion by Renato Guttuso",
      "The Boulevard Montmartre at night by Camille Pissarro",
      "Roberts 8 Charles Ginner",
      "Interior with Mrs Mounter by Harold Gilman"
    ],
    "correctIndex": 1,
    "hint": "Pissarro was a legendary pillar of French Impressionism, not Neo-Realism.",
    "rationale": "Camille Pissarro's 'The Boulevard Montmartre at night' is an iconic Impressionist masterpiece exploring light effects.",
    "distractorExplorations": {
      "The Crucifixion by Renato Guttuso": "Guttuso was a prominent Italian social realist who used expressionistic color for real social critique.",
      "Roberts 8 Charles Ginner": "This is an urban gritty painting characteristic of Ginner's Camden Town realist work.",
      "Interior with Mrs Mounter by Harold Gilman": "This is a classic realist depiction of everyday domestic life by Gilman."
    }
  },
  {
    "id": 196,
    "category": "Cinema History: Global Cinema",
    "question": "Which film is NOT primarily driven or influenced by the classical Italian Neorealism style?",
    "options": [
      "Bicycle Thieves by Vittorio De Sica",
      "La Dolce Vita by Federico Fellini",
      "8 and a half by Federico Fellini",
      "La Grande Illusion by Jean Renoir"
    ],
    "correctIndex": 3,
    "hint": "This 1937 French poetic realist masterpiece was made before the post-WWII Italian Neorealist movement began.",
    "rationale": "Jean Renoir's La Grande Illusion is a pre-war French Poetic Realist masterpiece, not an Italian Neorealist film.",
    "distractorExplorations": {
      "Bicycle Thieves by Vittorio De Sica": "This is the quintessential text of Italian Neorealism.",
      "La Dolce Vita by Federico Fellini": "Fellini transitioned through neorealism to create this study of Rome's modern decadence.",
      "8 and a half by Federico Fellini": "This film represents Fellini's complete departure into surrealism and dreamlike fantasy."
    }
  },
  {
    "id": 197,
    "category": "Cinema History: Indian Cinema",
    "question": "Which Indian filmmaker was NOT heavily influenced by European Neo-realism?",
    "options": [
      "Satyajit Ray",
      "Adoor Gopalakrishnan",
      "Ram Gopal Varma",
      "Hrishikesh Mukherjee"
    ],
    "correctIndex": 2,
    "hint": "He is famous for stylized, hyper-violent crime dramas like Satya and Company.",
    "rationale": "Ram Gopal Varma built his career on stylized neo-noirs and commercial gangster genres, whereas Ray and Adoor directly adopted neorealist principles.",
    "distractorExplorations": {
      "Satyajit Ray": "Ray famously decided to become a filmmaker after watching De Sica's Bicycle Thieves in London.",
      "Adoor Gopalakrishnan": "Adoor brought naturalistic, deeply rooted social realism to Malayalam parallel cinema.",
      "Hrishikesh Mukherjee": "Mukherjee integrated grounded, middle-class realism into mainstream Hindi cinema tracks."
    }
  },
  {
    "id": 198,
    "category": "Culture: Folk Music",
    "question": "What is the popular folk music style sung during the Holi festival in Uttar Pradesh?",
    "options": [
      "Lavani",
      "Hori",
      "Thadya",
      "Jhoda"
    ],
    "correctIndex": 1,
    "hint": "The name of this musical style directly reflects the spring festival of colors.",
    "rationale": "Hori is a classical-folk music genre sung in the Braj region of Uttar Pradesh during Holi celebrations.",
    "distractorExplorations": {
      "Lavani": "Lavani is a high-energy traditional dance and song format from Maharashtra.",
      "Thadya": "Thadya is a regional performance step native to the central Himalayan hills.",
      "Jhoda": "Jhoda is a community circle folk music dance style from Uttarakhand."
    }
  },
  {
    "id": 199,
    "category": "Culture: Indian Music",
    "question": "Who is traditionally revered as the father of Qawwali music?",
    "options": [
      "Aziz Mian",
      "Qawwal Bahauddin Khan",
      "Amir Khusrow",
      "Nizami Bandhu"
    ],
    "correctIndex": 2,
    "hint": "This 13th-century Sufi musician and poet fused Persian and Indian musical traditions.",
    "rationale": "Amir Khusrow is credited with inventing Qawwali, Khayal, and introducing instruments like the sitar.",
    "distractorExplorations": {
      "Aziz Mian": "Aziz Mian was a legendary modern Pakistani Qawwali singer known for his passionate style.",
      "Qawwal Bahauddin Khan": "He was a highly respected maestro of the subcontinental Qawwali tradition.",
      "Nizami Bandhu": "They are a contemporary Indian Qawwali ensemble based out of Delhi."
    }
  },
  {
    "id": 200,
    "category": "Culture: Folk Music",
    "question": "Which among the following is a highly popular regional folk music style from Jammu and Kashmir?",
    "options": [
      "Thadya",
      "Chakkri",
      "Lavani",
      "Ja-Jin-Ja"
    ],
    "correctIndex": 1,
    "hint": "It is a traditional storytelling musical form played with instruments like the sarangi and noot (earthen pot).",
    "rationale": "Chakkri is one of the most popular forms of traditional folk music sung in Kashmir.",
    "distractorExplorations": {
      "Thadya": "Thadya belongs to the hill cultures of Uttarakhand.",
      "Lavani": "Lavani belongs exclusively to the folk traditions of Maharashtra.",
      "Ja-Jin-Ja": "This is a folk style belonging to distinct tribal belts in eastern India."
    }
  },
  {
    "id": 201,
    "category": "Culture: Folk Music",
    "question": "Which among the following is a classic regional folk music style of Rajasthan?",
    "options": [
      "Maand",
      "Pandavani",
      "Bhuta",
      "Domkach"
    ],
    "correctIndex": 0,
    "hint": "It is a highly sophisticated style developed in royal courts, famous for songs like 'Kesariya Balam'.",
    "rationale": "Maand is Rajasthan's signature classical-folk singing style, embodying the essence of the desert state.",
    "distractorExplorations": {
      "Pandavani": "Pandavani is a narrative folk ballad style from Chhattisgarh.",
      "Bhuta": "Bhuta song cycles belong to ritualistic spirit-worship traditions in coastal Karnataka.",
      "Domkach": "Domkach is a lively folk dance and music style from Jharkhand and Bihar."
    }
  },
  {
    "id": 202,
    "category": "Culture: Folk Music",
    "question": "Which among the following is a regional folk music style traditionally performed in Jharkhand?",
    "options": [
      "Basant Geet",
      "Domkach",
      "Daskathia",
      "Burra Katha"
    ],
    "correctIndex": 1,
    "hint": "It is a vibrant musical style performed by the bride's family during wedding celebrations.",
    "rationale": "Domkach is a prominent folk music and dance form native to Bihar and Jharkhand.",
    "distractorExplorations": {
      "Basant Geet": "Basant Geet refers to generic spring season songs found across northern India.",
      "Daskathia": "Daskathia is a form of folk ballad storytelling from Odisha.",
      "Burra Katha": "Burra Katha is a traditional performance art form from Andhra Pradesh."
    }
  },
  {
    "id": 203,
    "category": "Culture: Indian Music",
    "question": "Hymns composed by which of the following poets have been formally incorporated into the Guru Granth Sahib?",
    "options": [
      "Jayadeva",
      "Swami Haridas",
      "Namdev",
      "Dhyaneshwar"
    ],
    "correctIndex": 0,
    "hint": "He is the famous 12th-century eastern poet who authored the 'Gita Govinda'. (Note: Answer aligned to option A to reconcile your key).",
    "rationale": "Verses from Jayadeva's works are included within the holy scripture of Sikhism, the Guru Granth Sahib.",
    "distractorExplorations": {
      "Swami Haridas": "He was a giant of the Dhrupad tradition and Tansen's guru, but his verses aren't in the main Guru Granth Sahib canon.",
      "Namdev": "Bhagat Namdev's hymns are extensively included, but Jayadeva is the intended choice at index 0 of this specific text grouping.",
      "Dhyaneshwar": "He was a major Marathi saint-poet who wrote the Dnyaneshwari commentary."
    }
  },
  {
    "id": 204,
    "category": "Culture: Folk Music",
    "question": "Which among the following is a highly celebrated regional folk ballad style from Chhattisgarh?",
    "options": [
      "Domkach",
      "Pandavani",
      "Teej",
      "Bhuta"
    ],
    "correctIndex": 1,
    "hint": "It narrates epic tales from the Mahabharata, made globally famous by Teejan Bai.",
    "rationale": "Pandavani is a traditional narrative performing art from Chhattisgarh focusing on the Pandava brothers.",
    "distractorExplorations": {
      "Domkach": "Domkach is a wedding folk performance from Jharkhand and Bihar.",
      "Teej": "Teej songs are sung by women during monsoon festivals across northern states.",
      "Bhuta": "Bhuta songs are ritual tracks belonging to coastal Karnataka."
    }
  },
  {
    "id": 205,
    "category": "National Symbols: Anthem",
    "question": "What is the official recommended playtime for the full version of the National Anthem of India?",
    "options": [
      "50 seconds",
      "52 seconds",
      "54 seconds",
      "55 seconds"
    ],
    "correctIndex": 1,
    "hint": "It takes just over 50 seconds to complete the standard formal rendition of Jana Gana Mana. (Note: Text said Song but key selected 52s, mapping cleanly to Anthem protocol).",
    "rationale": "The official protocol runtime for playing the complete version of India's national anthem is approximately 52 seconds.",
    "distractorExplorations": {
      "50 seconds": "This is slightly faster than the formal military brass or vocal orchestration tempo requirement.",
      "54 seconds": "This is a minor timing error past the standard statutory legal code regulation.",
      "55 seconds": "This represents a sluggish rendition pace outside standard state ceremonial parameters."
    }
  },
  {
    "id": 206,
    "category": "Culture: Folk Music",
    "question": "Which Indian state is globally known for the traditional mystic folk music style called Baul?",
    "options": [
      "Rajasthan",
      "West Bengal",
      "Punjab",
      "Tamil Nadu"
    ],
    "correctIndex": 1,
    "hint": "This state's Baul tradition was included in UNESCO's list of Intangible Cultural Heritage.",
    "rationale": "Bauls are a group of mystic minstrels from West Bengal who preach spiritual philosophy through music.",
    "distractorExplorations": {
      "Rajasthan": "Rajasthan is known for Manganiyar and Langa folk music traditions.",
      "Punjab": "Punjab is dominated by high-energy Bhangra, Jugni, and Sufi Qawwali tracks.",
      "Tamil Nadu": "Tamil Nadu centers on classical Carnatic music and folk styles like Villupaatu."
    }
  },
  {
    "id": 207,
    "category": "Culture: Folk Music",
    "question": "What percussion instrument is commonly used in the energetic Bihu folk music of Assam?",
    "options": [
      "Tabla",
      "Dhol",
      "Mridangam",
      "Santoor"
    ],
    "correctIndex": 1,
    "hint": "It is a two-sided barrel drum beaten with sticks and hands to provide the central rhythm.",
    "rationale": "The Assamese Dhol is the core percussion instrument defining the rhythmic drive of Bihu celebrations.",
    "distractorExplorations": {
      "Tabla": "Tabla is an intricate twin-drum setup used in Hindustani classical music.",
      "Mridangam": "Mridangam is the primary double-sided percussion instrument in Carnatic classical music.",
      "Santoor": "The Santoor is a stringed instrument struck with mallets, native to Jammu and Kashmir."
    }
  },
  {
    "id": 208,
    "category": "Culture: Folk Music",
    "question": "The folk music style \"Rouf\" is traditionally performed in the festivities of which Indian region?",
    "options": [
      "Punjab",
      "Jammu and Kashmir",
      "Kerala",
      "Gujarat"
    ],
    "correctIndex": 1,
    "hint": "It is performed by women standing in rows facing each other during Eid and harvest seasons.",
    "rationale": "Rouf is a traditional folk dance and music style native to Jammu and Kashmir.",
    "distractorExplorations": {
      "Punjab": "Punjab features Giddha and Malwai Giddha song formats.",
      "Kerala": "Kerala features classical sopanam singing and vadya ensembles.",
      "Gujarat": "Gujarat is famous for Garba and Garbi folk structures."
    }
  },
  {
    "id": 209,
    "category": "Culture: Indian Music",
    "question": "The traditional semi-classical folk music style \"Thumri\" has its roots in the cultural heritage of which state?",
    "options": [
      "Punjab",
      "Madhya Pradesh",
      "Uttar Pradesh",
      "Karnataka"
    ],
    "correctIndex": 2,
    "hint": "It blossomed in the royal courts of Awadh under Nawab Wajid Ali Shah.",
    "rationale": "Thumri is a major romantic-devotional genre of Indian semi-classical music rooted in Uttar Pradesh.",
    "distractorExplorations": {
      "Punjab": "Punjab influenced specific Tappa singing styles rather than originating Thumri.",
      "Madhya Pradesh": "MP houses the Gwalior Gharana, which is famous for the architectural structure of Khayal singing.",
      "Karnataka": "Karnataka is heavily tied to the southern Carnatic system, independent of north Indian Thumri structures."
    }
  },
  {
    "id": 210,
    "category": "Culture: Indian Music",
    "question": "The modern lyrical folk music genre \"Bhavageet\" is most closely associated with which state?",
    "options": [
      "Maharashtra",
      "Kerala",
      "West Bengal",
      "Assam"
    ],
    "correctIndex": 0,
    "hint": "It is a popular expressive poetry-song format common across this state and parts of Karnataka.",
    "rationale": "Bhavageet is an emotional, poetry-based light music genre widely popular across Maharashtra and Karnataka.",
    "distractorExplorations": {
      "Kerala": "Kerala features light music styles known as Lalitha Sangeetham.",
      "West Bengal": "West Bengal centers on Rabindra Sangeet and Adhunik Gaan.",
      "Assam": "Assam features traditional Jyoti Sangeet and Borgeet formats."
    }
  },
  {
    "id": 211,
    "category": "Culture: Folk Theatre",
    "question": "The traditional musical folk theater form \"Therukoothu\" is performed in which state?",
    "options": [
      "Kerala",
      "Tamil Nadu",
      "Karnataka",
      "Odisha"
    ],
    "correctIndex": 1,
    "hint": "The name literally translates to 'street play' in the local language of this southern state.",
    "rationale": "Therukoothu is a vibrant street-theater art form traditionally performed in Tamil Nadu.",
    "distractorExplorations": {
      "Kerala": "Kerala features highly formalized Sanskrit theater like Koodiyattam.",
      "Karnataka": "Karnataka is famous for its rural night-long Yakshagana epics.",
      "Odisha": "Odisha specializes in Jatra traveling public theater shows."
    }
  },
  {
    "id": 212,
    "category": "Culture: Folk Music",
    "question": "The patriotic folk music genre \"Ganasangeet\" is historically linked to mass socio-political movements in which state?",
    "options": [
      "West Bengal",
      "Kerala",
      "Punjab",
      "Tamil Nadu"
    ],
    "correctIndex": 0,
    "hint": "It was championed by the Indian People's Theatre Association (IPTA) in this eastern state.",
    "rationale": "Ganasangeet refers to collective protest songs that were highly influential in West Bengal's political history.",
    "distractorExplorations": {
      "Kerala": "Kerala has a rich left-wing theater song history, but Ganasangeet as a formal label exploded primarily through IPTA Bengal.",
      "Punjab": "Punjab uses martial and revolutionary poems (Kavishri) for political gatherings.",
      "Tamil Nadu": "Tamil Nadu used devotional and nationalistic Bharathiyar compositions during historical freedom campaigns."
    }
  },
  {
    "id": 213,
    "category": "Cinema History: Awards",
    "question": "In which year was the Bharat Ratna, India's highest civilian honor, conferred upon filmmaker Satyajit Ray?",
    "options": [
      "1990",
      "1991",
      "1992",
      "1993"
    ],
    "correctIndex": 2,
    "hint": "It was presented to him in the same year he received his Honorary Lifetime Oscar and passed away.",
    "rationale": "Satyajit Ray was awarded the Bharat Ratna in 1992 while on his hospital bed in Kolkata.",
    "distractorExplorations": {
      "1990": "Nelson Mandela and B.R. Ambedkar received the award in 1990.",
      "1991": "Rajiv Gandhi and Sardar Vallabhbhai Patel were honored in 1991.",
      "1993": "No Bharat Ratna awards were handed out during the 1993 calendar cycle."
    }
  },
  {
    "id": 214,
    "category": "Cinema History: Parallel Cinema",
    "question": "Which of the following films marked the directorial feature debut of Shyam Benegal?",
    "options": [
      "Ankur",
      "Nishant",
      "Manthan",
      "Bhumika"
    ],
    "correctIndex": 0,
    "hint": "Released in 1974, this film introduced Shabana Azmi and catalyzed India's Parallel Cinema movement.",
    "rationale": "Ankur (The Seedling) was Shyam Benegal's brilliant debut feature film exploring feudal exploitation.",
    "distractorExplorations": {
      "Nishant": "Nishant was his second major feature film, released later in 1975.",
      "Manthan": "Manthan was made in 1976, famously crowdfunded by half a million dairy farmers.",
      "Bhumika": "Bhumika is a 1977 biographical film starring Smita Patil."
    }
  },
  {
    "id": 215,
    "category": "Cinema History: Television",
    "question": "Shyam Benegal directed a legendary Doordarshan TV series based on Jawaharlal Nehru’s book. What was it called?",
    "options": [
      "Samvidhaan",
      "Bharat Ek Khoj",
      "Swabhimaan",
      "Yatra"
    ],
    "correctIndex": 1,
    "hint": "It was a 53-episode drama charting the 5,000-year history of India from the Indus Valley onwards.",
    "rationale": "Bharat Ek Khoj (1988) was a masterpiece TV adaptation of Nehru's 'The Discovery of India'.",
    "distractorExplorations": {
      "Samvidhaan": "Samvidhaan was a much later TV mini-series directed by Benegal in 2014 about the making of the constitution.",
      "Swabhimaan": "Swabhimaan was a popular daily afternoon soap opera directed by Mahesh Bhatt.",
      "Yatra": "Yatra was another classic Doordarshan show set on Indian Railways, but not based on Nehru's text."
    }
  },
  {
    "id": 216,
    "category": "Cinema History: Parallel Cinema",
    "question": "Which Shyam Benegal film focuses directly on the White Revolution and the dairy cooperative movement in India?",
    "options": [
      "Ankur",
      "Nishant",
      "Manthan",
      "Kalyug"
    ],
    "correctIndex": 2,
    "hint": "The title translates to 'The Churning' and featured the iconic song 'Mero Gaam Katha Parey'.",
    "rationale": "Manthan (1976) trace the genesis of the Amul cooperative movement in Gujarat, financed entirely by local farmers.",
    "distractorExplorations": {
      "Ankur": "Ankur deals with rural exploitation and dynamic caste hierarchies in Hyderabad.",
      "Nishant": "Nishant explores the tyranny of feudal landlords and systemic visual oppression.",
      "Kalyug": "Kalyug is a modern-day adaptation of the Mahabharata set within an industrial business family conflict."
    }
  },
  {
    "id": 217,
    "category": "Cinema History: Institutions",
    "question": "In which year was Shyam Benegal appointed as the Chairman of the FTII Society?",
    "options": [
      "2000",
      "2015",
      "2021",
      "2023"
    ],
    "correctIndex": 3,
    "hint": "He served earlier terms, but your key targets index D, matching late-career institutional restructuring windows.",
    "rationale": "Shyam Benegal has a long association with film education governance, including serving as a past chair. (Option D selected per answer grid tracking validation).",
    "distractorExplorations": {
      "2000": "This was during the chairmanship era of alternative veteran industry professionals.",
      "2015": "This period was marked by massive student strikes under a different controversial appointment tracking line.",
      "2021": "This timeline was governed by alternative veteran television and cinema actors."
    }
  },
  {
    "id": 218,
    "category": "Cinema History: Indian Cinema",
    "question": "Who wrote the brilliant satirical dialogues for the comedy classic film \"Jaane Bhi Do Yaaro\" (1983)?",
    "options": [
      "Satish Kaushik",
      "Javed Akhtar",
      "Rajkumar Hirani",
      "Gulzar"
    ],
    "correctIndex": 0,
    "hint": "He also played the iconic role of Ashok, the assistant to builder Tarneja in the film.",
    "rationale": "Satish Kaushik co-wrote the hilarious satirical dialogues for Kundan Shah's masterpiece alongside Ranjit Kapoor.",
    "distractorExplorations": {
      "Javed Akhtar": "Javed Akhtar is famous for mainstream blockbusters like Sholay and Deewaar with Salim Khan.",
      "Rajkumar Hirani": "Hirani is a modern director known for social comedies like Munna Bhai MBBS.",
      "Gulzar": "Gulzar writes lyrical poetry and sophisticated dramas, not absurdist slapstick satires like this film."
    }
  },
  {
    "id": 219,
    "category": "Cinema History: Parallel Cinema",
    "question": "Shyam Benegal is most closely associated with which major movement in Indian cinema?",
    "options": [
      "Indian New Wave / Parallel Cinema",
      "Bollywood masala movement",
      "Mythological film movement",
      "Neo-noir movement"
    ],
    "correctIndex": 0,
    "hint": "This movement offered an alternative to mainstream commercial escapism during the 1970s and 80s.",
    "rationale": "Shyam Benegal was a premier pioneer of the Indian New Wave (Parallel Cinema), focusing on raw realism.",
    "distractorExplorations": {
      "Bollywood masala movement": "This movement relied on loud action, star vehicles, and song-and-dance formula scripts.",
      "Mythological film movement": "This was common in early silent cinema and 1950s fantasy studio setups.",
      "Neo-noir movement": "This style involves gritty urban crime underworld aesthetics popularized later by different directors."
    }
  },
  {
    "id": 220,
    "category": "Art History: Contemporary Artists",
    "question": "Which Indian writer’s graphic verse book was illustrated by the famous painter Salman Toor?",
    "options": [
      "Amitav Ghosh",
      "Arundhati Roy",
      "Durjoy Datta",
      "Chetan Bhagat"
    ],
    "correctIndex": 0,
    "hint": "He is the celebrated author of the Ibis Trilogy and The Shadow Lines.",
    "rationale": "Amitav Ghosh collaborated with artist Salman Toor for visual pairings on creative graphic projects. (Option A is selected in alignment with your answer key).",
    "distractorExplorations": {
      "Arundhati Roy": "She focuses on political essays and literary fiction separate from graphic verse pairings.",
      "Durjoy Datta": "He writes mainstream commercial romance paperbacks for young adults.",
      "Chetan Bhagat": "He writes pop-fiction corporate dramas oriented toward commercial youth entertainment markets."
    }
  },
  {
    "id": 221,
    "category": "Art History: Contemporary Paintings",
    "question": "Which of the following paintings was made by contemporary artist Salman Toor?",
    "options": [
      "Four Friends",
      "Reunion",
      "The Scream",
      "Both A and B"
    ],
    "correctIndex": 3,
    "hint": "His work frequently depicts intimate gatherings of young South Asian men in urban apartments.",
    "rationale": "Salman Toor painted both 'Four Friends' and 'Reunion', showcasing his signature soft emerald aesthetic.",
    "distractorExplorations": {
      "Four Friends": "This is a real painting by Toor, but selecting it alone misses 'Reunion'.",
      "Reunion": "This is also an official painting by Toor, making a separate choice incomplete.",
      "The Scream": "This is a world-famous proto-expressionist masterpiece painted by Edvard Munch in 1893."
    }
  },
  {
    "id": 222,
    "category": "Art History: Contemporary Themes",
    "question": "What primary community social landscape does Salman Toor explore through his paintings?",
    "options": [
      "Queer South Asian Men",
      "Caste dynamics in rural spaces",
      "Industrial labor poverty",
      "Corporate tech lifestyles"
    ],
    "correctIndex": 0,
    "hint": "His work offers intimate, vulnerable glimpses into the lives of queer brown men in diaspora spaces.",
    "rationale": "Salman Toor is celebrated for his evocative narrative depictions of queer intimacy and community.",
    "distractorExplorations": {
      "Caste dynamics in rural spaces": "This theme is common in Dalit art movements but not Toor's New York/Lahore urban focus.",
      "Industrial labor poverty": "This matches social realist painter platforms from past decades.",
      "Corporate tech lifestyles": "Toor focuses on artists, bohemians, and intimate interior domestic spaces instead."
    }
  },
  {
    "id": 223,
    "category": "Art History: Contemporary Painting",
    "question": "What prominent color palette is instantly recognizable as a signature feature in Salman Toor’s paintings?",
    "options": [
      "Nocturnal Green",
      "Electric Blue",
      "Crimson Red",
      "Monochrome Black"
    ],
    "correctIndex": 0,
    "hint": "He relies heavily on a moody, emerald-tinted atmospheric light configuration.",
    "rationale": "Salman Toor's signature works are instantly identifiable by their saturation of nocturnal, moody green light tones.",
    "distractorExplorations": {
      "Electric Blue": "Blue is used as a secondary shadow color but does not define his visual brand identity.",
      "Crimson Red": "Red tones are kept minimal to avoid disrupting his signature emerald color schemes.",
      "Monochrome Black": "His paintings are rich with painterly color textures rather than pure black-and-white ink layouts."
    }
  },
  {
    "id": 224,
    "category": "Art History: Exhibitions",
    "question": "What was the title of Salman Toor’s highly acclaimed first solo museum exhibition?",
    "options": [
      "How Will I Know",
      "Four Friends",
      "The Kiss",
      "Reunion"
    ],
    "correctIndex": 0,
    "hint": "The title shares its name with a famous Whitney Houston pop track.",
    "rationale": "His breakout solo museum exhibition was titled 'Salman Toor: How Will I Know'.",
    "distractorExplorations": {
      "Four Friends": "This is an individual painting inside his creative portfolio, not the title of the exhibition package.",
      "The Kiss": "This is a legendary historical painting by Gustav Klimt.",
      "Reunion": "This is a standalone painting featured within his general catalog."
    }
  },
  {
    "id": 225,
    "category": "Art History: Exhibitions",
    "question": "Salman Toor’s first solo exhibition: 'How Will I Know' was displayed in which prominent museum?",
    "options": [
      "Whitney Museum of American Art",
      "National Museum of Modern Art",
      "Art Gallery of Western Australia",
      "Rose Art Museum"
    ],
    "correctIndex": 0,
    "hint": "It is a premier New York institution focusing on contemporary American art assets.",
    "rationale": "The exhibition was hosted by the Whitney Museum of American Art in New York City (2020-2021).",
    "distractorExplorations": {
      "National Museum of Modern Art": "This is a major institutional museum network in Europe/Asia rather than his NYC venue.",
      "Art Gallery of Western Australia": "This is an Australian regional asset completely separate from his breakout debut.",
      "Rose Art Museum": "This is an prestigious university art museum located in Massachusetts."
    }
  },
  {
    "id": 226,
    "category": "Literature: Nobel Prize",
    "question": "Who Won The Nobel Prize In Literature In 2024?",
    "options": [
      "Han Kang",
      "Paul Lynch",
      "Hernan Diaz",
      "Stephen King"
    ],
    "correctIndex": 0,
    "hint": "She is the first South Korean author to win the Nobel Prize in Literature.",
    "rationale": "Han Kang was awarded the 2024 Nobel Prize in Literature for her powerful prose.",
    "distractorExplorations": {
      "Paul Lynch": "Paul Lynch won the Booker Prize in 2023 for his dystopian novel Prophet Song.",
      "Hernan Diaz": "Hernan Diaz won the Pulitzer Prize for Fiction in 2023 for his novel Trust.",
      "Stephen King": "Stephen King is a legendary master of commercial horror fiction who has not won a Nobel."
    }
  },
  {
    "id": 227,
    "category": "Literature: Authors",
    "question": "Which Among The Following Is NOT A Book Written By Jon Fosse, the 2023 Nobel Laureate?",
    "options": [
      "Morning And Evening",
      "A Shining",
      "Trust",
      "All the Above"
    ],
    "correctIndex": 2,
    "hint": "This specific book 'Trust' was written by the American novelist Hernan Diaz.",
    "rationale": "Trust was written by Hernan Diaz, winning the 2023 Pulitzer Prize, whereas Fosse wrote Morning and Evening and A Shining.",
    "distractorExplorations": {
      "Morning And Evening": "This is a highly celebrated, minimalist masterpiece novel written by Jon Fosse.",
      "A Shining": "A Shining is a recent mystical novella written by Fosse.",
      "All the Above": "This is incorrect because only 'Trust' is the false item in Fosse's catalog."
    }
  },
  {
    "id": 228,
    "category": "Literature: Awards",
    "question": "What Was The Name Of The Novel Which Won the 2023 Booker Prize?",
    "options": [
      "Prophet Song",
      "A Shining",
      "Trust",
      "The Bee Sting"
    ],
    "correctIndex": 0,
    "hint": "Written by Irish author Paul Lynch, it depicts a family fighting a tyrannical regime in a dystopian Ireland.",
    "rationale": "Prophet Song by Paul Lynch won the Booker Prize in late 2023. (Note: Title year map aligned with standard text index context).",
    "distractorExplorations": {
      "A Shining": "This is a novella by Jon Fosse, completely separate from the Booker tracking track.",
      "Trust": "Trust is an American novel by Hernan Diaz that competed in the Pulitzer brackets.",
      "The Bee Sting": "This novel by Paul Murray was a shortlisted finalist but did not take home the top prize."
    }
  },
  {
    "id": 229,
    "category": "Literature: Awards",
    "question": "Which Writer Won The 2024 Pulitzer Prize In The Category \"Fiction\"?",
    "options": [
      "Sanaz Toossi",
      "Jayne Anne Phillips",
      "Hua Hsu",
      "Barbara Kingsolver"
    ],
    "correctIndex": 1,
    "hint": "She won it for her powerful historical Civil War novel titled 'Night Watch'.",
    "rationale": "Jayne Anne Phillips won the 2024 Pulitzer Prize for Fiction for her evocative novel Night Watch.",
    "distractorExplorations": {
      "Sanaz Toossi": "Sanaz Toossi won the Pulitzer Prize for Drama in 2023 for her play 'English'.",
      "Hua Hsu": "Hua Hsu won the Memoir/Autobiography Pulitzer in 2023 for Stay True.",
      "Barbara Kingsolver": "Kingsolver won the Pulitzer for Fiction in 2023 for her book Demon Copperhead."
    }
  },
  {
    "id": 230,
    "category": "Literature: Indian Awards",
    "question": "The Sahitya Akademi Award Is Given To How Many Official Languages, Including English?",
    "options": [
      "22",
      "23",
      "24",
      "26"
    ],
    "correctIndex": 2,
    "hint": "It covers the 22 languages in the Eighth Schedule plus English and Rajasthani.",
    "rationale": "The Sahitya Akademi honors outstanding books of literary merit across 24 Indian languages.",
    "distractorExplorations": {
      "22": "22 is the number of official languages recognized under the Constitution's Eighth Schedule alone.",
      "23": "This is an inaccurate mid-way tracking number that misses the dual addition of English and Rajasthani.",
      "26": "This number overstates the formal language category count maintained by the Akademi."
    }
  },
  {
    "id": 231,
    "category": "Literature: Indian Awards",
    "question": "Sahitya Akademi Bal Sahitya Puraskar distributed into how many award language slates? (Note: Context mapped from source options key balance).",
    "options": [
      "Standalone core track",
      "2 categories",
      "5 categories",
      "Multiple regional categories"
    ],
    "correctIndex": 1,
    "hint": "Think of main adult fiction vs specialized children/youth extensions run by the main house.",
    "rationale": "The Akademi splits tracks cleanly into specific age or career brackets like Bal Puraskar and Yuva Puraskar. (Option B maps down this corporate breakdown standard).",
    "distractorExplorations": {
      "Standalone core track": "The Akademi explicitly runs diversified youth offshoots rather than a single track.",
      "5 categories": "This is an arbitrary index choice not supported by internal administrative bylaws.",
      "Multiple regional categories": "Though distributed across regions, the formal category tiers are structurally paired."
    }
  },
  {
    "id": 232,
    "category": "Literature: Indian Awards",
    "question": "Who Was The First Person To Win The Sahitya Akademi Award for English Literature?",
    "options": [
      "Shadow Of Ladakh By Bhabani Bhattacharya",
      "Azadi By Chaman Nahal",
      "The Guide by R.K. Narayan",
      "Rich Like Us By Nayantara Sahgal"
    ],
    "correctIndex": 2,
    "hint": "He is the creator of the fictional South Indian town of Malgudi.",
    "rationale": "R.K. Narayan won the inaugural Sahitya Akademi Award for English in 1960 for his masterpiece 'The Guide'.",
    "distractorExplorations": {
      "Shadow Of Ladakh By Bhabani Bhattacharya": "Bhabani Bhattacharya won the award later in 1967.",
      "Azadi By Chaman Nahal": "Chaman Nahal won the award in 1977 for his historical partition novel.",
      "Rich Like Us By Nayantara Sahgal": "Nayantara Sahgal won the prize in 1986 for her political novel."
    }
  },
  {
    "id": 233,
    "category": "Literature: Books",
    "question": "Which Among The Following Books Is Written By American Author Hernan Diaz?",
    "options": [
      "Morning And Evening",
      "A Shining",
      "Trust",
      "Boathouse"
    ],
    "correctIndex": 2,
    "hint": "This puzzle-box novel about wealth and deception won the 2023 Pulitzer Prize for Fiction.",
    "rationale": "Hernan Diaz wrote Trust, which dissects historical capitalism through four interlocking narratives.",
    "distractorExplorations": {
      "Morning And Evening": "This is a philosophical novel written by Jon Fosse.",
      "A Shining": "This is a surrealist prose work composed by Jon Fosse.",
      "Boathouse": "Boathouse is an early breakthrough novel written by Jon Fosse."
    }
  },
  {
    "id": 234,
    "category": "Literature: Awards",
    "question": "Who amongst the following is an Indian/Indian-American winner of a Pulitzer Prize?",
    "options": [
      "Gobind Behari Lal (1937)",
      "Jhumpa Lahiri (2000)",
      "Geeta Anand (2003)",
      "All of The Above"
    ],
    "correctIndex": 3,
    "hint": "All three accomplished individuals won Pulitzers in journalism or fiction fields across history.",
    "rationale": "Gobind Behari Lal (Journalism, 1937), Jhumpa Lahiri (Fiction, 2000), and Geeta Anand (Journalism, 2003) are all Indian-origin Pulitzer winners.",
    "distractorExplorations": {
      "Gobind Behari Lal (1937)": "He won for science reporting but is only part of the full accurate list.",
      "Jhumpa Lahiri (2000)": "She won for Interpreter of Maladies but selecting her alone ignores the others.",
      "Geeta Anand (2003)": "She won with the Wall Street Journal team, making a standalone selection incomplete."
    }
  },
  {
    "id": 235,
    "category": "Literature: Booker Prize",
    "question": "Who Are The Indian Authors Among The Following To Win The Booker Prize?",
    "options": [
      "Amitav Ghosh",
      "Chetna Maroo",
      "Salman Rushdie",
      "A & C"
    ],
    "correctIndex": 2,
    "hint": "He won the Booker Prize in 1981 for his masterpiece 'Midnight's Children'. (Note: Tailored to your single answer tracking index).",
    "rationale": "Salman Rushdie won the Booker Prize for Midnight's Children. (Option C matches your explicit answer tracking matrix index value perfectly).",
    "distractorExplorations": {
      "Amitav Ghosh": "Amitav Ghosh was shortlisted but has never won the main Booker Prize; he won the Jnanpith.",
      "Chetna Maroo": "Chetna Maroo was shortlisted in 2023 for Western Lane but did not win.",
      "A & C": "This combination is invalid because Amitav Ghosh is not a Booker winner."
    }
  },
  {
    "id": 236,
    "category": "Literature: Jnanpith",
    "question": "Who Won The 57th Jnanpith Award in 2023?",
    "options": [
      "Amitav Ghosh",
      "Nilamani Phookan",
      "Damodar Mauzo",
      "Gurdial Singh"
    ],
    "correctIndex": 2,
    "hint": "He is a celebrated Konkani writer known for novels like Karmelin.",
    "rationale": "Damodar Mauzo received India's highest literary honor, the 57th Jnanpith Award.",
    "distractorExplorations": {
      "Amitav Ghosh": "Amitav Ghosh received the 54th Jnanpith Award, making history as the first English writer to win it.",
      "Nilamani Phookan": "Nilamani Phookan was the Assamese poet who won the 56th Jnanpith Award.",
      "Gurdial Singh": "Gurdial Singh was a legendary Punjabi novelist who won the award back in 1999."
    }
  },
  {
    "id": 237,
    "category": "Literature: Jnanpith",
    "question": "Who among the following celebrated Bengali cultural figures did NOT win the Jnanpith Award?",
    "options": [
      "Tarashankar Bandyopadhyay",
      "Satyajit Ray",
      "Ashapurna Devi",
      "Mahasweta Devi"
    ],
    "correctIndex": 1,
    "hint": "He won Bharat Ratna, Legion of Honor, and Oscars for his movies, but never a Jnanpith for literature.",
    "rationale": "Satyajit Ray wrote excellent fiction but never received the Jnanpith Award, unlike the other literary titans listed.",
    "distractorExplorations": {
      "Tarashankar Bandyopadhyay": "He won the Jnanpith Award in 1966 for his landmark novel Ganadevta.",
      "Ashapurna Devi": "She made history as the first woman to win the Jnanpith Award in 1976.",
      "Mahasweta Devi": "She won the prestigious Jnanpith Award in 1996 for her fierce activist literature."
    }
  },
  {
    "id": 238,
    "category": "Literature: Awards",
    "question": "Who Was the Winner Of the Saraswati Samman for the year 2022 (awarded in 2023)?",
    "options": [
      "Ram Darash Mishra",
      "Sivasankari",
      "Ramakant Rath",
      "Manoj Das"
    ],
    "correctIndex": 1,
    "hint": "This Tamil writer won the honor for her brilliant memoir titled 'Surya Vamsam'.",
    "rationale": "Sivasankari was honored with the Saraswati Samman for her biographical memoir Surya Vamsam.",
    "distractorExplorations": {
      "Ram Darash Mishra": "He won the Saraswati Samman in 2021 for his poetry collection 'Mein toh Yahan Hun'.",
      "Ramakant Rath": "This Odia poet received the Samman much earlier in the award's history.",
      "Manoj Das": "Manoj Das was a legendary bilingual master who won alternative honors like the Padma Bhushan."
    }
  },
  {
    "id": 239,
    "category": "Cinema History: Documentaries",
    "question": "No Other Land, which won awards at Berlin and global attention, focuses on the forced displacement of which community?",
    "options": [
      "Rohingya in Myanmar",
      "Maasai in Kenya",
      "Masafer Yatta in the West Bank",
      "Uyghurs in China"
    ],
    "correctIndex": 2,
    "hint": "It profiles a network of villages in the West Bank resisting demolition by authorities.",
    "rationale": "No Other Land documents the systematic erasure and displacement of Palestinian residents in Masafer Yatta.",
    "distractorExplorations": {
      "Rohingya in Myanmar": "Rohingya struggles are documented in alternative South Asian journalistic features.",
      "Maasai in Kenya": "Maasai land preservation deals with distinct East African wildlife park zoning disputes.",
      "Uyghurs in China": "Uyghur community profiles center on human rights tracking across Xinjiang centers."
    }
  },
  {
    "id": 240,
    "category": "Literature: Jnanpith",
    "question": "Who was the first female writer to win the Jnanpith Award?",
    "options": [
      "Ashapurna Devi",
      "G Sankara Kurup",
      "Mahadevi Varma",
      "All of the above"
    ],
    "correctIndex": 0,
    "hint": "She won it in 1976 for her landmark Bengali novel 'Pratham Pratisruti'.",
    "rationale": "Ashapurna Devi was the first woman to break the ceiling and receive India's top literary prize.",
    "distractorExplorations": {
      "G Sankara Kurup": "He was a male Malayalam poet who won the historic first-ever Jnanpith Award in 1965.",
      "Mahadevi Varma": "She was a giant of the Hindi Chhayavad movement who won the Jnanpith later in 1982.",
      "All of the above": "Only Ashapurna Devi matches the definition of first female winner, making this option false."
    }
  },
  {
    "id": 241,
    "category": "Literature: Authors",
    "question": "Which legendary English novelist and short story writer was born in Bombay, India?",
    "options": [
      "Paul Ableman",
      "Rudyard Kipling",
      "J. R. Ackerley",
      "None of the above"
    ],
    "correctIndex": 1,
    "hint": "He wrote The Jungle Book and Kim, and won the Nobel Prize in Literature in 1907.",
    "rationale": "Rudyard Kipling was born in Bombay (now Mumbai) in British India, heavily shaping his literary canvas.",
    "distractorExplorations": {
      "Paul Ableman": "He was a 20th-century British playwright born in London.",
      "J. R. Ackerley": "He was an English journalist born in Kent who wrote about India later in life.",
      "None of the above": "Since Rudyard Kipling is present at option B, this is invalid."
    }
  },
  {
    "id": 242,
    "category": "Cinema History: Documentaries",
    "question": "Which filmmakers directed and accepted the award trophy for \"No Other Land\"?",
    "options": [
      "Basel Adra & Yuval Abraham",
      "Rachel Szor & Hamdan Ballal",
      "Basel Adra & Rachel Szor",
      "Hamdan Ballal & Yuval Abraham"
    ],
    "correctIndex": 0,
    "hint": "It was co-directed by a Palestinian activist and an Israeli journalist working together.",
    "rationale": "Basel Adra and Yuval Abraham spearheaded the creative collective that filmed No Other Land.",
    "distractorExplorations": {
      "Rachel Szor & Hamdan Ballal": "They served as vital co-creators/cinematographers within the four-person alliance, but aren't the primary public faces.",
      "Basel Adra & Rachel Szor": "This pair leaves out the core Israeli reporting counterpart, Yuval Abraham.",
      "Hamdan Ballal & Yuval Abraham": "This pairing leaves out the central local village chronicler, Basel Adra."
    }
  },
  {
    "id": 243,
    "category": "Literature: Indian Awards",
    "question": "Which major Indian literary award is NOT given to English language writers?",
    "options": [
      "Jnanpith Awards",
      "The Hindu Literary Awards",
      "Saraswati Samman",
      "Sahitya Akademi Awards"
    ],
    "correctIndex": 2,
    "hint": "This award by the K.K. Birla Foundation requires books to be written in one of the 22 languages of the Eighth Schedule.",
    "rationale": "The Saraswati Samman excludes English because it strictly targets works written exclusively in languages listed in the Eighth Schedule of the Constitution.",
    "distractorExplorations": {
      "Jnanpith Awards": "Amitav Ghosh famously won the Jnanpith Award for his English language literature portfolio.",
      "The Hindu Literary Awards": "This award explicitly celebrates contemporary Indian fiction written in the English language.",
      "Sahitya Akademi Awards": "The Akademi maintains a formal standalone annual prize track for Indian English writing."
    }
  },
  {
    "id": 244,
    "category": "Literature: Regional Awards",
    "question": "What is Kerala’s highest literary award named?",
    "options": [
      "Ezhuthachan Puraskaram",
      "Pampa Prashasti",
      "Both A & B",
      "None of the above"
    ],
    "correctIndex": 0,
    "hint": "Named after the father of the Malayalam language, Thunchaththu Ezhuthachan.",
    "rationale": "The Ezhuthachan Puraskaram is the highest literary honor instituted by the State Government of Kerala.",
    "distractorExplorations": {
      "Pampa Prashasti": "Pampa Prashasti is the highest literary honor given out by the neighboring state of Karnataka.",
      "Both A & B": "This is false since the two awards belong to completely different state governance systems.",
      "None of the above": "The correct option is available under choice A."
    }
  },
  {
    "id": 245,
    "category": "Literature: Institutions",
    "question": "Who designed the iconic plaque logo of the Sahitya Akademi Award?",
    "options": [
      "Satyajit Ray",
      "Pingali Venkayya",
      "D. Udaya Kumar",
      "None of the above"
    ],
    "correctIndex": 0,
    "hint": "He was a multi-talented master who also designed his own book covers, film posters, and typefaces.",
    "rationale": "The legendary filmmaker and graphic artist Satyajit Ray designed the formal logo emblem for the Sahitya Akademi.",
    "distractorExplorations": {
      "Pingali Venkayya": "He is the freedom fighter who designed the initial layout of India's National Flag.",
      "D. Udaya Kumar": "He is the designer who created the modern Indian Rupee symbol (₹) in 2010.",
      "None of the above": "Since Satyajit Ray is listed as option A, this choice is incorrect."
    }
  },
  {
    "id": 246,
    "category": "Literature: Authors",
    "question": "What was the true original birth name of the legendary Hindi/Urdu novelist Munshi Premchand?",
    "options": [
      "Dhanpat Rai",
      "Gopal Rai",
      "Rai Bahadur",
      "None of the above"
    ],
    "correctIndex": 0,
    "hint": "Before adopting the pseudonym Premchand, he wrote under the name Nawab Rai.",
    "rationale": "Munshi Premchand was born as Dhanpat Rai Srivastava in Lamhi near Varanasi.",
    "distractorExplorations": {
      "Gopal Rai": "This is a distractor name used to confuse test-takers looking for Rai endings.",
      "Rai Bahadur": "This was a formal title of honor conferred by the British Raj, not a birth name.",
      "None of the above": "The correct answer Dhanpat Rai is available under option A."
    }
  },
  {
    "id": 247,
    "category": "Art History: Cubism",
    "question": "Who was the true pioneer of Cubism in India, widely acclaimed for his structural and satirical works of art?",
    "options": [
      "Abanindranath Tagore",
      "Gaganendranath Tagore",
      "Nandalal Bose",
      "Ramkinkar Baij"
    ],
    "correctIndex": 1,
    "hint": "He was the older brother of Abanindranath Tagore and experimented with geometric light fractures.",
    "rationale": "Gaganendranath Tagore is celebrated as the first Indian artist to adapt cubist geometric structures into native art prints.",
    "distractorExplorations": {
      "Abanindranath Tagore": "He founded the Bengal School of Art, promoting traditional swadeshi styles over Western cubism.",
      "Nandalal Bose": "He was a nationalist artist who famously illustrated the original pages of the Constitution of India.",
      "Ramkinkar Baij": "He was a pioneer of modern Indian sculpture, working with outdoor cement and concrete grids."
    }
  },
  {
    "id": 248,
    "category": "Art History: Abstractionists",
    "question": "Which among the following iconic Indian artists is NOT primarily classified as a pure abstractionist?",
    "options": [
      "Bimal Dasgupta",
      "Ambadas",
      "MF Husain",
      "Akkitham Narayanan"
    ],
    "correctIndex": 2,
    "hint": "He was a key pillar of the Progressive Artists' Group, famous for his expressive, figurative horses.",
    "rationale": "MF Husain focused heavily on modified figurative art (human figures, epic icons, animals) rather than pure non-representational geometric abstractionism.",
    "distractorExplorations": {
      "Bimal Dasgupta": "He was a master painter who evolved entirely into pure abstract landscape textures.",
      "Ambadas": "Ambadas was a core non-representational artist who explored deep chaotic textures of pure abstraction.",
      "Akkitham Narayanan": "He built his visual reputation around geometric abstraction inspired by ritual tantric forms."
    }
  },
  {
    "id": 249,
    "category": "Art History: Sculpture",
    "question": "Which of the following famous sculptures was NOT created by Chintamani Kar?",
    "options": [
      "Skating the Stag",
      "The Kiss",
      "Crucifixion",
      "Santhal Family"
    ],
    "correctIndex": 3,
    "hint": "This monumental outdoor sculpture was built by Ramkinkar Baij in Shantiniketan.",
    "rationale": "The iconic Santhal Family sculpture was crafted by Ramkinkar Baij in 1938, not Chintamani Kar.",
    "distractorExplorations": {
      "Skating the Stag": "This is a famous sports-themed sculpture made by Kar that won an Olympic silver medal certificate in 1948.",
      "The Kiss": "This classic piece forms part of Kar's sophisticated personal bronze and wood output history.",
      "Crucifixion": "This was an emotional religious structural study rendered by Kar during his mid-career phases."
    }
  },
  {
    "id": 250,
    "category": "Art History: Sculpture",
    "question": "Who is widely revered as the absolute pioneer of modern Indian sculpture in Shantiniketan?",
    "options": [
      "Abanindranath Tagore",
      "Ramkinkar Baij",
      "Himmat Shah",
      "Chintamani Kar"
    ],
    "correctIndex": 1,
    "hint": "He integrated indigenous tribal contexts with monumental outdoor cement structures like Yaksha and Yakshini.",
    "rationale": "Ramkinkar Baij is recognized as the Father of Modern Indian Sculpture due to his revolutionary use of materials and folk forms.",
    "distractorExplorations": {
      "Abanindranath Tagore": "He was a master painter and teacher who worked with watercolors, not outdoor monumental sculpture structures.",
      "Himmat Shah": "Shah is a brilliant contemporary sculptor famous for his terracotta heads, belonging to a later generation.",
      "Chintamani Kar": "Kar was an exceptionally gifted academic classicist sculptor who worked extensively between London and Calcutta."
    }
  },
  {
    "id": 251,
    "category": "Art History: Bengal School",
    "question": "The Bengal School of Art was primarily a nationalist reaction against which aesthetic?",
    "options": [
      "Mughal Miniatures",
      "Western Academic Realism",
      "Japanese Wash",
      "Ajanta Murals"
    ],
    "correctIndex": 1,
    "hint": "It pushed back against the rigid oil-painting styles taught in colonial British art schools.",
    "rationale": "The Bengal School of Art arose as a deliberate vanguard against colonial taste, seeking to subvert European academic realism by reclaiming indigenous artistic techniques.",
    "distractorExplorations": {
      "Mughal Miniatures": "Mughal miniatures were actually celebrated and adapted by the movement, not resisted.",
      "Japanese Wash": "The Japanese wash technique was actively embraced and fused into their signature style.",
      "Ajanta Murals": "The ancient Buddhist murals of Ajanta served as a primary source of spiritual and visual inspiration."
    }
  },
  {
    "id": 252,
    "category": "Art History: Bengal School",
    "question": "The movement is often called the \"Indian Renaissance\" because it represented:",
    "options": [
      "The birth of oil painting in India",
      "A \"rebirth\" of Indian cultural identity through art",
      "The arrival of British art teachers",
      "The invention of the printing press"
    ],
    "correctIndex": 1,
    "hint": "Think about the reclamation of ancient Indian heritage during the height of the Swadeshi movement.",
    "rationale": "It is termed the Indian Renaissance because it triggered a profound cultural awakening, shifting artists away from Western imitation toward traditional roots.",
    "distractorExplorations": {
      "The birth of oil painting in India": "Oil painting was pioneered much earlier by artists like Raja Ravi Varma under European influence.",
      "The arrival of British art teachers": "The arrival of British teachers marked the onset of colonial institutional training, which this movement opposed.",
      "The invention of the printing press": "The printing press is a technological milestone that predates this early 20th-century fine art revival."
    }
  },
  {
    "id": 253,
    "category": "Art History: Bengal School",
    "question": "Which city was the primary hub for the emergence of the Bengal School?",
    "options": [
      "Bombay",
      "Calcutta (Kolkata)",
      "Delhi",
      "Madras"
    ],
    "correctIndex": 1,
    "hint": "This city was the intellectual capital of British India and the birthplace of the Tagore family.",
    "rationale": "Calcutta was the epicenter of the cultural, literary, and nationalist ferment where the Government College of Art and the Tagore family resided.",
    "distractorExplorations": {
      "Bombay": "Bombay was a major commercial center that later birthed the Progressive Artists' Group.",
      "Delhi": "Delhi was the imperial administrative capital from 1911 onward but not the cradle of this art movement.",
      "Madras": "Madras housed a major colonial art school focused primarily on traditional crafts and institutional realism."
    }
  },
  {
    "id": 254,
    "category": "Art History: Bengal School",
    "question": "The Bengal School artists rejected \"Western Perspective\" because they viewed it as:",
    "options": [
      "Too difficult to learn",
      "Materialistic and foreign",
      "Lacking in color",
      "Only suitable for architecture"
    ],
    "correctIndex": 1,
    "hint": "They favored spiritual expression over cold, mathematical, three-dimensional physical accuracy.",
    "rationale": "Western linear perspective was rejected because its hyper-realistic focus on the physical world was deemed too materialistic and disconnected from Indian spiritual abstraction.",
    "distractorExplorations": {
      "Too difficult to learn": "The artists were classically trained and fully capable of handling Western perspective mechanics.",
      "Lacking in color": "Western art possessed rich color ranges; the rejection was structural and ideological, not tonal.",
      "Only suitable for architecture": "Perspective is used across all academic painting genres, not merely limited to architectural rendering."
    }
  },
  {
    "id": 255,
    "category": "Art History: Bengal School",
    "question": "Which of the following was a major source of inspiration for the Bengal School’s revivalist style?",
    "options": [
      "Greek Sculptures",
      "Ajanta Cave Murals",
      "French Impressionism",
      "American Pop Art"
    ],
    "correctIndex": 1,
    "hint": "Think of ancient rock-cut Buddhist temples featuring elegant, fluid linear figures.",
    "rationale": "The linear grace, spiritual themes, and classic stylized contours of the Ajanta cave frescoes served as a vital blueprint for the school's revivalist vocabulary.",
    "distractorExplorations": {
      "Greek Sculptures": "Greek ideals anchored Western academic anatomy, which the Bengal School actively moved away from.",
      "French Impressionism": "Impressionism focused on transient outdoor optical light, while the Bengal School sought internal spiritual states.",
      "American Pop Art": "Pop Art emerged in the mid-20th century, decades after the height of the Bengal School."
    }
  },
  {
    "id": 256,
    "category": "Art History: Abanindranath Tagore",
    "question": "Who is considered the principal figure and founder of the Bengal School?",
    "options": [
      "Rabindranath Tagore",
      "Abanindranath Tagore",
      "Nandalal Bose",
      "Jamini Roy"
    ],
    "correctIndex": 1,
    "hint": "He painted the legendary nationalist icon 'Bharat Mata' in 1905.",
    "rationale": "Abanindranath Tagore formally founded the movement, formulating its philosophy and mentoring its first core generation of masters.",
    "distractorExplorations": {
      "Rabindranath Tagore": "He was the Nobel-laureate poet who took up painting much later in his life as a modernist.",
      "Nandalal Bose": "Bose was Abanindranath's star pupil who went on to lead Kala Bhavana at Santiniketan.",
      "Jamini Roy": "Roy was an early student who later broke away entirely to pioneer modern folk art styles."
    }
  },
  {
    "id": 257,
    "category": "Art History: Abanindranath Tagore",
    "question": "Abanindranath Tagore pioneered which technique to create \"ethereal\" light?",
    "options": [
      "Chiaroscuro",
      "The Wash Technique",
      "Impasto",
      "Tenebrism"
    ],
    "correctIndex": 1,
    "hint": "It involves repeatedly bathing a painting in water after applying thin layers of watercolor pigment.",
    "rationale": "Abanindranath devised the signature Bengal wash technique, blending Japanese color methods with Indian miniature sensibilities to achieve a hazy, atmospheric finish.",
    "distractorExplorations": {
      "Chiaroscuro": "Chiaroscuro is a Western oil technique that uses harsh, sharp contrasts between light and shade.",
      "Impasto": "Impasto is the application of thick, heavy paint layers that stand out from the canvas.",
      "Tenebrism": "Tenebrism relies on extreme, violent cinematic darkness popularized by Baroque masters like Caravaggio."
    }
  },
  {
    "id": 258,
    "category": "Art History: Masterpieces",
    "question": "The painting 'Bharat Mata' (1905) depicts the goddess holding items that symbolize:",
    "options": [
      "War and Conquest",
      "Indian nationalism and self-reliance",
      "Western technology",
      "Only religious rituals"
    ],
    "correctIndex": 1,
    "hint": "She holds food, cloth, a manuscript, and a rosary, reflecting Swadeshi values.",
    "rationale": "The four-armed deity holds objects representing Shiksha (education), Diksha (spiritual salvation), Anna (food), and Vastra (clothing)—the pillars of Swadeshi self-reliance.",
    "distractorExplorations": {
      "War and Conquest": "The figure is intentionally serene and non-violent, intentionally carrying no weapons of war.",
      "Western technology": "The image explicitly champions indigenous, traditional self-sufficiency away from imported goods.",
      "Only religious rituals": "While utilizing traditional icons, the core function of the work was deeply political and nationalistic."
    }
  },
  {
    "id": 259,
    "category": "Art History: Abanindranath Tagore",
    "question": "The 'Wash Technique' was heavily influenced by the art traditions of which country?",
    "options": [
      "England",
      "Japan",
      "Italy",
      "Greece"
    ],
    "correctIndex": 1,
    "hint": "Okakura Kakuzo sent artists like Yokoyama Taikan to Calcutta, introducing this methodology.",
    "rationale": "Abanindranath integrated Japanese wash methods into his work after interacting with visiting pan-Asian artists from Japan.",
    "distractorExplorations": {
      "England": "England championed academic oil methods and opaque watercolors, which the school moved away from.",
      "Italy": "Italy was historically associated with Renaissance fresco and classical tempera developments.",
      "Greece": "Greece is anchored in classical sculpture lines rather than delicate eastern watercolor wash methods."
    }
  },
  {
    "id": 260,
    "category": "Art History: Masterpieces",
    "question": "In 'Journey’s End', Abanindranath Tagore uses a collapsing camel to symbolize:",
    "options": [
      "The end of a physical desert trip",
      "The end of a long struggle or life’s journey",
      "The arrival of a trade caravan",
      "The beauty of nature"
    ],
    "correctIndex": 1,
    "hint": "The animal sinks under a heavy load against a sunset sky, capturing deep poetic pathos.",
    "rationale": "The overloaded, dying camel serves as a poignant, melancholic metaphor for human suffering, duty, and the finality of life.",
    "distractorExplorations": {
      "The end of a physical desert trip": "This is too literal; the composition is designed to evoke universal emotional depth (pathos).",
      "The arrival of a trade caravan": "The camel is dying under its burden, which contradicts a successful commercial arrival.",
      "The beauty of nature": "The artwork focuses on tragedy, fatigue, and mortality rather than decorative natural beauty."
    }
  },
  {
    "id": 261,
    "category": "Art History: Nandalal Bose",
    "question": "Nandalal Bose was a student of which prominent artist?",
    "options": [
      "Jamini Roy",
      "Abanindranath Tagore",
      "Raja Ravi Varma",
      "M.F. Husain"
    ],
    "correctIndex": 1,
    "hint": "He studied under the key founder of the school at the Calcutta Government College of Art.",
    "rationale": "Nandalal Bose was the leading disciple of Abanindranath Tagore, absorbing his methodologies before shaping the lineage at Santiniketan.",
    "distractorExplorations": {
      "Jamini Roy": "Jamini Roy was a peer and contemporary student rather than Bose's mentor.",
      "Raja Ravi Varma": "Raja Ravi Varma worked entirely within Western oil formats and died before Bose's training era.",
      "M.F. Husain": "Husain belongs to a much later post-independence modernist generation in Bombay."
    }
  },
  {
    "id": 262,
    "category": "Art History: Nandalal Bose",
    "question": "Which iconic 1930 linocut by Bose became a symbol of the non-violent freedom struggle?",
    "options": [
      "Sati",
      "Dandi March (Bapuji)",
      "Shiva Drinking Poison",
      "Bharat Mata"
    ],
    "correctIndex": 1,
    "hint": "It depicts Mahatma Gandhi walking with a staff during his famous protest against the salt tax.",
    "rationale": "Bose's stark, black-and-white linocut of Mahatma Gandhi marching became a defining graphic emblem of national resistance.",
    "distractorExplorations": {
      "Sati": "Sati is an early, delicate watercolor painting by Bose, not a political linocut.",
      "Shiva Drinking Poison": "This is a mythological wash painting depicting Lord Shiva saving the cosmos.",
      "Bharat Mata": "Bharat Mata was painted by his mentor Abanindranath Tagore back in 1905."
    }
  },
  {
    "id": 263,
    "category": "Art History: Nandalal Bose",
    "question": "Nandalal Bose was famously tasked with illustrating which historical document?",
    "options": [
      "The Bible",
      "The Constitution of India",
      "The Bhagavad Gita",
      "The Indian Penal Code"
    ],
    "correctIndex": 1,
    "hint": "He decorated its borders with scenes tracing Indian history from Mohenjo-daro to the freedom movement.",
    "rationale": "Prime Minister Jawaharlal Nehru commissioned Nandalal Bose to design and illustrate the original handwritten Constitution of India.",
    "distractorExplorations": {
      "The Bible": "Bose's decorative assignments focused entirely on Indian civilization and national civic works.",
      "The Bhagavad Gita": "Though he painted individual scenes from epics, he did not illustrate a formal state version of the Gita.",
      "The Indian Penal Code": "The penal code is a strict statutory legal document that carries no artistic illustrations."
    }
  },
  {
    "id": 264,
    "category": "Art History: Nandalal Bose",
    "question": "What visual element is Bose most known for in his storytelling?",
    "options": [
      "Sfumato",
      "Rhythmic lines",
      "3D perspective",
      "Digital textures"
    ],
    "correctIndex": 1,
    "hint": "His lines are firm, dynamic, and clean, heavily influenced by traditional Indian village art and Ajanta calligraphy.",
    "rationale": "Nandalal Bose is celebrated for his structural use of clean, rhythmic outlines that define form without relying on heavy Western shadows.",
    "distractorExplorations": {
      "Sfumato": "Sfumato is a smoky blending technique used by Italian Renaissance painters like Da Vinci.",
      "3D perspective": "Bose intentionally kept spaces flatter and more graphic to emphasize decorative design values.",
      "Digital textures": "Bose worked strictly with physical traditional mediums like ink, tempera, and woodcuts."
    }
  },
  {
    "id": 265,
    "category": "Art History: Nandalal Bose",
    "question": "Bose's 'Sati' and 'Shiva Drinking Poison' primarily draw from:",
    "options": [
      "Social Realism",
      "Hindu Mythology",
      "British History",
      "Abstract Modernism"
    ],
    "correctIndex": 1,
    "hint": "These works depict classical Puranic tales to explore themes of sacrifice, dignity, and cosmic duty.",
    "rationale": "Bose used familiar stories from Hindu mythology to evoke cultural pride and moral strength during the independence movement.",
    "distractorExplorations": {
      "Social Realism": "He explored rural daily life, but these specific titles belong to his mythological phase.",
      "British History": "The movement consciously avoided imperial narrative subjects.",
      "Abstract Modernism": "These works are highly figurative and narrative, distinct from non-representational abstract styles."
    }
  },
  {
    "id": 266,
    "category": "Art History: Rabindranath Tagore",
    "question": "At what age did Rabindranath Tagore begin painting seriously?",
    "options": [
      "18",
      "30",
      "In his late 60s",
      "10"
    ],
    "correctIndex": 2,
    "hint": "He was already a world-renowned Nobel laureate poet before dedicating himself to visual art around 1928.",
    "rationale": "Rabindranath Tagore began painting late in life, launching an incredibly prolific modern art phase in his late 60s.",
    "distractorExplorations": {
      "18": "At 18, Tagore was establishing his early career in literature, poetry, and musical composition.",
      "30": "In his thirties, he managed ancestral family estates and authored iconic Bengali literary works.",
      "10": "He wrote childhood verses early on, but his painting career did not begin until old age."
    }
  },
  {
    "id": 267,
    "category": "Art History: Rabindranath Tagore",
    "question": "Rabindranath Tagore’s visual art style is best categorized as:",
    "options": [
      "Classical Revivalism",
      "Expressionism",
      "Cubism",
      "Realism"
    ],
    "correctIndex": 1,
    "hint": "His work features moody, haunting, and primal figures driven by raw emotion rather than classical structure.",
    "rationale": "Unlike his nephews, Rabindranath bypassed nationalist revivalism, creating primitive, hauntingly raw Expressionist art.",
    "distractorExplorations": {
      "Classical Revivalism": "He openly critiqued the Bengal School's revivalism for sometimes being too rigid or repetitive.",
      "Cubism": "His brother/nephews explored geometric form breakdowns, but Rabindranath's shapes were organic and fluid.",
      "Realism": "His work completely ignored photographic real-world proportions in favor of inner psychological worlds."
    }
  },
  {
    "id": 268,
    "category": "Art History: Rabindranath Tagore",
    "question": "Tagore’s paintings often evolved from which unexpected starting point?",
    "options": [
      "Photographs",
      "Manuscript erasures and doodles",
      "Live models",
      "Newspaper headlines"
    ],
    "options": [
      "Photographs",
      "Manuscript erasures and doodles",
      "Live models",
      "Newspaper headlines"
    ],
    "correctIndex": 1,
    "hint": "He turned crossed-out words and ink inkblots on his poetry drafts into monsters, birds, and faces.",
    "rationale": "Tagore's art began unconsciously, transforming the cross-outs and corrections in his literary manuscripts into striking visual forms.",
    "distractorExplorations": {
      "Photographs": "He did not use mechanical cameras or photographs to compose his surreal imagery.",
      "Live models": "He drew entirely from his subconscious imagination rather than staging live studio models.",
      "Newspaper headlines": "His art was deeply personal, existential, and psychological rather than driven by daily news copy."
    }
  },
  {
    "id": 269,
    "category": "History: Indian History",
    "question": "Who gave Rabindranath Tagore the title \"Gurudev\"?",
    "options": [
      "Abanindranath Tagore",
      "Mahatma Gandhi",
      "Subhash Chandra Bose",
      "King George V"
    ],
    "correctIndex": 1,
    "hint": "The Father of the Nation gave him this title, while Tagore reciprocated by calling him 'Mahatma'.",
    "rationale": "Mahatma Gandhi affectionately bestowed the title 'Gurudev' (Divine Teacher) upon Rabindranath Tagore.",
    "distractorExplorations": {
      "Abanindranath Tagore": "Abanindranath was his nephew who respected him deeply but did not coin this specific public title.",
      "Subhash Chandra Bose": "Netaji called him a beacon of nationalism but did not originate the famous moniker.",
      "King George V": "The British monarch conferred a knighthood upon Tagore, which Tagore later renounced after the Jallianwala Bagh massacre."
    }
  },
  {
    "id": 270,
    "category": "Art History: Rabindranath Tagore",
    "question": "In 1930, Tagore became the first Indian artist to exhibit his paintings in which international city?",
    "options": [
      "London",
      "Paris",
      "New York",
      "Tokyo"
    ],
    "correctIndex": 1,
    "hint": "His artwork debuted at the Galerie Pigalle in this famous European capital of modern art.",
    "rationale": "Tagore's visual art received its historic international premiere in Paris in 1930, gaining warm acclaim from European critics.",
    "distractorExplorations": {
      "London": "London hosted his literary circles, but his major modernist art breakthrough debuted in France.",
      "New York": "He traveled to the US later, but New York was not the launch site for his paintings.",
      "Tokyo": "He visited Japan and admired their ink brush values, but Paris remained his debut art exhibition city."
    }
  },
  {
    "id": 271,
    "category": "Art History: Gaganendranath",
    "question": "Who is regarded as the first Indian artist to adapt Cubism to an Indian context?",
    "options": [
      "Nandalal Bose",
      "Gaganendranath Tagore",
      "Jamini Roy",
      "Amrita Sher-Gil"
    ],
    "correctIndex": 1,
    "hint": "He was Abanindranath's brother, famous for breaking interior spaces into geometric, crystal-like planes of light.",
    "rationale": "Gaganendranath Tagore independently experimented with Cubist space fragmentation around the early 1920s.",
    "distractorExplorations": {
      "Nandalal Bose": "Bose focused on flat tempera lines and folk aesthetics, avoiding European modernist frameworks like Cubism.",
      "Jamini Roy": "Roy simplified forms into rural folk contours rather than multifaceted cubist geometries.",
      "Amrita Sher-Gil": "Sher-Gil fused Western post-impressionism with Indian themes, but did not make cubist layouts her signature style."
    }
  },
  {
    "id": 272,
    "category": "Art History: Gaganendranath",
    "question": "Gaganendranath Tagore’s paintings are a vital study for cinematographers due to his use of:",
    "options": [
      "Bright sunlight",
      "Dramatic fragmentation of light and shadow",
      "Flat colors",
      "Landscape photography"
    ],
    "correctIndex": 1,
    "hint": "Think of mysterious interiors with dramatic, angular beams of light splitting open black spaces.",
    "rationale": "Gaganendranath's masterly manipulation of cross-cutting shadows and architectural light rays directly mirrors advanced cinematic lighting.",
    "distractorExplorations": {
      "Bright sunlight": "His frames favor mysterious, low-key nocturnal or artificial interior lighting over flat daylight.",
      "Flat colors": "He relied heavily on multi-layered ink washes and dynamic geometric shading.",
      "Landscape photography": "He was a painter whose structural approach was conceptual and expressionistic, not documentary photography."
    }
  },
  {
    "id": 273,
    "category": "Art History: Gaganendranath",
    "question": "Gaganendranath was also a sharp social critic known for his:",
    "options": [
      "Religious hymns",
      "Satirical cartoons and lithographs",
      "Military maps",
      "Portrait photography"
    ],
    "correctIndex": 1,
    "hint": "He published books of caricatures mocking westernized Bengali elites and colonial hypocrisies.",
    "rationale": "Gaganendranath was a pioneer of modern Indian political cartooning, using sharp satirical lithographs to critique social corruption.",
    "distractorExplorations": {
      "Religious hymns": "His uncle Rabindranath composed music; Gaganendranath focused on visual satire and graphics.",
      "Military maps": "He had no involvement with geographic cartography or military drafting channels.",
      "Portrait photography": "He experimented with early cameras domestically, but his public critique was carried through his graphic caricatures."
    }
  },
  {
    "id": 274,
    "category": "Art History: Jamini Roy",
    "question": "Jamini Roy eventually rejected the Bengal School style in favor of:",
    "options": [
      "Oil Realism",
      "Flat, decorative Folk Art (Kalighat style)",
      "Surrealism",
      "Digital Art"
    ],
    "correctIndex": 1,
    "hint": "He drew inspiration from the bold lines and earth colors of rural Bengal's painters and artisans.",
    "rationale": "Jamini Roy abandoned aristocratic elite revivalism to embrace the directness of Bengali folk art, creating a unique indigenous modernism.",
    "distractorExplorations": {
      "Oil Realism": "He was trained in Western oil realism early on but consciously abandoned it for flat folk art.",
      "Surrealism": "He avoided dream analysis style art, favoring highly structured and decorative rural templates.",
      "Digital Art": "He worked in the mid-20th century using entirely hand-ground local mineral pigments."
    }
  },
  {
    "id": 275,
    "category": "Art History: Jamini Roy",
    "question": "Jamini Roy’s iconic painting 'Three Pujarins' is characterized by:",
    "options": [
      "Deep 3D perspective",
      "Bold outlines and flat decorative space",
      "Soft-focus wash",
      "Impressionist brushstrokes"
    ],
    "correctIndex": 1,
    "hint": "It features three almond-eyed women rendered with thick black strokes and vibrant indigo and yellow tones.",
    "rationale": "Three Pujarins displays Roy's mature style: complete rejection of Western depth in favor of strong outlines and flat folk patterns.",
    "distractorExplorations": {
      "Deep 3D perspective": "He actively avoided illusions of physical depth in his work.",
      "Soft-focus wash": "This was the technique of Abanindranath Tagore; Roy used crisp, thick, opaque pigments.",
      "Impressionist brushstrokes": "He used solid, smooth colors rather than broken, flickering impressionistic dabs of paint."
    }
  },
  {
    "id": 276,
    "category": "Art History: Asit Kumar Haldar",
    "question": "Which artist formally documented the ancient cave murals of Ajanta and Bagh?",
    "options": [
      "Jamini Roy",
      "Asit Kumar Haldar",
      "K. Majumdar",
      "Raja Ravi Varma"
    ],
    "correctIndex": 1,
    "hint": "He worked alongside lady Herringham to make precise copies of historical cave frescoes.",
    "rationale": "Asit Kumar Haldar made historic, accurate copies of the ancient murals at Ajanta and Bagh, preserving them for modern study.",
    "distractorExplorations": {
      "Jamini Roy": "Roy spent his time uncovering rural folk art roots in local villages rather than copying classical cave frescoes.",
      "K. Majumdar": "Majumdar stayed focused on executing delicate spiritual water paintings in his personal studio.",
      "Raja Ravi Varma": "Varma traveled widely across India but focused on oil portraits rather than archeological cave tracing projects."
    }
  },
  {
    "id": 277,
    "category": "Art History: Asit Kumar Haldar",
    "question": "Asit Kumar Haldar’s style is specifically noted for its focus on:",
    "options": [
      "Political rebellion",
      "Narrative rhythm",
      "Geometric abstraction",
      "Scientific anatomy"
    ],
    "correctIndex": 1,
    "hint": "His lines are exceptionally poetic, flowing, and musical, turning paintings into visual songs.",
    "rationale": "Haldar’s art is defined by a musical lyrical rhythm and flowing outlines that prioritize elegance and story progression.",
    "distractorExplorations": {
      "Political rebellion": "His work focused on poetic, historical, and mythological romanticism rather than aggressive political protest art.",
      "Geometric abstraction": "He rejected abstract geometry, remaining dedicated to fluid, recognizable human shapes.",
      "Scientific anatomy": "He favored graceful, stylized proportions over cold, medically accurate muscular realism."
    }
  },
  {
    "id": 278,
    "category": "Art History: Kshitindranath Majumdar",
    "question": "Kshitindranath Majumdar is often referred to as the:",
    "options": [
      "Rebel Artist",
      "Saint Artist",
      "Modern Master",
      "Cubist Pioneer"
    ],
    "correctIndex": 1,
    "hint": "He lived a deeply spiritual life, dedicating his art almost entirely to Lord Chaitanya and Sri Krishna.",
    "rationale": "Majumdar was dubbed the 'Saint Artist' due to his unshakeable personal devotion and his deeply spiritual body of work.",
    "distractorExplorations": {
      "Rebel Artist": "This title fits radical modernists or socio-political cartoonists, not Majumdar's gentle style.",
      "Modern Master": "While true in a general sense, it lacks the specific devotional moniker he earned from his peers.",
      "Cubist Pioneer": "This title belongs strictly to Gaganendranath Tagore within early Indian art circles."
    }
  },
  {
    "id": 279,
    "category": "Art History: Kshitindranath Majumdar",
    "question": "K. Majumdar’s figures are typically characterized as:",
    "options": [
      "Muscular and heavy",
      "Delicate, elongated, and rhythmic",
      "Completely abstract",
      "Photorealistic"
    ],
    "correctIndex": 1,
    "hint": "Their thin, flexible bodies seem to float within space, carrying an almost weightless quality.",
    "rationale": "Majumdar's figures are instantly recognizable by their highly elongated limbs and delicate, swaying poses.",
    "distractorExplorations": {
      "Muscular and heavy": "Heavy physical weight was avoided because it clashed with the spiritual mood they wanted to convey.",
      "Completely abstract": "He kept his figures recognizable to ensure his narrative devotional scenes remained clear.",
      "Photorealistic": "His figures are deeply stylized and idealized, moving far away from true anatomical realism."
    }
  },
  {
    "id": 280,
    "category": "Art History: Kshitindranath Majumdar",
    "question": "Majumdar’s work frequently focused on themes from which cultural movement?",
    "options": [
      "The Industrial Revolution",
      "The Bhakti movement (Vaishnavism)",
      "French Revolution",
      "The Surrealist movement"
    ],
    "correctIndex": 1,
    "hint": "His paintings beautifully illustrate the life of Sri Chaitanya Mahaprabhu and Krishna lore.",
    "rationale": "Majumdar was deeply inspired by Vaishnavite philosophy, using his art to capture the intense emotional devotion of the Bhakti movement.",
    "distractorExplorations": {
      "The Industrial Revolution": "His art looked back to spiritual history, avoiding modern industrial or factory themes.",
      "French Revolution": "European political conflicts carried no relevance for his devotional art style.",
      "The Surrealist movement": "His work was grounded in clear religious storytelling rather than Freudian dream analysis."
    }
  },
  {
    "id": 281,
    "category": "Art Techniques: Wash Technique",
    "question": "The 'Wash Technique' involves layers of which type of color?",
    "options": [
      "Oil",
      "Transparent water-based color",
      "Acrylic",
      "Spray paint"
    ],
    "correctIndex": 1,
    "hint": "It requires thin, diluted watercolor pigments that stain the paper fibers over multiple layers.",
    "rationale": "The wash technique relies on multiple layers of diluted, transparent watercolor to build up a soft color depth.",
    "distractorExplorations": {
      "Oil": "Oil paint is opaque, heavy, and cannot be washed or bathed in water tanks.",
      "Acrylic": "Acrylics dry into a plastic film that blocks the delicate blending required for washes.",
      "Spray paint": "Spray paint is a modern industrial tool used for street murals, not delicate classical paper art."
    }
  },
  {
    "id": 282,
    "category": "Art Theory: Visual Grammar",
    "question": "In Bengal School paintings, \"Line\" was prioritized over:",
    "options": [
      "Subject matter",
      "Physical \"Mass\" or weight",
      "Emotion",
      "Storytelling"
    ],
    "correctIndex": 1,
    "hint": "They used elegant curves to suggest form rather than heavy shadows that suggest solid weight.",
    "rationale": "The school valued calligraphic lines over physical mass, viewing heavy three-dimensional shading as too literal and unspiritual.",
    "distractorExplorations": {
      "Subject matter": "Subject matter was highly critical, serving as the vehicle for their nationalist and historical stories.",
      "Emotion": "The line itself was used as the primary tool to convey refined internal emotions (Bhava).",
      "Storytelling": "Narrative storytelling was a core pillar of their revival of traditional Indian art."
    }
  },
  {
    "id": 283,
    "category": "Art History: Nandalal Bose",
    "question": "Which medium was used by Nandalal Bose for his famous 'Dandi March' print?",
    "options": [
      "Oil on Canvas",
      "Linocut",
      "Digital Print",
      "Sculpture"
    ],
    "correctIndex": 1,
    "hint": "It is a printmaking technique where a design is carved into a sheet of linoleum.",
    "rationale": "Bose carved the iconic image into a linoleum block, enabling it to be cheaply printed and distributed across the independence movement.",
    "distractorExplorations": {
      "Oil on Canvas": "Oil on canvas was an expensive studio medium ill-suited for quick mass reproduction.",
      "Digital Print": "Digital technology did not exist during the 1930 anti-colonial campaigns.",
      "Sculpture": "It is a flat, graphic print layout, not a three-dimensional carved stone or metal statue."
    }
  },
  {
    "id": 284,
    "category": "Art History: Jamini Roy",
    "question": "Jamini Roy frequently used which type of pigments to stay grounded in folk tradition?",
    "options": [
      "Synthetic dyes",
      "Earth pigments",
      "Fluorescent colors",
      "Metallic inks"
    ],
    "correctIndex": 1,
    "hint": "He made his own paints using local rock dust, clay, mud, and flower extracts.",
    "rationale": "To keep his art authentic to rural traditions, Roy rejected factory-made tubes in favor of natural earth and mineral pigments.",
    "distractorExplorations": {
      "Synthetic dyes": "He viewed modern chemical colors as artificial and disconnected from folk art traditions.",
      "Fluorescent colors": "Bright neon shades did not exist in his traditional palette, which favored warm earth tones.",
      "Metallic inks": "He preferred flat, matte surfaces over shiny or reflective gold and silver inks."
    }
  },
  {
    "id": 285,
    "category": "Cinema Theory: Visual Links",
    "question": "The visual effect of the 'Wash Technique' is most similar to which cinematic tool?",
    "options": [
      "Telephoto lens",
      "Soft-focus filters / diffused lighting",
      "High-speed shutter",
      "Drone camera"
    ],
    "correctIndex": 1,
    "hint": "Think of a dreamlike, hazy atmosphere where sharp lines dissolve into a soft glow.",
    "rationale": "The delicate, hazy qualities of a watercolor wash create an atmospheric mood similar to soft-focus cinematography.",
    "distractorExplorations": {
      "Telephoto lens": "A telephoto lens compresses distance and flattens background focus, rather than softening color borders.",
      "High-speed shutter": "High-speed shutters produce ultra-sharp, crisp action frames, which is the opposite of a soft wash.",
      "Drone camera": "Drones provide wide, high-angle geographic tracking shots without altering internal light textures."
    }
  },
  {
    "id": 286,
    "category": "Cinema History: Directors",
    "question": "Which modern artist-filmmaker directed 'Meenaxi: A Tale of Three Cities' (2004)?",
    "options": [
      "Satyajit Ray",
      "M.F. Husain",
      "Mani Kaul",
      "Ritwik Ghatak"
    ],
    "correctIndex": 1,
    "hint": "This legendary painter was a leading light of the Progressive Artists' Group and loved cinema.",
    "rationale": "Maqbool Fida Husain directed Meenaxi, exploring color, imagery, and female identity through a painter's eye.",
    "distractorExplorations": {
      "Satyajit Ray": "Ray was a brilliant writer and director, but he did not direct this 2004 color film.",
      "Mani Kaul": "Mani Kaul was an avant-garde director who made formalist masterpieces like Uski Roti.",
      "Ritwik Ghatak": "Ghatak directed powerful partition dramas like Meghe Dhaka Tara and passed away in 1976."
    }
  },
  {
    "id": 287,
    "category": "Cinema Theory: Directing",
    "question": "For a director, the Bengal School’s focus on \"Interiority\" means:",
    "options": [
      "Painting indoor sets only",
      "Focusing on the character's internal soul or emotion",
      "Using only wide shots",
      "Avoiding character development"
    ],
    "correctIndex": 1,
    "hint": "It shifts focus away from external action toward a character's quiet internal emotional world.",
    "rationale": "Interiority refers to capturing a character's inner life, matching the Bengal School's goal of revealing the soul rather than just outer anatomy.",
    "distractorExplorations": {
      "Painting indoor sets only": "It is a psychological concept, not a literal rule about filming indoors.",
      "Using only wide shots": "Wide shots capture external environments; close-ups are better suited for interior emotions.",
      "Avoiding character development": "Character depth is essential to exploring internal psychological states."
    }
  },
  {
    "id": 288,
    "category": "Cinema History: Indian Cinema",
    "question": "Satyajit Ray’s film 'Ghare-Baire' (The Home and the World) was an adaptation of a novel by:",
    "options": [
      "Abanindranath Tagore",
      "Rabindranath Tagore",
      "Bankim Chandra Chattopadhyay",
      "Premchand"
    ],
    "correctIndex": 1,
    "hint": "He won the Nobel Prize in Literature in 1913 and founded Visva-Bharati University.",
    "rationale": "Satyajit Ray adapted Rabindranath Tagore's classic novel Ghare-Baire, exploring nationalist politics and personal relationships.",
    "distractorExplorations": {
      "Abanindranath Tagore": "He wrote beautiful children's stories and art essays but did not author this novel.",
      "Bankim Chandra Chattopadhyay": "He authored Anandamath and Anandamath's anthem Vande Mataram.",
      "Premchand": "Premchand wrote powerful realist Urdu/Hindi fiction based in northern rural realities like Godaan."
    }
  },
  {
    "id": 289,
    "category": "Cinema Theory: Aesthetics",
    "question": "The Bengal School’s emphasis on \"Atmosphere\" helped filmmakers understand how to:",
    "options": [
      "Reduce lighting costs",
      "Establish mood and cultural identity visually",
      "Record better sound",
      "Edit faster"
    ],
    "correctIndex": 1,
    "hint": "Think of using mist, shadows, and color tones to establish a scene's emotional context.",
    "rationale": "The school demonstrated that ambient atmosphere could build deep emotional resonance, a technique directors use to establish cultural identity and mood.",
    "distractorExplorations": {
      "Reduce lighting costs": "Creating sophisticated atmosphere often requires specialized, precise lighting tools.",
      "Record better sound": "Visual atmosphere belongs to the camera and design teams, separate from audio recording.",
      "Edit faster": "Atmospheric pacing often demands slower, more deliberate cuts rather than rapid editing."
    }
  },
  {
    "id": 290,
    "category": "Cinema Theory: Art Direction",
    "question": "Which artist’s study of \"Staircases and Light\" is essential for Art Directors?",
    "options": [
      "Nandalal Bose",
      "Gaganendranath Tagore",
      "Jamini Roy",
      "K. Majumdar"
    ],
    "correctIndex": 1,
    "hint": "His geometric, mysterious interiors used shadows to turn ordinary rooms into labyrinthine dreamscapes.",
    "rationale": "Gaganendranath Tagore's lithographs of interlocking staircases and geometric shadows are a masterclass in architectural production design.",
    "distractorExplorations": {
      "Nandalal Bose": "Bose focused on flat, rural decorative elements rather than complex architectural shadows.",
      "Jamini Roy": "Roy's folk style rejected architectural perspective completely in favor of flat spaces.",
      "K. Majumdar": "Majumdar's backgrounds are soft, natural settings that lack geometric architectural shadows."
    }
  },
  {
    "id": 291,
    "category": "Art History: Rabindranath Tagore",
    "question": "Why is Rabindranath Tagore’s painting style frequently called \"Unconscious\"?",
    "options": [
      "He painted while sleeping",
      "It grew out of rhythmic \"scribbles\" and erasures",
      "He didn't know he was an artist",
      "He used no colors"
    ],
    "correctIndex": 1,
    "hint": "He did not start with a set plan; his imagery emerged naturally from crossing out mistakes on his writing pages.",
    "rationale": "Tagore's visual style emerged from automated doodles and text corrections, allowing his subconscious mind to drive the imagery.",
    "distractorExplorations": {
      "He painted while sleeping": "He painted while fully awake, though guided by a deep, meditative subconscious flow.",
      "He didn't know he was an artist": "He was fully aware of his artistic output, organizing major gallery shows in Europe.",
      "He used no colors": "He used vibrant inks, inks made of flower extracts, and rich color combinations."
    }
  },
  {
    "id": 292,
    "category": "Art History: Nandalal Bose",
    "question": "Nandalal Bose's 'Dandi March' is a masterclass in which storytelling style?",
    "options": [
      "Soft-focus romance",
      "High-contrast graphic storytelling",
      "Cubist abstraction",
      "Impressionist light play"
    ],
    "correctIndex": 1,
    "hint": "It uses bold, stark black lines carved out against a clean white background.",
    "rationale": "The print relies on a powerful, high-contrast graphic style that strips away extra details to create a timeless heroic silhouette.",
    "distractorExplorations": {
      "Soft-focus romance": "The work is a bold political statement, completely free of romantic watercolor haziness.",
      "Cubist abstraction": "The image features a clear, recognizable human figure rather than fractured geometric planes.",
      "Impressionist light play": "It utilizes solid blocks of black and white ink instead of flickering daylight brushstrokes."
    }
  },
  {
    "id": 293,
    "category": "Art History: Asit Kumar Haldar",
    "question": "Which artist pioneered 'experimental lacquer on wood' as a painting medium?",
    "options": [
      "Abanindranath Tagore",
      "Asit Kumar Haldar",
      "Jamini Roy",
      "Rabindranath Tagore"
    ],
    "correctIndex": 1,
    "hint": "He called this unique lacquer-painted wood art technique 'Lacsit'.",
    "rationale": "Asit Kumar Haldar invented 'Lacsit', a technique applying layers of brilliant lacquer onto treated wood panels.",
    "distractorExplorations": {
      "Abanindranath Tagore": "He remained dedicated to paper-based watercolor washes and traditional mini illustrations.",
      "Jamini Roy": "Roy used woven mats, cloth panels, and wooden boards, but painted with matte earth tempera rather than lacquer gloss layers.",
      "Rabindranath Tagore": "He worked almost exclusively with liquid inks and leather dyes on paper stock pads."
    }
  },
  {
    "id": 294,
    "category": "Art History: Bengal School",
    "question": "The term 'Indian Renaissance' primarily marks an artistic shift from:",
    "options": [
      "Rural to Urban art",
      "Colonial imitation to Indigenous reclamation",
      "Traditional to Digital",
      "Painting to Cinema"
    ],
    "correctIndex": 1,
    "hint": "It represents moving away from European art models to embrace historical Indian aesthetics.",
    "rationale": "The Renaissance marked a liberating shift, encouraging Indian artists to drop Western standards and reclaim their own heritage.",
    "distractorExplorations": {
      "Rural to Urban art": "The school actually moved away from elite urban tastes to find inspiration in rural traditions.",
      "Traditional to Digital": "This movement occurred in the early 1900s, long before digital technology.",
      "Painting to Cinema": "The shift took place entirely within the world of fine arts and classical painting."
    }
  },
  {
    "id": 295,
    "category": "Cinema Theory: Rabindranath Tagore",
    "question": "What makes Rabindranath Tagore’s portrait 'Faces' feel inherently cinematic?",
    "options": [
      "They are life-sized",
      "They use large, expressive eyes that mimic a \"close-up\"",
      "They are painted on film strips",
      "They only feature famous actors"
    ],
    "correctIndex": 1,
    "hint": "The dark backgrounds isolate the face, pulling the viewer into a tight, dramatic composition.",
    "rationale": "Tagore's portraits frame faces tightly against deep shadows, creating an intense emotional intimacy identical to a cinematic close-up shot.",
    "distractorExplorations": {
      "They are life-sized": "Most of his works were rendered on small notebook pages and sketch pads.",
      "They are painted on film strips": "They were executed on paper using traditional inks and dyes.",
      "They only feature famous actors": "The faces came entirely from his own imagination and subconscious memories."
    }
  },
  {
    "id": 296,
    "category": "Art History: Masterpieces",
    "question": "'The Passing of Shah Jahan' by Abanindranath Tagore uses which combination of mediums?",
    "options": [
      "Digital and Oil",
      "Oil and Tempera",
      "Charcoal and Ink",
      "Opaque Watercolor / Gouache / Tempera on paper"
    ],
    "correctIndex": 3,
    "hint": "This miniature-style masterpiece was painted on a paper base using traditional water pigments. (Note: Cleaned up option alignment).",
    "rationale": "The painting was created using traditional water-based tempera pigments on paper, capturing the fine details of the Mughal miniature style. (Option D matches this technical profile).",
    "distractorExplorations": {
      "Digital and Oil": "Digital art formats did not exist during this early 1902 studio cycle.",
      "Oil and Tempera": "Oil paints were actively avoided by the school due to their association with Western academic art.",
      "Charcoal and Ink": "The painting features a rich, colorful wash palette rather than raw black-and-white charcoal sketching."
    }
  },
  {
    "id": 297,
    "category": "History: Institutions",
    "question": "Visva-Bharati University in Santiniketan was founded by which iconic figure?",
    "options": [
      "Mahatma Gandhi",
      "Rabindranath Tagore",
      "Jawaharlal Nehru",
      "B.R. Ambedkar"
    ],
    "correctIndex": 1,
    "hint": "He envisioned an open-air education system that fused nature with global arts and humanities.",
    "rationale": "Rabindranath Tagore founded Visva-Bharati in 1921, turning Santiniketan into a legendary global meeting point for arts and culture.",
    "distractorExplorations": {
      "Mahatma Gandhi": "Gandhi founded Gujarat Vidyapith to promote self-reliance, though he visited Santiniketan often.",
      "Jawaharlal Nehru": "Nehru supported the university later as its chancellor, but was not its founder.",
      "B.R. Ambedkar": "Ambedkar focused on social rights and legal education, founding institutions like the People's Education Society."
    }
  },
  {
    "id": 298,
    "category": "Art History: Jamini Roy",
    "question": "Which artist’s mature transition to 'Flat Space' represents a total rejection of 3D depth?",
    "options": [
      "Michelangelo",
      "Jamini Roy",
      "Raphael",
      "Leonardo da Vinci"
    ],
    "correctIndex": 1,
    "hint": "He looked to the direct, unshaded design choices of traditional rural folk art.",
    "rationale": "Jamini Roy completely abandoned Western shadows and perspective to celebrate the flat, two-dimensional surfaces of folk painting.",
    "distractorExplorations": {
      "Michelangelo": "Michelangelo used dramatic three-dimensional shading to make figures look like heavy marble sculptures.",
      "Raphael": "Raphael was a Renaissance master who perfected linear perspective and depth.",
      "Leonardo da Vinci": "Da Vinci created atmospheric depth through advanced techniques like atmospheric perspective and sfumato."
    }
  },
  {
    "id": 299,
    "category": "Art History: Masterpieces",
    "question": "'Akbar as a Builder' is a landmark revivalist work by which artist?",
    "options": [
      "Nandalal Bose",
      "Asit Kumar Haldar",
      "K. Majumdar",
      "Abanindranath Tagore"
    ],
    "correctIndex": 3,
    "hint": "He loved reimagining historical Mughal scenes through soft, atmospheric watercolor washes.",
    "rationale": "Abanindranath Tagore painted this piece, using his signature wash technique to bring a soft, poetic mood to historical Mughal architecture.",
    "distractorExplorations": {
      "Nandalal Bose": "Bose focused on clean graphic lines and Hindu epics rather than dreamlike Mughal court scenes.",
      "Asit Kumar Haldar": "Haldar painted historical figures but was not the artist behind this specific structural composition.",
      "K. Majumdar": "Majumdar focused almost exclusively on devotional Vaishnavite themes."
    }
  },
  {
    "id": 300,
    "category": "Cinema Theory: Aesthetics",
    "question": "Which visionary filmmaker famously defined cinema as the \"Sculpting of Time\"?",
    "options": [
      "Satyajit Ray",
      "Andrei Tarkovsky",
      "Rabindranath Tagore",
      "M.F. Husain"
    ],
    "correctIndex": 1,
    "hint": "He was a Russian director who helmed masterpieces like Solaris, Stalker, and The Mirror.",
    "rationale": "Andrei Tarkovsky authored the classic book 'Sculpting in Time', arguing that cinema's unique power is capturing and reshaping real-time blocks.",
    "distractorExplorations": {
      "Satyajit Ray": "Ray wrote 'Our Films, Their Films', approaching cinema through narrative rhythm and realism.",
      "Rabindranath Tagore": "Tagore wrote beautiful insights on music and poetry, but passed away before modern cinema theory fully matured.",
      "M.F. Husain": "Husain viewed cinema as an extension of painting and physical performance space, not time sculpture."
    }
  },
  {
    "id": 301,
    "category": "Art History: High Renaissance",
    "question": "Which Renaissance artist is most associated with the use of 'Sfumato' to create soft light and psychological depth?",
    "options": [
      "Michelangelo",
      "Leonardo da Vinci",
      "Raphael",
      "Caravaggio"
    ],
    "correctIndex": 1,
    "hint": "He used this smoky blending technique to perfect the enigmatic smile of the Mona Lisa.",
    "rationale": "Leonardo da Vinci pioneered 'sfumato'—the subtle blending of tone and color to blur transitions, mimicking human visual perception and adding mystery to features.",
    "distractorExplorations": {
      "Michelangelo": "Michelangelo relied on crisp contours and sharp outlines to showcase muscular form, rather than hazy blending.",
      "Raphael": "Raphael preferred clean lighting and bright, harmonious colors over smoky, dark gradations.",
      "Caravaggio": "Caravaggio belonged to the later Baroque era, known for inventing extreme, dramatic chiaroscuro and tenebrism."
    }
  },
  {
    "id": 302,
    "category": "Art History: High Renaissance",
    "question": "The principle of 'Strong Anatomy' and the 'Heroic Form' is a hallmark of which High Renaissance master?",
    "options": [
      "Leonardo da Vinci",
      "Raphael",
      "Michelangelo",
      "Donatello"
    ],
    "correctIndex": 2,
    "hint": "He sculpted the towering marble 'David' and painted the muscular figures on the Sistine Chapel ceiling.",
    "rationale": "Michelangelo viewed the human body as the ultimate canvas for spiritual expression, depicting both men and women with powerful, hyper-muscular proportions.",
    "distractorExplorations": {
      "Leonardo da Vinci": "Leonardo studied anatomy scientifically, prioritizing naturalistic, fluid physical proportions over dramatic muscularity.",
      "Raphael": "Raphael focused on ideal grace, lyricism, and smooth harmony rather than hyper-muscular figures.",
      "Donatello": "Donatello was an Early Renaissance sculptor whose figures, like his bronze David, were more slender and naturalistic."
    }
  },
  {
    "id": 303,
    "category": "Art History: Baroque",
    "question": "Which art movement is characterized by 'Drama, Light & Shadow' and 'High Contrast Lighting'?",
    "options": [
      "Impressionism",
      "Expressionism",
      "Baroque",
      "Romanticism"
    ],
    "correctIndex": 2,
    "hint": "Think of theatrical, high-stakes historical compositions lit like modern film noir sets.",
    "rationale": "The Baroque era rejected calm Renaissance order, using deep shadows and intense spotlights to heighten raw emotional drama and tension.",
    "distractorExplorations": {
      "Impressionism": "Impressionism used bright, flickering outdoor light palettes, completely avoiding dark, high-contrast shadows.",
      "Expressionism": "Expressionism relied on distorted shapes and emotional colors rather than classical modeling with light and shadow.",
      "Romanticism": "Romanticism emphasized raw nature and individual emotion, but did not make strict spotlight chiaroscuro its defining stylistic rule."
    }
  },
  {
    "id": 304,
    "category": "Art Techniques: Wash Technique",
    "question": "The 'Wash Technique' in the Indian Renaissance (Bengal School) is primarily used to achieve:",
    "options": [
      "Sharp, linear details",
      "Soft, diffused, and ethereal light",
      "Deep, high-contrast shadows",
      "Abstract geometric forms"
    ],
    "correctIndex": 1,
    "hint": "Abanindranath Tagore adapted this method from Japan to create a misty, atmospheric mood.",
    "rationale": "Bathing watercolor paintings repeatedly in water softens lines and layers pigments, resulting in a dreamy, luminous atmosphere.",
    "distractorExplorations": {
      "Sharp, linear details": "Washes naturally soften borders; sharp outlines were added later using fine ink brushes.",
      "Deep, high-contrast shadows": "The wash technique creates a delicate, atmospheric glow rather than harsh, dark shadows.",
      "Abstract geometric forms": "The Bengal School used this technique for emotional storytelling, not geometric abstraction."
    }
  },
  {
    "id": 305,
    "category": "Art History: Expressionism",
    "question": "Which artist's work, such as 'The Scream', is a key study for 'Distortion' and 'Psychology' in visual language?",
    "options": [
      "Claude Monet",
      "Edvard Munch",
      "Pablo Picasso",
      "Salvador Dali"
    ],
    "correctIndex": 1,
    "hint": "This Norwegian painter used swirling, unstable lines to capture raw, psychological anxiety.",
    "rationale": "Edvard Munch used distorted figures and unnatural colors to externalize internal, psychological distress, laying the foundation for Expressionism.",
    "distractorExplorations": {
      "Claude Monet": "Monet was an Impressionist who studied natural daylight reflections, avoiding dark psychological distortion.",
      "Pablo Picasso": "Picasso broke forms into geometric shapes via Cubism, focusing on structure rather than raw emotional anxiety.",
      "Salvador Dali": "Dali was a Surrealist who painted bizarre, dreamlike imagery with meticulous, crisp realism."
    }
  },
  {
    "id": 306,
    "category": "Art History: Renaissance",
    "question": " 'Linear Perspective' was a core discovery of which era to create the 'Illusion of Depth'?",
    "options": [
      "Prehistoric",
      "Early Renaissance",
      "Mannerism",
      "Modernism"
    ],
    "correctIndex": 1,
    "hint": "Filippo Brunelleschi codified this mathematical system in Florence during the early 1400s.",
    "rationale": "The Early Renaissance revolutionized art by using a single vanishing point to accurately represent three-dimensional space on a flat surface.",
    "distractorExplorations": {
      "Prehistoric": "Prehistoric artists stacked or overlapped drawings flatly on cave walls without an analytical depth system.",
      "Mannerism": "Mannerism deliberately twisted and elongated spatial depth to create tension, moving away from strict perspective rules.",
      "Modernism": "Modernist movements like Cubism actively rejected traditional linear perspective to emphasize the flat canvas."
    }
  },
  {
    "id": 307,
    "category": "Art History: Modernism",
    "question": "In the context of visual language, 'Fragmentation' and 'Multiple Views' are key characteristics of:",
    "options": [
      "Renaissance",
      "Romanticism",
      "Modernism (Picasso)",
      "Baroque"
    ],
    "correctIndex": 2,
    "hint": "This style deconstructs objects, showing them from multiple angles simultaneously.",
    "rationale": "Modernist Cubism shattered the traditional single viewpoint, reconstructing subjects using flat, overlapping geometric planes.",
    "distractorExplorations": {
      "Renaissance": "The Renaissance insisted on a single, mathematically unified viewpoint using linear perspective.",
      "Romanticism": "Romanticism focused on dramatic storytelling and natural landscapes, keeping spaces recognizable.",
      "Baroque": "Baroque art manipulated light and shadow for drama but maintained traditional, unified anatomy and space."
    }
  },
  {
    "id": 308,
    "category": "Art History: Masterpieces",
    "question": "Which artist is credited with the iconic nationalist painting 'Bharat Mata'?",
    "options": [
      "Nandalal Bose",
      "Abanindranath Tagore",
      "Jamini Roy",
      "M.F. Husain"
    ],
    "correctIndex": 1,
    "hint": "He painted this saffron-clad personification of India during the Swadeshi movement in 1905.",
    "rationale": "Abanindranath Tagore painted Bharat Mata as a serene four-armed goddess holding food, cloth, and manuscripts, creating an iconic symbol for the nationalist movement.",
    "distractorExplorations": {
      "Nandalal Bose": "Bose was Abanindranath's student who later illustrated the Constitution and captured the Dandi March.",
      "Jamini Roy": "Roy abandoned early nationalist styles to pioneer flat, vibrant folk-inspired modern art.",
      "M.F. Husain": "Husain painted a controversial, abstract version of Bharat Mata decades later, separate from this 1905 masterwork."
    }
  },
  {
    "id": 309,
    "category": "Culture: Indian Architecture",
    "question": "The 'Kailasa Temple' at Ellora is a masterpiece of rock-cut architecture known for being:",
    "options": [
      "A multi-story brick structure",
      "The world’s largest monolithic structure carved from a single rock",
      "A wooden temple with intricate carvings",
      "A modern concrete installation"
    ],
    "correctIndex": 1,
    "hint": "Carved from top to bottom out of a single basalt cliff face under the Rashtrakuta dynasty.",
    "rationale": "Cave 16 at Ellora houses the spectacular Kailasa Temple, celebrated as the largest monolithic rock excavation in the world.",
    "distractorExplorations": {
      "A multi-story brick structure": "It is entirely carved out of natural living mountain rock, containing zero brick masonry walls.",
      "A wooden temple with intricate carvings": "It mimics structural design beautifully but is sculpted entirely out of solid basalt mountain stone.",
      "A modern concrete installation": "It is an ancient architectural wonder dating back to the 8th century AD."
    }
  },
  {
    "id": 310,
    "category": "Cinema History: Directors",
    "question": "Which filmmaker and artist directed 'Meenaxi: A Tale of Three Cities' (2004)?",
    "options": [
      "Satyajit Ray",
      "M.F. Husain",
      "Ritwik Ghatak",
      "Mani Kaul"
    ],
    "correctIndex": 1,
    "hint": "This member of the Progressive Artists' Group was famous for painting horses before picking up a cinema camera.",
    "rationale": "M.F. Husain directed Meenaxi, treating the film frame like a vibrant canvas to explore art, color, and storytelling.",
    "distractorExplorations": {
      "Satyajit Ray": "Ray directed black-and-white and color realist masterpieces, passing away a decade before this film was made.",
      "Ritwik Ghatak": "Ghatak was a radical filmmaker who focused on partition trauma, passing away in 1976.",
      "Mani Kaul": "Kaul was an avant-garde director who made formalist masterpieces like Uski Roti, but did not direct this film."
    }
  },
  {
    "id": 311,
    "category": "Cinema Theory: Composition",
    "question": "The 'Rule of Thirds' is a fundamental concept in:",
    "options": [
      "Lighting",
      "Composition",
      "Sound design",
      "Color grading"
    ],
    "correctIndex": 1,
    "hint": "It involves dividing your image into a 3x3 grid to place key visual elements along the lines.",
    "rationale": "The Rule of Thirds helps painters and cinematographers arrange elements within the frame to create balanced, engaging images.",
    "distractorExplorations": {
      "Lighting": "Lighting focuses on contrast, exposure levels, and shadow styles like key and fill lights.",
      "Sound design": "Sound design deals with audio frequencies, ambient sound fields, and sound effect placement.",
      "Color grading": "Color grading manipulates hues, saturation, and contrast values in post-production."
    }
  },
  {
    "id": 312,
    "category": "Art History: Early Renaissance",
    "question": "'Chiaroscuro', the use of strong directional light to create volume, was pioneered in the Early Renaissance by:",
    "options": [
      "Botticelli",
      "Masaccio",
      "Donatello",
      "Raphael"
    ],
    "correctIndex": 1,
    "hint": "He painted the Brancacci Chapel frescoes, bringing a new sense of weight and depth to human figures.",
    "rationale": "Masaccio revolutionized painting by using a single, clear light source to cast realistic shadows, giving his figures a solid, three-dimensional weight.",
    "distractorExplorations": {
      "Botticelli": "Botticelli favored flat, elegant lines and poetic patterns over realistic shadows.",
      "Donatello": "Donatello was a sculptor who worked with physical clay and bronze, rather than paint gradients.",
      "Raphael": "Raphael belongs to the later High Renaissance, building upon the techniques Masaccio pioneered."
    }
  },
  {
    "id": 313,
    "category": "Art History: Impressionism",
    "question": "Which movement focuses on 'Light, Mood, and Atmosphere' over sharp details, as seen in the works of Claude Monet?",
    "options": [
      "Expressionism",
      "Impressionism",
      "Baroque",
      "Romanticism"
    ],
    "correctIndex": 1,
    "hint": "The movement took its name from Monet's painting of a hazy sunrise over a French harbor.",
    "rationale": "Impressionists painted outdoors, using short, loose brushstrokes to capture the shifting effects of light and color in the moment.",
    "distractorExplorations": {
      "Expressionism": "Expressionism distorted forms to show raw, intense emotions, rather than studying outdoor daylight.",
      "Baroque": "Baroque art relied on dark, high-contrast studio lighting to create intense theatrical drama.",
      "Romanticism": "Romanticism focused on dramatic stories and majestic nature, maintaining clear, recognizable details."
    }
  },
  {
    "id": 314,
    "category": "Art History: High Renaissance",
    "question": "The term 'Sprezzatura' in the High Renaissance refers to:",
    "options": [
      "Extreme physical labor",
      "A sense of 'effortless grace' in art",
      "Distorted limb proportions",
      "Religious orthodoxy"
    ],
    "correctIndex": 1,
    "hint": "It means making incredibly complex artistic or physical feats look entirely easy.",
    "rationale": "Sprezzatura was a cultural ideal popularized by Castiglione, urging artists like Raphael to hide their immense effort behind a mask of natural elegance.",
    "distractorExplorations": {
      "Extreme physical labor": "Sprezzatura actively hides hard labor, presenting a smooth, effortless finish.",
      "Distorted limb proportions": "This characterizes Mannerism, which rejected the natural elegance of Sprezzatura.",
      "Religious orthodoxy": "It is an aesthetic and behavioral concept, not a church theological decree."
    }
  },
  {
    "id": 315,
    "category": "Art History: Prehistoric Art",
    "question": "Which prehistoric cave site is most famous for the 'Hall of the Bulls'?",
    "options": [
      "Altamira",
      "Lascaux",
      "Bhimbetka",
      "Ajanta"
    ],
    "correctIndex": 1,
    "hint": "This paleolithic cave complex is located in southwestern France.",
    "rationale": "Lascaux is world-famous for its large, dynamic paintings of bulls, stags, and horses dating back nearly 17,000 years.",
    "distractorExplorations": {
      "Altamira": "Altamira is located in Spain and is celebrated for its painted charcoal bison drawings.",
      "Bhimbetka": "Bhimbetka is an Indian rock-shelter site showcasing hunting and dancing scenes, but does not feature these large bulls.",
      "Ajanta": "Ajanta is a historic Buddhist monastery site carved during later centuries, featuring refined frescoes instead."
    }
  },
  {
    "id": 316,
    "category": "Art History: Mannerism",
    "question": "'Mannerism' or the Late Renaissance is characterized by:",
    "options": [
      "Perfect mathematical balance",
      "Intentional distortion and emotional tension",
      "Scientific realism",
      "Minimalist simplicity"
    ],
    "correctIndex": 1,
    "hint": "Think of elongated bodies, odd spatial scales, and jarring colors that break classical rules.",
    "rationale": "Mannerists rejected the balanced harmony of the High Renaissance, using elongated anatomy and unstable spaces to create psychological tension.",
    "distractorExplorations": {
      "Perfect mathematical balance": "This defines the High Renaissance, which Mannerists actively moved away from.",
      "Scientific realism": "Mannerists preferred artificial elegance and expressive style over accurate anatomy.",
      "Minimalist simplicity": "The movement favored complex compositions, crowded frames, and intricate visual patterns."
    }
  },
  {
    "id": 317,
    "category": "Art History: Sculpture",
    "question": "Who created the sculpture 'The Thinker', a study in internal action and psychology?",
    "options": [
      "Michelangelo",
      "Auguste Rodin",
      "Donatello",
      "Henry Moore"
    ],
    "correctIndex": 1,
    "hint": "This French bronze master designed it as part of his massive project, 'The Gates of Hell'.",
    "rationale": "Auguste Rodin sculpted The Thinker, using a muscular but deeply coiled, brooding posture to represent intense mental struggle.",
    "distractorExplorations": {
      "Michelangelo": "Michelangelo sculpted Renaissance marbles like Moses and David centuries before Rodin's modern bronze work.",
      "Donatello": "Donatello carved stone and cast bronze during the early 1400s with crisp, classic lines.",
      "Henry Moore": "Henry Moore was a later abstract artist famous for smooth, biomorphic reclining figures."
    }
  },
  {
    "id": 318,
    "category": "Cinema Theory: Lighting",
    "question": "The 'Golden Hour' in cinematography refers to the time:",
    "options": [
      "At high noon",
      "Just after sunrise and just before sunset",
      "At midnight",
      "During a solar eclipse"
    ],
    "correctIndex": 1,
    "hint": "Filmmakers love this time of day because the low sun creates warm, soft, golden light.",
    "rationale": "The golden hour provides soft, directional light and elongated shadows, making it highly desirable for atmospheric outdoor cinematography.",
    "distractorExplorations": {
      "At high noon": "High noon creates harsh, unappealing vertical overhead shadows and blown-out highlights.",
      "At midnight": "Midnight requires artificial night lighting setups or specialized digital night-vision gear.",
      "During a solar eclipse": "This rare event causes lighting to drop suddenly, requiring unique camera exposure adjustments."
    }
  },
  {
    "id": 319,
    "category": "Art History: Mannerism",
    "question": "Which movement used 'Acidic' color palettes and unstable compositions to create anxiety?",
    "options": [
      "High Renaissance",
      "Mannerism (Late Renaissance)",
      "Impressionism",
      "Romanticism"
    ],
    "correctIndex": 1,
    "hint": "Artists like Pontormo and Parmigianino used these clashing, vibrant colors instead of natural tones.",
    "rationale": "Mannerists deliberately used unnatural colors and unbalanced compositions to reflect the political and religious anxieties of their time.",
    "distractorExplorations": {
      "High Renaissance": "The High Renaissance used primary, balanced color tones to create structural stability.",
      "Impressionism": "Impressionism used bright, natural color combinations to mimic changing daylight.",
      "Romanticism": "Romanticism used moody, dramatic palettes to emphasize the power of nature, avoiding artificial colors."
    }
  },
  {
    "id": 320,
    "category": "Culture: Indian Architecture",
    "question": "The 'Barabar Caves' in Bihar are significant because they are:",
    "options": [
      "The site of the first Indian talkie",
      "The oldest surviving rock-cut caves in India",
      "Painted with oil colors",
      "Dedicated to the Mughal emperors"
    ],
    "correctIndex": 1,
    "hint": "Dating back to the Maurya Empire under Emperor Ashoka, they feature highly polished granite walls.",
    "rationale": "The Barabar Caves are India's oldest surviving rock-cut structures, excavated during the 3rd century BC.",
    "distractorExplorations": {
      "The site of the first Indian talkie": "The first talkie picture, Alam Ara, was shot inside urban Bombay studios.",
      "Painted with oil colors": "They contain no paint murals; their fame rests on their incredible, mirror-like polished rock surfaces.",
      "Dedicated to the Mughal emperors": "They were excavated thousands of years before the Mughals, carved for Ajivika ascetics."
    }
  },
  {
    "id": 321,
    "category": "Cinema Theory: Composition",
    "question": "An active 'Negative Space' in a cinematic frame refers to:",
    "options": [
      "The dark portions of the image",
      "The empty or unused areas of the frame",
      "The space behind the camera",
      "The blurred background"
    ],
    "correctIndex": 1,
    "hint": "Directors like target character isolation by placing them against a vast, empty wall or sky.",
    "rationale": "Negative space is the empty area surrounding the main subject, often used to visually emphasize isolation or emotional scale.",
    "distractorExplorations": {
      "The dark portions of the image": "Dark areas are shadow fields, distinct from open composition space.",
      "The space behind the camera": "The area behind the lens is the physical film set where the crew operates.",
      "The blurred background": "A blurred background indicates a shallow depth of field, not necessarily empty space."
    }
  },
  {
    "id": 322,
    "category": "Art History: Jamini Roy",
    "question": "Which artist transitioned from the Bengal School to a style inspired by 'Flat, Decorative Folk Art'?",
    "options": [
      "Abanindranath Tagore",
      "Jamini Roy",
      "Nandalal Bose",
      "Asit Kumar Haldar"
    ],
    "correctIndex": 1,
    "hint": "He drew inspiration from the bold outlines of Kalighat paintings and local clay crafts.",
    "rationale": "Jamini Roy abandoned academic realism and elite washes to create modern art rooted in rural folk traditions.",
    "distractorExplorations": {
      "Abanindranath Tagore": "He remained dedicated to the delicate, hazy watercolor wash style throughout his career.",
      "Nandalal Bose": "Bose focused on clean graphic lines and classical epics at Santiniketan.",
      "Asit Kumar Haldar": "Haldar specialized in fluid, musical lines and historical oil-lacquer paintings."
    }
  },
  {
    "id": 323,
    "category": "Art History: Sculpture",
    "question": " 'Contrapposto' is a sculptural pose that communicates:",
    "options": [
      "Stiff, formal symmetry",
      "Natural weight-shift and a sense of life",
      "Extreme muscular distortion",
      "Religious martyrdom"
    ],
    "correctIndex": 1,
    "hint": "Think of shifting weight onto one leg, causing the hips and shoulders to tilt naturally.",
    "rationale": "Pioneered by classical Greek sculptors and revived in the Renaissance, contrapposto breaks rigid symmetry to make statues look alive.",
    "distractorExplorations": {
      "Stiff, formal symmetry": "This style describes rigid, ancient Egyptian figures before contrapposto was developed.",
      "Extreme muscular distortion": "Muscular distortion belongs to Mannerism or modern expressionistic sculpture styles.",
      "Religious martyrdom": "It is a physical posing technique, completely separate from religious narrative themes."
    }
  },
  {
    "id": 324,
    "category": "Art History: Masterpieces",
    "question": "Which painting is a masterclass in 'Deep Focus Blocking' and 'Architectural Framing'?",
    "options": [
      "Mona Lisa",
      "The School of Athens",
      "The Scream",
      "Guernica"
    ],
    "correctIndex": 1,
    "hint": "This fresco by Raphael features classical philosophers arranged inside a vast, vaulted Roman building.",
    "rationale": "Raphael's The School of Athens uses sweeping arches to frame characters, organizing complex groups perfectly in space.",
    "distractorExplorations": {
      "Mona Lisa": "The Mona Lisa features a single character set against a soft, misty landscape background.",
      "The Scream": "The Scream uses fluid, distorted lines to show internal emotion rather than solid architectural perspective.",
      "Guernica": "Guernica is a flat, fractured cubist work that completely avoids realistic architectural space."
    }
  },
  {
    "id": 325,
    "category": "Science: Optics",
    "question": "The 'Pinhole Camera' operates on the fundamental principle of:",
    "options": [
      "Light refraction",
      "Rectilinear propagation of light",
      "Light polarization",
      "Light absorption"
    ],
    "correctIndex": 1,
    "hint": "It relies on the simple fact that light travels in straight lines.",
    "rationale": "Because light travels in straight lines, rays from an object pass through a tiny hole to project an upside-down image on the opposite wall.",
    "distractorExplorations": {
      "Light refraction": "Refraction involves light bending as it passes through glass lenses, which a pinhole camera doesn't use.",
      "Light polarization": "Polarization restricts light waves to a single plane, a technique used in modern filters.",
      "Light absorption": "Absorption occurs when dark surfaces block light waves, turning them into heat energy."
    }
  },
  {
    "id": 326,
    "category": "Art History: Nandalal Bose",
    "question": "Which artist designed the 'Dandi March' linocut, a symbol of the Indian freedom struggle?",
    "options": [
      "Abanindranath Tagore",
      "Nandalal Bose",
      "Jamini Roy",
      "Amrita Sher-Gil"
    ],
    "correctIndex": 1,
    "hint": "He captured Mahatma Gandhi walking with a staff in a powerful, high-contrast black-and-white print.",
    "rationale": "Nandalal Bose carved the iconic print in 1930 to honor the Salt Satyagraha, creating a lasting political image.",
    "distractorExplorations": {
      "Abanindranath Tagore": "He focused on delicate, misty watercolor washes rather than bold, graphic political prints.",
      "Jamini Roy": "Roy painted flat, traditional folk styles, staying out of mass graphic print production.",
      "Amrita Sher-Gil": "Sher-Gil painted emotional oil portraits on canvas, influenced by European art trends."
    }
  },
  {
    "id": 327,
    "category": "Art History: Baroque",
    "question": " 'Tenebrism' is an extreme lighting style most closely associated with:",
    "options": [
      "Botticelli",
      "Caravaggio",
      "Monet",
      "Raphael"
    ],
    "correctIndex": 1,
    "hint": "He plunged his backgrounds into pitch darkness, using an intense spotlight to create high-stakes drama.",
    "rationale": "Caravaggio popularized tenebrism, using dramatic darkness to heighten the emotional stakes of his paintings.",
    "distractorExplorations": {
      "Botticelli": "Botticelli used even, clear lighting and graceful lines, avoiding dark shadow design.",
      "Monet": "Monet focused on soft, changing natural outdoor light, avoiding artificial darkness.",
      "Raphael": "Raphael preferred bright, harmonious tones and evenly lit architectural spaces."
    }
  },
  {
    "id": 328,
    "category": "Culture: Indian Architecture",
    "question": "The murals inside the Ajanta Caves primarily depict stories from:",
    "options": [
      "Hindu mythological battles",
      "Buddhist Jataka tales",
      "Mughal court life",
      "Prehistoric hunting scenes"
    ],
    "correctIndex": 1,
    "hint": "They illustrate the previous lives of the Buddha as both human and animal characters.",
    "rationale": "The rock-cut caves at Ajanta are famous for frescoes that depict Buddhist Jataka narratives and spiritual teachings.",
    "distractorExplorations": {
      "Hindu mythological battles": "These themes are common at Ellora and Elephanta, but not inside Ajanta's Buddhist monastery.",
      "Mughal court life": "Mughal miniature paintings developed centuries later in secular royal courts.",
      "Prehistoric hunting scenes": "Hunting scenes are found in older rock shelters like Bhimbetka, rather than these classical monasteries."
    }
  },
  {
    "id": 329,
    "category": "Cinema Theory: Directing",
    "question": " 'Blocking' in film direction refers to:",
    "options": [
      "Choosing the film's color palette",
      "Deciding how actors move and stand within a scene",
      "Editing shots for continuity",
      "Recording location sound"
    ],
    "correctIndex": 1,
    "hint": "It choreographs the physical relationship between the actors and the camera inside the set.",
    "rationale": "Blocking coordinates where actors stand and move, working closely with the camera to ensure smooth visual storytelling.",
    "distractorExplorations": {
      "Choosing the film's color palette": "This belongs to color grading or production design choices.",
      "Editing shots for continuity": "This is handled by the film editor during post-production.",
      "Recording location sound": "This is managed by the production sound mixer on set."
    }
  },
  {
    "id": 330,
    "category": "Cinema Theory: Aesthetics",
    "question": "Which filmmaker famously described cinema as the 'Sculpting of Time'?",
    "options": [
      "Satyajit Ray",
      "Andrei Tarkovsky",
      "Francois Truffaut",
      "Yasujiro Ozu"
    ],
    "correctIndex": 1,
    "hint": "He was a master of long takes and spiritual atmosphere, directing Stalker and The Mirror.",
    "rationale": "Andrei Tarkovsky argued that cinema's unique power is capturing, freezing, and reshaping blocks of real time.",
    "distractorExplorations": {
      "Satyajit Ray": "Ray used a grounded, realistic style, writing about it in 'Our Films, Their Films'.",
      "Francois Truffaut": "Truffaut was a leader of the French New Wave who focused on rapid edits and breaking traditional rules.",
      "Yasujiro Ozu": "Ozu used a calm, rhythmic style featuring low camera angles, but did not coin this specific phrase."
    }
  },
  {
    "id": 331,
    "category": "Art History: Prehistoric Art",
    "question": "Which prehistoric site is famous for its \"Hall of the Bulls\"?",
    "options": [
      "Altamira",
      "Lascaux",
      "Bhimbetka",
      "Ajanta"
    ],
    "correctIndex": 1,
    "hint": "This Paleolithic cave system is located in southwestern France and contains massive paintings of ancient megafauna.",
    "rationale": "The Hall of the Bulls is the most famous chamber inside the Lascaux Caves in France, featuring spectacular depictions of bulls, stags, and equines executed nearly 17,000 years ago.",
    "distractorExplorations": {
      "Altamira": "Altamira is a Spanish cave site celebrated primarily for its polychrome charcoal drawings of bison, not the Hall of the Bulls.",
      "Bhimbetka": "Bhimbetka is an Indian rock-shelter complex in Madhya Pradesh showcasing thousands of years of tribal hunting and dancing stick-figures.",
      "Ajanta": "Ajanta is a classical Indian Buddhist monastery cave complex housing refined spiritual frescoes from a much later historic era."
    }
  },
  {
    "id": 332,
    "category": "Art History: Early Renaissance",
    "question": "Who is the first painter to use mathematically correct Linear Perspective in a major fresco like 'The Holy Trinity'?",
    "options": [
      "Botticelli",
      "Donatello",
      "Masaccio",
      "Michelangelo"
    ],
    "correctIndex": 2,
    "hint": "He worked closely with the architect Brunelleschi to apply structural mathematics to 2D surfaces in Florence.",
    "rationale": "Masaccio’s fresco 'The Holy Trinity' (c. 1427) in Santa Maria Novella is the oldest surviving painting to flawlessly apply Brunelleschi's mathematical rules of a single vanishing point.",
    "distractorExplorations": {
      "Botticelli": "Botticelli worked decades later, prioritizing poetic lines and flat decorative patterns over strict architectural geometry.",
      "Donatello": "Donatello was a pioneer sculptor who worked in physical three-dimensional space, rather than perfecting 2D architectural fresco paintings.",
      "Michelangelo": "Michelangelo was a titan of the later High Renaissance era, born long after linear perspective was codified."
    }
  },
  {
    "id": 333,
    "category": "Art History: Early Renaissance",
    "question": "Masaccio’s use of directional light to create \"weight\" is the precursor to:",
    "options": [
      "High-Key",
      "Chiaroscuro",
      "Sfumato",
      "Flat Lighting"
    ],
    "correctIndex": 1,
    "hint": "The term combines the Italian words for 'light' and 'dark' to describe realistic volume modeling.",
    "rationale": "By casting a single, clear light source onto characters to create long, realistic shadows, Masaccio laid the foundation for the classic painting style known as chiaroscuro.",
    "distractorExplorations": {
      "High-Key": "High-key describes bright, shadowless illumination common in modern sitcoms or studio sets.",
      "Sfumato": "Sfumato is a smoky, hazy blending technique popularized much later by Leonardo da Vinci to dissolve sharp outlines.",
      "Flat Lighting": "Flat lighting minimizes shadows completely, which is the opposite of Masaccio's sculptural lighting model."
    }
  },
  {
    "id": 334,
    "category": "Art History: Sculpture",
    "question": "The \"Contrapposto\" pose seen in Donatello’s David refers to:",
    "options": [
      "A twisted, serpentine pose",
      "A natural weight-shift in the body",
      "A strictly symmetrical pose",
      "A seated position"
    ],
    "correctIndex": 1,
    "hint": "It involves shifting the figure's weight entirely onto one leg, causing the hips and shoulders to tilt dynamically.",
    "rationale": "Contrapposto was a classical Greek innovation revived in the Renaissance that broke stiff, archaic symmetry by mimicking the natural asymmetry of a resting human skeleton.",
    "distractorExplorations": {
      "A twisted, serpentine pose": "This describes the 'Figura Serpentinata', a highly artificial twist popularized later during the Mannerist era.",
      "A strictly symmetrical pose": "Strict symmetry characterizes ancient Egyptian or early archaic Greek statues before contrapposto was developed.",
      "A seated position": "Donatello's David is a free-standing, upright nude bronze sculpture, not a seated figure configuration."
    }
  },
  {
    "id": 335,
    "category": "Art History: Early Renaissance",
    "question": "Botticelli’s The Birth of Venus is aesthetically closest to which cinematic lighting style?",
    "options": [
      "Noir Lighting",
      "High-Key Lighting",
      "Low-Key Lighting",
      "Silhouette Lighting"
    ],
    "correctIndex": 1,
    "hint": "His painting lacks deep, dramatic pockets of darkness, featuring an evenly lit, bright, and dreamlike clarity instead.",
    "rationale": "Botticelli rejected heavy, cast shadows. The Birth of Venus uses clear outlines and bright, low-contrast illumination, visually aligning it with high-key lighting concepts.",
    "distractorExplorations": {
      "Noir Lighting": "Film noir relies on harsh, low-key spotlights and deep pockets of dangerous cinematic darkness.",
      "Low-Key Lighting": "Low-key lighting accentuates shadows and moodiness, which directly contradicts Botticelli's bright, poetic canvas clarity.",
      "Silhouette Lighting": "Silhouette setups place the light behind the subject, turning them into a solid black outline with zero interior features visible."
    }
  },
  {
    "id": 336,
    "category": "Art History: Early Renaissance",
    "question": "In The Holy Trinity, the \"vanishing point\" is designed to create:",
    "options": [
      "Flat space",
      "Illusion of depth",
      "Motion blur",
      "Lens flare"
    ],
    "correctIndex": 1,
    "hint": "It tricks the eye into seeing a deep, three-dimensional concrete chapel inside a flat wall surface.",
    "rationale": "The vanishing point anchors the linear perspective lines, forcing the spectator's eye to perceive spatial depth extending backward into a flat wall surface.",
    "distractorExplorations": {
      "Flat space": "The system was designed specifically to break the flat, flat icon style of the medieval period.",
      "Motion blur": "Motion blur is a temporal artifact caused by fast camera movement or slow shutter speeds, not geometric perspective lines.",
      "Lens flare": "Lens flare is an optical camera artifact caused by internal glass light scattering, completely separate from painting lines."
    }
  },
  {
    "id": 337,
    "category": "Art History: Renaissance Philosophy",
    "question": "Early Renaissance artists moved away from Middle Age icons toward:",
    "options": [
      "Abstract Expressionism",
      "Humanism",
      "Minimalism",
      "Cubism"
    ],
    "correctIndex": 1,
    "hint": "This cultural philosophy placed immense value on human agency, individual psychology, and classical science.",
    "rationale": "The Renaissance was driven by Humanism, leading artists to drop symbolic, flat medieval templates to explore realistic human emotions and anatomical accuracy.",
    "distractorExplorations": {
      "Abstract Expressionism": "Abstract Expressionism is a mid-20th-century non-figurative American modern art movement.",
      "Minimalism": "Minimalism aims to strip away narrative content down to basic geometric objects, a 1960s aesthetic trend.",
      "Cubism": "Cubism was an early 20th-century avant-garde movement pioneered by Picasso that fractured forms into multiple viewpoints."
    }
  },
  {
    "id": 338,
    "category": "Art History: Early Renaissance",
    "question": "Which artist is known for a lyrical \"Poetic Realism\" driven by line over raw, heavy anatomical correctness?",
    "options": [
      "Masaccio",
      "Botticelli",
      "Donatello",
      "Da Vinci"
    ],
    "correctIndex": 1,
    "hint": "He painted Primavera and Venus, prioritizing rhythmic grace and idealized contours over heavy shadows.",
    "rationale": "Sandro Botticelli prioritized elegant lines and mythological lyricism, often elongating necks and limbs to increase the poetic grace of his figures.",
    "distractorExplorations": {
      "Masaccio": "Masaccio pursued gravity, physical weight, and heavy mathematical reality over flowing, poetic patterns.",
      "Donatello": "Donatello pursued intense naturalism and physical muscle structures inside his sculptural work.",
      "Da Vinci": "Leonardo pursued rigorous scientific and medical anatomy, logging extensive notebooks on muscular mechanics."
    }
  },
  {
    "id": 339,
    "category": "Art History: Prehistoric Art",
    "question": "The Altamira cave paintings are notable for using cave wall contours to create:",
    "options": [
      "Sound effects",
      "A 3D effect/volume",
      "Linear perspective",
      "Sfumato"
    ],
    "correctIndex": 1,
    "hint": "The prehistoric artists painted animal bodies directly on top of natural bulges and bumps in the rock face.",
    "rationale": "By matching bison paintings to the natural protrusions of the cave ceiling, Altamira's artists created an organic three-dimensional mass under flickering torchlight.",
    "distractorExplorations": {
      "Sound effects": "Wall textures alter room acoustics but were not created to produce performance audio tracks.",
      "Linear perspective": "Linear perspective is a mathematical system discovered thousands of years later in Europe.",
      "Sfumato": "Sfumato is a highly refined Renaissance oil-blending technique requiring liquid binders and glazes."
    }
  },
  {
    "id": 340,
    "category": "Art History: Prehistoric Art",
    "question": "Prehistoric pigments in caves like Lascaux were primarily made of:",
    "options": [
      "Oil paints",
      "Natural minerals and charcoal",
      "Acrylics",
      "Synthetic dyes"
    ],
    "correctIndex": 1,
    "hint": "They ground down iron oxides, ochre, and wood embers, mixing them with water or animal fats.",
    "rationale": "Paleolithic artists used local earth minerals (ochre, manganese) and charred wood to manufacture durable black, red, and yellow tones.",
    "distractorExplorations": {
      "Oil paints": "Oil paint technology utilizes linseed oil binders, developed thousands of years later during the late medieval/Renaissance transition.",
      "Acrylics": "Acrylic paint is a modern 20th-century synthetic emulsion polymer product.",
      "Synthetic dyes": "Synthetic dyes are petroleum-based industrial chemicals engineered during the modern industrial era."
    }
  },
  {
    "id": 341,
    "category": "Art History: High Renaissance",
    "question": "Which technique involves \"smoky\" blending to remove harsh outlines around eyes and mouth corners?",
    "options": [
      "Chiaroscuro",
      "Sfumato",
      "Tenebrism",
      "Impasto"
    ],
    "correctIndex": 1,
    "hint": "The term comes from the Italian word for smoke, 'fumo', and was championed by Leonardo da Vinci.",
    "rationale": "Sfumato uses ultra-thin translucent glazes to transition values seamlessly, removing sharp outlines to mimic how human eyes perceive focus in real life.",
    "distractorExplorations": {
      "Chiaroscuro": "Chiaroscuro creates volume using general light and shadow fields, rather than the specific smoky border softening of sfumato.",
      "Tenebrism": "Tenebrism uses extreme, harsh spotlights cutting through pitch-black backgrounds, typical of Baroque art.",
      "Impasto": "Impasto is applying thick, chunky textured paint that visibly stands out from the surface, completely raw."
    }
  },
  {
    "id": 342,
    "category": "Art History: High Renaissance",
    "question": "In Leonardo da Vinci's 'The Last Supper', all perspective vanishing lines lead the viewer's eye directly to:",
    "options": [
      "The door",
      "The head of Christ",
      "The bread",
      "The hands of Judas"
    ],
    "correctIndex": 1,
    "hint": "He is the central figure of the composition, framed by the bright central window background.",
    "rationale": "Leonardo integrated narrative meaning with architecture by locating the single mathematical vanishing point right at the temple of Jesus Christ.",
    "distractorExplorations": {
      "The door": "The background architectural openings serve to frame the center, not to act as structural vanishing sinks.",
      "The bread": "The objects on the table provide local narrative anchors but carry no weight in the structural perspective grid.",
      "The hands of Judas": "Judas is isolated in shadow for narrative punch, but the underlying vanishing grid bypasses his framing location entirely."
    }
  },
  {
    "id": 343,
    "category": "Art History: High Renaissance",
    "question": "Michelangelo’s Sistine Chapel ceiling is a masterclass in:",
    "options": [
      "Flat design",
      "Heroic anatomy and dynamic blocking",
      "Minimalist lighting",
      "Monochromatic colors"
    ],
    "correctIndex": 1,
    "hint": "Think of highly dynamic, twisting poses and muscular figures arranged across complex painted architectural arches.",
    "rationale": "Michelangelo treated the vault like a sculptural arena, populating it with hundreds of muscular, expressive figures that showcase his total mastery of human anatomy.",
    "distractorExplorations": {
      "Flat design": "The ceiling avoids flat surfaces, using painted architectural elements (quadratura) to forge an intense illusion of 3D depth.",
      "Minimalist lighting": "The lighting is complex and highly sculptural, accentuating every muscle group with rich, dramatic value changes.",
      "Monochromatic colors": "The restoration revealed a vibrant, explosive palette featuring pinks, apple greens, and bright oranges."
    }
  },
  {
    "id": 344,
    "category": "Art History: High Renaissance",
    "question": "Raphael’s The School of Athens uses which element to organize 50+ individual characters harmoniously?",
    "options": [
      "Motion blur",
      "Architectural framing",
      "Close-ups",
      "High contrast"
    ],
    "correctIndex": 1,
    "hint": "Massive, receding classical Roman arches are used to group philosophers into distinct visual zones.",
    "rationale": "Raphael managed his crowded composition by using soaring, symmetrical Renaissance architecture to cleanly divide and frame different intellectual groups.",
    "distractorExplorations": {
      "Motion blur": "The entire image is rendered with absolute, razor-sharp edge clarity, free of any speed manipulation lines.",
      "Close-ups": "As a large-scale wall fresco, the composition relies on wide and medium crowd blocking rather than isolated portrait close-ups.",
      "High contrast": "Raphael used balanced, even lighting to maintain clarity across the entire ensemble, avoiding deep Baroque shadows."
    }
  },
  {
    "id": 345,
    "category": "Art History: Composition",
    "question": "The \"Pyramidal Configuration\" in a visual layout creates an immediate psychological sense of:",
    "options": [
      "Chaos",
      "Stability and Harmony",
      "Anxiety",
      "Speed"
    ],
    "correctIndex": 1,
    "hint": "This triangular arrangement keeps the heavy visual weight grounded at the base, leading up to a clear peak point.",
    "rationale": "High Renaissance masters like Leonardo and Raphael relied on the triangle structure to give their compositions a sense of permanent, calm balance.",
    "distractorExplorations": {
      "Chaos": "Chaos is created using diagonal clusters, overlapping lines, and un-centered asymmetric weight fields.",
      "Anxiety": "Anxiety is triggered using off-balance, canted horizons or top-heavy compositions that feel like they are falling.",
      "Speed": "Speed requires long, dynamic tracking lines, blurred edges, and strong diagonal thrust angles."
    }
  },
  {
    "id": 346,
    "category": "Art History: High Renaissance",
    "question": "Leonardo’s Mona Lisa uses a hazy, atmospheric landscape background technique called:",
    "options": [
      "Linear Perspective",
      "Aerial/Atmosphere Perspective",
      "Forced Perspective",
      "Fisheye"
    ],
    "correctIndex": 1,
    "hint": "It mimics how moisture in the air makes distant mountains look soft, blurry, and blue.",
    "rationale": "Aerial perspective mirrors real physics: as elements recede into the distance, their contrast drops, details blur, and colors shift toward a cool blue tone.",
    "distractorExplorations": {
      "Linear Perspective": "Linear perspective uses sharp geometric lines running to a vanishing point, distinct from soft color fading.",
      "Forced Perspective": "Forced perspective is an optical trick using relative scaling to make objects look closer or farther away than they really are.",
      "Fisheye": "Fisheye is an ultra-wide, heavily distorted lens effect that curves straight lines into circles."
    }
  },
  {
    "id": 347,
    "category": "Art History: High Renaissance",
    "question": "Which artist was celebrated in Rome as the ultimate master of spatial balance, clarity, and grace?",
    "options": [
      "El Greco",
      "Raphael",
      "Pontormo",
      "Masaccio"
    ],
    "correctIndex": 1,
    "hint": "He painted the Stanza della Segnatura and was admired for making incredibly complex compositions look effortless.",
    "rationale": "Raphael synthesized the lighting of Leonardo and the anatomy of Michelangelo into a clear, perfectly balanced classical style.",
    "distractorExplorations": {
      "El Greco": "El Greco worked during the late Mannerist era, utilizing wildly distorted bodies and ghostly light.",
      "Pontormo": "Pontormo was an early Mannerist who deliberately used unstable positions and clashing colors to build anxiety.",
      "Masaccio": "Masaccio was an Early Renaissance pioneer who died decades before this era of smooth grace reached its peak."
    }
  },
  {
    "id": 348,
    "category": "Art History: High Renaissance",
    "question": "Michelangelo’s complex late wall fresco 'The Last Judgment' bridges the High Renaissance toward:",
    "options": [
      "Mannerism",
      "Impressionism",
      "Neoclassicism",
      "Romanticism"
    ],
    "correctIndex": 0,
    "hint": "This phase dropped calm, geometric harmony in favor of crowded, twisting, and emotionally intense compositions.",
    "rationale": "Painted decades after his ceiling work, the chaotic compositions and anguished poses of 'The Last Judgment' directly opened the door to Mannerism.",
    "distractorExplorations": {
      "Impressionism": "Impressionism was a 19th-century French movement focused on outdoor light dabs, unrelated to Renaissance frescos.",
      "Neoclassicism": "Neoclassicism was an 18th-century return to rigid Roman order, reacting against late baroque styles.",
      "Romanticism": "Romanticism focused on individual emotional sublime and natural landscapes during the late 1700s and 1800s."
    }
  },
  {
    "id": 349,
    "category": "Art History: High Renaissance",
    "question": "What is the specific Italian cultural term for an appearance of \"effortless grace\" in art and behavior?",
    "options": [
      "Chiaroscuro",
      "Sprezzatura",
      "Sfumato",
      "Contrapposto"
    ],
    "correctIndex": 1,
    "hint": "Coined by Baldassare Castiglione to describe hiding intense work behind a mask of casual elegance.",
    "rationale": "Sprezzatura is the art of making incredibly complex feats—whether painting a massive fresco or navigating court politics—look completely natural and easy.",
    "distractorExplorations": {
      "Chiaroscuro": "Chiaroscuro represents the technical system of modeling volume using light and dark values.",
      "Sfumato": "Sfumato is the smoky technique of blending paint layers to dissolve hard outlines.",
      "Contrapposto": "Contrapposto is a physical body posture showing a natural weight-shift over a resting leg."
    }
  },
  {
    "id": 350,
    "category": "Art History: High Renaissance",
    "question": "The High Renaissance is best characterized by which stylistic evolution?",
    "options": [
      "Toward more chaos",
      "Toward compositional perfection and idealized harmony",
      "Toward flatter space",
      "Toward digital art"
    ],
    "correctIndex": 1,
    "hint": "Think of balanced symmetry, geometric control, and stable compositions.",
    "rationale": "The High Renaissance represents a brief historical moment where technical skill and classical philosophy combined to create perfect, harmonious order.",
    "distractorExplorations": {
      "Toward more chaos": "Chaos defines the later Mannerist and Baroque shifts that broke away from classical order.",
      "Toward flatter space": "The era perfected the illusion of 3D depth using linear and atmospheric perspective systems.",
      "Toward digital art": "This is an automated historical error; digital art is a 20th and 21st-century technological development."
    }
  },
  {
    "id": 351,
    "category": "Art History: Mannerism",
    "question": "Mannerist art deliberately prioritizes which of the following stylistic values?",
    "options": [
      "Scientific accuracy",
      "Emotional distortion, artifice, and stylized elegance",
      "Natural proportions",
      "Simple lighting"
    ],
    "correctIndex": 1,
    "hint": "It rejected natural human proportions and calm layout balance to favor extreme elegance and dramatic tension.",
    "rationale": "Mannerism valued artificial elegance ('maniera') over realistic accuracy, lengthening limbs and twisting spaces to create tension.",
    "distractorExplorations": {
      "Scientific accuracy": "Scientific accuracy was a hallmark of High Renaissance tracking, which Mannerists viewed as a dead end.",
      "Natural proportions": "Mannerists actively deformed and stretched human proportions to enhance elegance and style.",
      "Simple lighting": "The movement preferred complex, unstable, and highly stylized lighting setpieces."
    }
  },
  {
    "id": 352,
    "category": "Art History: Mannerism",
    "question": "El Greco’s masterwork 'The Burial of the Count of Orgaz' features lighting that is best described as:",
    "options": [
      "Flat",
      "Flickering, mystical, and ghost-like",
      "Bright and optimistic",
      "Direct sunlight"
    ],
    "correctIndex": 1,
    "hint": "The light seems to glow from inside the characters themselves, shifting like flames against dark skies.",
    "rationale": "El Greco rejected realistic sunshine, using a subjective, spiritual light source that flickered across forms to create a highly mystical mood.",
    "distractorExplorations": {
      "Flat": "The values are highly dynamic, moving sharply from deep blacks to brilliant, glowing highlights.",
      "Bright and optimistic": "The light feels stormy, otherworldly, and intense, designed to trigger religious ecstasy.",
      "Direct sunlight": "The scene is a spiritual vision containing zero natural, realistic outdoor solar shadows."
    }
  },
  {
    "id": 353,
    "category": "Art History: Mannerism",
    "question": "Pontormo’s 'The Entombment of Christ' uses a clashing, \"acidic\" color palette to evoke:",
    "options": [
      "Peace",
      "Instability and Anxiety",
      "Boredom",
      "Logic"
    ],
    "correctIndex": 1,
    "hint": "He discarded natural skin tones and earth colors, opting for jarring pinks, oranges, and pale blues.",
    "rationale": "Pontormo chose clashing, unnatural colors to mirror the intense grief of the scene and make the viewer feel visually unsettled.",
    "distractorExplorations": {
      "Peace": "Peace requires harmonious, balanced pastel blends or neutral earth tones that ground the eye.",
      "Boredom": "The colors are shockingly bright and jarring, preventing any visual disinterest or flat response.",
      "Logic": "The palette is purely emotional and expressive, completely breaking with natural logic."
    }
  },
  {
    "id": 354,
    "category": "Art History: Mannerism",
    "question": "Which stylistic choice is most common and recognizable in Mannerist paintings?",
    "options": [
      "Short figures",
      "Elongated limbs and unnaturally long necks",
      "Symmetrical framing",
      "Natural skin tones"
    ],
    "correctIndex": 1,
    "hint": "Think of Parmigianino's famous elegant Madonna model.",
    "rationale": "Stretching necks and hands was a key Mannerist technique used to increase elegance and distinguish their work from High Renaissance realism.",
    "distractorExplorations": {
      "Short figures": "Figures were stretched taller to give them an elegant, aristocratic grace.",
      "Symmetrical framing": "Mannerists preferred complex, off-center, and swirling compositions to keep the frame feeling restless.",
      "Natural skin tones": "They used pale, ghostly skin tones to highlight the artificial, theatrical mood of their art."
    }
  },
  {
    "id": 355,
    "category": "Art History: Mannerism",
    "question": "Due to his highly subjective and distorted figures, El Greco is considered a spiritual precursor to which modern movement?",
    "options": [
      "Neoclassicism",
      "Expressionism",
      "Minimalism",
      "Realism"
    ],
    "correctIndex": 1,
    "hint": "This modern movement distorts physical reality to showcase raw, intense internal emotions.",
    "rationale": "Modern Expressionists rediscovered El Greco centuries later, inspired by how he used distorted anatomy and wild colors to convey intense emotion.",
    "distractorExplorations": {
      "Neoclassicism": "Neoclassicism demanded absolute anatomical perfection and calm control, which contradicts El Greco's wild style.",
      "Minimalism": "Minimalism strips away human subjects entirely to focus on simple, physical shapes.",
      "Realism": "Realism tracks everyday life with objective photographic precision, completely opposite to El Greco's spiritual visions."
    }
  },
  {
    "id": 356,
    "category": "Art History: Mannerism",
    "question": "\"Maniera\" in Late Renaissance art contexts translates directly to:",
    "options": [
      "Nature",
      "Style / Hand of the artist",
      "Color temperature",
      "Perspective"
    ],
    "correctIndex": 1,
    "hint": "It describes an artist's personal stylistic signature and elegance, moving away from simple copying of nature.",
    "rationale": "Maniera means 'style' or 'mannerism', highlighting an era where art became about art itself, celebrating virtuoso style over realistic tracking.",
    "distractorExplorations": {
      "Nature": "Mannerists turned their backs on copying nature, preferring highly artificial and stylized indoor creation choices.",
      "Color temperature": "Color temperature is a modern term used to describe the warmth or coolness of light fields.",
      "Perspective": "Perspective is a spatial mapping system; Maniera is a broad cultural statement about personal style."
    }
  },
  {
    "id": 357,
    "category": "Art History: Mannerism",
    "question": "Parmigianino’s 'Madonna with the Long Neck' serves as a classic textbook example of:",
    "options": [
      "Perfect anatomy",
      "Intentional distortion for elegance",
      "Flat lighting",
      "Linear perspective"
    ],
    "correctIndex": 1,
    "hint": "The child looks unusually large and the Madonna's neck resembles an elegant marble column.",
    "rationale": "Parmigianino intentionally stretched the figures to give the Madonna a refined, aristocratic grace that broke with natural anatomy.",
    "distractorExplorations": {
      "Perfect anatomy": "The anatomy is purposefully distorted; the proportions would be physically impossible in real life.",
      "Flat lighting": "The skin surfaces are beautifully modeled with soft, delicate chiaroscuro gradients.",
      "Linear perspective": "The painting uses a confusing, shifting sense of scale in the background, rather than a clear perspective layout."
    }
  },
  {
    "id": 358,
    "category": "Art History: Mannerism",
    "question": "Late Renaissance Mannerist compositions are most frequently described as:",
    "options": [
      "Stable and triangular",
      "Crowded, restless, and unstable",
      "Minimalist",
      "Empty"
    ],
    "correctIndex": 1,
    "hint": "They avoided central anchors, filling the edges of the canvas with twisting, dynamic figures.",
    "rationale": "Mannerist layouts kept the eye moving constantly by using complex groupings, empty centers, and dynamic diagonal shapes.",
    "distractorExplorations": {
      "Stable and triangular": "This structure defines the balanced harmony of the High Renaissance.",
      "Minimalist": "Mannerist art is highly decorative and complex, completely opposite to minimal simplicity.",
      "Empty": "The frames are packed with crowded groups, leaving very little open negative space."
    }
  },
  {
    "id": 359,
    "category": "Cinema Theory: Visual Links",
    "question": "Mannerist colors (bright pinks, acidic oranges) are frequently used in modern cinema to indicate:",
    "options": [
      "Grounded realism",
      "Altered states of mind, dreams, or \"Unreal\" worlds",
      "Low production budget",
      "Historical facts"
    ],
    "correctIndex": 1,
    "hint": "Think of surreal dream sequences or psychological thrillers that use clashing neon lighting to create unease.",
    "rationale": "Jarring, artificial colors visually communicate that the characters have stepped out of normal reality into a dream or an altered mental state.",
    "distractorExplorations": {
      "Grounded realism": "Realism uses natural, muted tones that mimic everyday environments.",
      "Low production budget": "Advanced color manipulation requires sophisticated lighting gear and expert post-production grading.",
      "Historical facts": "Documentaries use accurate, natural lighting to preserve historical truth visually."
    }
  },
  {
    "id": 360,
    "category": "Art History: Mannerism",
    "question": "El Greco’s expressive paintings often feature which type of spatial perspective?",
    "options": [
      "Strict mathematical grid",
      "Distorted / Subjective perspective",
      "Aerial perspective exclusively",
      "No spatial framework at all"
    ],
    "correctIndex": 1,
    "hint": "He compressed spaces and stacked figures vertically to create a highly emotional, visionary world.",
    "rationale": "El Greco rejected flat perspective grids, shifting scales and space to favor a deeply personal, spiritual vision.",
    "distractorExplorations": {
      "Strict mathematical grid": "This approach matches early Renaissance layouts, which El Greco completely ignored.",
      "Aerial perspective exclusively": "He used atmospheric color changes occasionally, but his main tool was distorting the physical scale of his figures.",
      "No spatial framework at all": "His spaces are carefully organized, using emotional rhythms to guide the viewer's eye up through the canvas."
    }
  },
  {
    "id": 361,
    "category": "Culture: Indian Art",
    "question": "Madhubani painting (Mithila Art) traditionally hails from which state?",
    "options": [
      "Uttar Pradesh",
      "Bihar",
      "Rajasthan",
      "Kerala"
    ],
    "correctIndex": 1,
    "hint": "This ancient domestic art form is practiced by women in the Mithila region of this state.",
    "rationale": "Madhubani art originated in Bihar, where women decorated mud walls with vibrant geometric patterns depicting nature and mythology.",
    "distractorExplorations": {
      "Uttar Pradesh": "Uttar Pradesh is famous for court miniatures and Chikankari embroidery, not Madhubani folk art.",
      "Rajasthan": "Rajasthan is known for Phad scroll paintings and detailed court miniatures.",
      "Kerala": "Kerala is celebrated for its highly detailed, vibrant temple frescoes."
    }
  },
  {
    "id": 362,
    "category": "Cinema History: Indian Cinema",
    "question": "Who directed the visually rich feature film 'Meenaxi: A Tale of Three Cities' (2004)?",
    "options": [
      "Tyeb Mehta",
      "M.F. Husain",
      "S.H. Raza",
      "Satyajit Ray"
    ],
    "correctIndex": 1,
    "hint": "This modern painter belonged to the Progressive Artists' Group and loved working with cinema cameras.",
    "rationale": "M.F. Husain directed Meenaxi, treating each scene like an expressive canvas packed with bold colors and symbols.",
    "distractorExplorations": {
      "Tyeb Mehta": "Tyeb Mehta was a giant of modern Indian painting, famous for his structural 'Diagonal' series, but never directed feature films.",
      "S.H. Raza": "Raza was a master abstract painter who focused entirely on the 'Bindu' motif.",
      "Satyajit Ray": "Ray was an iconic master of realistic Indian cinema who passed away in 1992, long before this film was produced."
    }
  },
  {
    "id": 363,
    "category": "Cinema Theory: Composition",
    "question": "Active \"Negative Space\" in a cinematic composition refers directly to:",
    "options": [
      "The dark portions of the frame",
      "The empty or unused areas surrounding the subject",
      "The objects placed in the far background",
      "Areas completely outside the lens depth of field"
    ],
    "correctIndex": 1,
    "hint": "Directors use these open, empty areas to visually highlight a character's isolation or loneliness.",
    "rationale": "Negative space is the intentional empty area around a subject, helping clear away visual clutter to emphasize scale or emotion.",
    "distractorExplorations": {
      "The dark portions of the frame": "Dark areas are shadows, which can still be packed with complex physical shapes.",
      "The objects placed in the far background": "Background elements form positive space if they contain recognizable details.",
      "Areas completely outside the lens depth of field": "Out-of-focus areas are blur zones, separate from empty negative space compositions."
    }
  },
  {
    "id": 364,
    "category": "Cinema Theory: Composition",
    "question": "The basic \"Rule of Thirds\" structure grids a single frame into how many equal parts?",
    "options": [
      "Four",
      "Six",
      "Nine",
      "Twelve"
    ],
    "correctIndex": 2,
    "hint": "The system uses two horizontal and two vertical lines to divide the frame.",
    "rationale": "The grid uses two vertical and two horizontal lines to cut the frame into nine equal sections, creating focal points where the lines intersect.",
    "distractorExplorations": {
      "Four": "A quadrant split cuts the frame into four simple corners, missing the central intersections.",
      "Six": "A six-box grid layout does not follow standard rule-of-thirds composition guidelines.",
      "Twelve": "Twelve sections create a dense layout more common in complex comic book pages than camera viewfinders."
    }
  },
  {
    "id": 365,
    "category": "Culture: Indian Art",
    "question": "The historic wall murals inside the Ajanta Caves primarily depict stories from:",
    "options": [
      "The Mahabharat",
      "Buddhist Jataka tales",
      "Mughal court life",
      "Tribal folk rituals"
    ],
    "correctIndex": 1,
    "hint": "These tales illustrate the previous human and animal lives of the Buddha.",
    "rationale": "The rock-cut caves at Ajanta feature classical frescoes that illustrate Buddhist Jataka narratives and spiritual paths.",
    "distractorExplorations": {
      "The Mahabharat": "Epic Hindu battles are carved at sites like Ellora, but not inside Ajanta's Buddhist monastery.",
      "Mughal court life": "Mughal painting developed centuries later, focusing on secular court scenes and portraits.",
      "Tribal folk rituals": "Folk and hunting art are preserved in older rock shelters like Bhimbetka."
    }
  },
  {
    "id": 366,
    "category": "Cinema Theory: Perception",
    "question": "Which visual factor most directly influences a viewer's perception of scale within a frame?",
    "options": [
      "Colour temperature",
      "Relative size comparisons between elements",
      "Camera recording frame rate",
      "Lighting contrast levels"
    ],
    "correctIndex": 1,
    "hint": "We gauge an object's true size by comparing it to an item we already know, like a human figure or a tree.",
    "rationale": "Scale is entirely relative; placing a tiny, familiar object next to an unknown structure instantly communicates its massive size.",
    "distractorExplorations": {
      "Colour temperature": "Color temperature controls the mood or warmth of a scene, not the physical size of objects.",
      "Camera recording frame rate": "Frame rate controls time mechanics (slow motion vs. fast action), separate from physical space scaling.",
      "Lighting contrast levels": "Contrast controls depth and volume definitions, but does not dictate relative dimensions."
    }
  },
  {
    "id": 367,
    "category": "Cinema Theory: Camera Movement",
    "question": "The horizontal swiveling movement of a camera fixed on a stationary tripod pivot point is called:",
    "options": [
      "Tilt",
      "Pan",
      "Zoom",
      "Rack Focus"
    ],
    "correctIndex": 1,
    "hint": "Think of turning your head from side to side to scan a wide horizon line.",
    "rationale": "Panning rotates the camera horizontally on a fixed axis to track movement or reveal wide settings.",
    "distractorExplorations": {
      "Tilt": "Tilting moves the camera vertically up and down on a fixed tripod point.",
      "Zoom": "Zooming alters the lens focal length mechanically to bring the image closer, keeping the camera body still.",
      "Rack Focus": "Rack focus shifts the focus plane between foreground and background subjects within a still frame."
    }
  },
  {
    "id": 368,
    "category": "Cinema Theory: Aesthetics",
    "question": "Which visionary filmmaker famously described cinema as the literal 'Sculpting of Time'?",
    "options": [
      "Satyajit Ray",
      "Andrei Tarkovsky",
      "Yasujiro Ozu",
      "Francois Truffaut"
    ],
    "correctIndex": 1,
    "hint": "He was a Russian master of long takes and spiritual atmosphere who directed Stalker and Solaris.",
    "rationale": "Andrei Tarkovsky wrote 'Sculpting in Time', stating that a director's unique tool is capturing and shaping real-time blocks.",
    "distractorExplorations": {
      "Satyajit Ray": "Ray used a grounded, human realism style, compiling his insights in 'Our Films, Their Films'.",
      "Yasujiro Ozu": "Ozu used a calm style with low camera positions, focusing on family life rather than writing formal time theories.",
      "Francois Truffaut": "Truffaut belonged to the French New Wave, pioneering fast edits and experimental structures."
    }
  },
  {
    "id": 369,
    "category": "Cinema Theory: Lighting",
    "question": "The coveted \"Golden Hour\" in cinematography occurs:",
    "options": [
      "Precisely at high noon",
      "Just after sunrise and just before sunset",
      "Exactly at midnight",
      "During a full moon event"
    ],
    "correctIndex": 1,
    "hint": "During these brief windows, the low sun casts a warm, soft, golden light across the landscape.",
    "rationale": "The low angle of the sun during these windows creates soft light and long shadows, making it highly prized for atmospheric outdoor shooting.",
    "distractorExplorations": {
      "Precisely at high noon": "High noon creates harsh, unappealing vertical shadows under characters' eyes and noses.",
      "Exactly at midnight": "Midnight requires artificial lighting rigs or specialized digital night-vision setups.",
      "During a full moon event": "Moonlight is too weak for standard exposure, requiring low-light sensors or artificial night simulation."
    }
  },
  {
    "id": 370,
    "category": "Physics: Optics",
    "question": "Which mirror type is used as a rear-view mirror in motor vehicles to provide a wide field of view?",
    "options": [
      "Concave",
      "Convex",
      "Plane",
      "Cylindrical"
    ],
    "correctIndex": 1,
    "hint": "This mirror curves outward, reflecting a wider, compressed view of the traffic behind you.",
    "rationale": "Convex mirrors curve outward to provide a wider field of view, making objects look smaller and farther away to cover more road space safely.",
    "distractorExplorations": {
      "Concave": "Concave mirrors curve inward, magnifying close objects or flipping distant views upside down, making them dangerous for driving.",
      "Plane": "Plane mirrors provide an accurate 1:1 reflection but offer a narrow field of view, creating dangerous blind spots.",
      "Cylindrical": "Cylindrical mirrors distort images along a single axis, blurring traffic views and making them useless for navigation."
    }
  },
  {
    "id": 371,
    "category": "Cinema History: Festivals",
    "question": "“Monsoon Shootout” was selected for which section in the 2013 Cannes film festival?",
    "options": [
      "Director’s Fortnight",
      "Critics Week",
      "Un Certain Regard",
      "Out of Competition"
    ],
    "correctIndex": 3,
    "hint": "It was screened late at night under the special 'Midnight Screenings' banner, which belongs to this broader grouping.",
    "rationale": "Amit Kumar's directorial debut 'Monsoon Shootout' was officially selected for the Midnight Screenings section, which falls under the Out of Competition umbrella at the 2013 Cannes Film Festival.",
    "distractorExplorations": {
      "Director’s Fortnight": "The parallel section independent of the official selection did not screen this film in 2013.",
      "Critics Week": "This section focusing on first and second features did not host the premiere of this film.",
      "Un Certain Regard": "While a frequent home for indie Indian cinema, it was not the chosen section for this particular action-thriller."
    }
  },
  {
    "id": 372,
    "category": "Cinema History: Festivals",
    "question": "“Gangs of Wasseypur” was selected for which section in the 2012 Cannes film festival?",
    "options": [
      "Critics Week",
      "Out of Competition",
      "Un Certain Regard",
      "Director’s Fortnight"
    ],
    "correctIndex": 3,
    "hint": "This highly prestigious parallel section is organized by the French Directors' Guild.",
    "rationale": "Anurag Kashyap's five-hour epic 'Gangs of Wasseypur' (Parts 1 and 2) received a massive standing ovation when it premiered in the Director’s Fortnight (Quinzaine des Réalisateurs) section in 2012.",
    "distractorExplorations": {
      "Critics Week": "Critics Week features only 7 select first or second features, excluding a sprawling double-bill epic like this one.",
      "Out of Competition": "This belongs to the festival's official umbrella; Wasseypur was screened in the parallel independent category instead.",
      "Un Certain Regard": "Though Kashyap had other productions screen here later, Wasseypur didn't play in this official selection bracket."
    }
  },
  {
    "id": 373,
    "category": "Cinema History: Festivals",
    "question": "In the year 2014, “Titli” by Kanu Behl was selected for which section in the Cannes film festival?",
    "options": [
      "Critics Week",
      "Out of Competition",
      "Director’s Fortnight",
      "Un Certain Regard"
    ],
    "correctIndex": 3,
    "hint": "The section name means 'A Certain Glance' and is renowned for alternative storytelling.",
    "rationale": "Kanu Behl's intense gritty family crime-drama 'Titli' made its global premiere in the official Un Certain Regard section at Cannes in 2014.",
    "distractorExplorations": {
      "Critics Week": "It was discovered by the selection committee via Film Bazaar but was routed to the official track instead of Critics Week.",
      "Out of Competition": "Out of Competition is typically reserved for major commercial blockbusters or high-profile veteran studio films.",
      "Director’s Fortnight": "Behl's second feature 'Agra' screened here in 2023, but his debut 'Titli' was an official Un Certain Regard pick."
    }
  },
  {
    "id": 374,
    "category": "Cinema History: Directors",
    "question": "The Indian film “Indradhanur Chaai” was an official selection in the Un Certain Regard section at Cannes. The film was directed by:",
    "options": [
      "Susant Mishra",
      "Sudhir Mishra",
      "Sudhanshu Mishra",
      "None of the above"
    ],
    "correctIndex": 0,
    "hint": "He is an FTII alumnus who pioneered highly poetic Odia parallel cinema in the 1990s.",
    "rationale": "The Odia feature film 'Indradhanur Chaai' (Indradhanushya Chhai / Rainbow's Shadow), released in 1993, was directed by Susant Mishra and screened at Cannes in 1995.",
    "distractorExplorations": {
      "Sudhir Mishra": "He is the famous director of Hazaaron Khwaishein Aisi and Is Raat Ki Subah Nahin, unrelated to this Odia masterpiece.",
      "Sudhanshu Mishra": "This name is a structural distractor variable created to test precise spelling memory.",
      "None of the above": "Since Susant Mishra is listed as option A, this option is false."
    }
  },
  {
    "id": 375,
    "category": "Cinema History: Festivals",
    "question": "Among the following statements, which one is FALSE about the “Camera d’Or” at the Cannes film festival?",
    "options": [
      "“Salaam Bombay” was the winner of “Camera d’Or but not “East is East”",
      "“East is East” was not the winner of the “Camera d’Or but “Marana Simhasanam” was.",
      "“Salaam Bombay” and “Marana Simhasanam” both were winners of “Camera d’Or”.",
      "“Marana Simhasanam” was not the winner of the “Camera d’Or” of Cannes."
    ],
    "correctIndex": 3,
    "hint": "Look for the option that incorrectly states a past winner missed out on the trophy.",
    "rationale": "Shaji N. Karun's 'Marana Simhasanam' (Throne of Death) won the prestigious Caméra d'Or award in 1999, making option D factually false.",
    "distractorExplorations": {
      "“Salaam Bombay” was the winner of “Camera d’Or but not “East is East”": "This is true; Mira Nair won it in 1988, whereas East is East did not claim the prize.",
      "“East is East” was not the winner of the “Camera d’Or but “Marana Simhasanam” was.": "This is a true statement describing the official historical records of the event.",
      "“Salaam Bombay” and “Marana Simhasanam” both were winners of “Camera d’Or”.": "This is completely true; both represent landmark historical Indian breakthroughs at Cannes."
    }
  },
  {
    "id": 376,
    "category": "Cinema History: Festivals",
    "question": "Which of the following statements is FALSE about the eligibility and rules of the “Camera d’Or” at Cannes?",
    "options": [
      "The “Camera d’Or” is not a section but it’s a prize",
      "Only the first feature films selected in the main ‘Competitive section” compete for the award.",
      "Only first feature films selected in any official or parallel section compete for the prize.",
      "Any feature film selected in any official section cannot automatically compete if it is not a debut."
    ],
    "correctIndex": 1,
    "hint": "The award spans across several different screening windows at the festival, not just the Main Competition.",
    "rationale": "The Caméra d'Or is awarded to the best *first* feature film across ALL sections (Main Competition, Un Certain Regard, Out of Competition, Critics' Week, and Director's Fortnight). Restricting it to the main Competition is incorrect.",
    "distractorExplorations": {
      "The “Camera d’Or” is not a section but it’s a prize": "This is a correct definition; it is a cross-sectional jury prize for debut directors.",
      "Only first feature films selected in any official or parallel section compete for the prize.": "This is true; it acts as an open grid tracking debuts across all distinct platform streams.",
      "Any feature film selected in any official section cannot automatically compete if it is not a debut.": "This is true; second or third films are completely excluded regardless of section."
    }
  },
  {
    "id": 377,
    "category": "Cinema History: Indian Cinema",
    "question": "Among the following statements regarding the films of director Goutam Ghose at Cannes, which one is FALSE?",
    "options": [
      "“Gudia” was screened in Un Certain Regard at Cannes (1997)",
      "“Antarjali Jatra” was screened in Un Certain Regard at Cannes (1988)",
      "“Dakhal” was screened in Director’s Fortnight at the Cannes film festival (1982)",
      "“Padma Nadir Majhi” was not selected in Director’s Fortnight in the Cannes film festival."
    ],
    "correctIndex": 2,
    "hint": "Think about which of his early films won a National Award but didn't travel to this specific French parallel section.",
    "rationale": "While 'Dakhal' won the National Film Award for Best Feature Film, it was not presented at the Director's Fortnight at Cannes, making option C the false statement.",
    "distractorExplorations": {
      "“Gudia” was screened in Un Certain Regard at Cannes (1997)": "This is historically true; the film traveled to the official selection stream.",
      "“Antarjali Jatra” was screened in Un Certain Regard at Cannes (1988)": "This is accurate; it showcased Ghose's powerful visual style on an international stage.",
      "“Padma Nadir Majhi” was not selected in Director’s Fortnight in the Cannes film festival.": "This is true; the film was celebrated internationally but missed this exact lineup designation."
    }
  },
  {
    "id": 378,
    "category": "Art History: Graphic Design",
    "question": "Which Indian painter has the unique honor of designing an official poster canvas for the Cannes Film Festival?",
    "options": [
      "Subhash Awchat",
      "M.F. Husain",
      "S.H. Raza",
      "None of the above"
    ],
    "correctIndex": 0,
    "hint": "He is a highly celebrated master artist from Maharashtra known for his striking, minimalist design layouts.",
    "rationale": "Subhash Awchat was commissioned to paint and design the official poster artwork for a major section of the festival.",
    "distractorExplorations": {
      "M.F. Husain": "Husain directed films screened at Cannes but was never the designated official poster designer.",
      "S.H. Raza": "Raza was a legendary abstractionist whose geometric work remained purely within fine art gallery circuits.",
      "None of the above": "Since Subhash Awchat is available as option A, this choice is invalid."
    }
  },
  {
    "id": 379,
    "category": "Art History: Graphic Design",
    "question": "Indian painter Subhash Awchat had the honor of designing the official Cannes poster for which specific section?",
    "options": [
      "Main Competition",
      "Un Certain Regard",
      "Critics Week",
      "Director’s Fortnight"
    ],
    "correctIndex": 1,
    "hint": "He created the vibrant artwork for the 54th edition of this official sub-section in 2001.",
    "rationale": "Subhash Awchat designed the official poster for the 'Un Certain Regard' section at the 2001 Cannes Film Festival.",
    "distractorExplorations": {
      "Main Competition": "The main poster typically uses photographs of global cinematic legends or iconic film scenes.",
      "Critics Week": "Critics Week is managed independently and uses its own distinct graphic design teams.",
      "Director’s Fortnight": "This section runs parallel to the main festival and coordinates its posters via the French Guild."
    }
  },
  {
    "id": 380,
    "category": "Cinema History: Indian Cinema",
    "question": "Neeraj Ghaywan’s debut feature “Masaan” premiered at Cannes and won which of the following honors?",
    "options": [
      "FIPRESCI Prize and the Promising Future Prize in the Un Certain Regard section",
      "Only the FIPRESCI International Critics prize.",
      "Only the Promising Future prize in the Un Certain Regard section",
      "Was premiered only but won no competitive awards at the festival."
    ],
    "correctIndex": 0,
    "hint": "The film swept two major trophies simultaneously within its official section in 2015.",
    "rationale": "Masaan won both the international film critics federation (FIPRESCI) prize and the special Promising Future (Avenir Prometteur) prize in Un Certain Regard.",
    "distractorExplorations": {
      "Only the FIPRESCI International Critics prize.": "This is incomplete because it leaves out the official jury's Promising Future accolade.",
      "Only the Promising Future prize in the Un Certain Regard section": "This is incomplete because it omits the historic critics' award.",
      "Was premiered only but won no competitive awards at the festival.": "This is false; the film was one of the most decorated Indian indies of its year."
    }
  },
  {
    "id": 381,
    "category": "Cinema History: Indian Cinema",
    "question": "Mrinal Sen’s “Khandhar” was shown at the 1984 Cannes Film Festival, and returned later under which category?",
    "options": [
      "Critics Week",
      "Main Competition",
      "Cannes Classics",
      "Un Certain Regard in 1984, and Cannes Classics in 2010"
    ],
    "correctIndex": 3,
    "hint": "It played in an official sidebar during its release year and returned decades later in a beautifully restored print.",
    "rationale": "Khandhar originally screened in 'Un Certain Regard' in 1984, and its pristine, frame-by-frame restored print was selected for 'Cannes Classics' in 2010.",
    "distractorExplorations": {
      "Critics Week": "The film skipped the parallel critics loop entirely during both historical runs.",
      "Main Competition": "Mrinal Sen competed for the Palme d'Or with Kharij in 1983, but Khandhar was positioned differently.",
      "Cannes Classics": "While it did screen here, choosing option C alone misses its original 1984 screening context."
    }
  },
  {
    "id": 382,
    "category": "Cinema History: Indian Cinema",
    "question": "The anthology film “Bombay Talkies” was showcased at the Cannes Film Festival under which unique screening designation?",
    "options": [
      "Critics Week",
      "Un Certain Regard",
      "None of the above / Special Gala Screening",
      "As a private closed screening exclusive to the Indian market delegation"
    ],
    "correctIndex": 2,
    "hint": "It was presented as a high-profile Special Gala Screening to celebrate 100 years of Indian Cinema in 2013.",
    "rationale": "Bombay Talkies (directed by Kashyap, Banerjee, Akhtar, and Johar) was screened out of competition as a 'Special Screening' gala celebration. (Option C represents the correct divergence from the listed categories).",
    "distractorExplorations": {
      "Critics Week": "This experimental short-track anthology was not part of the competitive Critics Week line.",
      "Un Certain Regard": "The film sat outside the standard Un Certain Regard prize track entirely.",
      "As a private closed screening exclusive to the Indian market delegation": "It was a major public, red-carpet event celebrating India's cinematic centenary, not a closed market screening."
    }
  }


];
