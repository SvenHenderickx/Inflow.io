const request_detail = Vue.component('request_detail', {
    props: ['request'],
    template: `
    <div>
        <button class="closeButton" v-on:click="closeDetail()">X</button>
        <input class="inputLikeText title" v-model="request.title"></input>
        <textarea placeholder="Hier komt de beschrijving van je data aanvraag." rows="3" cols="40" class="inputLikeText normal" v-model="request.description"></textarea>
        <label>Waar wordt de data voor gebruikt?</label>
        <textarea placeholder="Hier komt de beschrijving van je data aanvraag." rows="3" cols="40" class="inputLikeText normal" v-model="request.description">
        </textarea>
        <div class="currentstep_container">
            <div id="afwachting">Wachten op antwoord
                <div id="actieVan">Vereist actie van Datastreams</div>

            </div>
        </div>
        <label>Deadline</label>
        <input class="dateinput" type="date" v-model="request.date"></input>
        <label>Gewenste bestandstypes</label>
        <p>{{ request.filetype }}</p>
        <aside>
            <div class="buttongroup mainButtons">
                <button class="primairy">Data aanleveren</button>
                <button class="">Reageren in chat</button>
                <button v-if="hasContract()" v-on:click="openContract(request.id)" class="">Contract inzien</button>
            </div>
            <div class="buttongroup">
                <label>Snelle actie</label>
                <button class="primairy">Accepteren</button>
                <button class="">Annuleren</button>
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
        },
        openContract:
        function(id){
            this.$parent.showContract = true;
        },
        hasContract:
        function(){
            return this.request.hasOwnProperty('contract');
        }
    }
});
