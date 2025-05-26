// Quiz Questions Database - Add your questions here
const allQuestions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Paris", "Berlin", "Madrid"],
        correctAnswer: 1,
        points: 1
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Jupiter", "Mars", "Saturn"],
        correctAnswer: 2,
        points: 1
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: 1,
        points: 1
    },
    {
        question: "What's the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean"],
        correctAnswer: 2,
        points: 2
    },
    {
        question: "Which of these is not a programming language?",
        options: ["Python", "Java", "HTML", "Banana", "Ruby"],
        correctAnswer: 3,
        points: 3
    },
    // 6
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"],
        correctAnswer: 0,
        points: 1
    },
    // 7
    {
        question: "What is the boiling point of water at sea level in Celsius?",
        options: ["90°C", "100°C", "110°C", "120°C"],
        correctAnswer: 1,
        points: 1
    },
    // 8
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "Thailand", "South Korea"],
        correctAnswer: 1,
        points: 1
    },
    // 9
    {
        question: "What gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
        correctAnswer: 1,
        points: 1
    },
    // 10
    {
        question: "In which year did the first man land on the moon?",
        options: ["1965", "1969", "1971", "1975"],
        correctAnswer: 1,
        points: 1
    },
    // 11
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: 1,
        points: 1
    },
    // 12
    {
        question: "Which language is the most spoken worldwide?",
        options: ["English", "Mandarin Chinese", "Spanish", "Hindi"],
        correctAnswer: 1,
        points: 1
    },
    // 13
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent Van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
        correctAnswer: 1,
        points: 1
    },
    // 14
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Silver"],
        correctAnswer: 2,
        points: 1
    },
    // 15
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Gold", "Oxygen", "Osmium", "Silver"],
        correctAnswer: 1,
        points: 1
    },
    // 16
    {
        question: "Which city hosted the 2016 Summer Olympics?",
        options: ["London", "Beijing", "Rio de Janeiro", "Tokyo"],
        correctAnswer: 2,
        points: 1
    },
    // 17
    {
        question: "What is the currency of the United Kingdom?",
        options: ["Euro", "Dollar", "Pound Sterling", "Yen"],
        correctAnswer: 2,
        points: 1
    },
    // 18
    {
        question: "Who discovered penicillin?",
        options: ["Marie Curie", "Alexander Fleming", "Isaac Newton", "Albert Einstein"],
        correctAnswer: 1,
        points: 1
    },
    // 19
    {
        question: "What is the main ingredient in guacamole?",
        options: ["Tomato", "Avocado", "Onion", "Pepper"],
        correctAnswer: 1,
        points: 1
    },
    // 20
    {
        question: "Which continent is the Sahara Desert located on?",
        options: ["Asia", "Africa", "Australia", "South America"],
        correctAnswer: 1,
        points: 1
    },
    // 21
    {
        question: "Who is known as the 'Father of Computers'?",
        options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
        correctAnswer: 0,
        points: 1
    },
    // 22
    {
        question: "What is the chemical formula for water?",
        options: ["H2O", "CO2", "NaCl", "O2"],
        correctAnswer: 0,
        points: 1
    },
    // 23
    {
        question: "Which animal is known as the King of the Jungle?",
        options: ["Tiger", "Lion", "Elephant", "Leopard"],
        correctAnswer: 1,
        points: 1
    },
    // 24
    {
        question: "What is the tallest mountain in the world?",
        options: ["Mount Kilimanjaro", "Mount Everest", "K2", "Mount Fuji"],
        correctAnswer: 1,
        points: 1
    },
    // 25
    {
        question: "In which country is the Great Pyramid of Giza located?",
        options: ["Mexico", "Egypt", "Peru", "India"],
        correctAnswer: 1,
        points: 1
    },
    // 26
    {
        question: "Which is the smallest planet in our solar system?",
        options: ["Mercury", "Mars", "Venus", "Pluto"],
        correctAnswer: 0,
        points: 1
    },
    // 27
    {
        question: "What year did World War II end?",
        options: ["1945", "1939", "1918", "1950"],
        correctAnswer: 0,
        points: 1
    },
    // 28
    {
        question: "Which organ is responsible for pumping blood in the human body?",
        options: ["Lungs", "Heart", "Kidneys", "Liver"],
        correctAnswer: 1,
        points: 1
    },
    // 29
    {
        question: "What colors are on the flag of Germany?",
        options: ["Black, Red, Yellow", "Green, White, Orange", "Red, White, Blue", "Blue, Yellow, Red"],
        correctAnswer: 0,
        points: 1
    },
    // 30
    {
        question: "Who invented the telephone?",
        options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
        correctAnswer: 0,
        points: 1
    },
    // 31
    {
        question: "Which planet has the most moons?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 3,
        points: 1
    },
    // 32
    {
        question: "What is the primary language spoken in Brazil?",
        options: ["Spanish", "Portuguese", "English", "French"],
        correctAnswer: 1,
        points: 1
    },
    // 33
    {
        question: "Who is the author of the Harry Potter series?",
        options: ["J.R.R. Tolkien", "J.K. Rowling", "Stephen King", "George R.R. Martin"],
        correctAnswer: 1,
        points: 1
    },
    // 34
    {
        question: "What is the currency used in Japan?",
        options: ["Yuan", "Dollar", "Yen", "Won"],
        correctAnswer: 2,
        points: 1
    },
    // 35
    {
        question: "Which is the largest country by area?",
        options: ["Canada", "China", "Russia", "United States"],
        correctAnswer: 2,
        points: 1
    },
    // 36
    {
        question: "What is the name of the longest river in the world?",
        options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        correctAnswer: 1,
        points: 1
    },
    // 37
    {
        question: "Which vitamin is primarily obtained from sunlight?",
        options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
        correctAnswer: 3,
        points: 1
    },
    // 38
    {
        question: "Which country gifted the Statue of Liberty to the United States?",
        options: ["France", "England", "Germany", "Italy"],
        correctAnswer: 0,
        points: 1
    },
    // 39
    {
        question: "How many colors are there in a rainbow?",
        options: ["5", "6", "7", "8"],
        correctAnswer: 2,
        points: 1
    },
    // 40
    {
        question: "Which city is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correctAnswer: 2,
        points: 1
    },
    // 41
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Gd", "Ge"],
        correctAnswer: 0,
        points: 1
    },
    // 42
    {
        question: "Which animal is famous for its black and white stripes?",
        options: ["Tiger", "Zebra", "Leopard", "Panda"],
        correctAnswer: 1,
        points: 1
    },
    // 43
    {
        question: "Which country is famous for inventing pizza?",
        options: ["France", "Italy", "Greece", "Spain"],
        correctAnswer: 1,
        points: 1
    },
    // 44
    {
        question: "What is the largest internal organ in the human body?",
        options: ["Heart", "Liver", "Lungs", "Kidneys"],
        correctAnswer: 1,
        points: 1
    },
    // 45
    {
        question: "Who was the first president of the United States?",
        options: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"],
        correctAnswer: 2,
        points: 1
    },
    // 46
    {
        question: "Which sport is known as the 'king of sports'?",
        options: ["Basketball", "Football (Soccer)", "Tennis", "Cricket"],
        correctAnswer: 1,
        points: 1
    },
    // 47
    {
        question: "What is the main ingredient in traditional bread?",
        options: ["Rice", "Flour", "Sugar", "Salt"],
        correctAnswer: 1,
        points: 1
    },
    // 48
    {
        question: "Which country has the Great Barrier Reef?",
        options: ["Australia", "New Zealand", "South Africa", "Fiji"],
        correctAnswer: 0,
        points: 1
    },
    // 49
    {
        question: "What is the name of the fairy in Peter Pan?",
        options: ["Tinker Bell", "Cinderella", "Ariel", "Belle"],
        correctAnswer: 0,
        points: 1
    },
    // 50
    {
        question: "Which planet is closest to the sun?",
        options: ["Venus", "Mercury", "Earth", "Mars"],
        correctAnswer: 1,
        points: 1
    },
    // 51
    {
        question: "In which country is the Taj Mahal located?",
        options: ["India", "Pakistan", "Bangladesh", "Nepal"],
        correctAnswer: 0,
        points: 1
    },
    // 52
    {
        question: "What is the smallest unit of life?",
        options: ["Atom", "Molecule", "Cell", "Organ"],
        correctAnswer: 2,
        points: 1
    },
    // 53
    {
        question: "Which sport uses a shuttlecock?",
        options: ["Tennis", "Badminton", "Squash", "Volleyball"],
        correctAnswer: 1,
        points: 1
    },
    // 54
    {
        question: "What does the acronym 'NASA' stand for?",
        options: [
            "National Aeronautics and Space Administration",
            "National Air and Space Agency",
            "North American Space Association",
            "National Aerospace and Science Academy"
        ],
        correctAnswer: 0,
        points: 1
    },
    // 55
    {
        question: "Which instrument has black and white keys?",
        options: ["Guitar", "Violin", "Piano", "Flute"],
        correctAnswer: 2,
        points: 1
    },
    // 56
    {
        question: "Which is the largest island in the world?",
        options: ["Borneo", "Greenland", "Madagascar", "New Guinea"],
        correctAnswer: 1,
        points: 1
    },
    // 57
    {
        question: "What is the main language spoken in Canada?",
        options: ["English", "French", "Both English and French", "Spanish"],
        correctAnswer: 2,
        points: 1
    },
    // 58
    {
        question: "Which famous scientist developed the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
        correctAnswer: 1,
        points: 1
    },
    // 59
    {
        question: "Which planet is famous for its rings?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        correctAnswer: 1,
        points: 1
    },
    // 60
    {
        question: "What is the freezing point of water in Celsius?",
        options: ["0°C", "32°C", "-1°C", "100°C"],
        correctAnswer: 0,
        points: 1
    },
    // 61
    {
        question: "Which continent has the most countries?",
        options: ["Asia", "Africa", "Europe", "South America"],
        correctAnswer: 1,
        points: 1
    },
    // 62
    {
        question: "What is the largest desert in the world?",
        options: ["Sahara", "Arctic", "Antarctic", "Gobi"],
        correctAnswer: 2,
        points: 1
    },
    // 63
    {
        question: "Which ocean lies between Africa and Australia?",
        options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
        correctAnswer: 2,
        points: 1
    },
    // 64
    {
        question: "Who is the author of 'The Lord of the Rings'?",
        options: ["J.K. Rowling", "J.R.R. Tolkien", "C.S. Lewis", "George R.R. Martin"],
        correctAnswer: 1,
        points: 1
    },
    // 65
    {
        question: "Which is the fastest land animal?",
        options: ["Lion", "Cheetah", "Tiger", "Leopard"],
        correctAnswer: 1,
        points: 1
    },
    // 66
    {
        question: "What is the largest planet in our solar system?",
        options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
        correctAnswer: 1,
        points: 1
    },
    // 67
    {
        question: "Which country is famous for tulips and windmills?",
        options: ["Belgium", "Netherlands", "Denmark", "Sweden"],
        correctAnswer: 1,
        points: 1
    },
    // 68
    {
        question: "Which metal is liquid at room temperature?",
        options: ["Mercury", "Gold", "Silver", "Copper"],
        correctAnswer: 0,
        points: 1
    },
    // 69
    {
        question: "Which vitamin is found in citrus fruits?",
        options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        correctAnswer: 2,
        points: 1
    },
    // 70
    {
        question: "What is the name of the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Southern Ocean"],
        correctAnswer: 2,
        points: 1
    },
    // 71
    {
        question: "Who painted the ceiling of the Sistine Chapel?",
        options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"],
        correctAnswer: 1,
        points: 1
    },
    // 72
    {
        question: "Which country is home to the kangaroo?",
        options: ["South Africa", "Australia", "India", "Brazil"],
        correctAnswer: 1,
        points: 1
    },
    // 73
    {
        question: "What is the capital city of Canada?",
        options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        correctAnswer: 2,
        points: 1
    },
    // 74
    {
        question: "Which gas do humans breathe in to survive?",
        options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        correctAnswer: 1,
        points: 1
    },
    // 75
    {
        question: "What does DNA stand for?",
        options: [
            "Deoxyribonucleic Acid",
            "Dynamic Nuclear Array",
            "Digital Network Access",
            "Double Nucleotide Acid"
        ],
        correctAnswer: 0,
        points: 1
    },
    // 76
    {
        question: "Which country is famous for the Eiffel Tower?",
        options: ["France", "Italy", "Germany", "Spain"],
        correctAnswer: 0,
        points: 1
    },
    // 77
    {
        question: "What is the name of the fairy tale character who lost her glass slipper?",
        options: ["Snow White", "Cinderella", "Sleeping Beauty", "Rapunzel"],
        correctAnswer: 1,
        points: 1
    },
    // 78
    {
        question: "Which element is essential for breathing and supports combustion?",
        options: ["Nitrogen", "Oxygen", "Carbon", "Hydrogen"],
        correctAnswer: 1,
        points: 1
    },
    // 79
    {
        question: "Which sport uses a hoop and a ball?",
        options: ["Football", "Basketball", "Volleyball", "Baseball"],
        correctAnswer: 1,
        points: 1
    },
    // 80
    {
        question: "Which city is known as the Big Apple?",
        options: ["Los Angeles", "New York City", "Chicago", "Miami"],
        correctAnswer: 1,
        points: 1
    },
    // 81
    {
        question: "What is the capital of Italy?",
        options: ["Milan", "Venice", "Rome", "Naples"],
        correctAnswer: 2,
        points: 1
    },
    // 82
    {
        question: "Which country has the largest population?",
        options: ["India", "China", "United States", "Indonesia"],
        correctAnswer: 1,
        points: 1
    },
    // 83
    {
        question: "What is the name of the process by which plants make their food?",
        options: ["Photosynthesis", "Respiration", "Transpiration", "Digestion"],
        correctAnswer: 0,
        points: 1
    },
    // 84
    {
        question: "Who invented the light bulb?",
        options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Benjamin Franklin"],
        correctAnswer: 1,
        points: 1
    },
    // 85
    {
        question: "Which is the largest continent by land area?",
        options: ["Africa", "Asia", "Europe", "North America"],
        correctAnswer: 1,
        points: 1
    },
    // 86
    {
        question: "What is the capital of Japan?",
        options: ["Osaka", "Tokyo", "Kyoto", "Hiroshima"],
        correctAnswer: 1,
        points: 1
    },
    // 87
    {
        question: "Which instrument is known as the 'King of Instruments'?",
        options: ["Piano", "Organ", "Violin", "Guitar"],
        correctAnswer: 1,
        points: 1
    },
    // 88
    {
        question: "What is the largest species of shark?",
        options: ["Great White Shark", "Hammerhead Shark", "Whale Shark", "Tiger Shark"],
        correctAnswer: 2,
        points: 1
    },
    // 89
    {
        question: "Which country is known for the maple leaf?",
        options: ["United States", "Canada", "Australia", "New Zealand"],
        correctAnswer: 1,
        points: 1
    },
    // 90
    {
        question: "What is the tallest building in the world as of 2024?",
        options: ["Burj Khalifa", "Shanghai Tower", "One World Trade Center", "Taipei 101"],
        correctAnswer: 0,
        points: 1
    },
    // 91
    {
        question: "Which ocean is the smallest by surface area?",
        options: ["Arctic Ocean", "Indian Ocean", "Atlantic Ocean", "Pacific Ocean"],
        correctAnswer: 0,
        points: 1
    },
    // 92
    {
        question: "Which planet is known for its extreme winds and blue color?",
        options: ["Neptune", "Uranus", "Saturn", "Jupiter"],
        correctAnswer: 0,
        points: 1
    },
    // 93
    {
        question: "Who wrote 'Pride and Prejudice'?",
        options: ["Jane Austen", "Charlotte Bronte", "Emily Dickinson", "Virginia Woolf"],
        correctAnswer: 0,
        points: 1
    },
    // 94
    {
        question: "Which is the national flower of Japan?",
        options: ["Rose", "Cherry Blossom", "Lotus", "Tulip"],
        correctAnswer: 1,
        points: 1
    },
    // 95
    {
        question: "What is the main gas found in the air we breathe?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
        correctAnswer: 1,
        points: 1
    },
    // 96
    {
        question: "What is the name of the process where water changes from liquid to gas?",
        options: ["Condensation", "Evaporation", "Sublimation", "Precipitation"],
        correctAnswer: 1,
        points: 1
    },
    // 97
    {
        question: "Which is the longest bone in the human body?",
        options: ["Femur", "Tibia", "Humerus", "Fibula"],
        correctAnswer: 0,
        points: 1
    },
    // 98
    {
        question: "What country is famous for its pyramids?",
        options: ["Mexico", "Egypt", "Peru", "Sudan"],
        correctAnswer: 1,
        points: 1
    },
    // 99
    {
        question: "Which is the largest bird by wingspan?",
        options: ["Albatross", "Eagle", "Condor", "Pelican"],
        correctAnswer: 0,
        points: 1
    },
    // 100
    {
        question: "What is the name of the longest river in Africa?",
        options: ["Nile", "Congo", "Zambezi", "Niger"],
        correctAnswer: 0,
        points: 1
    },
    // 101
    {
        question: "Which country is known as the 'Land of the Midnight Sun'?",
        options: ["Iceland", "Norway", "Sweden", "Finland"],
        correctAnswer: 1,
        points: 1
    },
    // 102
    {
        question: "Who was the first woman to fly solo across the Atlantic Ocean?",
        options: ["Amelia Earhart", "Harriet Quimby", "Sally Ride", "Valentina Tereshkova"],
        correctAnswer: 0,
        points: 1
    },
    // 103
    {
        question: "Which is the smallest country in the world by area?",
        options: ["Monaco", "Vatican City", "Nauru", "San Marino"],
        correctAnswer: 1,
        points: 1
    },
    // 104
    {
        question: "What is the capital of Russia?",
        options: ["Moscow", "Saint Petersburg", "Kazan", "Novosibirsk"],
        correctAnswer: 0,
        points: 1
    },
    // 105
    {
        question: "What is the name of the largest reef system in the world?",
        options: ["Great Barrier Reef", "Red Sea Reef", "Belize Barrier Reef", "Florida Reef"],
        correctAnswer: 0,
        points: 1
    },
    // 106
    {
        question: "Which is the most widely used search engine on the internet?",
        options: ["Bing", "Yahoo", "Google", "DuckDuckGo"],
        correctAnswer: 2,
        points: 1
    },
    // 107
    {
        question: "What is the name of the process by which plants lose water through their leaves?",
        options: ["Photosynthesis", "Transpiration", "Respiration", "Evaporation"],
        correctAnswer: 1,
        points: 1
    },
    // 108
    {
        question: "Which country is known for the invention of chocolate?",
        options: ["Switzerland", "Belgium", "Mexico", "France"],
        correctAnswer: 2,
        points: 1
    },
    // 109
    {
        question: "Which is the largest organ in the human body?",
        options: ["Liver", "Skin", "Lungs", "Heart"],
        correctAnswer: 1,
        points: 1
    },
    // 110
    {
        question: "What is the chemical symbol for sodium?",
        options: ["Sa", "S", "Na", "Sd"],
        correctAnswer: 2,
        points: 1
    },
    // 111
    {
        question: "Which city is known as the City of Love?",
        options: ["Venice", "Paris", "Rome", "Barcelona"],
        correctAnswer: 1,
        points: 1
    },
    // 112
    {
        question: "Which fruit is known as the 'king of fruits'?",
        options: ["Apple", "Mango", "Banana", "Pineapple"],
        correctAnswer: 1,
        points: 1
    },
    // 113
    {
        question: "What is the main ingredient in sushi?",
        options: ["Rice", "Chicken", "Potato", "Pasta"],
        correctAnswer: 0,
        points: 1
    },
    // 114
    {
        question: "Which is the largest gland in the human body?",
        options: ["Thyroid", "Liver", "Pancreas", "Adrenal"],
        correctAnswer: 1,
        points: 1
    },
    // 115
    {
        question: "What is the capital of South Korea?",
        options: ["Busan", "Seoul", "Incheon", "Daegu"],
        correctAnswer: 1,
        points: 1
    },
    // 116
    {
        question: "Which is the fastest bird in the world?",
        options: ["Peregrine Falcon", "Eagle", "Swift", "Hummingbird"],
        correctAnswer: 0,
        points: 1
    },
    // 117
    {
        question: "Which planet is called Earth's twin?",
        options: ["Venus", "Mars", "Mercury", "Jupiter"],
        correctAnswer: 0,
        points: 1
    },
    // 118
    {
        question: "Which is the deepest ocean trench called?",
        options: ["Mariana Trench", "Tonga Trench", "Philippine Trench", "Kuril-Kamchatka Trench"],
        correctAnswer: 0,
        points: 1
    },
    // 119
    {
        question: "Which gas is most abundant in the Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
        correctAnswer: 1,
        points: 1
    },
    // 120
    {
        question: "Who is known as the 'Iron Man' of India?",
        options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Vallabhbhai Patel", "Subhas Chandra Bose"],
        correctAnswer: 2,
        points: 1
    },
    // 121
    {
        question: "What is the capital city of Egypt?",
        options: ["Alexandria", "Cairo", "Giza", "Luxor"],
        correctAnswer: 1,
        points: 1
    },
    // 122
    {
        question: "Which is the largest lake in the world by area?",
        options: ["Caspian Sea", "Lake Superior", "Lake Victoria", "Lake Baikal"],
        correctAnswer: 0,
        points: 1
    },
    // 123
    {
        question: "Which animal is known for changing colors to blend with its surroundings?",
        options: ["Chameleon", "Octopus", "Cuttlefish", "All of the above"],
        correctAnswer: 3,
        points: 1
    },
    // 124
    {
        question: "What is the name of the process in which caterpillars turn into butterflies?",
        options: ["Metamorphosis", "Photosynthesis", "Pollination", "Respiration"],
        correctAnswer: 0,
        points: 1
    },
    // 125
    {
        question: "Which country won the FIFA World Cup in 2018?",
        options: ["Germany", "Brazil", "France", "Argentina"],
        correctAnswer: 2,
        points: 1
    },
    // 126
    {
        question: "Which city is famous for the Golden Gate Bridge?",
        options: ["Los Angeles", "San Francisco", "New York", "Seattle"],
        correctAnswer: 1,
        points: 1
    },
    // 127
    {
        question: "What is the name of the first artificial Earth satellite?",
        options: ["Explorer 1", "Sputnik 1", "Apollo 11", "Voyager 1"],
        correctAnswer: 1,
        points: 1
    },
    // 128
    {
        question: "Which is the smallest continent by land area?",
        options: ["Europe", "Australia", "Antarctica", "South America"],
        correctAnswer: 1,
        points: 1
    },
    // 129
    {
        question: "What is the chemical symbol for iron?",
        options: ["Fe", "Ir", "In", "I"],
        correctAnswer: 0,
        points: 1
    },
    // 130
    {
        question: "Which bird is a universal symbol of peace?",
        options: ["Dove", "Sparrow", "Eagle", "Owl"],
        correctAnswer: 0,
        points: 1
    },
    // 131
    {
        question: "Which country is the origin of the Olympic Games?",
        options: ["Italy", "Greece", "Egypt", "China"],
        correctAnswer: 1,
        points: 1
    },
    // 132
    {
        question: "What is the largest organ inside the human body?",
        options: ["Brain", "Liver", "Heart", "Lungs"],
        correctAnswer: 1,
        points: 1
    },
    // 133
    {
        question: "Which is the longest river in Asia?",
        options: ["Ganges", "Yangtze", "Mekong", "Indus"],
        correctAnswer: 1,
        points: 1
    },
    // 134
    {
        question: "Which is the capital of Germany?",
        options: ["Munich", "Frankfurt", "Berlin", "Hamburg"],
        correctAnswer: 2,
        points: 1
    },
    // 135
    {
        question: "Who is the lead singer of the band Queen?",
        options: ["Freddie Mercury", "Elton John", "Mick Jagger", "David Bowie"],
        correctAnswer: 0,
        points: 1
    },
    // 136
    {
        question: "What is the name of the largest volcano in the world?",
        options: ["Mount Fuji", "Mauna Loa", "Mount St. Helens", "Mount Kilimanjaro"],
        correctAnswer: 1,
        points: 1
    },
    // 137
    {
        question: "Which animal is known as the ship of the desert?",
        options: ["Horse", "Camel", "Elephant", "Donkey"],
        correctAnswer: 1,
        points: 1
    },
    // 138
    {
        question: "What is the name of the famous clock tower in London?",
        options: ["Big Ben", "Eiffel Tower", "Leaning Tower of Pisa", "Statue of Liberty"],
        correctAnswer: 0,
        points: 1
    },
    // 139
    {
        question: "Which country is famous for sushi?",
        options: ["China", "Japan", "Korea", "Thailand"],
        correctAnswer: 1,
        points: 1
    },
    // 140
    {
        question: "What is the square root of 64?",
        options: ["6", "7", "8", "9"],
        correctAnswer: 2,
        points: 1
    },
    // 141
    {
        question: "Which element is found in all organic compounds?",
        options: ["Oxygen", "Hydrogen", "Carbon", "Nitrogen"],
        correctAnswer: 2,
        points: 1
    },
    // 142
    {
        question: "What is the currency of Mexico?",
        options: ["Peso", "Dollar", "Real", "Euro"],
        correctAnswer: 0,
        points: 1
    },
    // 143
    {
        question: "Which is the second largest country in the world by area?",
        options: ["Canada", "China", "Russia", "United States"],
        correctAnswer: 0,
        points: 1
    },
    // 144
    {
        question: "What is the chemical formula for salt?",
        options: ["NaCl", "KCl", "NaF", "CaCl2"],
        correctAnswer: 0,
        points: 1
    },
    // 145
    {
        question: "Which is the capital of Spain?",
        options: ["Barcelona", "Madrid", "Seville", "Valencia"],
        correctAnswer: 1,
        points: 1
    },
    // 146
    {
        question: "Who was the first man to walk on the moon?",
        options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"],
        correctAnswer: 1,
        points: 1
    },
    // 147
    {
        question: "What is the largest planet in terms of diameter?",
        options: ["Jupiter", "Saturn", "Neptune", "Earth"],
        correctAnswer: 0,
        points: 1
    },
    // 148
    {
        question: "Which country is famous for the Great Wall?",
        options: ["Japan", "China", "Mongolia", "Korea"],
        correctAnswer: 1,
        points: 1
    },
    // 149
    {
        question: "Which animal is the tallest in the world?",
        options: ["Elephant", "Giraffe", "Camel", "Horse"],
        correctAnswer: 1,
        points: 1
    },
    // 150
    {
        question: "What is the capital of Thailand?",
        options: ["Bangkok", "Phuket", "Chiang Mai", "Pattaya"],
        correctAnswer: 0,
        points: 1
    },
    // 151
    {
        question: "Which planet is known for having a giant storm called the Great Red Spot?",
        options: ["Saturn", "Jupiter", "Neptune", "Mars"],
        correctAnswer: 1,
        points: 1
    },
    // 152
    {
        question: "What is the chemical symbol for helium?",
        options: ["He", "H", "Hm", "Hy"],
        correctAnswer: 0,
        points: 1
    },
    // 153
    {
        question: "Which language has the most native speakers worldwide?",
        options: ["English", "Mandarin Chinese", "Hindi", "Spanish"],
        correctAnswer: 1,
        points: 1
    },
    // 154
    {
        question: "Which is the largest continent by population?",
        options: ["Asia", "Africa", "Europe", "North America"],
        correctAnswer: 0,
        points: 1
    },
    // 155
    {
        question: "What is the name of the fairy tale character with long hair who was locked in a tower?",
        options: ["Rapunzel", "Cinderella", "Sleeping Beauty", "Snow White"],
        correctAnswer: 0,
        points: 1
    },
    // 156
    {
        question: "Which is the most spoken language in South America?",
        options: ["Portuguese", "Spanish", "English", "French"],
        correctAnswer: 1,
        points: 1
    },
    // 157
    {
        question: "What is the capital of Turkey?",
        options: ["Istanbul", "Ankara", "Izmir", "Antalya"],
        correctAnswer: 1,
        points: 1
    },
    // 158
    {
        question: "Who was the first president of South Africa after the end of apartheid?",
        options: ["Nelson Mandela", "Jacob Zuma", "Thabo Mbeki", "Desmond Tutu"],
        correctAnswer: 0,
        points: 1
    },
    // 159
    {
        question: "Which country is famous for its pyramids and ancient pharaohs?",
        options: ["Sudan", "Egypt", "Greece", "Mexico"],
        correctAnswer: 1,
        points: 1
    },
    // 160
    {
        question: "What is the name of the longest bone in the human body?",
        options: ["Femur", "Tibia", "Fibula", "Humerus"],
        correctAnswer: 0,
        points: 1
    },
    // 161
    {
        question: "Which gas is commonly used in balloons to make them float?",
        options: ["Oxygen", "Hydrogen", "Helium", "Nitrogen"],
        correctAnswer: 2,
        points: 1
    },
    // 162
    {
        question: "Which country is known as the 'Land of a Thousand Lakes'?",
        options: ["Canada", "Finland", "Sweden", "Norway"],
        correctAnswer: 1,
        points: 1
    },
    // 163
    {
        question: "What is the capital of Argentina?",
        options: ["Buenos Aires", "Cordoba", "Rosario", "Mendoza"],
        correctAnswer: 0,
        points: 1
    },
    // 164
    {
        question: "What is the name of the galaxy that contains our Solar System?",
        options: ["Andromeda Galaxy", "Milky Way Galaxy", "Triangulum Galaxy", "Whirlpool Galaxy"],
        correctAnswer: 1,
        points: 1
    },
    // 165
    {
        question: "Which is the most abundant element in the Earth's crust?",
        options: ["Oxygen", "Silicon", "Aluminum", "Iron"],
        correctAnswer: 0,
        points: 1
    },
    // 166
    {
        question: "Which planet is known for its tilted axis and rings?",
        options: ["Uranus", "Neptune", "Saturn", "Jupiter"],
        correctAnswer: 0,
        points: 1
    },
    // 167
    {
        question: "What is the capital of New Zealand?",
        options: ["Wellington", "Auckland", "Christchurch", "Hamilton"],
        correctAnswer: 0,
        points: 1
    },
    // 168
    {
        question: "Which animal is known for its ability to regenerate limbs?",
        options: ["Starfish", "Lizard", "Frog", "Salamander"],
        correctAnswer: 3,
        points: 1
    },
    // 169
    {
        question: "What is the name of the process by which a liquid changes into a solid?",
        options: ["Melting", "Freezing", "Condensation", "Evaporation"],
        correctAnswer: 1,
        points: 1
    },
    // 170
    {
        question: "Which country is home to the kangaroo and koala?",
        options: ["South Africa", "Australia", "India", "Brazil"],
        correctAnswer: 1,
        points: 1
    },
    // 171
    {
        question: "What is the capital of Portugal?",
        options: ["Lisbon", "Porto", "Faro", "Coimbra"],
        correctAnswer: 0,
        points: 1
    },
    // 172
    {
        question: "Who is the Greek god of the sea?",
        options: ["Zeus", "Hades", "Poseidon", "Apollo"],
        correctAnswer: 2,
        points: 1
    },
    // 173
    {
        question: "What is the name of the largest rainforest in the world?",
        options: ["Congo Rainforest", "Amazon Rainforest", "Daintree Rainforest", "Sundarbans"],
        correctAnswer: 1,
        points: 1
    },
    // 174
    {
        question: "Which country is famous for the sport of sumo wrestling?",
        options: ["China", "Japan", "Korea", "Thailand"],
        correctAnswer: 1,
        points: 1
    },
    // 175
    {
        question: "What is the name of the process in which plants convert sunlight into energy?",
        options: ["Photosynthesis", "Respiration", "Fermentation", "Pollination"],
        correctAnswer: 0,
        points: 1
    },
    // 176
    {
        question: "Which is the largest desert in Asia?",
        options: ["Gobi Desert", "Thar Desert", "Karakum Desert", "Kyzylkum Desert"],
        correctAnswer: 0,
        points: 1
    },
    // 177
    {
        question: "What is the name of the first satellite sent into space?",
        options: ["Sputnik 1", "Explorer 1", "Apollo 11", "Voyager 1"],
        correctAnswer: 0,
        points: 1
    },
    // 178
    {
        question: "Which country is home to the ancient ruins of Machu Picchu?",
        options: ["Peru", "Mexico", "Brazil", "Chile"],
        correctAnswer: 0,
        points: 1
    },
    // 179
    {
        question: "Which is the smallest planet in our solar system?",
        options: ["Mercury", "Mars", "Venus", "Pluto"],
        correctAnswer: 0,
        points: 1
    },
    // 180
    {
        question: "Which country is famous for the invention of the printing press?",
        options: ["France", "Germany", "England", "Italy"],
        correctAnswer: 1,
        points: 1
    },
    // 181
    {
        question: "What is the name of the process where water vapor turns into liquid water?",
        options: ["Evaporation", "Condensation", "Sublimation", "Precipitation"],
        correctAnswer: 1,
        points: 1
    },
    // 182
    {
        question: "Which is the tallest waterfall in the world?",
        options: ["Niagara Falls", "Angel Falls", "Iguazu Falls", "Victoria Falls"],
        correctAnswer: 1,
        points: 1
    },
    // 183
    {
        question: "What is the capital of Kenya?",
        options: ["Mombasa", "Nairobi", "Kisumu", "Eldoret"],
        correctAnswer: 1,
        points: 1
    },
    // 184
    {
        question: "Which is the most spoken language in Africa?",
        options: ["Swahili", "Arabic", "Hausa", "Amharic"],
        correctAnswer: 1,
        points: 1
    },
    // 185
    {
        question: "What is the name of the first artificial satellite launched by the Soviet Union?",
        options: ["Sputnik 1", "Vostok 1", "Mir", "Soyuz"],
        correctAnswer: 0,
        points: 1
    },
    // 186
    {
        question: "Which is the largest island in the Mediterranean Sea?",
        options: ["Sicily", "Sardinia", "Cyprus", "Corsica"],
        correctAnswer: 0,
        points: 1
    },
    // 187
    {
        question: "Which country is known as the Land of Fire and Ice?",
        options: ["Norway", "Iceland", "Greenland", "Finland"],
        correctAnswer: 1,
        points: 1
    },
    // 188
    {
        question: "What type of animal is a Komodo dragon?",
        options: ["Lizard", "Snake", "Crocodile", "Dinosaur"],
        correctAnswer: 0,
        points: 1
    },
    // 189
    {
        question: "Which is the largest city in the United States by population?",
        options: ["Los Angeles", "Chicago", "Houston", "New York City"],
        correctAnswer: 3,
        points: 1
    },
    // 190
    {
        question: "What is the capital of France?",
        options: ["Lyon", "Marseille", "Paris", "Nice"],
        correctAnswer: 2,
        points: 1
    },
    // 191
    {
        question: "Which country is known for the Sahara Desert?",
        options: ["Egypt", "Morocco", "Algeria", "All of the above"],
        correctAnswer: 3,
        points: 1
    },
    // 192
    {
        question: "What is the largest internal organ in the human body?",
        options: ["Heart", "Liver", "Lungs", "Kidneys"],
        correctAnswer: 1,
        points: 1
    },
    // 193
    {
        question: "Which planet is closest to Earth?",
        options: ["Mars", "Venus", "Mercury", "Jupiter"],
        correctAnswer: 1,
        points: 1
    },
    // 194
    {
        question: "What does the acronym 'CPU' stand for in computing?",
        options: ["Central Processing Unit", "Computer Personal Unit", "Central Print Unit", "Computer Processing Unit"],
        correctAnswer: 0,
        points: 1
    },
    // 195
    {
        question: "Which is the capital city of India?",
        options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
        correctAnswer: 1,
        points: 1
    },
    // 196
    {
        question: "Which metal is used to make electrical wires due to its high conductivity?",
        options: ["Iron", "Copper", "Aluminum", "Silver"],
        correctAnswer: 1,
        points: 1
    },
    // 197
    {
        question: "What is the main ingredient in traditional Italian risotto?",
        options: ["Pasta", "Rice", "Bread", "Potatoes"],
        correctAnswer: 1,
        points: 1
    },
    // 198
    {
        question: "Which country is famous for the landmark Christ the Redeemer statue?",
        options: ["Argentina", "Brazil", "Chile", "Colombia"],
        correctAnswer: 1,
        points: 1
    },
    // 199
    {
        question: "What is the name of the fairy tale character who slept for 100 years?",
        options: ["Cinderella", "Sleeping Beauty", "Snow White", "Rapunzel"],
        correctAnswer: 1,
        points: 1
    },
    // 200
    {
        question: "Which is the largest planet in the solar system?",
        options: ["Earth", "Saturn", "Jupiter", "Neptune"],
        correctAnswer: 2,
        points: 1
    }
];
