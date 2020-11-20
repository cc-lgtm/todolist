(function(window, undefind) {
    let enter = document.getElementById('enter');
    let content = document.getElementById('content');

    enter.addEventListener('keydown', function(e) {
        enter.value = enter.value.replace(/^\s+|\s+$/g,'');
        if(e.keyCode == 13 && enter.value != '') {
            let task = document.createElement('div');
            task.classList = 'task';
            task.id = 'task';
            task.innerText = enter.value;
            content.appendChild(task);

            if(task.innerText == enter.value) enter.value = '';

            let Delete = document.createElement('div');
            let i2 = document.createElement('i');
            Delete.classList = 'delete';
            i2.classList = 'iconfont icon-cha';
            task.appendChild(Delete);
            Delete.appendChild(i2);

            i2.addEventListener('click', function(e) {
                i2.parentNode.parentNode.parentNode
                    .removeChild(i2.parentNode.parentNode);
            });
        };
    });
})(window);