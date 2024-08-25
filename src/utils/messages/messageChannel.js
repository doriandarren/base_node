
const url = 'https://discord.com/api/webhooks/1227264474621411509/pPLiLLoDwTx51Z9s5DBtqYaZ7juMaHZayu-QkJdhTLwCvXZdWT9dmFi85ssHdgMRakA6';


export const send = async (body, title='Title', isError = false) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                embeds: [
                    {
                        title: title,
                        description: body,
                        color: isError ? 16711680 : 65280
                    }
                ]
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        console.log(`Mensaje enviado a Discord con estado: ${response.status}`);
    } catch (error) {
        console.error('Error al enviar el mensaje al webhook de Discord:', error);
    }
};