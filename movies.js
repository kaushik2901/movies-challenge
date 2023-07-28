const movies = [
  {
    id: "lklepcxt8yc2wswuuej",
    title: "The Marvels",
    description:
      "Carol Danvers AKA Captain Marvel has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to a Kree revolutionary, her powers become entangled with that of Jersey City super-fan Kamala Khan, aka Ms. Marvel, and Carol's estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau.",
    imageURL:
      "https://res.cloudinary.com/augustomarcelo/image/upload/v1679777423/mcuapi/gallery/Movies/the_marvels/posters/2.jpg",
    duration: 123,
    likes: 88,
    createdAt: "2023-07-27T17:06:20.225Z",
    updatedAt: "2023-07-27T17:06:20.225Z",
  },
  {
    id: "lklepcxtoeddnup42ml",
    title: "Guardians of the Galaxy Vol. 3",
    description:
      "In Marvel Studios Guardians of the Galaxy Vol. 3 our beloved band of misfits are looking a bit different these days. Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
    imageURL:
      "https://res.cloudinary.com/augustomarcelo/image/upload/v1676543203/mcuapi/gallery/Movies/guardians_of_the_galaxy_vol_3/posters/3.jpg",
    duration: 149,
    likes: 98,
    createdAt: "2023-07-27T17:06:20.225Z",
    updatedAt: "2023-07-27T17:06:20.225Z",
  },
  {
    id: "lklepcxt5l7g1v7dsza",
    title: "Ant-Man and The Wasp: Quantumania",
    description:
      "In the film, which officially kicks off phase 5 of the Marvel Cinematic Universe, Super-Hero partners Scott Lang and Hope Van Dyne return to continue their adventures as Ant-Man and the Wasp. Together, with Hope's parents Hank Pym and Janet Van Dyne, the family finds themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought was possible. Jonathan Majors joins the adventure as Kang.",
    imageURL:
      "https://res.cloudinary.com/augustomarcelo/image/upload/v1666736814/mcuapi/gallery/Movies/ant-man_and_the_wasp_quantumania/posters/2.jpg",
    duration: 124,
    likes: 81,
    createdAt: "2023-07-27T17:06:20.225Z",
    updatedAt: "2023-07-27T17:06:20.225Z",
  },
  {
    id: "lklepcxtau8c6aor7g8",
    title: "Black Panther: Wakanda Forever",
    description:
      "Queen Ramonda (Angela Bassett), Shuri (Letitia Wright), M'Baku (Winston Duke), Okoye (Danai Gurira) and the Dora Milaje (including Florence Kasumba), fight to protect their nation from intervening world powers in the wake of King T'Challa's death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia (Lupita Nyong'o) and Everett Ross (Martin Freeman) and forge a new path for the kingdom of Wakanda.",
    imageURL:
      "https://res.cloudinary.com/augustomarcelo/image/upload/v1665238515/mcuapi/gallery/Movies/black_panther_wakanda_forever/posters/3.jpg",
    duration: 161,
    likes: 97,
    createdAt: "2023-07-27T17:06:20.225Z",
    updatedAt: "2023-07-27T17:06:20.225Z",
  },
  {
    id: "lklepcxtlq7upcpfjyl",
    title: "Thor: Love and Thunder",
    description:
      "The film finds Thor on a journey unlike anything he's ever faced — a quest for inner peace. But his retirement is interrupted by a galactic killer known as Gorr the God Butcher, who seeks the extinction of the gods. To combat the threat, Thor enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who — to Thor's surprise — inexplicably wields his magical hammer, Mjolnir, as the Mighty Thor.",
    imageURL:
      "https://res.cloudinary.com/augustomarcelo/image/upload/v1653410371/mcuapi/gallery/Movies/thor_love_and_thunder/3.jpg",
    duration: 119,
    likes: 81,
    createdAt: "2023-07-27T17:06:20.225Z",
    updatedAt: "2023-07-27T17:06:20.225Z",
  },
  {
    id: "lklepcxtqw3qzvlffgh",
    title: "Doctor Strange in the Multiverse of Madness",
    description:
      "Marvel Studios' 'Doctor Strange in the Multiverse of Madness'—a thrilling ride through the Multiverse with Doctor Strange, his trusted friend Wong and Wanda Maximoff, aka Scarlet Witch. 'Doctor Strange in the Multiverse of Madness' opens in U.S. theaters on May 6, 2022",
    imageURL:
      "https://res.cloudinary.com/augustomarcelo/image/upload/v1675212381/mcuapi/gallery/Movies/doctor_strange_in_the_multiverse_of_madness/posters/2.jpg",
    duration: 126,
    likes: 94,
    createdAt: "2023-07-27T17:06:20.225Z",
    updatedAt: "2023-07-27T17:06:20.225Z",
  },
  {
    id: "lklepcxtchkp5chp24i",
    title: "Spider-Man: No Way Home",
    description:
      "For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero is unmasked and no longer able to separate his normal life from the high-stakes of being a Super Hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
    imageURL:
      "https://res.cloudinary.com/augustomarcelo/image/upload/v1675212281/mcuapi/gallery/Movies/spider-man_no_way_home/posters/1.jpg",
    duration: 148,
    likes: 91,
    createdAt: "2023-07-27T17:06:20.225Z",
    updatedAt: "2023-07-27T17:06:20.225Z",
  },
  {
    id: "lklepcxttcv0khr3rmm",
    title: "Eternals",
    description:
      "Marvel Studios' Eternals features an exciting new team of Super Heroes in the Marvel Cinematic Universe, ancient aliens who have been living on Earth in secret for thousands of years. Following the events of Avengers: Endgame, an unexpected tragedy forces them out of the shadows to reunite against mankind's most ancient enemy, The Deviants.",
    imageURL:
      "https://res.cloudinary.com/augustomarcelo/image/upload/v1675212199/mcuapi/gallery/Movies/eternals/posters/1.jpg",
    duration: 157,
    likes: 89,
    createdAt: "2023-07-27T17:06:20.225Z",
    updatedAt: "2023-07-27T17:06:20.225Z",
  },
  {
    id: "lklepcxturfwdpx33br",
    title: "Shang-Chi and The Legend of The Ten Rings",
    description:
      "Marvel Studios' Shang-Chi and The Legend of The Ten Rings stars Simu Liu as Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization. The film also stars Tony Leung as Wenwu, Awkwafina as Shang-Chi's friend Katy and Michelle Yeoh as Jiang Nan, as well as Fala Chen, Meng'er Zhang, Florian Munteanu and Ronny Chieng.",
    imageURL:
      "https://res.cloudinary.com/augustomarcelo/image/upload/v1675212103/mcuapi/gallery/Movies/shang-chi_and_the_legends_of_the_ten_rings/posters/1.jpg",
    duration: 132,
    likes: 91,
    createdAt: "2023-07-27T17:06:20.225Z",
    updatedAt: "2023-07-27T17:06:20.225Z",
  },
  {
    id: "lklepcxt1a94lda4g2x",
    title: "Black Widow",
    description:
      "In Marvel Studios' action-packed spy thriller “Black Widow”, Natasha Romanoff aka Black Widow confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.",
    imageURL:
      "https://res.cloudinary.com/augustomarcelo/image/upload/v1675212009/mcuapi/gallery/Movies/black_widow/posters/1.jpg",
    duration: 135,
    likes: 96,
    createdAt: "2023-07-27T17:06:20.225Z",
    updatedAt: "2023-07-27T17:06:20.225Z",
  },
  {
    id: "lklepcxteatckqeml87",
    title: "Spider-Man: Far From Home",
    description:
      "Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever.",
    imageURL:
      "https://res.cloudinary.com/augustomarcelo/image/upload/v1675211910/mcuapi/gallery/Movies/spider-man_far_from_home/posters/1.jpg",
    duration: 129,
    likes: 90,
    createdAt: "2023-07-27T17:06:20.225Z",
    updatedAt: "2023-07-27T17:06:20.225Z",
  },
  {
    id: "lklepcxtwnsaxdq29a",
    title: "Avengers: Endgame",
    description:
      "The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining Avengers to take one final stand in Marvel Studios' grand conclusion to twenty-two films, Avengers: Endgame.",
    imageURL:
      "https://res.cloudinary.com/augustomarcelo/image/upload/v1675211808/mcuapi/gallery/Movies/avengers_endgame/posters/1.jpg",
    duration: 182,
    likes: 95,
    createdAt: "2023-07-27T17:06:20.225Z",
    updatedAt: "2023-07-27T17:06:20.225Z",
  },
  {
    id: "lklepcxtl04pi2amoh",
    title: "Captain Marvel",
    description:
      "Set in the 1990s, Marvel Studios' Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe that follows the journey of Carol Danvers as she becomes one of the universe's most powerful heroes. While a galactic war between two alien races reaches Earth, Danvers finds herself and a small cadre of allies at the center of the maelstrom.",
    imageURL:
      "https://res.cloudinary.com/augustomarcelo/image/upload/v1675211712/mcuapi/gallery/Movies/captain_marvel/posters/1.jpg",
    duration: 125,
    likes: 85,
    createdAt: "2023-07-27T17:06:20.225Z",
    updatedAt: "2023-07-27T17:06:20.225Z",
  },
  {
    id: "lklepcxtt7d5jdqz5es",
    title: "Ant-Man and The Wasp",
    description:
      "From the Marvel Cinematic Universe comes a new chapter featuring heroes with the astonishing ability to shrink: Ant-Man and The Wasp.. In the aftermath of Captain America: Civil War, Scott Lang (Paul Rudd) grapples with the consequences of his choices as both a Super Hero and a father. As he struggles to rebalance his home life with his responsibilities as Ant-Man, he's confronted by Hope van Dyne (Evangeline Lilly) and Dr. Hank Pym (Michael Douglas) with an urgent new mission. Scott must once again put on the suit and learn to fight alongside The Wasp as the team works together to uncover secrets from their past.",
    imageURL:
      "https://res.cloudinary.com/augustomarcelo/image/upload/v1675211606/mcuapi/gallery/Movies/ant-man_and_the_wasp/posters/1.jpg",
    duration: 125,
    likes: 87,
    createdAt: "2023-07-27T17:06:20.225Z",
    updatedAt: "2023-07-27T17:06:20.225Z",
  },
  {
    id: "lklepcxtpu04lpilj99",
    title: "Avengers: Infinity War",
    description:
      "An unprecedented cinematic journey ten years in the making and spanning the entire Marvel Cinematic Universe, Marvel Studios' Avengers: Infinity War brings to the screen the ultimate, deadliest showdown of all time. As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
    imageURL:
      "https://res.cloudinary.com/augustomarcelo/image/upload/v1675211514/mcuapi/gallery/Movies/avengers_infinity_war/posters/1.jpg",
    duration: 149,
    likes: 97,
    createdAt: "2023-07-27T17:06:20.225Z",
    updatedAt: "2023-07-27T17:06:20.225Z",
  },
  {
    id: "lklepcxt2ud1ploik3c",
    title: "Black Panther",
    description:
      "Marvel Studios' Black Panther follows T'Challa who, after the death of his father, the King of Wakanda, returns home to the isolated, technologically advanced African nation to succeed to the throne and take his rightful place as king. But when a powerful old enemy reappears, T'Challa's mettle as king - and Black Panther - is tested when he is drawn into a formidable conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people and their way of life.",
    imageURL:
      "https://res.cloudinary.com/augustomarcelo/image/upload/v1675211435/mcuapi/gallery/Movies/black_panther/posters/1.jpg",
    duration: 134,
    likes: 86,
    createdAt: "2023-07-27T17:06:20.225Z",
    updatedAt: "2023-07-27T17:06:20.225Z",
  },
  {
    id: "lklepcxtgzyatb79fvi",
    title: "Thor: Ragnarok",
    description:
      "Thor is imprisoned on the other side of the universe without his mighty hammer and finds himself in a race against time to get back to Asgard to stop Ragnarok - the destruction of his homeworld and the end of Asgardian civilization - at the hands of an all-powerful new threat, the ruthless Hela. But first he must survive a deadly gladiatorial contest that pits him against his former ally and fellow Avenger - the Incredible Hulk!",
    imageURL:
      "https://res.cloudinary.com/augustomarcelo/image/upload/v1675211289/mcuapi/gallery/Movies/thor_ragnarok/posters/1.jpg",
    duration: 130,
    likes: 80,
    createdAt: "2023-07-27T17:06:20.225Z",
    updatedAt: "2023-07-27T17:06:20.225Z",
  },
  {
    id: "lklepcxt8wmwnajgk8a",
    title: "Spider-Man: Homecoming",
    description:
      "A young Peter Parker/Spider-Man (Tom Holland), who made his sensational debut in Captain America: Civil War, begins to navigate his newfound identity as the web-slinging super hero in Spider-Man: Homecoming. Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May (Marisa Tomei), under the watchful eye of his new mentor Tony Stark (Robert Downey, Jr.). Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture (Michael Keaton) emerges as a new villain, everything that Peter holds most important will be threatened.",
    imageURL:
      "https://res.cloudinary.com/augustomarcelo/image/upload/v1675208337/mcuapi/gallery/Movies/spider-man_homecoming/posters/1.jpg",
    duration: 133,
    likes: 95,
    createdAt: "2023-07-27T17:06:20.225Z",
    updatedAt: "2023-07-27T17:06:20.225Z",
  },
  {
    id: "lklepcxtigldz0gjbgc",
    title: "Guardians of the Galaxy Vol. 2",
    description:
      "Set to the backdrop of 'Awesome Mixtape #2,' Marvel's Guardians of the Galaxy Vol. 2 continues the team's adventures as they traverse the outer reaches of the cosmos. The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage. Old foes become new allies and fan-favorite characters from the classic comics will come to our heroes' aid as the Marvel cinematic universe continues to expand.",
    imageURL:
      "https://res.cloudinary.com/augustomarcelo/image/upload/v1675208240/mcuapi/gallery/Movies/guardians_of_galaxy_vol_2/posters/1.jpg",
    duration: 136,
    likes: 88,
    createdAt: "2023-07-27T17:06:20.225Z",
    updatedAt: "2023-07-27T17:06:20.225Z",
  },
  {
    id: "lklepcxttoekh92ne6a",
    title: "Doctor Strange",
    description:
      "From Marvel Studios comes Doctor Strange, the story of world-famous neurosurgeon Dr. Stephen Strange whose life changes forever after a horrific car accident robs him of the use of his hands. When traditional medicine fails him, he is forced to look for healing, and hope, in an unlikely place - mysterious enclave known as Kamar-Taj. He quickly learns that this is not just a center for healing but also the front line of a battle against unseen dark forces bent on destroying our reality. Before long StrangeÔÇöarmed with newly acquired magical powers - is forced to choose whether to return to his life of fortune and status or leave it all behind to defend the world as the most powerful sorcerer in existence.",
    imageURL:
      "https://res.cloudinary.com/augustomarcelo/image/upload/v1675208132/mcuapi/gallery/Movies/doctor_strange/posters/1.jpg",
    duration: 115,
    likes: 95,
    createdAt: "2023-07-27T17:06:20.225Z",
    updatedAt: "2023-07-27T17:06:20.225Z",
  },
  {
    id: "lklepcxt148qk78k9t3n",
    title: "Captain America: Civil War",
    description:
      "Marvel's 'Captain America: Civil War' finds Steve Rogers leading the newly formed team of Avengers in their continued efforts to safeguard humanity. But after another incident involving the Avengers results in collateral damage, political pressure mounts to install a system of accountability, headed by a governing body to oversee and direct the team. The new status quo fractures the Avengers, resulting in two campsÔÇöone led by Steve Rogers and his desire for the Avengers to remain free to defend humanity without government interference, and the other following Tony Stark's surprising decision to support government oversight and accountability.",
    imageURL:
      "https://res.cloudinary.com/augustomarcelo/image/upload/v1675208047/mcuapi/gallery/Movies/captain_america_civil_war/posters/1.jpg",
    duration: 147,
    likes: 82,
    createdAt: "2023-07-27T17:06:20.225Z",
    updatedAt: "2023-07-27T17:06:20.225Z",
  },
  {
    id: "lklepcxtj69diezvfv",
    title: "Ant-Man",
    description:
      "The next evolution of the Marvel Cinematic Universe brings a founding member of The Avengers to the big screen for the first time with Marvel Studios' Ant-Man. Armed with the astonishing ability to shrink in scale but increase in strength, master thief Scott Lang must embrace his inner-hero and help his mentor, Doctor Hank Pym, protect the secret behind his spectacular Ant-Man suit from a new generation of towering threats. Against seemingly insurmountable obstacles, Pym and Lang must plan and pull off a heist that will save the world.",
    imageURL:
      "https://res.cloudinary.com/augustomarcelo/image/upload/v1675207953/mcuapi/gallery/Movies/ant-man/posters/1.jpg",
    duration: 117,
    likes: 82,
    createdAt: "2023-07-27T17:06:20.225Z",
    updatedAt: "2023-07-27T17:06:20.225Z",
  },
  {
    id: "lklepcxt29e0xe0wmqm",
    title: "Avengers: Age of Ultron",
    description:
      "Marvel Studios presents 'Avengers: Age of Ultron', the epic follow-up to the biggest Super Hero movie of all time. When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth's Mightiest Heroes, including Iron Man, Captain America, Thor, The Incredible Hulk, Black Widow and Hawkeye, are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to the Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.",
    imageURL:
      "https://res.cloudinary.com/augustomarcelo/image/upload/v1675207859/mcuapi/gallery/Movies/avengers_age_of_ultron/posters/1.jpg",
    duration: 141,
    likes: 83,
    createdAt: "2023-07-27T17:06:20.225Z",
    updatedAt: "2023-07-27T17:06:20.225Z",
  },
  {
    id: "lklepcxt22vk8c0mc1k",
    title: "Guardians of the Galaxy",
    description:
      "An action-packed, epic space adventure, Marvel's Guardians of the Galaxy, expands the Marvel Cinematic Universe into the cosmos, where brash adventurer Peter Quill finds himself the object of an unrelenting bounty hunt after stealing a mysterious orb coveted by Ronan, a powerful villain with ambitions that threaten the entire universe. To evade the ever-persistent Ronan, Quill is forced into an uneasy truce with a quartet of disparate misfits--Rocket, a gun-toting raccoon; Groot, a tree-like humanoid; the deadly and enigmatic Gamora; and the revenge-driven Drax the Destroyer. But when Quill discovers the true power of the orb and the menace it poses to the cosmos, he must do his best to rally his ragtag rivals for a last, desperate stand--with the galaxy's fate in the balance.",
    imageURL:
      "https://res.cloudinary.com/augustomarcelo/image/upload/v1675207727/mcuapi/gallery/Movies/guardians_of_the_galaxy/posters/1.jpg",
    duration: 121,
    likes: 96,
    createdAt: "2023-07-27T17:06:20.225Z",
    updatedAt: "2023-07-27T17:06:20.225Z",
  },
  {
    id: "lklepcxtw2o65jtzpoa",
    title: "Captain America: The Winter Soldier",
    description:
      "After the cataclysmic events in New York with The Avengers, Marvel's Captain America: The Winter Soldier, finds Steve Rogers, aka Captain America, living quietly in Washington, D.C. and trying to adjust to the modern world. But when a S.H.I.E.L.D. colleague comes under attack, Steve becomes embroiled in a web of intrigue that threatens to put the world at risk. Joining forces with the Black Widow, Captain America struggles to expose the ever-widening conspiracy while fighting off professional assassins sent to silence him at every turn. When the full scope of the villainous plot is revealed, Captain America and the Black Widow enlist the help of a new ally, the Falcon. However, they soon find themselves up against an unexpected and formidable enemy--the Winter Soldier.",
    imageURL:
      "https://res.cloudinary.com/augustomarcelo/image/upload/v1675207589/mcuapi/gallery/Movies/captain_america_the_winter_soldier/posters/1.jpg",
    duration: 136,
    likes: 80,
    createdAt: "2023-07-27T17:06:20.225Z",
    updatedAt: "2023-07-27T17:06:20.225Z",
  },
  {
    id: "lklepcxt6dphphfapp",
    title: "Thor: The Dark World",
    description:
      "In the aftermath of Marvel's Thor and Marvel's The Avengers, Thor fights to restore order across the cosmos...but an ancient race led by the vengeful Malekith returns to plunge the universe back into darkness. Faced with an enemy that even Odin and Asgard cannot withstand, Thor must embark on his most perilous and personal journey yet, one that will reunite him with Jane Foster and force him to sacrifice everything to save us all.",
    imageURL:
      "https://res.cloudinary.com/augustomarcelo/image/upload/v1675207480/mcuapi/gallery/Movies/thor_the_dark_world/posters/1.jpg",
    duration: 112,
    likes: 89,
    createdAt: "2023-07-27T17:06:20.225Z",
    updatedAt: "2023-07-27T17:06:20.225Z",
  },
  {
    id: "lklepcxtq1gnxeo1f8g",
    title: "Iron Man 3",
    description:
      "Marvel's Iron Man 3 pits brash-but-brilliant industrialist Tony Stark/Iron Man against an enemy whose reach knows no bounds. When Stark finds his personal world destroyed at his enemy's hands, he embarks on a harrowing quest to find those responsible. This journey, at every turn, will test his mettle. With his back against the wall, Stark is left to survive by his own devices, relying on his ingenuity and instincts to protect those closest to him. As he fights his way back, Stark discovers the answer to the question that has secretly haunted him: does the man make the suit or does the suit make the man",
    imageURL:
      "https://res.cloudinary.com/augustomarcelo/image/upload/v1675207306/mcuapi/gallery/Movies/iron_man_3/posters/1.jpg",
    duration: 130,
    likes: 84,
    createdAt: "2023-07-27T17:06:20.225Z",
    updatedAt: "2023-07-27T17:06:20.225Z",
  },
  {
    id: "lklepcxtpuoh6ovoz69",
    title: "The Avengers",
    description:
      "Marvel Studios presents in association with Paramount Pictures Marvel's The Avengers--the super hero team up of a lifetime, featuring iconic Marvel super heroes Iron Man, the Incredible Hulk, Thor, Captain America, Hawkeye and Black Widow. When an unexpected enemy emerges that threatens global safety and security, Nick Fury, Director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins.",
    imageURL:
      "https://res.cloudinary.com/augustomarcelo/image/upload/v1675207189/mcuapi/gallery/Movies/the_avengers/posters/1.jpg",
    duration: 143,
    likes: 80,
    createdAt: "2023-07-27T17:06:20.225Z",
    updatedAt: "2023-07-27T17:06:20.225Z",
  },
  {
    id: "lklepcxtd9igwl0ktxc",
    title: "Captain America: The First Avenger",
    description:
      "Marvel's 'Captain America: The First Avenger' focuses on the early days of the Marvel Universe when Steve Rogers volunteers to participate in an experimental program that turns him into the Super Soldier known as Captain America.",
    imageURL:
      "https://res.cloudinary.com/augustomarcelo/image/upload/v1675207074/mcuapi/gallery/Movies/captain_america_the_first_avenger/posters/1.jpg",
    duration: 124,
    likes: 80,
    createdAt: "2023-07-27T17:06:20.225Z",
    updatedAt: "2023-07-27T17:06:20.225Z",
  },
  {
    id: "lklepcxtr87v7kb9zoa",
    title: "Thor",
    description:
      "As the son of Odin, king of the Norse gods, Thor will soon inherit the throne of Asgard from his aging father. However, on the day that he is to be crowned, Thor reacts with brutality when the gods' enemies, the Frost Giants, enter the palace in violation of their treaty. As punishment, Odin banishes Thor to Earth. While Loki, Thor's brother, plots mischief in Asgard, Thor, now stripped of his powers, faces his greatest threat.",
    imageURL:
      "https://res.cloudinary.com/augustomarcelo/image/upload/v1675206905/mcuapi/gallery/Movies/thor/posters/1.jpg",
    duration: 115,
    likes: 81,
    createdAt: "2023-07-27T17:06:20.225Z",
    updatedAt: "2023-07-27T17:06:20.225Z",
  },
  {
    id: "lklepcxtqcn56b87qwq",
    title: "Iron Man 2",
    description:
      "With the world now aware that he is Iron Man, billionaire inventor Tony Stark faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts and Rhodey Rhodes by his side, Tony must forge new alliances and confront a powerful new enemy.",
    imageURL:
      "https://res.cloudinary.com/augustomarcelo/image/upload/v1675206796/mcuapi/gallery/Movies/iron_man_2/posters/1.jpg",
    duration: 124,
    likes: 90,
    createdAt: "2023-07-27T17:06:20.225Z",
    updatedAt: "2023-07-27T17:06:20.225Z",
  },
  {
    id: "lklepcxtzo58dy2djz",
    title: "The Incredible Hulk",
    description:
      "In this new beginning, scientist Bruce Banner desperately hunts for a cure to the gamma radiation that poisoned his cells and unleashes the unbridled force of rage within him: The Hulk. Living in the shadows--cut off from a life he knew and the woman he loves, Betty Ross--Banner struggles to avoid the obsessive pursuit of his nemesis, General Thunderbolt Ross and the military machinery that seeks to capture him and brutally exploit his power. As all three grapple with the secrets that led to the Hulk's creation, they are confronted with a monstrous new adversary known as the Abomination, whose destructive strength exceeds even the Hulk's own. One scientist must make an agonizing final choice: accept a peaceful life as Bruce Banner or find heroism in the creature he holds inside--The Incredible Hulk.",
    imageURL:
      "https://res.cloudinary.com/augustomarcelo/image/upload/v1675206567/mcuapi/gallery/Movies/the_incredible_hulk/posters/1.jpg",
    duration: 112,
    likes: 96,
    createdAt: "2023-07-27T17:06:20.225Z",
    updatedAt: "2023-07-27T17:06:20.225Z",
  },
  {
    id: "lklepcxtgpiqxheu849",
    title: "Iron Man",
    description:
      "2008's Iron Man tells the story of Tony Stark, a billionaire industrialist and genius inventor who is kidnapped and forced to build a devastating weapon. Instead, using his intelligence and ingenuity, Tony builds a high-tech suit of armor and escapes captivity. When he uncovers a nefarious plot with global implications, he dons his powerful armor and vows to protect the world as Iron Man.",
    imageURL:
      "https://res.cloudinary.com/augustomarcelo/image/upload/v1675206317/mcuapi/gallery/Movies/iron_man/posters/1.jpg",
    duration: 126,
    likes: 82,
    createdAt: "2023-07-27T17:06:20.225Z",
    updatedAt: "2023-07-27T17:06:20.225Z",
  },
];

module.exports = movies;
