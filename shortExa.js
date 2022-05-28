// 8 , 6, 10, 15, 12
// 8-8, 8-6, 8-10, 8-15, 8- 12
// 0, 2, -2, -7, -4
// 2, 0, -2, -4, -7

const Arr = [8, 6, 10, 15, 12];

for (var i = 1; i < Arr.length; i++)
    for (var j = 0; j < i; j++)
        if (Arr[i] < Arr[j]) {
          var x = Arr[i];
          Arr[i] = Arr[j];
          Arr[j] = x;
        }

console.log(Arr);

