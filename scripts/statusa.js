const app2 = document.querySelector('.statusCopy');

function getStatusCopy(){
    db.collection('forms').get().then(snapshot =>
        {
            printStatusCopy(snapshot.docs);
        }).catch(err=> {
            console.log(err.message)
        });
}
const printStatusCopy = (data) => {
    if(data.length){
        data.forEach(doc=>{
            const formdata = doc.data();
            let html = formdata.url;
            app2.innerHTML = html
        });
        
    }
}