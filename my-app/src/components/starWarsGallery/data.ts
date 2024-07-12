interface IForceUsersProps {
    name: string,
    age: number,
    isDark: boolean,
    lightsaberColors: string[],
    image?: string 
}


export const forceUsers : IForceUsersProps[] = [

    {
        name: 'Luke Skywalker',
        age: 30,
        isDark: false,
        lightsaberColors: ['green', 'blue'],
        image: 'https://nsabers.de/cdn/shop/articles/opolar_Luke_Skywalker_illuminated_only_by_his_green_lightsaber._ea2cfe7b-c177-4019-9b1d-14ca18970bdc.png?v=1706273475'
    },
    {
        name: 'Darth Vader',
        age: 50,
        isDark: true,
        lightsaberColors: ['blue', 'red'],
        image: 'https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg?region=71%2C0%2C1139%2C854'
    },
    {
        name: 'Yoda',
        age: 1000,
        isDark: false,
        lightsaberColors: ['green'],
        image: 'https://static.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png'
    },
    {
        name: 'Darth Maul',
        age: 35,
        isDark: true,
        lightsaberColors: ['red'],
        image: 'https://nsabers.es/cdn/shop/articles/rogue_0ne_photo_realistic_Star_Wars_darth_maul_black_cloak_inti_3026af25-54be-4505-8c2a-9615fdfd7b7a.png?v=1713855939'
    },
    {
        name: 'Obi Wan',
        age: 52,
        isDark: false,
        lightsaberColors: ['blue'],
        image: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2021/11/14/159258.jpg'
    }
]