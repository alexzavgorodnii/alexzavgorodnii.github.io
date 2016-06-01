function ready() {
    var OneSignal = OneSignal || [];
    OneSignal.push(["init", {
      appId: "716ddf09-5d1a-4e7e-863c-daacdabe001c",
      subdomainName: 'lightitbirthdays',
      notifyButton: {
          enable: true /* Set to false to hide */
      }
    }]);
}

  document.addEventListener("DOMContentLoaded", ready);
