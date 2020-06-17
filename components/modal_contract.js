const modal_contract = Vue.component('modal_contract', {
    props: ['request'],
    template: `
    <div class="modal" id="modalContract">
        <button v-on:click="closeDataOntvangenContractPopUp()" class="close-button" id="close-button-contract"><i class="far fa-times-circle"></i></button>

       <div class="modal-guts">
         <h2>Digitaal contract</h2>
         <textarea rows="20" col="20" v-model="request.contract.text" class=" readOnly modalTextarea"></textarea>
        </div>

        <div class="inline-buttons">
	      <button v-on:click="closeDataOntvangenContractPopUp()" class="programmer-blue-btn">Afsluiten</button>
	    </div>
      </div>

    </div>`,
    computed: {

    },
    watch: {

    },
    methods:{
        closeDataOntvangenContractPopUp:
        function(){
            this.$root.closeDataOntvangenContractPopUp();
        }
    }
});
