$(document).ready(function() {
    const app = new Vue({
        el: '#app',
        data: {
            message: "Hello Vue.js",
            counter: 0,
            popup: null,
            showPopupForFase: null,
            openRequestDetail: false,
            requestId: null,
            showContract: false,
            fases: [{
                    name: "definitiefase",
                    requests: [{
                        id: 1,
                        title: "Hallo met contract",
                        user: 2,
                        team: 1,
                        filetypes: "PDF",
                        date: '2020-06-25',
                        description: "Zal worden gebruikt voor het achterhalen van de optimale locaties van stoplichten op drukke knooppunten test",
                        contract: {
                            text: 'Contract tekst ofzo',
                            is_signed: false
                        }
                    }]
                },
                {
                    name: "ontwerpfase",
                    requests: [{
                            id: 2,
                            title: "Hallo",
                            user: 3,
                            team: 1,
                            filetype: "PDF",
                            date: '2020-06-25',
                            description: "Zal worden gebruikt voor het achterhalen van de optimale locaties van stoplichten op drukke knooppunten test"
                        },
                        {
                            id: 3,
                            title: "Hallo",
                            user: 3,
                            team: 1,
                            filetype: "PDF",
                            date: '2020-06-25',
                            description: "Zal worden gebruikt voor het achterhalen van de optimale locaties van stoplichten op drukke knooppunten test"
                        }
                    ]
                }
            ],
            popupData: {
                title: null,
                user: "Goeli Cheng",
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
        }
    });
})
