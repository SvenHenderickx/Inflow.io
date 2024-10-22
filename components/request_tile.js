const request_tile = Vue.component('request_tile', {
    props: ['request'],
    template: `
    <div class="request_tile">
    <button class="buttonOpenPopUp" v-on:click="showPopUpRequestDetail(request.id)" > <i class="fas fa-external-link-square-alt"></i> </button>
        <div id="nameholder">
            <div id="circleID">{{ getUserInitials(request.user) }}</div>
            <div id="information">
                <h3> {{ getUserName(request.user) }}</h3>
                <h5>{{ getUsersTeam(request.user) }}</h5>
            </div>
        </div>
        <div class="deadline" style="display: table;"><i class="far fa-clock"></i>{{ request.date }}</div>
        <h2>{{ request.title }}</h2>
        <p>{{ request.reason }}</p>
        <strong>Gewenste bestandstypes</strong>
        <div id="filetype">{{ request.filetypes }}</div>
        <div v-bind:currentStatus="request.status"
            v-bind:origin_you="request.origin_you"
            v-bind:request="request"
            is="next_step"
        >
        </div>
        <div  class="buttongroup fullwidth">
            <label v-if="request.status < 4">Snelle actie</label>
            <div
            v-bind:request="request"
            is="quick_reply">
            </div>
        </div>
    </div>
    `,
    computed: {

    },
    watch: {

    },
    methods:{
        getUserInitials:
        function(userId){
            return this.$parent.getUserInitials(userId);
        },
        getUserName:
        function(userId){
            return this.$parent.getUserName(userId)
        },
        getUsersTeam:
        function(userId){
            return this.$parent.getUsersTeam(userId);
        },
        showPopUpRequestDetail:
        function(requestId){
            this.$parent.showPopUpRequestDetail(requestId);
        }
    }
});
