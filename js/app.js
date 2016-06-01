function ready() {
    Notification.requestPermission( newMessage );

    function newMessage(permission) {
        if( permission != "granted" ) return false;
        var notify = new Notification("Thanks for letting notify you");
    };
}

  document.addEventListener("DOMContentLoaded", ready);
