function showHelp(help) {
    document.getElementById('help').innerHTML = help;
}

function setupHelp() {
    let helpText = [{
            'id': 'email',
            'help': 'Your e-mail address'
        },
        {
            'id': 'name',
            'help': 'Your full name'
        },
        {
            'id': 'age',
            'help': 'Your age (you must be over 16)'
        }
    ];

    helpText.forEach(text => {
        document.getElementById(text.id).onfocus = () => showHelp(text.help);
    });
}

setupHelp();