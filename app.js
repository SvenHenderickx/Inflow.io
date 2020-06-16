$(document).ready(function() {
    const app = new Vue({
        el: '#app',
        data: {
            popup: null,
            showPopupForFase: null,
            openRequestDetail: false,
            requestId: null,
            fases: [{
                    name: "definitiefase",
                    requests: []
                },
                {
                    name: "ontwerpfase",
                    requests: [
                    ]
                }
            ],
            popupData: {
                    id: 0,
                    title: null,
                    user: 2,
                    team: "Team Ananas",
                    reason: null,
                    date: null,
                    forWhat:null,
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
                    name: 'David Widlak'
                },
                {
                    id: 2,
                    name: 'Goeli Cheng'
                },
                {
                    id: 3,
                    name: 'Sven Henderickx'
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
                    this.popupData.reason = null;
                    this.popupData.forWhat = null;
                    this.popupData.date = null;
                    this.popupData.selectedFiletype = "PNG";
                    this.popupData.id += 1;
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
                this.requestId = null;
            }
        }
    });
})
