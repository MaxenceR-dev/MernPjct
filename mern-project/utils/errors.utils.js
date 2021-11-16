module.exports.signUpErrors = (err) => {
    let errors = {pseudo: '', email: '', password: ''};

    if(err.message.includes('pseudo'))
    errors.pseudo = "Pseudo incorrect ou déjà pris !"

    if(err.message.includes('email'))
    errors.email = 'Email incorrect !'

    if(err.message.includes('password'))
    errors.password = 'Le mot de passe doit faire 6 carractères minimum';

    if(err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
    errors.email = 'Cet Email est déja enregistré !';

    if(err.code === 11000 && Object.keys(err.keyValue)[0].includes("pseudo"))
    errors.pseudo = 'Ce pseudo est déja pris !';

    return errors
};

module.exports.signInErrors =(err) => {
    let errors = {email: '', password: ''};
    
 

    if(err.message.includes('password'))
    errors.password = "Le mot de passe est incorrect";
   

    if(err.message.includes("email")) 
    errors.email = "Email inconnu";

    

    return errors;
};


module.exports.uploadError = (err) => {

    let errors = {format: '', maxSize: ''};

    if(err.message.includes('Invalid file'))
    errors.format = "Format incompatible !";

    if(err.message.includes('Max size'))
    errors.maxSize = "Le fichier dépasse 500 ko !"

    return errors;
};