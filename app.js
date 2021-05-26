

document.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router);

/* -------------- SPA ------------ */

const HomeSection = {
    render: () => {
        return `
        <div class="section__presentation">

            
            <h1 class="section__presentation--title">
                <span class="section__presentation--title--name" >STEVE ROGERS</span>
                <span class="section__presentation--title--character">CAPTAIN AMERICA</span>
            </h1>
            
            <p class="section__presentation--description">Recipient of the Super-Soldier serum, World War II 
            hero Steve Rogers fights for American ideals as one of the world’s mightiest heroes and the leader
            of the Avengers.</p>
            

        </div>
        
        <div class="section__videos">

        <div class="section__videos__mainVideo"> 

            <div class="section__videos__mainVideo--video1">mainVideo</div>
      
        </div>

        <div class="section__videos__secundaryVideos">

            <div class="section__videos__secundaryVideos__secundaryVideo1"> Video1 </div>

            <div class="section__videos__secundaryVideos__secundaryVideo2"> Video2 </div>

            <div class="section__videos__secundaryVideos__secundaryVideo3"> Video3 </div>
            
            <div class="section__videos__secundaryVideos__secundaryVideo4"> Video4 </div>

            <div class="section__videos__secundaryVideos__secundaryVideo5"> Video5 </div>

            <div class="section__videos__secundaryVideos__secundaryVideo6"> Video6 </div>
            
        </div>

        </div>
        
        `
    }
}

const BiographySection = {
    render: () => {
        return `
        
        `
    }
}

const routes = [
    {path:'/', component: HomeSection},
    {path:'/biography', component: BiographySection}
]

function parseLocation () {

    return location.hash.slice(1) || '/'

}

function getComponent (path, routes) {

  return  routes.find(route=>route.path.match( new RegExp(`^\\${path}$`), 'gm' ) )

}

function router () {

    const path = parseLocation();
   
    const {component} = getComponent (path, routes)

    const section = document.getElementById("app").innerHTML = component.render()    
}

/* -------------------- Biography ------------------------- */

const earlyLifeDiv = document.getElementById("section__biography__information__earlyLife")

const seeMoreButton = document.getElementById("section__biography__imformation__earlyLife--button")

document.getElementById("section__biography__imformation__earlyLife--button").onclick =  seeMore
//document.getElementById("section__biography__imformation__earlyLife--button").onclick =  seeLess

function seeMore (e) {

    e.preventDefault()
    console.log ("holis")

earlyLifeDiv.style.height = "auto"
earlyLifeDiv.style.overflow = "initial"
document.getElementById("section__biography__imformation__earlyLife--button").innerText = "See -"
                                              }



function seeLess (e) {

    e.preventDefault()
    console.log ("holus")

    /* Hacerlo con el display de los botones*/
   
}


 //earlyLifeParagraph.style.overflow = "initial"  
 


