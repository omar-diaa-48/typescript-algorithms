function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let i = 0, j = 0;
    const nums: number[] = [];

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            nums.push(nums1[i])
            i++;
        }
        else {
            nums.push(nums2[j])
            j++;
        }
    }

    while (i < nums1.length) {
        nums.push(nums1[i])
        i++;
    }

    while (j < nums2.length) {
        nums.push(nums2[j])
        j++;
    }

    const numsLength = nums.length;

    console.log({ nums, numsLength });

    if (numsLength % 2 !== 0) {
        return nums[Math.floor(numsLength / 2)];
    }

    const result = (nums[Math.floor(numsLength / 2) - 1] + nums[Math.ceil(numsLength / 2)]) / 2;

    console.log({ result });

    return result;
};

findMedianSortedArrays([1, 2], [3, 4])