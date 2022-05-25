import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-option-dialog-no-submit',
  templateUrl: './option-dialog-no-submit.page.html',
  styleUrls: ['./option-dialog-no-submit.page.scss'],
})
export class OptionDialogNoSubmitPage implements OnInit {

  public data = [
    { id: "prod-a2f", name: "กระเพราไข่ดิบ", option: "ไข่ไก่", logo: "assets/imgs/defaultshop.png" },
    { id: "prod-bg3", name: "กระเพราไข่ดิบ", option: "ไข่เป็ด", logo: "assets/imgs/defaultshop.png" },
    { id: "prod-0gc", name: "กระเพราไข่ดิบ", option: "ไข่ห่าน", logo: "assets/imgs/defaultshop.png" },
    { id: "prod-paS", name: "กระเพราไข่เจียว", option: "", logo: "assets/imgs/defaultshop.png" },
  ];
  public fg: FormGroup;

  constructor(private fb: FormBuilder) {
    this.fg = this.fb.group({
      'id': [null, Validators.required],
      'name': [null, Validators.required],
      'option': null,
    });
  }

  ngOnInit() {
  }

  onDismiss() {
    alert("ยกเลิกการเลือกข้อมูล");
  }

  onSelectItem(item) {
    this.fg.get("id").setValue(item.id);
    this.fg.get("name").setValue(item.name);
    this.fg.get("option").setValue(item.option);

    if (this.fg.valid) {
      let msg = `เลือกข้อมูล\n\n${JSON.stringify(this.fg.value)}`;
      alert(msg)
    }
  }

  isChecked(value): boolean {
    return this.fg.get("id").value == value.id;
  }

}
