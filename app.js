

$(document).ready(function() {


    const app = new Vue({
        el: '#app',
        data: {
            message: "Hello Vue.js",
            counter: 0,
            popup: null,
            currentUser: 1,
            showPopupForFase: null,
            openRequestDetail: false,
            requestId: null,
            openDataVersturenId: null,
            showContract: false,
            openDataOntvangen: false,
            openDataVersturen: true,
            openDataOntvangenRequestId: null,
            openDataOntvangenContract: false,
            openDataOntvangenContractRequestId: null,
            fases: [{
                    name: "definitiefase",
                    requests: [{
                        id: 1,
                        user: 2,
                        origin_you: false,
                        team: 1,
                        status: 1,
                        title: "Back-end code gezipt.",
                        reason: 'Dit willen we gebruiken om te onderzoeken hoe snel en veilig het is.',
                        forWhat: 'Ze gaan deze code lokaal gebruiken en hier hun eigen tests mee doen. Deze code zal niet buiten de muren van het gebouw terecht komen en zal veilig gebruikt worden voor test doeleinden.',
                        filetypes: "ZIP",
                        date: '2020-06-25',
                        hasContract: true,
                        contract: {
                            text: 'Verboden te delen met personen buiten het project. De gegevens moeten veilig worden opgeslagen en niet openbaar op het internet staan zoals javascript. Er mogen geen persoongegevens zichtbaar zijn voor de testgebruikers',
                            is_signed: false
                        },
                        file: {
                            url: 'whatever.jpg',
                            name: 'Whatever',
                            password: '',
                            date: '2020-06-21'
                        }
                    }
                ]
                },
                {
                    name: "ontwerpfase",
                    requests: [{
                        id: 2,
                        user: 2,
                        origin_you: true,
                        team: 1,
                        status: 1,
                        title: "Back-end code gezipt.",
                        reason: 'Dit willen we gebruiken om te onderzoeken hoe snel en veilig het is.',
                        forWhat: 'Ze gaan deze code lokaal gebruiken en hier hun eigen tests mee doen. Deze code zal niet buiten de muren van het gebouw terecht komen en zal veilig gebruikt worden voor test doeleinden.',
                        filetypes: "ZIP",
                        date: '2020-06-25',
                        contract: {
                            text: 'Verboden te delen met personen buiten het project. De gegevens moeten veilig worden opgeslagen en niet openbaar op het internet staan zoals javascript. Er mogen geen persoongegevens zichtbaar zijn voor de testgebruikers',
                            is_signed: false
                        },
                        file: {
                            url: 'whatever.jpg',
                            name: 'Whatever',
                            password: '',
                            date: '2020-06-25'
                        }
                    }
                    ]
                }
            ],
            popupData: {
                title: null,
                user: 2,
                team: "Team Ananas",
                description: null,
                date: null,
                selectedFiletype: "PNG",
            },
            filetypes: [
                '.PNG',
                '.JPG',
                '.SVG',
                '.PDF'
            ],
            users: [{
                    id: 1,
                    name: 'David Widlak',
                    team: 2
                },
                {
                    id: 2,
                    name: 'Goeli Cheng',
                    team: 1
                },
                {
                    id: 3,
                    name: 'Sven Henderickx',
                    team: 1
                }
            ],
            teams: [
                {
                    id: 1,
                    name: "Team Ananas"
                },
                {
                    id: 2,
                    name: "Datastreams.io"
                }
            ]
        },
        computed: {

        },
        methods: {
            openPopup: function(faseName) {
                this.showPopupForFase = faseName;
            },
            addRequest: function() {
                const currentFase = this.fases.find(fase => fase.name === this.showPopupForFase);
                currentFase.requests.push(Object.assign({}, this.popupData));
                this.showPopupForFase = null;
                this.popupData.title = null;
                this.popupData.description = null;
                this.popupData.date = null;
                this.popupData.selectedFiletype = "PNG";
            },
            getUser: function(id) {
                let user;
                $.each(this.users, function(i, v) {
                    if (id == v.id) {
                        user = v;
                        return;
                    }
                })

                return user;
            },
            getUserName: function(id) {
                let user = this.getUser(id);
                return user.name;
            },
            getUserInitials: function(id) {
                let user = this.getUser(id);
                user = user.name.split(' ')
                return user[0].substring(0, 1) + user[1].substring(0, 1);
            },
            getRequest:
            function(id){
                let request;

                $.each(this.fases, function(i, v) {
                    $.each(v.requests, function(ix, va){
                        if (id == va.id) {
                            request = va;
                            return;
                        }
                    })
                })

                return request;
            },
            getCurrentRequest:
            function(){
                return this.getRequest(this.requestId);
            },
            showPopUpRequestDetail:
            function(id){

                this.openRequestDetail = true;
                this.requestId = id;
            },
            closeDetail:
            function(){
                this.openRequestDetail = false;
                this.openContract = false;
                this.requestId = null;
            },
            getUsersTeam:
            function(userId){
                let user = this.getUser(userId);
                return this.getTeamName(user.team);
            },
            getTeam:
            function(id) {
                let team;
                $.each(this.teams, function(i, v) {
                    if (id == v.id) {
                        team = v;
                        return;
                    }
                })

                return team;
            },
            getTeamName:
            function(id){
                return this.getTeam(id).name;
            },
            getContract:
            function(requestId){
                let contract;
                $.each(this.fases, function(i, v) {
                    $.each(this.requests, function(ix, va){
                        if(va.id == requestId){
                            contract = va.contract;
                            return;
                        }
                    })
                })

                return contract;
            },
            getCurrentContract:
            function(){
                return this.getContract(this.requestId);
            },
            openDataOntvangenPopUp:
            function(id){
                this.openDataOntvangenRequestId = id;
                this.openDataOntvangen = true;
            },
            closeDataOntvangenPopUp:
            function(){
                this.openDataOntvangenRequestId = null;
                this.openDataOntvangen = false;
            },
            openDataOntvangenContractPopUp:
            function(id){
                this.openDataOntvangenContHerinneringractRequestId = id;
                this.openDataOntvangenContract = true;
            },
            closeDataOntvangenContractPopUp:
            function(){
                this.openDataOntvangenContractRequestId = null;
                this.openDataOntvangenContract = false;
            }
        }
    });

})
