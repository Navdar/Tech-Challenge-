import { Component } from '@angular/core';

import { Hero }    from './hero';

@Component({
  selector: 'app-home',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  powers = ['Acute Lymphoblastic Leukemia (ALL)', 'Acute Myeloid Leukemia (AML)', 'Adolescents', 'Adrenocortical Carcinoma', 'Kaposi Sarcoma (Soft Tissue Sarcoma)', 'Anal Cancer', 'Bile Duct Cancer', 'Bladder Cancer', 'Brain Tumors', 'Breast Cancer', 'Bronchial Tumors (Lung Cancer)', 'Carcinoid Tumor (Gastrointestinal)', 'Cervical Cancer', 'Childhood Cancers', 'Chordoma, Childhood (Bone Cancer)', 'Chronic Lymphocytic Leukemia (CLL)', 'Chronic Myelogenous Leukemia (CML)', 'Colorectal Cancer', 'Esophageal Cancer', 'Ewing Sarcoma (Bone Cancer)', 'Intraocular Melanoma', 'Retinoblastoma', 'Fallopian Tube Cancer', 'Gallbladder Cancer', 'Gastric (Stomach) Cancer', 'Gastrointestinal Carcinoid Tumor', 'Testicular Cancer', 'Hairy Cell Leukemia', 'Hodgkin Lymphoma', 'Intraocular Melanoma', 'Kaposi Sarcoma (Soft Tissue Sarcoma)', 'Kidney (Renal Cell) Cancer', 'Langerhans Cell Histiocytosis', 'Leukemia', 'Liver Cancer', 'Male Breast Cancer',  'Melanoma', 'Melanoma, Intraocular (Eye)',
  'Merkel Cell Carcinoma (Skin Cancer)', 'Metastatic Cancer', 'Nasopharyngeal Cancer (Head and Neck Cancer)', 'Neuroblastoma', 'Ovarian Cancer', 'Pancreatic Cancer', 'Pancreatic Neuroendocrine Tumors (Islet Cell Tumors)', 'Paraganglioma', 'Parathyroid Cancer', 'Penile Cancer', 'Pharyngeal Cancer (Head and Neck Cancer)', 'Pituitary Tumor', 'Pleuropulmonary Blastoma (Lung Cancer)', 'Rectal Cancer', 'Recurrent Cancer', 'Renal Cell (Kidney) Cancer', 'Retinoblastoma',
  'Salivary Gland Cancer (Head and Neck Cancer)', 'Sarcoma', 'Childhood Rhabdomyosarcoma (Soft Tissue Sarcoma)', 'Childhood Vascular Tumors (Soft Tissue Sarcoma)', 'Ewing Sarcoma (Bone Cancer)', 'Kaposi Sarcoma (Soft Tissue Sarcoma)', 'Osteosarcoma (Bone Cancer)', 'Testicular Cancer', 'Throat Cancer (Head and Neck Cancer)', 'Nasopharyngeal Cancer', 'Oropharyngeal Cancer', 'Hypopharyngeal Cancer', 'Thymoma and Thymic Carcinoma', 'Tracheobronchial Tumors (Lung Cancer)', 'Urethral Cancer', 'Uterine Cancer, Endometrial', 'Uterine Sarcoma', 'Vaginal Cancer', 'Vascular Tumors (Soft Tissue Sarcoma)', 'Vulvar Cancer'];

  powerssss = ['YES','NO'];




  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newHero() {
    this.model = new Hero(42, '', '');
  }

  skyDog(): Hero {
    let myHero =  new Hero(42, 'SkyDog',
                           'Fetch any object at any distance',
                           'Leslie Rollover');
    console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
    return myHero;
  }

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls['name'] &&
    form.controls['name'].value; // Dr. IQ
  }

  /////////////////////////////

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
