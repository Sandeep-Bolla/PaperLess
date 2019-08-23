var ouserid = '';
var oname = '';
var oid = '';
var obranch = '';
var oage = '';
var oprogram = '';
var osection = '';
var oemail = '';

const saveandforwardButton = document.getElementById('forward');

saveandforwardButton.addEventListener("click", sendNotification);

// listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
        db.collection('users').doc(user.uid).get().then(doc => {
            oemail = user.email;
            oname = doc.data().Name;
            oid = doc.data().ID;
            obranch = doc.data().Branch;
            oage = doc.data().Age;
            oprogram = doc.data().Program;
            osection = doc.data().Section;
        })
    }
})


function autoFill() {
    document.getElementById('name').value = oname;
    foid = oid.split("-");
    document.getElementsByName('tel_no_1')[0].value = foid[0];
    document.getElementsByName('tel_no_2')[0].value = foid[1];
    document.getElementsByName('tel_no_3')[0].value = foid[2];

    document.getElementById('email').value = oemail;
};

function sendNotification() {
    //e.preventDefault();
    const notificationMessage = "Got a notification Sir";
    //if ( !notificationMessage ) return;

    ddb.ref('/notifications')
        .push({
            user: auth.currentUser.displayName,
            message: notificationMessage,
            //userProfileImg: auth.currentUser.photoURL
        })
        .then(() => {
            document.getElementById('notification-message').value = "";
        })
        .catch(() => {
            console.log("error sending notification :(")
        });
}