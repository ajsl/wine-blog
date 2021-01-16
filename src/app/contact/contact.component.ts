import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  formData: FormGroup;

  constructor(private formBuilder: FormBuilder, private contactService: ContactService) { }

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      message: new FormControl('', [Validators.required])

    })

    
  }

  onSubmit(data: any) {
    console.log(data)
    this.contactService.postMessage(data).subscribe(response => {

      console.log(response);
      window.location.href = 'https://mailthis.to/confirm';
    })

  }


}
