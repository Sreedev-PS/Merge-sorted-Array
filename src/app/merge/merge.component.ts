import { Component } from '@angular/core';

@Component({
  selector: 'app-merge',
  standalone: true,
  imports: [],
  templateUrl: './merge.component.html',
  styleUrl: './merge.component.scss'
})
export class MergeComponent {

  getmergeValue(){
    let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
    let a = m - 1
    let b = n - 1
    let c = (m + n) - 1
    while (a >= 0 && b >= 0) {
        if (nums1[a] <= nums2[b]) {
            nums1[c] = nums2[b]
            c--
            b--
        } else {
            nums1[c] = nums1[a]
            c--
            a--
        }

    }

    while (b >= 0) {
        nums1[c] = nums2[b]
        c--
        b--
    }
    return nums1
  }
}
