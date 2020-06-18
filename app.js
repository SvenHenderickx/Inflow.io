

$(document).ready(function() {

    if (window.localStorage.getItem("NieuwOpSite") != "Nee") {
        location.href='index.html'
        window.localStorage.setItem("NieuwOpSite", "Nee");
    }

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
            openDataVersturen: false,
            showContract: false,
            showContractId: null,
            openDataOntvangen: false,
            openDataOntvangenRequestId: null,
            openDataOntvangenContract: false,
            openDataOntvangenContractRequestId: null,
            fases: [{
                    id: 1,
                    name: "Definitiefase",
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
                            password: 'loltest',
                            date: '2020-06-21'
                        }
                    }
                ]
                },
                {
                    name: "Ontwerpfase",
                    id: 2,
                    requests: [{
                        id: 2,
                        user: 4,
                        origin_you: true,
                        team: 2,
                        status: 1,
                        title: "Gegevens gebruikers",
                        reason: 'Dit willen we gebruiken om te onderzoeken hoe snel en veilig het is.',
                        forWhat: 'Ze gaan deze code lokaal gebruiken en hier hun eigen tests mee doen. Deze code zal niet buiten de muren van het gebouw terecht komen en zal veilig gebruikt worden voor test doeleinden.',
                        filetypes: ".CSV",
                        date: '2020-06-25',
                        hasContract: false,
                        contract: {
                            text: '',
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
                    name: "Bouwfase",
                    id: 3,
                    requests: [{
                        id: 3,
                        user: 4,
                        origin_you: true,
                        team: 2,
                        status: 1,
                        title: "Gegevens gebruikers",
                        reason: 'Dit willen we gebruiken om te onderzoeken hoe snel en veilig het is.',
                        forWhat: 'Ze gaan deze code lokaal gebruiken en hier hun eigen tests mee doen. Deze code zal niet buiten de muren van het gebouw terecht komen en zal veilig gebruikt worden voor test doeleinden.',
                        filetypes: ".CSV",
                        date: '2020-06-25',
                        hasContract: false,
                        contract: {
                            text: '',
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
                },
                {
                    id: 4,
                    name: 'Robert Pasman',
                    team: 2
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
                this.openDataOntvangenContractRequestId = id;
                this.openDataOntvangenContract = true;
            },
            closeDataOntvangenContractPopUp:
            function(){
                this.openDataOntvangenContractRequestId = null;
                this.openDataOntvangenContract = false;
            },
            openDataVersturenPopUp:
            function(requestId){
                this.openDataVersturenId = requestId;
                this.openDataVersturen = true;
            },
            closeDataVersturenPopUp:
            function(requestId){
                this.openDataVersturenId = null;
                this.openDataVersturen = false;
            },
            showContractPopUp:
            function(requestId){
                this.showContract = true;
                this.showContractId = requestId;
            },
            closeContractPopUp:
            function(requestId){
                this.showContract = false;
                this.showContractId = null;
            },
            checkHasFaseBefore:
            function(faseId){
                return (this.fases.length <= (faseId + 1));
            },
            checkHasFaseNext:
            function(faseId){
                return (this.fases.length > faseId);
            },
            checkFaseDone:
            function(faseId){
                let count = 0;
                let requestsC = 0;
                $.each(this.fases, function(i,v){
                    if(v.id == faseId){
                        requestsC = v.requests.length;
                        $.each(v.requests, function(ix, va){
                            if(va.status >= 4){
                                count++;
                            }
                        })
                    }

                })
                return count >= requestsC;
            },
            returnFaseClasses:
            function(faseId, direction){
                console.log('test')
                let classes = 'timeline_part '
                if(direction == 'right' && this.checkHasFaseNext(faseId)){
                    classes += ' ';

                    if(this.checkFaseDone(faseId)){
                        classes += 'done'
                    }
                    else{
                        if(this.checkHasFaseBefore(faseId)){
                            if(this.checkFaseDone(faseId - 1)){
                                classes += 'next_not_done'
                            }
                            else{
                                classes += 'not_done'
                            }

                        }
                        else{
                            classes += 'next_not_done'

                        }
                    }

                }


                if(direction == 'left' && this.checkHasFaseBefore(faseId)){
                    classes += ' ';
                    if(this.checkFaseDone(faseId - 1)){
                        classes += 'done'
                    }
                    else{
                        classes += 'not_done'
                    }
                }

                return classes;
            }
        }
    });

})
