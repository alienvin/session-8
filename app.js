var app = new Vue({
  el: '#app',
  data: {
    firstName: "Aliénor",
    lastName: "Vinçotte",
    description: "Je suis étudiante à l'Ecole de journalisme de Sciences Po Paris et en apprentissage à franceinfo",
    photo: "https://pbs.twimg.com/profile_images/1039234114291998722/jhp-CRbW_400x400.jpg",
    twitter: "Alienor_V",
    github: "alienvin",
    mail: "alienor.vincotte@sciencespo.fr",
    experiences: [{
      dateBegin: "2018",
      dateEnd: "Today",
      name: "franceinfo",
      title: "Apprentie-journaliste",
      description: "Participation au travail de la rédaction"
    },
    {
      dateBegin: "Avril-Mai 2018",
      dateEnd: false,
      name: "Figaro.fr — service culture",
      title: "Stagiaire assistante de rédaction",
      description: "Participation au travail de la rédaction, développement et publication de dépêches AFP, rédaction et publication d'articles culturels, reportages"
    },
    {
      dateBegin: "Février-Avril 2018",
      dateEnd: false,
      name: "LE PETIT BULLETIN — Lyon",
      title: "Stagiaire assistante de rédaction",
      description: "Participation au travail de la rédaction"
    },

     {
      dateBegin: "Octobre-Décembre 2017",
      dateEnd: false,
      name: "LYON CAPITALE — Lyon",
      title: "Asistante de rédaction",
      description: false
    }, {
      dateBegin: "Été 2017",
      dateEnd: false,
      name: "France 2 — Washington",
      title: "Stagiaire et JRI chez les correspondants de France 2 aux États-Unis",
      description: false
    }],
    formations: [{
      dateBegin: "2016",
      dateEnd: "2019",
      name: "Master Journalisme",
      university: "Sciences Po Paris"
    }, {
      dateBegin: "2013",
      dateEnd: "2016",
      name: "Licence d'Histoire",
      university: "Université Paris-IV"
    }],
    languages: ["Anglais", "Espagnol","Langue des Signes Française (LSF)"],
    skills: ["Word", "Excel", "Photoshop", "Adobe Primaire", "HTML", "CSS", "Picasa"]
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName
    }
  }
})