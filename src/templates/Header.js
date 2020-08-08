//definimos la funcion Header que recibe una vista que sera la estrcutura del header
const Header = ()=>{
    const view = `
        <div class="Header-main">
            <div class="Header-logo">
                <h1>
                    <a href= "/">
                        100tifi.co
                    </a>
                </h1>
            </div>

            <div class="Header-nav">
                <a href="#/about/"></a>
            </div>
        </div>
    `;
    return view;
};

export default Header;