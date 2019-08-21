function autoFill(user) {
    if (user) {
        db.collection('users').doc(user.uid).get().then(doc => {
            document.getElementById('name').value = doc.data().Name;
        })
    }
};

// listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
        autoFill(user);
    } else {}
})
