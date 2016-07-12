encoding = n => n.toString().split('').map(x => 'abcdefghi'.split('').reverse()[x - 1]).join('');
