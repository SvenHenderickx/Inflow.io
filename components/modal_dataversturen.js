const modal_dataversturen = Vue.component('modal_dataversturen', {
    props: ['request'], //wat moet hier
    data() {
        return {
            hasAgreed: false,
            dateInput: '',
            passwordIn: '',
            hasContract: false,
            contractText: '',
            hasSigned: false,
        }
    },
    template: `
    <div class="modal" id="modalSendStatic">
    <div v-if="!hasAgreed">
        <button v-on:click="cancelDelivery()" class="close-button" id="close-button-sendst"><i class="far fa-times-circle"></i></button>

        <div class="modalHeader">
          <div class="userTag">DS</div>
          <div class="modalTitling">
            <h2 style="margin-top:5px;">Data versturen</h2>
            <p style="margin-top:5px;">Datastreams project</p>
          </div>
        </div>

        <div class="modal-guts">
          <p class="light-p-titling">Welke data ze willen ontvangen</p>
          <p>{{ request.title }}</p>

          <p class="light-p-titling">Waarom willen ze deze data</p>
          <p>{{ request.reason }}</p>

          <p class="light-p-titling">Wat gaan ze met de data doen</p>
          <p>{{ request.forWhat }}</p>

          <p class="light-p-titling">Deadline data ontvangen</p>
          <div class="deadline" style="display: table;"><i class="far fa-clock"></i>{{ request.date }}</div>

          <div class="inline-buttons">
            <button v-on:click="cancelDelivery()" id="accept-request" class="red-button">Afwijzen</button>
            <button v-on:click="agreeVersturen()" id="decline-request" class="programmer-blue-btn">Ik ga akkoord</button>
          </div>
        </div>
        </div>

        <div v-if="hasAgreed">
          <button v-on:click="cancelDelivery()" class="close-button" id="close-button-send"><i class="far fa-times-circle"></i></button>

          <div class="modalHeader">
            <div class="userTag">DS</div>
            <div class="modalTitling">
              <h2 style="margin-top:5px;">Data versturen</h2>
              <p style="margin-top:5px;">Datastreams project</p>
            </div>
          </div>

          <div class="modal-guts">
            <p>Gewenst bestandstype:</p>
            <div class="deadline" style="background: #32617A;">{{ request.filetypes }}</div>

            <label for="date" style="display: block;">Toegangankelijk tot: <span style="color:#989898">
                optioneel</span></label>
            <input v-model="dateInput"  style="width:160px;" class="modalTextarea" name="date" placeholder="DD/MM/YYYY" type="date"
              autocomplete="off" />

            <div style="cursor: pointer">
              <label for="upload" style="display: block;">Upload data</label>

              <div class="upload-btn-wrapper">
                <button class="filebtn"><i class="fas fa-plus" style="font-size: 48px"></i></button>
                <input type="file" name="upload" id="upload" class="upload-box" placeholder="Upload bestand">
              </div>
            </div>

            <label for="upload" style="display: block;">Wachtwoord instellen</label>
            <input v-model="passwordIn" class="modalTextarea" name="date" placeholder="Vul hier het wachtwoord in..." type="password" />

            <div containerCheck>

              <label v-on:click="openContract(request.id)" class="container">Digitaal contract
                <input v-model="hasContract" type="checkbox">
                <span class="checkmark"></span>
              </label>

              <label class="container">Ik ga akkoord met de voorwaarden
                <input v-model="hasSigned" type="checkbox">
                <span class="checkmark"></span>
              </label>

              <button v-on:click="sendFilesButton()" class="programmer-blue-btn" style="margin:24px auto 8px auto;">Verstuur aanvraag</button>
            </div>
          </div>
        </div>
  </div>`,
    computed: {

    },
    watch: {

    },
    methods: {
        agreeVersturen:
        function() {
            this.hasAgreed = true; //show next modal


        },
        cancelDelivery: function() {
            this.$root.closeDataVersturenPopUp();
        },
        openContract:
        function(){
            this.$root.showContractPopUp(this.request.id);
        },
        sendFilesButton:
        function(){
            if(this.hasSigned){
                this.hasContract = this.request.hasContract;
                if(this.hasContract){
                    this.request.hasContract = this.contractText;
                }
                this.request.file.date = this.dateInput;
                this.request.file.password = this.passwordIn;
                this.$root.closeDataVersturenPopUp();
                this.request.status++;
            }

        }
    }
});
