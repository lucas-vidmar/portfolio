import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  tags = [
    "Python",
    "HTML",
    "CSS",
    "JS",
    "TS",
    "Angular",
    "C",
    "C++",
    "C#",
    "Java",
    "C#",
    "OSPF",
    "BGP",
    "MPLS",
    "IS-IS",
    "RIP",
    "PM/PO",
    "Sales",
    "CI/CD",
    "Docker",
    "Kubernetes",
    "Ansible",
    "Terraform",
    "AWS",
    "GCP",
    "Azure",
    "Assembly",
    "Bash",
    "PowerShell",
    "Linux",
    "SolidWorks",
    "AutoCAD"
  ]

  constructor() {
    // Randomize tags
    this.tags.sort(() => Math.random() - 0.5);
  }

}
