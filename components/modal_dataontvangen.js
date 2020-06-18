const modal_dataontvangen = Vue.component('modal_dataontvangen', {
    props: ['request'],
    data(){
        return {
            hasCheckedVoorwaarden: false,
            enteredPassword: '',
            hasCheckedContract: false
        }
    },
    template: `
    <div class="modal" id="modalReceive">
	  <button v-on:click="closeDataOntvangenPopUp()" class="close-button" id="close-button-rec"><i class="far fa-times-circle"></i></button>

	  <div class="modalHeader">
	    <div class="userTag">DS</div>
	    <div class="modalTitling">
	      <h2 style="margin-top:5px;">Data ontvangen</h2>
	      <p style="margin-top:5px;">Datastreams project</p>
	    </div>
	  </div>

	  <div class="modal-guts">
	    <p class="light-p-titling">Welke data ze willen ontvangen</p>
	    <p>{{ request.forWhat }}</p>

	    <label v-if="checkHasPassword()" for="upload" style="display: block;">Wachtwoord</label>
	    <input v-model="enteredPassword" v-if="checkHasPassword()" class="modalTextarea" name="date" placeholder="Vul hier het wachtwoord in..." type="password" />

	    <p v-if="checkHasDate()" class="light-p-titling">Verloopt op</p>
	    <div v-if="checkHasDate()" class="deadline" style="display: table;"><i class="far fa-clock"></i>{{ request.file.date }}</div>

        <label v-on:click="openContract()" v-if="checkHasContract()" class="container">Contract
	      <input v-if="checkHasContract()" v-model="hasCheckedContract" type="checkbox">
	      <span v-if="checkHasContract()" class="checkmark"></span>
	    </label></br>

	    <label class="container">Ik ga akkoord met de voorwaarden
	      <input v-model="hasCheckedVoorwaarden" type="checkbox">
          <span class="checkmark"></span>
	    </label>

	    <div class="inline-buttons">
	      <button v-on:click="checkGetData()" id="decline-request" class="programmer-blue-btn">Ontvang data</button>
	    </div>
	  </div>
	</div>`,
    computed: {

    },
    watch: {
    },
    methods: {
        checkHasPassword:
        function(){
            if(this.request.file.password.length > 0){
                return true;
            }
            else{
                return false;
            }
        },
        checkHasDate:
        function(){
            if(this.request.file.date.length > 0){
                return true;
            }
            else{
                return false;
            }
        },
        checkGetData:
        function(){

            if(this.hasCheckedVoorwaarden){

                if(this.checkHasContract()){
                    if(this.hasCheckedContract){
                        if(this.checkHasPassword()){
                            if(this.enteredPassword == this.request.file.password){
                                this.request.status = 4;
                                this.$root.closeDataOntvangenPopUp();
                            }
                        }
                        else{
                            this.request.status = 4;
                            this.$root.closeDataOntvangenPopUp();
                        }
                    }
                    else{

                    }
                }
                else{
                    if(this.checkHasPassword()){
                        if(this.enteredPassword == this.request.file.password){
                            this.request.status = 4;
                            this.$root.closeDataOntvangenPopUp();
                        }
                    }
                    else{
                        this.request.status = 4;
                        this.$root.closeDataOntvangenPopUp();
                    }
                }

            }
        },
        checkHasContract:
        function(){
            return this.request.hasContract;
        },
        openContract:
        function(){
            this.$root.openDataOntvangenContractPopUp(this.request.id);
        },
        closeDataOntvangenPopUp:
        function(){
            this.$root.closeDataOntvangenPopUp();
        }
    }
});
