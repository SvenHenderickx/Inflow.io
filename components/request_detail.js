const request_detail = Vue.component('request_detail', {
    props: ['request'],
    template: `
    <div>
        <button class="closeButton" v-on:click="closeDetail()">X</button>
        <input class="inputLikeText title" v-model="request.title"></input>
        <textarea placeholder="Hier komt de beschrijving van je data aanvraag." rows="3" cols="40" class="inputLikeText normal" v-model="request.reason"></textarea>
        <label>Waar wordt de data voor gebruikt?</label>
        <textarea placeholder="Hier komt de beschrijving van je data aanvraag." rows="3" cols="40" class="inputLikeText normal" v-model="request.forWhat">
        </textarea>
        <div v-bind:currentStatus="request.status"
            v-bind:origin_you="request.origin_you"
            v-bind:request="request"
            is="next_step"
        >
        </div>
        <label>Deadline</label>
        <input class="dateinput" type="date" v-model="request.date"></input>
        <label v-if="hasFilePreference()">Gewenste bestandstypes</label>
        <p v-if="hasFilePreference()">{{ request.filetypes }}</p>
        <aside>
            <div class="buttongroup mainButtons">
                <button v-if="hasContract()" v-on:click="openContract(request.id)" class="primairy">Contract inzien</button>
            </div>
            <div class="buttongroup">
                <label v-if="request.status < 4">Snelle actie</label>
                <div
                v-bind:request="request"
                is="quick_reply">
                </div>
            </div>
        </aside>
    </div>
    `,
    computed: {

    },
    watch: {

    },
    methods:{
        closeDetail:
        function(){
            this.$parent.closeDetail();
            this.$root.closeContractPopUp();
        },
        openContract:
        function(id){
            this.$parent.showContractPopUp(this.request.id);
        },
        hasContract:
        function(){
            if(this.request.contract.text.length > 0){
                return true;
            }
            else{
                return false;
            }
        },
        hasFilePreference:
        function(){
            if(this.request.filetypes.length > 0){
                return true;
            }
            else{
                return false;
            }
        }
    }
});
