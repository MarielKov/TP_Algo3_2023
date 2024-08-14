/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'

import { FiltroRadioComponent } from './filtroRadio.component'

describe('BusquedaDeFigusComponent', () => {
  let component: FiltroRadioComponent
  let fixture: ComponentFixture<FiltroRadioComponent

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroRadioComponent]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroRadioComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
