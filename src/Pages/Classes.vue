<template>
    <div class="Background-page">
        <div class="flex">
            <nav class="bg-blue-800 w-24 ally-nav-bar  rounded-xl flex justify-start items-center flex-col ">
                <div class=" w-16 h-16 rounded-xl Ally-background mt-5"></div>
                <div class="Icon-Classes space-y-10 mt-20">
                    <div v-for="(iconIMGS, index) in IconClassesAlly" :key="index"
                        @click="ViewClass(iconIMGS.Class1, iconIMGS.Class2, index)"
                        class="w-20 h-20 rounded-xl hover:cursor-pointer hover:bg-blue-950 flex justify-center items-center">
                        <img :src="iconIMGS.Icon" alt="Icon-IMG" class="w-16 h-16 rounded-xl">
                    </div>
                </div>
            </nav>
            <nav class="bg-red-700 w-24 horde-nav-bar  rounded-xl flex justify-start items-center flex-col ">
                <div class=" w-16 h-16 rounded-xl Horde-background mt-5"></div>
                <div class="Icon-Classes space-y-10 mt-20 ">
                    <div v-for="(iconIMGS, index) in IconClassesHorde" :key="index"
                        @click="ViewClass(iconIMGS.Class1, iconIMGS.Class2, index)"
                        class="w-20 h-20 rounded-xl hover:cursor-pointer hover:bg-red-900 flex justify-center items-center">
                        <img :src="iconIMGS.Icon" alt="Icon-IMG" class="w-16 h-16 rounded-xl">
                    </div>
                </div>

            </nav>
            <div :class="DefaultBackground">
                <section v-if="selectedIcon !== null">
                    <div v-if="ViewinfoClasses['build']" :class="getClassForBuild">
                    </div>
                    <div v-if="ViewinfoClasses['bis']" :class="getClassForBis">
                    </div>
                    <div v-if="ViewinfoClasses['race']" :class="getClassForRace">
                    </div>
                    <div class="Informations flex justify-end mr-0.5 ">
                        <div class="  bg-sky-950  h-96 space-y-20 flex flex-col justify-center w-10 items-center mt-32">
                            <div class="text-slate-50 font-fontWow font-bold rotated-text hover:cursor-pointer  "
                                @click="DataClasses('build')">Best Build PvE</div>
                            <div class="text-slate-50 font-fontWow font-bold rotated-text hover:cursor-pointer"
                                @click="DataClasses('bis')">Bis Set</div>
                            <div class="text-slate-50 font-fontWow font-bold rotated-text  hover:cursor-pointer"
                                @click="DataClasses('race')">Best Race</div>
                        </div>

                    </div>
                </section>

            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Classes',
    data() {
        return {
            IconClassesAlly: [
                {
                    Icon: '/imgs/Mage-icon.jpg',
                    Class1: 'Ally-Mage',
                    Class2: 'Ally_Mage'
                },
                {
                    Icon: '/imgs/Hunter-icon.png',
                    Class1: 'Ally-Hunter',
                    Class2: 'Ally_Hunter'
                },
                {
                    Icon: '/imgs/Warrior-icon.jpg',
                    Class1: 'Ally-Warrior',
                    Class2: 'Ally_Warrior'
                },
                {
                    Icon: '/imgs/Paladin-icon.png',
                    Class1: 'Ally-Paladin',
                    Class2: 'Ally_Paladin'
                }
            ],
            IconClassesHorde: [
                {
                    Icon: '/imgs/Mage-icon.jpg',
                    Class1: 'Horde-Mage',
                    Class2: 'Horde_Mage'
                },
                {
                    Icon: '/imgs/Hunter-icon.png',
                    Class1: 'Horde-Hunter',
                    Class2: 'Horde_Hunter'
                },
                {
                    Icon: '/imgs/Warrior-icon.jpg',
                    Class1: 'Horde-Warrior',
                    Class2: 'Horde_Warrior'
                },
                {
                    Icon: '/imgs/Paladin-icon.png',
                    Class1: 'Horde-Paladin',
                    Class2: 'Horde_Paladin'
                }
            ],

            DefaultBackground: 'showClasses',

            InfoClasses: {
                'Horde_Mage': false,
                'Ally_Mage': false,
                'Horde_Hunter': false,
                'Ally_Hunter': false,
                'Horde_Warrior': false,
                'Ally_Warrior': false,
                'Horde_Paladin': false,
                'Ally_Paladin': false,
            },
            ViewinfoClasses: {
                'build': false,
                'bis': false,
                'race': false
            },
            selectedIcon: null,
            ClassForBisBuildRaceHorde:
            {
                'Horde-Mage': {
                    ViewInfosBuild: 'ViewInfosBuild',
                    ViewInfosBis: 'ViewInfosBis',
                    ViewInfosRace: 'ViewInfosRace'
                },
                'Horde-Hunter': {
                    ViewInfosBuild: 'ViewInfosBuildHunt',
                    ViewInfosBis: 'ViewInfosBisHunt',
                    ViewInfosRace: 'ViewInfosRaceHunt'
                },
                'Horde-Warrior': {
                    ViewInfosBuild: 'ViewInfosBuildWar',
                    ViewInfosBis: 'ViewInfosBisWar',
                    ViewInfosRace: 'ViewInfosRaceWar'
                },
                'Horde-Paladin': {
                    ViewInfosBuild: 'ViewInfosBuildPala',
                    ViewInfosBis: 'ViewInfosBisPala',
                    ViewInfosRace: 'ViewInfosRacePala'
                },
            },

            ClassForBisBuildRaceAlly:
            {
                'Ally-Mage': {
                    ViewInfosBuild: 'ViewInfosBuild',
                    ViewInfosBis: 'ViewInfosBisMGAlly',
                    ViewInfosRace: 'ViewInfosRaceMGAlly'
                },
                'Ally-Hunter': {
                    ViewInfosBuild: 'ViewInfosBuildHunt',
                    ViewInfosBis: 'ViewInfosBisHuntAlly',
                    ViewInfosRace: 'ViewInfosRaceHuntAlly'
                },
                'Ally-Warrior': {
                    ViewInfosBuild: 'ViewInfosBuildWar',
                    ViewInfosBis: 'ViewInfosBisWarAlly',
                    ViewInfosRace: 'ViewInfosRaceWarAlly'
                },
                'Ally-Paladin': {
                    ViewInfosBuild: 'ViewInfosBuildPala',
                    ViewInfosBis: 'ViewInfosBisPalaAlly',
                    ViewInfosRace: 'ViewInfosRacePalaAlly'
                },
            },

            selectedFaction: null
        }
    },
    computed: {
        getClassForBuild() {
            if (this.selectedFaction === 'Horde') {
                return this.ClassForBisBuildRaceHorde[this.IconClassesHorde[this.selectedIcon].Class1].ViewInfosBuild;
            } else if (this.selectedFaction === 'Ally') {
                return this.ClassForBisBuildRaceAlly[this.IconClassesAlly[this.selectedIcon].Class1].ViewInfosBuild;
            }
            return ''; // Caso padrão
        },
        getClassForBis() {
            if (this.selectedFaction === 'Horde') {
                return this.ClassForBisBuildRaceHorde[this.IconClassesHorde[this.selectedIcon].Class1].ViewInfosBis;
            } else if (this.selectedFaction === 'Ally') {
                return this.ClassForBisBuildRaceAlly[this.IconClassesAlly[this.selectedIcon].Class1].ViewInfosBis;
            }
            return ''; // Caso padrão
        },
        getClassForRace() {
            if (this.selectedFaction === 'Horde') {
                return this.ClassForBisBuildRaceHorde[this.IconClassesHorde[this.selectedIcon].Class1].ViewInfosRace;
            } else if (this.selectedFaction === 'Ally') {
                return this.ClassForBisBuildRaceAlly[this.IconClassesAlly[this.selectedIcon].Class1].ViewInfosRace;
            }
            return ''; // Caso padrão
        },
    },
    methods: {
        //Vem do click a class desejada e ja acessa o objeto na posição do class que veio de acordo com a do objeto ex:
        //Veio Horde-Mage ficará  backgroundClass[Horde-Mage] ou seja ja retorna o style dele
        ViewClass(SentClass, SentClass2, index) {
            const backgroundClasses = {
                'Horde-Mage': 'showClasses-HordeMage',
                'Ally-Mage': 'showClasses-AllyMage',
                'Horde-Hunter': 'showClasses-HordeHunter',
                'Ally-Hunter': 'showClasses-AllyHunter',
                'Horde-Warrior': 'showClasses-HordeWarrior',
                'Ally-Warrior': 'showClasses-AllyWarrior',
                'Horde-Paladin': 'showClasses-HordePaladin',
                'Ally-Paladin': 'showClasses-AllyPaladin',
            };

            const backgroundClass = backgroundClasses[SentClass];
            if (backgroundClass) {
                this.DefaultBackground = backgroundClass;
                for (const aboutClass in this.InfoClasses) {
                    this.InfoClasses[aboutClass] = false;
                }
                this.InfoClasses[SentClass2] = true;
                console.log(this.InfoClasses)
                this.selectedIcon = index
                this.ViewinfoClasses.build = false
                this.ViewinfoClasses.bis = false
                this.ViewinfoClasses.race = false

                // Defina a facção selecionada com base na classe clicada
                if (SentClass.includes('Horde')) {
                    this.selectedFaction = 'Horde';
                } else if (SentClass.includes('Ally')) {
                    this.selectedFaction = 'Ally';
                }
            }
        },
        DataClasses(Search) {
            for (const research in this.ViewinfoClasses) {
                this.ViewinfoClasses[research] = false
            }
            this.ViewinfoClasses[Search] = true

        },
    }
}


