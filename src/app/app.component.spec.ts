import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material/material.module";

// test suit is created in which standard variable like component,fixture
describe("AppComponent", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    // configuration for testing components, modules is added
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MaterialModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
      declarations: [AppComponent],
    }).compileComponents();
  }));

  // instances are created for fixture,component and services
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // unit test case for App component is created or not
  it("should create the app", () => {
    expect(component).toBeTruthy();
  });

  // unit test case for title is created or not
  it(`should match title`, () => {
    expect(component.labData.CREATE).toEqual("Creating");
    expect(component.labData.CALENDER).toEqual("Financial Calender");
  });

  //unit test case for name
  it("[name-check]-should check name errors in reactive form", () => {
    let name = component.userForm.controls["fname"];
    expect(name.valid).toBeFalsy();
    expect(name.pristine).toBeTruthy();
    expect(name.errors["required"]).toBeTruthy();
    name.setValue("Mauparn");
    expect(name.errors["minlength"]).toBeTruthy();
    name.setValue("1234567891011121315151617181920212223252627");
    expect(name.errors["maxlength"]).toBeTruthy();
  });

  it("[name-check]-should check name validity in reactive forms", () => {
    let name = component.userForm.controls["fname"];
    name.setValue("Mauparna Ghosh");
    expect(name.errors).toBeNull();
    expect(name.valid).toBeTruthy();
  });

  // unit test case for long name
  it("[Long name-check]-should check Long name errors in reactive form", () => {
    let longName = component.userForm.controls["lname"];
    expect(longName.valid).toBeFalsy();
    expect(longName.pristine).toBeTruthy();
    expect(longName.errors["required"]).toBeTruthy();
    longName.setValue("Mauparn");
    expect(longName.errors["minlength"]).toBeTruthy();
    // longName.setValue('1234567891011121315151617181920212223252627')
    // expect(longName.errors['maxlength']).toBeTruthy();
  });

  it("[Long name-check]-should check long name validity in reactive forms", () => {
    let longName = component.userForm.controls["fname"];
    longName.setValue("Mauparna Ghosh");
    expect(longName.errors).toBeNull();
    expect(longName.valid).toBeTruthy();
  });

  //unit test case for description
  it("[Description-check]-should check Description errors in reactive form", () => {
    let descrip = component.userForm.controls["des"];
    //   expect(descrip.valid).toBeFalsy();
    expect(descrip.pristine).toBeTruthy();
    descrip.setValue("Mauparn");
    expect(descrip.errors["minlength"]).toBeTruthy();
  });

  it("[Description-check]-should check long description validity in reactive forms", () => {
    let descrip = component.userForm.controls["des"];
    descrip.setValue("Mauparna Ghosh");
    expect(descrip.errors).toBeNull();
    expect(descrip.valid).toBeTruthy();
  });

  //unit test case for whole form
  it("[Form-Check] - should check the form is valid or not when no valus entered", () => {
    expect(component.userForm.valid).toBeFalsy();
  });

  it("[Form-Check] - should check the form is valid or not when  valus entered", () => {
    component.userForm.controls["fname"].setValue("mauparna");
    component.userForm.controls["lname"].setValue("working in capgemini");
    component.userForm.controls["des"].setValue("travelling to bangalore city");

    expect(component.userForm.valid).toBeTruthy();
  });

  it("makes call to onChange", () => {
    const data = { target: { value: "value" } };
    const data1 = { target: { value1: 'undefined' } };
    spyOn(component, "onChange").and.callThrough();
    fixture.whenStable().then(() => {
      component.onChange(data);
      component.onChange(data1);
      expect(component.onChange).toHaveBeenCalled();
    });
  });
});
