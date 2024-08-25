import { send } from '../../utils/messages/messageChannel.js';

const dev = ((req, res) => {

    //TODO channel send
    //send('Test', 'Titulo Test');


    // Responder string simple:
    res.send('Inicio');

    //Responder string JSON:
    // res.json({
    //     id: 1
    // });


    
})

export{
    dev
}