</script>

<style scoped>
.ally-nav-bar {
    height: 820;
}

.horde-nav-bar {
    height: 820;
}

.Background-page {
    background: url('https://images4.alphacoders.com/823/82368.jpg');
    background-size: cover;
    background-position: center;
}

.Ally-background {
    background: url('https://i.redd.it/nvsffw9n35l51.png');
    background-size: cover;
    background-position: center;
    background-color: transparent;
}

.Horde-background {
    background: url('https://logoeps.com/wp-content/uploads/2013/06/world-of-warcraft-horde-vector-logo.png');
    background-size: cover;
    background-position: center;
    background-color: transparent;
}

.showClasses {
    height: 820px;
    width: 100%;
    border-radius: 0.125rem;

}

.showClasses-HordeMage {
    height: 820px;
    width: 100%;
    border-radius: 0.125rem;
    background: url('https://pbs.twimg.com/media/D-U873MXUAAknaO.jpg');
    background-size: cover;

}

.showClasses-AllyMage {
    height: 820px;
    width: 100%;
    border-radius: 0.125rem;
    background: url('https://i.pinimg.com/originals/64/65/5f/64655f2b069f6516759df200b4a89fd2.jpg');
    background-size: cover;

}

.showClasses-HordeHunter {
    height: 820px;
    width: 100%;
    border-radius: 0.125rem;
    background: url('https://i.redd.it/akjbae81fo441.jpg');
    background-size: cover;

}

