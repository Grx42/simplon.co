function recherche_agent(code)
{
  var tab_agents = {
    "001":
    [
      ["Edward Donne", "Referred to in the Raymond Benson novel, Doubleshot, Edward Donne is the only agent 001."]
    ],

    "002":
    [
      ["Unnamed", "In The Living Daylights (film version), another 002, played by Glyn Baker, was in the training exercise at Gibraltar, with 004 and 007."],
      ["Bill Fairbanks", "A 002 first appears in Thunderball. He is shot through the neck and killed by Francisco Scaramanga, in Beirut, Lebanon, in 1969 (film version: The Man with the Golden Gun 1974). In The Living Daylights film, another Agent 002, named \"John\", played by Glyn Baker; was training at Gibraltar, with 004 and 007. 002 was \"killed\" and eliminated from the exercise when he landed close to a waiting SAS guard."]
    ],

    "003":
    [
      ["Jack Mason", "Another (unrelated) MI6 agent is Jack Mason, 003 who is shot in the gut and killed by Nikolai Diavolo, the villain, in the Everything or Nothing video game (2004). Diavolo is connected with the villain Max Zorin from A View to a Kill."],
      ["Jason Walters", "003 first appears in Thunderball. He is found dead, in Siberia, in A View to a Kill."]
    ],

    "004":
    [
      ["Frederick Wardner", "A 004 appears in the Benson novel The Facts of Death. Killed in Berlin."],
      ["Aidan Flemmings", "004 first appears in Thunderball. He is murdered by a false KGB agent who tags the body with \"Death to Spies\" in Russian after his support rope is cut and he is sent plummeting down a cliff to his death. In the GoldenEye video game, on the Silo mission briefing, Q mentions to 007 to \"remember to treat the timed explosives with respect – you remember what happened to 004 in Beirut\"; it is unclear whether he speaks of another agent or the one listed above."],
      ["Scarlett Papava", "In the Sebastian Faulks novel Devil May Care, Bond girl Scarlett Papava is unveiled as 004."]
    ],

    "005":
    [
      ["Stuart Thomas", "Was 005 until defective eyesight impaired his marksmanship, and he was made head of Station G (Greece) in Colonel Sun."]
    ],

    "006":
    [
      ["Major Jack Giddings", "006, a Royal Marine commando, is mentioned in On Her Majesty's Secret Service. In The Moneypenny Diaries: Guardian Angel he is named as Major Jack Giddings and second to Bond in the 00 section. "],
      ["Alec Trevelyan", "006 first appears in Thunderball, where he is portrayed by Peter Roy. When 006 was used again, he was named Alec Trevelyan, and served as the main antagonist in GoldenEye, where he was portrayed by Sean Bean. In a mission at Arkhangelsk, he is apparently shot and killed, but later reveals that he faked his death. He heads the Janus crime syndicate which plans to steal the GoldenEye satellite from the Russian Federation, intending to use it to cripple Britain down to a financial meltdown. His motive for these plans was a personal one: avenging his family, who were all Lienz Cossacks, betrayed to the Communists by the British government after World War II had ended. He also begrudged Bond's not allowing him time to escape the Soviet chemical weapons factory they were sent to destroy at the beginning of the film. Trevelyan is killed after Bond drops him from the antenna above the satellite dish, and the subsequent destruction of the facility."]
    ],

    "007":
    [
      ["James Bond", "James Bond is the only agent 007. During You Only Live Twice, Bond was transferred into another branch and given the number 7777, suggesting there was no active agent 007 in that time; he is reinstated as such in The Man with the Golden Gun. In the John Gardner novels, agent 007 is the remaining active 00-agent, the section was disbanded in the 1980s, later contradicted by Raymond Benson's novels."]
    ],

    "008":
    [
      ["Unnamed", "In the films, agent 008 is mentioned briefly when M threatens to replace Bond on an assignment, e.g. Goldfinger and The Living Daylights. The James Bond 007 role playing game released in the 1980s suggests 008 is a woman."],
      ["Bill Timothy", "In Goldfinger M threatens to replace 007 with agent 008. In The Living Daylights, M again threatens to replace 007 \"I'll recall 008 from Hong Kong\". In the film Goldfinger, Bond tells Auric Goldfinger, \"...if I fail to report, 008 replaces me.\" In the movies, 008 is the only one (other than Bond) that isn't always killed doing his job. In the video game James Bond 007, 008 gives Bond an exploding pen before dying. Another 008 is mentioned to have been murdered in the comic book VARGR for which 007 himself avenges the death of his colleague by taking the life of the latter's killer."]
    ],

    "009":
    [
      ["Unnamed", "In Spectre, Q references a new 009 when discussing a new Aston Martin with 007."],
      ["Unnamed", "In The World Is Not Enough, M assigned another 009 to kill Renard; despite putting a bullet in his head, Renard lives with the bullet slowly killing off his senses."],
      ["Unnamed", "Yet another unlucky holder of the rank is killed in Peru in the graphic novel Serpent's Tooth."],
      ["Unnamed", "Another 009 dies in the graphic novel Deadly Double."],
      ["Peter Smith", "009 first appears in Thunderball. Mischka and Grischka kill him (dressed as a clown) after the opening credits in Octopussy by throwing a knife into his back as he tries to escape them."]
    ],

    "0010":
    [
      ["Unnamed", "Referred to in the Benson novel The Man with the Red Tattoo."]
    ],

    "0011":
    [
      ["Cederic", "Mentioned briefly in the novel Moonraker as vanishing while on assignment in Singapore."]
    ],

    "0012":
    [
      ["Sam Johnston", "Although unmentioned on screen, Benson's The World Is Not Enough novelisation has Bond investigating 0012's death at story's start (seen in a photograph of a dark-haired man, in the film)."]
    ],

    "0013":
    [
      ["Briony Thorne", "A female 00-agent appearing in the comic strip Fear Face (published 18 January 1971 to 20 April 1971 in The Daily Express). Thorne is revealed to be a double agent for China."]
    ]
  };

  var resultats = [];


  for (id in tab_agents)
  {
    if(id == code)
    {
      for (i = 0; i < tab_agents[id].length; i++)
      {
        if (tab_agents[id][i][0] == "Unnamed")
        {
          tab_agents[id][i][0] = prompt("Le nom de cet agent n'est pas connu. Veuillez lui en donner un.");
        }
        //alert("Agent " + code + " : " + tab_agents[id][i][0] + ".\n" + tab_agents[id][i][1]);
        resultats.push(tab_agents[id][i][0]);
        resultats.push(tab_agents[id][i][1]);
      }
    }
  }

  return resultats;
}

var id_agent = prompt("Entrez le code d'un agent");

var tableau_resultat = recherche_agent(id_agent);

var tableauHtml = '';

for (i = 0; i < tableau_resultat.length;i+=2)
{
  tableauHtml += "<tr><td>" + tableau_resultat[i] + "</td><td>" + tableau_resultat[i+1] + "</td></tr>";
}

  document.getElementById('resultat').innerHTML = tableauHtml;
