componentUse(() => {
    const title = 'First Component'
    const css = (`
        .first-component {
            background: black;
            color: white;
            text-align: center;
            padding: 1em;
            margin-bottom: 2em;
        }
    `)
    
    return (`
    <h1 class='first-component'>
        ${title}
    </h1>
    <style>${css}</style>
`)
}, '#first-component')