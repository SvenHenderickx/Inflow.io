const modal_dataversturen = Vue.component('modal_dataversturen', {
    props: ['request'], //wat moet hier
    data(){
        return {
            hasAgreed: false,

        }
    },
    template: `
    <div class="modal" id="modalSendStatic">
    <button v-on:click="closeDataVersturenPopUp()" class="close-button" id="close-button-sendst"><i class="far fa-times-circle"></i></button>

    <div class="modalHeader">
      <div class="userTag">DS</div>
      <div class="modalTitling">
        <h2 style="margin-top:5px;">Data versturen</h2>
        <p style="margin-top:5px;">Datastreams project</p>
      </div>
    </div>

    <div class="modal-guts">
      <p class="light-p-titling">Welke data ze willen ontvangen</p>
      <p>Back-end code gezipt.</p>

      <p class="light-p-titling">Waarom willen ze deze data</p>
      <p>Dit willen ze gebruiken om te onderzoeken hoe snel en veilig het is.</p>

      <p class="light-p-titling">Wat gaan ze met de data doen</p>
      <p>Ze gaan deze code lokaal gebruiken en hier hun eigen tests mee doen. Deze code zal niet buiten de muren van het
        gebouw terecht komen en zal veilig gebruikt worden voor test doeleinden.</p>

      <p class="light-p-titling">Deadline data ontvangen</p>
      <div class="deadline" style="display: table;"><i class="far fa-clock"></i>15 juni</div>

      <div class="inline-buttons">
        <button v-on:click="cancelDelivery()" id="accept-request" class="red-button">Afwijzen</button>
        <button v-on:click="hasAgreed()" id="decline-request" class="programmer-blue-btn">Ik ga akkoord</button>
      </div>
    </div>
  </div>`,
  computed: {},
  watch: {},
  methods: {

  }
});
