import logo from './img/logo.jpg'

function Index() {
    return {
        view: () => [
            m('img', { src: logo }),
            m('h1', 'Hello World')
        ]
    }
}

m.route(document.body, '/', {
  '/': Index,
});