import { of } from "rxjs";
import { HeroesComponent } from "./heroes.component";

describe('HeroesComponent', () => {
    let component: HeroesComponent;
    let HEROES;
    let mockHeroService;

    beforeEach(() => {
        HEROES = [
            {id: 1, name: 'SpiderDude', strenght: 8},
            {id: 2, name: 'Wonderful Woman', strenght: 24},
            {id: 3, name: 'SuperDude', strenght: 55}
        ]

        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

        component = new HeroesComponent(mockHeroService);
    });

    describe('delete', () => {
        
        it('should remove the indicated hero from the heroes list', () => {
            mockHeroService.deleteHero.and.returnValue(of(true));

            component.heroes = HEROES;
            let hero = HEROES[2];

            component.delete(hero);

            expect(component.heroes.length).toBe(2);
        })

        it('should call deleteHero service', () => {
            mockHeroService.deleteHero.and.returnValue(of(true));

            component.heroes = HEROES;
            let hero = HEROES[2];

            component.delete(hero);

            expect(mockHeroService.deleteHero).toHaveBeenCalled();
        })

        it('should delete the same hero', () => {
            mockHeroService.deleteHero.and.returnValue(of(true));

            component.heroes = HEROES;
            let hero = HEROES[2];

            component.delete(hero);

            expect(mockHeroService.deleteHero).toHaveBeenCalledWith(hero);
        })
    })
})