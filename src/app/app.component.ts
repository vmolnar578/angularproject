import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bin = "";
  dec = 0;
  form = new FormGroup({
    dec: new FormControl(0),
    bin7: new FormControl(0),
    bin6: new FormControl(0),
    bin5: new FormControl(0),
    bin4: new FormControl(0),
    bin3: new FormControl(0),
    bin2: new FormControl(0),
    bin1: new FormControl(0),
    bin0: new FormControl(0),
  });
  public nastavBin() {
    if (this.form.value.dec > 255) {
      alert("Maximálna hodnota je 255");
      this.form.controls["dec"].setValue(0);
    }
    this.bin = (this.form.value.dec >>> 0).toString(2);
    while (this.bin.length < 8) {
      this.bin = "0" + this.bin;
    }
    this.form.controls["bin0"].setValue(parseInt(this.bin.charAt(7)));
    this.form.controls["bin1"].setValue(parseInt(this.bin.charAt(6)));
    this.form.controls["bin2"].setValue(parseInt(this.bin.charAt(5)));
    this.form.controls["bin3"].setValue(parseInt(this.bin.charAt(4)));
    this.form.controls["bin4"].setValue(parseInt(this.bin.charAt(3)));
    this.form.controls["bin5"].setValue(parseInt(this.bin.charAt(2)));
    this.form.controls["bin6"].setValue(parseInt(this.bin.charAt(1)));
    this.form.controls["bin7"].setValue(parseInt(this.bin.charAt(0)));
  }
  public nastavDec() {
    this.dec = 0;
    if (this.form.value.bin0) {
      this.form.controls["dec"].setValue(this.dec+1);
    }
    if (this.form.value.bin1) {
      this.form.controls["dec"].setValue(this.dec+2);
    }
    if (this.form.value.bin2) {
      this.form.controls["dec"].setValue(this.dec+4);
    }
    if (this.form.value.bin3) {
      this.form.controls["dec"].setValue(this.dec+8);
    }
    if (this.form.value.bin4) {
      this.form.controls["dec"].setValue(this.dec+16);
    }
    if (this.form.value.bin5) {
      this.form.controls["dec"].setValue(this.dec+32);
    }
    if (this.form.value.bin6) {
      this.form.controls["dec"].setValue(this.dec+64);
    }
    if (this.form.value.bin7) {
      this.form.controls["dec"].setValue(this.dec+128);
    }
  }
}
