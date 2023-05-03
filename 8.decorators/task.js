//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];

    function wrapper(...args) {
        const hash = args.join(',');
        let objectInCache = cache.findIndex((item) => item.hash === hash);
        if (objectInCache !== -1) {
            console.log('Из кэша: ' + cache[objectInCache].result);
            return 'Из кэша: ' + cache[objectInCache].result;
        }

        let result = func(...args);
        cache.push({hash, result});
        if(cache.length > 5) {
            cache.shift();
        }
        console.log('Вычисляем: ' + result);
        return 'Вычисляем: ' + result;
    }
  return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null; 
    wrapper.count = 0;
    wrapper.allCount = 0;
     function wrapper(...args) {
        if(!timeoutId) {
            func(...args);
            wrapper.count++;
        }
        clearTimeout(timeoutId);
        timeoutId = setTimeout (() => {timeoutId !== null; wrapper.count++}, delay);
        if(!timeoutId) {
        }
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {timeoutId !== null; func(...args); wrapper.count++}, delay);
        wrapper.allCount++;
    }
    return wrapper
}
