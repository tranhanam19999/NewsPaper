const sources = [
    '/vendor/jquery/jquery-3.2.1.min.js',
    '/vendor/animsition/js/animsition.js',
    '/vendor/animsition/js/animsition.min.js',
    '/vendor/bootstrap/js/popper.js',
    '/vendor/bootstrap/js/popper.min.js',
    '/vendor/bootstrap/js/tooltip.js',     
    '/vendor/bootstrap/js/bootstrap.js',
    '/vendor/bootstrap/js/bootstrap.min.js',
    '/js/main.js',
]
const loadScripts = () => {
    const externalScripts = document.getElementById('external-scripts')
        externalScripts.innerHTML = ''
        Promise.all(sources.map(src => {
            return new Promise((resolve,reject) => {
                try {
                    const chuong = document.createElement('script')
                    chuong.src = src
                    chuong.async = false
                    chuong.defer = true
                    externalScripts.appendChild(chuong)
                    resolve();
                }
                catch (err) {
                    reject(err)
                }
            })
        }))
}
export {loadScripts}
