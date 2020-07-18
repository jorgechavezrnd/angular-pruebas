import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe de mostrar la leyenda', () => {

        component.leyenda = 'Progreso de carga';

        fixture.detectChanges(); // disparar la detección de cambios

        const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;

        expect( elem.innerHTML ).toContain('Progreso de carga');

    });

    it('Debe de mostrar en el input el valor del progreso', async () => {

        component.cambiarValor(5);

        fixture.detectChanges();

        await fixture.whenStable(); // Esperar a que el ciclo de detección de cambios termine antes de evaluar la prueba

        const input = fixture.debugElement.query( By.css('input') );
        const elem = input.nativeElement;

        console.log(elem);

        expect( elem.value ).toBe( '55' );

    });

    it('Debe de incrementar/decrementar en 5, con un click en el botón', () => {

        const botones = fixture.debugElement.queryAll( By.css('.btn-primary') );

        botones[0].triggerEventHandler('click', null);
        expect( component.progreso ).toBe( 45 );

        botones[1].triggerEventHandler('click', null);
        expect( component.progreso ).toBe( 50 );

    });

    it('En el titulo del componente, debe de mostrar el progreso', () => {

        const botones = fixture.debugElement.queryAll( By.css('.btn-primary') );
        botones[0].triggerEventHandler('click', null);

        fixture.detectChanges();

        const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;

        expect( elem.innerHTML ).toContain('45');

    });

});
