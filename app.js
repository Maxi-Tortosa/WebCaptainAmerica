document.addEventListener('DOMContentLoaded', router);

window.addEventListener('hashchange', router);



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

        <div class="section_videos">

        <div class="section_videos_mainVideo">

            <iframe width="560" height="315" src="https://www.youtube.com/embed/F020aNi0wS0?start=1" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
            encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
        </div>

        <div class="section_videos_secundaryVideos">

            <iframe width="560" height="315" src="https://www.youtube.com/embed/7i574Em3IrI?start=14"
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/gZa82Xz1nys?start=4" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/GyfiKakb-Gs?start=13" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
            <iframe width="560" height="315" src="https://www.youtube.com/embed/jQbb43yLfO0?start=4" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/O1HrdInI_lw?start=12" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/OdgrOdVBjBU?start=4" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
        </div>

        </div>
        `
    }
}

const BiographySection = {
    render: () => {
        return `
        <div class="navBar__div1">
            <a href="" class="navBar__div1--home">HOME</a>
            <a class="navBar__div1--movie">MOVIE</a>
            <a href="#/biography" class="navBar__div1--comic">BIOGRAPHY</a>
            <a class="navBar__div1--videos">VIDEOS</a>
        </div>

        <div class="section__biography">

        <h2 class="section__biography--h2">Early Life</h2>

        <p class="section__biography--p">Steven Grant Rogers was born on Thursday, July 4, 1918, to Joseph and Sarah Rogers. His father 
            died of injuries sustained by exposure to mustard gas during World War I. His mother, who worked 
            as a nurse in a tuberculosis ward, contracted the disease and died shortly before Steve's 18th 
            birthday. During her illness, Steve was sent to an orphanage where he was beaten up by 
             bullies on a regular basis. It was there that he met his best friend, Bucky.</p>

        <h2 class="section__biography--h2">Project Rebirth</h2>

        <p class="section__biography--p">During World War II, Steve Rogers repeatedly attempted to enlist in the United States military. 
            On June 14, 1943, Rogers was rejected for the fifth time due to his numerous health and physical 
            issues. While attending an exhibition of future technologies with his friend James "Bucky" 
            Barnes, Rogers again attempted to enlist. Having overheard Rogers's conversation with Barnes 
            about wanting to help in the war, Dr. Abraham Erskine allowed Rogers to enlist.</p>
                       
         <p class="section__biography--p">Rogers was recruited into "Project: Rebirth" as part of a "super-soldier" experiment under 
            Erskine, Colonel Chester Phillips and Agent Peggy Carter. Colonel Phillips was unconvinced of 
            Erskine's claims that Rogers was the right person for the procedure but relented after seeing 
            Rogers commit an act of self-sacrificing bravery. The night before the treatment, Erskine 
            revealed to Rogers that his first test subject, Nazi officer and head of HYDRA, Johann Schmidt, 
            underwent an imperfect version of the treatment, becoming super-human but suffering side-effects. 
            The reason for his failure with Schmidt was that not only was the procedure not perfected, but 
            the man was not right for the experiment. Erskine also tells Rogers the reason he was chosen for
            this new trial was because having once been weak, he would respect the power he had been given 
            and would show compassion instead of being a bully. He also urges Rogers not to become a perfect 
            soldier, but rather, remain a good man. The request would have a lasting effect upon Rogers' 
            life.</p>                         
            
         <p class="section__biography--p">Schmidt, having discovered Erskine's location, dispatched an assassin to kill him. In America, 
            Erskine subjected Rogers to the super-soldier treatment, injecting him with the Super-Soldier 
            Serum and dosing him with Vita-Rays. Rogers emerged from the experiment taller and muscular. 
            After the experiment, one of the attendees blew up the lab and murdered Erskine, revealing 
            himself as Schmidt's assassin, Heinz Kruger. Rogers pursued and captured Kruger but the assassin 
            committed suicide via cyanide capsule before he could be fully interrogated.</p>
        
        <h2 class="section__biography--h2">Captain America</h2>

        <p class="section__biography--p">With Erskine's death, the super soldier formula was lost and the plans for an army of 
           super-soldiers could not be fulfilled. Colonel Phillips announced that the President was sending
           the SSR after Schmidt and HYDRA. Rogers asked to be allowed in on the campaign, but Phillips 
           turned him down, saying he was an experiment and would be sent to Alamogordo. Unwilling to be 
           confined in a laboratory and still wanting to help the American war effort however he could, 
           Rogers chose to accept an offer made by Senator Brandt and joined the USO. As "Captain America", 
           he donned his first red, white and blue costume and toured the country to promote the sale of war 
           bonds. After touring throughout the United States, in November 1943, Rogers appeared in Italy 
           before active servicemen, who jeered his performance. The ridicule rankled Rogers, who told Peggy 
           Carter, "You know, for the longest time, I dreamed about coming overseas, being on the front 
           lines, serving my country. I finally got everything I wanted...and I'm wearing tights."</p>
        
        <p class="section__biography--p">Peggy challenged Rogers' belief that he had only two choices, to be a lab rat or a dancing monkey,
           subtly urging him to find a new path of his own. From Peggy, Rogers learned that he had been 
           performing for what was left of the 107th, which was both his father's old unit and Bucky's 
           current unit. The rest of the men, including his friend Bucky, were captured by Schmidt's forces
           and were being held far behind enemy lines. When Rogers asked Colonel Phillips if a rescue mission
           would be mounted, Phillips replied that no rescue mission would be mounted because more men would 
           be lost than saved, but he didn't expect Rogers to understand that, because he was a chorus 
           girl.</p>

        <p class="section__biography--p">Both Peggy's comments and the ridicule spurred Rogers to action. Unwilling to abandon his friend 
           and wanting to prove himself, Rogers mounted a solo rescue attempt. Peggy volunteered her help and 
           talked Howard Stark into flying Rogers behind enemy lines so he could parachute in closer to his 
           target.</p>

        <p class="section__biography--p">After infiltrating a fortress belonging to Schmidt's HYDRA organization, Rogers released the 
           captured soldiers. While investigating the rest of the base, he pocketed a sample of HYDRA's 
           power cells and freed his friend Barnes, who was strapped to an examination table in a medical 
           lab and who had obviously been a subject of scientific experimentation. In the lab, Rogers also
           noticed a map that showed the locations of other HYDRA bases in Europe. Rogers then encountered
           Schmidt and had a brief physical confrontation with him before Arnim Zola, Schmidt's chief 
           scientist, separated the two. Schmidt revealed his "face" to be a mask, removing it to display 
           the red-colored, skull-like face that earned him the nickname "The Red Skull". While Schmidt and
           Zola departed, Rogers narrowly escaped from the self-destructing HYDRA facility before returning
           to base with the liberated soldiers. Though he offered himself up for discipline for disobeying
           orders, Colonel Phillips refused and instead, finally gave Rogers his own unit, the Howling 
           Commandos. </p>

        <p class="section__biography--p">Rogers recruited Barnes, Dum-Dum Dugan, Gabe Jones, Jim Morita, James Falsworth, and Jacques 
           Dernier to attack the other known bases belonging to HYDRA. Stark provided Rogers with a new 
           outfit and a new, circular shield made of vibranium, capable of negating large amounts of damage.
           In command of his own personal team of soldiers, Captain America embarked on a quest to sabotage
           and destroy HYDRA's efforts to rule the world.</p>
        
        <h2 class="section__biography--h2">The End of the Line</h2>

        <p class="section__biography--p">In 1945, Rogers and the Howling Commandos attacked a train carrying Arnim Zola. Zola was 
           captured during the assault, but Barnes fell from the train and was lost. Using information 
           gathered from Zola, Rogers led an attack on Schmidt's last remaining base to stop him from 
           carrying out an imminent attack on the United States. To provide a distraction, Rogers initially
           attacked alone and was captured. Rogers managed to board Schmidt's aircraft as it was taking off
           and neutralized its crew before confronting Schmidt. During the fight, Rogers knocked Schmidt 
           into the container for the Tesseract. Schmidt physically handled the Tesseract, causing him to 
           dissolve in a bright light.</p>
        
        <p class="section__biography--p">The Tesseract fell to the floor of the plane, melting through the surface and falling into the 
           ocean. Rogers moved to the aircraft's controls, made contact with Peggy Carter via radio, and
           reported Schmidt's apparent death. Seeing no way to safely land the plane without risking causing
           the detonation of the weapons that remained on board, Rogers decided to intentionally crash the
           plane before it could reach America's shores. Rogers arranged a date with Peggy before crashing
           the plane and falling into a frozen coma. Stark later recovered the Tesseract from the ocean
           floor, but he failed to find Rogers, the aircraft remained undiscovered, and Rogers was presumed
           dead.</p>
    </div>
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