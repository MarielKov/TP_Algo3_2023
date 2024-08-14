/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'

import { BusquedaDeFigusComponent } from './busquedaDeFigus.component'

describe('BusquedaDeFigusComponent', () => {
  let component: BusquedaDeFigusComponent
  let fixture: ComponentFixture<BusquedaDeFigusComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaDeFigusComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaDeFigusComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