.showClasses-AllyHunter {
    height: 820px;
    width: 100%;
    border-radius: 0.125rem;
    background: url('https://pbs.twimg.com/media/EJ_NnMqUcAAu0oq.jpg:large');
    background-size: cover;

}

.showClasses-HordeWarrior {
    height: 820px;
    width: 100%;
    border-radius: 0.125rem;
    background: url('https://i.pinimg.com/originals/7c/63/77/7c6377177b99ddf37822963dafd16618.jpg');
    background-size: cover;

}

.showClasses-AllyWarrior {
    height: 820px;
    width: 100%;
    border-radius: 0.125rem;
    background: url('https://digitalgamersdream.com/wp-content/uploads/2021/07/5271880-1170x731.jpeg');
    background-size: cover;

}

.showClasses-HordePaladin {
    height: 820px;
    width: 100%;
    border-radius: 0.125rem;
    background: url('https://wallpapercave.com/wp/wp3415929.jpg');
    background-size: cover;
    background-position: center;

}

.showClasses-AllyPaladin {
    height: 820px;
    width: 100%;
    border-radius: 0.125rem;
    background: url('https://i.pinimg.com/originals/a2/9e/6b/a29e6b50747fdf6850198fffc790e56e.jpg');
    background-size: cover;

}

.rotated-text {
    display: inline-block;
    transform: rotate(-90deg);
    /* Rotate text 90 degrees anti-clockwise */
    transform-origin: center;
    /* Center the rotation */
    white-space: nowrap;
    /* Prevent text from breaking into multiple lines */
    padding: 10px;
    position: relative;
}

