let LocalCmp = {
  template: `<div>
  <h1>Génère un nombre aléatoire entre {{min}} et {{max}} : {{randomNumber}} </h1>
  <button v-on:click="generateRandom">Generer</button>
  
  </div>`,
  props: ["min", "max"],
  data: function () {
    return {
      randomNumber: 0,

    }

  },
  methods: {

    generateRandom: function () {

      this.randomNumber = Math.floor(Math.random() * (this.max - this.min) + this.min)

    }
  }
};


let vm = new Vue({
  /*Création d'une instance de vue, et passage du code en option*/
  el: '#app',
  /*Sélecteur. Même syntaxe que le CSS*/
  data: {
    /*Données de l'application*/


    date: null,
    birthday: '1985-03-27',
    nom: 'haddou',
    prenom: 'kamal',
    showStory: false,
    voyages: ["maroc", "chili", "italie", "chine", "pays-bas"],
    story: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus distinctio labore maxime minima voluptatem voluptas necessitatibus! Facere culpa neque corporis repudiandae maiores et nam nulla voluptatem deserunt, aliquam aut voluptatum eos earum animi quasi commodi similique quibusdam omnis. Voluptas nesciunt at iusto ad mollitia asperiores, qui quia ipsam suscipit cumque!",
    time: null,
    price: 0,
    quantity: 0,
    taux: 20,
    totalht: 0,
    totalttc: 0,


  },

  components: {
    "nbr-aleatoire": LocalCmp

  },

  filters: {
    excerpt: function (value) {

      return value.substring(0, 30) + ' ...>> lire la suite';

    }
  },

  created: function () {
    let datenow = new Date()
    var options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }

    this.date = datenow.toLocaleDateString('fr', options)

    setInterval(() => {

      this.time = new Date().toLocaleTimeString('fr')
    }, 1000)

  },




  computed: {
    nomComplet: function () {


      return `Votre nom complet est ${this.prenom} ${this.nom.toUpperCase()}`;


    },


    age: function () {

      now = Date.now()

      temp = now - Date.parse(this.birthday)
      total = temp / 31536000000

      return ` ,vous avez ${Math.floor(total)} ans.`;

    },


  },

  methods: {

    addCountry: function (e) {

      this.voyages.push(e.target.value)

    },

    calcHt: function () {

      this.totalht = this.price * this.quantity

    },

    calcTtc: function () {

      this.calcHt()
      console.log("test total")
      this.totalttc = this.taux * this.totalht / 100 + this.totalht

    }



  }
});