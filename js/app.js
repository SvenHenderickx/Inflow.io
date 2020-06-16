new Vue({
    el: '#app',
    data: {
        message: "Hello Vue.js",
        counter: 0,
        popup: null,
        showPopupForFase: null,
        fases: [
            {
                name: "definitiefase",
                requests: [
                    {
                        title: "Hallo",
                        user:"Goeli Cheng",
                        team: "Team Ananas",
                        description: "Zal worden gebruikt voor het achterhalen van de optimale locaties van stoplichten op drukke knooppunten"
                    }
                ]
            },
            {
                name: "ontwerpfase",
                requests: [
                    {
                        title: "titel",
                        user: "Tim"
                    },
                    {
                        title: "titel",
                        user: "Jeffrey"
                    }]
            }
            ]
    },

    methods:{
        // greet: function(event){
        // 	alert (this.message)
        // }
        openPopup: function(faseName) {
            this.showPopupForFase = faseName;
        },
        addRequest: function(){
            const currentFase = this.fases.find(fase => fase.name === this.showPopupForFase);
            currentFase.requests.push({
                title: "asas",
                user: "Terence Koch",
                team: "ananas",
                description: "Zal worden gebruikt voor het achterhalen van de optimale locaties van stoplichten op drukke knooppunten"
            });
            this.showPopupForFase = null;
        }
        }
    });