.rotated-text::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
    z-index: -1;
    /* Place the hover background behind the text */
}

.rotated-text:hover::before {
    opacity: 1;
}

.ViewInfosBuild {
    height: 650px;
    width: 650px;
    right: 630px;
    top: 150px;
    border-radius: 20px;
    background: url('https://www.warcrafttavern.com/wp-content/uploads/2022/04/Fire-Mage-Talents-TTW-1024x1018.jpg');
    background-size: cover;
    background-position: top;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

}

.ViewInfosBis {
    height: 650px;
    width: 600px;
    right: 630px;
    top: 150px;
    border-radius: 20px;
    background: url('https://wow.zamimg.com/uploads/screenshots/normal/1073059.png?maxHeight=840');
    background-size: cover;
    background-position: center;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

}

.ViewInfosRace {
    height: 650px;
    width: 600px;
    right: 630px;
    top: 150px;
    border-radius: 20px;
    background: url('https://transmogqueue.files.wordpress.com/2016/05/xcrcahx.png?w=640');
    background-size: cover;
    background-position: center;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
}

.ViewInfosBisMGAlly {
    height: 650px;
    width: 600px;
    right: 630px;
    top: 150px;
    border-radius: 20px;
    background: url('https://wow.zamimg.com/uploads/screenshots/normal/1073058.png?maxHeight=840');
    background-size: cover;
    background-position: center;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

}

.ViewInfosRaceMGAlly {
    height: 650px;
    width: 600px;
    right: 630px;
    top: 150px;
    border-radius: 20px;
    background: url('https://wow.zamimg.com/modelviewer/ptr/webthumbs/outfit/166/75174.jpg');
    background-size: cover;
    background-position: top;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
}

.ViewInfosBuildHunt {
    height: 650px;
    width: 650px;
    right: 630px;
    top: 150px;
    border-radius: 20px;
    background: url('https://www.warcrafttavern.com/wp-content/uploads/2022/07/WotLK-PvE-Marksmanship-Hunter-Talents-Build-2.jpg');
    background-size: cover;
    background-position: top;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
}

.ViewInfosBisHunt {
    height: 650px;
    width: 600px;
    right: 630px;
    top: 150px;
    border-radius: 20px;
    background: url('https://wow.zamimg.com/uploads/screenshots/normal/1073051.png?maxHeight=840');
    background-size: cover;
    background-position: center;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

}

.ViewInfosRaceHunt {
    height: 650px;
    width: 600px;
    right: 630px;
    top: 150px;
    border-radius: 20px;
    background: url('https://wow.zamimg.com/modelviewer/wrath/webthumbs/outfit/33/183841.jpg');
    background-size: cover;
    background-position: top;
}

