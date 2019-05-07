'use strict';

function $(selector) {
    selector = document.querySelector(selector);
    return selector;
}

const OY_elem = $('.OY'),
      OX_elem = $('.OX'),
      columns_elem = $('.columns'),
      chart_block_elem = $('.chart-block');

let arr = [5,8,2,1,15,2,3,5,9,11,10,4,3,14,1,7,10,3,2,13];
let max = Math.max.apply(null, arr);
let single_segment = 40;

function chart() {
    for (let i = 0; i < arr.length; i++) {
        let OY_li = document.createElement('li');
        let OX_li = document.createElement('li');
        let columns_li = document.createElement('li');
        let arr_elem = arr[i];

        chart_block_elem.style.width = (arr.length * single_segment) + 37 + 'px';
        chart_block_elem.style.height = (max * single_segment) + 29 + 'px';

        if (i + 1 <= max) {
            OY_li.innerText = (i + 1);
            OY_li.style.height = single_segment + 'px';
            OY_elem.prepend(OY_li);
        }

        OX_li.style.width = single_segment + 'px';
        OX_li.innerText = i + 1;

        columns_li.style.width = single_segment + 'px';
        columns_li.style.height = single_segment * arr_elem + 'px';

        if (arr_elem >= 0 && arr_elem <= 5) {
            columns_li.style.background = 'green';
        }

        else if (arr_elem >= 6 && arr_elem <= 10) {
            columns_li.style.background = 'yellow';
        }

        else {
            columns_li.style.background = 'red';
        }

        OX_elem.appendChild(OX_li);
        columns_elem.appendChild(columns_li);
    }
}

chart();