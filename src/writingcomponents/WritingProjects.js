import GenericWritingPage from "./GenericWritingPage"
import ImposterSyndrome from "./writingpages/ImposterSyndrome"
import SongoftheEarth from "./writingpages/SongoftheEarth"
import TearsInRain from "./writingpages/TearsInRain"
import TheBetrayal from "./writingpages/TheBetrayal"
import TheDeep from "./writingpages/TheDeep"

export const WritingProjects = [
    {
        id: 1,
        contentType: 'writing',
        title: 'Tears In Rain',
        teaser: 'When the rain began, humanity rejoiced. Earth, its surface dried and cracked from decades of drought, was once again made to cry; the drizzle that began as a small test of Terra I, the terraforming machine intended to bring humanity beyond Earth, swiftly snowballed in intensity, developing into an unending torrent. As days of storm turned into weeks, months, and years, a flood unlike any other ravaged the planet. In a final, desperate effort to preserve their way of life, a new technological renaissance known as the Last Flourish began; mankind searched for a way to survive the endless downpour. Along with numerous other technological advancements, so too came the floating cities: humanity’s last ark on Earth’s now endless and ever deepening ocean. In 4400 AD, the city of Meridian lives on...',
        synopsis: "Amid the endless rain, a city stands as humanity's last refuge. But when Rex, a seemingly ordinary duplicate, stumbles upon a mysterious holotape, it unlocks secrets that threaten to upend everything.",
        writingType: 'short story',
        genre: 'sci-fi',
        date: '11.15.21',
        route: '/tearsinrain',
        writingPage: <TearsInRain />
    },
    {
        id: 2,
        contentType: 'writing',
        title: 'The Betrayal',
        teaser: '',
        synopsis: "Swashbuckling, mutiny, and lust for power and gold; this pirate story was borne of a deep love for the classic tales that captured my imagination and set my heart on fire as a kid.",
        writingType: 'short story',
        genre: 'swashbuckler',
        date: '05.31.19',
        route: '/thebetrayal',
        writingPage: <TheBetrayal />
    },
    {
        id: 3,
        contentType: 'writing',
        title: 'The Deep',
        teaser: 'Dunmoor was an old city. Its layered structure made this evident. Beneath bustling districts of elegant cathedrals and coal factories was the old city, rendered little more than a wooden ruin by the unyielding push of progress. Still further down were the depths, dark recesses untouched by the city’s citizens, spoken only of by parents eager to strike fear into their children. Dunmoor was also a grey city. Even in autumn, the bright hues of red and yellow leaves were nowhere to be seen. The smog-filled sky seemed to choke out the sun, leaving the streets shrouded in a seemingly eternal dusk. These streets were filled with roaming citizens of all ages, and they too were grey. Their skin was pale from long days spent away from the light of the sun, and any color that had been in their garments was blotted out by layers of soot...',
        synopsis: 'Lady Eleanor Austere is a member of the elite of the industrious city of Dunmoor. Attending an enigmatic masquerade party, Eleanor becomes entangled in a web of secrets and sinister forces.',
        writingType: 'short story',
        genre: 'dark fantasy',
        date: '10.06.21',
        route: '/thedeep',
        writingPage: <TheDeep />
    },
    {
        id: 4,
        contentType: 'writing',
        title: 'Imposter Syndrome',
        teaser: 'On an autumn day, Patrick Durham stepped onto the morning train at the station just outside of his high-rise apartment. Constructed of glass and steel, the railway overlooked the massive metropolis that Patrick called home. A glinting skyline faded into the hazy sky, and as the train took off, rain began to fall. As Patrick waited for the train to arrive at his workplace, passengers flowed into the car at every stop. Like him, they donned business-casual attire in various shades of black, grey, and white. Patrick couldn’t help but notice the mundanity of it all; legions of men and women in suits on their way to fulfill their role as cogs in a self-perpetuating machine. I’m different, Patrick thought. I’ve figured out the system.',
        synopsis: "Inspired by the simple surrealism that permeates stories like Kafka's 'The Trial', Imposter Syndrome follows Patrick Durham, a cushy office-worker who struggles with the absurdity of a bureaucratic system.",
        writingType: 'short story',
        genre: 'absurdist',
        date: '10.14.22',
        route: '/impostersyndrome',
        writingPage: <ImposterSyndrome />
    },
    {
        id: 5,
        contentType: 'writing',
        title: 'Song of the Earth',
        teaser: `"In times of war, a man must think not about the grim reality of the world; it is insufficient to accept your surroundings for what they are. Look into the eyes of your enemy, realize the pain they seek to inflict on you, and look forward toward a reality where you have defeated theem; that is how you may make it so." The echo of his father's words sounded in Lakshma's head as he approached his family's hut, tensed up and ready to defend himself from any adversaries who lurked int he shadows casted by the flames around him. As he beheld the samll structure, sitting alone on the outskirts of the village, his eyes burned from the smoke and ash that rose ceaselessly from the inferno which consumed the wooden and straw buildings behind him.`,
        synopsis: 'One-shot writing about a young man who is thrust into a fight for survival after his village is burned down. With no home and no family, how will he find peace?',
        writingType: 'quick-write',
        genre: 'fantasy',
        date: '11.16.22',
        route: '/sote',
        writingPage: <SongoftheEarth />
    },
]