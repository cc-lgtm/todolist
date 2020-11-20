(function(window, undefind) {
    let enter = document.getElementById('enter');
    let content = document.getElementById('content');
    let setting = document.getElementById('setting');
    let close = document.getElementById('close');

    enter.addEventListener('keydown', function(e) {
        enter.value = enter.value.replace(/^\s+|\s+$/g,'');
        if(e.keyCode == 13 && enter.value != '') {
            let task = document.createElement('div');
            task.classList = 'task';
            task.id = 'task';
            task.innerText = enter.value;
            content.appendChild(task);

            if(task.innerText == enter.value) enter.value = '';

            let finish = document.createElement('div');
            let Delete = document.createElement('div');
            let i1 = document.createElement('i');
            let i2 = document.createElement('i');
            finish.classList = 'finish';
            Delete.classList = 'delete';
            i1.classList = 'iconfont icon-gou';
            i2.classList = 'iconfont icon-cha';
            task.appendChild(finish);
            task.appendChild(Delete);
            finish.appendChild(i1);
            Delete.appendChild(i2);

            i2.addEventListener('click', function(e) {
                i2.parentNode.parentNode.parentNode
                    .removeChild(i2.parentNode.parentNode);
            });

            i1.addEventListener('click', function(e) {
                i1.parentNode.parentNode.parentNode
                    .removeChild(i1.parentNode.parentNode);
            });
        };
    });

    setting.addEventListener('click', function(e) {
        close.classList.toggle('set');
    });
})(window);