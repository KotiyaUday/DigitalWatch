let intervalId = null;
    function start()
    {
        document.getElementById("start").disabled = true;
        document.getElementById("start").style.borderColor =  'gray';
        document.getElementById("start").style.color =  'gray';
        document.getElementById("start").style.pointerEvents = 'none';

        document.getElementById("restart").disabled = false;
        document.getElementById("restart").style.borderColor =  'white';
        document.getElementById("restart").style.color =  'white';
        document.getElementById("restart").style.pointerEvents = 'auto';

        document.getElementById("stop").disabled = false;
        document.getElementById("stop").style.borderColor =  'white';
        document.getElementById("stop").style.color =  'white';
        document.getElementById("stop").style.pointerEvents = 'auto';

        let time = document.getElementById('hms').innerText;
        let intTime = time.split(':');

        updateTime(parseInt(intTime[0]),parseInt(intTime[1]),parseInt(intTime[2]));
    }

    function restart() 
    {
        document.getElementById("restart").disabled = true;
        document.getElementById("restart").style.borderColor =  'gray';
        document.getElementById("restart").style.color =  'gray';
        document.getElementById("restart").style.pointerEvents = 'none';

        document.getElementById("stop").disabled = true;
        document.getElementById("stop").style.borderColor =  'gray';
        document.getElementById("stop").style.color =  'gray';
        document.getElementById("stop").style.pointerEvents = 'none';

        document.getElementById("start").disabled = false;
        document.getElementById("start").style.borderColor =  'white';
        document.getElementById("start").style.color =  'white';
        document.getElementById("start").style.pointerEvents = 'auto';

        clearInterval(intervalId);
        document.getElementById("hms").innerText = '00:00:00';
    }

    function stop()
    {
        document.getElementById("restart").disabled = false;
        document.getElementById("restart").style.borderColor =  'white';
        document.getElementById("restart").style.color =  'white';
        document.getElementById("restart").style.pointerEvents = 'auto';

        document.getElementById("stop").disabled = true;
        document.getElementById("stop").style.borderColor =  'gray';
        document.getElementById("stop").style.color =  'gray';
        document.getElementById("stop").style.pointerEvents = 'none';

        document.getElementById("start").disabled = false;
        document.getElementById("start").style.borderColor =  'white';
        document.getElementById("start").style.color =  'white';
        document.getElementById("start").style.pointerEvents = 'auto';

        clearInterval(intervalId);
    }

    function updateTime(m,s,mil)
    {
        let milsec = mil;
        let sec = s;
        let min = m;

        intervalId = setInterval(()=>{
            milsec += 1;
            if(milsec >= 100)
            {
                sec += 1;
                milsec = 0;
                if(sec >= 60)
                {
                    min += 1;
                    sec = 0;
                }
            }

            if(sec >= 10)
            {
                if(min >= 10)
                {
                    document.getElementById("hms").innerText = `${min}:${sec}:${milsec}`;
                }
                else
                {
                    document.getElementById("hms").innerText = `0${min}:${sec}:${milsec}`;
                }
            }
            else
            {
                if(min >= 10)
                {
                    document.getElementById("hms").innerText = `${min}:0${sec}:${milsec}`;
                }
                else
                {
                    document.getElementById("hms").innerText = `0${min}:0${sec}:${milsec}`;
                }
            }
        },10);
    }
    
    function set()
    {
        document.getElementById("restart").disabled = true;
        document.getElementById("restart").style.borderColor =  'gray';
        document.getElementById("restart").style.color =  'gray';
        document.getElementById("restart").style.pointerEvents = 'none';

        document.getElementById("stop").disabled = true;
        document.getElementById("stop").style.borderColor =  'gray';
        document.getElementById("stop").style.color =  'gray';
        document.getElementById("stop").style.pointerEvents = 'none'

        setTimeout(()=>{
            document.getElementById("load").style.display='none';
            document.getElementById("main").style.display='flex';
            document.getElementById("header").style.display='flex';
            document.getElementById("btn").style.display='flex';
        },1000);
    }
    set();