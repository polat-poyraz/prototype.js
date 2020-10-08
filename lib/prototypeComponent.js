componentUse = (content, location) => {
    if (document.querySelector(location) !== null) {
        document.querySelector(location).innerHTML = content()
    } else console.error('The id or class you specified when serving or using the component is not equal!')
}