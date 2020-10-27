const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];

const nums = nums1.filter(v => nums2.some(w => w === v))
console.log(nums)