.ViewInfosBisHuntAlly {
    height: 650px;
    width: 600px;
    right: 630px;
    top: 150px;
    border-radius: 20px;
    background: url('https://conquestcapped.com/image/cache/catalog/wow/transmogs/pve-sets/hunter-tier-8-transmog-set-630x400.png');
    background-size: cover;
    background-position: center;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

}

.ViewInfosRaceHuntAlly {
    height: 650px;
    width: 600px;
    right: 630px;
    top: 150px;
    border-radius: 20px;
    background: url('https://static.icy-veins.com/images/classic/og-images/hunter.jpg');
    background-size: cover;
    background-position: top;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
}

.ViewInfosBuildWar {
    height: 650px;
    width: 650px;
    right: 630px;
    top: 150px;
    border-radius: 20px;
    background: url('https://overgear.com/guides/wp-content/uploads/2022/09/fury.png');
    background-size: cover;
    background-position: top;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
}

.ViewInfosBisWar {
    height: 650px;
    width: 600px;
    right: 630px;
    top: 150px;
    border-radius: 20px;
    background: url('https://wow.zamimg.com/uploads/screenshots/normal/1074272.jpg');
    background-size: cover;
    background-position: center;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

}

.ViewInfosRaceWar {
    height: 650px;
    width: 600px;
    right: 630px;
    top: 150px;
    border-radius: 20px;
    background: url('https://cdn.gfinityesports.com/images/ncavvykf/gfinityesports/a57a9390ba2b87a6fb9bbfa99289d05c35ec1f26-634x356.jpg?rect=0,11,634,333&w=1200&h=630&auto=format');
    background-size: cover;
    background-position: top;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
}

.ViewInfosBisWarAlly {
    height: 650px;
    width: 600px;
    right: 630px;
    top: 150px;
    border-radius: 20px;
    background: url('https://expcarry.com/image/catalog/products/WotLK%20Boost/Buy-WotLK-Tier-Sets-Boost-Farm.jpg');
    background-size: cover;
    background-position: center;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

}

.ViewInfosRaceWarAlly {
    height: 650px;
    width: 600px;
    right: 630px;
    top: 150px;
    border-radius: 20px;
    background: url('https://felbite.com/wp-content/uploads/2022/04/felbite.com-fury-warrior-wotlk-pre-raid-bis-list-ezgif-1-df5bbcc59f-min-scaled.jpg');
    background-size: cover;
    background-position: top;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
}

.ViewInfosBuildPala {
    height: 650px;
    width: 650px;
    right: 630px;
    top: 150px;
    border-radius: 20px;
    background: url('https://overgear.com/guides/wp-content/uploads/2022/09/wotlk-retri-pal-build.png');
    background-size: cover;
    background-position: top;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
}

.ViewInfosBisPala {
    height: 650px;
    width: 600px;
    right: 630px;
    top: 150px;
    border-radius: 20px;
    background: url('https://mmorpg.gg/wp-content/uploads/2022/10/Judgment-Armor-Paladin-Transmog.jpg');
    background-size: cover;
    background-position: center;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

}

.ViewInfosRacePala {
    height: 650px;
    width: 600px;
    right: 630px;
    top: 150px;
    border-radius: 20px;
    background: url('https://cdnb.artstation.com/p/assets/images/images/033/172/479/large/maros-manhardt-bloodelfpaladin.jpg?1608648310');
    background-size: cover;
    background-position: top;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
}

.ViewInfosBisPalaAlly {
    height: 650px;
    width: 600px;
    right: 630px;
    top: 150px;
    border-radius: 20px;
    background: url('https://mmorpg.gg/wp-content/uploads/2020/08/Fiery-weapon-ret-paladin.jpg.webp');
    background-size: cover;
    background-position: center;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

}

.ViewInfosRacePalaAlly {
    height: 650px;
    width: 600px;
    right: 630px;
    top: 150px;
    border-radius: 20px;
    background: url('https://mmorpg.gg/wp-content/uploads/2020/05/WoW-paladin-best-transmog.jpg');
    background-size: cover;
    background-position: top;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>